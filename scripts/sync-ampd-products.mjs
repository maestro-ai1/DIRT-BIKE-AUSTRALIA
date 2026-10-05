// scripts/sync-ampd-products.mjs
// Pulls the current Ampd Bros range from ampdbros.com.au (public Shopify data + product pages), downloads product
// images to public/images/ampd/, and writes src/config/products-ampd.ts.
// Re-run any time to refresh prices, stock and specs:   node scripts/sync-ampd-products.mjs
// Only facts published on ampdbros.com.au are used. Marketing copy is NOT copied: descriptions are composed from specs.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://ampdbros.com.au';
const UA = { 'user-agent': 'Mozilla/5.0 (EDBA catalogue sync)' };
const IMAGES_PER_PRODUCT = 4;

// Current-range bikes that have a published spec table (or a model spec page). Older Series 4 / clearance models are left out.
const INCLUDE = [
  'ace-adventure-fat-tyre-electric-bike', 'ace-pro-dual-suspension-fat-tyre-electric-bike', 'ace-x-demon-dual-motor-fat-electric-bike',
  'ace-mini-electric-fat-bike', 'ace-x-mini-pro-electric-bike',
  'chubbie-v3-electric-beach-cruiser', 'chubbie-s-v3-electric-beach-cruiser',
  'the-original-stubbie-fat-tyre-electric-bike', 'the-original-stubbie-s-electric-bike',
  'riptide-electric-beach-cruiser-bike', 'riptide-s-electric-beach-cruiser-bike',
  'evo-racing-16-electric-bike', 'evo-racing-18-kids-electric-bike', 'evo-racing-20-electric-bike',
  'lil-rippa-16-kids-fat-electric-bike', 'rfn-warrior-kids-sx-e500-electric-bike',
  'ares-rally-endurance-road-electric-dirt-bike',
];

// Specs for the three products whose pages have no spec table. Source: the supplier's model spec pages and product page text.
const OVERRIDES = {
  'lil-rippa-16-kids-fat-electric-bike': {
    specs: { motorPeak: '500W brushless hub motor', battery: '36V 13Ah (468Wh) lithium, removable', range: '40 km or up to 120 minutes (Eco mode)', topSpeed: '35 km/h (off-road only, can be limited)', weight: '20.58 kg', wheelSize: '16 x 4.0" fat off-road tyres', brakes: 'Hydraulic disc, 180mm rear / 160mm front', maxLoading: '100 kg', seatHeight: '560 mm', riderAge: 'Recommended for riders 95cm+' },
    warrantyKey: 'kids', legal: 'Designed and intended strictly for private property, off-road use.',
  },
  'rfn-warrior-kids-sx-e500-electric-bike': {
    specs: { motorPeak: '500W (700W peak), chain drive', battery: '36V 7.5Ah lithium, hot-swappable', range: 'Up to 25 km or 1h 15min run time', topSpeed: 'Up to 35 km/h (speed limit adjustable)', wheelSize: '14 x 2.4" all-terrain tyres' },
    warrantyKey: 'rfn', legal: 'Children’s bike for supervised riding. Check the manual and your state rules before riding anywhere other than private property.',
  },
  'ares-rally-endurance-road-electric-dirt-bike': {
    specs: { motorPeak: '5kW rated, 12kW peak', battery: '74V 43Ah (3,182Wh) lithium, removable', range: 'Up to 100 km (cruising at 40 km/h)', topSpeed: '60 km/h (up to 80 km/h with optional 48T sprocket)', torque: '270 N.m at the rear wheel (13-58T sprocket)', suspension: 'Fully adjustable front fork, 200mm travel', wheelSize: '18/21" motorcycle-grade wheels' },
    warrantyKey: 'rfn', legal: 'Sold by the supplier as the road variant of the RFN Ares Rally. Registration and licence rules depend on your state, so confirm them before riding on public roads.',
  },
};

const WARRANTY = {
  adult: '2-year Ampd Bros nationwide warranty on adult e-bikes (6 months if used for hire or commercial purposes)',
  kids: '1-year Ampd Bros nationwide warranty on kids e-bikes',
  rfn: '1-year or 3,000 km RFN warranty (supplier terms)',
};
const SHIPPING = 'Supplied and shipped by Ampd Bros from Burleigh Heads on the Gold Coast, QLD. Bikes travel by Toll Ipec with a signature required on delivery. Supplier delivery estimates for bikes: QLD 2-6 days, NSW 5-10 days, VIC/SA/ACT 6-14 days, NT 6-14 days, WA/TAS up to 16 days.';
const CONFIG_NOTE = 'Available as a 250W road-compliant model (pedal assist limited to 25 km/h, throttle limited to 6 km/h walk assist) or as an off-road model for private property only. The model is chosen at purchase and cannot be modified later. Add your frame, colour and road-compliant or off-road choice in the order note at checkout.';

const dec = (s) => s.replace(/&amp;/g, '&').replace(/&#39;|&rsquo;/g, "'").replace(/&nbsp;/g, ' ').replace(/&quot;/g, '"');
const lines = (h) => h.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<(br|\/p|\/li|\/h\d|\/tr|\/td|\/th|\/div|\/dt|\/dd)[^>]*>/gi, '\n').replace(/<[^>]+>/g, ' ').split('\n').map((s) => dec(s).replace(/[ \t]+/g, ' ').trim()).filter(Boolean);
const get = async (u, tries = 3) => { for (let i = 0; i < tries; i++) { try { const r = await fetch(u, { headers: UA }); if (r.ok) return r; } catch { /* retry */ } await new Promise((r) => setTimeout(r, 800)); } throw new Error('fetch failed ' + u); };
const camel = (k) => k.toLowerCase().replace(/[^a-z0-9]+(.)/g, (_, c) => c.toUpperCase());
const money = (n) => Math.round(parseFloat(n));

async function loadProducts() {
  let all = [];
  for (let page = 1; page < 6; page++) {
    const j = await (await get(`${BASE}/products.json?limit=250&page=${page}`)).json();
    if (!j.products?.length) break;
    all = all.concat(j.products);
  }
  return all;
}

function parseSpecs(html) {
  const L = lines(html);
  const i = L.findIndex((l) => /^BIKE SPECIFICATIONS$/i.test(l));
  const spec = {};
  if (i >= 0) {
    const seg = [];
    for (let j = i + 1; j < L.length && seg.length < 60 && !/^(IN STOCK|OUT OF STOCK|PRE-?ORDER|Ships|CLICK|\+ Add to Cart|Buy now)/i.test(L[j]); j++) seg.push(L[j]);
    for (let k = 0; k + 1 < seg.length; k += 2) spec[seg[k]] = seg[k + 1];
  }
  const text = L.join(' ');
  const hasConfig = /Road Compliant/i.test(text) && /Off Road Model/i.test(text);
  const speed = (text.match(/\bSPEED\s+(\d{1,3})\s?km\/h/) || [])[1];
  return { spec, hasConfig, speed };
}

let sharp = null;
try { sharp = (await import('sharp')).default; } catch { /* optional: images are kept as downloaded without it */ }
async function optimise(dest) {
  if (!sharp || fs.statSync(dest).size < 300 * 1024) return;
  try {
    // Read into memory first so the file is not locked while it is overwritten (Windows).
    const buf = await sharp(fs.readFileSync(dest)).resize({ width: 1100, withoutEnlargement: true }).jpeg({ quality: 80, mozjpeg: true }).toBuffer();
    fs.writeFileSync(dest, buf);
  } catch { /* keep the original file if it cannot be optimised */ }
}
async function downloadImage(src, dest) {
  if (fs.existsSync(dest) && fs.statSync(dest).size > 5000) { await optimise(dest); return 'cached'; }
  const url = src + (src.includes('?') ? '&' : '?') + 'width=1200&format=jpg';
  const r = await get(url);
  fs.writeFileSync(dest, Buffer.from(await r.arrayBuffer()));
  await optimise(dest);
  return 'downloaded';
}

function kindOf(h) {
  if (/evo-racing|lil-rippa|rfn-warrior/.test(h)) return 'kids';
  if (/ares-rally/.test(h)) return 'dirt';
  if (/chubbie|riptide/.test(h)) return 'cruiser';
  if (/mini/.test(h)) return 'mini';
  return 'fat';
}

async function main() {
  const all = await loadProducts();
  const byHandle = new Map(all.map((p) => [p.handle, p]));
  fs.mkdirSync(path.join(root, 'public/images/ampd'), { recursive: true });
  const out = [], report = [];
  for (const handle of INCLUDE) {
    const p = byHandle.get(handle);
    if (!p) { report.push({ handle, status: 'MISSING on supplier site' }); continue; }
    const ov = OVERRIDES[handle];
    let spec = {}, hasConfig = false, speed;
    if (!ov) { const parsed = parseSpecs(await (await get(`${BASE}/products/${handle}`)).text()); spec = parsed.spec; hasConfig = parsed.hasConfig; speed = parsed.speed; }
    const kind = kindOf(handle);
    const avail = p.variants.filter((v) => v.available);
    if (!avail.length) { report.push({ handle, status: 'SOLD OUT, skipped' }); continue; }
    const price = Math.min(...avail.map((v) => money(v.price)));
    const cmp = Math.max(...p.variants.map((v) => money(v.compare_at_price || 0)));
    const power = spec['Continuous Power'] || spec['Motor Size'] || '';
    const batt = spec['Battery'];
    const specs = {};
    if (ov) Object.assign(specs, ov.specs);
    else {
      if (power) specs.motorPeak = /off road/i.test(power) ? power.replace(/\s*Off Road Only/i, ' (off-road only)') : `${power}${kind === 'kids' ? ' brushless motor' : ' continuous'}`;
      if (batt) specs.battery = batt;
      if (spec['Range']) specs.range = /^\d/.test(spec['Range']) ? `Up to ${spec['Range']}` : spec['Range'];
      if (hasConfig) specs.topSpeed = '25 km/h pedal assist (road-compliant model)';
      else if (speed) specs.topSpeed = `${speed} km/h${kind === 'kids' ? ' (off-road, private property)' : ''}`;
      for (const [k, v] of Object.entries({ wheelSize: spec['Wheel Size'], frame: spec['Frame'], motorTorque: spec['Motor Torque'], transmission: spec['Transmission'], suspension: spec['Suspension'], seatHeight: spec['Seat Height'], maxLoading: spec['Max Loading'] })) if (v && v !== 'N/A') specs[k] = v;
      if (spec['Brakes']) specs.brakes = `${spec['Brakes']}${spec['Rotors'] ? `, ${spec['Rotors']} rotors` : ''}`;
      if (spec['Parental Controls'] === 'Yes') specs.parentalControls = 'Yes';
    }
    const colours = [...new Set(p.variants.map((v) => v.title.split('/').pop().trim()))].filter(Boolean);
    const frames = [...new Set(p.variants.map((v) => (v.title.includes('/') ? v.title.split('/')[0].replace(/\|/g, '').trim() : '')))].filter(Boolean);
    const realColours = colours.filter((c) => !/default title/i.test(c));
    if (frames.length || realColours.length) specs.options = `${frames.length ? `Frames: ${frames.join(', ')}. ` : ''}${realColours.length ? `Colours: ${realColours.join(', ')}.` : ''}`.trim();
    const warrantyKey = ov?.warrantyKey || (kind === 'kids' ? 'kids' : 'adult');
    specs.warranty = WARRANTY[warrantyKey];
    const legal = ov?.legal || (hasConfig ? CONFIG_NOTE : kind === 'kids' ? 'Designed for off-road, private property use only. Supervise children and check the manual and your state rules.' : 'See the supplier specifications. Check your state rules before riding on public roads.');
    specs.legal = legal;
    const brand = /^(rfn|ares)/.test(handle) ? 'RFN' : 'Ampd Bros';
    const title = dec(p.title).replace(/®/g, '');
    const nameSpecs = [batt || specs.battery?.match(/\d+V \d+(\.\d+)?Ah/)?.[0], power && !/^dual/i.test(power) ? power.replace(/ Off Road Only/i, '') : ''].filter(Boolean).join(' / ');
    const name = nameSpecs ? `${title} (${nameSpecs})` : title;
    const kindLabel = { fat: 'fat tyre electric bike', cruiser: 'electric beach cruiser', mini: 'mini electric fat bike', kids: 'kids electric bike', dirt: 'electric dirt bike' }[kind];
    const bits = [specs.motorPeak && `${specs.motorPeak}`, specs.battery, specs.range && `range ${specs.range.toLowerCase()}`].filter(Boolean);
    const shortDescription = `${brand} ${kindLabel} with ${bits.join(', ')}.`;
    const description = [
      `The ${title} is ${/^[aeiou]/i.test(kindLabel) ? 'an' : 'a'} ${kindLabel} supplied by ${brand}.`,
      bits.length ? `Key specifications: ${bits.join('; ')}.` : '',
      [specs.wheelSize && `wheels ${specs.wheelSize}`, specs.suspension && `suspension ${specs.suspension}`, specs.brakes && `brakes ${specs.brakes}`, specs.maxLoading && `maximum load ${specs.maxLoading}`].filter(Boolean).length ? `Also listed: ${[specs.wheelSize && `wheels ${specs.wheelSize}`, specs.suspension && `suspension ${specs.suspension}`, specs.brakes && `brakes ${specs.brakes}`, specs.maxLoading && `maximum load ${specs.maxLoading}`].filter(Boolean).join('; ')}.` : '',
      specs.options || '',
      hasConfig ? CONFIG_NOTE : specs.legal,
      `Warranty: ${specs.warranty}.`,
    ].filter(Boolean).join(' ');
    const badge = cmp > price ? 'On Sale' : { fat: 'Fat Tyre E-Bike', cruiser: 'Beach Cruiser', mini: 'Mini Fat Bike', kids: 'Kids E-Bike', dirt: 'Road Endurance' }[kind];
    const category = kind === 'kids' ? 'kids-ebikes' : kind === 'dirt' ? 'dirt-bikes' : 'fat-tyre-ebikes';
    // images
    const imgs = [];
    for (let i = 0; i < Math.min(IMAGES_PER_PRODUCT, p.images.length); i++) {
      const rel = `/images/ampd/${handle}-${i + 1}.jpg`;
      try { await downloadImage(p.images[i].src, path.join(root, 'public', rel)); imgs.push(rel); } catch (e) { report.push({ handle, status: `image ${i + 1} failed` }); }
    }
    if (!imgs.length) { report.push({ handle, status: 'NO IMAGES, skipped' }); continue; }
    out.push({ slug: handle, name, brand, price, ...(cmp > price ? { compareAtPrice: cmp } : {}), category, badge, featured: false, shortDescription, description, specs, images: imgs, inStock: true,
      source: 'ampd-bros', warranty: specs.warranty, shipping: SHIPPING, legalNote: legal, supplierUrl: `${BASE}/products/${handle}` });
    report.push({ handle, status: 'ok', name, price, cmp, images: imgs.length, specFields: Object.keys(specs).length, config: hasConfig });
  }
  const ts = `// src/config/products-ampd.ts
// GENERATED by scripts/sync-ampd-products.mjs from ampdbros.com.au. Re-run the script to refresh prices, stock and specs.
// Do not hand-edit prices here: change them at the source or in the script, then re-run.
import type { ProductItem } from './site';

export interface AmpdProduct extends ProductItem {
  source: 'ampd-bros';
  warranty: string;
  shipping: string;
  legalNote: string;
  supplierUrl: string;
}

export const AMPD_SYNCED_AT = ${JSON.stringify(new Date().toISOString().slice(0, 10))};

export const AMPD_PRODUCTS: AmpdProduct[] = ${JSON.stringify(out, null, 2)};

export const AMPD_BRANDS = [
  {
    slug: 'ampd-bros',
    name: 'Ampd Bros',
    country: 'Australia (Gold Coast)',
    origin: 'Australian family-owned electric bike brand established on the Gold Coast in 2019: fat tyre e-bikes, beach cruisers and kids electric bikes.',
    popularModels: ['ACE Adventure', 'Chubbie', 'Stubbie', 'Lil Rippa'],
    badge: 'Fat Tyre E-Bikes',
  },
];

export const AMPD_CATEGORIES = [
  { slug: 'fat-tyre-ebikes', name: 'Fat Tyre Electric Bikes', title: 'Electric Fat Tyre Bikes, Beach Cruisers & Mini Bikes', description: 'Fat tyre electric bikes, beach cruisers and mini fat bikes from Ampd Bros: ACE, Chubbie, Stubbie and Riptide.', image: ${JSON.stringify(out[0]?.images[0] || '')} },
  { slug: 'kids-ebikes', name: 'Kids Electric Bikes', title: 'Kids Electric Bikes: EVO Racing, Lil Rippa & RFN Warrior', description: 'Electric bikes for kids from Ampd Bros and RFN, with adjustable speed limits and hydraulic brakes.', image: ${JSON.stringify(out.find((p) => p.category === 'kids-ebikes')?.images[0] || '')} },
];
`;
  fs.writeFileSync(path.join(root, 'src/config/products-ampd.ts'), ts);
  fs.writeFileSync(path.join(root, 'docs/ampd-sync-report.json'), JSON.stringify(report, null, 2));
  console.log(report.map((r) => `${r.status.padEnd(10)} ${r.handle.padEnd(52)} ${r.price ? '$' + r.price : ''} imgs ${r.images ?? ''} specs ${r.specFields ?? ''} ${r.config ? 'config' : ''}`).join('\n'));
  console.log(`\nwrote ${out.length} products`);
}
main().catch((e) => { console.error(e); process.exit(1); });
