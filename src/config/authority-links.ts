// Outbound authority links (government, regulators, emergency services, reference, manufacturers). Single list so links can be audited and updated in one place.
// Every URL here was loaded and confirmed live on 2026-10-24 (in a real browser or by script). `botBlocked` entries return HTTP 403 to scripts
// (bot protection) but load normally in a browser. Re-run the external link check after editing this file.
// Links are normal editorial (followed) links that open in a new tab.

export interface AuthLink {
  label: string;
  url: string;
  source: string;
  note: string;
  botBlocked?: boolean;
}

export const AUTH: Record<string, AuthLink> = {
  nswEbikes: {
    label: 'Riding bikes, e-bikes and e-scooters in NSW',
    url: 'https://www.nsw.gov.au/driving-boating-and-transport/bikes-e-bikes-e-scooters',
    source: 'NSW Government',
    note: 'Official NSW rules for e-bikes and e-scooters.',
  },
  nswLiIon: {
    label: 'Lithium-ion batteries and e-micromobility devices',
    url: 'https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices',
    source: 'NSW Government',
    note: 'Battery charging, storage and electrical safety guidance.',
  },
  vicEbikes: {
    label: 'E-bike and e-scooter safety laws in Victoria',
    url: 'https://www.police.vic.gov.au/e-bike-safety',
    source: 'Victoria Police',
    note: 'Victorian e-bike and e-scooter rules and safety advice.',
  },
  vicTransport: {
    label: 'Electric bikes: rules and safety requirements in Victoria',
    url: 'https://transport.vic.gov.au/road-rules-and-safety/bicycles/electric-bikes',
    source: 'Transport Victoria',
    note: 'Which e-bikes are legal in Victoria and the EN 15194 standard.',
  },
  qldEbikes: {
    label: 'E-Bike rules in Queensland',
    url: 'https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules',
    source: 'Queensland Government',
    note: 'Queensland e-bike power, age and licence rules (new age and licence rules apply from 31 August 2026).',
  },
  qldFire: {
    label: 'Lithium-ion battery safety',
    url: 'https://www.fire.qld.gov.au/safety-education/battery-and-charging-safety/lithium-ion-battery-safety',
    source: 'Queensland Fire Department',
    note: 'Charging and storage safety for lithium-ion batteries.',
  },
  waBikes: {
    label: 'Bicycle riders: Western Australia Road Safety Commission',
    url: 'https://www.wa.gov.au/organisation/road-safety-commission/bicycle-riders',
    source: 'WA Government',
    note: 'Western Australian rules for bicycle and e-bike riders.',
  },
  saEbikes: {
    label: 'Riding a power-assisted bicycle',
    url: 'https://www.sa.gov.au/topics/driving-and-transport/cycling/riding-a-power-assisted-bicycle',
    source: 'South Australian Government',
    note: 'South Australian rules for power-assisted bicycles.',
    botBlocked: true,
  },
  tasEbikes: {
    label: 'Power assisted bicycles (e-bikes)',
    url: 'https://www.transport.tas.gov.au/road_safety_and_rules/power_assisted_bicycles_e-bikes',
    source: 'Tasmanian Government',
    note: 'Tasmanian rules for e-bikes and power-assisted bicycles.',
    botBlocked: true,
  },
  actEbikes: {
    label: 'Riding electric bikes and scooters in Canberra',
    url: 'https://www.act.gov.au/our-canberra/latest-news/2026/september/riding-electric-bikes-and-scooters-in-canberra',
    source: 'ACT Government',
    note: 'ACT guidance on riding e-bikes and e-scooters.',
    botBlocked: true,
  },
  ntEbikes: {
    label: 'Electric scooters and bikes',
    url: 'https://nt.gov.au/driving/safety/electric-scooters-and-bikes',
    source: 'Northern Territory Government',
    note: 'Northern Territory power and speed limits for e-bikes.',
  },
  accc: {
    label: 'E-bikes, e-scooters and other e-micromobility devices',
    url: 'https://www.productsafety.gov.au/business/e-bikes-e-scooters-and-other-e-micromobility-devices',
    source: 'ACCC Product Safety Australia',
    note: 'National product safety work on e-micromobility devices.',
    botBlocked: true,
  },
  wikiEbikeLaws: {
    label: 'Electric bicycle laws',
    url: 'https://en.wikipedia.org/wiki/Electric_bicycle_laws',
    source: 'Wikipedia',
    note: 'How e-bike power and speed limits are defined in different countries.',
  },
  wikiEbike: {
    label: 'Electric bicycle',
    url: 'https://en.wikipedia.org/wiki/Electric_bicycle',
    source: 'Wikipedia',
    note: 'Background on how e-bikes and pedal assist work.',
  },
  wikiEMoto: {
    label: 'Electric motorcycles and scooters',
    url: 'https://en.wikipedia.org/wiki/Electric_motorcycles_and_scooters',
    source: 'Wikipedia',
    note: 'Overview of electric motorcycle technology and history.',
  },
  wikiMotocross: {
    label: 'Motocross',
    url: 'https://en.wikipedia.org/wiki/Motocross',
    source: 'Wikipedia',
    note: 'The sport of motocross and its bike classes.',
  },
  wikiLiIon: {
    label: 'Lithium-ion battery',
    url: 'https://en.wikipedia.org/wiki/Lithium-ion_battery',
    source: 'Wikipedia',
    note: 'How lithium-ion cells work and their safety considerations.',
  },
  wikiPitBike: {
    label: 'Pit bike',
    url: 'https://en.wikipedia.org/wiki/Pit_bike',
    source: 'Wikipedia',
    note: 'Pit bike overview.',
  },
  bicycleNetwork: {
    label: 'Bicycle Network: Australia\'s bike riding organisation',
    url: 'https://bicyclenetwork.com.au/',
    source: 'Bicycle Network',
    note: 'Rider advocacy, safety and e-bike information from Australia\'s largest riding body.',
  },
  adrRules: {
    label: 'Vehicle design regulation (Australian Design Rules)',
    url: 'https://www.infrastructure.gov.au/infrastructure-transport-vehicles/vehicles/vehicle-design-regulation',
    source: 'Australian Government (Infrastructure)',
    note: 'The national rules a vehicle must meet to be road legal.',
  },
  batteryUniversity: {
    label: 'How to prolong lithium-based batteries',
    url: 'https://www.batteryuniversity.com/article/bu-808-how-to-prolong-lithium-based-batteries',
    source: 'Battery University',
    note: 'Charging habits and depth of discharge that stretch lithium battery life.',
  },
  wikiBalance: {
    label: 'Balance bicycle',
    url: 'https://en.wikipedia.org/wiki/Balance_bicycle',
    source: 'Wikipedia',
    note: 'What a balance bike is and how children learn on one.',
  },
  wikiMoped: {
    label: 'Moped',
    url: 'https://en.wikipedia.org/wiki/Moped',
    source: 'Wikipedia',
    note: 'Background on mopeds and how they are classified.',
  },
  wikiFatbike: {
    label: 'Fatbike',
    url: 'https://en.wikipedia.org/wiki/Fatbike',
    source: 'Wikipedia',
    note: 'What a fat tyre bike is and where it is ridden.',
  },
};

// Official manufacturer sites, matched on the product or post slug. Only brands whose official site was confirmed live are listed.
const BRAND_SITES: { test: RegExp; link: AuthLink }[] = [
  { test: /sur-?ron|surron/, link: { label: 'Sur-Ron official website', url: 'https://www.surron.com/', source: 'Sur-Ron', note: 'Manufacturer information and specifications.' } },
  { test: /stark/, link: { label: 'Stark Future official website (Stark VARG)', url: 'https://starkfuture.com/', source: 'Stark Future', note: 'Manufacturer information on the Stark VARG electric motocross bike.' } },
  { test: /\bktm\b|^ktm-|-ktm-/, link: { label: 'KTM Australia (KTM SX-E electric bikes)', url: 'https://www.ktm.com/en-au.html', source: 'KTM', note: 'Official KTM Australia site, including the SX-E electric range.' } },
  { test: /husqvarna/, link: { label: 'Husqvarna Motorcycles Australia (EE 5)', url: 'https://www.husqvarna-motorcycles.com/en-au.html', source: 'Husqvarna Motorcycles', note: 'Official Husqvarna Australia site, including the EE 5 electric bike.' } },
  { test: /kuberg/, link: { label: 'Kuberg official website', url: 'https://www.kuberg.com/', source: 'Kuberg', note: 'Manufacturer information on Kuberg electric bikes.' } },
  { test: /razor/, link: { label: 'Razor official website', url: 'https://razor.com/', source: 'Razor', note: 'Manufacturer information on Razor ride-ons.' } },
  { test: /vmoto/, link: { label: 'Vmoto official website', url: 'https://vmoto.com/', source: 'Vmoto', note: 'Manufacturer information on Vmoto electric motorcycles.' } },
  { test: /super73/, link: { label: 'SUPER73 official website', url: 'https://super73.com/', source: 'SUPER73', note: 'Manufacturer information on SUPER73 electric motorbikes.' } },
  { test: /segway/, link: { label: 'Segway official website', url: 'https://www.segway.com/', source: 'Segway', note: 'Manufacturer information on Segway products.' } },
  { test: /\bniu\b|^niu-|-niu-/, link: { label: 'NIU official website', url: 'https://global.niu.com/', source: 'NIU', note: 'Manufacturer information on NIU electric scooters and mopeds.' } },
];

const STATES = ['nswEbikes', 'vicEbikes', 'qldEbikes', 'waBikes'];
const ALL_STATES = ['nswEbikes', 'vicTransport', 'qldEbikes', 'waBikes', 'saEbikes', 'tasEbikes', 'actEbikes', 'ntEbikes'];
const BATTERY = ['nswLiIon', 'qldFire', 'accc', 'wikiLiIon'];

// Which links appear on which page (path -> keys). Pages not listed fall back to DEFAULT_SET.
const SETS: Record<string, string[]> = {
  '/': ['nswEbikes', 'vicEbikes', 'qldEbikes', 'waBikes', 'accc', 'nswLiIon'],
  '/accessories/': BATTERY,
  '/electric-pit-bikes/': ['wikiPitBike', 'nswLiIon', 'accc'],
  '/electric-balance-bikes/': ['wikiBalance', 'nswEbikes', 'nswLiIon', 'accc'],
  '/electric-bike-batteries/': [...BATTERY, 'batteryUniversity'],
  '/electric-dirt-bikes/sur-ron/': ['wikiMotocross', 'wikiEMoto', 'nswLiIon', 'accc'],
  '/electric-dirt-bikes/cheap/': ['wikiEMoto', 'nswLiIon', 'accc'],
  '/electric-dirt-bikes/kids/': ['nswEbikes', 'qldEbikes', 'nswLiIon', 'accc'],
  '/electric-dirt-bikes/': ['wikiMotocross', 'wikiEMoto', 'nswLiIon', 'accc'],
  '/electric-motor-bikes/': ['wikiEMoto', 'nswEbikes', 'accc', 'qldFire'],
  '/electric-motor-bikes/kids/': ['accc', 'nswLiIon', 'qldFire', 'wikiEMoto'],
  '/electric-motor-bikes/commuter-mopeds/': [...STATES, 'wikiMoped', 'adrRules'],
  '/electric-motor-bikes/rtr-ebike/': [...STATES, 'wikiEbike'],
  '/electric-motor-bikes/best-electric-bikes-australia/': ['bicycleNetwork', 'wikiEbike', 'wikiEbikeLaws', 'accc', 'nswLiIon'],
  '/electric-motor-bikes/e-bike-laws-australia/': [...ALL_STATES, 'adrRules', 'bicycleNetwork', 'wikiEbikeLaws', 'accc'],
  '/electric-motor-bikes/melbourne/': ['vicEbikes', 'vicTransport', 'wikiEbikeLaws', 'accc'],
  '/electric-motor-bikes/perth/': ['waBikes', 'wikiEbikeLaws', 'accc'],
  '/electric-motor-bikes/sydney/': ['nswEbikes', 'nswLiIon', 'wikiEbikeLaws'],
  '/electric-motor-bikes/brisbane/': ['qldEbikes', 'qldFire', 'wikiEbikeLaws'],
  '/electric-motor-bikes/gold-coast/': ['qldEbikes', 'qldFire', 'wikiEbikeLaws'],
  '/electric-motor-bikes/townsville/': ['qldEbikes', 'qldFire', 'wikiEbikeLaws'],
  '/electric-bikes/': [...STATES, 'saEbikes', 'tasEbikes', 'bicycleNetwork', 'wikiEbike'],
  '/electric-bikes/cheap/': [...STATES, 'accc'],
  '/electric-fat-tyre-bikes/': ['wikiFatbike', 'wikiEbikeLaws', 'nswEbikes', 'qldEbikes'],
  '/electric-mini-bikes/': ['wikiEbike', 'accc', 'nswLiIon', 'wikiEbikeLaws'],
  '/electric-motocross-bikes/': ['wikiMotocross', 'wikiEMoto', 'nswLiIon', 'accc'],
  '/electric-motorcycles/': ['wikiEMoto', 'adrRules', 'nswEbikes', 'accc', 'wikiLiIon'],
  '/shop/': ['accc', 'nswLiIon', 'bicycleNetwork', 'wikiEMoto'],
  '/brands/': ['wikiEMoto', 'wikiEbike', 'accc', 'bicycleNetwork'],
  '/brands/e-ride-pro/': ['wikiMotocross', 'wikiEMoto', 'nswLiIon', 'accc'],
};
const DEFAULT_SET = ['wikiEbike', 'wikiEMoto', 'nswEbikes', 'accc'];

// Blog posts and product pages pick a set from their slug; everything else is looked up in SETS.
function setFor(path: string): string[] {
  if (SETS[path]) return SETS[path];
  const slug = path.replace(/^\/(blog|shop)\//, '');
  if (path.startsWith('/blog/')) {
    if (/battery|charger|cells|72v|60v|range|torp|controller/.test(slug)) return [...BATTERY, 'batteryUniversity'];
    if (/legal|law|licence|registration|insurance|road/.test(slug)) return [...ALL_STATES, 'adrRules', 'wikiEbikeLaws'];
    if (/kids|age|children|teen|junior|oset/.test(slug)) return ['nswEbikes', 'qldEbikes', 'accc', 'nswLiIon', 'wikiBalance'];
    if (/pit-bike/.test(slug)) return ['wikiPitBike', 'nswLiIon', 'accc'];
    if (/fat|cruiser/.test(slug)) return ['wikiFatbike', 'nswEbikes', 'bicycleNetwork'];
    if (/moped|scooter/.test(slug)) return ['wikiMoped', 'adrRules', 'nswEbikes'];
    return ['wikiEbike', 'wikiEMoto', 'nswEbikes', 'accc', 'bicycleNetwork'];
  }
  if (path.startsWith('/shop/')) {
    if (/battery|charger|pack|anderson|backpack/.test(slug)) return [...BATTERY, 'batteryUniversity'];
    if (/balance/.test(slug)) return ['wikiBalance', 'nswEbikes', 'accc'];
    if (/pit-bike|ebox|dragster|etm|dhz/.test(slug)) return ['wikiPitBike', 'nswLiIon', 'accc'];
    if (/fat|cruiser|chubbie|stubbie|riptide|ace-/.test(slug)) return ['wikiFatbike', 'nswEbikes', 'accc'];
    if (/rtr|niu|soco|moped/.test(slug)) return ['nswEbikes', 'adrRules', 'accc'];
    return ['wikiEMoto', 'nswLiIon', 'accc', 'bicycleNetwork'];
  }
  return DEFAULT_SET;
}

// Official manufacturer link for a product or post slug (undefined when the brand has no confirmed official site).
export function brandSiteFor(slug: string): AuthLink | undefined {
  return BRAND_SITES.find((b) => b.test.test(slug))?.link;
}

// Links for a page. `exclude` lists URLs the page already links elsewhere (in the body copy or another block), so no URL is linked twice on one page.
export function authorityLinksFor(path: string, exclude: string[] = []): AuthLink[] {
  const slug = path.replace(/^\/(blog|shop)\//, '').replace(/\/$/, '');
  const brand = path.startsWith('/blog/') || path.startsWith('/shop/') ? brandSiteFor(slug) : undefined;
  const base = setFor(path).map((k) => AUTH[k]).filter(Boolean);
  const all = brand ? [brand, ...base] : base;
  const skip = new Set(exclude.map((u) => u.replace(/\/$/, '')));
  return all.filter((l, i) => all.findIndex((x) => x.url === l.url) === i && !skip.has(l.url.replace(/\/$/, '')));
}

// Every external URL that appears in a chunk of page data (post body, product guide), used to feed `exclude`.
export function externalUrlsIn(data: unknown): string[] {
  const s = typeof data === 'string' ? data : JSON.stringify(data);
  return [...new Set((s.match(/https?:\/\/[^\s"'()<>\\\]]+/g) || []).map((u) => u.replace(/[.,;:]+$/, '')))].filter((u) => !u.includes('electricdirtbikeaustralia.com.au'));
}
