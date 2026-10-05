// lib/productSeo.ts
// Product tags (15+ per product) and product Q&A (8+ per product).
// Allocation rule: Transactional + Commercial Semrush keywords -> product tags and product Q&A.
// Every fact in an answer comes from the product's own data (price, specs) or from site policy
// (12-month warranty, free freight over $1,500, 10% crypto/PayID discount, Mittagong NSW dispatch). Nothing is invented.
// Tag keyword pools below are all taken from the Semrush AU export (25 Sep 2026); volumes are in comments.

import { SHOP } from '@/src/config/site';

export interface ProductFaq { question: string; answer: string; }
export interface ProductTag { label: string; href?: string; }

interface P {
  slug: string; name: string; brand: string; category: string; price: number; compareAtPrice?: number;
  specs?: Record<string, string>; shortDescription?: string; description?: string;
  // Set on products supplied by Ampd Bros (see src/config/products-ampd.ts): their own warranty, shipping and legality wording is used.
  source?: string; warranty?: string; shipping?: string; legalNote?: string;
}

export type ProductKind = 'offroad' | 'motocross' | 'kids' | 'ebike' | 'emoto' | 'moped' | 'battery' | 'charger' | 'part' | 'fattyre' | 'cruiser' | 'mini';

export function productKind(p: P): ProductKind {
  if (/razor|ktm-|husqvarna|oset|edba-moto|torrot|x160|evo-racing|lil-rippa|rfn-warrior/.test(p.slug)) return 'kids';
  if (/^(chubbie|riptide)/.test(p.slug)) return 'cruiser';
  if (/mini/.test(p.slug) && /^ace-/.test(p.slug)) return 'mini';
  if (/^(ace-|the-original-stubbie|stubbie|taipan)/.test(p.slug)) return 'fattyre';
  if (/^rtr-/.test(p.slug)) return 'ebike';
  if (/super73/.test(p.slug)) return 'emoto';
  if (/niu|soco/.test(p.slug)) return 'moped';
  if (p.category === 'motocross') return 'motocross';
  if (p.category === 'accessories') return /battery|pack/.test(p.slug) ? 'battery' : 'charger';
  if (p.category === 'parts-upgrades') return 'part';
  return 'offroad';
}

// ---- Keyword pools (Semrush AU). T = Transactional label, C = Commercial label, * = no label (10-49/mo, inferred) ----
const GENERIC_EBIKE_T = ['electric bikes for sale', 'e-bikes for sale', 'electric bike price', 'buy electric bike australia']; // Transactional: 1,600 / 320 / 480 / 90
const POOL: Record<ProductKind, string[]> = {
  fattyre: [
    'electric fat bike', // C 720
    'best fat tyre electric bike australia', // C 320
    'fat bike australia', // C 210
    'electric fat tyre bike', // C 210
    'fat tyre electric bike australia', // C 140
    'fat tyre ebike australia', // C 140
    'fat bikes australia', // C 110
    'fat tyre bikes australia', // C 110
    'electric fat bike australia', // C 90
    'fat tyre e bikes australia', // C 90
    ...GENERIC_EBIKE_T,
    'electric bike australia', // C 1,900
    'e bike australia', // C 1,900
    'e bike off road', // C 320
    'off road ebikes', // C 320
    'best ebike australia', // C 720
  ],
  cruiser: [
    'e bike cruiser', // C 390
    'cruiser electric bicycle', // C 110
    'ebikes cruiser', // C 110
    'electric cruiser bike australia', // C 90
    'cruiser e-bike', // C 90
    'e-bike cruiser', // C 90
    'cruiser ebikes', // C 90
    'cruiser electric bikes', // C 90
    'cruiser e bikes australia', // C 70
    'beach cruiser for sale', // T 50
    ...GENERIC_EBIKE_T,
    'electric bike australia', // C 1,900
    'electric fat bike', // C 720
    'step through electric bike australia', // C 70
  ],
  mini: [
    'mini e bike', // C 1,000
    'electric mini bike', // C 590
    'mini electric bike', // C 590
    'mini ebike', // C 590
    'mini e bikes', // C 210
    'mini ebikes', // C 140
    'electric mini bikes', // C 110
    ...GENERIC_EBIKE_T,
    'electric bike australia', // C 1,900
    'e bike australia', // C 1,900
    'electric fat bike', // C 720
    'fat tyre electric bike australia', // C 140
  ],
  offroad: [
    'electric dirt bike', // C 6,600
    'electric dirt bike australia', // C 1,300
    'electric dirt bikes for sale', // T 110
    'electric dirt bike for sale', // T 170
    'buy electric dirt bike', // T 40
    'electric dirt bike for adults', // C 320
    'off road electric bike', // C 210
    'electric off road bike', // C 590
    'electric trail bike', // C 260
    'e dirt bike', // C 1,000
    'electric dirtbike', // C 1,000
    'electric dirt bike motorcycle', // C 1,300
    'best electric dirt bike australia', // C 110
    'fast electric dirt bike', // C 90
    'electric enduro dirt bike', // * 30
    'electric motorbike', // C 6,600
  ],
  motocross: [
    'electric motocross bike', // C 720
    'electric motocross motorcycle', // C 880
    'e motocross bike', // C 260
    'electric mx bike', // C 90
    'electric motocross dirt bikes', // C 50
    'electric dirt bike', // C 6,600
    'electric dirt bikes for sale', // T 110
    'electric dirt bike for sale', // T 170
    'electric dirt bike australia', // C 1,300
    'buy electric dirt bike', // T 40
    'fast electric dirt bike', // C 90
    'best electric dirt bike', // C 170
    'electric motorbike', // C 6,600
    'electric motorcycle', // C 1,900
    'electric motorcycle australia', // C 1,900
    'electric motocross bike for sale', // * 20
  ],
  kids: [
    'kids electric bike', // C 4,400
    'childs electric motorcycle', // C 2,400
    'kids electric dirt bike', // C 590
    'childrens electric dirt bike', // C 1,300
    'kids electric motorbike', // C 1,300
    'childrens electric motorbike', // C 1,300
    'children electric bike', // C 1,000
    'electric dirt bike for kids', // C 320
    'electric motorbike kids', // C 590
    'electric bike kids', // C 590
    'kids ebike', // C 650
    'youth electric dirt bike', // C 40
    'youth electric bike', // C 70
    'childrens electric bikes', // I 480
    'kids dirt bike for sale', // * 20
    'buy kids dirt bike', // * 30
  ],
  ebike: [
    'rtr ebike', // C 880
    'rtr e bike', // C 1,600
    'rtr electric bike', // C 320
    'rtr bike', // C 320
    'electric bikes for sale', // T 1,600
    'e-bikes for sale', // T 320
    'electric bike price', // T 480
    'buy electric bike australia', // T 90
    'electric bike australia', // C 1,900
    'e bike australia', // C 1,900
    'best ebike australia', // C 720
    'best electric bike australia', // C 1,300
    'road legal electric bike', // C 110
    'street legal electric bike', // C 170
    'electric bike', // C 27,100
    'e bike', // C 22,200
  ],
  emoto: [
    'electric bike australia', // C 1,900
    'electric bikes for sale', // T 1,600
    'electric bike price', // T 480
    'buy electric bike australia', // T 90
    'electric trail bike', // C 260
    'off road electric bikes', // C 480
    'e bike off road', // C 320
    'electric off road bike', // C 590
    'electric dirt bike', // C 6,600
    'electric motorbike', // C 6,600
    'electric motorbike australia', // C 1,300
    'electric bike', // C 27,100
    'e bike', // C 22,200
    'electric bikes australia', // C 1,900
    'fat tyre electric bike australia', // C 140
    'best electric bike australia', // C 1,300
  ],
  moped: [
    'electric moped australia', // C 1,000
    'electric mopeds australia', // C 110
    'electric motorcycle moped', // C 1,000
    'electric moped bike', // C 390
    'moped prices', // T 70
    'electric motorbike', // C 6,600
    'electric motorbike australia', // C 1,300
    'electric motorcycle', // C 1,900
    'electric motorcycle australia', // C 1,900
    'electric motorcycle for sale', // T 260
    'electric motorbikes for sale', // T 210
    'electric motorbike for sale', // T 140
    'buy electric motorbike', // T 50
    'road legal electric motorbike', // C 110
    'road legal electric motorcycle', // C 90
    'electric motor bike', // C 1,000
  ],
  battery: [
    'electric dirt bike battery', // * 20
    'ebike battery australia', // * 40
    'e bike parts australia', // T 90
    'electric bike parts australia', // C 110
    'electric dirt bike parts', // * 20
    'electric dirt bike upgrades', // * 10
    'electric dirt bike', // C 6,600
    'electric dirt bike australia', // C 1,300
    'electric dirt bikes for sale', // T 110
    'electric dirt bike for sale', // T 170
    'electric motorbike', // C 6,600
    'off road electric bike', // C 210
  ],
  charger: [
    'e bike parts australia', // T 90
    'electric bike parts australia', // C 110
    'electric dirt bike parts', // * 20
    'ebike battery australia', // * 40
    'electric dirt bike battery', // * 20
    'electric dirt bike', // C 6,600
    'electric dirt bike australia', // C 1,300
    'electric dirt bikes for sale', // T 110
    'electric dirt bike for sale', // T 170
    'electric motorbike', // C 6,600
    'off road electric bike', // C 210
    'electric dirt bike upgrades', // * 10
  ],
  part: [
    'e bike parts australia', // T 90
    'electric bike parts australia', // C 110
    'electric dirt bike parts', // * 20
    'electric dirt bike upgrades', // * 10
    'ebike battery australia', // * 40
    'electric dirt bike', // C 6,600
    'electric dirt bike australia', // C 1,300
    'electric dirt bikes for sale', // T 110
    'electric dirt bike for sale', // T 170
    'electric motorbike', // C 6,600
    'off road electric bike', // C 210
    'electric off road bike', // C 590
  ],
};
export const TAG_POOLS = POOL;

const HREF: Record<ProductKind, string> = {
  fattyre: '/electric-fat-tyre-bikes/', cruiser: '/electric-fat-tyre-bikes/', mini: '/electric-mini-bikes/',
  offroad: '/electric-dirt-bikes/', motocross: '/electric-dirt-bikes/', kids: '/electric-motor-bikes/kids/', ebike: '/electric-bikes/',
  emoto: '/electric-bikes/', moped: '/electric-motor-bikes/commuter-mopeds/', battery: '/accessories/', charger: '/accessories/', part: '/accessories/',
};
const SPECIAL_HREF: Array<[RegExp, string]> = [
  [/mini/, '/electric-mini-bikes/'],
  [/fat |fat$|cruiser/, '/electric-fat-tyre-bikes/'],
  [/^electric bikes for sale$|^e-bikes for sale$|^electric bike price$|^buy electric bike/, '/electric-bikes/'],
  [/^rtr /, '/electric-motor-bikes/rtr-ebike/'],
  [/moped/, '/electric-motor-bikes/commuter-mopeds/'],
  [/motorbike|motorcycle|motor bike/, '/electric-motor-bikes/'],
  [/for sale|buy electric dirt bike|electric dirt bikes? (for|australia)/, '/shop/'],
];

export function shortName(name: string): string {
  return name.replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s+/g, ' ').trim();
}
function hash(s: string): number { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; }
const spec = (p: P, k: string): string | undefined => (p.specs as Record<string, string> | undefined)?.[k];

// Noun tags describing what a part/accessory is, matched on slug.
const NOUNS: Array<[RegExp, string[]]> = [
  [/controller/, ['electric dirt bike controller', 'ebike controller upgrade', 'plug and play controller']],
  [/fork/, ['electric dirt bike fork', 'inverted fork upgrade', 'electric bike suspension']],
  [/brake|rotor/, ['electric dirt bike brakes', 'brake upgrade', 'hydraulic brake kit']],
  [/wheel/, ['electric dirt bike wheels', 'wheel conversion kit', 'wheelset upgrade']],
  [/chain|sprocket/, ['electric dirt bike chain', 'rear sprocket', 'drivetrain upgrade']],
  [/skid|footpeg|riser|handguard|grips/, ['bike protection', 'electric dirt bike accessories', 'handlebar and controls']],
  [/headlight|light/, ['electric dirt bike headlight', 'LED light kit', 'night riding lights']],
  [/tyre|tire/, ['electric dirt bike tyres', 'off-road tyre combo', 'dirt bike tyres']],
  [/ramp/, ['loading ramp', 'transport ramp', 'electric dirt bike transport']],
  [/battery|pack/, ['lithium battery pack', 'battery upgrade', 'battery replacement']],
  [/charger/, ['fast charger', 'electric dirt bike charger', 'smart charger']],
  [/adapter|connector|anderson|qs8/, ['battery connector', 'Anderson to QS8', 'high-current cable']],
  [/backpack|harness/, ['battery carry bag', 'battery backpack', 'battery transport']],
];

export function getProductTags(p: P): ProductTag[] {
  const kind = productKind(p);
  const short = shortName(p.name);
  const out: ProductTag[] = [];
  const seen = new Set<string>();
  const add = (label: string, href?: string) => {
    const key = label.toLowerCase();
    if (!label || seen.has(key)) return;
    seen.add(key);
    out.push({ label, href });
  };
  const vehicle = !['battery', 'charger', 'part'].includes(kind);
  // 1. Product-name tags (match the product exactly)
  add(short);
  add(`${short} Australia`);
  add(`${short} for sale`);
  add(`buy ${short}`);
  add(`${short} price`);
  add(`${p.brand} Australia`,`/shop/?brand=${encodeURIComponent(p.brand.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''))}`);
  // 2. Spec tags (from the product's own specs)
  const batt = spec(p, 'battery') || spec(p, 'voltage') || '';
  const v = batt.match(/(\d{2,3})\s?V/i)?.[1];
  const power = spec(p, 'motorPeak') || spec(p, 'peakPower') || '';
  const kwNum = power.match(/(\d+(?:\.\d+)?)\s*kW/i)?.[1];
  const wNum = power.match(/([\d,]{3,6})\s*Watts?/i)?.[1];
  const watts = kwNum ? Math.round(parseFloat(kwNum) * 1000) : wNum ? parseInt(wNum.replace(/,/g, ''), 10) : undefined;
  const powerLabel = watts ? (watts < 1000 ? watts + 'W' : (watts / 1000) + 'kW') : undefined;
  const noun = kind === 'moped' ? 'electric moped' : kind === 'ebike' ? 'electric bike' : kind === 'kids' ? 'kids electric bike' : kind === 'emoto' || kind === 'fattyre' || kind === 'cruiser' ? 'electric bike' : kind === 'mini' ? 'mini electric bike' : kind === 'battery' ? 'lithium battery' : kind === 'offroad' || kind === 'motocross' ? 'electric dirt bike' : '';
  if (v && noun) add(`${v}V ${noun}`, HREF[kind]);
  if (powerLabel && vehicle && noun) add(`${powerLabel} ${noun}`, HREF[kind]);
  const age = spec(p, 'riderAge')?.match(/Ages?\s*([\d–\-+]+)/i)?.[1];
  if (age && kind === 'kids') add(`kids electric bike ages ${age}`, HREF.kids);
  // 3. Noun tags for parts and accessories
  if (!vehicle) {
    for (const [re, tags] of NOUNS) if (re.test(p.slug)) tags.forEach((t) => add(t, HREF[kind]));
    const text = `${p.shortDescription || ''} ${p.description || ''}`;
    for (const b of ['Sur-Ron', 'Talaria', 'Segway']) if (text.includes(b)) add(`${b} ${kind === 'battery' ? 'battery upgrade' : kind === 'charger' ? 'charger' : 'parts'}`, HREF[kind]);
  }
  // 4. Semrush keyword tags: rotate through the pool so tag sets differ between products
  const pool = POOL[kind];
  const start = hash(p.slug) % pool.length;
  for (let i = 0; i < pool.length && out.length < 20; i++) {
    const kw = pool[(start + i) % pool.length];
    const special = SPECIAL_HREF.find(([re]) => re.test(kw));
    add(kw, special ? special[1] : HREF[kind]);
  }
  // 5. Guarantee at least 15
  for (const kw of pool) { if (out.length >= 15) break; add(kw, HREF[kind]); }
  return out;
}

// ---------------- Q&A ----------------
const money = (n: number) => `$${n.toLocaleString('en-AU')}`;

export function getProductFaqs(p: P): ProductFaq[] {
  const kind = productKind(p);
  const short = shortName(p.name);
  const price = money(p.price);
  const crypto = money(Math.round(p.price * (1 - SHOP.cryptoDiscount / 100)));
  const free = p.price > 1500;
  const was = p.compareAtPrice && p.compareAtPrice > p.price ? ` (was ${money(p.compareAtPrice)}, a saving of ${money(p.compareAtPrice - p.price)})` : '';
  const topSpeed = spec(p, 'topSpeed'), range = spec(p, 'range'), battery = spec(p, 'battery'), power = spec(p, 'motorPeak'), weight = spec(p, 'weight');
  const charge = spec(p, 'chargeTime'), torque = spec(p, 'torque'), age = spec(p, 'riderAge'), legal = spec(p, 'legal'), safety = spec(p, 'safety');
  const label: Record<ProductKind, string> = {
    offroad: 'electric dirt bike', motocross: 'electric motocross bike', kids: 'kids electric bike', ebike: 'electric bike', emoto: 'electric bike',
    moped: 'electric moped', battery: 'electric dirt bike battery', charger: 'electric dirt bike charger', part: 'electric dirt bike part',
    fattyre: 'fat tyre electric bike', cruiser: 'electric beach cruiser', mini: 'mini electric bike',
  };
  const out: ProductFaq[] = [];
  const q = (question: string, answer: string) => out.push({ question, answer });

  // Where to buy (transactional)
  const where: Record<ProductKind, string> = {
    offroad: `Where can I buy the ${short} electric dirt bike for sale in Australia?`,
    motocross: `Where can I buy the ${short} electric motocross bike in Australia?`,
    kids: `Where can I buy the ${short} kids electric bike in Australia?`,
    ebike: `Where can I buy the ${short} electric bike in Australia?`,
    emoto: `Where can I buy the ${short} electric bike for sale in Australia?`,
    moped: `Where can I buy the ${short} electric moped in Australia?`,
    battery: `Where can I buy the ${short} electric dirt bike battery in Australia?`,
    charger: `Where can I buy the ${short} electric bike charger in Australia?`,
    part: `Where can I buy the ${short} electric dirt bike part in Australia?`,
    fattyre: `Where can I buy the ${short} fat tyre electric bike in Australia?`,
    cruiser: `Where can I buy the ${short} electric beach cruiser in Australia?`,
    mini: `Where can I buy the ${short} mini electric bike in Australia?`,
  };
  const amp = p.source === 'ampd-bros';
  if (amp) q(where[kind], `The ${short} is for sale at Electric Dirt Bike Australia for ${price} AUD${was}. It is supplied and shipped by Ampd Bros from the Gold Coast, QLD, with delivery Australia-wide. Add it to your cart on this page, or message us on WhatsApp to check stock, frame, colour and delivery to your postcode.`);
  else q(where[kind], `The ${short} is for sale at Electric Dirt Bike Australia for ${price} AUD${was}. We dispatch Australia-wide from our Mittagong NSW 2575 workshop${free ? ', and freight is free because the order is over $1,500 AUD' : ' (free freight applies to orders over $1,500 AUD)'}. Add it to your cart on this page, or message us on WhatsApp to check stock and delivery to your postcode.`);

  // Price
  q(`How much is the ${short} in Australia?`, `The ${short} costs ${price} AUD including GST${was}. Pay with crypto or PayID and you save ${SHOP.cryptoDiscount}%, which brings the price to ${crypto} AUD. A full tax invoice is issued with every order.`);

  // Type-specific
  if (kind === 'offroad' || kind === 'motocross') {
    q(`Is the ${short} a good electric dirt bike for adults?`, `${[power && `The ${short} has ${power}`, battery && `a ${battery} battery`, weight && `and weighs ${weight}`].filter(Boolean).join(', ').replace(', and', ' and')}${power || battery || weight ? '. ' : ''}Check the full specifications on this page against your riding experience and weight. Our workshop team can help you choose between models on WhatsApp.`);
    if (topSpeed) q(`How fast is the ${short}?`, `The ${short} has a listed top speed of ${topSpeed}. Real speed depends on rider weight, terrain, battery charge and the power mode selected.`);
    if (range || battery) q(`How far does the ${short} go on one charge, and how long does it take to charge?`, `${range ? `Listed range is ${range}. ` : ''}${battery ? `The battery is ${battery}. ` : ''}${charge ? `Charge time is ${charge}. ` : ''}Range varies with terrain, rider weight and riding style.`);
    q(`How much power does the ${short} produce?`, `${power ? `The listed motor output is ${power}.` : 'See the specification list on this page for the motor output.'}${torque ? ` Torque is ${torque}.` : ''}${spec(p, 'suspension') ? ` Suspension: ${spec(p, 'suspension')}.` : ''}${spec(p, 'modes') ? ` Modes: ${spec(p, 'modes')}.` : ''}`);
    q(`Is the ${short} road legal in Australia?`, amp && p.legalNote ? p.legalNote : `The ${short} is supplied as an off-road recreational electric bike for private property and designated off-road parks. Whether any bike can be registered for road use depends on your state's rules, so check with your state transport authority (for example TfNSW, VicRoads or Queensland TMR) before riding on public roads.`);
  } else if (kind === 'kids') {
    q(`What age is the ${short} suitable for?`, `${age ? `The listed rider range is ${age}.` : `See the specifications on this page for the recommended rider age and weight.`} Always supervise young riders and check the rider limits before you order. Our team can help you match a kids electric bike to your child's age and size on WhatsApp.`);
    if (topSpeed) q(`How fast does the ${short} go?`, `The ${short} has a listed top speed of ${topSpeed}${spec(p, 'modes') ? ` and ${spec(p, 'modes')}` : ''}.`);
    if (safety) q(`What safety features does the ${short} have?`, `Listed safety features: ${safety}. Always supervise children and use proper protective gear.`);
    if (range || battery) q(`How long does the ${short} run on a charge?`, `${range ? `Listed run time is ${range}. ` : ''}${battery ? `The battery is ${battery}. ` : ''}${weight ? `The bike weighs ${weight}. ` : ''}`.trim());
    q(`Can kids ride the ${short} on the road?`, amp && p.legalNote ? `${p.legalNote} Always supervise children.` : `The ${short} is intended for private property and off-road use under adult supervision. Check your state rules before riding anywhere else.`);
    if (amp && spec(p, 'maxLoading')) q(`What is the maximum rider weight for the ${short}?`, `The listed maximum load is ${spec(p, 'maxLoading')}.${spec(p, 'seatHeight') ? ` Seat height is ${spec(p, 'seatHeight')}.` : ''}`);
  } else if (kind === 'ebike' || kind === 'fattyre' || kind === 'cruiser' || kind === 'mini') {
    q(`Do I need a licence or registration to ride the ${short}?`, `${amp && p.legalNote ? p.legalNote : legal ? `${legal}.` : 'See the specifications on this page.'} Rules can vary by state, so check with your state transport authority and read our electric bike laws guide.`);
    if (range || battery) q(`How far can the ${short} go on a charge?`, `${range ? `Listed range is ${range}. ` : ''}${battery ? `The battery is ${battery}. ` : ''}Real-world range depends on assist level, rider weight and terrain.`);
    q(`What are the key specifications of the ${short} e bike?`, `${[power && `Motor: ${power}`, topSpeed && `Speed: ${topSpeed}`, spec(p, 'gears') && `Gears: ${spec(p, 'gears')}`, weight && `Weight: ${weight}`].filter(Boolean).join('. ')}.`);
    q(`Can I buy the ${short} in Sydney, Melbourne, Brisbane or Perth?`, amp ? `Yes. We deliver to every state, including Sydney, Melbourne, Brisbane, Perth and Adelaide. Supplier delivery estimates for bikes run from 2-6 days (QLD) to up to 16 days (WA/TAS). Message us for a freight quote to your postcode.` : `Yes. We deliver electric bikes to every state from Mittagong NSW, including Sydney, Melbourne, Brisbane, Perth and Adelaide. ${free ? 'Freight is free on this order.' : 'Free freight applies to orders over $1,500 AUD.'}`);
    if (amp && spec(p, 'options')) q(`What frame and colour options does the ${short} come in?`, `${spec(p, 'options')} Message us on WhatsApp to confirm the frame, colour and configuration you want before you order.`);
    if (amp && spec(p, 'maxLoading')) q(`What is the maximum rider weight for the ${short}?`, `The listed maximum load is ${spec(p, 'maxLoading')}.${spec(p, 'seatHeight') ? ` Seat height is ${spec(p, 'seatHeight')}.` : ''}`);
  } else if (kind === 'moped') {
    q(`Is the ${short} road legal in Australia?`, `${legal ? `${legal}.` : 'See the specifications on this page.'} Registration and licence rules vary by state, so check with your state transport authority before you ride.`);
    if (range || battery) q(`What is the range of the ${short}?`, `${range ? `Listed range is ${range}. ` : ''}${battery ? `The battery is ${battery}. ` : ''}Range varies with speed, load and conditions.`);
    q(`What are the specifications of the ${short} electric moped?`, `${[power && `Motor: ${power}`, topSpeed && `Top speed: ${topSpeed}`, weight && `Weight: ${weight}`, spec(p, 'connectivity') && `Connectivity: ${spec(p, 'connectivity')}`].filter(Boolean).join('. ')}.`);
    q(`Do you deliver the ${short} electric motorbike to Sydney, Melbourne, Brisbane and Perth?`, `Yes. We deliver to every state from Mittagong NSW. ${free ? 'Freight is free on this order.' : 'Free freight applies to orders over $1,500 AUD.'}`);
  } else if (kind === 'emoto') {
    q(`Is the ${short} an electric dirt bike or an e bike?`, `The ${short} is a moto-style electric bike${power ? ` with ${power}` : ''}${battery ? ` and a ${battery} battery` : ''}. See the specifications on this page. Rules on where each electric bike can be ridden vary by state, so check with your state transport authority before you ride.`);
    if (range) q(`How far does the ${short} go?`, `Listed range is ${range}. Real range depends on assist mode, terrain and rider weight.`);
    q(`What are the key specs of the ${short} electric bike?`, `${[power && `Motor: ${power}`, battery && `Battery: ${battery}`, topSpeed && `Speed: ${topSpeed}`, spec(p, 'brakes') && `Brakes: ${spec(p, 'brakes')}`].filter(Boolean).join('. ')}.`);
  } else {
    // battery, charger, part: spec-driven
    if (p.shortDescription) q(`What is the ${short} and what does it do?`, p.shortDescription);
    const entries = Object.entries(p.specs || {}).slice(0, 6).map(([k, val]) => `${k.replace(/([A-Z])/g, ' $1').toLowerCase()}: ${val}`);
    q(`What are the specifications of the ${short}?`, entries.length ? `${entries.join('; ')}.` : 'See the specification list on this page.');
    const compat = spec(p, 'compatibility') || spec(p, 'fitment') || spec(p, 'axleFitment');
    q(`Will the ${short} fit my electric dirt bike?`, `${compat ? `Listed compatibility: ${compat}. ` : ''}Compatibility depends on your exact model and year, so message us your bike on WhatsApp and we will confirm fitment before you order.`);
    if (kind === 'battery') q(`How long is the warranty on the ${short}?`, `${spec(p, 'warranty') ? `This battery is listed with a ${spec(p, 'warranty')}. ` : ''}Bikes and battery packs from Electric Dirt Bike Australia also carry our 12-month Australian warranty cover (see the Warranty & Service page).`);
    if (spec(p, 'installation')) q(`How hard is it to install the ${short}?`, `${spec(p, 'installation')}. Our team can help with installation questions on WhatsApp.`);
  }

  // Common closing set (payment, delivery, warranty, returns)
  q(`Can I pay for the ${short} with crypto or PayID?`, `Yes. Choose crypto or PayID at checkout and ${SHOP.cryptoDiscount}% comes off the price, so the ${short} is ${crypto} AUD instead of ${price} AUD.`);
  if (amp) q(`Do you deliver the ${short} Australia-wide?`, `Yes. ${p.shipping}`);
  else q(`Do you deliver the ${short} Australia-wide?`, `Yes. We ship from Mittagong NSW 2575 to every state, including Sydney, Melbourne, Brisbane, Perth and Adelaide. ${free ? 'This order qualifies for free freight (orders over $1,500 AUD).' : 'Free freight applies to orders over $1,500 AUD. See Shipping & Delivery for freight on smaller orders.'}`);
  if (kind === 'battery' || kind === 'charger' || kind === 'part') {
    q(`What are the returns and warranty terms for the ${short}?`, `Our returns policy offers 7-day returns under Australian Consumer Law. Warranty details are on the Warranty & Service page.`);
  } else {
    if (amp) q(`What warranty comes with the ${short}?`, `The ${short} is covered by the ${p.warranty}. The supplier warranty covers manufacturer faults and defects for the original purchaser with a receipt, and excludes wear items such as tyres, tubes, brake pads and seats.`);
    else q(`What warranty comes with the ${short}?`, `Your purchase includes a 12-Month Comprehensive Australian Factory Warranty covering the frame, motor, controller, battery and electrical harness against manufacturer defects. Genuine replacement parts are stocked at our Mittagong NSW workshop.`);
  }
  // Keep copy tidy
  return out.map((f) => ({ question: f.question, answer: f.answer.replace(/\s+/g, ' ').replace(/ \./g, '.').replace(/\.\./g, '.').trim() }));
}
