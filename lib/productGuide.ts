// lib/productGuide.ts
// A short, fact-only buying-guide block for every product page: one H2, three H3 sections, inbound links (category, guides, related products)
// and outbound links to government and reference sites. Every number comes from the product's own specs; nothing is invented.
// Headings use varied Commercial-intent phrasing (no repeated keyword); see lib/productTagPool.ts for the tag keywords.

import { AUTH } from '@/src/config/authority-links';
import { productKind, shortName, type ProductKind } from './productSeo';

interface P {
  slug: string; name: string; brand: string; category: string; price: number; compareAtPrice?: number;
  specs?: Record<string, string>; shortDescription?: string; description?: string;
  source?: string; warranty?: string; shipping?: string; legalNote?: string;
}

export interface ProductGuideData {
  h2: string;
  sections: { h3: string; text: string }[]; // text supports [anchor](url) markdown links
  further: string; // closing paragraph with inbound links
  outbound: { label: string; url: string; source: string }[];
}

const spec = (p: P, k: string): string | undefined => p.specs?.[k];
const money = (n: number) => `$${n.toLocaleString('en-AU')}`;

interface KindCfg {
  h2: (n: string) => string;
  h3: [string, string, string];
  cat: [string, string];
  alt: [string, string];
  blogs: [string, string][]; // [slug, anchor]
  ext: (keyof typeof AUTH)[];
}

const CFG: Record<ProductKind, KindCfg> = {
  pit: { h2: (n) => `${n}: Electric Pit Bike Guide`, h3: ['Power, speed and handling', 'Battery, range and charging', 'Where to ride and what to check first'],
    cat: ['/electric-pit-bikes/', 'electric pit bikes for sale'], alt: ['/electric-dirt-bikes/kids/', 'electric dirt bikes for kids'],
    blogs: [['electric-mini-dirt-bike-australia-guide', 'electric mini dirt bike guide'], ['electric-pit-bike-australia-guide', 'electric pit bike guide']], ext: ['wikiPitBike', 'nswLiIon'] },
  balance: { h2: (n) => `${n}: Kids Electric Balance Bike Guide`, h3: ['Age, size and speed', 'Battery, run time and charging', 'Supervision, gear and where to ride'],
    cat: ['/electric-balance-bikes/', 'electric balance bikes for kids'], alt: ['/electric-dirt-bikes/kids/', 'electric dirt bikes for kids'],
    blogs: [['dirt-bike-for-kids-electric-buying-checklist', 'dirt bike for kids buying checklist'], ['what-age-can-kids-ride-electric-dirt-bikes', 'what age kids can ride electric dirt bikes']], ext: ['nswLiIon', 'accc'] },
  offroad: { h2: (n) => `${n}: Electric Dirt Bike Buying Guide for Australian Riders`, h3: ['Power, speed and handling', 'Battery, range and charging time', 'Where you can ride and what to check first'],
    cat: ['/electric-dirt-bikes/', 'electric dirt bikes for sale'], alt: ['/electric-dirt-bikes/cheap/', 'cheap electric dirt bikes'],
    blogs: [['electric-dirt-bike-licence-requirements-australia', 'electric dirt bike licence rules'], ['electric-offroad-bike-australia-range-torque-terrain', 'electric trail bike range and terrain guide']], ext: ['nswLiIon', 'wikiMotocross'] },
  motocross: { h2: (n) => `${n}: Electric Motocross Bike Guide for Track Riders`, h3: ['Motocross power and chassis', 'Battery, run time and charging', 'Track use, servicing and safety gear'],
    cat: ['/electric-motocross-bikes/', 'electric motocross bikes'], alt: ['/electric-dirt-bikes/', 'electric dirt bikes'],
    blogs: [['electric-motocross-motorcycle-australia-beginner-to-pro', 'electric motocross bike guide from beginner to pro'], ['future-of-electric-motocross-racing-in-australia', 'the future of electric motocross in Australia']], ext: ['wikiMotocross', 'nswLiIon'] },
  kids: { h2: (n) => `${n}: Kids Electric Bike Guide for Parents`, h3: ['Rider age, size and speed', 'Battery, run time and charging', 'Supervision, gear and where to ride'],
    cat: ['/electric-dirt-bikes/kids/', 'electric dirt bikes for kids'], alt: ['/electric-motor-bikes/kids/', 'kids electric bikes and motorbikes'],
    blogs: [['dirt-bike-for-kids-electric-buying-checklist', 'kids electric dirt bike buying checklist'], ['childrens-dirt-bike-electric-sizing-safety-guide', 'childrens electric dirt bike sizing and safety guide']], ext: ['nswLiIon', 'accc'] },
  ebike: { h2: (n) => `${n}: Electric Bike Guide for Australian Riders`, h3: ['Motor, speed and assist', 'Battery, range and charging', 'Rules, registration and where to ride'],
    cat: ['/electric-bikes/', 'electric bikes for sale'], alt: ['/electric-bikes/cheap/', 'cheap electric bikes'],
    blogs: [['e-bike-cost-australia-price-guide', 'e-bike cost and price ranges'], ['electric-bike-laws-qld-2026', 'electric bike laws in Queensland']], ext: ['nswEbikes', 'qldEbikes'] },
  emoto: { h2: (n) => `${n}: Moto-Style Electric Bike Guide`, h3: ['Motor, speed and handling', 'Battery, range and charging', 'Rules and where to ride'],
    cat: ['/electric-bikes/', 'electric bikes for sale'], alt: ['/electric-dirt-bikes/', 'electric dirt bikes'],
    blogs: [['e-bike-dirt-bike-electric-off-road-comparison', 'pedal e-bike vs electric dirt bike'], ['electric-bike-motors-hub-vs-mid-drive-explained', 'how electric bike motors work']], ext: ['wikiEbike', 'nswEbikes'] },
  moped: { h2: (n) => `${n}: Electric Moped Guide for Commuters`, h3: ['Motor, speed and licence class', 'Battery, range and charging', 'Registration, insurance and running costs'],
    cat: ['/electric-motor-bikes/commuter-mopeds/', 'electric mopeds'], alt: ['/electric-motor-bikes/', 'electric motorbikes'],
    blogs: [['electric-motorbike-for-adults-australia-guide', 'electric motorbike for adults'], ['e-motorbike-vs-e-bike-vs-electric-moped', 'e-motorbike vs e-bike vs electric moped']], ext: ['nswEbikes', 'wikiEMoto'] },
  battery: { h2: (n) => `${n}: Lithium Battery Buying Guide`, h3: ['Voltage, capacity and cells', 'Compatibility and installation', 'Charging, storage and safety'],
    cat: ['/electric-bike-batteries/', 'electric bike batteries'], alt: ['/accessories/', 'accessories and upgrades'],
    blogs: [['e-bike-battery-guide-voltage-capacity-range', 'e-bike battery guide'], ['battery-for-an-electric-bike-buying-safety-checklist', 'battery buying and safety checklist']], ext: ['nswLiIon', 'qldFire'] },
  charger: { h2: (n) => `${n}: Lithium Battery Charger Guide`, h3: ['Output, voltage and connector', 'Charge time and matching your pack', 'Safe charging habits'],
    cat: ['/electric-bike-batteries/', 'electric bike batteries and chargers'], alt: ['/accessories/', 'accessories and upgrades'],
    blogs: [['e-bike-battery-charger-guide-australia', 'e-bike battery charger guide'], ['how-to-charge-maintain-electric-dirt-bike-batteries', 'how to charge and maintain electric dirt bike batteries']], ext: ['qldFire', 'nswLiIon'] },
  part: { h2: (n) => `${n}: Upgrade and Fitment Guide`, h3: ['What it is and who it suits', 'Fitment and specifications', 'Installation, servicing and warranty'],
    cat: ['/accessories/', 'electric dirt bike parts and upgrades'], alt: ['/electric-dirt-bikes/', 'electric dirt bikes'],
    blogs: [['essential-aftermarket-mods-for-surron-light-bee-x', 'essential aftermarket mods'], ['electric-dirt-bike-servicing-cost-guide-australia', 'electric dirt bike servicing costs']], ext: ['wikiEMoto', 'accc'] },
  fattyre: { h2: (n) => `${n}: Fat Tyre Electric Bike Guide`, h3: ['Motor, speed and frame', 'Battery, range and charging', 'Road-compliant or off-road: what to know'],
    cat: ['/electric-fat-tyre-bikes/', 'fat tyre electric bikes'], alt: ['/electric-bikes/', 'electric bikes for sale'],
    blogs: [['fat-tyre-electric-bike-australia-buying-guide', 'fat tyre electric bike buying guide'], ['fat-tyre-e-bikes-vs-standard-e-bikes', 'fat tyre e-bikes vs standard e-bikes']], ext: ['wikiFatbike', 'nswEbikes'] },
  cruiser: { h2: (n) => `${n}: Electric Beach Cruiser Guide`, h3: ['Motor, speed and comfort', 'Battery, range and charging', 'Road-compliant or off-road: what to know'],
    cat: ['/electric-fat-tyre-bikes/', 'electric beach cruisers'], alt: ['/electric-bikes/cheap/', 'cheap electric bikes'],
    blogs: [['cruiser-e-bike-australia-chubbie-vs-riptide', 'Chubbie vs Riptide e-bike cruisers compared'], ['low-cost-electric-bike-australia-guide', 'low cost electric bike guide']], ext: ['wikiEbike', 'nswEbikes'] },
  mini: { h2: (n) => `${n}: Mini Electric Bike Guide`, h3: ['Motor, size and speed', 'Battery, range and charging', 'Road-compliant or off-road: what to know'],
    cat: ['/electric-mini-bikes/', 'mini electric bikes'], alt: ['/electric-fat-tyre-bikes/', 'fat tyre electric bikes'],
    blogs: [['electric-mini-dirt-bike-australia-guide', 'electric mini dirt bike guide'], ['dirt-bike-for-kids-electric-buying-checklist', 'kids electric dirt bike checklist']], ext: ['wikiEbike', 'nswEbikes'] },
};

export function getProductGuide(p: P): ProductGuideData {
  const kind = productKind(p);
  const c = CFG[kind];
  const n = shortName(p.name);
  const power = spec(p, 'motorPeak') || spec(p, 'peakPower') || spec(p, 'motor');
  const battery = spec(p, 'battery') || spec(p, 'capacity');
  const volt = spec(p, 'voltage');
  const speed = spec(p, 'topSpeed');
  const range = spec(p, 'range');
  const weight = spec(p, 'weight');
  const charge = spec(p, 'chargeTime');
  const age = spec(p, 'riderAge');
  const compat = spec(p, 'compatibility') || spec(p, 'fitment');
  const warranty = p.warranty ?? '12-month Australian warranty';
  const amp = p.source === 'ampd-bros' || p.source === 'old-site';
  const join = (a: (string | false | undefined)[]) => a.filter(Boolean).join(' ');

  const s1: string = kind === 'battery' || kind === 'charger' || kind === 'part'
    ? join([
        `The ${n} is priced at ${money(p.price)} AUD.`,
        volt && `Listed voltage: ${volt}.`,
        battery && `Capacity: ${battery}.`,
        spec(p, 'cells') && `Cells: ${spec(p, 'cells')}.`,
        spec(p, 'output') && `Output: ${spec(p, 'output')}.`,
        spec(p, 'material') && `Build: ${spec(p, 'material')}.`,
        p.shortDescription,
      ])
    : join([
        `The ${n} is priced at ${money(p.price)} AUD.`,
        power && `Motor: ${power}.`,
        speed && `Listed top speed: ${speed}.`,
        weight && `Weight: ${weight}.`,
        age && `Rider age: ${age}.`,
        p.shortDescription,
      ]);

  const s2: string = kind === 'part'
    ? join([compat ? `Listed compatibility: ${compat}.` : 'Check that the part matches your bike model and year before ordering.', spec(p, 'installation') && `Installation: ${spec(p, 'installation')}.`])
    : kind === 'battery'
      ? join([compat ? `Listed compatibility: ${compat}.` : 'Match the voltage and connector to your bike before you order.', spec(p, 'bms') && `Battery management: ${spec(p, 'bms')}.`, 'Message us your bike model if you are unsure about fitment.'])
      : kind === 'charger'
        ? join([spec(p, 'input') && `Input: ${spec(p, 'input')}.`, spec(p, 'output') && `Output: ${spec(p, 'output')}.`, 'Use only a charger that matches your battery voltage and connector.'])
        : join([battery && `Battery: ${battery}.`, range && `Listed range: ${range}.`, charge && `Charge time: ${charge}.`, 'Real range depends on rider weight, terrain, speed and power mode.']);

  const rideNote = amp
    ? `${p.legalNote ?? 'Check which configuration you are ordering.'} Rules vary by state, so confirm with your state authority.`
    : kind === 'battery' || kind === 'charger'
      ? 'Charge on a hard, non-flammable surface, away from flammable items, and never leave a battery charging unattended. Follow the manufacturer manual.'
      : kind === 'part'
        ? `This part is covered by our ${warranty.toLowerCase()} terms as described on the warranty and service page.`
        : 'This bike is for private property and designated off-road areas unless the specifications say otherwise. Road registration and licence rules differ by state, so check before you ride on public roads.';
  const s3 = join([rideNote, amp ? `Supplier warranty: ${p.warranty}.` : `Warranty: ${warranty}.`, 'Pay with crypto or PayID for 10% off.']);

  const [catHref, catAnchor] = c.cat;
  const [altHref, altAnchor] = c.alt;
  const further = `Compare more [${catAnchor}](${catHref}) or browse [${altAnchor}](${altHref}). Related reading: ${c.blogs.map(([slug, a]) => `[${a}](/blog/${slug}/)`).join(' and ')}.`;
  const outbound = c.ext.map((k) => AUTH[k]).filter(Boolean).map((a) => ({ label: a.label, url: a.url, source: a.source }));

  return { h2: c.h2(n), sections: [{ h3: c.h3[0], text: s1 }, { h3: c.h3[1], text: s2 }, { h3: c.h3[2], text: s3 }], further, outbound };
}
