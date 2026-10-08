// Outbound authority links (government, regulators, emergency services, reference). Single list so links can be audited and updated in one place.
// Every URL here was loaded and confirmed live on 2026-10-05 (two return HTTP 403 to scripts but are live in a browser: see `botBlocked`).
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
  qldEbikes: {
    label: 'E-bikes: Queensland Street Smarts',
    url: 'https://streetsmarts.initiatives.qld.gov.au/e-bikes-e-scooters/e-bikes/',
    source: 'Queensland Government',
    note: 'Queensland e-bike rules and rider safety.',
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

const STATES = ['nswEbikes', 'vicEbikes', 'qldEbikes', 'waBikes'];
const BATTERY = ['nswLiIon', 'qldFire', 'accc', 'wikiLiIon'];

// Which links appear on which page (path -> keys). Pages not listed fall back to DEFAULT_SET.
const SETS: Record<string, string[]> = {
  '/': ['nswEbikes', 'vicEbikes', 'qldEbikes', 'waBikes', 'accc', 'nswLiIon'],
  '/accessories/': BATTERY,
  '/electric-pit-bikes/': ['wikiPitBike', 'nswLiIon', 'accc'],
  '/electric-balance-bikes/': ['wikiBalance', 'nswEbikes', 'nswLiIon', 'accc'],
  '/electric-bike-batteries/': BATTERY,
  '/electric-dirt-bikes/sur-ron/': ['wikiMotocross', 'wikiEMoto', 'nswLiIon', 'accc'],
  '/electric-dirt-bikes/cheap/': ['wikiEMoto', 'nswLiIon', 'accc'],
  '/electric-dirt-bikes/kids/': ['nswEbikes', 'qldEbikes', 'nswLiIon', 'accc'],
  '/electric-dirt-bikes/': ['wikiMotocross', 'wikiEMoto', 'nswLiIon', 'accc'],
  '/electric-motor-bikes/': ['wikiEMoto', 'nswEbikes', 'accc', 'qldFire'],
  '/electric-motor-bikes/kids/': ['accc', 'nswLiIon', 'qldFire', 'wikiEMoto'],
  '/electric-motor-bikes/commuter-mopeds/': [...STATES, 'wikiMoped', 'adrRules'],
  '/electric-motor-bikes/rtr-ebike/': [...STATES, 'wikiEbike'],
  '/electric-motor-bikes/best-electric-bikes-australia/': ['bicycleNetwork', 'wikiEbike', 'wikiEbikeLaws', 'accc', 'nswLiIon'],
  '/electric-motor-bikes/e-bike-laws-australia/': [...STATES, 'adrRules', 'bicycleNetwork', 'wikiEbikeLaws', 'accc'],
  '/electric-motor-bikes/melbourne/': ['vicEbikes', 'wikiEbikeLaws', 'accc'],
  '/electric-motor-bikes/perth/': ['waBikes', 'wikiEbikeLaws', 'accc'],
  '/electric-motor-bikes/sydney/': ['nswEbikes', 'nswLiIon', 'wikiEbikeLaws'],
  '/electric-motor-bikes/brisbane/': ['qldEbikes', 'qldFire', 'wikiEbikeLaws'],
  '/electric-bikes/': [...STATES, 'bicycleNetwork', 'wikiEbike'],
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
    if (/battery|charger|cells|72v|60v|range|torp|controller/.test(slug)) return BATTERY;
    if (/legal|law|licence|registration|insurance|road/.test(slug)) return [...STATES, 'adrRules', 'wikiEbikeLaws'];
    if (/kids|age|children|teen|junior|oset/.test(slug)) return ['nswEbikes', 'accc', 'nswLiIon', 'wikiBalance'];
    if (/pit-bike/.test(slug)) return ['wikiPitBike', 'nswLiIon', 'accc'];
    if (/fat|cruiser/.test(slug)) return ['wikiFatbike', 'nswEbikes', 'bicycleNetwork'];
    if (/moped|scooter/.test(slug)) return ['wikiMoped', 'adrRules', 'nswEbikes'];
    return ['wikiEbike', 'wikiEMoto', 'nswEbikes', 'accc', 'bicycleNetwork'];
  }
  if (path.startsWith('/shop/')) {
    if (/battery|charger|pack|anderson|backpack/.test(slug)) return BATTERY;
    if (/balance/.test(slug)) return ['wikiBalance', 'nswEbikes', 'accc'];
    if (/pit-bike|ebox|dragster|etm|dhz/.test(slug)) return ['wikiPitBike', 'nswLiIon', 'accc'];
    if (/fat|cruiser|chubbie|stubbie|riptide|ace-/.test(slug)) return ['wikiFatbike', 'nswEbikes', 'accc'];
    if (/rtr|niu|soco|moped/.test(slug)) return ['nswEbikes', 'adrRules', 'accc'];
    return ['wikiEMoto', 'nswLiIon', 'accc', 'bicycleNetwork'];
  }
  return DEFAULT_SET;
}

export function authorityLinksFor(path: string): AuthLink[] {
  return setFor(path).map((k) => AUTH[k]).filter(Boolean);
}
