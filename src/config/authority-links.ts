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
  '/electric-balance-bikes/': ['nswEbikes', 'nswLiIon', 'accc'],
  '/electric-bike-batteries/': BATTERY,
  '/electric-dirt-bikes/sur-ron/': ['wikiMotocross', 'wikiEMoto', 'nswLiIon', 'accc'],
  '/electric-dirt-bikes/cheap/': ['wikiEMoto', 'nswLiIon', 'accc'],
  '/electric-dirt-bikes/kids/': ['nswEbikes', 'qldEbikes', 'nswLiIon', 'accc'],
  '/electric-dirt-bikes/': ['wikiMotocross', 'wikiEMoto', 'nswLiIon', 'accc'],
  '/electric-motor-bikes/': ['wikiEMoto', 'nswEbikes', 'accc', 'qldFire'],
  '/electric-motor-bikes/kids/': ['accc', 'nswLiIon', 'qldFire', 'wikiEMoto'],
  '/electric-motor-bikes/commuter-mopeds/': [...STATES, 'wikiEbikeLaws'],
  '/electric-motor-bikes/rtr-ebike/': [...STATES, 'wikiEbike'],
  '/electric-motor-bikes/best-electric-bikes-australia/': ['wikiEbike', 'wikiEbikeLaws', 'accc', 'nswLiIon'],
  '/electric-motor-bikes/e-bike-laws-australia/': [...STATES, 'wikiEbikeLaws', 'accc'],
  '/electric-motor-bikes/melbourne/': ['vicEbikes', 'wikiEbikeLaws', 'accc'],
  '/electric-motor-bikes/perth/': ['waBikes', 'wikiEbikeLaws', 'accc'],
  '/electric-motor-bikes/sydney/': ['nswEbikes', 'nswLiIon', 'wikiEbikeLaws'],
  '/electric-motor-bikes/brisbane/': ['qldEbikes', 'qldFire', 'wikiEbikeLaws'],
  '/electric-bikes/': [...STATES, 'wikiEbike'],
  '/electric-bikes/cheap/': [...STATES, 'accc'],
  '/electric-fat-tyre-bikes/': ['wikiFatbike', 'wikiEbikeLaws', 'nswEbikes', 'qldEbikes'],
  '/electric-mini-bikes/': ['wikiEbike', 'accc', 'nswLiIon', 'wikiEbikeLaws'],
  '/electric-motocross-bikes/': ['wikiMotocross', 'wikiEMoto', 'nswLiIon', 'accc'],
  '/electric-motorcycles/': ['wikiEMoto', 'nswEbikes', 'accc', 'wikiLiIon'],
};
const DEFAULT_SET = ['wikiEbike', 'wikiEMoto', 'nswEbikes', 'accc'];

export function authorityLinksFor(path: string): AuthLink[] {
  return (SETS[path] ?? DEFAULT_SET).map((k) => AUTH[k]).filter(Boolean);
}
