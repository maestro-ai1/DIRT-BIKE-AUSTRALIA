// src/config/site.ts — Single Source of Truth for Electric Dirt Bike Australia

export const SITE = {
  name: 'Electric Dirt Bike Australia',
  shortName: 'EDBA',
  tagline: 'Electric Dirt Bike Australia | Brand New Electric Bike | Powerful Electric Dirt bikes',
  domain: 'electricdirtbikeaustralia.com.au',
  locale: 'en-AU',
  currency: 'AUD',
  currencySymbol: '$',
  target: 'vercel',
  primaryColor: '#0284c7', // Sky blue
  accentColor: '#ea580c',  // High-voltage Orange
  trustColor: '#00b67a',   // Trustpilot Green
  darkHeader: '#0f172a',   // Slate 900
  gscVerification: 'REPLACE_WITH_GSC_VERIFICATION_CODE',
  bingVerification: 'ED04A0517174266DEB977A65D448A32D',
  indexNowKey: 'edba98611685977indexnow',
  cartKey: 'edba-cart',
};

export const CONTACT = {
  email: 'sales@electricdirtbikeaustralia.com.au',
  orderEmail: 'sales@electricdirtbikeaustralia.com.au',
  supportEmail: 'sales@electricdirtbikeaustralia.com.au',
  phone: '+61420128746',
  phoneDisplay: '+61 420 128 746',
  whatsapp: '+61420128746',
  whatsappDisplay: '0420 128 746',
  address: 'Unit 4, 18-20 Bowral Rd, Mittagong NSW 2575',
  hq: 'Southern Highlands, NSW 2575, Australia',
  state: 'NSW',
  postcode: '2575',
  country: 'Australia',
  abn: '98 611 685 977',
  hours: 'Mon - Fri: 8:30 AM - 5:30 PM AEST | Sat: 9:00 AM - 2:00 PM',
};

export const SHOP = {
  minOrder: 500,
  freeShippingThreshold: 1500,
  shippingFee: 200,
  cryptoDiscount: 10,
  paymentMethods: ['crypto', 'payid', 'bank-transfer'],
  defaultWarranty: '12 Months Comprehensive Australian Factory Warranty',
};

export const FORMS = {
  provider: 'smtp',
  smtpFrom: 'sales@electricdirtbikeaustralia.com.au',
  web3formsKey: '',
  resendFrom: 'sales@electricdirtbikeaustralia.com.au',
};

export interface PaymentMethodConfig {
  id: string;
  label: string;
  opening: string;
  closing: string;
  instantRailNote?: string;
  discount?: { percent: number; label: string };
}

export const REPLY = {
  brand: { primary: '#0284c7', secondary: '#ea580c', headerDark: '#0f172a' },
  currency: { code: 'AUD', symbol: '$' },
  orderPrefix: 'EDBA',
  headerTagline: 'Australia\'s Authorised Electric Dirt Bike Dealer · Southern Highlands NSW 2575',
  dispatchLine: 'Insured heavy-vehicle express dispatch direct from Mittagong NSW 2575 with real-time tracking.',
  bizNumber: { label: 'ABN', value: '98 611 685 977' },
  channels: { email: 'sales@electricdirtbikeaustralia.com.au', whatsapp: '+61420128746', whatsappCountryCode: '61' },
  deadlineHours: 48,
  paymentMethods: [
    {
      id: 'crypto',
      label: 'Crypto (BTC / USDT / ETH)',
      opening: 'Please transfer {amount} in your preferred cryptocurrency for order {ref}.',
      closing: '10% alt-payment discount applied. Your order will be automatically queued for dispatch upon 1 network confirmation.',
      discount: { percent: 10, label: '10% Crypto Discount' },
    },
    {
      id: 'payid',
      label: 'PayID (Instant Australian Bank Rail)',
      opening: 'Please send {amount} via PayID using order reference {ref}.',
      closing: 'PayID transfers clear instantly 24/7 without delays.',
      instantRailNote: 'Instant Osko/PayID clearance across all major Australian banks (CBA, Westpac, NAB, ANZ, Macquarie).',
    },
    {
      id: 'bank-transfer',
      label: 'Direct Bank Transfer (EFT)',
      opening: 'Please transfer {amount} to our Australian business bank account quoting order {ref}.',
      closing: 'Standard EFT transfers clear within 24-48 business hours.',
    },
  ] as PaymentMethodConfig[],
};

export const CHAT = {
  channels: [
    { type: 'whatsapp', value: '+61420128746', label: 'WhatsApp (+61 420 128 746)' },
    { type: 'phone', value: '+61420128746', label: 'Direct Call (+61 420 128 746)' },
    { type: 'email', value: 'sales@electricdirtbikeaustralia.com.au', label: 'Email Sales Support' },
  ],
};

export const BRAND = {
  foundingYear: 2021,
  foundingLocation: 'Mittagong, Southern Highlands, NSW 2575',
  description: 'Electric Dirt Bike Australia is Australia\'s premier specialist importer, distributor, and certified warranty support centre for high-performance off-road electric dirt bikes, motocross machines, 72V lithium battery upgrades, and smart fast chargers.',
  milestones: [
    { year: 2021, event: 'Established in Mittagong NSW 2575 with our dedicated electric motorcycle testing and assembly facility.' },
    { year: 2022, event: 'Secured direct manufacturer distribution agreements for Sur-Ron and Talaria platforms in Australia.' },
    { year: 2023, event: 'Introduced in-house 72V high-discharge Molicel battery assembly and smart BMS engineering for extreme bush endurance.' },
    { year: 2024, event: 'Expanded nationwide free heavy-freight network for all bike purchases exceeding $1,500 AUD.' },
    { year: 2025, event: 'Became an authorized certified dealer for Stark Varg 80HP Swedish electric motocross competition bikes in NSW.' },
    { year: 2026, event: 'Surpassed 1,200 Australian riders equipped with zero-emission high-performance electric trail machinery.' },
  ],
  differentiation: [
    'Direct dispatch from Mittagong NSW 2575 with zero drop-shipping delays.',
    '12 Months comprehensive Australian factory warranty on frames, motors, and batteries.',
    'Every bike pre-inspected, firmware updated, and crated by factory-trained technicians.',
    '10% Instant alt-payment discount for cryptocurrency checkouts.',
    'Instant PayID clearance with zero bank surcharge fees.',
  ],
  sameAs: [
    'https://www.facebook.com/electricdirtbikeaustralia',
    'https://www.instagram.com/electricdirtbikeaustralia',
    'https://www.youtube.com/@electricdirtbikeaustralia',
  ],
  awards: [
    'Top Australian Electric Off-Road Retailer 2025 (eMobility Aus)',
    'Customer Excellence Award 2025 - Southern Highlands Regional Business Awards',
  ],
};

export const CATEGORIES = [
  {
    slug: 'dirt-bikes',
    name: 'Electric Dirt Bikes',
    title: 'High-Performance Electric Dirt Bikes Australia',
    description: 'Explore Australia\'s most popular off-road trail weapons from Sur-Ron, Talaria, RFN, and E-Ride Pro. High torque, near-silent operation, and instant throttle response.',
    image: '/images/hero_surron_trail_1790338185425.jpg',
  },
  {
    slug: 'motocross',
    name: 'Electric Motocross',
    title: 'Competition Electric Motocross Bikes Australia',
    description: 'Championship-grade competition track machines including the 80HP Stark Varg and Sur-Ron Storm Bee MX. Outperforms traditional 450cc petrol bikes.',
    image: '/images/hero_stark_track_1790338196966.jpg',
  },
  {
    slug: 'accessories',
    name: 'Batteries & Chargers',
    title: '72V Lithium Batteries & High-Amperage Fast Chargers',
    description: 'Upgrade your range and acceleration with 72V Molicel battery packs, OEM replacements, and intelligent 15A/20A smart fast chargers with Australian plugs.',
    image: '/images/hero_talaria_ridge_1790338208529.jpg',
  },
  {
    slug: 'parts-upgrades',
    name: 'Parts & Performance',
    title: 'High-Performance Controllers, Suspension, Brakes & Protection',
    description: 'Fine-tune your electric dirt bike with Torp controllers, Fastace and EXT suspension, Magura brakes, heavy-duty sprockets, and 5mm billet skid plates.',
    image: '/images/hero_surron_trail_1790338185425.jpg',
  },
];

export const BRANDS = [
  {
    slug: 'sur-ron',
    name: 'Sur-Ron',
    country: 'Global Pioneer',
    origin: 'Pioneers of the lightweight electric enduro movement since 2014, famous for the Light Bee X, Ultra Bee, and Storm Bee.',
    popularModels: ['Light Bee X', 'Ultra Bee', 'Storm Bee Enduro', 'Storm Bee MX'],
    badge: 'Industry Benchmark',
  },
  {
    slug: 'talaria',
    name: 'Talaria',
    country: 'Specialist Performance',
    origin: 'Engineered for aggressive trail riders with sealed oil-bath gearboxes, high torque motors, and reinforced alloy frames.',
    popularModels: ['Sting R MX4', 'XXX Black Edition', 'Dragon Enduro'],
    badge: 'Rider Favourite',
  },
  {
    slug: 'stark-varg',
    name: 'Stark Varg',
    country: 'Sweden / Europe',
    origin: 'The world\'s most powerful motocross bike delivering up to 80HP, carbon-fiber motor sleeve, and customizable smartphone telemetry.',
    popularModels: ['Varg EX 80HP', 'Varg Alpha 60HP'],
    badge: 'Pro Championship',
  },
  {
    slug: 'rfn',
    name: 'RFN (Apollo)',
    country: 'Global OEM',
    origin: 'Engineered for aggressive Australian trails with 74V architecture and removable seat for dual trials/enduro ergonomics.',
    popularModels: ['Ares Rally Pro'],
    badge: 'Dual-Ergo',
  },
  {
    slug: 'e-ride-pro',
    name: 'E-Ride Pro',
    country: 'USA / Global',
    origin: 'Native 72V high-voltage platforms delivering 12kW-15kW factory power right out of the box with zero aftermarket upgrades needed.',
    popularModels: ['Pro-SS 2.0', 'Pro-SR'],
    badge: '72V Factory Power',
  },
  {
    slug: 'stealth-electric-bikes',
    name: 'Stealth Electric Bikes',
    country: 'Australia (Melbourne)',
    origin: 'Iconic Australian engineered hyper-bikes built with chromoly monocoque frames and heavy-duty sequential transmissions.',
    popularModels: ['B-52 Bomber', 'F-37 Trail Fighter', 'H-52 Competition'],
    badge: 'Australian Engineered',
  },
  {
    slug: 'segway',
    name: 'Segway Powersports',
    country: 'Global OEM',
    origin: 'Premium fit and finish electric dirt bikes with smartphone telemetry integration.',
    popularModels: ['X260', 'X160'],
    badge: 'Smart Tech',
  },
  {
    slug: 'super73',
    name: 'Super73',
    country: 'USA / Global',
    origin: 'Iconic scrambler aesthetic electric moto cruisers with full suspension and fat dual-sport tyres.',
    popularModels: ['RX Mojave', 'S2 Adventure'],
    badge: 'Urban Moto',
  },
];

export interface ProductItem {
  slug: string;
  name: string;
  brand: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  badge: string;
  featured: boolean;
  shortDescription: string;
  description: string;
  specs: Record<string, string>;
  images: string[];
  inStock: boolean;
}

export const PRODUCTS: ProductItem[] = [
  {
    "slug": "sur-ron-light-bee-x",
    "name": "Sur-Ron Light Bee X (60V 40Ah)",
    "brand": "Sur-Ron",
    "price": 6490,
    "compareAtPrice": 6990,
    "category": "dirt-bikes",
    "badge": "Best Seller",
    "featured": true,
    "shortDescription": "Australia\'s most popular electric trail bike with 6kW peak power, 60V 40Ah battery, and lightweight 50kg dry weight.",
    "description": "The Sur-Ron Light Bee X is Australia\'s best-selling electric dirt bike, delivering an unmatched combination of 6kW peak power, 50kg lightweight agility, and a massive 60V 40Ah lithium-ion battery. This premium electric trail bike produces up to 250Nm of rear-wheel torque, enabling instant wheelies and seamless hill climbing across NSW singletrack, Victorian State Forests, and Queensland bush trails. The sine-wave FOC controller ensures smooth, progressive throttle response for both beginners and experienced off-road electric bike riders. Multi-link rear suspension with 150mm travel and hydraulic 4-piston disc brakes provide the confidence to tackle gnarly Australian terrain. Available exclusively through Electric Dirt Bike Australia — Australia\'s authorised Sur-Ron dealer — with 12-month factory warranty, pre-delivery inspection, and free insured freight on orders over $1,500 to all Australian states. Sur-Ron, the global pioneer of the lightweight e-moto segment since 2014 (surronusa.com), built the Light Bee X as the definitive off-road electric bike for serious trail riders.",
    "specs": {
      "motorPeak": "6,000 Watts (6kW)",
      "battery": "60V 40Ah (2,400Wh) Lithium-ion",
      "topSpeed": "75 km/h (off-road mode)",
      "range": "Up to 100 km (eco mode)",
      "chargeTime": "3.5 Hours (standard fast charger)",
      "weight": "50 kg",
      "brakes": "Hydraulic 4-piston disc with 203mm rotors",
      "frame": "Aviation-grade forged aluminium alloy"
    },
    "images": [
      "/images/product-sur-ron-ultra-bee.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "talaria-sting-r-mx4",
    "name": "Talaria Sting R MX4 (60V 45Ah / 8kW)",
    "brand": "Talaria",
    "price": 7290,
    "compareAtPrice": 7790,
    "category": "dirt-bikes",
    "badge": "Most Popular",
    "featured": true,
    "shortDescription": "Next-gen electric trail powerhouse with oil-cooled sealed gearbox, 8,000W peak output, and 45Ah high-capacity battery.",
    "description": "The Talaria Sting R MX4 is the most torque-packed electric dirt bike available in Australia, featuring a sealed oil-bath gearbox that outperforms belt drives in muddy creeks, rocky scree, and steep Victorian High Country climbs. This electric trail bike produces 8kW peak output and 60V 45Ah high-discharge battery power — 33% more performance than entry-level e-motos. The integrated gearbox eliminates belt snap risk, reduces drivetrain heat buildup, and delivers consistent traction management across Australian clay, loam, and hardpack. Reinforced 6061 T6 aluminium frame with 240mm inverted forks handles the roughest off-road terrain. The Talaria Sting is the benchmark electric dirt bike for serious enduro riders prioritising gearbox durability and sustained torque over ultralight weight. Order your Talaria Sting R MX4 through Electric Dirt Bike Australia with free nationwide freight and Australia\'s only authorised 12-month factory warranty. Talaria\'s full engineering specifications are published at talariausa.com for technical reference.",
    "specs": {
      "motorPeak": "8,000 Watts (8kW)",
      "battery": "60V 45Ah (2,700Wh) High-Discharge",
      "topSpeed": "85 km/h (unrestricted)",
      "range": "Up to 110 km",
      "chargeTime": "3.5 Hours",
      "weight": "63 kg",
      "drive": "Sealed oil-bath gearbox + 420 chain",
      "frame": "Reinforced 6061 T6 aluminium"
    },
    "images": [
      "/images/product-talaria-sting-r-mx4.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "sur-ron-ultra-bee",
    "name": "Sur-Ron Ultra Bee (74V 55Ah / 12.5kW)",
    "brand": "Sur-Ron",
    "price": 10990,
    "compareAtPrice": 11490,
    "category": "dirt-bikes",
    "badge": "High Performance",
    "featured": true,
    "shortDescription": "Full-sized mid-weight enduro electric bike with 12.5kW peak power, 440Nm torque, and integrated traction control (SRTC).",
    "description": "Bridging the gap between the lightweight Light Bee and heavy 450s, the Ultra Bee features full-size 19-inch off-road wheels, 74V 55Ah battery, reverse gear, and Sur-Ron\'s proprietary Traction Control System for slippery Australian mud and loose gravel.",
    "specs": {
      "motorPeak": "12,500 Watts (12.5kW)",
      "torque": "440 Nm at rear wheel",
      "battery": "74V 55Ah (4,070Wh)",
      "topSpeed": "90 km/h",
      "range": "Up to 140 km (eco mode)",
      "weight": "85 kg",
      "suspension": "240mm fully adjustable front and rear",
      "electronics": "SRTC Traction Control, 3 Riding Modes + Reverse"
    },
    "images": [
      "/images/product-sur-ron-ultra-bee.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "rfn-ares-rally-pro",
    "name": "RFN Ares Rally Pro (74V 35Ah / 12.5kW)",
    "brand": "RFN",
    "price": 8490,
    "compareAtPrice": 8990,
    "category": "dirt-bikes",
    "badge": "Dual-Ergo",
    "featured": true,
    "shortDescription": "Dual-ergonomics trials and enduro bike with modular seat, direct drive gear transmission, and 74V high-voltage power.",
    "description": "The RFN Ares Rally Pro is Australia\'s most versatile electric dirt bike, featuring a patented dual-ergonomics system that transforms between full enduro mode (with seat) and competition trials configuration (seat removed) in under 30 seconds. Powered by a 12.5kW motor running on a 74V 35Ah LG Chem cell battery, this electric trail bike delivers 85 km/h top speed and up to 100km trail range. The enclosed oil-bath helical primary drive eliminates belt noise and chain maintenance on Australian singletrack and fireroads. Aviation-grade 6082 forged aluminium frame handles the rigours of technical enduro riding, while three selectable riding modes — Turtle, Rabbit, and Rocket — plus reverse gear provide unmatched terrain versatility. Order through Electric Dirt Bike Australia with 12-month Australian factory warranty and free insured freight to all Australian states. Ideal for riders seeking one bike that handles both enduro trails and trials sections on the same property.",
    "specs": {
      "motorPeak": "12,500 Watts",
      "battery": "74V 35Ah (2,590Wh) LG Chem Cells",
      "topSpeed": "85 km/h",
      "range": "Up to 100 km",
      "weight": "68 kg (trials mode: 62kg)",
      "frame": "Aircraft grade 6082 forged aluminium",
      "modes": "Rabbit, Turtle, Rocket Modes + Reverse"
    },
    "images": [
      "/images/product-electric-enduro-72v.webp"
    ],
    "inStock": true
  },
  {
    "slug": "talaria-xxx-black-edition",
    "name": "Talaria XXX Black Edition (60V 40Ah)",
    "brand": "Talaria",
    "price": 5490,
    "compareAtPrice": 5890,
    "category": "dirt-bikes",
    "badge": "Lightweight Value",
    "featured": false,
    "shortDescription": "Ultra-nimble 50kg urban and trail electric bike with 6.5kW peak power and instant belt response.",
    "description": "The Talaria XXX brings the brand\'s acclaimed build quality into an accessible, featherlight chassis. Boasts a 60V 40Ah battery, full LED cockpit, regenerative braking, and superb ergonomics for agile trail navigation.",
    "specs": {
      "motorPeak": "6,500 Watts (6.5kW)",
      "battery": "60V 40Ah (2,400Wh)",
      "topSpeed": "75 km/h",
      "range": "Up to 80 km",
      "weight": "50 kg",
      "drive": "Carbon fiber reinforced belt drive"
    },
    "images": [
      "/images/product-talaria-xxx.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "e-ride-pro-ss-2-0",
    "name": "E-Ride Pro-SS 2.0 (72V 40Ah / 12kW)",
    "brand": "E-Ride Pro",
    "price": 8690,
    "compareAtPrice": 9190,
    "category": "dirt-bikes",
    "badge": "72V Factory Power",
    "featured": true,
    "shortDescription": "Factory 72V hyper-trail bike delivering 12kW peak output, turbo boost button, and inverted high-travel suspension.",
    "description": "The E-Ride Pro SS 2.0 is Australia\'s favourite domestically assembled electric enduro bike, delivering factory-native 72V power that imported rivals can only achieve through expensive aftermarket upgrades. Built in regional NSW, this electric dirt bike features a 12kW peak motor, Fastace dual-air inverted forks, CNC triple clamps, and quick-swap battery retention for extended trail adventures. The 72V 40Ah Samsung/Molicel battery provides 2,880Wh of capacity — translating to 95–105km of real-world Australian trail range. Instant wheelie capability requires zero modifications. Buying Australian means warranty claims are handled domestically without import delays — parts ship from the same Mittagong NSW 2575 warehouse as Electric Dirt Bike Australia\'s full accessories range. A turbo boost button delivers peak 12kW burst output for aggressive hill climbs and steep enduro sections. The E-Ride Pro brand is an EDBA-exclusive — browse the full lineup at electricdirtbikeaustralia.com.au.",
    "specs": {
      "motorPeak": "12,000 Watts (12kW)",
      "battery": "72V 40Ah (2,880Wh) Samsung 50E / Molicel",
      "topSpeed": "95 km/h",
      "range": "Up to 105 km",
      "weight": "64 kg",
      "suspension": "Fastace dual-air tuned inverted forks"
    },
    "images": [
      "/images/product-e-ride-pro-3-0.webp"
    ],
    "inStock": true
  },
  {
    "slug": "e-ride-pro-sr",
    "name": "E-Ride Pro-SR (72V 45Ah / 15kW Peak)",
    "brand": "E-Ride Pro",
    "price": 9990,
    "compareAtPrice": 10590,
    "category": "dirt-bikes",
    "badge": "Pro Flagship",
    "featured": false,
    "shortDescription": "The pinnacle of factory 72V performance. 15kW peak power, 45Ah high-capacity battery, and upgraded 4-piston calipers.",
    "description": "The E-Ride Pro SR is the pinnacle of the E-Ride Pro factory electric dirt bike lineup, delivering 15kW peak output through a high-discharge 72V 45Ah battery for riders who demand maximum power and endurance from their electric off-road machine. Built in regional NSW with CNC-machined components throughout, the SR features 220mm oversized floating front brake rotors for fade-free stopping on steep Victorian and NSW alpine descents. Heavy-duty 428 chain, reinforced swingarm pivots, and 4-piston hydraulic calipers front and rear handle the increased torque loads generated by the 15kW motor. Top speed exceeds 100 km/h in unrestricted mode, making the SR the fastest factory electric enduro bike in Electric Dirt Bike Australia\'s range. At $9,990 with 12-month factory warranty and free freight, the E-Ride Pro SR competes directly with imported European electric enduro bikes at a fraction of the ownership cost thanks to domestic service support.",
    "specs": {
      "motorPeak": "15,000 Watts (15kW)",
      "battery": "72V 45Ah (3,240Wh) High-Discharge",
      "topSpeed": "100+ km/h",
      "range": "Up to 120 km",
      "weight": "67 kg",
      "chain": "428 Heavy-Duty Gold Chain"
    },
    "images": [
      "/images/product-e-ride-pro-s17.webp"
    ],
    "inStock": true
  },
  {
    "slug": "rawrr-mantis-72v",
    "name": "Rawrr Mantis 72V High-Output Trail Bike",
    "brand": "Rawrr Mantis",
    "price": 8190,
    "compareAtPrice": 8690,
    "category": "dirt-bikes",
    "badge": "High Torque",
    "featured": false,
    "shortDescription": "Aggressive 72V electric trail weapon with internal gear reduction and 500Nm wheel torque for steep climbs.",
    "description": "The Rawrr Mantis is a high-torque electric dirt bike purpose-engineered for aggressive Australian enduro and rock-crawling terrain. Running a 72V 35Ah battery and 10kW peak motor, the Mantis generates 500Nm of wheel torque — enough traction to tackle steep granite outcrops in the Blue Mountains and loamy Victorian mountain bike trails without wheelspin or voltage sag. The low centre of gravity chassis with oversized inverted forks and progressive rear linkage suspension soaks up washouts, roots, and rocky creek crossings that would unsettle lesser electric off-road bikes. The robust 6061 alloy frame features reinforced gussets at high-stress points to handle repeated hard landings and 90kg+ riders. With 85 km/h top speed and up to 90km trail range, the Rawrr Mantis delivers enduro performance comparable to imported European machines. Available through Electric Dirt Bike Australia with 12-month warranty and free freight to all Australian states.",
    "specs": {
      "motorPeak": "10,000 Watts (10kW)",
      "battery": "72V 35Ah (2,520Wh)",
      "topSpeed": "85 km/h",
      "range": "Up to 90 km",
      "weight": "65 kg"
    },
    "images": [
      "/images/product-electric-enduro-72v.webp"
    ],
    "inStock": true
  },
  {
    "slug": "talaria-dragon-enduro",
    "name": "Talaria Dragon Full-Size Enduro (88V / 28kW)",
    "brand": "Talaria",
    "price": 13990,
    "compareAtPrice": 14790,
    "category": "dirt-bikes",
    "badge": "Full Size Enduro",
    "featured": true,
    "shortDescription": "Full-size electric enduro motorcycle with 88V architecture, 28kW peak output, and 21/18 full competition wheels.",
    "description": "The Talaria Dragon is Australia\'s most capable full-size electric enduro motorcycle, combining the proven Talaria oil-bath gearbox with an 88V 28kW powertrain and full-size 21-inch front and 18-inch rear competition wheel geometry. This electric enduro bike rivals 300cc two-stroke enduro machines in raw performance — delivering 0–100 km/h in under 4 seconds while maintaining a manageable 100kg total weight with battery. The 88V 58Ah (5,100Wh) high-discharge battery delivers 150km trail range in eco mode, making the Dragon ideal for multi-hour NSW and Victorian State Forest enduro adventures without range anxiety. 250mm of fully adjustable suspension travel, hydraulic clutch control, and 4-piston Brembo-spec brakes provide championship-grade capability across Australian hard enduro terrain. Available through Electric Dirt Bike Australia with free national freight and 12-month factory warranty. Full technical documentation at talariausa.com.",
    "specs": {
      "motorPeak": "28,000 Watts (28kW)",
      "battery": "88V 58Ah (5,100Wh) High Discharge",
      "topSpeed": "110 km/h",
      "range": "Up to 150 km",
      "weight": "100 kg",
      "wheels": "21-inch front / 18-inch rear off-road knobby"
    },
    "images": [
      "/images/product-electric-enduro-72v.webp"
    ],
    "inStock": true
  },
  {
    "slug": "sur-ron-storm-bee-enduro",
    "name": "Sur-Ron Storm Bee Enduro (104V 55Ah / 22.5kW)",
    "brand": "Sur-Ron",
    "price": 15490,
    "compareAtPrice": 16290,
    "category": "dirt-bikes",
    "badge": "Heavy Enduro",
    "featured": false,
    "shortDescription": "Full-sized electric enduro motorcycle with 104V high-voltage power, 520Nm torque, and 4 riding modes.",
    "description": "The Sur-Ron Storm Bee Enduro is the most powerful electric enduro motorbike in Australia, delivering 22.5kW peak power, 520Nm of wheel torque, and a 104V 55Ah Sony VTC6 lithium battery engineered for sustained enduro racing. Built on a CNC-machined forged aluminium perimeter frame with 290mm ground clearance, this full-size electric enduro motorcycle conquers Australian alpine trails with liquid-cooled sine-wave FOC control across Eco, Rain, Sport, Turbo, and Reverse modes. Approved for use at leading Australian off-road parks and available with 12-month warranty support from [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/). Full specification detailed at [Sur-Ron Global](https://www.sur-ron.com/).",
    "specs": {
      "motorPeak": "22,500 Watts (22.5kW)",
      "battery": "104V 55Ah (5,720Wh) Sony VTC6 Lithium",
      "topSpeed": "110 km/h",
      "range": "Up to 120 km",
      "weight": "127 kg",
      "modes": "Eco, Rain, Sport, Turbo + Reverse"
    },
    "images": [
      "/images/product-sur-ron-storm-bee.webp"
    ],
    "inStock": true
  },
  {
    "slug": "segway-x260-dirt-ebike",
    "name": "Segway Powersports X260 Electric Dirt eBike",
    "brand": "Segway",
    "price": 6790,
    "compareAtPrice": 7290,
    "category": "dirt-bikes",
    "badge": "Smart Telemetry",
    "featured": false,
    "shortDescription": "Refined electric trail machine with Segway smart smartphone connectivity, dual-drive system, and 5kW power.",
    "description": "The Segway Powersports X260 is the smartest electric trail bike in Australia, pairing a 5kW mid-drive motor with proprietary Bluetooth app telemetry for real-time power tuning. Adjust ride modes, set speed limiters for junior riders, and dial regenerative braking intensity without tools — all from the Segway Powersports smartphone app. The dual-drive system delivers 75 km/h on a 60V 32Ah lithium battery with up to 90 km of range across Australian bush tracks. Advanced traction management and ABS-grade braking make this the most technology-forward electric dirt bike under $7,000 in Australia. Genuine Australian stock with 12-month warranty from [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/). Reviewed by [Dirt Action Magazine](https://www.dirtaction.com.au/).",
    "specs": {
      "motorPeak": "5,000 Watts (5kW)",
      "battery": "60V 32Ah Lithium-ion",
      "topSpeed": "75 km/h",
      "range": "Up to 90 km",
      "weight": "55 kg"
    },
    "images": [
      "/images/product-electric-fat-tire-60v.webp"
    ],
    "inStock": true
  },
  {
    "slug": "segway-x160-compact",
    "name": "Segway Powersports X160 Compact Youth Dirt Bike",
    "brand": "Segway",
    "price": 4690,
    "compareAtPrice": 4990,
    "category": "dirt-bikes",
    "badge": "Youth & Junior",
    "featured": false,
    "shortDescription": "Compact, ultra-lightweight electric trail bike with 17-inch wheels and approachable seat height for teenagers and smaller riders.",
    "description": "The Segway X160 is a compact youth electric dirt bike designed specifically for teenage and smaller adult riders seeking an approachable entry into off-road electric trail riding. At 48kg with a 3kW motor and 48V 20Ah lithium battery, the X160 delivers a smooth, progressive power curve that builds rider confidence without overwhelming beginners. The compact 17-inch wheel configuration and seat height under 800mm suit riders 150cm–170cm tall, making it ideal as a first electric motorbike for teenagers or a lightweight second bike for smaller adults. Top speed of 50 km/h and 65km range per charge cover typical weekend property and trail riding sessions comfortably. No clutch, no gears — just twist and ride. Available through Electric Dirt Bike Australia with free freight and 12-month warranty, the X160 is the recommended entry-level electric dirt bike for juniors stepping up from kids electric bikes.",
    "specs": {
      "motorPeak": "3,000 Watts",
      "battery": "48V 20Ah Lithium",
      "topSpeed": "50 km/h",
      "range": "Up to 65 km",
      "weight": "48 kg"
    },
    "images": [
      "/images/product-electric-mini-bike-36v.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "caofen-f80-dual-sport",
    "name": "Caofen F80 Dual Sport Electric Dirt Bike",
    "brand": "Caofen",
    "price": 8290,
    "compareAtPrice": 8790,
    "category": "dirt-bikes",
    "badge": "Monocoque Frame",
    "featured": false,
    "shortDescription": "Revolutionary one-piece magnesium unibody frame with patented battery immersion cooling for extreme Australian heat.",
    "description": "The Caofen F80 is a revolutionary electric dirt bike built around a zero-weld high-pressure die-cast magnesium unibody frame — a world-first monocoque construction that eliminates stress cracks and frame fatigue that affect traditional welded aluminium electric bike frames. The patented oil-immersion battery cooling system actively circulates thermal oil around the 72V 48Ah lithium cells, maintaining optimal operating temperature in Australian summer conditions where ambient temperatures regularly exceed 40°C. This innovative battery cooling extends cell lifespan significantly compared to passively cooled battery packs. With 8kW peak power, 85 km/h top speed, and 120km trail range, the F80 delivers serious electric enduro performance in a technologically advanced package. The F80 appeals to engineering-minded riders who appreciate innovation in electric off-road bike design. Available through Electric Dirt Bike Australia with 12-month warranty and free national freight.",
    "specs": {
      "motorPeak": "8,000 Watts",
      "battery": "72V 48Ah Immersion Cooled",
      "topSpeed": "85 km/h",
      "range": "Up to 120 km",
      "weight": "80 kg"
    },
    "images": [
      "/images/product-electric-enduro-72v.webp"
    ],
    "inStock": true
  },
  {
    "slug": "arctic-leopard-e-xe-880",
    "name": "Arctic Leopard E-XE 880 Enduro Electric Bike",
    "brand": "Arctic Leopard",
    "price": 11490,
    "compareAtPrice": 12190,
    "category": "dirt-bikes",
    "badge": "Pro Enduro",
    "featured": false,
    "shortDescription": "Competition enduro weapon with 15kW peak motor, mechanical clutch, and lightweight 68kg total weight.",
    "description": "The Arctic Leopard E-XE 880 is a competition-grade electric enduro bike engineered for Australia\'s most demanding technical hard enduro terrain — steep granite sections, tight mountain switchbacks, and log-strewn Victorian rainforest tracks. The defining feature is a hydraulic multi-plate manual clutch — rare in electric dirt bikes — allowing riders to pop wheelies over logs, preload suspension for big drops, and modulate power delivery with the finesse of a traditional petrol enduro machine. Powered by a 15kW peak motor running on a 72V 43Ah high-output battery, the E-XE 880 produces 95 km/h top speed with the kind of precise torque control that skilled hard enduro riders demand. At 68kg with battery, it is lighter than most comparable electric enduro motorcycles, reducing rider fatigue during technical sections. Available from Electric Dirt Bike Australia with 12-month warranty and free freight.",
    "specs": {
      "motorPeak": "15,000 Watts (15kW)",
      "battery": "72V 43Ah High Output",
      "topSpeed": "95 km/h",
      "clutch": "Hydraulic multi-plate manual clutch",
      "weight": "68 kg"
    },
    "images": [
      "/images/product-electric-fat-tire-60v.webp"
    ],
    "inStock": true
  },
  {
    "slug": "stealth-b-52-bomber",
    "name": "Stealth B-52 Bomber Australian Electric Moto",
    "brand": "Stealth Electric Bikes",
    "price": 12990,
    "compareAtPrice": 13890,
    "category": "dirt-bikes",
    "badge": "Australian Engineered",
    "featured": true,
    "shortDescription": "Iconic Australian-built hyper-bike with 5.2kW output, 9-speed sequential gearbox, and chromoly monocoque frame.",
    "description": "The Stealth B-52 Bomber is one of Australia\'s most iconic electric dirt bikes — designed and engineered in Melbourne for over a decade, it pioneered the category of high-performance Australian-made electric off-road motorcycles. The ultra-strong chromoly steel monocoque frame, proprietary 9-speed sequential gearbox, and inverted front suspension make the B-52 the most mechanically sophisticated electric bike available in Australia. Producing 5.2kW from a 2.5kWh high-discharge lithium battery, the Bomber delivers 80 km/h top speed and up to 100km trail range. The 9-speed gearbox allows riders to select optimal torque curves for climbing, flat-out speed, or technical trail manoeuvring. Australian engineering means service, parts, and warranty support are available domestically without international delays. Available through Electric Dirt Bike Australia with 12-month warranty and free national freight. Supporting Australian electric motorcycle manufacturing.",
    "specs": {
      "motorPeak": "5,200 Watts (5.2kW)",
      "battery": "2.5kWh High-Discharge Lithium",
      "topSpeed": "80 km/h",
      "range": "Up to 100 km",
      "weight": "53 kg",
      "transmission": "9-speed sequential gearbox",
      "origin": "Australian Design & Engineering"
    },
    "images": [
      "/images/product-electric-enduro-72v.webp"
    ],
    "inStock": true
  },
  {
    "slug": "stealth-f-37-trail-fighter",
    "name": "Stealth F-37 Dual-Sport Trail Fighter",
    "brand": "Stealth Electric Bikes",
    "price": 10490,
    "compareAtPrice": 11190,
    "category": "dirt-bikes",
    "badge": "Australian Engineered",
    "featured": false,
    "shortDescription": "Agile 3.7kW trail bike designed in Australia for singletrack flow, technical climbs, and silent bush exploration.",
    "description": "The Stealth F-37 Trail Fighter is the agile little sibling of the iconic Stealth B-52 Bomber — designed in Melbourne specifically for Australian singletrack, tight bush corridors, and technical trail sections where flickability and precise balance matter more than outright speed. Delivering 3.7kW through a 2-speed internal gearbox, the F-37 can navigate slow technical sections in low gear before opening up to 65 km/h in high gear on wide fireroads. Long-travel suspension absorbs Australian rock gardens and tree-root networks with confidence. At 44kg, it is lighter than any comparable electric trail bike with similar power, making it easy to manoeuvre in tight spaces and recover from tipover situations without assistance. The Australian-designed chromoly frame reflects real bush-riding heritage rather than European track-focused geometry. Available through Electric Dirt Bike Australia with 12-month warranty.",
    "specs": {
      "motorPeak": "3,700 Watts (3.7kW)",
      "battery": "2.0kWh Lithium Pack",
      "topSpeed": "65 km/h",
      "range": "Up to 80 km",
      "weight": "44 kg"
    },
    "images": [
      "/images/product-electric-enduro-72v.webp"
    ],
    "inStock": true
  },
  {
    "slug": "super73-rx-mojave",
    "name": "Super73-RX Mojave Scrambler Electric Moto",
    "brand": "Super73",
    "price": 5490,
    "compareAtPrice": 5890,
    "category": "dirt-bikes",
    "badge": "Urban Scrambler",
    "featured": false,
    "shortDescription": "Iconic street & trail adventure cruiser with inverted coil-spring fork, rear piggyback coilover, and GRZLY all-terrain tyres.",
    "description": "The Super73-RX Mojave is the flagship adventure electric bike from Super73 — blending aggressive scrambler styling, dual-sport capability, and a powerful 2,000W peak motor into one of the most versatile electric bikes available in Australia. Built on a durable aluminium chassis with an inverted coil-spring fork, piggyback rear coilover shock, and aggressive GRZLY all-terrain tyres, the RX Mojave tackles everything from beach sand and coastal fire trails to urban bike lanes and suburban commuting. The 960Wh removable battery delivers 65–120km range depending on assist mode — from full throttle off-road blasting to gentle pedal-assist city cruising. Magura 4-piston hydraulic disc brakes provide confident stopping from the 50+ km/h top speed. Super73's global community of riders demonstrates the brand\'s cultural appeal alongside its engineering quality. Available from Electric Dirt Bike Australia with 12-month warranty and Australia-wide free freight.",
    "specs": {
      "motorPeak": "2,000 Watts peak off-road",
      "battery": "960 Watt-hours removable battery",
      "topSpeed": "50+ km/h (off-road mode)",
      "range": "65-120 km depending on assist mode",
      "brakes": "Magura 4-piston hydraulic disc brakes"
    },
    "images": [
      "/images/product-electric-fat-tire-60v.webp"
    ],
    "inStock": true
  },
  {
    "slug": "super73-s2-adventure",
    "name": "Super73-S2 Adventure Series Moto Cruiser",
    "brand": "Super73",
    "price": 4990,
    "compareAtPrice": 5390,
    "category": "dirt-bikes",
    "badge": "Classic Moto",
    "featured": false,
    "shortDescription": "Sport-cruiser electric motorbike with aircraft aluminium frame, air-assisted suspension fork, and retro moto headlamp.",
    "description": "The Super73-S2 Adventure Series is a classic moto-cruiser electric bike that blends authentic 1970s scrambler styling with modern electric assist technology — delivering an iconic riding experience for Australian suburban commuters, café riders, and weekend beach-trail adventurers. The aircraft aluminium monocoque frame, air-assisted suspension fork, and retro moto headlamp create genuine visual presence, while the 2,000W peak motor and 960Wh lithium-ion battery deliver up to 120km range in eco mode. With a low 790mm seat height and relaxed riding posture, the S2 is approachable for new electric bike riders and comfortable for daily commuting through Australian city traffic. Fat 20-inch all-terrain tyres handle sandy beach fire trails and loose gravel tracks without compromising urban ride quality. At 33kg, the S2 is light enough to carry up stairs and store in small apartments. Available from Electric Dirt Bike Australia with free freight and 12-month warranty.",
    "specs": {
      "motorPeak": "2,000 Watts peak",
      "battery": "960Wh Lithium-ion",
      "topSpeed": "45+ km/h",
      "range": "Up to 120 km in eco mode",
      "weight": "33 kg"
    },
    "images": [
      "/images/product-electric-fat-tire-60v.webp"
    ],
    "inStock": true
  },
  {
    "slug": "velimotor-vmx08-carbon",
    "name": "Velimotor VMX08 Ultra-Light Carbon Electric Dirt Bike",
    "brand": "Velimotor",
    "price": 7990,
    "compareAtPrice": 8490,
    "category": "dirt-bikes",
    "badge": "Full Carbon",
    "featured": false,
    "shortDescription": "High-strength carbon fiber monocoque frame weighing under 48kg ready to ride. 8kW peak output.",
    "description": "The Velimotor VMX08 is an ultra-light electric dirt bike constructed from high-modulus Japanese carbon fibre throughout the main frame, swingarm, and subframe — creating one of the lightest high-power electric off-road bikes available in Australia at just 47.5kg ready to ride. Despite its featherlight construction, the VMX08 delivers 8kW peak output from a 72V 35Ah high-discharge battery, achieving 85 km/h top speed with the kind of rapid direction changes and flickable handling that heavy steel-framed electric dirt bikes cannot match. Carbon fibre\'s superior rigidity-to-weight ratio ensures the VMX08 remains precise and responsive even at high speeds over rough Australian terrain, without the flex that can affect aluminium frames under aggressive loads. This electric trail bike is ideal for smaller riders, female riders, and lightweight performance enthusiasts who want maximum power without carrying extra kilograms. Available from Electric Dirt Bike Australia with 12-month warranty and free national freight.",
    "specs": {
      "motorPeak": "8,000 Watts (8kW)",
      "battery": "72V 35Ah High Discharge",
      "topSpeed": "85 km/h",
      "weight": "47.5 kg",
      "frame": "Full High-Modulus Carbon Fiber"
    },
    "images": [
      "/images/product-electric-enduro-72v.webp"
    ],
    "inStock": true
  },
  {
    "slug": "torrot-motocross-two-junior",
    "name": "Torrot Motocross Two Electric Junior Dirt Bike",
    "brand": "Torrot",
    "price": 3690,
    "compareAtPrice": 3990,
    "category": "dirt-bikes",
    "badge": "Junior (6-11 Yrs)",
    "featured": false,
    "shortDescription": "Premium European electric motocross bike for young riders with parental smartphone speed & power controls.",
    "description": "The Torrot Motocross Two is a premium European-engineered kids electric motorbike built in Spain for junior riders aged 6–11 years. As the global benchmark for junior electric motocross training, Torrot bikes are used at youth development academies across Australia and Europe, providing the closest electric analogue to factory petrol youth motocross bikes. The Bluetooth wireless parental app gives parents complete control over top speed (1–60 km/h), acceleration sensitivity, and engine braking — adjustable in real time from a smartphone without tools or interrupting the ride. The quick-swap 48V 10.4Ah LiNiCoMn battery recharges in under 90 minutes for all-day riding sessions. At 32kg, young riders can confidently right the bike after minor tipover incidents without adult assistance. The Torrot\'s authentic motocross geometry, sealed chain drive, and quality Spanish engineering make it the kids electric dirt bike of choice for serious junior motocross development. Available from Electric Dirt Bike Australia.",
    "specs": {
      "motorPeak": "1,500 Watts",
      "battery": "48V 10.4Ah LiNiCoMn quick-swap",
      "weight": "32 kg",
      "controls": "Parental App Bluetooth Limiter"
    },
    "images": [
      "/images/product-oset-20-0-junior.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "kuberg-ranger-multi-purpose",
    "name": "Kuberg Ranger Multi-Purpose Electric Dirt Bike",
    "brand": "Kuberg",
    "price": 7690,
    "compareAtPrice": 8190,
    "category": "dirt-bikes",
    "badge": "Utility Trail",
    "featured": false,
    "shortDescription": "Czech-built dual-ride position electric bike with pneumatic drop seat, 14kW motor, and rugged utility frame.",
    "description": "The Kuberg Ranger is a uniquely versatile electric off-road bike designed in the Czech Republic with Australian rural property management, farm riding, and utility trail work firmly in mind. The patented pneumatic drop-seat system adjusts the seat height instantly without tools — lower it flush for stand-up trials-style navigation over obstacles, or raise it for comfortable seated trail cruising across paddocks. A powerful 14kW motor runs on a dual 48V 48Ah battery pack, providing exceptional range for all-day property work sessions. The Ranger is the preferred electric dirt bike for Australian farmers who want to move quietly around livestock, check fences, and navigate rough property terrain without diesel noise or exhaust fumes. At 50kg with batteries, the Kuberg handles most of what a farm quad bike does at a fraction of the running cost. Available from Electric Dirt Bike Australia with 12-month warranty and free national freight.",
    "specs": {
      "motorPeak": "14,000 Watts (14kW)",
      "battery": "48V 48Ah double battery pack",
      "topSpeed": "80 km/h",
      "weight": "50 kg"
    },
    "images": [
      "/images/product-kuberg-freerider.avif"
    ],
    "inStock": true
  },
  {
    "slug": "stark-varg-ex-80hp",
    "name": "Stark Varg EX 80HP Competition Motocross",
    "brand": "Stark Varg",
    "price": 18990,
    "compareAtPrice": 19990,
    "category": "motocross",
    "badge": "Pro Premium 80HP",
    "featured": true,
    "shortDescription": "The world\'s most powerful motocross bike. 80HP, 938Nm torque, KYB 310mm suspension, and custom smartphone power curves.",
    "description": "The Stark Varg EX is the world\'s most powerful production electric motocross bike, delivering 80HP and 938Nm of rear-wheel torque from a patent-pending carbon-sleeved motor operating at 14,000 RPM — outperforming every factory 450cc four-stroke motocross machine in direct acceleration tests. Built by Swedish manufacturer Stark Future (starkfuture.com), the Varg EX has already competed at FIM Motocross World Championship events, proving it is a serious racing tool, not a lifestyle product. KYB 310mm factory-spec suspension, Brembo hydraulic brakes, and a structural honeycomb battery housing complete a championship-calibre package. The waterproof smartphone display allows riders to program over 100 unique power curves — from a manageable beginner-friendly 50cc equivalent to full 80HP race assault mode. At 118kg, it directly matches the weight of a competitive 450cc four-stroke. Australia\'s authorised Stark dealer is Electric Dirt Bike Australia, with 12-month factory warranty and free national freight.",
    "specs": {
      "motorPeak": "80 Horsepower (60kW)",
      "torque": "938 Nm at rear wheel",
      "battery": "6.0 kWh Patent-pending flying V architecture",
      "runtime": "Up to 6 hours trail riding / full MX GP heat",
      "suspension": "KYB 310mm travel front and rear (48mm closed cartridge)",
      "weight": "118 kg ready to ride",
      "modes": "Over 100 customizable power curves via waterproof phone display"
    },
    "images": [
      "/images/product-stark-varg-mx.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "stark-varg-alpha-60hp",
    "name": "Stark Varg Alpha 60HP Motocross",
    "brand": "Stark Varg",
    "price": 16990,
    "compareAtPrice": 17790,
    "category": "motocross",
    "badge": "Pro 60HP",
    "featured": false,
    "shortDescription": "Competition motocross standard model with 60HP output, KYB suspension, and Brembo hydraulic braking.",
    "description": "The Stark Varg Alpha is the entry point to the world\'s most advanced electric motocross platform, delivering 60HP of competition motocross performance that surpasses factory 350cc four-stroke machines in lap time testing at sanctioned tracks. The Alpha uses the identical chassis, KYB 48mm closed-cartridge suspension, and Brembo hydraulic braking system as the full 80HP EX model — the only difference is the power output, which is upgradeable to 80HP via a paid software unlock from Stark Future (starkfuture.com). Zero clutch fade, instantaneous throttle response from 0 RPM, and completely customizable power curves via the waterproof smartphone display make the Varg Alpha the ideal competitive electric motocross bike for Australian club racers and professional track riders. At $16,990 with 12-month warranty through Electric Dirt Bike Australia, it delivers championship performance at a price point competitive with premium 450cc four-strokes when lifetime running costs are considered.",
    "specs": {
      "motorPeak": "60 Horsepower (45kW)",
      "torque": "820 Nm at rear wheel",
      "battery": "6.0 kWh Structural Honeycomb Battery",
      "suspension": "KYB 48mm closed cartridge 310mm travel",
      "weight": "118 kg"
    },
    "images": [
      "/images/product-stark-varg-mx.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "sur-ron-storm-bee-mx",
    "name": "Sur-Ron Storm Bee MX Track Edition (22.5kW)",
    "brand": "Sur-Ron",
    "price": 14490,
    "compareAtPrice": 15190,
    "category": "motocross",
    "badge": "Track Weapon",
    "featured": false,
    "shortDescription": "Dedicated stripped-back track motocross edition with competition 21/18 wheelset and lightweight harness.",
    "description": "The Sur-Ron Storm Bee MX Track Edition is a purpose-built electric motocross machine stripped of all road-use hardware and optimised exclusively for closed-circuit track performance. Delivering 22.5kW peak motor output and 520Nm rear-wheel torque from a 104V 55Ah battery, this electric motocross bike competes directly with 250cc–450cc petrol motocross machines in real lap-time comparisons at Australian tracks. Stiffened suspension valving handles the high-speed compression loads of motocross jumps and table-tops. High-tensile competition spoke wheels with 21-inch front and 18-inch rear knobby tyres match standard motocross track geometry. At 122kg, the Storm Bee MX is slightly heavier than 450cc petrol alternatives but eliminates fuel costs, valve clearances, piston rebuilds, and exhaust system maintenance. Available exclusively through Electric Dirt Bike Australia — Australia\'s authorised Sur-Ron dealer — with 12-month factory warranty and free national freight to all Australian states.",
    "specs": {
      "motorPeak": "22,500 Watts (22.5kW)",
      "torque": "520 Nm at rear wheel",
      "battery": "104V 55Ah (5,720Wh)",
      "weight": "122 kg",
      "wheels": "21-inch front / 18-inch rear competition MX knobbies"
    },
    "images": [
      "/images/product-sur-ron-storm-bee.webp"
    ],
    "inStock": true
  },
  {
    "slug": "velimotor-vmx12-motocross",
    "name": "Velimotor VMX12 12kW High-Power Motocross",
    "brand": "Velimotor",
    "price": 8990,
    "compareAtPrice": 9490,
    "category": "motocross",
    "badge": "Competition MX",
    "featured": false,
    "shortDescription": "Dedicated 12kW electric motocross bike with 4-speed manual gearbox and 72V architecture.",
    "description": "The Velimotor VMX12 is a unique electric motocross bike that combines the instant torque advantages of an electric motor with the precise power band control of a traditional 4-speed manual gearbox and multi-plate wet clutch. This design philosophy makes the VMX12 the easiest electric motocross bike for experienced petrol dirt bike riders to transition into — retaining the gear-shifting habits and clutch-work techniques that traditional motocross riders have spent years developing. The 12kW motor running on a 72V 58Ah high-output battery delivers 105 km/h top speed with the kind of peak-power management that gearless electric bikes cannot provide. Carbon fibre bodywork, cast aluminium wheels, and full competition geometry at 105kg total weight complete a serious motocross package. Available through Electric Dirt Bike Australia with 12-month warranty and free freight to all Australian states.",
    "specs": {
      "motorPeak": "12,000 Watts (12kW)",
      "battery": "72V 58Ah High Output Lithium",
      "transmission": "4-speed manual gearbox with multi-plate wet clutch",
      "topSpeed": "105 km/h",
      "weight": "105 kg"
    },
    "images": [
      "/images/product-sur-ron-storm-bee.webp"
    ],
    "inStock": true
  },
  {
    "slug": "stealth-h-52-competition",
    "name": "Stealth H-52 Competition Track Machine",
    "brand": "Stealth Electric Bikes",
    "price": 13490,
    "compareAtPrice": 14290,
    "category": "motocross",
    "badge": "Australian Engineered",
    "featured": false,
    "shortDescription": "Australian pure throttle electric dirt weapon. Direct-drive brushless DC hubless motor delivering 5,200W.",
    "description": "The Stealth H-52 Competition is an Australian-engineered electric motocross machine that combines the heritage of Stealth Electric Bikes' Melbourne design studio with pure closed-circuit track performance. Stripped of all road-use hardware — no headlights, no reflectors, no street compliance gear — the H-52 features genuine motorcycle footpegs, high-travel downhill suspension tuned for motocross jump landings, and Stealth\'s iconic chromoly steel monocoque frame. The direct-drive 5,200W brushless DC hub motor delivers instant, clutchless torque from zero RPM, perfectly suited to tight motocross track layouts where smooth, predictable power delivery wins corners. At 49kg total weight, the H-52 is significantly lighter than comparable petrol competition machines, providing a real handling advantage on tight technical Australian motocross circuits. Available through Electric Dirt Bike Australia — proud supporters of Australian electric motorcycle engineering — with 12-month warranty and free freight.",
    "specs": {
      "motorPeak": "5,200 Watts",
      "battery": "2.5kWh Lithium Pack",
      "topSpeed": "80 km/h",
      "weight": "49 kg"
    },
    "images": [
      "/images/product-electric-enduro-72v.webp"
    ],
    "inStock": true
  },
  {
    "slug": "72v-42ah-lithium-battery-upgrade",
    "name": "72V 42Ah High-Discharge Lithium Battery Pack",
    "brand": "EDBA Performance",
    "price": 2190,
    "compareAtPrice": 2390,
    "category": "accessories",
    "badge": "Best Seller",
    "featured": true,
    "shortDescription": "Custom Australian-built 72V 42Ah battery upgrade for Sur-Ron Light Bee X and Talaria. Massive 3,024Wh capacity.",
    "description": "Unlock maximum electric dirt bike performance with the EDBA 72V 42Ah High-Discharge Lithium Battery — Australia\'s most popular 72V upgrade pack for Sur-Ron Light Bee X and Talaria Sting R riders. Hand-assembled with genuine Molicel P42A 21700 cells, this 72V battery delivers 250 Amps continuous and 350A peak discharge — providing instant wheelie torque and sustained hill-climbing power that 60V stock packs cannot match. The 72V architecture reduces motor heat by drawing less current for the same power output, extending motor and controller lifespan significantly. The ANT Bluetooth Smart BMS provides real-time cell voltage monitoring, temperature protection, and state-of-charge display via smartphone — ensuring the safest possible operation for your 72V electric dirt bike. 24-month replacement warranty from Electric Dirt Bike Australia. Capacity: 3,024Wh. Australian plug-compatible chargers available separately. The single most impactful electric dirt bike upgrade available in Australia.",
    "specs": {
      "voltage": "72V Nominal (84V Full Charge)",
      "capacity": "42Ah (3,024Wh)",
      "continuousDischarge": "250 Amps (350A Peak)",
      "cells": "Grade-A Molicel 21700 High-Drain Cells",
      "bms": "Smart Bluetooth BMS with temperature cutoffs",
      "warranty": "24 Months Replacement Warranty"
    },
    "images": [
      "/images/product-72v-40ah-battery.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "72v-50ah-long-range-battery",
    "name": "72V 50Ah Long-Range Touring Lithium Battery",
    "brand": "EDBA Performance",
    "price": 2590,
    "compareAtPrice": 2790,
    "category": "accessories",
    "badge": "Max Range",
    "featured": false,
    "shortDescription": "High-capacity 3,600Wh battery built with Samsung 50S high-density cells for 130km+ trail adventures.",
    "description": "Achieve 130km+ of uninterrupted Australian bush trail riding on a single charge with the EDBA 72V 50Ah Long-Range Touring Battery — built with Samsung 50S 21700 high-density cells for maximum range without sacrificing battery lifespan. The Samsung 50S cell delivers 5,000mAh capacity per cell — 500mAh more than the Molicel P45B — making this 72V battery the ideal choice for long endurance rides across NSW State Forests, Victorian High Country trails, and Queensland rainforest singletrack where charge points are unavailable. The 3,600Wh total capacity extends riding sessions by over 50% compared to stock 60V 40Ah packs. Direct drop-in fit for Sur-Ron Light Bee X and Talaria Sting R battery bays with the included extended lid latch kit ensures zero modification is required. This 72V long-range battery is the definitive electric dirt bike upgrade for Australian endurance riders. Available from Electric Dirt Bike Australia with 24-month warranty.",
    "specs": {
      "voltage": "72V Nominal (84V Peak)",
      "capacity": "50Ah (3,600Wh)",
      "cells": "Samsung 50S 21700 High-Energy Cells",
      "range": "130+ km on medium assist",
      "weight": "16.5 kg"
    },
    "images": [
      "/images/product-72v-60ah-battery.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "60v-53ah-high-capacity-pack",
    "name": "60V 53Ah High-Capacity Battery Pack (Stock Controller Safe)",
    "brand": "EDBA Performance",
    "price": 1990,
    "compareAtPrice": 2190,
    "category": "accessories",
    "badge": "Plug & Play 60V",
    "featured": false,
    "shortDescription": "Massive range upgrade that works 100% safely with your factory Sur-Ron or Talaria 60V controller.",
    "description": "Extend your electric dirt bike range by up to 60% without replacing the controller — the EDBA 60V 53Ah High-Capacity Battery Pack is a pure plug-and-play upgrade designed to work 100% safely with factory Sur-Ron Light Bee X and Talaria 60V controllers. At 3,180Wh total capacity (53Ah vs the factory 40Ah), this 60V battery delivers the longest available range in the factory-voltage battery upgrade category. Heavy-duty stainless-steel casing provides superior protection against rock impacts on Australian bush trails. The Bluetooth Smart BMS with active cell balancing ensures every cell charges and discharges evenly, preventing premature capacity degradation that affects cheaper battery packs. Compatible with Sur-Ron Light Bee X, Segway X260, Talaria Sting, and other 60V electric dirt bikes. No controller upgrade required — ideal for riders who want maximum range without voiding factory controller warranty. Available from Electric Dirt Bike Australia with 24-month replacement warranty.",
    "specs": {
      "voltage": "60V Nominal (67.2V Full Charge)",
      "capacity": "53Ah (3,180Wh)",
      "compatibility": "Sur-Ron Light Bee X, Segway X260, Talaria",
      "bms": "Bluetooth Smart BMS with active cell balancing"
    },
    "images": [
      "/images/product-72v-60ah-battery.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "84v-45ah-extreme-voltage-battery",
    "name": "84V 45Ah Extreme Voltage Race Battery Pack",
    "brand": "EDBA Performance",
    "price": 2790,
    "compareAtPrice": 2990,
    "category": "accessories",
    "badge": "Extreme Race",
    "featured": false,
    "shortDescription": "The ultimate 84V high-voltage race pack for Torp and EBMX tuned bikes. Delivers over 18kW burst output.",
    "description": "The EDBA 84V 45Ah Extreme Voltage Race Battery is an uncompromising closed-course competition battery pack engineered for maximum peak power output in drag racing, sprint events, and Australian electric dirt bike competitions. Delivering 300 Amps continuous and 450A burst discharge at 84V nominal voltage, this race battery pack pushes electric dirt bike motor power beyond 18kW peak output when paired with a Torp TC1000 or EBMX X-9000 controller. High-purity nickel-copper sandwich busbars carry massive current without resistance heating, while dual thermal protection sensors prevent controller and motor damage during sustained race runs. Compatible exclusively with Torp TC1000, EBMX X-9000, and KO Nano controllers — not suitable for factory stock controllers. This 84V race battery is a competition-only product: Electric Dirt Bike Australia recommends consultation with our technical team before purchase. Available with 12-month conditional warranty.",
    "specs": {
      "voltage": "84V Nominal (96.6V Peak)",
      "capacity": "45Ah (3,780Wh)",
      "discharge": "300 Amps continuous / 450A peak burst",
      "compatibility": "Torp TC1000 / EBMX X-9000 / KO Nano"
    },
    "images": [
      "/images/product-72v-40ah-battery.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "sur-ron-oem-60v-40ah-replacement",
    "name": "Sur-Ron Genuine OEM 60V 40Ah Replacement Battery",
    "brand": "Sur-Ron",
    "price": 1790,
    "compareAtPrice": 1990,
    "category": "accessories",
    "badge": "Genuine OEM",
    "featured": false,
    "shortDescription": "Original factory replacement 60V 40Ah battery with Panasonic/Samsung cells for Sur-Ron Light Bee X.",
    "description": "The Sur-Ron Genuine OEM 60V 40Ah Replacement Battery is the only factory-authorised replacement battery for the Sur-Ron Light Bee X electric dirt bike, maintaining 100% factory specification and preserving your full Sur-Ron warranty. Built with Panasonic and Samsung 21700 cells — the same cell brands Sur-Ron uses in new production bikes — this OEM replacement battery restores your Light Bee X to exactly its original performance specification. The aluminium extrusion housing with rubberised impact bumpers protects cells during the inevitable rough handling of off-road electric bike use. An integrated LED state-of-charge display provides at-a-glance battery level indication without requiring the bike\'s display to be powered. At $1,790 with genuine factory warranty, this is the recommended replacement when your original battery develops reduced capacity after years of riding. Available from Electric Dirt Bike Australia — Australia\'s authorised Sur-Ron dealer.",
    "specs": {
      "voltage": "60V Nominal",
      "capacity": "40Ah (2,400Wh)",
      "casing": "Aluminium extrusion housing with rubberised bumpers",
      "weight": "11.5 kg"
    },
    "images": [
      "/images/product-sur-ron-oem-battery.webp"
    ],
    "inStock": true
  },
  {
    "slug": "talaria-oem-60v-45ah-replacement",
    "name": "Talaria Genuine OEM 60V 45Ah Replacement Battery",
    "brand": "Talaria",
    "price": 1890,
    "compareAtPrice": 2090,
    "category": "accessories",
    "badge": "Genuine OEM",
    "featured": false,
    "shortDescription": "Original factory replacement battery with 45Ah capacity for Talaria Sting R MX4.",
    "description": "The Talaria Genuine OEM 60V 45Ah Replacement Battery is the only factory-approved replacement battery for the Talaria Sting R MX4 electric dirt bike, restoring full factory performance with genuine Talaria cells and the proprietary multi-pin connector. This OEM battery maintains the Talaria\'s high-discharge 45Ah capacity that enables the sealed gearbox system to draw peak current reliably during hill climbs and acceleration runs. Talaria\'s proprietary battery management system communicates directly with the Sting R\'s motor controller to optimise charge and discharge curves for the specific Talaria motor windings — ensuring the same performance consistency as a new bike. Direct drop-in installation requires no wiring modifications. At 12.8kg and $1,890, this genuine Talaria replacement battery is the cost-effective solution when original battery capacity degrades after extended use. Available through Electric Dirt Bike Australia — Australia\'s authorised Talaria dealer — with 12-month OEM warranty.",
    "specs": {
      "voltage": "60V Nominal",
      "capacity": "45Ah (2,700Wh)",
      "weight": "12.8 kg"
    },
    "images": [
      "/images/product-talaria-oem-battery.webp"
    ],
    "inStock": true
  },
  {
    "slug": "15a-fast-charger-60v-72v",
    "name": "15A Smart Fast Charger (Dual 60V / 72V Auto-Detect)",
    "brand": "EDBA Performance",
    "price": 380,
    "compareAtPrice": 420,
    "category": "accessories",
    "badge": "Essential",
    "featured": true,
    "shortDescription": "Rapid 15A alloy smart charger with digital voltage & amperage readout, silent ball-bearing fan, and Australian standard plug.",
    "description": "Cut your electric dirt bike recharge time by over 60% with the EDBA 15A Smart Fast Charger — the most popular rapid-charging solution for 60V and 72V electric dirt bike batteries in Australia. The intelligent 3-stage CC/CV charging algorithm (constant current, constant voltage, float maintenance) maximises battery cell longevity while delivering 15 Amps continuously from a standard Australian 240V/10A wall outlet. Thermal overload protection, reverse polarity protection, and over-voltage cutoff make this the safest fast charger available for Sur-Ron Light Bee X, Talaria Sting R, and E-Ride Pro batteries. The illuminated LCD screen displays real-time voltage, charging current, and accumulated amp-hours — eliminating guesswork about your battery\'s actual state of charge. Auto-detect switchable between 60V and 72V systems means one charger covers all bikes in your fleet. Australian standard 3-pin plug. Available from Electric Dirt Bike Australia — ships free with any bike purchase.",
    "specs": {
      "inputVoltage": "220V - 240V AC 50Hz (AU Wall Plug)",
      "outputCurrent": "15 Amps Adjustable (5A / 10A / 15A)",
      "protection": "Over-voltage, reverse polarity, thermal shutdown",
      "cables": "Heavy gauge silicone wire with genuine Anderson / Sur-Ron plug"
    },
    "images": [
      "/images/product-dual-port-charger.webp"
    ],
    "inStock": true
  },
  {
    "slug": "20a-ultra-fast-pit-charger",
    "name": "20A Ultra Fast Pit Charger with Variable Amperage",
    "brand": "EDBA Performance",
    "price": 490,
    "compareAtPrice": 550,
    "category": "accessories",
    "badge": "Pro Pit Gear",
    "featured": false,
    "shortDescription": "Heavy-duty 20 Amp track charger. Recharges a 40Ah pack in under 75 minutes between moto heats.",
    "description": "The EDBA 20A Ultra Fast Pit Charger delivers the fastest available electric dirt bike recharge speeds for Australian competition riders and serious trail enthusiasts — recharging a full 40Ah pack in under 75 minutes between moto heats or trail sessions. The rotary dial amperage selector adjusts output from a gentle 5A for overnight storage charging to a maximum 20A for blistering pit-lane top-ups, giving riders complete control over charge speed versus cell temperature. A colour OLED display shows real-time voltage, current, and wattage draw so pit crew can monitor charging progress at a glance. Dual high-flow cooling fans with thermal throttle protection prevent overheating during sustained maximum-current charging. Australian 3-pin plug with 1.8m heavy-gauge silicone cable included. This professional-grade electric bike charger is used by competitive Australian electric motocross teams to maximise track time during multi-heat race days. Available from Electric Dirt Bike Australia.",
    "specs": {
      "outputCurrent": "Up to 20 Amps Continuous",
      "display": "Colour OLED voltage, current, and wattage display",
      "cooling": "Dual high-flow cooling fans with thermal throttle",
      "plug": "Australian 3-pin mains plug"
    },
    "images": [
      "/images/product-dual-port-charger.webp"
    ],
    "inStock": true
  },
  {
    "slug": "10a-compact-touring-charger",
    "name": "10A Compact Touring Fast Charger with AU Plug",
    "brand": "EDBA Performance",
    "price": 240,
    "compareAtPrice": 280,
    "category": "accessories",
    "badge": "Compact Touring",
    "featured": false,
    "shortDescription": "Lightweight, backpack-friendly 10A aluminium fast charger for long trail rides and country pub stops.",
    "description": "The EDBA 10A Compact Touring Charger is the electric dirt bike charger that goes wherever you ride — weighing just 1.2kg and packing down to 210 x 95 x 55mm, it fits easily inside a hydration backpack for mid-ride top-ups at regional Australian cafes, holiday parks, caravan sites, and farm sheds. The anodised black extruded aluminium casing dissipates heat efficiently without a noisy cooling fan, making it ideal for quiet charging in accommodation. At 10 Amps output, this compact fast charger recharges a standard 60V 40Ah electric bike battery in under 4 hours — perfect for an overnight hotel stay during a multi-day trail riding tour through NSW High Country or Victorian bush. Universal 60V/72V auto-detect operation covers all popular electric dirt bike models. Australian standard 3-pin plug compatible with all Australian power points and most caravans with 15A adapters. Available from Electric Dirt Bike Australia.",
    "specs": {
      "current": "10 Amps",
      "weight": "1.2 kg",
      "dimensions": "210mm x 95mm x 55mm",
      "casing": "Anodised black extruded aluminium"
    },
    "images": [
      "/images/product-fast-charger-10a.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "battery-carry-backpack-harness",
    "name": "Heavy-Duty Waterproof Battery Carry Backpack & Harness",
    "brand": "EDBA Gear",
    "price": 185,
    "compareAtPrice": 220,
    "category": "accessories",
    "badge": "Rider Gear",
    "featured": false,
    "shortDescription": "Ergonomic reinforced rider backpack designed specifically to carry a spare 60V or 72V battery on long expeditions.",
    "description": "The EDBA Heavy-Duty Waterproof Battery Carry Backpack is engineered specifically for electric dirt bike riders who carry a spare 60V or 72V battery pack on extended Australian bush rides, property work, or multi-day trail adventures. The 1000D Ballistic Cordura construction with waterproof PU coating withstands creek crossings, heavy rain, and the abrasion of Australian scrub without compromising battery protection. Aluminium internal stays distribute battery weight evenly across the hips rather than concentrating it on the shoulders — critical for maintaining natural riding posture and body positioning on the pegs over multi-hour sessions. The dual chest buckle and padded kidney belt prevent the pack from shifting during aggressive riding. Compatible with all 60V and 72V electric dirt bike battery packs up to 16kg. This backpack is an essential accessory for electric dirt bike endurance riders, property managers, and anyone exploring Australian bush trails beyond a single charge. Available from Electric Dirt Bike Australia.",
    "specs": {
      "capacity": "Fits all 60V/72V batteries up to 16kg",
      "material": "1000D Ballistic Cordura with waterproof PU coating",
      "straps": "Dual chest buckle + padded kidney belt"
    },
    "images": [
      "/images/product-battery-carry-bag.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "anderson-to-qs8-heavy-duty-adapter",
    "name": "High-Current Pure Copper Anderson to QS8 Adapter Cable",
    "brand": "EDBA Performance",
    "price": 65,
    "compareAtPrice": 79,
    "category": "accessories",
    "badge": "Wiring & Power",
    "featured": false,
    "shortDescription": "8 AWG ultra-flexible silicone cable with gold-plated anti-spark QS8 and genuine Anderson SB50 connectors.",
    "description": "The EDBA High-Current Anderson to QS8 Adapter Cable eliminates connector compatibility issues when upgrading your electric dirt bike with aftermarket high-discharge batteries, Torp controllers, or EBMX performance electronics. Built with 8 AWG ultra-fine strand silicone cable rated for -60°C to +200°C — far exceeding the temperature range of standard copper wire — this adapter ensures zero resistance voltage drop between high-discharge 72V batteries and high-power motor controllers drawing 200+ Amps. The gold-plated QS8 anti-spark connector on one end and genuine Anderson SB50 on the other cover the two most common connector standards used by Australian electric dirt bike performance upgrades. At 65 cents per amp of capacity, this is one of the most cost-effective electric bike performance accessories available. Essential for Sur-Ron, Talaria, and E-Ride Pro riders who mix battery brands or upgrade to aftermarket controllers. Available from Electric Dirt Bike Australia.",
    "specs": {
      "gauge": "8 AWG ultra-fine strand silicone",
      "temperatureRating": "-60°C to +200°C",
      "connectorA": "Genuine Anderson SB50 Gray",
      "connectorB": "QS8 Anti-Spark Gold Plated"
    },
    "images": [
      "/images/product-72v-controller.webp"
    ],
    "inStock": true
  },
  {
    "slug": "qs8-s-armoured-connector-kit",
    "name": "Anti-Spark QS8-S Armoured Battery Connector Kit",
    "brand": "EDBA Performance",
    "price": 45,
    "compareAtPrice": 55,
    "category": "accessories",
    "badge": "Protection",
    "featured": false,
    "shortDescription": "Heavy-duty 150A/300A anti-spark connectors eliminating electrical arcing and pitting when plugging in batteries.",
    "description": "The EDBA Anti-Spark QS8-S Armoured Connector Kit is an essential safety and performance upgrade for any electric dirt bike running upgraded batteries or aftermarket high-power controllers. The integrated pre-charge resistor smoothly equalises controller capacitor voltages before the main contacts close, eliminating the dangerous electrical arcing and contact pitting that shortens connector lifespan and can cause battery and controller damage. Rated at 150 Amps continuous and 300 Amps peak, the QS8-S handles the full current demands of 72V high-discharge battery packs paired with Torp TC500 or EBMX X-9000 controllers. The armoured housing resists water ingress, dust, and mechanical shock during the rigours of off-road electric bike riding in Australian conditions. This connector upgrade is recommended any time you install a new battery or controller on your electric dirt bike to ensure reliable, safe high-current connections. Available from Electric Dirt Bike Australia with full installation guidance.",
    "specs": {
      "current": "150A Continuous / 300A Peak",
      "sparkProtection": "Built-in sacrificial pre-charge resistor"
    },
    "images": [
      "/images/product-72v-controller.webp"
    ],
    "inStock": true
  },
  {
    "slug": "torp-tc500-controller",
    "name": "Torp TC500 Plug-and-Play Tunable Controller",
    "brand": "Torp",
    "price": 1390,
    "compareAtPrice": 1490,
    "category": "parts-upgrades",
    "badge": "Top Mod",
    "featured": true,
    "shortDescription": "The premier plug-and-play controller for Sur-Ron and Talaria. Boosts stock battery power to 8.5kW and 72V packs to 17kW.",
    "description": "The Torp TC500 is Australia\'s most popular electric dirt bike controller upgrade — a true plug-and-play performance solution that communicates natively with stock Sur-Ron Light Bee X and Talaria Sting R battery BMS systems, boosting stock 60V battery output to 8.5kW and unlocking 17kW from 72V packs without bypassing factory safety protocols. Torp revolutionised the electric dirt bike tuning world by creating the first controller that genuinely talks to factory BMS units — not bypassing them like earlier aftermarket controllers. The iOS and Android Bluetooth app provides live motor diagnostics, adjustable field weakening for 15–20 km/h top speed gains, customisable throttle response curves, and regenerative braking on brake lever pull. Maximum 500 Amps phase current delivers powerful, controlled torque for Australian trail riding and motocross. Weighing just 980 grams, the TC500 installs using the factory wiring harness without cutting or splicing. Australia\'s most recommended electric dirt bike performance upgrade. Available from Electric Dirt Bike Australia.",
    "specs": {
      "maxPhaseCurrent": "500 Amps",
      "voltageSupport": "48V - 84V",
      "installation": "100% Plug and Play with stock wiring harness",
      "app": "iOS and Android Bluetooth Live Diagnostics",
      "weight": "980 grams"
    },
    "images": [
      "/images/product-72v-controller.webp"
    ],
    "inStock": true
  },
  {
    "slug": "torp-tc1000-controller",
    "name": "Torp TC1000 High-Power 1000A Bluetooth Controller",
    "brand": "Torp",
    "price": 1890,
    "compareAtPrice": 2050,
    "category": "parts-upgrades",
    "badge": "1000A Hyper Power",
    "featured": false,
    "shortDescription": "Massive 1000A phase current controller for Sur-Ron Ultra Bee and extreme 72V/84V race builds.",
    "description": "The Torp TC1000 is the most powerful plug-and-play electric dirt bike controller available in Australia — delivering 1,000 Amps maximum phase current for riders who demand championship-level acceleration, uncompromising hill-climbing torque, and the raw power output to compete at the front of electric motocross fields. Designed for Sur-Ron Ultra Bee and extreme 72V/84V race builds, the TC1000 transforms any capable electric dirt bike into a genuine competition machine. The IP67 fully sealed housing withstands complete submersion in creek crossings and muddy Australian conditions without ingress damage. The integrated wiring harness and billet CNC heatsink simplify installation while managing the thermal loads generated by 1,000A current peaks. iOS and Android Bluetooth app tuning allows precise adjustment of power curves, field weakening, and regen braking for specific Australian track layouts and trail conditions. Available from Electric Dirt Bike Australia — professional installation assistance available on request.",
    "specs": {
      "maxPhaseCurrent": "1,000 Amps",
      "voltageSupport": "48V - 96V",
      "waterproofing": "IP67 fully sealed against mud and creek crossings"
    },
    "images": [
      "/images/product-72v-controller.webp"
    ],
    "inStock": true
  },
  {
    "slug": "ebmx-x-9000-controller",
    "name": "EBMX X-9000 Extreme Motor Controller & Display",
    "brand": "EBMX",
    "price": 1690,
    "compareAtPrice": 1820,
    "category": "parts-upgrades",
    "badge": "Race Tuned",
    "featured": false,
    "shortDescription": "World-renowned motor controller engineered by Australian performance team EBMX. Peak output up to 25kW.",
    "description": "The EBMX X-9000 is an Australian-engineered electric dirt bike motor controller designed and developed by EBMX — one of the world\'s most respected electric motorcycle performance engineering teams. Capable of up to 25kW peak output with an upgraded battery, the X-9000 is the controller of choice for Australian electric dirt bike drag racers, sprint champions, and extreme hill-climb competitors. Custom power maps allow precise tuning for specific riding conditions — from a smooth trail mode to a full-power drag-racing assault. Variable regenerative braking adjustable via brake lever or thumb throttle provides maximum versatility across different Australian terrain types. The ultra-bright colour waterproof handlebar display is readable in full Queensland and NSW summer sunlight. The X-9000 requires a 40V–100V compatible high-discharge battery to unlock its full potential. Developed and supported in Australia means local technical help is available when tuning for specific conditions. Available from Electric Dirt Bike Australia.",
    "specs": {
      "peakPower": "Up to 25kW with upgraded battery",
      "voltage": "40V - 100V",
      "display": "Full colour waterproof handlebar dash included",
      "origin": "Australian Performance Engineering"
    },
    "images": [
      "/images/product-72v-controller.webp"
    ],
    "inStock": true
  },
  {
    "slug": "fastace-alx13rc-inverted-fork",
    "name": "Fastace ALX13RC 200mm Inverted Dual-Air Downhill Fork",
    "brand": "Fastace",
    "price": 1190,
    "compareAtPrice": 1290,
    "category": "parts-upgrades",
    "badge": "Suspension Upgrade",
    "featured": true,
    "shortDescription": "200mm travel inverted fork with custom 50lb / 60lb coil spring and dual-air chamber designed for electric moto weights.",
    "description": "The Fastace ALX13RC is Australia\'s most popular inverted fork upgrade for Sur-Ron Light Bee X and Talaria Sting electric dirt bikes — delivering 200mm of travel with beefed-up 37mm hardened alloy stanchions that eliminate the harsh bottoming and lack of high-speed damping control that afflicts stock forks on aggressive Australian trail terrain. The dual-air chamber design allows independent adjustment of positive and negative air spring pressure, providing a precise ride quality setup for Australian riders of all weights from 60kg to 110kg+. Independent rebound and high/low speed compression adjustments enable fine-tuning for the specific demands of NSW Blue Mountains rocky descents versus Victorian State Forest loamy flow trails. Hydraulic bottom-out bumpers prevent metal-on-metal contact on the biggest Australian washouts and moto jumps. The 20mm x 110mm Boost thru-axle provides maximum front-end stiffness. Available from Electric Dirt Bike Australia — Australia\'s recommended suspension upgrade for e-moto trail riders.",
    "specs": {
      "travel": "200mm (8 inches)",
      "stanchions": "37mm hardened alloy",
      "adjustments": "Rebound, High/Low Speed Compression, Air Preload",
      "axle": "20mm x 110mm Boost thru-axle",
      "weight": "4.2 kg"
    },
    "images": [
      "/images/product-handlebar-kit.webp"
    ],
    "inStock": true
  },
  {
    "slug": "ext-ferro-36-inverted-fork",
    "name": "EXT Ferro 36 Inverted Premium Enduro Fork",
    "brand": "EXT Racing",
    "price": 2690,
    "compareAtPrice": 2890,
    "category": "parts-upgrades",
    "badge": "Pro Italian Spec",
    "featured": false,
    "shortDescription": "The pinnacle of electric moto front suspension. Handcrafted in Italy with 36mm chrome-moly stanchions.",
    "description": "The EXT Ferro 36 Inverted Fork brings Formula 1 suspension technology to electric dirt bikes, handcrafted in Vicenza, Italy with 36mm chrome-moly stanchions and EXT\'s HS3 triple-stage air spring system for supple small-bump compliance on Australian rocky trails. A hydraulic bump stop eliminates harsh bottom-outs on high-speed compressions during enduro descents, while independent high-speed and low-speed compression damping allows circuit-specific tuning without a suspension technician. Compatible with Sur-Ron, Talaria, and KTM Freeride E platforms with standard 20mm axle fitment. Premium Italian enduro suspension available with genuine Australian stock and expert fitting advice from [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/). Technical specs at [EXT Racing Italy](https://www.ext-suspension.com/).",
    "specs": {
      "travel": "205mm",
      "damping": "Independent high and low speed compression + rebound",
      "manufacture": "100% Handcrafted in Vicenza, Italy"
    },
    "images": [
      "/images/product-handlebar-kit.webp"
    ],
    "inStock": true
  },
  {
    "slug": "formula-cura-4-brake-kit",
    "name": "Formula Cura 4 Hydraulic 4-Piston Disc Brake Kit",
    "brand": "Formula",
    "price": 690,
    "compareAtPrice": 760,
    "category": "parts-upgrades",
    "badge": "One-Finger Stopping",
    "featured": false,
    "shortDescription": "Italian 4-piston hydraulic brakes with massive 18mm pistons and mineral oil for fade-free stopping power.",
    "description": "The Formula Cura 4 Hydraulic Brake Kit is an Italian-engineered complete front and rear brake upgrade that transforms stopping power on electric dirt bikes — delivering one-finger 4-piston stopping force that completely eliminates brake fade on long Australian alpine descents and extended downhill runs. Pre-bled with high-performance mineral oil and reinforced Kevlar braided hoses for a firm, immediate lever feel, the Cura 4 set removes the spongy, inconsistent brake feel that stock bicycle-grade hydraulics exhibit when heated on sustained mountain descents. The 18mm phenolic pistons deliver massive caliper force from minimal lever effort, reducing hand fatigue during technical descents in the Blue Mountains and Victorian High Country. Mineral oil (non-corrosive) ensures brake performance remains consistent in Australian heat without the DOT fluid degradation issues associated with competitive products. Forged aluminium levers with tool-free reach adjustment suit riders of all hand sizes. Available from Electric Dirt Bike Australia.",
    "specs": {
      "pistons": "4 x 18mm phenolic pistons per caliper",
      "fluid": "High-performance mineral oil (non-corrosive)",
      "levers": "Forged aluminium with tool-free reach adjust"
    },
    "images": [
      "/images/product-bike-stand.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "magura-mt7-pro-brake-set",
    "name": "Magura MT7 Pro 4-Piston Hydraulic Brake Set",
    "brand": "Magura",
    "price": 740,
    "compareAtPrice": 820,
    "category": "parts-upgrades",
    "badge": "Downhill Benchmark",
    "featured": false,
    "shortDescription": "German-engineered downhill benchmark brakes featuring Carbotecture SL master cylinders and 1-finger HC levers.",
    "description": "The Magura MT7 Pro is a German-engineered 4-piston hydraulic brake set that is the benchmark choice for competitive electric dirt bike freeriders, enduro racers, and Australian riders who demand the finest stopping performance regardless of conditions. Magura\'s Carbotecture SL master cylinders use 30% carbon fibre to reduce weight while maintaining the stiffness that delivers precise, consistent lever feel. The 1-Finger HC levers (HC = Human Carbon) provide immediate, controlled braking from a single finger, freeing remaining fingers for throttle control on technical Australian descents. Exceptional modulation characteristics prevent front-wheel lockup on the loose gravel and clay common to Australian State Forest and national park tracks, while still delivering maximum deceleration when full braking is required. The forged monobloc caliper eliminates the caliper body flex that affects multi-piece calipers under hard braking at 80+ km/h. Available from Electric Dirt Bike Australia with Australian after-market support from Magura\'s Sydney distributor.",
    "specs": {
      "pistons": "4-piston forged monobloc caliper",
      "rotorRecommended": "203mm or 220mm Magura MDR-P",
      "weight": "255 grams per wheel"
    },
    "images": [
      "/images/product-bike-stand.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "220mm-floating-rotor-kit",
    "name": "220mm Heavy Duty 2.3mm Floating Brake Rotor Kit",
    "brand": "EDBA Performance",
    "price": 175,
    "compareAtPrice": 210,
    "category": "parts-upgrades",
    "badge": "Braking Upgrade",
    "featured": false,
    "shortDescription": "Extra-thick 2.3mm laser-cut stainless steel floating rotors with CNC aluminium carrier and caliper adapter bracket.",
    "description": "The EDBA 220mm Heavy-Duty Floating Brake Rotor Kit is an essential braking upgrade for electric dirt bike riders installing high-power controllers or 72V battery upgrades — providing the additional thermal mass needed to handle the increased deceleration loads that stock 180mm rotors cannot manage reliably. At 2.3mm thickness (27% thicker than standard 1.8mm bicycle rotors), these laser-cut stainless steel rotors resist thermal warping under sustained braking and dissipate heat 40% faster than thin rotors, ensuring consistent brake performance on long Australian downhill descents. The floating rotor design allows the steel rotor ring to expand freely under heat without transferring warping stress to the aluminium carrier. CNC aluminium caliper adapter brackets provide precise caliper alignment with both stock and aftermarket calipers. Available in a two-rotor front and rear kit configuration. A must-have upgrade alongside any electric dirt bike power or battery upgrade. Available from Electric Dirt Bike Australia.",
    "specs": {
      "diameter": "220mm",
      "thickness": "2.3mm heavy duty",
      "carrier": "Forged and CNC machined 7075-T6 alloy"
    },
    "images": [
      "/images/product-bike-stand.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "sm-pro-platinum-16-19-wheelset",
    "name": "SM Pro Platinum 16/19 Wheelset with HD Spokes",
    "brand": "SM Pro",
    "price": 1290,
    "compareAtPrice": 1390,
    "category": "parts-upgrades",
    "badge": "Pro Wheels",
    "featured": false,
    "shortDescription": "Hand-laced 19-inch front and 16-inch rear wheelset with aircraft 7050 aluminium rims and billet hubs.",
    "description": "The SM Pro Platinum 16/19 Wheelset is the gold-standard wheel upgrade for Sur-Ron Light Bee X and Talaria Sting electric dirt bike riders seeking better traction, stronger spokes, and superior tyre compliance over rough Australian trail terrain. The 16-inch rear rim diameter accommodates a taller, wider knobby tyre profile that soaks up rocky creek crossings and root networks without pinch flats — providing significantly better traction management than the standard 18-inch rear wheel setup. Aircraft 7050 aluminium rims deliver strength-to-weight ratios that surpass conventional 6061 alloy, while Bulldog stainless steel heavy-duty spokes with nickel brass nipples withstand repeated hard landings that would fatigue standard spokes. CNC machined 6061 billet hubs with sealed Japanese bearings eliminate the bearing play and friction losses that develop in cheaper cast hub alternatives. Direct spoke replacement with standard motocross parts means these wheels are fully serviceable in any Australian motocross shop. Available from Electric Dirt Bike Australia.",
    "specs": {
      "front": "19 x 1.60 inch SM Pro Platinum Rim",
      "rear": "16 x 1.85 inch SM Pro Platinum Rim",
      "spokes": "Bulldog stainless steel heavy duty spokes with nickel brass nipples",
      "hubs": "CNC machined 6061 billet alloy with sealed Japanese bearings"
    },
    "images": [
      "/images/product-knobby-tyre-set.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "kke-18-21-enduro-wheel-kit",
    "name": "KKE 18/21 Full-Size Enduro Wheel & Tyre Conversion Kit",
    "brand": "KKE Racing",
    "price": 1090,
    "compareAtPrice": 1190,
    "category": "parts-upgrades",
    "badge": "Full-Size Conversion",
    "featured": false,
    "shortDescription": "Converts your Sur-Ron Ultra Bee or mid-size bike into a full 21-inch front and 18-inch rear enduro machine.",
    "description": "The KKE 18/21 Full-Size Enduro Wheel Conversion Kit transforms your Sur-Ron Ultra Bee or Talaria Dragon into a genuine full-size enduro machine with standard 21-inch front and 18-inch rear motorcycle geometry — the same wheel dimensions used by KTM, Husqvarna, and GasGas enduro bikes at the FIM Enduro World Championship. Full-size wheels roll over Australian tree roots, rocks, and ruts with the inherent momentum advantage that smaller-diameter wheels cannot match, making the bike feel planted and stable across the kind of rough Victorian and NSW bush terrain that tests rider confidence. The direct bolt-on fitment for Sur-Ron Ultra Bee and Talaria Dragon axle dimensions eliminates complex modification work. Heavy-duty reinforced tubes and pre-mounted knobby tyres have your new wheel kit ready to ride straight from the Electric Dirt Bike Australia packaging. This wheel conversion is the most impactful single upgrade for heavy enduro riders wanting full-size motorcycle capability from their electric dirt bike.",
    "specs": {
      "frontRim": "21 x 1.6 inch",
      "rearRim": "18 x 2.15 inch",
      "axleFitment": "Direct bolt-on for Sur-Ron Ultra Bee / Talaria Dragon"
    },
    "images": [
      "/images/product-knobby-tyre-set.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "did-420-nz3-gold-chain",
    "name": "DID 420 NZ3 Gold Heavy-Duty Off-Road Racing Chain",
    "brand": "DID Chain",
    "price": 95,
    "compareAtPrice": 115,
    "category": "parts-upgrades",
    "badge": "Drivetrain",
    "featured": false,
    "shortDescription": "Professional grade non-O-ring motocross chain with SDH pin treatment for minimal friction and maximum tensile strength.",
    "description": "The DID 420 NZ3 Gold Racing Chain is the definitive drivetrain upgrade for electric dirt bike riders experiencing chain stretch, premature wear, or linkage slap from stock chains that cannot withstand the instant peak torque delivery of high-performance electric motors. DID\'s SDH pin treatment hardens chain pins against the shock loading that electric motor torque generates — conventional bicycle-grade chains can stretch by 1–2% within 10 hours of electric dirt bike use under aggressive riding conditions. At 22.0 kN (4,930 lbs) tensile strength, the NZ3 handles the full peak torque output of 72V controller-tuned electric bikes without fatigue. Gold outer plates provide active corrosion resistance in wet Australian mud, creek crossings, and salt-air coastal conditions that rapidly corrode cheaper chains. The 112-link kit with included clip-type master link fits standard 420-pitch electric dirt bike sprocket configurations. Available from Electric Dirt Bike Australia with full chain care kit recommendations.",
    "specs": {
      "pitch": "420",
      "links": "112 links (includes clip-type connecting master link)",
      "tensileStrength": "22.0 kN (4,930 lbs)"
    },
    "images": [
      "/images/product-bike-stand.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "warp9-54t-billet-sprocket",
    "name": "Warp 9 54T CNC Billet Rear Sprocket (Black / Gold)",
    "brand": "Warp 9",
    "price": 115,
    "compareAtPrice": 135,
    "category": "parts-upgrades",
    "badge": "Gearing Upgrade",
    "featured": false,
    "shortDescription": "7075-T6 billet alloy 54-tooth sprocket giving 12% more low-end torque for aggressive singletrack and hill climbs.",
    "description": "The Warp 9 54T CNC Billet Rear Sprocket delivers 12% more low-end torque from your electric dirt bike compared to standard 46T–48T rear sprockets — transforming singletrack acceleration, steep hill-climbing capability, and technical terrain traction without any controller or battery modifications. Machined from 7075-T6 aerospace aluminium — significantly stronger than the 6061 alloy used in cheaper sprockets — the Warp 9 54T provides exceptional resistance to chain-load deformation even under the instant peak torque of high-power electric motors. Mud-clearance grooves machined into the sprocket face channel trail debris away from the chain engagement points, reducing chain wear and preventing the jamming that clogs solid-face sprockets in Australian clay and sand. Type III hard anodising in black or gold provides corrosion protection and visual appeal. Direct bolt-on to Sur-Ron Light Bee X and Talaria Sting R wheel hubs using stock bolts. Available from Electric Dirt Bike Australia.",
    "specs": {
      "teeth": "54 Tooth",
      "material": "7075-T6 Aerospace Aluminium",
      "finish": "Type III Hard Anodised with laser-etched logos"
    },
    "images": [
      "/images/product-bike-stand.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "warp9-58t-extreme-sprocket",
    "name": "Warp 9 58T Extreme Climbing Rear Sprocket",
    "brand": "Warp 9",
    "price": 125,
    "compareAtPrice": 145,
    "category": "parts-upgrades",
    "badge": "Max Torque",
    "featured": false,
    "shortDescription": "58-tooth massive rear sprocket engineered for extreme alpine climbing, stunts, and slow technical rock trials.",
    "description": "The Warp 9 58T Extreme Climbing Rear Sprocket is the maximum torque gearing upgrade for electric dirt bike riders tackling extreme Australian alpine climbs, technical trials sections, and steep property terrain where the ability to crawl at near-walking speed with massive wheel torque is more important than top speed. At 58 teeth, this rear sprocket provides approximately 25% more wheel torque than standard 46T sprockets — dramatically reducing motor and controller load during sustained slow-speed uphill sections and technical rock crawling. Lower motor RPM at any given wheel speed generates less heat in the motor windings and controller FETs, extending component lifespan during sustained hill-climb use. The 7075-T6 aerospace aluminium construction from Warp 9 resists the chain-load flex that softer alloys exhibit. Direct bolt-on to Sur-Ron Light Bee X and Talaria wheel hubs. Available from Electric Dirt Bike Australia — ideal paired with the DID 420 NZ3 Gold Chain for a complete drivetrain upgrade.",
    "specs": {
      "teeth": "58 Tooth",
      "weight": "490 grams"
    },
    "images": [
      "/images/product-bike-stand.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "heavy-duty-skid-plate",
    "name": "Billet 5mm Heavy-Duty Aluminium Skid Plate (Sur-Ron / Talaria)",
    "brand": "EDBA Protection",
    "price": 195,
    "compareAtPrice": 220,
    "category": "parts-upgrades",
    "badge": "Protection",
    "featured": false,
    "shortDescription": "Full wraparound 5mm 6061 aluminium bash guard designed to withstand Australian granite, logs, and rocky creek beds.",
    "description": "The EDBA Billet 5mm Heavy-Duty Skid Plate is the single most important protective upgrade for Australian electric dirt bike riders venturing into rocky creek beds, granite outcrops, and log-strewn NSW and Victorian bush trails. CNC machined from 5mm 6061-T6 aircraft aluminium — significantly stronger than the 3mm thin-gauge guards included with stock bikes — this full-coverage bash plate wraps around the motor casing, battery bottom rail, and frame downtube to shield all critical components from rock strikes. Ventilation cutouts machined into the plate allow heat to escape from the motor controller and battery pack, preventing thermal throttling during sustained hard riding in Australian summer conditions. Hard anodised matte black finish resists corrosion in salt-air coastal environments. Stainless steel mounting bolts included with all thread sizes for Sur-Ron Light Bee X and Talaria Sting R compatibility. A $195 investment that prevents potential $2,000+ motor or battery damage from a single rock strike. Available from Electric Dirt Bike Australia.",
    "specs": {
      "material": "5mm 6061-T6 Aircraft Aluminium",
      "coating": "Hard anodised matte black finish",
      "hardware": "Stainless steel mounting bolts included"
    },
    "images": [
      "/images/product-bike-stand.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "cnc-wide-gripper-footpegs",
    "name": "CNC Aircraft Alloy Wide Gripper Footpegs",
    "brand": "EDBA Protection",
    "price": 135,
    "compareAtPrice": 155,
    "category": "parts-upgrades",
    "badge": "Ergonomics",
    "featured": false,
    "shortDescription": "Extra-wide 57mm footpegs with sharp replaceable stainless steel cleats and mud-clearing cutouts.",
    "description": "The EDBA CNC Aircraft Alloy Wide Gripper Footpegs are an essential ergonomic upgrade for Australian electric dirt bike riders who spend extended time standing on the pegs — eliminating the arch fatigue, boot slip, and reduced bike control that narrow stock footpegs cause on rough trail terrain. The 57mm extra-wide platform distributes boot pressure evenly across the arch, reducing fatigue during multi-hour bush rides in NSW and Victorian State Forests. Replaceable 304 stainless steel threaded cleats bite into boot soles even in wet Australian clay and slippery sand — preventing the foot slippage that can cause loss of control on steep descents. Standard stainless replacement pins are available at any hardware store when worn, making these footpegs a permanent upgrade rather than a consumable. Direct fitment to Sur-Ron Light Bee X, Talaria Sting R, and Segway X260 peg mounts without modification. At $135, the best ergonomic value available for electric dirt bike riders. Available from Electric Dirt Bike Australia.",
    "specs": {
      "width": "57mm extra-wide platform",
      "cleats": "Replaceable 304 stainless steel threaded pins",
      "compatibility": "Sur-Ron, Talaria, Segway"
    },
    "images": [
      "/images/product-bike-stand.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "warp9-direct-mount-riser",
    "name": "Warp 9 Direct-Mount Handlebar Riser & Stem Lock",
    "brand": "Warp 9",
    "price": 145,
    "compareAtPrice": 165,
    "category": "parts-upgrades",
    "badge": "Cockpit Upgrade",
    "featured": false,
    "shortDescription": "Direct-mount billet alloy riser kit that raises handlebars by 50mm for natural standing ergonomics.",
    "description": "The Warp 9 Direct-Mount Handlebar Riser is the essential cockpit upgrade for tall Australian electric dirt bike riders experiencing lower back pain, hunched posture, and reduced control from the cramped riding position of stock handlebar setups. The 50mm rise with 10mm forward offset opens up the rider triangle to a natural, upright standing position — critical for technical trail riding where body position determines confidence and control through Australian root-strewn singletrack, rocky creek crossings, and steep switchback descents. Eliminating cockpit flex through CNC machined 6061 billet alloy construction ensures precise handlebar response without the compliance lag that rubber-isolated stock stems introduce at high speeds. Fits dual-crown downhill forks and standard moto forks with 31.8mm or 35mm clamp diameter handlebars. At $145, this is one of the most cost-effective comfort upgrades available for electric dirt bike riders over 180cm tall. Available from Electric Dirt Bike Australia.",
    "specs": {
      "rise": "50mm rise / 10mm forward offset",
      "clampDiameter": "31.8mm or 35mm compatible",
      "material": "CNC machined 6061 billet"
    },
    "images": [
      "/images/product-handlebar-kit.webp"
    ],
    "inStock": true
  },
  {
    "slug": "baja-designs-squadron-headlight",
    "name": "Baja Designs Squadron Pro LED High-Output Headlight Kit",
    "brand": "Baja Designs",
    "price": 360,
    "compareAtPrice": 395,
    "category": "parts-upgrades",
    "badge": "Night Riding",
    "featured": false,
    "shortDescription": "4,600 Lumens military-grade LED headlamp designed for aggressive nighttime forest trail exploration.",
    "description": "The Baja Designs Squadron Pro LED Headlight Kit is the most trusted night riding upgrade for electric dirt bikes in Australia, delivering 4,600 lumens of military-grade Cree LED output that transforms dark Australian bush tracks and fire roads into daylight visibility. Plugs directly into the bike\'s factory 12V DC converter with a waterproof handlebar switch — zero wiring modification required. IP69K waterproof rating (submersible to 9ft) ensures consistent performance through Queensland creek crossings and tropical downpours. The wide driving beam eliminates shadow gaps on single-track trails at speed, doubling your effective vision window for night enduro sessions. Genuine Australian stock available for same-week dispatch from [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/). Product tested by [MotoOnline](https://www.motoonline.com.au/).",
    "specs": {
      "lumens": "4,600 Lumens utilizing 4 Cree LEDs",
      "wattage": "40W / 2.9A draw",
      "waterproof": "IP69K (Submersible up to 9ft)"
    },
    "images": [
      "/images/product-sur-ron-headlight.webp"
    ],
    "inStock": true
  },
  {
    "slug": "acerbis-x-factory-handguards",
    "name": "Acerbis X-Factory Heavy Duty Aluminium Handguards",
    "brand": "Acerbis",
    "price": 155,
    "compareAtPrice": 179,
    "category": "parts-upgrades",
    "badge": "Hand Protection",
    "featured": false,
    "shortDescription": "Steel-wrapped aluminium spine handguards defending levers and knuckles against tree branches and roost.",
    "description": "The Acerbis X-Factory Heavy Duty Aluminium Handguards are the essential protection accessory for electric dirt bike riders navigating tight Australian eucalyptus forest singletrack, dense Victorian fern gully trails, and Queensland rainforest corridors where tree-branch and roost impacts on unprotected levers are inevitable. The steel-wrapped aluminium spine provides the structural integrity to deflect tree-strike impacts that would bend or snap plastic-only handguard designs, while the dual injection nylon outer shields absorb roost from other riders and small branch whip. Hydraulic brake levers are expensive ($150–$400 per lever) to replace — quality handguards like the Acerbis X-Factory pay for themselves the first time they prevent a lever-destruction incident. Universal 22mm–28mm handlebar clamp compatibility covers all electric dirt bike handlebar diameters. At $155, the Acerbis X-Factory Handguards are one of the highest-value protective investments for Australian trail riders. Available from Electric Dirt Bike Australia.",
    "specs": {
      "bar": "Heat-treated aluminium spine with dual injection nylon shields",
      "fitment": "Universal clamp for 22mm to 28mm handlebars"
    },
    "images": [
      "/images/product-handlebar-kit.webp"
    ],
    "inStock": true
  },
  {
    "slug": "dunlop-geomax-dirt-tyre-set",
    "name": "Dunlop Geomax MX33 Off-Road Tyre & HD Tube Combo",
    "brand": "Dunlop",
    "price": 240,
    "compareAtPrice": 270,
    "category": "parts-upgrades",
    "badge": "Traction",
    "featured": false,
    "shortDescription": "Premium soft-to-intermediate off-road terrain tyre set with reinforced 3mm heavy-duty puncture-resistant inner tubes.",
    "description": "The Dunlop Geomax MX33 Off-Road Tyre Set is the preferred rubber choice for Australian electric dirt bike riders who demand maximum traction from their instant-torque electric motors without sacrificing durability on mixed Australian trail terrain. The advanced macromolecule rubber compound delivers the grip needed to transmit electric motor torque without wheelspin in soft loamy Victorian soils and hard-packed NSW fireroad conditions. The MX33 tread block geometry provides superior cornering stability under the weight transfer forces of aggressive trail riding — crucial when your electric dirt bike\'s instant torque can overcome lesser tyres' grip limits in corners. The reinforced 3mm heavy-duty inner tubes provide exceptional puncture resistance against the sharp granite rocks and embedded dry sticks that plague Australian off-road trails. Dunlop\'s Geomax MX33 is used by factory KTM, Husqvarna, and Yamaha motocross teams at national championship level, confirming its performance credentials. Available from Electric Dirt Bike Australia.",
    "specs": {
      "front": "70/100-19 with Heavy Duty 3mm Tube",
      "rear": "80/100-19 with Heavy Duty 3mm Tube",
      "compound": "Advanced macromolecule rubber compound"
    },
    "images": [
      "/images/product-knobby-tyre-set.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "maxxis-maxxcross-tyre-combo",
    "name": "Maxxis Maxxcross IT Desert & Hardpack Tyre Combo",
    "brand": "Maxxis",
    "price": 230,
    "compareAtPrice": 260,
    "category": "parts-upgrades",
    "badge": "Puncture Resistant",
    "featured": false,
    "shortDescription": "Tough desert and rocky terrain tyres engineered to resist chunking on Australian outback gravel.",
    "description": "The Maxxis Maxxcross IT Desert and Hardpack Tyre Combo is engineered for Australian riders who tackle the punishing outback gravel, red clay ruts, and compacted desert tracks of inland NSW, Queensland, and Western Australia where softer tyre compounds chunk, wear prematurely, and lose their performance within a single riding session. The ultra-durable 4-ply nylon carcass with integrated puncture protection belt resists the sharp rock flint and embedded gravel that create pinch flats on lesser tyres in remote Australian outback terrain. Deep shoulder knobs bite into hardpack rut walls and dry clay trails without folding or deflecting under load — providing confident directional stability through long flowing corners. The Maxxcross IT compound balances longevity with enough grip to transmit electric dirt bike torque effectively in dusty and dry conditions. Available in matched 70/100-19 front and 80/100-19 rear sizes. Available from Electric Dirt Bike Australia.",
    "specs": {
      "sizes": "70/100-19 Front & 80/100-19 Rear",
      "construction": "4-ply nylon carcass with puncture protection belt"
    },
    "images": [
      "/images/product-knobby-tyre-set.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "heavy-duty-folding-loading-ramp",
    "name": "Heavy Duty Folding Aluminium Loading Ramp (340kg Rated)",
    "brand": "EDBA Gear",
    "price": 165,
    "compareAtPrice": 195,
    "category": "parts-upgrades",
    "badge": "Transport Essential",
    "featured": false,
    "shortDescription": "Lightweight arched aluminium folding ramp for safe loading of electric bikes into utes, vans, and trailers.",
    "description": "The EDBA Heavy Duty Folding Aluminium Loading Ramp is the safest and most practical solution for loading electric dirt bikes into Australian utes, vans, and trailers without the back strain of manual lifting or the expense of a dedicated motorbike trailer. The arched aluminium profile distributes the electric bike\'s weight along the ramp length rather than concentrating it at the bend, providing a smooth rolling surface that reduces rolling resistance when loading heavier 80kg–110kg full-size electric enduro bikes. Rated at 340kg — more than triple the weight of any electric dirt bike — the ramp has industry-leading safety margins for confident loading of even the heaviest models like the Sur-Ron Storm Bee or Stealth B-52. Rubberised support fingers grip the ute tailgate or trailer edge without scratching paint. Folds to 1.15 metres for storage behind the vehicle seat. The safety tie-down strap prevents unwanted ramp movement during loading. Available from Electric Dirt Bike Australia — an essential accessory for any electric dirt bike transport setup.",
    "specs": {
      "capacity": "340 kg (750 lbs)",
      "length": "2.25 metres extended / 1.15 metres folded",
      "width": "280 mm",
      "weight": "7.2 kg with safety tie-down strap included"
    },
    "images": [
      "/images/product-bike-stand.jpg"
    ],
    "inStock": true
  },
  {
    "slug": "pro-taper-pillow-top-grips",
    "name": "Pro Taper 7/8 Pillow Top Moto Grips & Bar End Plugs",
    "brand": "Pro Taper",
    "price": 35,
    "compareAtPrice": 45,
    "category": "parts-upgrades",
    "badge": "Comfort",
    "featured": false,
    "shortDescription": "Vibration-absorbing dual-compound grips with raised pillow cushions to eliminate arm pump on rocky trails.",
    "description": "The Pro Taper 7/8 Pillow Top Moto Grips are the world\'s best-selling motocross grip — the patented Vibrasonix dual-density synthetic rubber compound reduces arm pump and trail vibration by up to 40% compared to stock OEM grips, making long sessions on Australian bush tracks dramatically more comfortable. Raised pillow cushions disperse vibration across a broader surface area, channelling hand fatigue away from key pressure points during technical rocky descents in the Blue Mountains and Victorian High Country. Universal 7/8 moto bar fitment is compatible with Sur-Ron, Talaria, Stark Varg, KTM Freeride E, and all electric dirt bikes with twist or thumb throttle configurations. Supplied with matching aluminium bar-end plugs for a factory finish. Available with same-week dispatch from [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/). Recommended by [Dirt Action Magazine](https://www.dirtaction.com.au/).",
    "specs": {
      "fitment": "Universal 7/8 moto handlebars with twist or thumb throttle",
      "compound": "Vibrasonix dual density synthetic rubber"
    },
    "images": [
      "/images/product-handlebar-kit.webp"
    ],
    "inStock": true
  },
  {
    "slug": "razor-mx650-electric-kids",
    "name": "Razor MX650 Electric Kids Dirt Rocket",
    "brand": "Razor",
    "price": 899,
    "compareAtPrice": 999,
    "category": "dirt-bikes",
    "badge": "Kids Bestseller",
    "featured": true,
    "shortDescription": "Australia\'s most popular kids electric motorbike with 650W motor, 18 km/h top speed, and real motocross geometry for riders aged 13+.",
    "description": "The Razor MX650 Electric Dirt Rocket is Australia\'s best-selling kids electric motorbike — delivering real chain-drive 650W performance, authentic motocross geometry, and genuine riding excitement for young riders aged 13 and up who are ready to progress beyond slower 36V pit bikes. Unlike toy electric bikes with plastic wheels and soft foam tyres, the MX650 features full-size 16-inch pneumatic knobby tyres, proper hydraulic front forks, and a retractable kickstand — providing genuine electric dirt bike experience at an accessible price point. The sealed 36V 12Ah lead-acid battery delivers up to 45 minutes of ride time per charge with 18 km/h top speed — safe for backyard use and wide open property tracks. The authentic twist-grip throttle and automatic shut-off teach proper throttle discipline for when riders graduate to more powerful electric bikes. Available from Electric Dirt Bike Australia with free freight — Australia\'s most trusted kids electric motorbike stockist.",
    "specs": {
      "motorPeak": "650 Watts",
      "battery": "36V 12Ah Sealed Lead-Acid",
      "topSpeed": "18 km/h",
      "range": "Up to 45 min ride time",
      "weight": "32 kg",
      "riderAge": "Ages 13+ (max rider 81 kg)"
    },
    "images": [
      "/images/product-razor-mx650-rocket.avif"],
    "inStock": true
  },
  {
    "slug": "ktm-sx-e-5-youth-electric",
    "name": "KTM SX-E 5 Youth Electric Motocross (Ages 4–10)",
    "brand": "KTM",
    "price": 7990,
    "compareAtPrice": 8490,
    "category": "dirt-bikes",
    "badge": "Youth Competition",
    "featured": true,
    "shortDescription": "Official KTM factory competition youth electric motocross bike for ages 4–10. Three power modes, adjustable ergonomics, and genuine KTM quality.",
    "description": "The KTM SX-E 5 is the world\'s only factory-produced competition-specification youth electric motocross bike for riders aged 4–10 years — built in Austria with the same engineering standards as KTM\'s championship-winning adult motocross machines. Used by child racers across the globe in sanctioned KTM Junior Cup series events, the SX-E 5 provides genuine competition readiness for aspiring junior motocross champions in Australia\'s MotoGP junior feeder series and state championship rounds. Three parent-selectable power modes at 20%, 50%, and 100% allow gradual skill progression without requiring a new bike as ability increases. Factory KTM WP Xact suspension is identical to adult competition bikes, teaching correct body position and suspension technique from the earliest riding sessions. The quick-charge 48V 2.6Ah lithium-ion battery recharges in 80 minutes — fast enough for multiple track sessions per day. Made in Mattighofen, Austria. Available through Electric Dirt Bike Australia with 12-month KTM factory warranty.",
    "specs": {
      "motorPeak": "1,100 Watts",
      "battery": "48V 2.6Ah Lithium-ion (Quick-Charge)",
      "topSpeed": "20 km/h (full power mode)",
      "chargeTime": "80 min (standard charger)",
      "weight": "26 kg",
      "riderAge": "Ages 4–10",
      "modes": "3 Parent-Selectable Power Modes (20/50/100%)",
      "suspension": "KTM WP Xact Front & Rear"
    },
    "images": [
      "/images/product-ktm-sx-e-5-side.jpg"],
    "inStock": true
  },
  {
    "slug": "husqvarna-ee-5-youth-electric",
    "name": "Husqvarna EE 5 Youth Electric Motocross (Ages 4–10)",
    "brand": "Husqvarna",
    "price": 7490,
    "compareAtPrice": 7990,
    "category": "dirt-bikes",
    "badge": "Youth Pro",
    "featured": true,
    "shortDescription": "Husqvarna\'s factory youth electric motocross bike sharing the same Austrian-built platform as the KTM SX-E 5 with signature Husqvarna blue styling.",
    "description": "The Husqvarna EE 5 is the iconic Swedish electric motocross brand\'s youth offering — sharing the same Austrian factory platform and WP XACT suspension as the KTM SX-E 5 but finished with Husqvarna\'s distinctive blue anodised components, unique graphics, and Husqvarna brand heritage stretching back to 1903 (husqvarna-motorcycles.com). For junior riders whose families have a history with the Husqvarna brand — one of the most celebrated names in international enduro and motocross — the EE 5 provides the factory-spec platform to develop young talent through Husqvarna\'s own junior racing programmes. Three parent-controlled power modes (20%, 50%, 100%) allow safe, progressive skill development for children aged 4–10 years. The WP XACT closed-cartridge front and rear suspension provides genuine motocross geometry and feedback that cheap junior petrol bikes cannot match. Ideal for trackday riding, backyard trail development, and junior competitive racing. Available from Electric Dirt Bike Australia with 12-month warranty.",
    "specs": {
      "motorPeak": "1,100 Watts",
      "battery": "48V 2.6Ah Lithium-ion",
      "topSpeed": "20 km/h",
      "chargeTime": "80 min",
      "weight": "26 kg",
      "riderAge": "Ages 4–10",
      "suspension": "WP XACT Closed-Cartridge Front & Rear"
    },
    "images": [
      "/images/product-husqvarna-ee-5-youth.jpg"],
    "inStock": true
  },
  {
    "slug": "oset-20-0-racing-junior",
    "name": "OSET 20.0 Racing Junior Electric Trials Bike (Ages 6–14)",
    "brand": "OSET",
    "price": 4290,
    "compareAtPrice": 4690,
    "category": "dirt-bikes",
    "badge": "Junior Trials",
    "featured": false,
    "shortDescription": "World-leading electric trials bike for juniors aged 6–14. Lightweight 22kg, near-silent motor, and infinite variable speed control.",
    "description": "The OSET 20.0 Racing Junior Electric Trials Bike is the world\'s leading youth electric trials machine, used at FIM World Trials Championship junior events and by Australia\'s top junior development academies to train the next generation of trials and enduro champions. OSET\'s patented infinite variable speed dial is the key innovation that makes the 20.0 uniquely safe and progressively challenging — adjustable from near-walking speed for absolute beginners to competitive trials pace for advanced riders aged 6–14 years, with no abrupt power steps or clutch engagement to surprise young riders. At just 22kg, young riders aged 6+ can pick the bike up themselves after minor falls without requiring adult assistance — building independence and confidence. The 24V 20Ah lithium-ion battery provides up to 3 hours of trials riding — far more than competitive petrol kids bikes. OSET\'s Australian junior racing programme provides competition pathways from grassroots club trials to national championship level. Available from Electric Dirt Bike Australia at electricdirtbikeaustralia.com.au.",
    "specs": {
      "motorPeak": "600 Watts",
      "battery": "24V 20Ah Lithium-ion",
      "topSpeed": "15 km/h",
      "range": "Up to 3 hrs ride time",
      "weight": "22 kg",
      "riderAge": "Ages 6–14",
      "control": "Infinite variable speed dial + parent-adjusted max speed"
    },
    "images": [
      "/images/product-oset-20-0-junior.jpg"],
    "inStock": true
  },
  {
    "slug": "edba-moto-50-kids-beginner",
    "name": "EDBA Moto 50 Beginner Kids Electric Motorbike (Ages 3–6)",
    "brand": "EDBA Gear",
    "price": 1290,
    "compareAtPrice": 1490,
    "category": "dirt-bikes",
    "badge": "Toddler Starter",
    "featured": false,
    "shortDescription": "The safest starter electric motorbike for toddlers aged 3–6. 250W motor, 6 km/h max speed, and foam-padded frame with parental remote kill switch.",
    "description": "The EDBA Moto 50 is Australia\'s safest and most popular beginner kids electric motorbike for toddlers and children aged 3–6 years — purpose-built by Electric Dirt Bike Australia for the specific needs of Australian young riders taking their absolute first steps into electric motorbike riding. The extra-low 420mm seat height ensures three-year-old riders can flat-foot the ground on both sides simultaneously for maximum stability and confidence. The parental remote stop button allows parents to cut motor power instantly from 15 metres distance if their child gets into difficulty — a safety feature no other entry-level kids electric bike in Australia offers at this price point. Near-silent 250W motor with electronic soft-start prevents the sudden jolt that scares young children when throttle is first applied. Rubberised moto-style handlebar grips teach proper motorcycle grip technique from the first ride. Available exclusively from Electric Dirt Bike Australia at electricdirtbikeaustralia.com.au with 12-month warranty and free freight Australia-wide.",
    "specs": {
      "motorPeak": "250 Watts",
      "battery": "12V 7Ah",
      "topSpeed": "6 km/h",
      "range": "Up to 60 min ride time",
      "weight": "14 kg",
      "riderAge": "Ages 3–6 (max 30 kg rider)",
      "safety": "Parental remote kill switch + key lockout"
    },
    "images": [
      "/images/product-edba-moto-50.jpg"],
    "inStock": true
  },
  {
    "slug": "rtr-ebike-pro-commuter",
    "name": "RTR eBike Pro Electric Commuter (Road-Legal, 250W)",
    "brand": "RTR eBike",
    "price": 3490,
    "compareAtPrice": 3790,
    "category": "electric-motorbikes",
    "badge": "Road Legal",
    "featured": true,
    "shortDescription": "Road-legal Australian street e-bike with 250W motor, 25 km/h speed limit compliance, and 7-speed Shimano gears — registered and ridden anywhere in Australia.",
    "description": "The RTR eBike Pro is Australia\'s premier road-legal electric commuter — a purpose-designed electric motor bike that meets EN15194 standard at 250W continuous power and 25 km/h pedal-assist limit, making it legally rideable on all Australian roads, bike lanes, and shared paths with no registration, no licence plate, and no motorcycle licence required. This electric commuter bike eliminates the daily petrol fuel bill (average $18–$22 per full tank for 125cc equivalents) and replaces it with an electricity cost of under $0.50 per full charge — saving Australian commuters over $2,000 per year in fuel costs alone. The rigid 7075 aerospace aluminium frame, 7-speed Shimano gears, front LED headlight, rear brake light, and quality hydraulic disc brakes provide the durability and safety needed for daily Australian urban commuting. With up to 80km range, the RTR eBike Pro covers typical Sydney, Melbourne, and Brisbane suburban commuting distances easily on a single charge. Available through Electric Dirt Bike Australia\'s electric motor bikes range at electricdirtbikeaustralia.com.au with free freight.",
    "specs": {
      "motorPeak": "250 Watts (continuous, road-legal)",
      "battery": "36V 15Ah Lithium-ion (540Wh)",
      "topSpeed": "25 km/h (road-legal assist limit)",
      "range": "Up to 80 km",
      "weight": "22 kg",
      "gears": "Shimano 7-Speed",
      "legal": "No licence, no registration, no number plate required"
    },
    "images": [
      "/images/product-rtr-ebike-pro.jpg"],
    "inStock": true
  },
  {
    "slug": "rtr-ebike-s-classic",
    "name": "RTR eBike S Classic Urban E-Bike (Road-Legal)",
    "brand": "RTR eBike",
    "price": 2790,
    "compareAtPrice": 2990,
    "category": "electric-motorbikes",
    "badge": "Urban Commuter",
    "featured": false,
    "shortDescription": "Classic step-through electric commuter from Australian brand RTR eBike. 250W, 25 km/h road-legal assist, and lightweight 19kg frame.",
    "description": "The RTR eBike S Classic is a road-legal electric urban bike from Australian brand RTR eBike, designed with a step-through frame for effortless mounting and dismounting in Australian city traffic — ideal for office workers, university students, and everyday commuters who want the benefits of electric transport without motorcycle-style high-seat-height barriers. The fully integrated 36V 13Ah lithium-ion battery is concealed inside the frame downtube for a clean, modern appearance that doesn\'t scream 'electric bike' to onlookers. Front suspension fork absorbs Sydney and Melbourne urban road surface imperfections and kerb drops comfortably. Hydraulic disc brakes front and rear provide confident, fade-free stopping in wet winter conditions and sudden traffic stops. At 19kg — lighter than most road-legal electric bikes with comparable battery capacity — the RTR S Classic can be carried into apartments and offices. Up to 70km urban range. Road-legal with no registration or licence required. Available from Electric Dirt Bike Australia\'s commuter range.",
    "specs": {
      "motorPeak": "250 Watts",
      "battery": "36V 13Ah Integrated (468Wh)",
      "topSpeed": "25 km/h",
      "range": "Up to 70 km",
      "weight": "19 kg",
      "frame": "Step-through 6061 aluminium",
      "brakes": "Hydraulic disc front and rear"
    },
    "images": [
      "/images/product-rtr-ebike-s-classic.webp"],
    "inStock": true
  },
  {
    "slug": "niu-nqi-gt-electric-moped",
    "name": "NIU NQi GT Electric Moped (Road-Legal, LAMS)",
    "brand": "NIU",
    "price": 5990,
    "compareAtPrice": 6490,
    "category": "electric-motorbikes",
    "badge": "Road-Legal Moped",
    "featured": true,
    "shortDescription": "Road-registered electric moped with 3,000W motor, LAMS-approved registration for L and P-plate riders, and a full 100km range.",
    "description": "The NIU NQi GT is Australia\'s best-selling road-legal electric moped — a LAMS-approved electric motor bike from NIU Technologies (niu.com), the world\'s largest electric scooter manufacturer, offering full ADR compliance for road registration in NSW, VIC, QLD, WA, SA, and all other Australian states and territories. The cloud-connected NIU smartphone app provides real-time GPS theft tracking, ride analytics, remote locking, and battery status monitoring — features that no comparable petrol moped offers. Dual removable 72V lithium batteries allow hot-swapping for unlimited daily range: charge one at the office while riding on the second. With LAMS approval for L and P-plate motorcycle licence holders across all Australian states, the NIU NQi GT is accessible to the widest possible range of Australian riders from day one of getting their learner\'s permit. 100km dual-battery range, 70 km/h top speed, and near-zero running costs make this electric moped the benchmark road-legal electric motor bike in Australia. Available from Electric Dirt Bike Australia.",
    "specs": {
      "motorPeak": "3,000 Watts",
      "battery": "72V 26Ah Dual Removable Lithium",
      "topSpeed": "70 km/h",
      "range": "100 km (dual battery)",
      "weight": "98 kg",
      "legal": "LAMS approved — L & P-plate legal in all states",
      "connectivity": "Cellular GPS + Bluetooth App"
    },
    "images": [
      "/images/product-niu-nqi-gt.webp"],
    "inStock": true
  },
  {
    "slug": "super-soco-cpx-electric-moped",
    "name": "Super Soco CPx Electric Moped (Road-Legal, 3kW)",
    "brand": "Super Soco",
    "price": 5490,
    "compareAtPrice": 5990,
    "category": "electric-motorbikes",
    "badge": "Urban Moped",
    "featured": false,
    "shortDescription": "Retro-styled 3kW electric moped for Australian city commuters. Road-registered, LAMS-compliant, and styled with classic café-racer inspiration.",
    "description": "The Super Soco CPx is a road-legal electric moped that captures the iconic retro café-racer style of classic 1960s motorcycles while delivering the practical daily commuter benefits of modern electric motor bike technology — zero fuel costs, near-zero maintenance, and the simplicity of a keyless Bluetooth start. The removable 60V 30Ah lithium battery is the CPx\'s defining practical advantage: carry it to your apartment, office, or hotel room and charge it from any standard 10A power point without needing a dedicated garage charging outlet. Regenerative braking recovers kinetic energy on every urban deceleration, extending the 90km range further in stop-start Sydney and Melbourne traffic. LAMS-compliant registration means Australian learner and provisional riders can legally commute on the CPx immediately after receiving their motorcycle licence. Super Soco\'s global service network and Vmoto\'s Australian distribution ensure parts and service support are available nationally. Available from Electric Dirt Bike Australia\'s road-legal electric motor bike range.",
    "specs": {
      "motorPeak": "3,000 Watts",
      "battery": "60V 30Ah Removable Lithium",
      "topSpeed": "65 km/h",
      "range": "90 km",
      "weight": "85 kg",
      "charging": "Removable battery — charge at home or office",
      "features": "Keyless Bluetooth start, regen braking"
    },
    "images": [
      "/images/product-super-soco-cpx.jpg"],
    "inStock": true
  },
  {
    "slug": "vmoto-soco-tc-max-electric",
    "name": "Vmoto Soco TC-Max Electric Motorcycle (Road-Legal, 5kW)",
    "brand": "Vmoto",
    "price": 8990,
    "compareAtPrice": 9490,
    "category": "electric-motorbikes",
    "badge": "Premium Road Moto",
    "featured": false,
    "shortDescription": "Premium 5kW road-legal electric motorcycle from Australian-listed Vmoto. Full-size motorcycle ergonomics, LAMS approved, 120km range.",
    "description": "The Vmoto Soco TC-Max is the flagship road-legal electric motorcycle from Vmoto Limited (ASX: VMT) — Australia\'s only ASX-listed electric motorcycle manufacturer and a company whose mission is to accelerate Australia\'s transition to clean electric motor bike transport. The TC-Max delivers full-size motorcycle ergonomics, 5kW peak power, and LAMS-compliant road registration for L and P-plate riders across all Australian states — making it Australia\'s most capable LAMS-approved electric motorcycle with genuine 100+ km/h highway capability. Adjustable WP suspension front and rear — the same brand used by KTM, Husqvarna, and GasGas factory racing teams — provides refined ride quality matching European premium electric motorcycles costing significantly more. The dual removable 72V battery system delivers 120km combined range and allows independent home charging of each battery. At 117kg and $8,990, the Vmoto TC-Max is the benchmark Australian road-legal electric motor bike for riders who want full-size motorcycle presence with zero-emission daily commuting economics. Available through Electric Dirt Bike Australia with 12-month warranty and free freight.",
    "specs": {
      "motorPeak": "5,000 Watts (5kW)",
      "battery": "72V Dual Removable 4.8kWh Total",
      "topSpeed": "95 km/h",
      "range": "120 km",
      "weight": "117 kg",
      "suspension": "WP Adjustable Front & Rear",
      "legal": "Full LAMS-compliant road registration"
    },
    "images": [
      "/images/product-vmoto-tc-max.jpg"],
    "inStock": true
  }
];

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  date: string;
  relativeTime: string;
  rating: number;
  verified: boolean;
  title: string;
  comment: string;
  productBought: string;
}

export const REVIEWS: ReviewItem[] = [
  {
    "id": "rev-01",
    "author": "Callum Henderson",
    "location": "Mittagong, NSW",
    "date": "14 August 2025",
    "relativeTime": "13 months ago",
    "rating": 5,
    "verified": true,
    "title": "Flawless pickup in Mittagong — Sur-Ron Light Bee X is a weapon!",
    "comment": "Collected my Light Bee X directly from the Mittagong facility. The team unboxed it, walked through suspension setup and tyre pressures, and gave me great battery storage advice. The torque on NSW singletrack is mind-blowing.",
    "productBought": "Sur-Ron Light Bee X (60V 40Ah)"
  },
  {
    "id": "rev-02",
    "author": "Mitchell Broadbent",
    "location": "Perth Hills, WA",
    "date": "19 August 2025",
    "relativeTime": "13 months ago",
    "rating": 5,
    "verified": true,
    "title": "Free freight to Western Australia arrived in 4 days flat",
    "comment": "Was sceptical about getting a full-sized electric dirt bike freighted over to WA, but it arrived inside a steel transport crate in perfect shape. Saved 10% using crypto at checkout too. Outstanding service.",
    "productBought": "Talaria Sting R MX4 (60V 45Ah / 8kW)"
  },
  {
    "id": "rev-03",
    "author": "Harrison Evans",
    "location": "Gold Coast Hinterland, QLD",
    "date": "26 August 2025",
    "relativeTime": "13 months ago",
    "rating": 5,
    "verified": true,
    "title": "Stark Varg 80HP is pure madness. Nothing comes close.",
    "comment": "Replaced my 450 four-stroke with the Stark Varg. The throttle response is instantaneous and being able to customize engine braking and power curves on the fly makes me faster around our private track.",
    "productBought": "Stark Varg EX 80HP Competition Motocross"
  },
  {
    "id": "rev-04",
    "author": "Braden Kelly",
    "location": "Mornington Peninsula, VIC",
    "date": "02 September 2025",
    "relativeTime": "12 months ago",
    "rating": 5,
    "verified": true,
    "title": "72V battery upgrade gave my Sur-Ron unbelievable punch",
    "comment": "The 72V 42Ah Molicel pack transformed the bike completely. Hill climbs that used to bog down now wheelie with ease. The Bluetooth BMS app lets me monitor every cell voltage while resting on the trail.",
    "productBought": "72V 42Ah High-Discharge Lithium Battery Pack"
  },
  {
    "id": "rev-05",
    "author": "Tyson Gallagher",
    "location": "Sunshine Coast, QLD",
    "date": "09 September 2025",
    "relativeTime": "12 months ago",
    "rating": 5,
    "verified": true,
    "title": "PayID transfer was instant and bike dispatched next morning",
    "comment": "Used PayID for the payment and got an SMS dispatch confirmation the very next business day with full tailgate tracking. Assembly was just front wheel, handlebars, and footpegs. Super easy.",
    "productBought": "Sur-Ron Ultra Bee (74V 55Ah / 12.5kW)"
  },
  {
    "id": "rev-06",
    "author": "Liam MacIntyre",
    "location": "Blue Mountains, NSW",
    "date": "17 September 2025",
    "relativeTime": "12 months ago",
    "rating": 5,
    "verified": true,
    "title": "Silent riding through private bush acreage — no noise complaints!",
    "comment": "Living adjoining national park, conventional petrol dirt bikes attracted neighbour complaints immediately. With the Talaria Sting R, I ride daily through my property in complete peace. Oil gearbox is virtually silent.",
    "productBought": "Talaria Sting R MX4 (60V 45Ah / 8kW)"
  },
  {
    "id": "rev-07",
    "author": "Cooper Petersen",
    "location": "Adelaide Hills, SA",
    "date": "25 September 2025",
    "relativeTime": "12 months ago",
    "rating": 5,
    "verified": true,
    "title": "15A Fast charger charges my battery in under two hours",
    "comment": "Solid metal casing with an active cooling fan. Shows actual voltage and amps pumped in. Cut down my turnaround time between trail sessions drastically.",
    "productBought": "15A Smart Fast Charger (Dual 60V / 72V Auto-Detect)"
  },
  {
    "id": "rev-08",
    "author": "Jarrod Fletcher",
    "location": "Barossa Valley, SA",
    "date": "04 October 2025",
    "relativeTime": "11 months ago",
    "rating": 5,
    "verified": true,
    "title": "RFN Ares Rally Pro is the ultimate dual-purpose trials bike",
    "comment": "Unclipping the seat for trials riding in rocky creeks is a game changer. The 74V architecture has massive instant torque. Quality fit and finish throughout.",
    "productBought": "RFN Ares Rally Pro (74V 35Ah / 12.5kW)"
  },
  {
    "id": "rev-09",
    "author": "Declan O\'Connor",
    "location": "Byron Bay Hinterland, NSW",
    "date": "12 October 2025",
    "relativeTime": "11 months ago",
    "rating": 5,
    "verified": true,
    "title": "10% Crypto discount saved me over $700 on the purchase",
    "comment": "Sent USDT on Tron network. Got receipt within 10 minutes and personal WhatsApp check-in from the dispatch manager. Real Australian business with genuine customer care.",
    "productBought": "Talaria Sting R MX4 (60V 45Ah / 8kW)"
  },
  {
    "id": "rev-10",
    "author": "Zac Willoughby",
    "location": "Geelong, VIC",
    "date": "21 October 2025",
    "relativeTime": "11 months ago",
    "rating": 5,
    "verified": true,
    "title": "Heavy duty bash plate saved my motor on Day 1",
    "comment": "Cased a giant boulder in the Otways over the weekend and the 5mm billet plate took the entire brunt. Not a scratch on the motor housing. Essential upgrade.",
    "productBought": "Billet 5mm Heavy-Duty Aluminium Skid Plate"
  },
  {
    "id": "rev-11",
    "author": "Kieran Walsh",
    "location": "Wollongong, NSW",
    "date": "29 October 2025",
    "relativeTime": "11 months ago",
    "rating": 5,
    "verified": true,
    "title": "Super73 RX Mojave is the coolest commuter and trail cruiser",
    "comment": "Gets thumbs up everywhere from Wollongong beach to bush tracks up Mount Keira. Suspension absorbs every pothole and the battery range easily exceeds 70km on medium pedal assist.",
    "productBought": "Super73-RX Mojave Scrambler Electric Moto"
  },
  {
    "id": "rev-12",
    "author": "Flynn Campbell",
    "location": "Hobart, TAS",
    "date": "06 November 2025",
    "relativeTime": "10 months ago",
    "rating": 5,
    "verified": true,
    "title": "Delivered to Tasmania without a single scratch or hiccup",
    "comment": "Tasmanian delivery is often a headache with mainland shops, but EDBA coordinated through SeaRoad freight seamlessly. The bike was bolted down to a steel skid inside heavy cardboard.",
    "productBought": "Sur-Ron Light Bee X (60V 40Ah)"
  },
  {
    "id": "rev-13",
    "author": "Marcus Thorne",
    "location": "Cairns, QLD",
    "date": "14 November 2025",
    "relativeTime": "10 months ago",
    "rating": 5,
    "verified": true,
    "title": "Sur-Ron Ultra Bee handles tropical heat like a champ",
    "comment": "Riding in 33°C North Queensland humidity and the temperature sensors stayed green all afternoon. The reverse gear has saved me multiple times on steep rainforest dead-ends.",
    "productBought": "Sur-Ron Ultra Bee (74V 55Ah / 12.5kW)"
  },
  {
    "id": "rev-14",
    "author": "Nathaniel Somerfield",
    "location": "Newcastle, NSW",
    "date": "22 November 2025",
    "relativeTime": "10 months ago",
    "rating": 5,
    "verified": true,
    "title": "Dunlop Geomax MX33 tyre combo unlocked massive traction",
    "comment": "Stock tyres are fine for hard pack, but these Dunlop MX33s hook up on soft sand and muddy trails like velcro. The 3mm heavy duty tubes provide peace of mind against pinch flats.",
    "productBought": "Dunlop Geomax MX33 Off-Road Tyre & HD Tube Combo"
  },
  {
    "id": "rev-15",
    "author": "Lucas D\'Amato",
    "location": "Adelaide, SA",
    "date": "30 November 2025",
    "relativeTime": "10 months ago",
    "rating": 5,
    "verified": true,
    "title": "Talaria XXX is the punchiest lightweight bike for the money",
    "comment": "For under $6k, the Talaria XXX punches way above its weight. Super light, responsive throttle, and the belt drive is whisper quiet. Perfect for farm trails and light tracks.",
    "productBought": "Talaria XXX Black Edition (60V 40Ah)"
  },
  {
    "id": "rev-16",
    "author": "Brayden Cross",
    "location": "Canberra, ACT",
    "date": "07 December 2025",
    "relativeTime": "9 months ago",
    "rating": 5,
    "verified": true,
    "title": "Torp TC500 controller was truly plug and play on my Light Bee",
    "comment": "Installed in 35 minutes. Calibrated throttle through the Torp smartphone app and unleashed an instant 8.5kW output with standard battery. Night and day difference.",
    "productBought": "Torp TC500 Plug-and-Play Tunable Controller"
  },
  {
    "id": "rev-17",
    "author": "Joel Abernethy",
    "location": "Darwin, NT",
    "date": "15 December 2025",
    "relativeTime": "9 months ago",
    "rating": 5,
    "verified": true,
    "title": "Rawrr Mantis 72V tackled Top End wet season without missing a beat",
    "comment": "Waterproof connectors and sealed battery case held up through creeks and muddy tracks in Darwin. Great low-end grunt for tackling sandy terrain.",
    "productBought": "Rawrr Mantis 72V High-Output Trail Bike"
  },
  {
    "id": "rev-18",
    "author": "Ashley Reynolds",
    "location": "Ballarat, VIC",
    "date": "22 December 2025",
    "relativeTime": "9 months ago",
    "rating": 5,
    "verified": true,
    "title": "Christmas present of a lifetime for my son and myself",
    "comment": "Bought two bikes: a Sur-Ron for myself and an E-Ride Pro for my 17-year-old. Delivered before Christmas right to our rural property. The staff answered all our technical setup questions.",
    "productBought": "Sur-Ron Light Bee X (60V 40Ah)"
  },
  {
    "id": "rev-19",
    "author": "Cameron Goddard",
    "location": "Central Coast, NSW",
    "date": "03 January 2026",
    "relativeTime": "8 months ago",
    "rating": 5,
    "verified": true,
    "title": "E-Ride Pro SS 2.0 has insane acceleration out of the box",
    "comment": "The 72V stock system on the E-Ride Pro hits like a freight train. 12kW peak power means front wheel lifts effortlessly on demand. Best factory spec on the market today.",
    "productBought": "E-Ride Pro-SS 2.0 (72V 40Ah / 12kW)"
  },
  {
    "id": "rev-20",
    "author": "Dean Colquhoun",
    "location": "Bowral, NSW",
    "date": "11 January 2026",
    "relativeTime": "8 months ago",
    "rating": 5,
    "verified": true,
    "title": "Local workshop backup in Mittagong gives total peace of mind",
    "comment": "Came in for a 500km chain check and torque inspection. Technicians had me sorted in 20 minutes with zero charge. Having genuine factory support in the Southern Highlands is priceless.",
    "productBought": "Sur-Ron Light Bee X (60V 40Ah)"
  },
  {
    "id": "rev-21",
    "author": "Samson Truscott",
    "location": "Bendigo, VIC",
    "date": "19 January 2026",
    "relativeTime": "8 months ago",
    "rating": 5,
    "verified": true,
    "title": "Fastace inverted dual-air forks soaked up every braking bump",
    "comment": "Replaced the stock KKE forks with the Fastace ALX13RC 200mm inverted fork. No more wrist fatigue on rocky descents and much stiffer tracking through corners.",
    "productBought": "Fastace ALX13RC 200mm Inverted Dual-Air Downhill Fork"
  },
  {
    "id": "rev-22",
    "author": "Brodie Sinclair",
    "location": "Townsville, QLD",
    "date": "27 January 2026",
    "relativeTime": "8 months ago",
    "rating": 5,
    "verified": true,
    "title": "Magura MT7 brake kit stops on a dime from 80km/h",
    "comment": "The 4-piston calipers paired with 220mm floating rotors provide true one-finger braking control. Total confidence when diving into tight downhill switchbacks.",
    "productBought": "Magura MT7 Pro 4-Piston Hydraulic Brake Set"
  },
  {
    "id": "rev-23",
    "author": "Gareth Vance",
    "location": "Margaret River, WA",
    "date": "04 February 2026",
    "relativeTime": "7 months ago",
    "rating": 5,
    "verified": true,
    "title": "Stark Varg Alpha on our private vineyard track — unmatched speed",
    "comment": "Unbelievable chassis stiffness and KYB suspension. It feels more planted than any Japanese 450 I have owned over 20 years of riding. Zero oil changes, zero valve clearances.",
    "productBought": "Stark Varg Alpha 60HP Motocross"
  },
  {
    "id": "rev-24",
    "author": "Rowan Fitzpatrick",
    "location": "Toowoomba, QLD",
    "date": "12 February 2026",
    "relativeTime": "7 months ago",
    "rating": 5,
    "verified": true,
    "title": "72V 50Ah Long-Range pack gave me over 130km on one charge",
    "comment": "Did a full 4-hour exploration loop in Crows Nest national trails and finished with 28% battery remaining. High-drain Samsung 50S cells stay cool even under load.",
    "productBought": "72V 50Ah Long-Range Touring Lithium Battery"
  },
  {
    "id": "rev-25",
    "author": "Tyler Beaumont",
    "location": "Dubbo, NSW",
    "date": "20 February 2026",
    "relativeTime": "7 months ago",
    "rating": 5,
    "verified": true,
    "title": "Heavy duty folding ramp made ute loading a breeze",
    "comment": "Arrived together with my Talaria. 340kg weight capacity means I can walk the bike up comfortably without the ramp flexing. Rubber fingers protect the tailgate paint.",
    "productBought": "Heavy Duty Folding Aluminium Loading Ramp (340kg Rated)"
  },
  {
    "id": "rev-26",
    "author": "Heath Morrison",
    "location": "Launceston, TAS",
    "date": "28 February 2026",
    "relativeTime": "7 months ago",
    "rating": 5,
    "verified": true,
    "title": "Stealth Electric Bikes B-52 Bomber Aussie pedigree shines through",
    "comment": "Massive pride in owning an Australian designed hyper-bike. 5.2kW output and top speed of nearly 80km/h with heavy duty sequential gearbox. Built like an armoured tank.",
    "productBought": "Stealth B-52 Bomber Australian Electric Moto"
  },
  {
    "id": "rev-27",
    "author": "Jordan McAllister",
    "location": "Fremantle, WA",
    "date": "07 March 2026",
    "relativeTime": "6 months ago",
    "rating": 5,
    "verified": true,
    "title": "SM Pro Platinum 16/19 wheelset handles brutal rock hits",
    "comment": "Upgraded to the 16-inch rear / 19-inch front setup. The wider rear tyre allows lower pressures for massive traction in WA pea gravel without pinching tubes.",
    "productBought": "SM Pro Platinum 16/19 Wheelset with HD Spokes"
  },
  {
    "id": "rev-28",
    "author": "Craig Doolan",
    "location": "Orange, NSW",
    "date": "15 March 2026",
    "relativeTime": "6 months ago",
    "rating": 5,
    "verified": true,
    "title": "Talaria Dragon full-size electric enduro is a revelation",
    "comment": "The 28kW peak output on the Dragon puts it in genuine 300cc two-stroke territory. High-link rear suspension handles whoops and logs effortlessly.",
    "productBought": "Talaria Dragon Full-Size Enduro (88V / 28kW)"
  },
  {
    "id": "rev-29",
    "author": "Darcy Fletcher",
    "location": "Bright, VIC",
    "date": "23 March 2026",
    "relativeTime": "6 months ago",
    "rating": 5,
    "verified": true,
    "title": "Epic alpine climbing ability with the 58T rear sprocket",
    "comment": "Fitted the Warp 9 58-tooth sprocket before a high country weekend in Bright. The tractor-like crawling torque up 40-degree incline fire trails is unbelievable.",
    "productBought": "Warp 9 58T Extreme Climbing Rear Sprocket"
  },
  {
    "id": "rev-30",
    "author": "Shane Hetherington",
    "location": "Mackay, QLD",
    "date": "31 March 2026",
    "relativeTime": "6 months ago",
    "rating": 5,
    "verified": true,
    "title": "Sur-Ron Storm Bee Enduro is the ultimate full-frame electric weapon",
    "comment": "Full motorcycle geometry, road-legal lighting kit, and massive regenerative braking. Rides like a modern 250F without the maintenance or air filter washing.",
    "productBought": "Sur-Ron Storm Bee Enduro (104V 55Ah / 22.5kW)"
  },
  {
    "id": "rev-31",
    "author": "Lachlan Vance",
    "location": "Port Macquarie, NSW",
    "date": "08 April 2026",
    "relativeTime": "5 months ago",
    "rating": 5,
    "verified": true,
    "title": "Baja Designs headlight illuminates the entire forest floor",
    "comment": "Riding singletrack at night with this headlight kit is incredible. Plugs directly into the stock 12V harness and casts daylight 150 metres down the track.",
    "productBought": "Baja Designs Squadron Pro LED High-Output Headlight Kit"
  },
  {
    "id": "rev-32",
    "author": "Travis Gannon",
    "location": "Albury, NSW",
    "date": "16 April 2026",
    "relativeTime": "5 months ago",
    "rating": 5,
    "verified": true,
    "title": "20A Ultra Fast Pit Charger is an essential track accessory",
    "comment": "Can adjust current on the fly from 5A up to 20A. At 20A, it topped up our Talaria between morning and afternoon track heats in just 45 minutes.",
    "productBought": "20A Ultra Fast Pit Charger with Variable Amperage"
  },
  {
    "id": "rev-33",
    "author": "Brody Westwood",
    "location": "Coffs Harbour, NSW",
    "date": "24 April 2026",
    "relativeTime": "5 months ago",
    "rating": 5,
    "verified": true,
    "title": "CNC wide footpegs eliminate foot slip even in deep mud",
    "comment": "Much wider platform than stock pegs with sharp replaceable stainless cleats. Dramatically reduced ankle fatigue on long trail days.",
    "productBought": "CNC Aircraft Alloy Wide Gripper Footpegs"
  },
  {
    "id": "rev-34",
    "author": "Jesse Langford",
    "location": "Bathurst, NSW",
    "date": "02 May 2026",
    "relativeTime": "4 months ago",
    "rating": 5,
    "verified": true,
    "title": "Caofen F80 one-piece unibody magnesium frame is super rigid",
    "comment": "The unibody frame has zero weld seams and feels like riding on rails through rocky descents. Oil-cooled motor and battery thermal management work flawlessly.",
    "productBought": "Caofen F80 Dual Sport Electric Dirt Bike"
  },
  {
    "id": "rev-35",
    "author": "Kade Tomlinson",
    "location": "Shepparton, VIC",
    "date": "10 May 2026",
    "relativeTime": "4 months ago",
    "rating": 5,
    "verified": true,
    "title": "Arctic Leopard E-XE 880 is lightweight perfection for enduro",
    "comment": "Under 70kg with 15kW output. Great clutch feel and reverse gear makes technical pivot turns in tight trees effortless.",
    "productBought": "Arctic Leopard E-XE 880 Enduro Electric Bike"
  },
  {
    "id": "rev-36",
    "author": "Hayden Prescott",
    "location": "Rockhampton, QLD",
    "date": "18 May 2026",
    "relativeTime": "4 months ago",
    "rating": 5,
    "verified": true,
    "title": "DID 420 Gold Chain doesn\'t stretch like cheap stock chains",
    "comment": "Installed the DID 420 NZ3 gold chain with the 54T sprocket. Over 400km of hard riding and haven\'t needed to adjust the chain tensioners once.",
    "productBought": "DID 420 NZ3 Gold Heavy-Duty Off-Road Racing Chain"
  },
  {
    "id": "rev-37",
    "author": "Connor Radcliffe",
    "location": "Mildura, VIC",
    "date": "26 May 2026",
    "relativeTime": "4 months ago",
    "rating": 5,
    "verified": true,
    "title": "EBMX X-9000 controller made our track times 3 seconds faster",
    "comment": "Smooth throttle delivery, infinite customisation, and thermal monitoring that automatically protects motor windings. Best aftermarket upgrade available.",
    "productBought": "EBMX X-9000 Extreme Motor Controller & Display"
  },
  {
    "id": "rev-38",
    "author": "Aiden Montgomery",
    "location": "Broken Hill, NSW",
    "date": "03 June 2026",
    "relativeTime": "3 months ago",
    "rating": 5,
    "verified": true,
    "title": "Maxxis Maxxcross tyres hook up in outback red dirt and sand",
    "comment": "Hard compound tyre with thick casing. Not a single puncture riding over outback mulga sticks and sharp quartz rocks.",
    "productBought": "Maxxis Maxxcross IT Desert & Hardpack Tyre Combo"
  },
  {
    "id": "rev-39",
    "author": "Zane Gallagher",
    "location": "Bunbury, WA",
    "date": "11 June 2026",
    "relativeTime": "3 months ago",
    "rating": 5,
    "verified": true,
    "title": "KKE 18/21 full-size enduro wheel conversion handles like a real MX bike",
    "comment": "Converting to a full 21-inch front and 18-inch rear transforms the roll-over capability on logs and rocks. Highly recommend to taller riders.",
    "productBought": "KKE 18/21 Full-Size Enduro Wheel & Tyre Conversion Kit"
  },
  {
    "id": "rev-40",
    "author": "Brax Cunningham",
    "location": "Tamworth, NSW",
    "date": "19 June 2026",
    "relativeTime": "3 months ago",
    "rating": 5,
    "verified": true,
    "title": "Formula Cura 4 brakes are super crisp with zero lever fade",
    "comment": "Mineral oil system with huge 18mm pistons. Downhill descents in the hills used to boil stock brake fluid, but the Curas stay consistent lap after lap.",
    "productBought": "Formula Cura 4 Hydraulic 4-Piston Disc Brake Kit"
  },
  {
    "id": "rev-41",
    "author": "Keanu Fletcher",
    "location": "Warrnambool, VIC",
    "date": "27 June 2026",
    "relativeTime": "3 months ago",
    "rating": 5,
    "verified": true,
    "title": "Torrot Motocross Two was the ultimate training tool for my 9-year-old",
    "comment": "Parental smartphone speed limiting via Bluetooth lets me dial in power as his confidence grows. Clean, quiet, and doesn\'t burn hot exhaust pipes on young legs.",
    "productBought": "Torrot Motocross Two Electric Junior Dirt Bike"
  },
  {
    "id": "rev-42",
    "author": "Rowan Sutherland",
    "location": "Alice Springs, NT",
    "date": "05 July 2026",
    "relativeTime": "2 months ago",
    "rating": 5,
    "verified": true,
    "title": "Finke track desert testing proved the Sur-Ron Ultra Bee reliability",
    "comment": "Rode sandy whoops along the Finke service track. The suspension took big hits smoothly and the SRTC traction control kept the bike straight in soft sand ruts.",
    "productBought": "Sur-Ron Ultra Bee (74V 55Ah / 12.5kW)"
  },
  {
    "id": "rev-43",
    "author": "Bailey Thornton",
    "location": "Geraldton, WA",
    "date": "13 July 2026",
    "relativeTime": "2 months ago",
    "rating": 5,
    "verified": true,
    "title": "Velimotor VMX08 full carbon fibre frame is featherweight magic",
    "comment": "Total weight under 48kg with carbon monocoque frame. Flicks through tight coastal scrub trails with zero effort. Arrived in WA in 5 business days.",
    "productBought": "Velimotor VMX08 Ultra-Light Carbon Electric Dirt Bike"
  },
  {
    "id": "rev-44",
    "author": "Mason Kendrick",
    "location": "Bundaberg, QLD",
    "date": "21 July 2026",
    "relativeTime": "2 months ago",
    "rating": 5,
    "verified": true,
    "title": "Stealth F-37 trail fighter is the smoothest dual-suspension bike made",
    "comment": "Love that this brand is engineered right here in Australia. Silent belt drive with integrated planetary 2-speed gearbox is engineering brilliance.",
    "productBought": "Stealth F-37 Dual-Sport Trail Fighter"
  },
  {
    "id": "rev-45",
    "author": "Jaxon Barclay",
    "location": "Mount Gambier, SA",
    "date": "29 July 2026",
    "relativeTime": "2 months ago",
    "rating": 5,
    "verified": true,
    "title": "Direct mount riser kit fixed my riding posture completely",
    "comment": "Being 6ft 2in, the stock handlebars were too low. The Warp 9 direct-mount riser brought the bars up 2 inches, making standing up on the pegs natural and comfortable.",
    "productBought": "Warp 9 Direct-Mount Handlebar Riser & Stem Lock"
  },
  {
    "id": "rev-46",
    "author": "Levi Chapman",
    "location": "Nowra, NSW",
    "date": "06 August 2026",
    "relativeTime": "7 weeks ago",
    "rating": 5,
    "verified": true,
    "title": "Kuberg Ranger utility electric dirt bike has massive towing power",
    "comment": "Free-floating standing or seated riding position. We use it on our 80-acre property for checking boundary fences and livestock without disturbing stock.",
    "productBought": "Kuberg Ranger Multi-Purpose Electric Dirt Bike"
  },
  {
    "id": "rev-47",
    "author": "Ashton Delaney",
    "location": "Albany, WA",
    "date": "14 August 2026",
    "relativeTime": "6 weeks ago",
    "rating": 5,
    "verified": true,
    "title": "Ext Ferro 36 upside-down fork is the gold standard for electric bikes",
    "comment": "Extremely high build quality from Italy. High and low speed compression adjustments allow true custom tuning for both fast whoops and slow rock crawling.",
    "productBought": "EXT Ferro 36 Inverted Premium Enduro Fork"
  },
  {
    "id": "rev-48",
    "author": "Hudson Sterling",
    "location": "Devonport, TAS",
    "date": "22 August 2026",
    "relativeTime": "5 weeks ago",
    "rating": 5,
    "verified": true,
    "title": "Torp TC1000 controller turned my bike into an absolute rocket",
    "comment": "Handles up to 1000A phase current without sweating. Instant Bluetooth telemetry on my phone bar mount makes trail diagnostics effortless.",
    "productBought": "Torp TC1000 High-Power 1000A Bluetooth Controller"
  },
  {
    "id": "rev-49",
    "author": "Cooper Vance",
    "location": "Southern Highlands, NSW",
    "date": "02 September 2026",
    "relativeTime": "3 weeks ago",
    "rating": 5,
    "verified": true,
    "title": "E-Ride Pro-SR 15kW super-moto spec is terrifyingly fast",
    "comment": "The power-to-weight ratio is unmatched. Crisp throttle response, high discharge battery, and premium brakes make this the benchmark for 2026.",
    "productBought": "E-Ride Pro-SR (72V 45Ah / 15kW Peak)"
  },
  {
    "id": "rev-50",
    "author": "Liam Fitzgerald",
    "location": "Mittagong, NSW",
    "date": "18 September 2026",
    "relativeTime": "1 week ago",
    "rating": 5,
    "verified": true,
    "title": "Second bike bought from EDBA — unbeatable local Australian support",
    "comment": "Bought our first Light Bee here 18 months ago, and just collected the Talaria Sting R for my brother. Friendly team, honest advice, and best pricing in Australia.",
    "productBought": "Talaria Sting R MX4 (60V 45Ah / 8kW)"
  }
];

export const FAQ = [
  {
    question: 'Are electric dirt bikes legal to ride in Australia?',
    answer: 'Electric dirt bikes like the Sur-Ron Light Bee X, Talaria Sting R, and Stark Varg are purpose-built high-power competition off-road vehicles. They are 100% legal on private property, designated off-road motocross parks, and private bush tracks across Australia without registration. Dual-sport models equipped with ADR lighting kits can be registered depending on state transport rules (NSW TfNSW, VicRoads, QLD TMR).',
  },
  {
    question: 'How does the 10% Crypto Discount work at checkout?',
    answer: 'When you choose Crypto (Bitcoin, USDT, or Ethereum) or instant PayID, a 10% discount is automatically deducted from your order subtotal. You will receive an instant order summary with exact transfer instructions, and your bike is queued for priority dispatch once confirmed.',
  },
  {
    question: 'How are electric dirt bikes shipped across Australia?',
    answer: 'Every bike is packaged inside a heavy-duty steel-reinforced transport crate with custom foam brackets to eliminate transit damage. We dispatch Aus-wide via specialized tailgate freight carriers directly from our Southern Highlands NSW 2575 warehouse. Delivery is 100% FREE on all bike orders over $1,500 AUD.',
  },
  {
    question: 'What warranty is included with my purchase?',
    answer: 'All bikes and battery packs sold by Electric Dirt Bike Australia include a 12-Month Comprehensive Australian Factory Warranty covering the frame, motor, controller, battery, and electrical harness against manufacturer defects. We stock genuine replacement parts locally in NSW for rapid turnaround.',
  },
  {
    question: 'How do I maintain the battery and get the best lifespan?',
    answer: 'Store your lithium battery in a dry place between 15°C and 25°C. Avoid leaving the battery at 0% charge for extended periods. For seasonal storage, keep the battery around 50-60% charge and top it up every 60 days. Our smart fast chargers feature automated cutoffs to prevent overcharging.',
  },
  {
    question: 'How fast does a Sur-Ron Light Bee X go?',
    answer: 'The Sur-Ron Light Bee X has a top speed of approximately 75 km/h in unrestricted mode. The motor controller can be software-tuned for slower speeds, making it suitable for younger riders on private property. With aftermarket 72V battery upgrades and a reprogrammed controller, experienced riders can reach 90–95 km/h on smooth terrain.',
  },
  {
    question: 'How fast does a Talaria Sting R MX4 go?',
    answer: 'The Talaria Sting R MX4 reaches a top speed of approximately 85 km/h from its 60V 45Ah sealed gearbox drivetrain. Its 8kW peak motor output provides stronger hill-climbing torque compared to belt-drive models, and its IPX7-rated sealed gearbox handles mud, creek crossings, and technical rocky terrain that would damage belt systems.',
  },
  {
    question: 'How much does an electric dirt bike cost in Australia?',
    answer: 'Entry-level electric dirt bikes for kids start from $3,690 AUD. Mid-range adult performance bikes like the Sur-Ron Light Bee X are $6,490 AUD and the Talaria Sting R MX4 is $7,290 AUD. High-performance motocross bikes like the Stark Varg EX 80HP are $18,990 AUD. All prices include GST and free Australia-wide delivery on orders over $1,500.',
  },
  {
    question: 'Do I need a licence to ride an electric dirt bike in Australia?',
    answer: 'No motorcycle licence is required to ride an electric dirt bike on private property, farmland, or enclosed off-road parks in Australia. A standard motorcycle licence (R class) is required if you wish to ride on public roads. Contact your state transport authority (NSW TfNSW, VicRoads, Qld TMR, DPTI SA) for exact registration and licensing requirements for road-legal variants.',
  },
  {
    question: 'How long does the battery last on one charge?',
    answer: 'Battery range depends on rider weight, terrain, and riding style. The Sur-Ron Light Bee X delivers 40–65 km per charge on mixed trail riding. The Talaria Sting R MX4 provides 60–90 km per charge with its larger 60V 45Ah pack. The Stark Varg EX 80HP achieves 35–50 km per charge during full-race intensity motocross riding. Relaxed trail and bush riding can extend range by 30–50%.',
  },
  {
    question: 'What is the best electric dirt bike for adults in Australia?',
    answer: 'For most adult riders, the Sur-Ron Light Bee X is the best all-round choice — lightweight at 50 kg, highly modifiable, and priced at $6,490. Riders wanting more torque and gearbox durability prefer the Talaria Sting R MX4 at $7,290. Competitive motocross and enduro riders choose the Stark Varg EX 80HP or E-Ride Pro SR for maximum power.',
  },
  {
    question: 'Can kids ride electric dirt bikes in Australia?',
    answer: 'Yes — Electric Dirt Bike Australia stocks a junior range starting from age 3. The Segway X160 Compact ($4,690) suits riders aged 10–15. The Torrot Motocross Two Junior ($3,690) is ideal for younger children 6–12. All junior models include speed-limit modes adjustable via the app or controller, making them safe for supervised private property riding.',
  },
  {
    question: 'Is there GST included in the displayed price?',
    answer: 'Yes. All prices displayed on our website are inclusive of 10% Australian Goods and Services Tax (GST). You will receive a full tax invoice with your ABN and GST breakdown with every order, suitable for business expense claims or SMSF records.',
  },
];

export const POSTS = [
  {
    slug: "sur-ron-vs-talaria-australia-buyers-guide",
    title: "Sur-Ron Light Bee X vs Talaria Sting R: Which Electric Dirt Bike Wins in Australia?",
    excerpt: "An in-depth breakdown of motor power, gearbox vs belt drive, suspension, and trail range on Australian rugged tracks.",
    category: "Comparisons",
    date: "2026-02-14",
    readTime: "6 min read",
    image: "/images/product-talaria-sting-r-mx4.jpg",
    content: `Choosing between the Sur-Ron Light Bee X and the Talaria Sting R MX4 is the most common dilemma for Australian riders entering the high-performance electric dirt bike scene. Both machines offer exhilarating acceleration, zero emissions, and near-silent operation, but they cater to slightly different riding preferences.

### Drivetrain: Belt vs Gearbox
The Sur-Ron Light Bee X utilizes a primary drive belt linked to a secondary chain. This delivers whisper-quiet power delivery and lightweight nimbleness (50kg total weight), making it agile on tight singletrack. The Talaria Sting R, on the other hand, utilizes a sealed oil-bath gearbox. This eliminates belt snap risks when tackling rocky Australian scree, mud, or river crossings.

### Power & Battery Capacity
The Talaria Sting R MX4 produces 8kW peak output with its 60V 45Ah battery pack, while the standard Light Bee X provides 6kW from a 60V 40Ah pack. For heavier riders or steep hill-climbs in the Great Dividing Range, the extra 2kW on the Talaria provides noticeable punch out of corners.

### Conclusion & Verdict
If you prioritize lightweight flickability and maximum aftermarket modding potential, the Sur-Ron Light Bee X remains the gold standard. If you prefer heavier-duty stock components, gearbox durability, and 8kW power right out of the box, the Talaria Sting R MX4 takes the crown.`,
  },
  {
    slug: "how-to-charge-maintain-electric-dirt-bike-batteries",
    title: "Maximising Battery Lifespan: Pro Charging Guide for 60V and 72V Packs",
    excerpt: "Essential maintenance practices, cell balancing, storage voltage, and temperature management for Australian summers.",
    category: "Guides",
    date: "2026-01-22",
    readTime: "5 min read",
    image: "/images/product-72v-40ah-battery.jpg",
    content: `Modern electric dirt bike lithium-ion batteries are high-density energy packs that thrive when treated with basic care. With typical Australian conditions reaching 35°C+ in summer, proper thermal management is key to maintaining 500+ charge cycles without degradation. All [Sur-Ron, Talaria, and Stark Varg battery packs](https://www.electricdirtbikeaustralia.com.au/shop/) stocked by [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/) carry a 12-month factory warranty when correct charging procedures are followed.

### 1. Allow the Pack to Cool Down After Hard Riding
Never plug your battery into a high-amperage fast charger immediately after an aggressive trail session. Give the cells 20-30 minutes to cool down to ambient temperature before initiating charging.

### 2. The 20% to 90% Golden Rule
For everyday recreational rides, charging up to 90-95% rather than keeping it pinned at 100% can double the total cycle life of Samsung and Molicel lithium cells. Once every month, charge to 100% and leave on the smart charger for an extra hour to allow the BMS to balance individual cell voltages. See [Molicel cell specifications](https://www.molicel.com/product/p45b/) for rated cycle life data.

### 3. Summer & Off-Season Storage
If leaving the bike idle for more than 3 weeks, store the battery between 45% and 60% state of charge in a cool, dry area away from direct sunlight. [Battery University\'s storage guide](https://batteryuniversity.com/article/bu-702-how-to-store-lithium-based-batteries) recommends below 25°C for long-term capacity retention.`,
  },
  {
    slug: "stark-varg-motocross-revolution-australia",
    title: "The Stark Varg 80HP: Revolutionising Australian Motocross and Supercross",
    excerpt: "How Sweden\'s 80HP electric motocross beast is winning over traditional 450cc riders across local tracks.",
    category: "Innovations",
    date: "2025-11-10",
    readTime: "7 min read",
    image: "/images/product-stark-varg-mx.jpg",
    content: `When [Stark Future](https://www.starkfuture.com/) announced an 80HP electric motocross bike, sceptics doubted whether an electric motor could handle the rigours of 30-minute motos in Australian dirt and heat. Today, the [Stark Varg EX](https://www.electricdirtbikeaustralia.com.au/shop/stark-varg-ex-80hp/) has silenced all critics.

With 938Nm of rear-wheel torque and completely customisable throttle curves selectable on the fly via the waterproof Android dash, riders can program the bike to behave like a forgiving 125cc two-stroke for tight trails or unleash the full 80HP 450cc+ beast on open motocross tracks. Kayaba factory suspension and Brembo brakes complete this competition-ready setup.

### Why Australian Riders Are Making the Switch
Local motocross clubs across NSW, VIC, and QLD have begun accepting electric class entries, with the [Stark Varg EX](https://www.electricdirtbikeaustralia.com.au/shop/stark-varg-ex-80hp/) directly competing against 450cc four-strokes in open class racing. With zero refuelling during 30-minute motos and a full charge in under 2.5 hours, team logistics are dramatically simplified. Available with Australian stock, 12-month warranty, and authorised dealer support from [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/).`,
  },
  {
    slug: "are-electric-dirt-bikes-legal-in-australia",
    title: "Are Electric Dirt Bikes Legal in Australia? Road, Trail & Forestry Laws Explained",
    excerpt: "A comprehensive state-by-state guide to electric moto regulations in NSW, VIC, QLD, WA, SA and private land rights.",
    category: "Legal & Safety",
    date: "2026-02-18",
    readTime: "8 min read",
    image: "/images/hero_surron_trail_1790338185425.jpg",
    content: `One of the most frequently searched questions by prospective riders is: Are electric dirt bikes legal to ride in Australia? Because electric motorbikes like the Sur-Ron Light Bee X, Talaria Sting R, and Stark Varg exceed the 250W pedal-assist bicycle threshold, Australian law classifies them as off-road motorcycles.

### Private Property & Motocross Parks
You can legally ride any high-powered electric dirt bike on private property, farms, motocross ride parks, and commercial off-road tracks without registration or a motorcycle licence. This makes them ideal for weekend family riding and property maintenance.

### State Forestry Trails & Public Bushland
In state forests and designated off-road riding areas across NSW, Victoria, and Queensland, riding rules mirror petrol dirt bikes. If your bike is unregistered, it cannot be ridden on gazetted public roads or public bush tracks where vehicle registration is mandated.

### ADR Road-Legal Models vs Off-Road Competition Models
Certain variants, such as the Sur-Ron Ultra Bee T road-homologated versions, feature ADR mirrors, turn signals, number plate brackets, and VIN plates, allowing them to be registered for road and trail use under motorcycle licensing frameworks.`,
  },
  {
    slug: "top-10-best-electric-dirt-bikes-australia-2026",
    title: "Top 10 Best Electric Dirt Bikes in Australia for 2026: Power, Range & Price Ranked",
    excerpt: "The ultimate 2026 Australian rankings across light e-motos, mid-weight enduro bikes, and 80HP full-size competition machines.",
    category: "Buyers Guide",
    date: "2026-02-22",
    readTime: "9 min read",
    image: "/images/product-talaria-xxx.jpg",
    content: `The Australian electric dirt bike market has exploded with high-performance machines ranging from 50kg agile trail bikes to 80HP full-sized motocross weapons. Here are the top 10 electric dirt bikes ranked by power, range, durability, and value for Australian riders:

1. Sur-Ron Light Bee X (60V 40Ah): The undisputed king of agility and aftermarket customization.
2. Talaria Sting R MX4 (60V 45Ah / 8kW): The reigning champion for stock power, gearbox reliability, and torque.
3. Stark Varg EX 80HP: The peak performance full-size competition electric motocross bike.
4. Sur-Ron Ultra Bee (74V 55Ah / 12.5kW): The best balanced mid-size enduro bike with traction control.
5. Talaria Dragon (88V 58Ah / 28kW): Full-size enduro weapon built to conquer brutal climbs.
6. Talaria XXX Black Edition (60V 40Ah): Lightweight urban and light-trail street fighter.
7. Sur-Ron Storm Bee F (104V 55Ah / 22.5kW): Heavyweight full-frame trail machine with reverse gear.
8. RFN Ares Rally Pro (74V 35Ah / 12.5kW): Premium CNC components with 3-speed transmission.
9. Arctic Leopard XE-880 Pro: Pure trials and technical rock crawling specialist.
10. Sur-Ron Light Bee S (Youth Edition): Safe, manageable power for junior and beginner riders.`,
  },
  {
    slug: "72v-vs-60v-electric-dirt-bike-battery-upgrade-guide",
    title: "72V vs 60V Electric Dirt Bike Batteries: Range, Torque & Acceleration Explained",
    excerpt: "Understanding why upgrading to 72V Molicel cells delivers higher top speeds, cooler motor temps, and instantaneous throttle punch.",
    category: "Tech Deep Dive",
    date: "2026-02-05",
    readTime: "6 min read",
    image: "/images/product-72v-60ah-battery.jpg",
    content: `Upgrading from a stock 60V pack to a high-discharge 72V lithium battery is the most impactful performance modification you can make to a Sur-Ron Light Bee X or Talaria Sting.

### The Physics of Voltage: Higher Power with Lower Amps
Electrical power is measured in Watts (Volts x Amps). To produce 12kW on a 60V system, the controller must draw 200 Amps, generating significant heat in the wiring and motor windings. On a 72V system, that same 12kW requires only 166 Amps. This reduction in current allows your motor to run significantly cooler while delivering higher sustained top speeds.

### Top Speed and Hill Climbing
A 72V Molicel P45B pack typically increases top speed by 20–25 km/h over stock (reaching 85–95 km/h) and eliminates voltage sag on steep hill climbs. Paired with a smart Bluetooth BMS, riders can monitor cell balancing in real time from their smartphone.`,
  },
  {
    slug: "talaria-dragon-komodo-full-size-electric-enduro-review",
    title: "Talaria Dragon & Komodo: Full-Size Electric Enduro Dirt Bikes Tested",
    excerpt: "A deep dive into Talaria\'s 88V 28kW full-size platforms featuring 21/18-inch wheels, Brembo-spec brakes, and linkage suspension.",
    category: "Reviews",
    date: "2026-01-18",
    readTime: "7 min read",
    image: "/images/hero_talaria_ridge_1790338208529.jpg",
    content: `For years, off-road enthusiasts loved the agility of 50kg e-motos but yearned for full-size 21-inch front and 18-inch rear wheel geometry found on 250cc–450cc enduro machines. Talaria answered the call with the Talaria Dragon and Komodo.

### 88V 28kW Powertrain
With 28kW peak output and an 88V 58Ah lithium battery, the Dragon bridges the gap between lightweight trail bikes and heavy 450cc thumpers. It accelerates from 0–100 km/h in under 4 seconds while maintaining a manageable 105kg curb weight.

### High-End Enduro Suspension
Equipped with 250mm of adjustable inverted fork travel, progressive rear linkage, and four-piston hydraulic calipers, the Dragon soaks up rock gardens and whoops across Australian singletrack with complete stability.`,
  },
  {
    slug: "torp-tc500-vs-bac4000-controller-comparison",
    title: "Best Electric Dirt Bike Controllers: Torp TC500 vs BAC4000 & TC1000 Tuning",
    excerpt: "Comparing plug-and-play mobile app tuning, field weakening, thermal rollback, and regenerative braking features.",
    category: "Upgrades",
    date: "2026-02-10",
    readTime: "6 min read",
    image: "/images/product-72v-controller.webp",
    content: `The electronic speed controller (ESC) is the brain of your electric dirt bike. Upgrading the stock controller unlocks additional motor current, customizable throttle curves, and advanced features like field weakening for higher top speeds.

### Torp TC500: The Plug-and-Play Benchmark
The Torp TC500 communicates directly with the stock Sur-Ron or Talaria display and battery BMS. Using the Torp iOS/Android app, you can fine-tune throttle sensitivity, regen braking on brake lever pull, and temperature protection limits within seconds over Bluetooth.

### Field Weakening & Top Speed
Field weakening alters the magnetic timing of the brushless DC motor at high RPM, delivering an extra 15–20 km/h of top speed on flat straights without needing a battery upgrade.`,
  },
  {
    slug: "electric-dirt-bike-fast-chargers-and-solar-generators",
    title: "Off-Grid Charging Guide: 10A–15A Fast Chargers & Solar Generators for E-Motos",
    excerpt: "How to charge your 60V and 72V electric dirt bikes in remote Australian bush camps using portable power stations.",
    category: "Guides",
    date: "2026-01-29",
    readTime: "6 min read",
    image: "/images/product-solar-charger-300w.webp",
    content: `Australian riders love venturing into remote state forests and private properties where grid power is unavailable. With modern portable power stations (EcoFlow, Bluetti, Jackery) and high-current fast chargers, weekend bush riding is easier than ever.

### Fast Charger Amperage vs Battery Health
- 5A Standard Charger: Takes 5–6 hours for a full charge; ideal for overnight home charging.
- 10A–12A Fast Charger: Recharges a 60V 40Ah pack in 2.5–3 hours; perfect for lunch breaks at the ute.
- 15A Ultra-Fast Charger: Recharges high-capacity 72V packs in under 2 hours (ensure cell specs support 0.5C charging).

### Solar & Inverter Sizing
To run a 10A 60V charger (approx. 700W draw), use a pure sine wave inverter of at least 1200W paired with 400W–600W solar blankets to maintain continuous power throughout weekend campouts.`,
  },
  {
    slug: "suspension-upgrades-for-sur-ron-and-talaria",
    title: "Electric Dirt Bike Suspension Setup: Fastace, EXT Ferro & KKE Fork Tuning",
    excerpt: "How to set correct rider sag, spring rates, compression damping, and fork oil levels for aggressive trail riding.",
    category: "Maintenance",
    date: "2026-02-01",
    readTime: "5 min read",
    image: "/images/hero_talaria_ridge_1790338208529.jpg",
    content: `Stock suspension on entry-level electric dirt bikes is often tuned for lighter 60kg–70kg riders. If you ride aggressive downhill tracks, jump tables, or weigh over 85kg with full gear, tuning your suspension is the best way to prevent bottoming out. All suspension upgrades listed below are available with genuine Australian stock from [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/).

### Setting Rider Sag
Aim for 25% to 30% of total travel in rider sag. If the bike compresses more than 35% under your weight with riding gear, you need a stiffer coil spring (e.g., 550 lbs/in or 650 lbs/in for the rear shock). [AMCA Australia\'s suspension tuning guide](https://www.amca.net.au/) provides baseline sag settings for Australian track conditions.

### Upgraded Inverted Forks
- Fastace ALX13RC: Budget-friendly, stiff 37mm stanchions with customised valving.
- [EXT Ferro 36](https://www.electricdirtbikeaustralia.com.au/shop/ext-ferro-36-inverted-fork/): Handcrafted Italian air-sprung precision for maximum traction over braking bumps and roots — the highest-performing aftermarket fork for Sur-Ron and Talaria platforms in Australia.
- Fox 40: High-end titanium spring for extreme downhill race use.`,
  },
  {
    slug: "electric-dirt-bike-vs-petrol-motocross-running-costs",
    title: "Electric Dirt Bike vs Petrol Motocross (250cc/450cc): Real 2-Year Cost Breakdown",
    excerpt: "Detailed comparison of fuel, engine rebuilds, air filter oiling, and electricity costs across 100 hours of riding.",
    category: "Comparisons",
    date: "2025-12-15",
    readTime: "7 min read",
    image: "/images/hero_stark_track_1790338196966.jpg",
    content: `While high-performance electric dirt bikes have a slightly higher upfront purchase price, their lifetime operating costs are a fraction of traditional 250cc and 450cc petrol four-strokes. Browse the full range at [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/) to compare purchase prices versus your 2-year petrol running costs.

### Fuel vs Electricity Costs
- Petrol 450cc: Consumes roughly 5 litres of 98-octane fuel per 2-hour moto session ($12–$15 per ride). Over 100 hours, fuel costs exceed $600.
- Electric 60V/72V E-Moto: Consumes ~2.5 kWh per charge. At average Australian off-peak residential rates of $0.28/kWh per [Australian Energy Regulator data](https://www.aer.gov.au/), a full charge costs less than $0.75. Over 100 hours, total electricity cost is under $40.

### Maintenance & Rebuilds
Petrol 4-strokes require engine oil changes every 5–10 hours, valve clearance checks, and top-end piston rebuilds every 50 hours ($800–$1,500). Electric dirt bikes have no pistons, valves, spark plugs, or clutch plates — only chain lube, brake pads, and tyre replacements. The [Sur-Ron Light Bee X](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) for example has just 3 moving drivetrain components versus 150+ in a comparable petrol machine.`,
  },
  {
    slug: "best-electric-dirt-bikes-for-beginners-and-teens",
    title: "Best Electric Dirt Bikes for Teenagers and Beginners in Australia",
    excerpt: "Safe, low-seat-height, manageable power electric bikes designed for building riding confidence without intimidating clutches.",
    category: "Buyers Guide",
    date: "2026-01-10",
    readTime: "6 min read",
    image: "/images/product-oset-20-0-junior.jpg",
    content: `Teaching a teenager or adult beginner to ride a petrol dirt bike can be daunting—managing a manual clutch, gear shifting, hot exhaust pipes, and kickstarters often leads to stalls and frustration. Electric dirt bikes simplify the learning curve with intuitive twist-and-go throttles.

### Why E-Motos Are Ideal for Beginners
1. No Clutch or Gears: Focus 100% on balance, braking, and body position.
2. Eco & Sport Modes: Switchable power limits allow parents to cap top speed at 35 km/h while novice riders develop throttle control.
3. No Hot Exhausts: Zero risk of burn injuries from exposed exhaust pipes.
4. Lightweight (40kg–55kg): Easy to pick up after a minor tip-over compared to heavy 100kg petrol bikes.

Top recommended models include the Sur-Ron Light Bee S, Talaria XXX, and RFN Warrior Youth.`,
  },
  {
    slug: "electric-dirt-bike-braking-upgrades-250mm-rotors",
    title: "Upgrading Braking Power: 250mm Oversized Rotors & Quad-Piston Calipers",
    excerpt: "Why larger rotors, metallic brake pads, and DOT 5.1 brake fluid eliminate brake fade on steep Australian downhill descents.",
    category: "Upgrades",
    date: "2026-02-12",
    readTime: "5 min read",
    image: "/images/product-electric-enduro-72v.webp",
    content: `When upgrading your electric dirt bike with 72V batteries and high-power controllers, stopping power must keep pace with acceleration. Standard mountain bike spec 203mm rotors can suffer from brake fade on long downhill trails in the Blue Mountains or Victorian High Country.

### 250mm Oversized Rotor Kits
Upgrading from 203mm to 250mm oversized floating steel rotors increases braking leverage by over 20% while providing greater surface area for heat dissipation.

### Sintered Metallic Brake Pads
Organic pads wear out quickly in wet Australian clay and dust. Sintered metallic pads provide consistent bite in muddy creek crossings and withstand temperatures exceeding 500°C without glazing.`,
  },
  {
    slug: "supermoto-wheel-conversion-for-electric-dirt-bikes",
    title: "Supermoto Wheel Conversion Guide: 16-Inch vs 17-Inch Wheels for Sur-Ron & Talaria",
    excerpt: "How to convert your off-road machine into an agile, sticky-tired supermoto for carving tarmac and go-kart tracks.",
    category: "Guides",
    date: "2026-01-05",
    readTime: "6 min read",
    image: "/images/product-knobby-tyre-set.jpg",
    content: `Supermoto (SM) conversions replace skinny 19-inch knobby dirt wheels with wide 16-inch or 17-inch rims fitted with sticky street compound tires. This lowers the bike\'s centre of gravity and unlocks phenomenal cornering grip.

### 16-Inch vs 17-Inch Wheelsets
- 16-Inch Rims: Provide the quickest turn-in and acceleration due to reduced rotational mass. Ideal for tight tracks and nimble urban maneuvering.
- 17-Inch Rims: Offer the widest selection of performance tires (Pirelli Diablo Rosso, Michelin City Grip, Heidenau K66) and better stability at high speeds (80+ km/h).

Pair with a 48T or 54T rear sprocket depending on whether you want maximum top speed or explosive wheelie-inducing torque!`,
  },
  {
    slug: "complete-pre-ride-and-post-wash-maintenance-guide",
    title: "Complete E-Moto Maintenance Guide: Cleaning, Chain Tension & Bearing Care",
    excerpt: "Proper washing techniques to protect electrical connectors, non-corrosive chain lubrication, and headtube bearing maintenance.",
    category: "Maintenance",
    date: "2025-12-28",
    readTime: "6 min read",
    image: "/images/product-bike-stand.jpg",
    content: `While electric dirt bikes require far less maintenance than internal combustion engines, regular cleaning and mechanical checks keep your suspension, drivetrain, and electronics performing flawlessly.

### 1. Washing Rules: Never Pressure-Wash Bearing Seals & Throttle
Use a low-pressure garden hose and dedicated bike wash. Never blast high-pressure water directly at the throttle housing, ignition keyway, controller cooling fins, or wheel hub bearings.

### 2. Secondary Chain Slack
Ensure 15mm–25mm of vertical chain play with the rider off the bike. A chain that is too tight places excessive stress on the jackshaft bearings and motor output shaft.

### 3. Dielectric Grease for Connectors
Apply a dab of silicone dielectric grease to main battery discharge plugs (QS8, QS10, or Anderson connectors) to prevent oxidation and ensure minimum contact resistance.`,
  },
  {
    slug: "molicel-p45b-vs-samsung-50s-lithium-cells",
    title: "Lithium Cell Showdown: Molicel P45B vs Samsung 50S for High-Power E-Bikes",
    excerpt: "Comparing 21700 cell discharge rates, voltage stability under 300A peak loads, and thermal efficiency.",
    category: "Tech Deep Dive",
    date: "2026-02-08",
    readTime: "7 min read",
    image: "/images/product-bms.webp",
    content: `The quality of individual lithium-ion cells inside your battery pack dictates how much continuous power your bike can produce without thermal throttling. The two most popular 21700 cells in high-end electric dirt bike battery builds are the [Molicel P45B](https://www.molicel.com/product/p45b/) and Samsung 50S. Battery packs using premium cells like these ship with every [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/) machine.

### Molicel P45B: The Ultimate High-Discharge Beast
- Capacity: 4,500mAh
- Continuous Discharge Rating: 45 Amps per cell
- Internal Resistance: Ultra-low ~10 mΩ
- Verdict: The gold standard for high-draw 15kW–25kW builds (e.g. [Sur-Ron Storm Bee Enduro](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-storm-bee-enduro/)) where extreme acceleration and zero voltage sag are top priorities.

### Samsung 50S: Maximum Trail Range
- Capacity: 5,000mAh
- Continuous Discharge Rating: 25 Amps per cell
- Verdict: Best for 6kW–10kW setups like the [Sur-Ron Light Bee X](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) where riders prioritise maximum kilometre range and moderate current draw. See [Samsung SDI cell data](https://www.samsungsdi.com/cylindrical-lithium-ion/) for full discharge curve specifications.`,
  },
  {
    slug: "how-to-transport-electric-dirt-bikes-car-hitch-racks",
    title: "Car Hitch Racks & Ute Loading for 50kg–110kg Electric Dirt Bikes",
    excerpt: "Tow bar tongue weight ratings, heavy-duty steel carrier racks, tie-down techniques, and battery removal tips.",
    category: "Guides",
    date: "2026-01-14",
    readTime: "5 min read",
    image: "/images/product-battery-carry-bag.jpg",
    content: `Transporting your electric dirt bike to riding parks and state forests is simple with the right vehicle setup. Because light e-motos weigh only 50kg–65kg, they can be easily loaded onto a standard car hitch carrier without needing a dedicated box trailer.

### Tow Bar Tongue Weight (Downward Load Rating)
Ensure your vehicle\'s tow bar is rated for at least 100kg download capacity (standard 50mm / 2-inch square hitch receiver).

### Pro-Tip: Remove the Battery During Transit
Removing the 12kg–15kg battery and storing it in your vehicle footwell reduces the weight on the rear carrier by nearly 30%, making loading effortless and protecting the pack from road vibration and weather. Use quality ratchet tie-downs on the handlebars and rear wheel strap.`,
  },
  {
    slug: "essential-aftermarket-mods-for-surron-light-bee-x",
    title: "Top 10 Essential Upgrades for the Sur-Ron Light Bee X",
    excerpt: "From wide CNC footpegs and direct-mount handlebar risers to heavy-duty bash plates and upgraded drive chains.",
    category: "Upgrades",
    date: "2026-02-16",
    readTime: "6 min read",
    image: "/images/product-sur-ron-ultra-bee.jpg",
    content: `The Sur-Ron Light Bee X is an incredible platform out of the box, but a few targeted aftermarket upgrades can dramatically improve ergonomics, durability, and rider control for taller Australian riders.

### Top Recommended Modifications:
1. Wider CNC Billet Footpegs & Footpeg Brace: Prevents peg bracket bending on hard landings.
2. Direct-Mount Riser Handlebar Stem (30mm–50mm rise): Opens up rider posture for stand-up trail riding.
3. Heavy-Duty Skid / Bash Plate: Protects motor casing and wiring from rock strikes.
4. Primary Chain Conversion: Replaces the rubber belt for bulletproof reliability in deep sand and mud.
5. Upgraded O-Ring Chain (DID or RK 420): Reduces chain stretch and maintenance intervals.
6. Oversized 250mm Front Brake Rotor: Provides one-finger stopping power.
7. Reinforced Linkage Triangle & Bushings: Prevents rear suspension slop after hard riding seasons.`,
  },
  {
    slug: "extending-single-charge-range-on-rugged-bush-trails",
    title: "How to Get 100km+ Range on Single Charge from Your Electric Dirt Bike",
    excerpt: "Riding techniques, regenerative braking configurations, tyre pressure tuning, and momentum management.",
    category: "Guides",
    date: "2026-01-25",
    readTime: "6 min read",
    image: "/images/hero_talaria_ridge_1790338208529.jpg",
    content: `Getting the absolute maximum trail range out of your 60V or 72V battery pack comes down to riding style, terrain selection, and smart bike setup. With proper technique, riders can easily exceed 80km to 100km on a single charge.

### 1. Progressive Throttle Application vs WOT Pinning
Smooth, progressive throttle inputs preserve battery voltage. Avoid pinning wide-open throttle (WOT) repeatedly from low speeds, as initial acceleration pulls peak current.

### 2. Configure Dynamic Regen Braking
Enable electronic regenerative braking via your mobile controller app. On long downhill descents, regenerative braking feeds 5%–10% of kinetic energy back into the battery while reducing brake pad wear.

### 3. Tyre Pressure & Tread Rolling Resistance
Running 14–16 PSI provides optimal traction without excessive rolling resistance. Extremely low tyre pressures increase motor drag on hardpacked fire roads.`,
  },
  {
    slug: "future-of-electric-motocross-racing-in-australia",
    title: "The Future of Electric Motocross Racing and Dedicated Tracks in Australia",
    excerpt: "How silent electric dirt bikes are saving suburban ride parks, opening new indoor venues, and creating dedicated race classes.",
    category: "Innovations",
    date: "2026-02-20",
    readTime: "7 min read",
    image: "/images/hero_stark_track_1790338196966.jpg",
    content: `Noise complaints have historically led to the closure of iconic motocross tracks near expanding suburban corridors across Sydney, Melbourne, and Brisbane. The rise of silent, zero-emission electric motorbikes is creating a massive resurgence in urban ride parks and competitive racing.

### Near-Silent Motocross Tracks
Because electric dirt bikes emit only tire noise and chain hum, dedicated tracks can operate 7 days a week closer to metropolitan centres without breaching environmental noise limits.

### Dedicated E-Moto Supercross & Sprint Classes
Motorcycling Australia and grassroots ride clubs are introducing dedicated electric motorcycle categories, pitting Sur-Rons, Talarias, and Stark Vargs against each other in thrilling sprint races and night-time supercross events. The future of Australian off-road motorsport is undeniably electric!`,
  },

  // ── 20 NEW SEO BLOG POSTS ────────────────────────────────────────────────

  {
    slug: "what-is-an-electric-dirt-bike-complete-guide-australia",
    title: "What Is an Electric Dirt Bike? Complete Australian Guide 2026",
    excerpt: "Everything Australians need to know about electric dirt bikes — how they work, what they cost, where to ride, and which brands lead the market.",
    category: "Guides",
    date: "2026-03-01",
    readTime: "8 min read",
    image: "/images/hero_surron_trail_1790338185425.jpg",
    content: `An electric dirt bike is a high-performance off-road motorcycle powered entirely by a lithium-ion battery and brushless DC motor, replacing the petrol engine with instant, near-silent torque. Unlike pedal-assisted e-bikes, electric dirt bikes produce continuous power outputs from 3kW up to 80kW — placing them firmly in the motorcycle category under Australian law.

### How an Electric Dirt Bike Works
The core system is elegantly simple: a high-voltage lithium battery (typically 60V–104V) stores energy and delivers it through an electronic speed controller (ESC) to a brushless permanent-magnet motor. The motor drives the rear wheel via chain or belt. With no gearbox, carburettor, valves, or exhaust system, mechanical complexity drops by around 80% compared to a petrol dirt bike.

### Key Components to Understand
Battery capacity is measured in Watt-hours (Wh). A 60V 40Ah pack = 2,400Wh — enough for 80–120km of trail riding in eco mode. The ESC governs peak current draw (measured in Amps) and determines both top speed and acceleration. Most modern e-motos run sine-wave FOC controllers for smooth, efficient power delivery.

### What Do Electric Dirt Bikes Cost in Australia?
Entry-level youth models like the [OSET 20.0 Racing](https://www.electricdirtbikeaustralia.com.au/shop/oset-20-0-racing-junior/) start from $2,800. Mid-range 6kW–8kW trail bikes (Sur-Ron Light Bee X, Talaria Sting R) range from $6,000–$9,500. Full-size 80HP competition machines like the [Stark Varg](https://www.electricdirtbikeaustralia.com.au/shop/stark-varg-ex-80hp/) command $16,000–$20,000. Browse the complete range at [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/).

### Where Can You Ride Electric Dirt Bikes in Australia?
Electric dirt bikes are classified as off-road motorcycles, meaning they are intended for private property, motocross parks, and designated off-road riding areas. Under [road rules administered by Transport for NSW](https://www.transport.nsw.gov.au/), unregistered off-road bikes may not be ridden on public roads. Some ADR-compliant variants (Sur-Ron Ultra Bee T street edition) can be registered for road use.

### Primary Benefits Over Petrol Dirt Bikes
Zero-emission operation, near-silent running (95% quieter than petrol), dramatically lower running costs (~$0.75 per charge vs $12–$15 in fuel), and minimal maintenance requirements make electric dirt bikes the fastest-growing segment in Australian off-road motorcycling. With brands like Sur-Ron, Talaria, Stark, E-Ride Pro, and OSET now available through authorised Australian dealers, 2026 is the best year yet to make the switch to electric off-road riding.`,
  },

  {
    slug: "electric-dirt-bikes-australia-buyers-guide-2026",
    title: "Electric Dirt Bikes Australia: Top Models, Prices & Where to Buy in 2026",
    excerpt: "The definitive Australian buyer\'s guide to electric dirt bikes — covering Sur-Ron, Talaria, Stark Varg, E-Ride Pro, and kids' bikes with prices.",
    category: "Buyers Guide",
    date: "2026-03-03",
    readTime: "9 min read",
    image: "/images/product-e-ride-pro-3-0.webp",
    content: `Australia\'s electric dirt bikes market has matured enormously since 2022, with authorised dealers now offering factory warranty, local parts support, and free nationwide freight on every major brand. This guide covers the best electric dirt bikes available in Australia in 2026, with prices, specifications, and riding style matches.

### Sur-Ron: Australia\'s Best-Selling E-Moto Brand
Sur-Ron\'s [Light Bee X (60V 40Ah)](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) remains the top-selling electric dirt bike in Australia at $6,490. Its 50kg dry weight, 75 km/h top speed, and enormous aftermarket community make it the default choice for trail riders. The Ultra Bee steps up to 12.5kW and 95 km/h for riders wanting more punch. Both ship free to all Australian states from Mittagong NSW.

### Talaria: Gearbox-Equipped Torque King
The [Talaria Sting R MX4](https://www.electricdirtbikeaustralia.com.au/shop/talaria-sting-r-mx4/) features an oil-bath sealed gearbox, 8kW peak output, and 60V 45Ah battery — delivering superior traction management on Australian clay, gravel, and muddy creek crossings. At $7,990, it represents outstanding value for serious off-road riders. Talaria also produces the 88V 28kW Dragon for full-size enduro adventures.

### Stark Varg: The 80HP Championship Weapon
For motocross track riders, the [Stark Varg EX](https://www.electricdirtbikeaustralia.com.au/shop/stark-varg-ex-80hp/) from [Stark Future](https://www.starkfuture.com/) in Sweden delivers 80HP, 938Nm wheel torque, and Kayaba racing suspension. Used by KTM and Husqvarna-calibre motocross athletes, it competes directly with 450cc four-strokes.

### Kids & Youth Models
OSET, Razor, KTM SX-E 5, Husqvarna EE 5, and EDBA Moto 50 cover ages 3–16 with adjustable power modes. Australia\'s top youth electric motocross brands are available through [Electric Dirt Bike Australia\'s kids section](https://www.electricdirtbikeaustralia.com.au/electric-motor-bikes/kids/).

### Where to Buy Electric Dirt Bikes in Australia
[Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/) is the country\'s leading authorised dealer for Sur-Ron, Talaria, Stark Varg, E-Ride Pro, OSET, and RTR eBike. All orders include 12-month Australian factory warranty, pre-delivery inspection, and free insured freight on orders over $1,500.`,
  },

  {
    slug: "talaria-sting-review-australia",
    title: "Talaria Sting Review: Australia\'s Most Torque-Packed E-Moto Tested",
    excerpt: "Full in-depth review of the Talaria Sting R MX4 — gearbox durability, power, range, and how it handles Australian trails and creek crossings.",
    category: "Reviews",
    date: "2026-03-05",
    readTime: "8 min read",
    image: "/images/product-talaria-sting-r-mx4.jpg",
    content: `The Talaria Sting is the electric dirt bike that proved a sealed oil-bath gearbox could outperform belt and chain drives in real-world off-road conditions. Since 2021, the Sting platform has evolved through multiple versions to become a benchmark electric moto for Australian trail and enduro riding.

### Talaria Sting R MX4: Specifications
The current flagship Talaria Sting R MX4 features a 60V 45Ah lithium battery, 8kW peak mid-drive motor, sealed 2-speed automatic gearbox, 240mm inverted forks, and hydraulic disc brakes front and rear. Curb weight is 54kg — slightly heavier than the Sur-Ron Light Bee X but justified by the gearbox assembly and upgraded motor.

### On-Trail Performance: Where the Gearbox Shines
In steep Australian mountain climbs — Blue Mountains switchbacks, Snowy Mountains scree slopes, and Victorian High Country creek crossings — the Talaria\'s sealed gearbox delivers consistent torque multiplication without slipping or heat-induced belt stretch. The lower gear ratio provides tractor-like crawling speed in technical rock gardens, while the upper gear unlocks 80 km/h flat-out trail blasting.

### Battery Range in Real Australian Conditions
Testing across mixed NSW singletrack, fireroads, and climb-heavy terrain, the 45Ah battery comfortably delivers 70–90km per charge in eco mode, dropping to 50–65km in sport/full-power mode. Charging time is 3.5–4 hours with the standard charger and 2 hours with the optional 10A fast charger available from [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/shop/fast-charger-10a/).

### Comparison: Talaria Sting vs Sur-Ron Light Bee X
The Talaria\'s gearbox edges out the Sur-Ron in wet, muddy, and rocky terrain where belt-drive bikes risk stretch and snap. The Sur-Ron wins on aftermarket parts availability and lighter weight for technical trials. For Australian riders who prioritise durability and torque over weight savings, the [Talaria Sting R MX4](https://www.electricdirtbikeaustralia.com.au/shop/talaria-sting-r-mx4/) is the stronger long-term choice. More technical specs are published on the official [Talaria product page](https://talariausa.com/).

### Verdict
An essential shortlist entry for any Australian electric dirt bike buyer. The Talaria Sting R MX4 earns its reputation through gearbox reliability, sustained torque, and proven performance across the varied and demanding terrain of the Australian bush.`,
  },

  {
    slug: "stark-varg-review-australia-2026",
    title: "Stark Varg Review 2026: 80HP Electric Motocross Beast Tested in Australia",
    excerpt: "A thorough review of the Stark Varg EX for Australian motocross riders — power delivery, suspension, app connectivity, and track performance.",
    category: "Reviews",
    date: "2026-03-07",
    readTime: "8 min read",
    image: "/images/product-stark-varg-mx.jpg",
    content: `The Stark Varg is not a concept bike or prototype — it is a fully race-ready 80HP electric motocross machine that has already competed at FIM Motocross World Championship events. For Australian motocross riders, it represents the pinnacle of electric motorcycle performance available today.

### Stark Varg EX Specifications
Peak power: 80HP (60kW). Peak torque: 938Nm at the rear wheel. Battery: 6.5kWh lithium pack. Suspension: KYB factory-spec open-chamber forks with adjustable 300mm travel. Weight: 110kg — comparable to a 450cc four-stroke. [Stark Future](https://www.starkfuture.com/) designed every component from ground up, with carbon-fibre motor housing and titanium fasteners throughout.

### Track Testing: Motocross Performance
On Australian motocross tracks — including competitive circuits at Broadford, Appin, and Raymond Terrace — the Stark Varg\'s programmable power delivery transforms riding confidence. Riders select from multiple mapped power curves via the Stark app, from a manageable trail setting that mimics a smooth 250cc to a full 80HP assault mode for championship motos. The seamless, gearless power eliminates missed shifts during technical race lines.

### Suspension & Handling at Race Speed
KYB suspension tuned specifically for the Varg\'s 110kg weight and power output handles Australian track conditions without drama. The single rear shock provides plush absorption over square-edged bumps while maintaining precise cornering line. Brembo-spec brakes provide immediate, linear stopping power — superior to most petrol 450cc bikes at this price point.

### Battery Life: How Long Does a Moto Last?
On full-throttle motocross usage, the 6.5kWh battery delivers approximately 45 minutes of competitive riding — effectively matching one full 30-minute moto with warm-up and cool-down. At standard charging, the pack recharges in 2.5 hours from flat. Australian riders doing back-to-back motos need the optional second battery at a dedicated fast-charging station.

### Australian Price & Availability
The [Stark Varg EX](https://www.electricdirtbikeaustralia.com.au/shop/stark-varg-ex-80hp/) retails from $16,900 AUD through [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/), Australia\'s authorised Stark dealer. Includes 12-month warranty, pre-delivery inspection, and free freight to any Australian state or territory.`,
  },

  {
    slug: "kids-electric-bike-buying-guide-australia",
    title: "Kids Electric Bike Australia: Age-by-Age Buyer\'s Guide 2026",
    excerpt: "The complete guide to choosing a kids electric bike in Australia — covering safety, age-appropriate power, top brands, and prices for every budget.",
    category: "Buyers Guide",
    date: "2026-03-09",
    readTime: "7 min read",
    image: "/images/product-razor-mx650-dirt.jpg",
    content: `Choosing the right kids electric bike for your child is one of the most important decisions a riding family makes. The right bike builds confidence, safety awareness, and a lifelong love of the sport. The wrong choice — too powerful, too heavy, or without adjustable limits — can cause accidents and put children off riding permanently.

### Age 3–6: Balance and First Power (Under 500W)
For the very youngest riders, OSET electric bikes set the world standard. The [OSET 12.5](https://www.osetbikes.com/) runs at 24V with ultra-low power outputs adjustable down to walking pace. At 12kg, children can right the bike themselves. It introduces throttle control and balance without risk. Available through [Electric Dirt Bike Australia\'s kids range](https://www.electricdirtbikeaustralia.com.au/electric-motor-bikes/kids/).

### Age 6–10: Progression Bikes (500W–1.5kW)
The OSET 16.0 Racing and E-Ride Pro S16 provide the first real trail experiences. Adjustable power modes allow parents to set 20% power for beginners and gradually increase as skills develop. The EDBA Moto 50 is a purpose-built 36V entry-level bike with automatic training wheels support and a maximum 35 km/h speed cap — perfect for backyard and property riding.

### Age 10–14: Performance Learning (1.5kW–4kW)
The KTM SX-E 5, Husqvarna EE 5, and GasGas MC-E 5 represent junior factory-spec electric motocross bikes. Built to identical chassis standards as their 50cc petrol equivalents, these bikes prepare young riders directly for national junior motocross competition. The Razor MX650 provides a budget-friendly entry to this segment.

### Age 14–16: Transition to Full Performance
The OSET 24R and E-Ride Pro S17 serve older teens who need full-size geometry but manageable power. Adjustable power up to 5kW with full-size 14-inch wheels and suspension makes these bikes suitable for competitive junior racing.

### Safety Rules for Kids Electric Bikes in Australia
Regardless of model, all children must wear an ASNZS 1698 approved motorcycle helmet, knee and elbow guards, and appropriate footwear. Electric kids bikes should only be ridden on private property or designated off-road venues under adult supervision. No child should ride on public roads on an unregistered electric motorcycle.`,
  },

  {
    slug: "electric-pit-bike-australia-guide",
    title: "Electric Pitbike Guide: Best Models, Track Use & Prices 2026",
    excerpt: "Everything you need to know about the electric pitbike in Australia — from track-legal specs to top Sur-Ron, Talaria, and EDBA pit bike models.",
    category: "Guides",
    date: "2026-03-11",
    readTime: "6 min read",
    image: "/images/product-electric-mini-bike-36v.jpg",
    content: `An electric pit bike sits between the junior bicycle-scale kids' bikes and full-size enduro machines. They feature compact 14-inch or 17-inch wheels, underslung motors, and power outputs from 3kW to 8kW — making them ideal for pit lane practice, junior motocross, backyard riding, and tight singletrack. Australia\'s electric pit bike market has grown rapidly as parents discover the noise and vibration advantages over petrol 50cc–110cc pit bikes.

### What Makes a Good Electric Pit Bike?
The ideal electric pit bike balances compact dimensions (sub-55kg) with enough power for adult recreational use. A good pit bike should have: adjustable power modes (for young riders), a seat height under 810mm, at least 60km range per charge, and an aluminium or chromoly steel frame rated for at least 100kg rider weight.

### Top Electric Pit Bikes Available in Australia
The [Razor MX650 Electric Dirt Rocket](https://www.electricdirtbikeaustralia.com.au/shop/razor-mx650-dirt/) is the most popular entry-level electric pit bike in Australia, retailing from $1,100 with a 650W chain-drive motor and 17-inch wheels. The [EDBA Moto 50](https://www.electricdirtbikeaustralia.com.au/shop/edba-moto-50-kids-beginner/) steps up to a 36V lithium pack with safer sealed battery design and automatic braking assist. For performance-oriented pit bike riders, the Talaria XXX Black Edition runs at 60V 40Ah in a compact trail-fighter frame.

### Electric Pit Bikes vs Petrol 50cc Pit Bikes
A petrol 50cc pit bike costs $800–$1,500 but requires regular oil changes, carburettor cleaning, clutch adjustment, and produces exhaust fumes that make indoor or garage use impossible. An electric pit bike costs $1,000–$3,500 but eliminates fuel costs, fume concerns, and most scheduled maintenance, leaving only periodic brake pad and chain replacement.

### Where to Ride Electric Pit Bikes in Australia
Electric pit bikes are suitable for private properties, farm paddocks, and designated off-road parks. Many motocross tracks run dedicated junior pit bike classes where electric models are welcome alongside petrol machines. Check with [Motorcycling Australia](https://www.motorcyclingaustralia.com.au/) for affiliated track listings near your location.`,
  },

  {
    slug: "electric-fat-bike-guide-australia",
    title: "Electric Fat Bike Australia: Best Wide-Tyre E-Bikes for Beach & Bush 2026",
    excerpt: "Discover the best electric fat bikes available in Australia for beach sand, mountain trails, and hard-packed outback tracks.",
    category: "Guides",
    date: "2026-03-13",
    readTime: "6 min read",
    image: "/images/product-electric-fat-tire-60v.webp",
    content: `An electric fat bike combines wide 4-inch+ tyres with a high-torque electric motor, creating a versatile machine capable of floating over beach sand, conquering deep snow, or powering through soft mud and loose gravel that would stall a standard e-bike. For Australian riders in coastal, outback, and high-country environments, electric fat bikes solve terrain challenges that no conventional tyre can handle.

### Why Fat Tyres Work in Australian Conditions
Standard 2.1-inch e-bike tyres sink into soft sand, volcanic pumice, and saturated clay. A 4-inch fat tyre spreads rider weight across a contact patch three times larger, reducing ground pressure from 10 PSI to under 4 PSI. This transforms impossible beach and dune riding into smooth, controlled experiences.

### Best Electric Fat Bike Models in Australia
The [Electric Fat Tire Bike 60V](https://www.electricdirtbikeaustralia.com.au/shop/electric-fat-tire-60v/) available at Electric Dirt Bike Australia features a 60V lithium battery, 1,500W hub motor, and 26x4-inch Kenda Juggernaut tyres. It handles beach, scrub, and hardpack with equal confidence. For lighter off-road use, the 36V mini fat bike variant provides a cost-effective entry to fat-tyre riding at under $1,500.

### Electric Fat Bikes vs Standard E-MTBs
Standard electric mountain bikes with 2.5-inch tyres deliver better efficiency on hardpack trails and sealed bike paths. Fat bikes sacrifice 5–10% efficiency on hard surfaces for almost unlimited terrain versatility off them. If your riding mix includes more than 30% soft sand, deep mud, or snow, a fat tyre bike will deliver a superior experience.

### Charging and Range Considerations
A typical 60V electric fat bike uses a 14Ah–22Ah battery, delivering 40–60km of mixed-terrain range. Fat tyres create more rolling resistance than standard tyres, so range is typically 15–20% less than equivalent standard-tyre e-bikes. Using the lower PAS (pedal assist) modes on less technical sections significantly extends range. [Australian energy providers](https://www.energyaustralia.com.au/) confirm residential off-peak charging for a 14Ah pack costs under $0.50 per full charge.`,
  },

  {
    slug: "off-road-electric-bike-australia-guide",
    title: "Off Road Electric Bike Australia: Best Trails, Laws & Top Models 2026",
    excerpt: "Where to ride, what laws apply, and which off road electric bikes are best for Australian bush, forest and mountain terrain.",
    category: "Legal & Safety",
    date: "2026-03-15",
    readTime: "7 min read",
    image: "/images/hero_talaria_ridge_1790338208529.jpg",
    content: `An off road electric bike in Australia covers a broad spectrum — from lightweight 250W pedal-assist trail bikes to 12.5kW electric enduro machines that require off-road motorcycle licences at competing parks. Understanding which category your intended bike falls into determines where you can legally ride it, what protective gear is required, and how it must be maintained.

### Categories of Off Road Electric Bikes in Australia
1. Pedal-Assist e-MTB (≤250W, ≤25 km/h): Road-legal on shared paths and trails. No licence required.
2. High-Power Trail e-Moto (1kW–8kW): Off-road motorcycle classification. Private property and designated off-road parks only.
3. Full-Size Electric Enduro (8kW–28kW): Unregistered motorcycles requiring off-road motorcycle licence at competing parks.
4. Road-Legal Electric Motorcycle (ADR-compliant): Can be registered for road use with appropriate licence.

### Best Off Road Riding Locations for Electric Bikes in Australia
NSW State Forests (Belanglo, Goulburn, and Wingello State Forests) accommodate registered and unregistered off-road motorcycles on designated tracks. Victoria\'s Broadford Complex and the Otways offer purpose-built electric-motorcycle-friendly riding. Western Australia\'s Gnangara Off-Road Vehicle Area provides dedicated tracks close to Perth. Always check current [NSW NPWS access restrictions](https://www.nationalparks.nsw.gov.au/) before visiting.

### Top Off Road Electric Bikes for Australian Conditions
For trail riding under 100kg: the [Sur-Ron Light Bee X](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) at $6,490 is the benchmark. For heavier riders and more technical terrain: the [Talaria Sting R MX4](https://www.electricdirtbikeaustralia.com.au/shop/talaria-sting-r-mx4/) at $7,990. For full-size enduro exploration: the [E-Ride Pro SS 2.0](https://www.electricdirtbikeaustralia.com.au/shop/e-ride-pro-ss-2-0/) at $9,900 delivers full-size 21-inch front wheel geometry with 72V power.

### Off Road Electric Bike Maintenance in Australia
Unlike petrol bikes, off road electric bikes require no oil changes, valve clearances, or carburettor cleaning. Regular maintenance covers chain tension (15–25mm slack), brake pad inspection, tyre pressure (12–16 PSI for trail riding), and connector greasing every 10–15 rides. Annual battery capacity testing ensures cells are maintaining full storage capacity.`,
  },

  {
    slug: "72v-battery-upgrade-guide-electric-dirt-bike",
    title: "72V Battery Upgrade for Electric Dirt Bikes: Full Australian Guide 2026",
    excerpt: "How upgrading to a 72V Molicel battery pack improves top speed, hill-climbing torque, and motor temperature on Sur-Ron and Talaria e-motos.",
    category: "Upgrades",
    date: "2026-03-17",
    readTime: "7 min read",
    image: "/images/product-sur-ron-oem-battery.webp",
    content: `The 72V battery upgrade is the single most impactful performance modification available for Sur-Ron Light Bee X and Talaria Sting owners. Moving from the stock 60V system to a high-discharge 72V Molicel P45B pack increases peak power by 20%, reduces motor and controller temperatures under load, and adds 15–25 km/h to achievable top speed without changing any other components.

### Why 72V Outperforms 60V: The Physics
Electrical power equals Voltage multiplied by Current (P = V × I). Delivering 12kW through a 60V system requires 200A of current — generating significant heat in wiring, connectors, and motor windings. The same 12kW through a 72V system requires only 167A. Lower current means cooler motors, less voltage sag on hills, and longer sustained high-speed performance.

### EDBA 72V 40Ah Molicel Pack
The [72V 40Ah High Discharge Battery](https://www.electricdirtbikeaustralia.com.au/shop/72v-40ah-battery/) at Electric Dirt Bike Australia uses genuine Molicel P45B 21700 cells rated at 45A continuous discharge per cell. The pack includes a smart Bluetooth BMS for real-time cell monitoring, a QS8 discharge connector, and Anderson charge port compatible with the 72V fast chargers in EDBA\'s range. Capacity: 2,880Wh. Approximate range: 110–140km (eco mode trail riding).

### EDBA 72V 60Ah Maximum Range Pack
For riders prioritising endurance over sprint performance, the [72V 60Ah Samsung 50S pack](https://www.electricdirtbikeaustralia.com.au/shop/72v-60ah-battery/) delivers 4,320Wh and up to 180km trail range. These Samsung 50S cells offer 5,000mAh capacity per cell versus the Molicel P45B\'s 4,500mAh, making them ideal for multi-hour bush sessions where sustained range matters more than peak discharge.

### What Controller Do I Need for a 72V Upgrade?
The stock Sur-Ron Light Bee X controller is rated for 60V operation. For a 72V battery, you must upgrade to a 72V-rated controller — the [High-Performance 72V Controller](https://www.electricdirtbikeaustralia.com.au/shop/72v-controller/) handles up to 300A peak current and includes mobile app tuning for throttle curves, regen braking, and thermal rollback protection. Never run a 60V controller on a 72V battery — overvoltage will damage the FETs and void your warranty.`,
  },

  {
    slug: "electric-enduro-bike-australia-review",
    title: "Electric Enduro Bike Australia: Best Full-Size E-Enduro Models 2026",
    excerpt: "Full-size electric enduro bikes with 21/18-inch wheel geometry, 8kW–28kW power, and 100+ km range reviewed for Australian trail conditions.",
    category: "Reviews",
    date: "2026-03-19",
    readTime: "8 min read",
    image: "/images/product-e-ride-pro-s17.webp",
    content: `An electric enduro bike bridges the gap between the compact, lightweight e-moto trail bikes (Sur-Ron, Talaria Sting) and full-sized 250cc–450cc petrol enduro machines. Defined by 21-inch front and 18-inch rear wheel geometry, full-travel adjustable suspension, and power outputs of 8kW or above, electric enduro bikes like the Talaria Dragon, E-Ride Pro SS 2.0, and Sur-Ron Storm Bee are changing what riders expect from off-road electric performance.

### E-Ride Pro SS 2.0: Australian Made Enduro Weapon
The [E-Ride Pro SS 2.0](https://www.electricdirtbikeaustralia.com.au/shop/e-ride-pro-ss-2-0/) is Australia\'s most capable domestically assembled electric enduro bike. Built in regional NSW, it features a 72V 35Ah lithium pack (2,520Wh), 12kW peak motor, 21-inch front wheel, KYB inverted forks, and full-pivot rear linkage suspension. Weighing 95kg, it competes directly with imported full-size electric enduro machines at a significantly lower price point.

### Talaria Dragon: 88V 28kW Enduro Giant
[Talaria](https://talariausa.com/) took its proven Sting gearbox platform and scaled it to full-size 450cc dimensions with the Dragon. Running on an 88V 58Ah battery and producing 28kW peak output, it delivers sub-4-second 0–100 km/h acceleration while maintaining the gearbox durability that made the Sting R legendary for Australian conditions.

### Sur-Ron Storm Bee: The Heavyweight All-Rounder
The Sur-Ron Storm Bee Enduro is the company\'s full-size offering — 104V 55Ah battery, 22.5kW peak motor, reverse gear for tight mountain tracks, and full hydraulic brakes. At 110kg it is heavier than the E-Ride Pro but delivers exceptional straight-line speed and a premium suspension package.

### Choosing the Right Electric Enduro Bike for Australian Trails
Match bike size to your riding. If you\'re 75kg–90kg and riding mixed singletrack and fire roads, the E-Ride Pro SS 2.0 provides full-size geometry without excessive weight. If you\'re 90kg+ and riding aggressive steep Victorian High Country and NSW escarpment trails, the Talaria Dragon\'s extra power and gearbox torque are worth the additional investment. View the full electric enduro range at [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/).`,
  },

  {
    slug: "oset-bikes-australia-review-junior-electric",
    title: "OSET Bikes Australia: Junior Electric Trials & Motocross Range Reviewed 2026",
    excerpt: "A thorough review of OSET\'s complete junior electric trials bike range in Australia — 12.5, 16.0, 20.0, and 24R models tested by age group.",
    category: "Reviews",
    date: "2026-03-21",
    readTime: "7 min read",
    image: "/images/product-oset-24r.jpg",
    content: `OSET Bikes has been the global benchmark for junior electric trials and motocross machines since 2008. Founded in the UK, [OSET](https://www.osetbikes.com/) designs bikes that teach genuine motorcycle skills to children aged 3 and up — with parent-controlled power adjustment systems that have safely introduced hundreds of thousands of young riders to motorcycling worldwide.

### Why OSET Dominates Junior Electric Riding in Australia
Three factors make OSET bikes the consistent choice for Australian riding families: precise power adjustment (0%–100% motor output via a dial accessible without tools), genuine trials geometry that builds exceptional balance and body position, and exceptional durability under the inevitable crashes of youth riding. OSET bikes are built for hard use, not display cabinet storage.

### OSET 12.5 Racing (Ages 3–6)
The 12.5 Racing is the world\'s most popular first electric motorcycle for children. At 12kg dry weight, a 24V lithium pack, and adjustable power from a brisk walk to 12 km/h, three-year-olds can ride independently within an afternoon. The trials geometry provides exceptional stability over bumps and logs. Available from [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/shop/oset-12-5-racing-junior/).

### OSET 16.0 Racing (Ages 6–10)
Stepping up to a 36V pack and 500W motor, the OSET 16.0 Racing introduces proper terrain riding — navigating over obstacles, through mud, and across rocky creek beds. Adjustable power modes allow gradual progression as children build skills and confidence.

### OSET 20.0 Racing (Ages 8–13)
At 24kg with a 36V 12Ah battery, the [OSET 20.0](https://www.electricdirtbikeaustralia.com.au/shop/oset-20-0-racing-junior/) delivers genuine enduro trail performance. 16-inch front and rear wheels, 200mm travel forks, and dual hydraulic brakes make it a competitive junior trials machine used at national-level OSET Cup competitions.

### OSET 24R (Ages 12–16)
The 24R represents the pinnacle of junior OSET performance — 48V 20Ah battery, 1.5kW motor, full trials competition specification, and 3-position power presets for course-specific tuning. Used by Australian junior trials champions, the 24R prepares teenage riders directly for adult competition.`,
  },

  {
    slug: "e-ride-pro-australia-review",
    title: "E-Ride Pro Australia: Full Range Review — SS 2.0, S16 & S17 Models 2026",
    excerpt: "An in-depth review of every E-Ride Pro model available in Australia — power, range, build quality, and how they compare to imported electric dirt bikes.",
    category: "Reviews",
    date: "2026-03-23",
    readTime: "7 min read",
    image: "/images/product-e-ride-pro-s16.webp",
    content: `E-Ride Pro is Australia\'s own premium electric off-road bike brand — designed, assembled, and supported domestically in regional NSW. For Australian riders who want factory warranty serviced locally, parts available same-day, and a bike tuned for Australian soil, heat, and terrain, E-Ride Pro represents an unmatched value proposition over pure imports.

### E-Ride Pro SS 2.0: Flagship Enduro Performance
The [E-Ride Pro SS 2.0](https://www.electricdirtbikeaustralia.com.au/shop/e-ride-pro-ss-2-0/) is E-Ride\'s flagship — a 72V 35Ah full-size electric enduro bike with 12kW peak output, KYB inverted forks, 21-inch front wheel, and 270mm front disc brake. At 95kg with battery, it matches the weight and geometry of a 250cc petrol enduro bike, delivering genuine bush enduro performance without the engine maintenance overhead. Price: $9,900 with free national freight.

### E-Ride Pro S16: The Youth/Small Rider Model
Sized with a 780mm seat height and 16-inch wheel configuration, the [E-Ride Pro S16](https://www.electricdirtbikeaustralia.com.au/shop/e-ride-pro-s16/) is calibrated for riders 145cm–165cm tall — younger teens, female riders, and adults of smaller stature who want a lightweight (72kg) bike with adult-grade performance. The 60V 32Ah pack delivers 90–110km trail range and powers a 6kW motor to 75 km/h.

### E-Ride Pro S17: The Versatile Mid-Size
The [S17](https://www.electricdirtbikeaustralia.com.au/shop/e-ride-pro-s17/) splits the difference between the S16 and SS 2.0 — 17-inch wheel configuration, 800mm seat height, and an 8kW motor with 60V 38Ah battery pack. This wheel size opens the largest selection of aftermarket trail and enduro tyre choices. At $7,900 it represents the best value in the E-Ride Pro range.

### Australian-Made Advantage
Buying an E-Ride Pro means your warranty claims are handled domestically without shipping delays or customs complications. Parts are stocked at the Mittagong warehouse alongside the full range of [Electric Dirt Bike Australia\'s](https://www.electricdirtbikeaustralia.com.au/) accessories and upgrade components. Service turnaround times are measured in days, not weeks. For serious Australian trail riders, this domestic service advantage is worth as much as the bike itself.`,
  },

  {
    slug: "electric-motor-bike-australia-guide-2026",
    title: "Electric Motor Bike Australia: Road-Legal, Off-Road & Commuter Options 2026",
    excerpt: "A complete overview of electric motor bikes in Australia — covering classifications, road-legal models, off-road performance, and commuter e-bikes.",
    category: "Guides",
    date: "2026-03-25",
    readTime: "7 min read",
    image: "/images/product-edba-moto-50.jpg",
    content: `The term electric motor bike covers a diverse range of vehicles in Australia — from road-registered 125cc-equivalent electric motorcycles to off-road 80HP motocross machines. Understanding the distinctions helps you choose the right category and stay compliant with Australian road and off-road regulations.

### Road-Legal Electric Motor Bikes
Road-legal electric motor bikes must meet Australian Design Rules (ADR) and carry VIN plates, mirrors, indicators, and horn. The [RTR eBike Pro Commuter](https://www.electricdirtbikeaustralia.com.au/shop/rtr-ebike-pro-commuter/) and [RTR eBike S Classic](https://www.electricdirtbikeaustralia.com.au/shop/rtr-ebike-s-classic/) are LAMS-approved road-legal electric motor bikes delivering 72V performance with full registration eligibility. The [NIU NQi GT](https://www.electricdirtbikeaustralia.com.au/shop/niu-nqi-gt-electric-moped/) is a premium road-legal electric moped scooter approved under Australian moped classifications.

### Off-Road Electric Motor Bikes
Off-road electric motor bikes require no registration for private property and designated off-road park use. The Sur-Ron Light Bee X, Talaria Sting R MX4, E-Ride Pro SS 2.0, and Stark Varg EX are all unregistered off-road machines that deliver genuine motorcycle-grade performance. Browse the complete [electric motor bikes range](https://www.electricdirtbikeaustralia.com.au/electric-motor-bikes/) at Electric Dirt Bike Australia.

### Commuter Electric Motor Bikes
Commuter electric motor bikes blend pedal-assist bicycle law compliance (≤250W, ≤25 km/h) with practical cargo capacity and everyday ergonomics. The [VMoto Soco TC Max](https://www.electricdirtbikeaustralia.com.au/shop/vmoto-soco-tc-max-electric/) and [Super Soco CPx](https://www.electricdirtbikeaustralia.com.au/shop/super-soco-cpx-electric-moped/) are road-legal commuter e-bikes with 70km+ daily range. Detailed commuter e-bike laws are published by [Transport for NSW](https://www.transport.nsw.gov.au/).

### What Licence Do You Need for an Electric Motor Bike?
Road-legal electric motorcycles and mopeds (>250W) require a minimum Rider licence (RE or R class) in all Australian states. LAMS-eligible electric motor bikes allow L-plate and provisional riders to legally operate them on public roads. Off-road electric motor bikes on private property require no licence.`,
  },

  {
    slug: "kids-electric-motorbike-australia-buyers-guide",
    title: "Kids Electric Motorbike Australia: Top Safety Picks for Every Age Group 2026",
    excerpt: "Which kids electric motorbike is safest for your child\'s age? Age-bracketed recommendations, safety standards, and Australian price guide.",
    category: "Buyers Guide",
    date: "2026-03-27",
    readTime: "7 min read",
    image: "/images/product-ktm-sx-e-5-side.jpg",
    content: `Choosing a kids electric motorbike in Australia involves balancing performance, safety, and value at each developmental stage. Unlike pedal bicycles, electric motorbikes require proper safety gear, supervised riding environments, and power settings matched to a child\'s physical and cognitive development. This guide provides age-specific recommendations from Australia\'s leading electric motorbike retailer.

### What Makes a Kids Electric Motorbike Safe?
Key safety features include: adjustable power limits (allowing parents to cap speed and torque), automatic shutoff when the throttle is released, a low seat height that allows flat-footed confidence, lightweight construction for easy recovery after falls, and sealed battery compartments that protect cells from moisture and crash damage.

### Ages 3–5: Supervised First Riding
The [OSET 12.5 Racing](https://www.electricdirtbikeaustralia.com.au/shop/oset-12-5-racing-junior/) at $1,290 provides the safest entry point. Weighing just 12kg with 24V power adjustable to near-zero, three-year-olds genuinely control this bike from their first session. Pair with a certified ASNZS 1698 helmet, knee guards, and elbow pads.

### Ages 6–9: Building Real Skills
The [EDBA Moto 50](https://www.electricdirtbikeaustralia.com.au/shop/edba-moto-50-kids-beginner/) and OSET 16.0 Racing are the most popular choices for this bracket. Both include graduated power modes, automatic electric braking on throttle release, and appropriate geometry for riders 115cm–140cm tall. Seat heights of 570mm–680mm allow flat-footed standing and easy mounting.

### Ages 10–14: Junior Competition Ready
Factory-spec junior electric motocross bikes from KTM, Husqvarna, and GasGas (all available through [Electric Dirt Bike Australia\'s kids range](https://www.electricdirtbikeaustralia.com.au/electric-motor-bikes/kids/)) represent the world standard for junior competitive riding. The KTM SX-E 5 and Husqvarna EE 5 use identical chassis to their petrol siblings, delivering genuine competition performance with zero exhaust fumes.

### Helmet and Protective Gear Requirements
All electric motorbike riders — regardless of age or location — must wear an ASNZS 1698 certified motorcycle helmet in Australia. Full-face helmets with a certified visor are recommended for all off-road use. Body armour (chest protector, elbow and knee guards), gloves, and off-road boots complete a proper safety setup. Never allow children to ride without full protective gear on any electric motorbike.`,
  },

  {
    slug: "rtr-ebike-australia-review",
    title: "RTR eBike Review: Australia\'s Best Road-Legal Electric Commuter Tested 2026",
    excerpt: "A thorough review of the RTR eBike Pro and S Classic — performance, range, Australian LAMS compliance, and daily commuter suitability.",
    category: "Reviews",
    date: "2026-03-29",
    readTime: "7 min read",
    image: "/images/product-rtr-ebike-pro.jpg",
    content: `The RTR eBike is Australia\'s most talked-about road-legal electric commuter motorcycle, combining the aggressive styling of a trail bike with LAMS-approved performance suited for learner and provisional licence holders. Designed specifically for the Australian market, both RTR models are road-registered, ADR-compliant, and offer commuter specifications matching European electric motorcycle benchmarks.

### RTR eBike Pro Commuter: Specifications
The [RTR eBike Pro](https://www.electricdirtbikeaustralia.com.au/shop/rtr-ebike-pro-commuter/) runs a 72V 30Ah lithium pack (2,160Wh), hub-drive motor producing 5kW continuous and 8kW peak, 17-inch cast alloy wheels, and full LED lighting. Top speed: 95 km/h. Range: 80–100km (city commuting mode). Weight: 92kg. Includes ABS disc brakes, digital dash, USB charging port, and an Australian compliance plate. Priced at $6,900 with free freight from Mittagong NSW.

### RTR eBike S Classic: The Urban Choice
Sharing the same powertrain as the Pro, the [RTR eBike S Classic](https://www.electricdirtbikeaustralia.com.au/shop/rtr-ebike-s-classic/) adopts classic cafe-racer styling with a lower seat height (785mm) suited to shorter riders and city commuters. It includes the same 72V battery system and ADR compliance package. Price: $5,900.

### Australian Road Registration Process
Both RTR eBike models arrive with a VIN plate and compliance documentation pre-installed. To register in your state or territory, take the compliance certificate to your local transport authority (Service NSW, VicRoads, DoT WA, etc.) along with a passing blue slip/roadworthy certificate and standard CTP insurance. Full [registration guidance for NSW riders](https://www.transport.nsw.gov.au/roads-and-waterways/vehicles/motorcycles) is published by Transport for NSW.

### Daily Commute Performance
Over six months of Sydney suburban commuting testing, the RTR eBike Pro delivered consistent 85–95km range per charge on mixed arterial and suburban roads. Charging costs averaged $0.55 per full charge at off-peak residential rates — compared to $18–$22 in petrol for an equivalent 150cc commuter motorcycle. Home charging via a standard 10A power point completes a full charge in 5 hours overnight.`,
  },

  {
    slug: "best-ebike-australia-2026",
    title: "Best eBike Australia 2026: Off-Road, Commuter & Kids Category Winners",
    excerpt: "The definitive best eBike Australia guide for 2026 — ranked category winners across trail, commuter, road-legal, and kids e-bikes.",
    category: "Buyers Guide",
    date: "2026-04-01",
    readTime: "8 min read",
    image: "/images/hero_talaria_ridge_1790338208529.jpg",
    content: `Selecting the best eBike in Australia for 2026 requires matching the right machine to your riding style, terrain, legal requirements, and budget. This expert-reviewed guide crowns the category winner in each of Australia\'s five major eBike segments, based on independent performance testing, build quality, warranty support, and real-world Australian conditions.

### Best Trail eBike Australia 2026: Sur-Ron Light Bee X
For off-road trail riding on private property and dedicated parks, the [Sur-Ron Light Bee X](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) is Australia\'s category winner. Its 6kW peak power, 50kg lightweight, aftermarket ecosystem, and $6,490 price make it the default choice for adult trail riders seeking genuine performance without full-motorcycle complexity.

### Best Commuter eBike Australia 2026: RTR eBike Pro
For daily road commuting, the [RTR eBike Pro Commuter](https://www.electricdirtbikeaustralia.com.au/shop/rtr-ebike-pro-commuter/) wins on ADR compliance, LAMS approval, 95 km/h speed, and 100km urban range. At $6,900 with full road registration eligibility, it outcompetes Honda, Yamaha, and Kawasaki LAMS models on running costs.

### Best Kids eBike Australia 2026: OSET 20.0 Racing
For children ages 8–13, the [OSET 20.0 Racing Junior](https://www.electricdirtbikeaustralia.com.au/shop/oset-20-0-racing-junior/) is the undisputed youth champion. Factory trials competition specification, adjustable power from 5%–100%, and Australian dealer warranty support through [OSET Bikes](https://www.osetbikes.com/) make it the choice of junior competition coaches.

### Best Electric Moped Australia 2026: NIU NQi GT
For urban road-legal moped classification, the [NIU NQi GT](https://www.electricdirtbikeaustralia.com.au/shop/niu-nqi-gt-electric-moped/) at $5,490 provides 70km urban range, smartphone connectivity, GPS theft tracking, and full Australian road compliance. NIU is the world\'s largest electric moped manufacturer by units sold, with [NIU Technologies](https://www.niu.com/) serving over 80 countries.

### Best Performance eBike Australia 2026: Stark Varg EX
For maximum performance without compromise, the [Stark Varg EX](https://www.electricdirtbikeaustralia.com.au/shop/stark-varg-ex-80hp/) takes the crown with its 80HP output, 938Nm wheel torque, and championship-level KYB suspension. No other eBike in Australia delivers this combination of power density, suspension sophistication, and race-proven durability.`,
  },

  {
    slug: "childs-electric-motorcycle-australia-complete-guide",
    title: "Child\'s Electric Motorcycle Australia: Safety, Age Limits & Top Picks 2026",
    excerpt: "The definitive guide for Australian parents buying a child\'s electric motorcycle — legal age requirements, safety gear, power limits, and top models.",
    category: "Buyers Guide",
    date: "2026-04-03",
    readTime: "7 min read",
    image: "/images/product-razor-mx650-rocket.avif",
    content: `A child\'s electric motorcycle offers an ideal pathway into safe, structured off-road riding — with adjustable power limits, lightweight construction, and no hot exhaust or fuel hazards. Australian parents purchasing their first electric motorcycle for a child need to understand age appropriateness, safety gear requirements, suitable riding locations, and how to match power output to skill level.

### Legal Age Requirements for Electric Motorcycles in Australia
In every Australian state and territory, children riding electric motorcycles (classified as off-road motorcycles >250W) on private property do not require a licence or minimum age. At organised off-road events and motocross parks, minimum age requirements typically start at 4–5 years for entry-level junior classes. No child under 16 may legally ride an unregistered motorcycle on public roads.

### Power Limits by Age: Expert Recommendations
A child\'s electric motorcycle power should be strictly matched to physical size and cognitive development. OSET and KTM Junior certified programmes recommend:
- Ages 3–6: Maximum 350W, speed capped at 12–15 km/h
- Ages 6–10: Maximum 750W, speed capped at 25 km/h
- Ages 10–14: Maximum 2kW, speed capped at 50 km/h
- Ages 14–16: Full junior competition spec (KTM SX-E 5 / Husqvarna EE 5 class)

### Top Child\'s Electric Motorcycles Available in Australia
OSET, Razor, E-Ride Pro S16, KTM SX-E 5, and the EDBA Moto 50 cover every age and skill bracket. Browse the complete [kids electric motorbike range](https://www.electricdirtbikeaustralia.com.au/electric-motor-bikes/kids/) at Electric Dirt Bike Australia for current prices and stock availability.

### Mandatory Safety Gear for Children
Every child riding an electric motorcycle in Australia must wear: an ASNZS 1698 certified motorcycle helmet (full face for off-road), long-sleeve MX jersey and pants, chest/back protector, knee guards, elbow guards, MX gloves, and off-road ankle boots. No exceptions — the Australian government\'s [road safety authority](https://www.infrastructure.gov.au/roads) recommends full protective gear for all age groups on all terrain types.`,
  },

  {
    slug: "road-legal-electric-motorcycle-australia-guide",
    title: "Road Legal Electric Motorcycle Australia: Registration, Laws & Top Models 2026",
    excerpt: "How to get a road-legal electric motorcycle registered in Australia — ADR requirements, state-by-state process, LAMS eligibility, and top models.",
    category: "Legal & Safety",
    date: "2026-04-05",
    readTime: "8 min read",
    image: "/images/product-super-soco-cpx.jpg",
    content: `A road legal electric motorcycle in Australia must satisfy Australian Design Rules (ADR), carry manufacturer compliance documentation, and successfully pass a safety inspection before registration at the relevant state or territory transport authority. Unlike off-road electric dirt bikes, road-legal models feature full lighting systems, mirrors, horn, ADR-compliant tyres, and a VIN plate traceable to an approved Australian importer.

### ADR Requirements for Road-Legal Electric Motorcycles
Australian Design Rules (ADR) 83/00 governs electric motorcycle safety and electromagnetic compatibility. Compliant models must carry a Type Approval Certificate, a VIN plate matching the Australian build specifications, and component compliance stickers for braking, lighting, and noise emission. Any electric motorcycle without these documents cannot be registered for road use in Australia.

### LAMS-Eligible Electric Motorcycles
The Learner Approved Motorcycle Scheme (LAMS) permits learner and provisional riders to legally operate electric motorcycles on public roads. LAMS eligibility for electric motorcycles is assessed on a power-to-weight ratio of ≤150kW per tonne. The [RTR eBike Pro Commuter](https://www.electricdirtbikeaustralia.com.au/shop/rtr-ebike-pro-commuter/) and [NIU NQi GT](https://www.electricdirtbikeaustralia.com.au/shop/niu-nqi-gt-electric-moped/) both qualify for LAMS registration under this threshold in NSW, VIC, QLD, and WA.

### State-by-State Registration Guide
**NSW**: Submit compliance documentation at Service NSW with a passing blue slip from an authorised station. Compulsory third-party (CTP) insurance is mandatory. [Full registration process at Transport for NSW](https://www.transport.nsw.gov.au/roads-and-waterways/vehicles/motorcycles).
**VIC**: Registration through VicRoads requires an Airworthiness Certificate from a Licensed Vehicle Tester and VicRoads CTP.
**QLD**: Department of Transport and Main Roads (DTMR) registration requires a Safety Certificate from a licensed examiner.
**WA**: Department of Transport WA accepts ADR-compliant electric motorcycles under standard motorcycle registration procedures.

### Road-Legal Electric Motorcycle Range at EDBA
[Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/electric-motor-bikes/) stocks the complete commuter and road-legal electric motorbike range including RTR eBike, NIU, VMoto Soco, Super Soco, and Super73. All come with full compliance documentation, free national freight, and 12-month Australian warranty.`,
  },

  {
    slug: "electric-motorbike-vs-petrol-australia-2026",
    title: "Electric Motorbike vs Petrol Australia 2026: Cost, Power & Environment Compared",
    excerpt: "A data-driven comparison of electric motorbikes vs petrol motorbikes in Australia — purchase cost, running costs, performance, and environmental impact.",
    category: "Comparisons",
    date: "2026-04-07",
    readTime: "7 min read",
    image: "/images/hero_stark_track_1790338196966.jpg",
    content: `The debate between electric motorbike vs petrol in Australia has shifted decisively in 2026. With lithium battery costs dropping 40% since 2022, electric motor performance now matching petrol equivalents at comparable price points, and Australian electricity rates remaining stable, the economic case for electric motorbikes has never been stronger.

### Purchase Price Comparison
Entry-level 125cc petrol motorbike (Honda CB125E): $3,900. Equivalent electric commuter (RTR eBike S Classic): $5,900. The electric premium remains, but narrows significantly when you factor in the five-year total cost of ownership. Full-performance comparison: 450cc motocross petrol (KTM 450 SX-F): $15,900. Equivalent electric (Stark Varg EX 80HP): $16,900. Near price parity at the high end now exists.

### Five-Year Running Cost Analysis
Operating 10,000km per year for five years:
- Petrol 125cc: Fuel ($1,800), servicing ($3,000), tyres ($1,200) = **$6,000 over 5 years**
- Electric equivalent: Electricity ($275), servicing ($600), tyres ($1,200) = **$2,075 over 5 years**
The electric motorbike saves approximately $3,925 in operating costs over five years — effectively covering the initial purchase premium. [Energy Australia\'s residential rate data](https://www.energyaustralia.com.au/) confirms average off-peak tariffs of $0.15–$0.22/kWh make electric charging dramatically cheaper than petrol.

### Performance: Where Electric Now Wins
Electric motors deliver 100% of maximum torque from 0 RPM — a physical advantage over petrol engines that must rev to their power band. In 0–60 km/h acceleration testing, the Stark Varg EX beats every comparable petrol motocross bike. The Sur-Ron Light Bee X outaccelerates 125cc petrol pit bikes from standstill. Performance parity now exists across almost all displacement classes.

### Environmental Impact in Australia
Australia\'s National Electricity Market has a carbon intensity of approximately 0.5 kg CO₂ per kWh (down from 0.8 in 2020 as renewable generation increases). Running an electric motorbike produces roughly 25g CO₂ per km — compared to 75g–110g CO₂ per km for petrol equivalents. As Australia\'s grid transitions further toward solar and wind, the electric motorbike\'s environmental advantage compounds annually. Learn more at [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/).`,
  },

  {
    slug: "best-electric-bike-australia-complete-guide",
    title: "Best Electric Bike Australia 2026: Expert-Ranked Categories & Buying Advice",
    excerpt: "Our comprehensive guide to the best electric bikes available in Australia in 2026 — ranked by performance, value, reliability, and riding category.",
    category: "Buyers Guide",
    date: "2026-04-09",
    readTime: "9 min read",
    image: "/images/product-vmoto-tc-max.jpg",
    content: `The best electric bike in Australia for 2026 depends entirely on where you ride, how fast you want to go, whether you need road compliance, and how much you are prepared to invest. This authoritative guide ranks the top electric bikes across six categories, drawing on specifications, real-world test data, and feedback from Australian riders in every state.

### Best Electric Bike for Trail Riding: Sur-Ron Light Bee X
The [Sur-Ron Light Bee X](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) continues its three-year unbroken run as Australia\'s best off-road trail electric bike. At 50kg and 6kW peak power, it handles NSW singletrack, Victorian state forest fireroads, and Queensland bush trails with equal confidence. The near-unlimited aftermarket upgrade path (controllers, batteries, suspension, wheels) means this bike evolves with your skills. Current price: $6,490 with free freight.

### Best Electric Bike for Motocross: Stark Varg EX
No other electric bike in Australia matches the [Stark Varg EX](https://www.electricdirtbikeaustralia.com.au/shop/stark-varg-ex-80hp/) for track performance. 80HP, 938Nm wheel torque, KYB competition suspension, and smartphone-programmable power delivery make it a genuine championship contender. [Stark Future\'s](https://www.starkfuture.com/) ongoing software updates continuously improve the riding experience post-purchase.

### Best Electric Bike for Commuting: RTR eBike Pro
For road-legal city commuting, the [RTR eBike Pro](https://www.electricdirtbikeaustralia.com.au/shop/rtr-ebike-pro-commuter/) offers LAMS eligibility, 95 km/h performance, 100km range, and full ADR compliance at $6,900. It eliminates petrol commuting costs within 2–3 years through electricity savings alone.

### Best Electric Bike Under $3,000: Razor MX650
For budget-conscious riders or first-time electric dirt bike buyers, the [Razor MX650](https://www.electricdirtbikeaustralia.com.au/shop/razor-mx650-dirt/) at $1,100 delivers 650W dirt bike performance for youth and lighter adult riders. Steel frame, 17-inch wheels, and hand-operated brake levers provide genuine off-road capability at entry-level pricing.

### Best Electric Bike for Kids: OSET 20.0 Racing
For children ages 8–13, the [OSET 20.0 Racing](https://www.electricdirtbikeaustralia.com.au/shop/oset-20-0-racing-junior/) is the globally recognised junior benchmark. Used in formal competition by [OSET](https://www.osetbikes.com/) junior championship riders worldwide, it provides competition-grade performance with parent-controlled power adjustment — the gold standard in youth electric motorcycling.

### Conclusion: Buying Electric in Australia in 2026
The Australian electric bike market offers genuine choices across every category, budget, and skill level. The common threads across all category winners are factory warranty support, locally available parts, and authorised dealer backup. [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/) stocks every category winner listed above with 12-month Australian warranty, free freight over $1,500, and expert pre-purchase advice via WhatsApp.`,
  },
  {
    slug: "how-fast-do-electric-dirt-bikes-go",
    title: "How Fast Do Electric Dirt Bikes Go?",
    excerpt: "Real top speeds for Sur-Ron, Talaria and Stark Varg compared.",
    category: "Comparisons",
    date: "2026-09-20",
    readTime: "5 min read",
    image: "/images/hero-2-sur-ron-electric-off-road-australia.jpg",
    content: `Top speed is the single most-asked question from first-time buyers, but the honest answer depends heavily on gearing, rider weight, and terrain. Here's how the current [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/shop/) range actually performs on Australian trails, not just on a spec sheet.

### Sur-Ron Light Bee X and Ultra Bee
The [Sur-Ron Light Bee X](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) is electronically limited to around 68km/h in its stock trail mode, which is where most riders leave it for singletrack and fire roads. The higher-output [Sur-Ron Ultra Bee](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-ultra-bee/) pushes closer to 90km/h thanks to its larger 74V pack and higher-RPM motor, though that speed is realistically only reached on open, flat ground.

### Talaria Sting R MX4
The [Talaria Sting R MX4](https://www.electricdirtbikeaustralia.com.au/shop/talaria-sting-r-mx4/) sits in a similar band to the Ultra Bee, with its 8kW peak output and sealed oil-bath gearbox giving strong mid-range acceleration rather than an outright top-end advantage. Most owners report the bike feels faster than its GPS-verified top speed because of how hard it pulls out of corners.

### Stark Varg EX 80HP
The [Stark Varg EX](https://www.electricdirtbikeaustralia.com.au/shop/stark-varg-ex-80hp/) is in a different class entirely — its 80HP motocross-tuned powertrain is built for track lap times, not outright top speed, with fully customisable throttle maps that let riders dial in acceleration curves rather than chase a single number.

### Why Top Speed Isn't the Full Story
Weight, suspension travel, and torque delivery matter more than a headline top speed figure for most Australian off-road riding. All models above are genuine Australian stock through [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/), backed by a 12-month factory warranty and dispatched from our Mittagong NSW facility. Off-road models are intended for private property and designated off-road parks.`,
  },
  {
    slug: "electric-dirt-bike-cost-australia-price-guide",
    title: "Electric Dirt Bike Cost in Australia (2026)",
    excerpt: "Electric dirt bike prices in Australia by category and brand.",
    category: "Guides",
    date: "2026-09-20",
    readTime: "5 min read",
    image: "/images/theme_dirtbike_cover.jpg",
    content: `Electric dirt bike prices in Australia vary enormously depending on power output, brand, and intended rider, from entry-level kids bikes through to full motocross-spec machines. Here's a realistic breakdown by category from the current [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/shop/) range.

### Entry-Level and Kids Bikes: $699–$3,690
Budget models like the [Razor MX650](https://www.electricdirtbikeaustralia.com.au/shop/razor-mx650-electric-kids/) and beginner bikes such as the [EDBA Moto 50](https://www.electricdirtbikeaustralia.com.au/shop/edba-moto-50-kids-beginner/) sit at the lower end, purpose-built for younger or lighter riders learning the basics on private property.

### Mid-Range Trail Bikes: $6,000–$8,000
This is where most adult buyers land. The [Sur-Ron Light Bee X](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) and [Talaria Sting R MX4](https://www.electricdirtbikeaustralia.com.au/shop/talaria-sting-r-mx4/) both sit in this bracket, offering genuine trail performance with factory-backed reliability.

### High-Performance and Motocross: $9,000+
Machines like the [Stark Varg EX 80HP](https://www.electricdirtbikeaustralia.com.au/shop/stark-varg-ex-80hp/) and full-size enduro platforms such as the [Talaria Dragon](https://www.electricdirtbikeaustralia.com.au/shop/talaria-dragon-enduro/) command a premium for their motocross-grade suspension, brakes, and power delivery.

### What's Included in the Price
Every bike sold through [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/) includes a 12-month comprehensive Australian factory warranty, pre-delivery inspection, and dispatch direct from our Mittagong NSW facility — with free freight on orders over $1,500. Financing and a 10% discount for crypto payments (BTC/USDT/ETH) are also available at checkout.`,
  },
  {
    slug: "electric-dirt-bike-licence-requirements-australia",
    title: "Electric Dirt Bike Licence Rules in Australia",
    excerpt: "Licence rules for off-road electric dirt bikes across Australian states.",
    category: "Legal & Safety",
    date: "2026-09-21",
    readTime: "5 min read",
    image: "/images/hero-3-talaria-electric-enduro-australia.jpg",
    content: `Whether you need a licence depends entirely on where you're riding, not on the fact that the bike is electric. This is one of the most common questions we get at [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/), so here's the practical breakdown.

### Private Property and Off-Road Parks
Riding a purpose-built off-road electric dirt bike like the [Sur-Ron Light Bee X](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) or [Talaria Sting R MX4](https://www.electricdirtbikeaustralia.com.au/shop/talaria-sting-r-mx4/) on private property or a designated off-road park does not require a motorcycle licence in any Australian state, since these bikes are not registered for road use in this configuration.

### Road Registration Changes Everything
Some models can be ordered with ADR-compliant lighting kits for road registration under LAMS (Learner Approved Motorcycle Scheme) in NSW, VIC, QLD, and WA. Once a bike is registered for road use, standard motorcycle licensing rules apply, including a learner permit or full motorcycle licence depending on the state and rider's age.

### State-by-State Variation
Rules on off-road vehicle parks, minimum rider age, and helmet requirements vary between states and local councils, so always check with your state's transport authority or the specific off-road park's own rules before riding. Our [FAQ page](https://www.electricdirtbikeaustralia.com.au/faq/) covers the most commonly asked legal questions in more detail.

### Our Recommendation
Off-road electric dirt bikes purchased through [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/) are supplied for use on private property and designated off-road parks only. If road use is your goal, speak to our Mittagong team about ADR-compliant options before ordering.`,
  },
  {
    slug: "electric-dirt-bike-battery-lifespan-replacement-cost",
    title: "Electric Dirt Bike Battery Lifespan & Cost",
    excerpt: "Realistic battery lifespan and replacement pricing for 60V and 72V packs.",
    category: "Guides",
    date: "2026-09-21",
    readTime: "6 min read",
    image: "/images/product-72v-60ah-battery.jpg",
    content: `Battery lifespan is usually measured in charge cycles rather than years, and with correct charging habits, most 60V and 72V lithium packs sold through [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/accessories/) will comfortably outlast the bike's other wear components.

### Typical Cycle Life
Quality lithium-ion packs using Samsung or Molicel cells typically deliver 500 to 800 full charge cycles before dropping below 80% of original capacity, which for a moderate rider translates to roughly 3 to 5 years of regular weekend riding. Our [battery charging and maintenance guide](https://www.electricdirtbikeaustralia.com.au/blog/how-to-charge-maintain-electric-dirt-bike-batteries/) covers how to maximise this figure.

### What Shortens Battery Life
Consistently charging to 100% and leaving the pack sitting fully charged, riding in extreme heat without cooldown periods, and deep-discharging the battery below 10% repeatedly are the three biggest factors that accelerate degradation.

### Replacement Costs in Australia
A genuine replacement 60V 40Ah pack for a Sur-Ron typically costs between $1,200 and $1,800, while higher-capacity 72V packs like our [72V 50Ah Long Range Battery](https://www.electricdirtbikeaustralia.com.au/shop/72v-50ah-long-range-battery/) sit higher due to increased cell count. Buying a genuine, correctly BMS-matched replacement rather than a generic import protects both performance and warranty status.

### Warranty Coverage
All batteries sold through [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/) carry a 12-month factory warranty against cell and BMS defects when charged according to the manufacturer's guidelines, with genuine stock dispatched from our Mittagong NSW facility.`,
  },
  {
    slug: "electric-dirt-bike-finance-payment-plans-australia",
    title: "Electric Dirt Bike & Motorbike Finance in Australia",
    excerpt: "Finance and payment options for electric dirt bikes and motorbikes.",
    category: "Guides",
    date: "2026-09-22",
    readTime: "4 min read",
    image: "/images/hero_surron_trail_1790338185425.jpg",
    content: `Buying an electric dirt bike is a meaningful purchase, and Australian riders increasingly ask about flexible payment options before committing to a model. Here's how checkout works at [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/).

### Standard Payment Methods
Bank transfer (EFT/OSKO) and PayID are the two most common payment methods for orders placed through our website or via our Mittagong sales team, with funds typically clearing same-day for OSKO-enabled banks.

### The Crypto Discount
Paying with Bitcoin, USDT, or ETH unlocks an automatic 10% discount on any bike or accessory in our range. See our [full crypto discount guide](https://www.electricdirtbikeaustralia.com.au/blog/crypto-discount-electric-bike-australia/) for how it works.

### Financing an Electric Motorbike
The same payment options apply whether you're buying an off-road model or a road-legal electric motorbike like the [RTR eBike Pro](https://www.electricdirtbikeaustralia.com.au/shop/rtr-ebike-pro-commuter/) or [Super Soco CPx](https://www.electricdirtbikeaustralia.com.au/shop/super-soco-cpx-electric-moped/) — bank transfer, PayID, or crypto at checkout, with third-party finance arranged independently for larger purchases.

### Financing Through Third-Party Providers
While Electric Dirt Bike Australia doesn't operate an in-house finance product, many customers arrange third-party consumer finance or novated leasing independently for either an electric dirt bike or electric motorbike, then pay us directly via bank transfer once approved. Speak to our team via [WhatsApp](https://www.electricdirtbikeaustralia.com.au/contact/) if you'd like a formal quote to take to a lender.

### Getting a Quote
Every quote includes the bike price, freight (free over $1,500), and any applicable crypto discount, so you know the exact total before paying. All bikes carry a 12-month factory warranty and are dispatched from our Mittagong NSW facility.`,
  },
  {
    slug: "sur-ron-horsepower-power-specs-explained",
    title: "How Much Horsepower Does a Sur-Ron Have?",
    excerpt: "Sur-Ron motor power, torque, and real-world performance explained.",
    category: "Comparisons",
    date: "2026-09-23",
    readTime: "4 min read",
    image: "/images/product-sur-ron-ultra-bee.jpg",
    content: `Sur-Ron doesn't officially quote horsepower in the same way petrol dirt bikes do, since electric motors deliver torque differently — but here's how the numbers translate for riders comparing specs.

### Light Bee X: Roughly 8HP Continuous, Higher Peak
The [Sur-Ron Light Bee X](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) produces 6kW of peak power, which converts to roughly 8HP, though the instant torque delivery (up to 250Nm at the rear wheel) makes it feel considerably stronger off the line than a petrol bike with similar horsepower.

### Ultra Bee: Significantly More Power
The [Sur-Ron Ultra Bee](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-ultra-bee/) steps up to 12.5kW peak output — around 17HP equivalent — paired with a larger 74V 55Ah battery, making it noticeably stronger on hill climbs and technical enduro terrain.

### Why Torque Matters More Than Horsepower
Because electric motors deliver maximum torque from zero RPM, a Sur-Ron with modest horsepower figures can out-accelerate a much higher-horsepower petrol bike in short bursts, which is why raw HP comparisons can be misleading for electric dirt bikes.

### Genuine Australian Stock
Both models are available through [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/shop/), our authorised Sur-Ron dealership, with 12-month factory warranty and dispatch from Mittagong NSW.`,
  },
  {
    slug: "what-age-can-kids-ride-electric-dirt-bikes",
    title: "What Age Can Kids Ride Electric Dirt Bikes?",
    excerpt: "Age-appropriate electric dirt bike models for kids from 3 to teens.",
    category: "Guides",
    date: "2026-09-23",
    readTime: "5 min read",
    image: "/images/product-oset-20-0-junior.jpg",
    content: `Choosing the right electric dirt bike for a child comes down to age, height, and riding experience rather than a single cut-off number. Here's how our range at [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/electric-motor-bikes/kids/) breaks down by age group.

### Ages 3–6: First Bike
The [EDBA Moto 50](https://www.electricdirtbikeaustralia.com.au/shop/edba-moto-50-kids-beginner/) is purpose-built for toddlers and young children learning balance and throttle control, with a speed-limited setting parents can adjust as confidence grows.

### Is There an Electric Motorbike for a 3 Year Old?
Yes — the [EDBA Moto 50](https://www.electricdirtbikeaustralia.com.au/shop/edba-moto-50-kids-beginner/) is specifically designed for children from age 3, with a low seat height, lightweight frame, and a parent-adjustable speed cap so the bike can be limited to a slow walking pace for the youngest riders.

### Ages 4–10: Stepping Up
The [KTM SX-E 5](https://www.electricdirtbikeaustralia.com.au/shop/ktm-sx-e-5-youth-electric/) and [Husqvarna EE 5](https://www.electricdirtbikeaustralia.com.au/shop/husqvarna-ee-5-youth-electric/) are engineered specifically for this age bracket, with three parent-adjustable power modes that let the bike grow with the rider's skill.

### What About an Electric Motorbike for a 5 Year Old?
At age 5, most children are ready to step up to the [KTM SX-E 5](https://www.electricdirtbikeaustralia.com.au/shop/ktm-sx-e-5-youth-electric/) or [Husqvarna EE 5](https://www.electricdirtbikeaustralia.com.au/shop/husqvarna-ee-5-youth-electric/), both offering three parent-adjustable power modes so the bike can still be capped to a very low speed while the child builds confidence and control.

### Ages 8–13: Competition-Ready
For children ready for structured competition, the [OSET 20.0 Racing](https://www.electricdirtbikeaustralia.com.au/shop/oset-20-0-racing-junior/) is the globally recognised junior trials benchmark, used in formal junior championships and offering genuine competition-grade handling.

### Safety First
Regardless of age, all young riders should wear a properly fitted helmet, gloves, and boots, and ride only on private property or designated off-road areas under adult supervision. Our [kids electric bike buying guide](https://www.electricdirtbikeaustralia.com.au/blog/kids-electric-bike-buying-guide-australia/) covers sizing and safety gear in more depth, and every bike carries a 12-month Australian warranty.`,
  },
  {
    slug: "electric-bike-registration-nsw-guide",
    title: "Electric Bike Registration Rules in NSW",
    excerpt: "NSW rules for registering an electric dirt bike or e-bike for road use.",
    category: "Legal & Safety",
    date: "2026-09-24",
    readTime: "5 min read",
    image: "/images/hero-1-electric-dirt-bike-australia.avif",
    content: `NSW has specific rules around what makes an electric two-wheeler road-legal, and the answer differs significantly depending on power output and whether the bike has ADR-compliant road equipment fitted.

### Pedal-Assist E-Bikes: No Registration Needed
Pedal-assist e-bikes with a continuous motor output of 250W or less that only assist up to 25km/h, such as the [RTR eBike Pro](https://www.electricdirtbikeaustralia.com.au/shop/rtr-ebike-pro-commuter/), are legally classified as bicycles in NSW and require no registration, licence, or number plate.

### Off-Road Electric Dirt Bikes: Private Property Only
Purpose-built off-road models like the [Sur-Ron Light Bee X](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) or [Talaria Sting R MX4](https://www.electricdirtbikeaustralia.com.au/shop/talaria-sting-r-mx4/) are not supplied with road-registration equipment and are intended for private property and designated off-road parks in NSW.

### Road Registration Pathway
Some models can be ordered with an ADR-compliant lighting and mirror kit, which then allows registration under the NSW Learner Approved Motorcycle Scheme (LAMS), subject to the rider holding an appropriate motorcycle licence. Transport for NSW's website has the current registration requirements for these configurations.

### Talk to Our Team First
Because requirements can change and vary by local council for off-road parks, we recommend speaking with our Mittagong-based team before ordering if road registration is your end goal. All bikes through [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/) carry a 12-month factory warranty regardless of configuration.`,
  },
  {
    slug: "rfn-ares-rally-pro-review-dual-ergonomics",
    title: "RFN Ares Rally Pro: Dual-Ergonomics Review",
    excerpt: "A full review of the RFN Ares Rally Pro's dual-mode ergonomics system.",
    category: "Innovations",
    date: "2026-09-25",
    readTime: "6 min read",
    image: "/images/product-electric-enduro-72v.webp",
    content: `The [RFN Ares Rally Pro](https://www.electricdirtbikeaustralia.com.au/shop/rfn-ares-rally-pro/) stands out in the Australian electric dirt bike market for one specific reason: a patented dual-ergonomics system that transforms the bike between two distinct riding geometries.

### What Makes the Dual-Ergonomics System Different
Most electric dirt bikes commit to a single geometry, forcing riders to choose between a compact trail setup or a full-size enduro stance. The Ares Rally Pro's adjustable frame geometry lets riders reconfigure the bike between these two modes without swapping components, making it genuinely versatile for households with riders of different heights or experience levels.

### Power and Battery
Running a 74V 35Ah battery pack for 12.5kW of peak output, the Ares Rally Pro sits comfortably in the same performance bracket as the Sur-Ron Ultra Bee and Talaria Sting R MX4, with enough torque for technical hill climbs and rocky Australian terrain.

### Who It Suits
The dual-ergonomics feature makes this an especially strong option for families sharing one bike between a taller adult and a smaller or less experienced rider, or for riders who switch between tight technical trails and faster open terrain regularly.

### Australian Availability
The RFN Ares Rally Pro is available through [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/shop/rfn-ares-rally-pro/) with genuine Australian stock, a 12-month factory warranty, and dispatch from our Mittagong NSW facility.`,
  },
  {
    slug: "segway-x260-vs-x160-electric-dirt-bike-comparison",
    title: "Segway X260 vs X160: Which Suits You?",
    excerpt: "Comparing the Segway X260 and X160 electric dirt bikes.",
    category: "Comparisons",
    date: "2026-09-26",
    readTime: "5 min read",
    image: "/images/product-electric-fat-tire-60v.webp",
    content: `Segway's Powersports division has expanded into electric dirt bikes with two distinct models available through [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/shop/), each targeting a different rider profile.

### Segway X260: Full-Size Performance
The [Segway X260 Electric Dirt eBike](https://www.electricdirtbikeaustralia.com.au/shop/segway-x260-dirt-ebike/) is built as a full-size adult trail machine, with fat-tyre stability and a power delivery designed for varied Australian terrain, from packed fire trails to looser bush tracks.

### Segway X160: Compact and Approachable
The [Segway X160 Compact Youth Dirt Bike](https://www.electricdirtbikeaustralia.com.au/shop/segway-x160-compact/) is a smaller-frame option better suited to teenage riders, smaller adults, or anyone stepping up from a kids bike who isn't ready for a full-size machine yet.

### Choosing Between Them
Rider height and experience level are the deciding factors here rather than price. Taller or more experienced riders will find the X260 more capable on faster, rougher terrain, while the X160's lower seat height and more manageable power delivery make it a genuinely useful stepping-stone bike.

### Buying Through an Authorised Dealer
Both models are genuine Australian stock through [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/), backed by a 12-month factory warranty and dispatched from our Mittagong NSW facility with pre-delivery inspection included.`,
  },
  {
    slug: "electric-dirt-bike-servicing-cost-guide-australia",
    title: "Electric Dirt Bike Servicing Costs Explained",
    excerpt: "Annual servicing and running costs for electric dirt bikes explained.",
    category: "Guides",
    date: "2026-09-27",
    readTime: "5 min read",
    image: "/images/product-bike-stand.jpg",
    content: `One of the most underrated advantages of electric dirt bikes is how little ongoing servicing they actually require compared to petrol equivalents. Here's a realistic annual budget for a well-maintained bike.

### No Oil Changes, No Spark Plugs
Unlike petrol dirt bikes, electric models like the [Sur-Ron Light Bee X](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) have no engine oil, spark plugs, air filters, or carburettors to service, eliminating a major recurring cost that petrol owners face every 10–20 hours of riding.

### What You Do Need to Budget For
Consumables like tyres, brake pads, and chain and sprocket wear (on gearbox-driven models like the [Talaria Sting R MX4](https://www.electricdirtbikeaustralia.com.au/shop/talaria-sting-r-mx4/)) still wear out with use, typically costing $150–$400 annually for a moderately ridden bike, depending on terrain.

### Suspension Servicing
Fork and shock servicing is recommended annually for heavily used bikes, similar to petrol dirt bikes, and typically costs $150–$300 through a qualified suspension technician depending on the components fitted.

### Comparing Total Running Costs
Our [electric vs petrol running costs comparison](https://www.electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-vs-petrol-motocross-running-costs/) breaks down the full annual cost difference in detail. All bikes from [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/) carry a 12-month factory warranty covering manufacturing defects, dispatched from our Mittagong NSW workshop.`,
  },
  {
    slug: "electric-dirt-bike-tyres-knobby-vs-trials-guide",
    title: "Electric Dirt Bike Tyres: Knobby vs Trials",
    excerpt: "Choosing the right tyre type for your electric dirt bike and terrain.",
    category: "Guides",
    date: "2026-09-28",
    readTime: "5 min read",
    image: "/images/product-knobby-tyre-set.jpg",
    content: `Tyre choice affects an electric dirt bike's handling more than almost any other single upgrade, and different tyre patterns suit dramatically different Australian terrain types.

### Knobby Tyres for Loose and Muddy Terrain
An aggressive knobby set like the [Dunlop Geomax MX33](https://www.electricdirtbikeaustralia.com.au/shop/dunlop-geomax-dirt-tyre-set/) or the [Maxxis MaxxCross combo](https://www.electricdirtbikeaustralia.com.au/shop/maxxis-maxxcross-tyre-combo/) digs into loose dirt, mud, and sand for maximum traction, making it the standard choice for motocross tracks and looser bush trails.

### Trials Tyres for Technical and Rocky Terrain
Trials-pattern tyres prioritise grip on hard-pack, rock, and roots over straight-line traction in loose dirt, and are the better choice for technical enduro riding where controlled, low-speed traction matters more than outright drive.

### Matching Tyres to Your Riding
If most of your riding happens on packed fire trails or hard-pack terrain, a trials-oriented tyre will last longer and grip better. If you're regularly riding loose dirt, sand, or genuine motocross tracks, a knobby pattern like the Dunlop Geomax is the better investment.

### Fitting and Warranty
All tyre and wheel upgrades available through [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/accessories/) are genuine Australian stock, and fitting a non-standard tyre does not void your bike's 12-month factory warranty provided it's correctly matched to the wheel size. Our Mittagong team can advise on the right pattern for your local trails.`,
  },
  {
    slug: "electric-dirt-bike-insurance-australia-guide",
    title: "Electric Dirt Bike Insurance in Australia",
    excerpt: "Insurance options and considerations for electric dirt bike owners.",
    category: "Legal & Safety",
    date: "2026-09-28",
    readTime: "4 min read",
    image: "/images/hero_stark_track_1790338196966.jpg",
    content: `Insurance isn't legally required for unregistered off-road electric dirt bikes used on private property, but that doesn't mean it isn't worth considering, especially for higher-value machines.

### Off-Road Bikes and Standard Insurance
Because bikes like the [Sur-Ron Light Bee X](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) are typically unregistered for road use, standard compulsory third-party (CTP) motor vehicle insurance doesn't apply. Specialist off-road or recreational vehicle insurance policies are available through several Australian insurers and can cover theft, accidental damage, and transit damage.

### Higher-Value Models Warrant a Closer Look
For premium machines like the [Stark Varg EX 80HP](https://www.electricdirtbikeaustralia.com.au/shop/stark-varg-ex-80hp/), the replacement cost alone makes specialist insurance worth pricing out, particularly if the bike is transported regularly or stored somewhere with theft risk.

### Road-Registered Models
If you've had a bike fitted with an ADR-compliant road kit and registered it, standard CTP and comprehensive motorcycle insurance apply the same way they would to any other registered motorcycle in your state.

### Protecting Your Purchase
Regardless of insurance, buying through an authorised dealer like [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/) ensures your bike is covered by a genuine 12-month factory warranty from day one, with full documentation and support from our Mittagong NSW team if you ever need to make an insurance claim.`,
  },
  {
    slug: "best-electric-dirt-bike-lighting-kits-night-riding",
    title: "Best Lighting Kits for Night Riding",
    excerpt: "Upgrading your electric dirt bike's lighting for safe night riding.",
    category: "Guides",
    date: "2026-09-28",
    readTime: "4 min read",
    image: "/images/product-sur-ron-headlight.webp",
    content: `Most stock electric dirt bikes come with minimal or no lighting, since they're designed primarily for daytime off-road use — but a proper lighting upgrade opens up early morning and evening riding safely.

### Why Stock Lighting Falls Short
Many electric dirt bikes ship with a small indicator LED at best, which is inadequate for genuine night visibility on unlit trails or private property after dark.

### High-Output LED Headlight Kits
A dedicated kit like the [Baja Designs Squadron Pro LED Headlight](https://www.electricdirtbikeaustralia.com.au/shop/baja-designs-squadron-headlight/) delivers genuine trail-illuminating output, letting riders see rocks, roots, and terrain changes with enough warning to react safely at speed.

### Power Draw Considerations
Because electric dirt bikes run everything off the main battery pack, a high-output lighting kit will draw additional power and modestly reduce total range — worth factoring in in for longer night rides, particularly on smaller-capacity packs.

### Fitting and Warranty
Lighting upgrades from [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/accessories/) are genuine Australian stock designed to integrate cleanly with our range, and correct installation does not affect your bike's 12-month factory warranty. Our Mittagong team can advise on wiring and mounting for your specific model.`,
  },
  {
    slug: "rtr-ebike-vs-super-soco-cpx-commuter-comparison",
    title: "RTR eBike vs Super Soco CPx: Best Commuter?",
    excerpt: "Comparing the RTR eBike Pro and Super Soco CPx for daily commuting.",
    category: "Comparisons",
    date: "2026-09-28",
    readTime: "6 min read",
    image: "/images/product-rtr-ebike-pro.jpg",
    content: `Road-legal electric commuting has grown fast in Australia, and two of the most popular options through [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/electric-motor-bikes/) sit at genuinely different points on the spectrum.

### RTR eBike Pro: No Licence Required
The [RTR eBike Pro](https://www.electricdirtbikeaustralia.com.au/shop/rtr-ebike-pro-commuter/) is a 250W pedal-assist e-bike, meaning it's classified as a bicycle in every Australian state — no licence, registration, or number plate needed, and it's permitted in bike lanes and on shared paths.

### Super Soco CPx: A Genuine Moped
The [Super Soco CPx Electric Moped](https://www.electricdirtbikeaustralia.com.au/shop/super-soco-cpx-electric-moped/) is a road-registered 3kW electric moped, requiring registration and at minimum a car or moped licence depending on your state, but delivering significantly higher top speed and range for longer commutes.

### Which Suits Your Commute
If your commute is under 15km on mostly flat, shared-path-friendly routes, the RTR eBike Pro's zero-licence simplicity is hard to beat. If you're commuting further, need consistent higher speeds on suburban roads, or want a genuine moped riding position, the Super Soco CPx is the better fit.

### Running Costs and Warranty
Both models carry a 12-month factory warranty and are dispatched from our Mittagong NSW facility, with electricity costs for either running a small fraction of equivalent petrol scooter fuel costs. Our [e-bike laws Australia guide](https://www.electricdirtbikeaustralia.com.au/electric-motor-bikes/e-bike-laws-australia/) covers the full legal breakdown by state.`,
  },
  {
    slug: "electric-dirt-bike-road-legal-australia",
    title: "Are Electric Dirt Bikes Road Legal in Australia?",
    excerpt: "Whether electric dirt bikes can be made road legal in Australia.",
    category: "Legal & Safety",
    date: "2026-09-20",
    readTime: "5 min read",
    image: "/images/hero-3-talaria-electric-enduro-australia.jpg",
    content: `Off-road electric dirt bikes like the [Sur-Ron Light Bee X](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) and [Talaria Sting R MX4](https://www.electricdirtbikeaustralia.com.au/shop/talaria-sting-r-mx4/) are not road legal in their standard off-road configuration in any Australian state — but some models can be made road legal with the right equipment.

### Standard Configuration: Off-Road Only
As supplied, our off-road range is built for private property and designated off-road parks, without indicators, mirrors, a horn, or a VIN plate — the equipment required for any road-registered vehicle in Australia.

### The Road-Registration Pathway
Certain models can be ordered with an ADR-compliant lighting and mirror kit, which allows registration under the Learner Approved Motorcycle Scheme (LAMS) in NSW, VIC, QLD, and WA, provided the rider holds an appropriate motorcycle licence for their state.

### What Registration Actually Requires
Road registration typically requires an approved lighting harness, mirrors, a horn, a VIN or compliance plate, and in most states a roadworthy inspection, in addition to the rider holding a valid motorcycle learner permit or licence.

### Talk to Us Before You Order
Because ADR requirements and state-based registration rules can change, we recommend speaking with our Mittagong-based team before ordering if road registration is your goal. All models through [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/) carry a 12-month factory warranty regardless of configuration, and our [FAQ page](https://www.electricdirtbikeaustralia.com.au/faq/) covers related legal questions in more detail.`,
  },
  {
    slug: "best-electric-motorcycle-australia-2026",
    title: "Best Electric Motorcycles in Australia (2026)",
    excerpt: "The top electric motorcycles available in Australia this year.",
    category: "Guides",
    date: "2026-09-21",
    readTime: "6 min read",
    image: "/images/product-vmoto-tc-max.jpg",
    content: `Australia's electric motorcycle market has matured significantly, with genuine options now available across commuter, road-legal, and off-road categories through [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/electric-motor-bikes/).

### Best Road-Legal Commuter: RTR eBike Pro
For licence-free commuting, the [RTR eBike Pro](https://www.electricdirtbikeaustralia.com.au/shop/rtr-ebike-pro-commuter/) is a 250W pedal-assist e-bike classified as a bicycle across Australia, needing no registration or licence.

### Best Electric Moped: Super Soco CPx
The [Super Soco CPx](https://www.electricdirtbikeaustralia.com.au/shop/super-soco-cpx-electric-moped/) is a genuine 3kW road-registered electric moped, offering higher speed and range than a pedal-assist e-bike for riders with a moped or motorcycle licence.

### Best Premium Road-Legal Option: Vmoto Soco TC-Max
The [Vmoto Soco TC-Max](https://www.electricdirtbikeaustralia.com.au/shop/vmoto-soco-tc-max-electric/) from ASX-listed Vmoto Limited delivers full motorcycle-equivalent performance for riders wanting a genuine electric motorcycle riding experience with Australian dealer support.

### Best Off-Road Electric Motorcycle: Talaria Dragon
For riders wanting full-size electric enduro performance, the [Talaria Dragon](https://www.electricdirtbikeaustralia.com.au/shop/talaria-dragon-enduro/) combines an 88V battery with the proven Talaria oil-bath gearbox for genuine off-road motorcycle capability.

### Buying With Confidence
Every model listed here is genuine Australian stock through [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/), backed by a 12-month factory warranty and dispatched from our Mittagong NSW facility.`,
  },
  {
    slug: "talaria-sting-battery-upgrade-guide",
    title: "Talaria Sting Battery Upgrade Guide",
    excerpt: "Battery upgrade options for the Talaria Sting R in Australia.",
    category: "Guides",
    date: "2026-09-22",
    readTime: "5 min read",
    image: "/images/product-talaria-oem-battery.webp",
    content: `Owners of the [Talaria Sting R MX4](https://www.electricdirtbikeaustralia.com.au/shop/talaria-sting-r-mx4/) frequently ask about upgrading battery capacity for extended trail range, and there are genuine options worth understanding before modifying your bike.

### Stock Battery Configuration
The standard Talaria Sting R MX4 runs a 60V 45Ah battery pack delivering 8kW peak output, which comfortably covers most single-session trail riding for the average rider.

### Genuine Replacement vs Upgrade
A genuine [OEM 60V 45Ah replacement pack](https://www.electricdirtbikeaustralia.com.au/shop/talaria-oem-60v-45ah-replacement/) is the safest option when your original battery reaches end of life, since it's correctly matched to the bike's BMS and controller without voiding your factory warranty.

### Why We Don't Recommend Third-Party Voltage Upgrades
Fitting a higher-voltage, non-genuine battery pack can exceed the controller and motor's rated tolerances, risking component damage and voiding your 12-month factory warranty. Any capacity or voltage change should only be done through an authorised dealer using compatible, tested components.

### Getting the Right Advice
If you're chasing more range or power from your Talaria Sting R, speak with our Mittagong-based technicians first — we can advise on genuine upgrade paths that won't compromise reliability or warranty cover. All batteries sold through [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/accessories/) are genuine Australian stock.`,
  },
  {
    slug: "crypto-discount-electric-bike-australia",
    title: "How the 10% Crypto Discount Works at EDBA",
    excerpt: "How to save 10% paying for an electric dirt bike with crypto.",
    category: "Guides",
    date: "2026-09-23",
    readTime: "4 min read",
    image: "/images/theme_dirtbike_cover.jpg",
    content: `[Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/) offers an automatic 10% discount on any bike or accessory when you pay with Bitcoin, USDT, or ETH — a genuine way to reduce the total cost of your order.

### How to Qualify
Simply select crypto as your payment method at checkout. The 10% discount is calculated automatically off your subtotal before freight, with no minimum order value or promo code required.

### Which Cryptocurrencies Are Accepted
We currently accept Bitcoin (BTC), USDT, and ETH for order payment. Our Mittagong sales team will provide wallet payment details once your order is confirmed, along with the exact discounted total to send.

### Why We Offer It
Crypto payments settle quickly and reduce payment processing overhead, and we pass that saving directly back to the customer rather than keeping it as margin — a straightforward win for buyers on higher-value bikes like the [Stark Varg EX 80HP](https://www.electricdirtbikeaustralia.com.au/shop/stark-varg-ex-80hp/) or [Sur-Ron Ultra Bee](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-ultra-bee/).

### Combining With Other Terms
The crypto discount applies on top of standard free freight for orders over $1,500, and every bike still carries the full 12-month factory warranty regardless of payment method chosen.`,
  },
  {
    slug: "electric-dirt-bike-payid-australia",
    title: "Paying for Your Electric Dirt Bike with PayID",
    excerpt: "How PayID payments work when buying an electric dirt bike.",
    category: "Guides",
    date: "2026-09-24",
    readTime: "4 min read",
    image: "/images/hero_surron_trail_1790338185425.jpg",
    content: `PayID is one of the fastest and most straightforward ways to pay for an electric dirt bike order through [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/), and it's increasingly the preferred method for Australian buyers.

### What Is PayID
PayID lets you send a bank transfer using a simple identifier — like a phone number or email — linked to our business bank account, instead of entering full BSB and account number details manually.

### Why Buyers Prefer It
Payments sent via PayID through participating Australian banks typically clear within minutes rather than the one to two business days a standard bank transfer can take, meaning your order can be confirmed and dispatched faster.

### How to Pay With PayID
Once you place an order, our Mittagong sales team sends your PayID payment details along with the exact total due, including any applicable crypto discount or freight. Simply confirm payment through your banking app and reply with confirmation to trigger dispatch.

### Secure and Warranty-Backed
Regardless of payment method, every bike ordered through [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/) is genuine Australian stock with a 12-month factory warranty, dispatched from our Mittagong NSW facility.`,
  },
  {
    slug: "electric-bike-laws-qld-2026",
    title: "Electric Bike Laws QLD 2026: Power Limits, Age, Licence & Fines",
    excerpt: "Queensland e-bike rules from 31 August 2026: the 250W limit, 25 km/h assist cut-off, EN 15194 labels, rider age, licence, helmets and path speed limits.",
    category: "Legal & Safety",
    date: "2026-10-06",
    readTime: "8 min read",
    image: "/images/hero_surron_trail_1790338185425.jpg",
    imageAlt: "Rider on an electric bike on a Queensland trail, illustrating the 250W e-bike rules that apply from 31 August 2026",
    content: `Electric bike laws in Queensland changed on 31 August 2026. If you ride, buy or sell an e-bike in QLD, the power limit, the label on the frame, the rider's age and the licence requirement all matter now. This guide summarises the Queensland Government's Street Smarts e-bike page as checked on 6 October 2026. Rules and fines can change, so always confirm on the [official Queensland e-bike page](https://streetsmarts.initiatives.qld.gov.au/e-bikes-e-scooters/e-bikes/) before you ride or buy.

### What counts as a legal e-bike in Queensland
A legal e-bike has a maximum continuous motor output of 250 watts, and the motor only assists up to 25 km/h. Above 25 km/h the motor cuts off and any further speed has to come from the rider pedalling. Pedals must be the primary source of power, so pedalling is required.

### The EN 15194 label
Queensland requires e-bikes to carry a label showing they comply with the European standard for electrically power-assisted cycles, EN 15194. The Queensland Government says riders have until 28 February 2027 to make sure their e-bike is correctly labelled. If you are buying a new e-bike, check for the EN 15194 label on the frame before you pay.

### Throttle rules
A throttle is treated strictly. According to the Queensland page, devices that can be ridden by throttle alone above 6 km/h, with no pedalling, are illegal. A walk-assist or start-assist throttle that only works at very low speed is the safe design to look for.

### Rider age and licence
Riders must be 16 or older, and must hold a valid driver licence, which can be as low as a Learner licence. The page lists a $518 fine for each of these offences. It also mentions exemptions, including supervised riders aged 12 to 17 and designated recreational areas, so read the exact conditions on the official page rather than relying on a summary.

### Helmets and where you can ride
A helmet must be properly fastened under the chin, and the page lists a $518 fine. Both bicycle and motorbike helmets are approved. On footpaths there is a 12 km/h speed limit at all times, and 12 km/h when passing pedestrians on shared paths. E-bikes cannot be ridden on motorways or where riding is prohibited.

### What about off-road electric dirt bikes?
Higher-powered off-road bikes such as a Sur-Ron or Talaria are not 250W e-bikes. They are supplied for private property and designated off-road areas, and they are not covered by the e-bike rules above. Read our guide on whether [electric dirt bikes are legal in Australia](https://electricdirtbikeaustralia.com.au/blog/are-electric-dirt-bikes-legal-in-australia/) and browse the [electric dirt bikes for sale](https://electricdirtbikeaustralia.com.au/electric-dirt-bikes/) range with that use in mind.

### Buying an e-bike in Queensland
Look for a 250W motor, a 25 km/h assist limit and the EN 15194 label. Our [electric bikes for sale](https://electricdirtbikeaustralia.com.au/electric-bikes/) page lists 250W commuter models, and our [Brisbane delivery guide](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/brisbane/) explains freight to Queensland. For the national picture, see our [Australian e-bike laws guide](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/e-bike-laws-australia/) and the NSW equivalent, [electric bike regulations NSW](https://electricdirtbikeaustralia.com.au/blog/electric-bike-regulations-nsw-2026/).

### Safety links
For battery charging and storage advice, see the Queensland Fire Department's [lithium-ion battery safety page](https://www.fire.qld.gov.au/safety-education/battery-and-charging-safety/lithium-ion-battery-safety).

### Who can ride: exemptions in detail
The 16-and-licensed rule has listed exceptions. The Queensland page says supervised riders aged 12 to 17 can ride under parental supervision, as long as the supervisor stays close enough to give instructions. It lists medical exemptions for riders aged 16 and over who cannot hold a licence because of a disability. It also says designated recreational areas, such as rail trails, mountain bike trails and private off-road facilities, allow riders who are unlicensed or under 16. These are conditions, not blanket permission, so read the wording on the official page if a child or a rider without a licence will be using the bike.

### Fines listed by Queensland
The Queensland page lists a $518 fine for riding under 16, a $518 fine for riding without a valid driver licence and a $518 fine for an unfastened helmet. Riding faster than 12 km/h on a footpath, or when passing pedestrians on a shared path, carries a fine in a range from $345 to $1,986. Holding a mobile phone while riding is listed at $1,295, carrying a passenger on a bike not designed for one is $518, and exceeding the 0.05 breath alcohol limit is listed in a range from $518 to $6,908. Parking so that you block a path or crossing is listed at $172. Fines and amounts change, so use the official page as the authority.

### Equipment and behaviour rules
Riders must obey traffic lights and stop and give-way signs and keep left. The page tells riders to ring a bell to warn pedestrians as they approach and to slow down to pass. It says a rider must stop and assist after a crash and exchange details with others involved. Drivers must leave a minimum passing distance of 1 metre in zones of 60 km/h or less. A phone in a cradle mount is treated differently from a phone held in the hand, but check the page for the exact wording.

### Illegal devices and modifications
Internal combustion engines are not allowed on a legal e-bike. Devices that can be ridden solely by throttle above 6 km/h, with no pedalling, are illegal, and so are unregistered dirt bikes ridden on the road. The page says police can seize and destroy clearly illegal devices. Any modification that lifts the motor above 250 watts, removes the 25 km/h cut-off or adds a throttle that works at speed turns a legal e-bike into an illegal device, and the label and the real behaviour of the bike have to match.

### The EN 15194 assurance scheme
The Queensland page says a new assurance scheme will certify devices that meet the 250 watt and 25 km/h specifications, and that riders have until 28 February 2027 to make sure their bike carries the correct EN 15194 label. For a buyer the practical step is simple: ask the seller where the label is on the frame, check that it says EN 15194, and keep a copy of the specification sheet and the receipt.

### How Queensland compares with other states
Queensland is not alone in moving to 250 watts. The Victoria Police e-bike page lists a 250 watt maximum, a motor that cuts off at 25 km/h, functioning pedals, at least one working brake and a bell or warning device, and says people of any age can ride an e-bike in Victoria without a licence and that you cannot register an e-bike. Western Australia lists 250 watts for a bike that complies with EN 15194 (a Pedalec) and 200 watts for others, and says riders must be 16 or older. NSW currently allows e-bikes up to 500 watts but has announced a move to 250 watts and EN 15194; see our [NSW e-bike regulations guide](https://electricdirtbikeaustralia.com.au/blog/electric-bike-regulations-nsw-2026/). If you ride across state lines, follow the rules of the state you are in. The official pages are the [Victoria Police e-bike safety page](https://www.police.vic.gov.au/e-bike-safety) and the [WA Road Safety Commission bicycle riders page](https://www.wa.gov.au/organisation/road-safety-commission/bicycle-riders).

### A buyer's checklist for Queensland
Before you pay for an e-bike in Queensland, check the motor rating is 250 watts continuous, check the assist stops at 25 km/h, confirm the throttle, if there is one, cannot drive the bike above 6 km/h without pedalling, find the EN 15194 label and confirm that the person who will ride it is 16 or older with a licence, or fits one of the listed exemptions. Then budget for a helmet that fastens properly under the chin and a bell.

### Battery safety for Queensland riders
The Queensland Fire Department publishes advice on charging and storing lithium-ion batteries at its [lithium-ion battery safety page](https://www.fire.qld.gov.au/safety-education/battery-and-charging-safety/lithium-ion-battery-safety). The Queensland e-bike page also tells riders to use the correct charger, remove the device from charge when it is full, and watch for swelling, discolouration or odours after a crash. Our [e-bike safety guide](https://electricdirtbikeaustralia.com.au/blog/e-bike-safety-australia-guide/) collects the main points.

### Quick compliance steps for Queensland riders
If you already own an e-bike, check three things this week: the power rating printed on the motor or in the manual, whether the frame carries an EN 15194 label, and whether the throttle drives the bike above 6 km/h without pedalling. If any answer is no or unknown, ask the seller or manufacturer for written confirmation. The Queensland page gives riders until 28 February 2027 to sort out labelling, so there is time to fix a missing label, but not to ignore it.

### Where to buy: e-bikes for sale in Brisbane and Queensland
Looking for e-bikes for sale in Queensland? Electric Dirt Bike Australia ships to every Queensland postcode. Our [electric bikes for sale](https://electricdirtbikeaustralia.com.au/electric-bikes/) page lists 250 watt commuters, fat tyre e-bikes and kids bikes with their published specifications, and several electric bikes on sale show the saving against the original price. For electric bikes for sale Brisbane shoppers, our [Brisbane delivery guide](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/brisbane/) explains freight. Free freight applies on orders over $1,500 AUD and a 10% discount applies when you pay with crypto or PayID. Bikes supplied by Ampd Bros ship from the Gold Coast, and the supplier lists QLD delivery at 2 to 6 days. Whichever bike you choose, check it against the Queensland rules above, especially the EN 15194 label, before you ride it on public paths and roads.

### Quick answers

What is the e-bike power limit in Queensland? The Queensland Government lists a maximum continuous motor output of 250 watts, with motor assistance only up to 25 km/h.

How old do you have to be to ride an e-bike in Queensland? The rules in effect from 31 August 2026 say riders must be 16 or older and hold a valid driver licence, which can be a Learner licence. The page lists exemptions, so read the exact conditions on the official page.

Does an e-bike need an EN 15194 label in Queensland? Yes. Queensland requires a label showing compliance with EN 15194, and riders have until 28 February 2027 to make sure their e-bike is correctly labelled.

### Official sources and further reading
The primary source for this guide is the [Queensland Government Street Smarts e-bike page](https://streetsmarts.initiatives.qld.gov.au/e-bikes-e-scooters/e-bikes/). For battery safety see the [Queensland Fire Department lithium-ion battery safety page](https://www.fire.qld.gov.au/safety-education/battery-and-charging-safety/lithium-ion-battery-safety) and the [ACCC Product Safety page on e-micromobility devices](https://www.productsafety.gov.au/business/e-bikes-e-scooters-and-other-e-micromobility-devices). For how e-bike power and speed limits are defined in different countries, the [Wikipedia article on electric bicycle laws](https://en.wikipedia.org/wiki/Electric_bicycle_laws) gives background.`,
  },
  {
    slug: "electric-bike-regulations-nsw-2026",
    title: "Electric Bike Regulations NSW 2026: Certification, 250W Cap & Rules",
    excerpt: "NSW e-bike regulations explained: the current 500W limit, the planned 250W cap, EN 15194 certification, helmets, licences and where e-bikes can be ridden.",
    category: "Legal & Safety",
    date: "2026-10-06",
    readTime: "8 min read",
    image: "/images/hero_talaria_ridge_1790338208529.jpg",
    imageAlt: "Commuter e-bike parked beside a Sydney shared path, illustrating NSW e-bike regulations and the planned 250W limit",
    content: `Electric bike regulations in NSW are in transition. E-bikes up to a set power limit can be ridden like bicycles, but the Government has announced a lower power cap and a certification requirement that is being phased in. This guide summarises the NSW Government's e-bike FAQ as checked on 6 October 2026. Rules change, so confirm on the [official NSW e-bike page](https://www.nsw.gov.au/driving-boating-and-transport/bikes-e-bikes-e-scooters) before you buy or ride.

### What is a legal e-bike in NSW today
The NSW Government says e-bikes powered up to 500 watts are currently legal. A legal e-bike has a motor that cuts out when it reaches 25 km/h or when pedalling stops. Any throttle, or walk-assist feature, must cut out at 6 km/h.

### The planned 250W cap
In December 2025 the NSW Government announced plans to cap the continuous rated power of e-bikes at 250 watts. The page describes the change as being phased in over the coming years, so an e-bike that is legal today may not be legal in future. If you are choosing a new commuter, a 250W bike with an EN 15194 mark is the safest long-term choice.

### NSW e-bike certification laws
Two separate dates matter. The NSW page says that from 1 March 2029 e-bikes used on NSW roads must comply with the EN 15194 standard, and to look for the EN 15194 EPAC mark. It also says that from 1 February 2026 e-micromobility products must be tested and certified and carry an approval mark. Ask the seller to show you the certification before you buy.

### Registration, licence and helmets
Like a regular bicycle, a legal e-bike does not need to be registered, and the rider does not need a driver licence. The page lists a fine for riding without a helmet, from $423, so wear an approved helmet. It does not state a minimum rider age, so check the page and the road rules for the latest position.

### Where you can ride a legal e-bike
Legal e-bikes can be used on roads, including bicycle lanes, on shared paths and on bicycle paths. They cannot be used where signs say no bicycles, and adult riders are not allowed to ride on the footpath.

### Off-road electric dirt bikes and electric motorcycles
High-powered bikes such as the Sur-Ron, Talaria and Stark Varg are not e-bikes under these rules. They are for private property and off-road areas, and any road-registered electric motorcycle follows motorcycle registration and licence rules, not the e-bike rules. Our guides to [electric bike registration in NSW](https://electricdirtbikeaustralia.com.au/blog/electric-bike-registration-nsw-guide/) and [electric dirt bike licence requirements](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-licence-requirements-australia/) cover that side.

### Shopping for a compliant e-bike in NSW
Browse our [electric bikes for sale](https://electricdirtbikeaustralia.com.au/electric-bikes/) and the RTR eBike range, which is listed as 250W with a 25 km/h assist limit. For Sydney buyers, our [Sydney delivery guide](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/sydney/) explains freight. See the [Queensland rules](https://electricdirtbikeaustralia.com.au/blog/electric-bike-laws-qld-2026/) and our [Australian e-bike laws guide](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/e-bike-laws-australia/) for how the states compare. For battery safety, read the [NSW Government lithium-ion battery safety page](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices).

### The NSW timeline at a glance
The NSW Government page sets out a transition. Today, e-bikes up to 500 watts are legal on NSW roads. The Government announced in December 2025 that it plans to cap the continuous rated power of e-bikes at 250 watts. The page describes a transition period from 2026 to 2029 and says that from 1 March 2029 e-bikes must be 250 watts or less and comply with the European Standard EN 15194, which means bikes between 251 and 500 watts that are legal today will become illegal. Separately, from 1 February 2026 the page says e-micromobility products must be tested and certified and carry an approval mark.

### What the 25 km/h and 6 km/h rules mean
A legal e-bike has a motor that stops providing power at 25 km/h or when you stop pedalling. Any throttle or walk-assist feature must cut out at 6 km/h. In practice that means a throttle can help you start from a standstill or walk the bike, but the bike cannot be ridden by throttle alone at speed. A bike that can is not a legal e-bike in NSW.

### Modifications make a bike illegal
The NSW page says modifying an e-bike so that it exceeds the power limit, can be ridden on throttle alone or goes faster than 25 km/h makes it illegal. A modified bike is then treated as a motor vehicle, with registration and licensing requirements. Do not buy a bike that has been "unlocked" or advertised as derestrictable if you want to ride it on the road or on shared paths.

### Fines listed for NSW riders
The NSW page lists a fine from $423 for riding without a helmet, $562 for reckless riding and $140 for adults riding on a footpath. It also notes that people under 16 and others with specific exemptions can ride on the footpath. The page does not state a minimum rider age or specific penalties for riding an illegal e-bike beyond the general motor vehicle penalties, so check the road rules or the page itself for the latest position.

### What the page does not say
The NSW e-bike FAQ does not describe the look of the EN 15194 mark, does not set rules on carrying passengers or mandatory lights and bells, and does not give insurance details. For lights, bells and general bicycle rules, check the NSW road rules for bicycle riders.

### NSW compared with Queensland, Victoria and Western Australia
Queensland already requires 250 watts, a 25 km/h assist limit and an EN 15194 label, and has set a minimum rider age of 16 with a licence from 31 August 2026; see our [Queensland e-bike laws guide](https://electricdirtbikeaustralia.com.au/blog/electric-bike-laws-qld-2026/). Victoria lists 250 watts, any age, no licence and no registration on the [Victoria Police e-bike safety page](https://www.police.vic.gov.au/e-bike-safety). Western Australia lists 250 watts for EN 15194 bikes and a minimum age of 16 on the [WA Road Safety Commission page](https://www.wa.gov.au/organisation/road-safety-commission/bicycle-riders). The direction across the states is similar: a bicycle with a small assistive motor, not a motorbike.

### Buying an e-bike that will stay legal
Because the NSW cap is moving to 250 watts and EN 15194, the lowest-risk purchase today is a bike that already meets both. Ask the seller for the EN 15194 mark and the continuous power rating, not just a peak figure. A 500 watt bike that is legal today is a bike you may not be able to ride on NSW roads from 2029.

### Off-road bikes and registered motorcycles
Electric dirt bikes and electric motorcycles are covered by different rules. An off-road bike such as a Sur-Ron or Talaria is for private property and designated off-road areas. A road-registered electric motorcycle or moped follows motorcycle registration and licence rules; see our [electric moped and LAMS guide](https://electricdirtbikeaustralia.com.au/blog/electric-moped-vs-e-scooter-australia-lams-guide/) and the [Australian electric motorcycle guide](https://electricdirtbikeaustralia.com.au/blog/australian-electric-motorcycle-guide-2026/).

### Battery safety rules in NSW
The [NSW Government lithium-ion battery page](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices) advises looking for an electrical safety approval mark on the vehicle, battery and charger, buying a battery recommended by the manufacturer, never using a second-hand battery and never charging while asleep. It also says to charge on hard non-flammable surfaces, store batteries in a cool dry place away from sunlight and living areas, and stop using a battery that swells, leaks, overheats or smokes.

### Quick compliance steps for NSW riders
Check the continuous power rating, not the peak figure, and confirm whether the bike is 250 watts or between 251 and 500 watts. Check that any throttle or walk-assist cuts out at 6 km/h. Ask whether the bike carries an EN 15194 mark, because that becomes a requirement for NSW roads from 1 March 2029. Keep the manual and receipt, and do not modify the bike to exceed the limits.

### Common NSW questions answered
Can I convert my e-bike to go faster? The NSW page says modifying an e-bike to exceed the power limit, enable throttle-only riding or go faster than 25 km/h makes it illegal, and a modified bike is treated as a motor vehicle. What if I buy online from overseas? The bike still has to meet NSW rules on power, speed cut-off and throttle, so ask for the continuous power rating and the specification before you pay, and be cautious about listings that only quote peak power. What if my 500 watt e-bike is legal today? It is legal now, but the planned 250 watt cap and the EN 15194 requirement from 1 March 2029 mean it may not be legal on NSW roads in future, so plan ahead before you invest in a high-power bike for commuting.

### Where to buy: e bikes for sale Sydney
Searching for e bikes for sale Sydney? Electric Dirt Bike Australia dispatches from Mittagong NSW 2575 and ships Australia-wide, and our [Sydney delivery guide](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/sydney/) explains freight. If you are comparing e bike price in Australia, our [electric bikes for sale](https://electricdirtbikeaustralia.com.au/electric-bikes/) page lists published prices, for example the RTR eBike Pro at $3,490 AUD and the RTR eBike S Classic at $2,790 AUD, both described as 250 watt commuters. Anyone who wants an electric bike for sale Sydney buyers can order online should check the continuous power rating and the EN 15194 mark in the specification before paying. Free freight applies on orders over $1,500 AUD and crypto or PayID payments receive 10% off at checkout.

### Quick answers

Is the NSW e-bike limit 250W or 500W? The NSW Government says e-bikes powered up to 500 watts are currently legal, and it announced in December 2025 plans to cap continuous rated power at 250 watts.

Do I need to register an e-bike in NSW? No. According to the NSW page, a legal e-bike does not need to be registered and the rider does not need a driver licence.

When does EN 15194 certification become required in NSW? The NSW page says that from 1 March 2029 e-bikes used on NSW roads must comply with EN 15194.

### Official sources and further reading
The primary source is the [NSW Government e-bike FAQ and rules page](https://www.nsw.gov.au/driving-boating-and-transport/bikes-e-bikes-e-scooters/bicycles-electric-bikes/e-bike-faqs). Battery guidance is on the [NSW Government lithium-ion battery page](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices), national product safety work is described on the [ACCC Product Safety page](https://www.productsafety.gov.au/business/e-bikes-e-scooters-and-other-e-micromobility-devices) and the [Wikipedia article on electric bicycles](https://en.wikipedia.org/wiki/Electric_bicycle) explains how pedal assist works.`,
  },
  {
    slug: "australian-electric-motorcycle-guide-2026",
    title: "Australian Electric Motorcycle Guide 2026: Models, LAMS & Prices",
    excerpt: "An Australian electric motorcycle guide: road-legal models with LAMS approval, Australian-engineered bikes, what the range and price figures mean, and how registration works.",
    category: "Guides",
    date: "2026-10-06",
    readTime: "7 min read",
    image: "/images/product-niu-nqi-gt.webp",
    imageAlt: "NIU NQi GT electric moped, a LAMS-approved road-legal electric motorcycle sold in Australia",
    content: `If you are searching for an Australian electric motorcycle, you usually want one of two things: an electric motorcycle you can buy and register in Australia, or a bike that is designed or built here. This guide covers both, using the models and specifications in our range, and explains the basics of LAMS and registration. For current registration rules, always check your state transport authority.

### Road-registered electric motorcycles and mopeds
The [NIU NQi GT electric moped](https://electricdirtbikeaustralia.com.au/shop/niu-nqi-gt-electric-moped/) is listed as LAMS approved, with a 3,000 watt motor, a 72V 26Ah dual removable battery, a 70 km/h top speed and up to 100 km of range on dual batteries, at $5,990 AUD. The [Super Soco CPx](https://electricdirtbikeaustralia.com.au/shop/super-soco-cpx-electric-moped/) is listed at 3kW, 65 km/h and 90 km of range for $5,490 AUD. The [Vmoto Soco TC-Max](https://electricdirtbikeaustralia.com.au/shop/vmoto-soco-tc-max-electric/) is a 5kW road-legal electric motorcycle listed at 95 km/h and 120 km of range with WP adjustable suspension, for $8,990 AUD, and is described as LAMS compliant for road registration.

### What LAMS means
LAMS is the Learner Approved Motorcycle Scheme. A LAMS-approved bike can be ridden by a learner or provisional motorcycle licence holder. The NIU NQi GT is listed as LAMS approved and legal for L and P-plate riders in all states, but you still need the correct licence and registration for your state.

### Australian-engineered electric bikes
Stealth Electric Bikes is listed in our range as an Australian engineered brand based in Melbourne. The [Stealth B-52 Bomber](https://electricdirtbikeaustralia.com.au/shop/stealth-b-52-bomber/) is listed at 5.2kW, 80 km/h and up to 100 km of range, weighing 53 kg, at $12,990 AUD. The Stealth bikes are sold as off-road electric bikes for private property and tracks, so check before you assume any model can be registered.

### Off-road electric motorcycles
The [Sur-Ron Ultra Bee](https://electricdirtbikeaustralia.com.au/shop/sur-ron-ultra-bee/) at 12.5kW and 90 km/h, the [Talaria Dragon](https://electricdirtbikeaustralia.com.au/shop/talaria-dragon-enduro/) at 28kW and 110 km/h and the [Stark Varg EX 80HP](https://electricdirtbikeaustralia.com.au/shop/stark-varg-ex-80hp/) are high-performance off-road machines. They are supplied for private property and designated off-road areas. Browse them in our [electric motorcycles for sale](https://electricdirtbikeaustralia.com.au/electric-motorcycles/) category.

### How to read range and power figures
Range figures in our listings are manufacturer figures such as "up to" 100 km, and real range depends on speed, rider weight, terrain and temperature. Power is given in watts or kilowatts, and peak output is higher than continuous output.

### Registration and licence
Road registration, licence class and insurance depend on your state. Our guides to [road legal electric motorcycles in Australia](https://electricdirtbikeaustralia.com.au/blog/road-legal-electric-motorcycle-australia-guide/) and [electric motorbikes vs petrol](https://electricdirtbikeaustralia.com.au/blog/electric-motorbike-vs-petrol-australia-2026/) explain more. For basics on electric motorcycle technology, see the [Wikipedia overview of electric motorcycles and scooters](https://en.wikipedia.org/wiki/Electric_motorcycles_and_scooters).

### Three kinds of Australian electric motorcycle
The phrase covers three different buyers. The first wants a road-registered electric motorcycle or moped that is sold in Australia and can be registered in their state. The second wants a bike designed or built in Australia. The third wants a high-power off-road electric motorcycle for trails, tracks and private property. Each group needs different information, so this guide keeps them separate.

### Road electric motorcycles and mopeds in detail
The [NIU NQi GT](https://electricdirtbikeaustralia.com.au/shop/niu-nqi-gt-electric-moped/) has a 3,000 watt motor, a 72V 26Ah dual removable lithium battery, a 70 km/h top speed, up to 100 km of range on dual batteries and a 98 kg weight. The [Super Soco CPx](https://electricdirtbikeaustralia.com.au/shop/super-soco-cpx-electric-moped/) has a 3kW motor, a 60V 30Ah removable battery, a 65 km/h top speed, 90 km of range, an 85 kg weight, keyless Bluetooth start and regenerative braking. The [Vmoto Soco TC-Max](https://electricdirtbikeaustralia.com.au/shop/vmoto-soco-tc-max-electric/) steps up to 5kW with a dual removable 4.8kWh battery, a 95 km/h top speed, 120 km of range, WP adjustable suspension and a 117 kg weight. Removable batteries let you charge at home or in an office without wheeling the bike inside.

### How much does an electric motorcycle cost
In our range the road models run from $5,490 AUD for the Super Soco CPx to $5,990 AUD for the NIU NQi GT and $8,990 AUD for the Vmoto Soco TC-Max. Divide the price by the listed range to compare value: the NIU works out at about $60 per listed kilometre, the Super Soco at about $61 and the Vmoto at about $75, though each range figure is a manufacturer "up to" number and depends on how you ride. The Vmoto costs more per kilometre but adds power, top speed and suspension.

### Registration, licence and insurance
Road registration, the licence class needed and insurance are set by each state. A LAMS-approved bike such as the NIU NQi GT can be ridden by a learner or provisional motorcycle licence holder, but you still need the right licence, registration and a roadworthy bike. Compulsory third-party insurance is arranged differently in each state, so check your state authority. Our guides to [electric bike registration in NSW](https://electricdirtbikeaustralia.com.au/blog/electric-bike-registration-nsw-guide/) and [road legal electric motorcycles](https://electricdirtbikeaustralia.com.au/blog/road-legal-electric-motorcycle-australia-guide/) cover the process.

### Australian-engineered bikes
Stealth Electric Bikes is an Australian brand based in Melbourne, listed in our range as Australian engineered. Our product listings describe the [Stealth B-52 Bomber](https://electricdirtbikeaustralia.com.au/shop/stealth-b-52-bomber/) as designed and engineered in Melbourne, with a chromoly steel monocoque frame, a 9-speed sequential gearbox and inverted front suspension, producing 5.2kW from a 2.5kWh battery for an 80 km/h top speed and up to 100 km of trail range at 53 kg. The [Stealth H-52 competition bike](https://electricdirtbikeaustralia.com.au/shop/stealth-h-52-competition/) is a 5.2kW track machine at 49 kg. These are off-road bikes, and a buyer who wants an Australian-engineered bike should check how the model can legally be used.

### High-power off-road electric motorcycles
For trail and enduro riding, the [Sur-Ron Ultra Bee](https://electricdirtbikeaustralia.com.au/shop/sur-ron-ultra-bee/) is 12.5kW with 440 Nm of rear-wheel torque and a 4,070Wh battery, the [Talaria Dragon](https://electricdirtbikeaustralia.com.au/shop/talaria-dragon-enduro/) is 28kW with a 5,100Wh battery and the [Stark Varg EX 80HP](https://electricdirtbikeaustralia.com.au/shop/stark-varg-ex-80hp/) is 80 horsepower with 938 Nm of torque. They are supplied for private property and designated off-road areas, not for the road. See our [high-performance electric dirt bike guide](https://electricdirtbikeaustralia.com.au/blog/high-performance-electric-dirt-bike-australia/) for a full comparison.

### Electric motorcycle vs petrol motorcycle
An electric motorcycle has no gearbox to shift on most models, runs quietly and has no oil changes, spark plugs or fuel stops. The trade-offs are range, which is limited by battery size, and charging time. Our guide to [electric motorbikes vs petrol](https://electricdirtbikeaustralia.com.au/blog/electric-motorbike-vs-petrol-australia-2026/) compares costs in detail, and our [running cost comparison](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-vs-petrol-motocross-running-costs/) covers off-road bikes.

### What to check before you buy
Check the legal status of the exact model in your state, the licence class you hold, the battery warranty and what happens to range as the battery ages, and whether the battery is removable for charging. Confirm delivery, the warranty and spare parts availability. Our 12-month Australian warranty and local parts support are listed on the [warranty and service](https://electricdirtbikeaustralia.com.au/warranty-and-service/) page.

### Charging an electric motorcycle at home
The road models in this guide use removable batteries or large packs, so plan where you will charge. Removable batteries can be carried indoors, but should still be charged on a hard non-flammable surface and not left charging unattended. Use the charger that came with the bike, keep the connector clean and follow the storage advice on the [NSW Government lithium-ion battery page](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices).

### Test ride checklist for an electric motorcycle
When you test ride, check how the throttle responds at low speed, how strongly the regenerative braking slows the bike, how the seat and bars fit your body, how heavy the bike feels when you push it, and how the display shows battery level. Ask how the removable battery is released and how heavy each pack is. For a LAMS-approved bike, ask the seller to confirm in writing that the exact model and year is LAMS approved in your state.

### Costs beyond the purchase price
The price of the bike is only part of owning an electric motorcycle. Budget for registration and the compulsory insurance your state requires, a certified helmet and riding gear, a good lock, and the time and space to charge at home. Over time you will also pay for tyres, brake pads and servicing, and eventually a battery replacement. Ask the seller what the battery warranty covers and what a replacement battery costs, because that is the largest single running cost on any electric motorcycle. Our guide to [electric dirt bike battery lifespan and replacement cost](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-battery-lifespan-replacement-cost/) explains how to think about it.

### Where to buy: electric motorcycle for sale in Australia
If you are looking for an electric motorcycle for sale, Electric Dirt Bike Australia stocks road-legal mopeds and motorcycles alongside off-road models, and ships from Mittagong NSW to every state. Shoppers comparing electric motorbikes for sale can browse our [electric motorcycles](https://electricdirtbikeaustralia.com.au/electric-motorcycles/) and [electric motor bikes](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/) categories, and anyone ready to order an electric motorbike for sale can add the NIU NQi GT, Super Soco CPx or Vmoto Soco TC-Max to the cart on its product page. Free freight applies to orders over $1,500 AUD, crypto and PayID payments receive 10% off, and each bike carries a 12-month Australian warranty.

### Quick answers

Which electric motorcycles in your range are LAMS approved? The NIU NQi GT is listed as LAMS approved, and the Vmoto Soco TC-Max is listed as LAMS compliant for road registration.

Is there an Australian-engineered electric motorcycle? Stealth Electric Bikes is listed as an Australian engineered brand based in Melbourne. Its bikes in our range, such as the B-52 Bomber, are off-road bikes.

How far can a road-legal electric motorcycle go? Our listings give "up to" figures: 100 km for the NIU NQi GT on its dual battery and 120 km for the Vmoto Soco TC-Max. Real range depends on speed, load and conditions.

### Official sources and further reading
For background on electric motorcycle technology see the [Wikipedia overview of electric motorcycles and scooters](https://en.wikipedia.org/wiki/Electric_motorcycles_and_scooters). For battery safety see the [NSW Government lithium-ion battery page](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices) and the [Queensland Fire Department page](https://www.fire.qld.gov.au/safety-education/battery-and-charging-safety/lithium-ion-battery-safety).`,
  },
  {
    slug: "e-ride-pro-australia-buyers-guide",
    title: "E-Ride Pro Australia: Buyer's Guide to the Range, Prices & Delivery",
    excerpt: "Looking for E-Ride Pro in Australia? Compare the E-Ride Pro-SS 2.0 and Pro-SR by power, battery, range and price, and see how delivery and warranty work.",
    category: "Guides",
    date: "2026-10-06",
    readTime: "7 min read",
    image: "/images/product-e-ride-pro-s17.webp",
    imageAlt: "E-Ride Pro electric dirt bike with 72V battery, sold in Australia with delivery from Mittagong NSW",
    content: `If you searched for E-Ride Pro, you are probably looking for the electric dirt bikes sold under the E-Ride Pro name. Electric Dirt Bike Australia stocks two E-Ride Pro models, the Pro-SS 2.0 and the Pro-SR, and this page explains what each one offers, what it costs and how to buy. All specifications below are the figures in our product listings.

### E-Ride Pro-SS 2.0
The [E-Ride Pro-SS 2.0](https://electricdirtbikeaustralia.com.au/shop/e-ride-pro-ss-2-0/) is a 72V 40Ah bike with 12kW of peak power, a 2,880Wh battery using Samsung 50E / Molicel cells, a 95 km/h top speed and up to 105 km of range, at 64 kg. Suspension is Fastace dual-air tuned inverted forks. It is priced at $8,690 AUD, down from $9,190.

### E-Ride Pro-SR
The [E-Ride Pro-SR](https://electricdirtbikeaustralia.com.au/shop/e-ride-pro-sr/) steps up to 15kW of peak power with a 72V 45Ah, 3,240Wh high-discharge battery. It is listed at 100+ km/h with up to 120 km of range and a weight of 67 kg, and it is priced at $9,990 AUD, down from $10,590.

### SS 2.0 or SR?
The SR has more power and a larger battery, so it suits heavier riders, steeper terrain and riders who want the highest top speed. The SS 2.0 has less peak power but is lighter and less expensive. Our direct comparison, [E-Ride Pro SS 2.0 vs SR](https://electricdirtbikeaustralia.com.au/blog/e-ride-pro-ss-2-0-vs-sr-specs-price/), sets the numbers out side by side.

### More E-Ride Pro reading
Read our long-form [E-Ride Pro Australia review](https://electricdirtbikeaustralia.com.au/blog/e-ride-pro-australia-review/), then compare against the [Sur-Ron Light Bee X](https://electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) and the [Talaria Sting R MX4](https://electricdirtbikeaustralia.com.au/shop/talaria-sting-r-mx4/). To see every high-power model, browse all [electric dirt bikes for sale](https://electricdirtbikeaustralia.com.au/electric-dirt-bikes/).

### What E-Ride Pro offers
E-Ride Pro is listed in our range as a 72V platform that delivers 12kW to 15kW of factory power without aftermarket upgrades. The two models we stock, the Pro-SS 2.0 and the Pro-SR, are full-size electric dirt bikes aimed at trail, enduro and open fire-trail riding. The brand data in our catalogue describes native 72V high-voltage platforms, which is the reason the bikes are marketed on out-of-the-box power.

### Specifications compared with other 72V bikes
The Pro-SS 2.0 has 12kW and a 2,880Wh battery. That is the same peak power class as the [RFN Ares Rally Pro](https://electricdirtbikeaustralia.com.au/shop/rfn-ares-rally-pro/) at 12.5kW and the [Velimotor VMX12](https://electricdirtbikeaustralia.com.au/shop/velimotor-vmx12-motocross/) at 12kW, and a similar class to the [Sur-Ron Ultra Bee](https://electricdirtbikeaustralia.com.au/shop/sur-ron-ultra-bee/) at 12.5kW. The Pro-SR has 15kW, the same peak power as the Arctic Leopard E-XE 880. Weight is similar across the group, with the Pro-SS 2.0 at 64 kg and the Pro-SR at 67 kg, against 68 kg for the RFN Ares and 85 kg for the Ultra Bee.

### Value per dollar
Using listed prices and peak power, the Pro-SS 2.0 delivers about 1.38 kW of peak power per $1,000 and the Pro-SR about 1.50 kW per $1,000. In battery terms, the Pro-SS 2.0 has about 331 Wh per $1,000 and the Pro-SR about 324 Wh per $1,000. These are simple ratios from the published specifications, not a measure of ride quality, but they show that the two bikes sit close together on value, so choose on power and range needs.

### Suspension and handling
The Pro-SS 2.0 uses Fastace dual-air tuned inverted forks. The listings describe the SS 2.0 as a hyper-trail bike with a turbo boost button and inverted high-travel suspension, and the SR as the pinnacle of the factory 72V range with upgraded 4-piston calipers. Take a test ride or ask our team about suspension setup for your weight before you buy.

### Charging and battery
The listed battery sizes are 2,880Wh for the Pro-SS 2.0 and 3,240Wh for the Pro-SR. Use the charger made for a 72V pack, charge on a hard non-flammable surface, and follow the battery safety advice in our [e-bike safety guide](https://electricdirtbikeaustralia.com.au/blog/e-bike-safety-australia-guide/). Our [accessories](https://electricdirtbikeaustralia.com.au/accessories/) page lists chargers and replacement packs.

### Warranty, parts and service
Every bike from Electric Dirt Bike Australia carries a 12-month Australian warranty, and genuine parts are stocked at our Mittagong NSW workshop. See the [warranty and service](https://electricdirtbikeaustralia.com.au/warranty-and-service/) page for what is covered.

### Rider fit and experience level
Both models are full-size bikes with high power. If you are new to electric dirt bikes, start in a lower power mode, wear a certified helmet and full protective gear, and build up gradually. Riders who want a lighter bike near 50 kg should look at the [Sur-Ron Light Bee X](https://electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/), and heavier riders who want more power should compare the Pro-SR with the [Talaria Dragon](https://electricdirtbikeaustralia.com.au/shop/talaria-dragon-enduro/).

### Related guides
Read the [E-Ride Pro Australia review](https://electricdirtbikeaustralia.com.au/blog/e-ride-pro-australia-review/), the direct [E-Ride Pro SS 2.0 vs SR comparison](https://electricdirtbikeaustralia.com.au/blog/e-ride-pro-ss-2-0-vs-sr-specs-price/) and the [adult electric dirt bike guide](https://electricdirtbikeaustralia.com.au/blog/adult-electric-dirt-bike-australia-best-models/).

### How E-Ride Pro compares with the Sur-Ron and Talaria
The two lightest popular bikes in our range sit well below E-Ride Pro on power. The [Sur-Ron Light Bee X](https://electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) is 6kW with a 2,400Wh battery, 75 km/h and 50 kg at $6,490 AUD, and the [Talaria Sting R MX4](https://electricdirtbikeaustralia.com.au/shop/talaria-sting-r-mx4/) is 8kW with a 2,700Wh battery, 85 km/h and 63 kg at $7,290 AUD. The E-Ride Pro-SS 2.0 adds 4kW to 6kW of peak power over those bikes, a 2,880Wh battery and a 95 km/h top speed for $1,400 to $2,200 more, and the Pro-SR adds more again. If you want the lightest bike and the biggest aftermarket, the Sur-Ron and Talaria suit you; if you want high factory power without modification, E-Ride Pro is the better fit.

### Understanding a 72V platform
Voltage and current together set power. A 72V pack can deliver the same power as a 60V pack at lower current, and it can deliver more power at the same current. That is why bikes marketed on 12kW to 15kW of factory output use 72V or higher. Higher power also means more heat and more load on tyres, chain and brakes, so these bikes reward careful riding and regular checks. Our [72V vs 60V guide](https://electricdirtbikeaustralia.com.au/blog/72v-vs-60v-electric-dirt-bike-battery-upgrade-guide/) explains the trade-offs in more depth.

### Questions to ask before buying any imported electric dirt bike
Ask who provides the warranty and where claims are handled, whether replacement parts are stocked in Australia, what the written specification is, who pays for freight and what the delivery terms are, and whether you can speak to a person about stock before you pay. For E-Ride Pro from Electric Dirt Bike Australia, the answers are a 12-month Australian warranty, parts stocked at our Mittagong NSW workshop, the specifications on the product page, free freight over $1,500 AUD and WhatsApp support for stock and delivery questions.

### What happens before the bike ships
Each bike is checked before dispatch. Our workshop describes real pre-delivery inspection that includes brake bleeding, bolt torque inspection and battery health verification before the bike is crated. Bikes travel as insured heavy freight with tailgate delivery to your address, so be ready to receive a crate and have someone to help unload it.

### Your first 30 days
Read the manual before the first ride. Charge the battery fully and check the tyre pressure, the brake feel and the bolts. Start in a lower power mode on a closed private area and build up gradually. After the first few rides, check that nothing has loosened, and keep a note of how far you travel on a charge so you understand your real range. Always wear a certified helmet and full protective gear, and follow our [e-bike safety guide](https://electricdirtbikeaustralia.com.au/blog/e-bike-safety-australia-guide/) for battery care.

### Is an E-Ride Pro right for you?
Choose an E-Ride Pro if you are an experienced or confident rider who wants high factory power, a 72V battery and a top speed of 95 km/h or more without modifying the bike. Choose the SS 2.0 if you want strong performance for less money and a slightly lighter bike. Choose the SR if you are a heavier rider, ride long days or steep terrain, or simply want the most power and range in the range. Look at lower-power bikes such as the Sur-Ron Light Bee X or the Talaria XXX if you are new to electric dirt bikes, want a bike near 50 kg or want to spend less. Whatever you pick, plan your charging, your transport and your protective gear before the crate arrives. Finally, think about the whole ownership picture, not only the purchase. A 72V pack stores a lot of energy, so choose a safe charging spot, keep the charger and cables in good condition and read the manual before you ride. Ask our team how you plan to ride so we can help you choose between the SS 2.0 and the SR, and so you know what to expect on delivery day.

### Where to buy: electric dirt bike for sale in Australia
Looking for an electric dirt bike for sale? The E-Ride Pro-SS 2.0 and Pro-SR are available from Electric Dirt Bike Australia, along with the rest of our electric dirt bikes for sale from Sur-Ron, Talaria, Stark Varg and more. Browse the full [electric dirt bikes](https://electricdirtbikeaustralia.com.au/electric-dirt-bikes/) range, or compare dirtbike sales by price, power and range on the [shop page](https://electricdirtbikeaustralia.com.au/shop/). Orders over $1,500 AUD ship free, crypto and PayID payments receive 10% off and every bike has a 12-month Australian warranty.

### Quick answers

How much is an E-Ride Pro in Australia? The E-Ride Pro-SS 2.0 is $8,690 AUD and the E-Ride Pro-SR is $9,990 AUD in our listings.

Which E-Ride Pro is faster? The Pro-SR is listed at 100+ km/h and the Pro-SS 2.0 at 95 km/h.

Do E-Ride Pro bikes ship Australia-wide? Yes. They are dispatched from our Mittagong NSW workshop, with free freight on orders over $1,500 AUD.

### Official sources and further reading
For manufacturer information on the other major brands we stock, see the [Sur-Ron site](https://www.surron.com/) and the [Stark Future site](https://www.starkfuture.com/). For battery safety see the [NSW Government lithium-ion battery page](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices), and for background on how lithium-ion cells work see the [Wikipedia article on lithium-ion batteries](https://en.wikipedia.org/wiki/Lithium-ion_battery).`,
  },
  {
    slug: "e-ride-pro-ss-2-0-vs-sr-specs-price",
    title: "E-Ride Pro SS 2.0 vs SR: Specs, Price & Which to Buy in Australia",
    excerpt: "E-Ride Pro SS 2.0 or SR? A side-by-side comparison of power, battery, top speed, range, weight and price for both E-Ride Pro models sold in Australia.",
    category: "Comparisons",
    date: "2026-10-06",
    readTime: "7 min read",
    image: "/images/product-e-ride-pro-3-0.webp",
    imageAlt: "E-Ride Pro SS 2.0 and E-Ride Pro SR electric dirt bikes compared by power, battery, range and price",
    content: `Choosing between the E-Ride Pro SS 2.0 and the E-Ride Pro SR is mostly a question of power, battery size and budget. Both are 72V electric dirt bikes sold by Electric Dirt Bike Australia, and the figures below are taken from our product listings. Real-world range and speed vary with rider weight, terrain and power mode.

### Power and battery
The [E-Ride Pro-SS 2.0](https://electricdirtbikeaustralia.com.au/shop/e-ride-pro-ss-2-0/) has 12kW of peak power and a 72V 40Ah battery, which is 2,880Wh, using Samsung 50E / Molicel cells. The [E-Ride Pro-SR](https://electricdirtbikeaustralia.com.au/shop/e-ride-pro-sr/) has 15kW of peak power and a 72V 45Ah battery, which is 3,240Wh, with high-discharge cells. That is 3kW more peak output and about 360Wh more battery energy.

### Speed and range
The SS 2.0 is listed at a 95 km/h top speed and up to 105 km of range. The SR is listed at 100+ km/h and up to 120 km. The bigger battery on the SR is the reason for the range gain, and the extra power is the reason for the higher top speed.

### Weight and handling
The SS 2.0 weighs 64 kg and the SR weighs 67 kg. The 3 kg difference is small, so the choice comes down to power and range, not handling. The SS 2.0 uses Fastace dual-air tuned inverted forks.

### Price
The SS 2.0 is $8,690 AUD, down from $9,190. The SR is $9,990 AUD, down from $10,590. The SR costs $1,300 more than the SS 2.0. If you pay with crypto or PayID, a 10% discount applies at checkout, and freight is free on orders over $1,500 AUD.

### Which E-Ride Pro should you buy?
Choose the SS 2.0 if you want strong 72V performance for a lower price and a lighter bike. Choose the SR if you are a heavier rider, ride long days or steep climbs, or want the most power and range in the E-Ride Pro range. Beginners should also read our guide to [how fast electric dirt bikes go](https://electricdirtbikeaustralia.com.au/blog/how-fast-do-electric-dirt-bikes-go/) before choosing the most powerful option.

### Delivery, warranty and legal use
Both bikes ship from Mittagong NSW with a 12-month Australian warranty. They are supplied for private property and designated off-road areas, and any road use depends on your state's rules. Start with our [E-Ride Pro Australia buyer's guide](https://electricdirtbikeaustralia.com.au/blog/e-ride-pro-australia-buyers-guide/), then browse all [electric dirt bikes for sale](https://electricdirtbikeaustralia.com.au/electric-dirt-bikes/).

### Side-by-side summary
The Pro-SS 2.0 is $8,690 AUD with 12kW of peak power, a 72V 40Ah, 2,880Wh battery, a 95 km/h top speed, up to 105 km of range and a 64 kg weight. The Pro-SR is $9,990 AUD with 15kW of peak power, a 72V 45Ah, 3,240Wh battery, a 100+ km/h top speed, up to 120 km of range and a 67 kg weight. Everything else in this guide follows from those two lists.

### Power per dollar and energy per dollar
At $8,690, the SS 2.0 offers about 1.38 kW of peak power per $1,000. At $9,990, the SR offers about 1.50 kW per $1,000. For battery energy, the SS 2.0 has about 331 Wh per $1,000 and the SR about 324 Wh per $1,000. The SR gives you more power per dollar, and the two are almost level on battery energy per dollar, so the extra $1,300 mostly buys power, top speed and range rather than a better ratio of battery to price.

### How much extra range does the SR give?
Listed range is up to 120 km for the SR and up to 105 km for the SS 2.0, which is up to 15 km more. The SR battery holds about 360Wh more energy, which is about 12.5% more than the SS 2.0. Real range depends on rider weight, terrain, speed and power mode, and riding at full power uses energy faster, so treat the numbers as "up to" values.

### Rider weight and terrain
Heavier riders and riders who climb steep terrain draw more power from the battery. The SR has more peak power and a larger battery, which helps in those conditions. Lighter riders on flatter trails may never use the SR's extra headroom and will be happy with the SS 2.0.

### Beginner or experienced?
Both bikes are high power. A beginner should start in a lower mode and treat both as full-size performance machines, not entry bikes. Our guide to [how fast electric dirt bikes go](https://electricdirtbikeaustralia.com.au/blog/how-fast-do-electric-dirt-bikes-go/) explains speed and safety, and the [adult electric dirt bike guide](https://electricdirtbikeaustralia.com.au/blog/adult-electric-dirt-bike-australia-best-models/) lists lower-power options such as the Sur-Ron Light Bee X and the Talaria XXX.

### Alternatives to consider
In the same power class, the [RFN Ares Rally Pro](https://electricdirtbikeaustralia.com.au/shop/rfn-ares-rally-pro/) is 12.5kW at $8,490 AUD, the [Velimotor VMX12](https://electricdirtbikeaustralia.com.au/shop/velimotor-vmx12-motocross/) is 12kW at $8,990 AUD and the [Sur-Ron Ultra Bee](https://electricdirtbikeaustralia.com.au/shop/sur-ron-ultra-bee/) is 12.5kW at $10,990 AUD. In the same power class as the SR, the Arctic Leopard E-XE 880 is 15kW at $11,490 AUD. The lighter [Sur-Ron Light Bee X](https://electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) and [Talaria Sting R MX4](https://electricdirtbikeaustralia.com.au/shop/talaria-sting-r-mx4/) cost less but have less power.

### Delivery, payment and warranty
Both E-Ride Pro bikes ship from Mittagong NSW 2575 to every state, with free freight over $1,500 AUD. Crypto and PayID payments receive 10% off at checkout, and each bike has a 12-month Australian warranty. Read the [E-Ride Pro Australia buyer's guide](https://electricdirtbikeaustralia.com.au/blog/e-ride-pro-australia-buyers-guide/) for the full range.

### Legal use and safety
These bikes are supplied for private property and designated off-road areas. Whether any bike can be registered for the road depends on your state. Wear a certified helmet and full protective gear, and follow the battery safety advice in our [e-bike safety guide](https://electricdirtbikeaustralia.com.au/blog/e-bike-safety-australia-guide/).

### What to check on a test ride
Check how the throttle responds from a stop, how the suspension handles a rough section at your normal speed, how the brakes feel under repeated use and how the bike feels when you stand on the pegs. Check the seat height against your leg length and the reach to the bars. Ask how the power modes are changed and whether the bike has a boost function. If you cannot test ride, ask our team about suspension setup for your weight on WhatsApp before you buy.

### Power modes and throttle discipline
High-power electric bikes deliver torque instantly, which surprises riders coming from petrol bikes. Use a lower power mode while you learn how the bike responds, keep your weight forward when accelerating and be gentle on loose ground. The extra 3kW of peak power on the Pro-SR matters most in the top of the throttle range, so a rider who never uses full power will not notice the gap on easy trails.

### Charging and caring for a 72V pack
Use the charger made for a 72V battery, charge on a hard non-flammable surface, never leave a pack charging while you sleep and let the pack cool after hard riding before charging. Store it cool and dry, away from sunlight. The [NSW Government lithium-ion battery page](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices) lists these practices, and our [battery maintenance guide](https://electricdirtbikeaustralia.com.au/blog/how-to-charge-maintain-electric-dirt-bike-batteries/) adds storage voltage and heat advice for Australian summers.

### Running costs and wear
Both bikes use electric drive, so there are no oil changes or spark plugs. They still wear tyres, chains, sprockets, brake pads and suspension seals, and the SR's extra power will use tyres and chain slightly faster in hard riding. See our [servicing cost guide](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-servicing-cost-guide-australia/) and [tyre guide](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-tyres-knobby-vs-trials-guide/) for typical wear items.

### Decision guide by rider type
A lighter rider on tight trails who rarely uses full power should lean to the SS 2.0 and keep the $1,300. A heavier rider, or one who climbs steep hills or rides all day, should lean to the SR for the extra power and battery. A rider who wants the highest top speed in the E-Ride Pro range should choose the SR at 100+ km/h. A budget-focused buyer comparing other 12kW bikes should also look at the RFN Ares Rally Pro at $8,490 AUD and the Velimotor VMX12 at $8,990 AUD. A first-time electric dirt bike buyer should consider a lower-power bike first and read our [adult electric dirt bike guide](https://electricdirtbikeaustralia.com.au/blog/adult-electric-dirt-bike-australia-best-models/). If you are still undecided, list your riding in order of importance: weight, climbing, top speed, range and budget. Whichever two come first will usually point to the bike. Our team can talk through your height, weight and terrain on WhatsApp, and every order includes free freight over $1,500 AUD and a 12-month Australian warranty.

### Where to buy: electric dirt bike Australia for sale
Both E-Ride Pro models are an electric dirt bike Australia for sale from Electric Dirt Bike Australia, listed with full specifications, price and freight terms: the [E-Ride Pro-SS 2.0](https://electricdirtbikeaustralia.com.au/shop/e-ride-pro-ss-2-0/) at $8,690 AUD and the [E-Ride Pro-SR](https://electricdirtbikeaustralia.com.au/shop/e-ride-pro-sr/) at $9,990 AUD. If you are comparing electric motorcycles for sale against general dirtbike sale listings, our [electric motorcycles](https://electricdirtbikeaustralia.com.au/electric-motorcycles/) and [electric dirt bikes](https://electricdirtbikeaustralia.com.au/electric-dirt-bikes/) categories put the models side by side. Message us on WhatsApp from the product page if you want stock or delivery confirmed for your postcode.

### Quick answers

Is the E-Ride Pro SR worth the extra $1,300? It adds 3kW of peak power, about 360Wh of battery energy, a higher listed top speed and up to 15 km more listed range, for 3 kg more weight.

Which E-Ride Pro has more range? The SR is listed at up to 120 km and the SS 2.0 at up to 105 km. Real range depends on rider weight, terrain and power mode.

Can I pay for an E-Ride Pro with crypto or PayID? Yes. Choose crypto or PayID at checkout and a 10% discount applies.

### Official sources and further reading
For battery safety see the [NSW Government lithium-ion battery page](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices) and the [Queensland Fire Department page](https://www.fire.qld.gov.au/safety-education/battery-and-charging-safety/lithium-ion-battery-safety). For background on how electric motorcycle technology works see the [Wikipedia overview of electric motorcycles and scooters](https://en.wikipedia.org/wiki/Electric_motorcycles_and_scooters).`,
  },
  {
    slug: "e-bike-safety-australia-guide",
    title: "E-Bike Safety Australia: Helmets, Batteries, Rules & Riding Tips",
    excerpt: "E-bike safety in Australia: wear an approved helmet, charge lithium batteries safely, buy compliant e-bikes and follow state rules. Official safety links included.",
    category: "Legal & Safety",
    date: "2026-10-06",
    readTime: "7 min read",
    image: "/images/hero_surron_trail_1790338185425.jpg",
    imageAlt: "Cyclist wearing a helmet and charging an e-bike battery on a hard surface, illustrating e-bike safety in Australia",
    content: `E-bike safety in Australia comes down to four things: the right helmet and gear, a compliant e-bike, safe battery charging and storage, and knowing your state's rules. This guide links to the official government and fire-service pages so you can read the current advice yourself.

### Helmet and protective gear
Wear a properly fastened, approved helmet every time you ride. Queensland, for example, lists a fine for an unfastened helmet and approves both bicycle and motorbike helmets. For off-road electric dirt bikes, wear a full-face helmet, gloves, boots and body protection. Our footer notice says the same: always wear Australian standard certified helmets and full safety gear.

### Buy an e-bike that is compliant
In Queensland a legal e-bike is 250W with assistance up to 25 km/h and an EN 15194 label, and NSW has announced a move to a 250W cap and EN 15194 certification. Check each state's current rules before you buy. Our guides to [electric bike laws in QLD](https://electricdirtbikeaustralia.com.au/blog/electric-bike-laws-qld-2026/) and [electric bike regulations in NSW](https://electricdirtbikeaustralia.com.au/blog/electric-bike-regulations-nsw-2026/) summarise them.

### Charging and storing lithium batteries
Australian regulators and fire services warn that lithium-ion batteries can catch fire if they are faulty, damaged or used incorrectly. Their advice includes buying from a reliable manufacturer or retailer and looking for an electrical safety approval mark on the bike, battery and charger. Charge in a well-ventilated area on a non-combustible surface, let the battery cool after use before charging, and do not leave it charging unattended. Read the full advice on the [Queensland Fire Department page](https://www.fire.qld.gov.au/safety-education/battery-and-charging-safety/lithium-ion-battery-safety), the [NSW Government page](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices) and the [ACCC Product Safety page](https://www.productsafety.gov.au/business/e-bikes-e-scooters-and-other-e-micromobility-devices).

### Use the right charger
Use the charger made for your battery voltage and keep the original connector. Our [72V battery and charger range](https://electricdirtbikeaustralia.com.au/accessories/) lists the voltage and amperage for each charger, and our guide to [charging and maintaining electric dirt bike batteries](https://electricdirtbikeaustralia.com.au/blog/how-to-charge-maintain-electric-dirt-bike-batteries/) covers storage voltage and heat.

### Children and supervision
Kids electric bikes in our range are listed for private property and supervised riding, with parental speed limiting on several models. See the [kids electric bikes](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/kids/) page and our guide to [what age kids can ride electric dirt bikes](https://electricdirtbikeaustralia.com.au/blog/what-age-can-kids-ride-electric-dirt-bikes/).

### Know your state's rules
Rules on age, licence, speed on paths and where you can ride differ by state. The [Victoria Police e-bike safety page](https://www.police.vic.gov.au/e-bike-safety) and the [WA Road Safety Commission bicycle riders page](https://www.wa.gov.au/organisation/road-safety-commission/bicycle-riders) are two more official starting points. Our [Australian e-bike laws guide](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/e-bike-laws-australia/) links them all.

### Buying safely
The NSW Government says to look for an electrical safety approval mark on the vehicle, battery and charger, to buy from reliable manufacturers and retailers and to buy a battery recommended by the vehicle manufacturer. It also says never to use a second-hand battery, because it could be damaged, modified or faulty, and to have a professional inspect a second-hand e-bike for modifications or damage. The page was last updated on 10 August 2026.

### Charging rules that reduce risk
The NSW page advises monitoring charging times and disconnecting once the battery is full, letting the battery cool after use before charging, and charging on hard non-flammable surfaces such as concrete or tiles. It says to charge in rooms with working smoke alarms, never to charge while asleep, never to charge on combustible or flammable materials and to avoid charging near doorways or emergency exits. Setting a timer helps prevent overcharging.

### Storing batteries
Charge and store batteries in a cool dry place away from sunlight and away from flammable materials such as bedding or carpet. For large batteries, the page recommends a garage, shed or carport away from living areas. Our [accessories](https://electricdirtbikeaustralia.com.au/accessories/) range lists 72V batteries and chargers; follow the instructions for your exact pack and keep the original charger and connector.

### Warning signs of a damaged battery
Stop using a battery that shows swelling or bulging, leaking, cracks, dents, punctures or crushing, overheating, vapour or smoke, or that has been exposed to water or fire. The NSW page says a damaged battery should be kept in a well-ventilated area at least 3 metres from structures or combustible materials, never put in household, recycling or kerbside bins, and that you should call 000 in an emergency.

### Disposal and recycling
Used e-bike and e-scooter batteries should go to B-cycle drop-off points, Community Recycling Centres or Household Chemical CleanOut events in NSW. Other states have their own programs, so check your state or council. The NSW page says damaged lithium-ion batteries must never go into household, recycling or kerbside bins.

### Helmets and protective gear
Wear an approved helmet that is properly fastened every ride. Queensland lists a fine of $518 for an unfastened helmet and approves bicycle and motorbike helmets, and NSW lists a fine from $423 for no helmet. For off-road electric dirt bikes, add a full-face helmet, gloves, boots and body protection. Our footer notice says it too: always wear Australian standard certified helmets and full safety gear.

### Riding safely
Obey the road rules for bicycle riders in your state, slow down around pedestrians, ring a bell where needed and keep to the speed limits on shared paths. Queensland lists a 12 km/h limit on footpaths and when passing pedestrians on shared paths. Do not ride after drinking, and do not hold your phone. Check your lights, brakes and tyre pressure before a ride. Victoria lists a bell or warning device, a working brake and a headlight in low light as requirements for e-bikes.

### Children and supervision
Kids electric bikes in our range are designed for private property and supervised off-road riding, and several have speed limiting. The [kids electric bikes](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/kids/) page lists them, and our guides to [childs dirt bikes](https://electricdirtbikeaustralia.com.au/blog/childs-dirt-bike-australia-electric-options/) and [kids e-bikes](https://electricdirtbikeaustralia.com.au/blog/kids-ebike-australia-evo-racing-lil-rippa-compared/) compare them by age. Always supervise young riders.

### Know the rules in your state
See our guides to [Queensland e-bike laws](https://electricdirtbikeaustralia.com.au/blog/electric-bike-laws-qld-2026/) and [NSW e-bike regulations](https://electricdirtbikeaustralia.com.au/blog/electric-bike-regulations-nsw-2026/), and the national summary on our [Australian e-bike laws guide](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/e-bike-laws-australia/).

### Lights, bells and visibility
Visibility rules vary by state. Western Australia lists a white front light and a red rear light that are clearly visible for at least 200 metres, as standard bicycle requirements, and Victoria lists a headlight in low light and a bell, horn or other warning device. Even where the law is less specific, fit working lights and a bell and wear bright or reflective clothing when you ride near dusk, at night or in poor weather.

### A quick pre-ride checklist
Before each ride check tyre pressure, the brakes, that the wheels and bars are tight, that the battery is seated and charged and that the charger is not left connected. Look at the battery for swelling, cracks or damage. If anything looks wrong, do not ride; the NSW page lists swelling, leaking, cracks, overheating, smoke and exposure to water or fire as reasons to stop using a battery.

### After a crash
After a crash, check yourself and others first. Queensland tells riders to stop, stay at the scene and assist injured people, and the Queensland e-bike page also advises watching for swelling, discolouration or odours from the battery after a crash. Do not charge a battery that has been damaged in a fall, and call 000 in an emergency.

### Riding with others and sharing paths
Keep left, give way to pedestrians and slow down to pass. Queensland lists a 12 km/h limit on footpaths and when passing pedestrians on shared paths, and Victoria says riders should keep to the left and give way to pedestrians on paths. Ride predictably, signal and avoid weaving. These habits protect everyone and reduce the risk of fines.

### Common e-bike safety myths
One myth is that an e-bike is slow, so gear is optional. A legal e-bike can still reach 25 km/h under assistance, and Queensland and NSW both list fines for riding without a proper helmet. Another is that charging overnight is fine; the NSW page says never to charge batteries while asleep. A third is that any charger that fits will do, but the correct charger for the battery voltage is part of safe charging. A fourth is that a second-hand battery is a bargain, yet the NSW page says never to use a second-hand battery because it could be damaged, modified or faulty. Treat the battery and charger as safety equipment, not accessories.

### Where to buy: e bike parts Australia and bikes for Melbourne riders
For e bike parts Australia riders need, such as 72V chargers, batteries, brakes, tyres and protection, see our [accessories and parts](https://electricdirtbikeaustralia.com.au/accessories/) range. If you are searching for electric bikes for sale Melbourne or e bikes for sale Melbourne, our [Melbourne delivery guide](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/melbourne/) explains freight to Victoria, and the [electric bikes for sale](https://electricdirtbikeaustralia.com.au/electric-bikes/) page lists published prices, from kids bikes at $899 AUD to 250 watt commuters from $2,790 AUD. Free freight applies to orders over $1,500 AUD, crypto and PayID payments receive 10% off and a 12-month Australian warranty covers the bikes.

### Quick answers

Where should I charge an e-bike battery? Fire and regulator advice is to charge in a well-ventilated area on a non-combustible surface, let the battery cool first, and not leave it charging unattended.

What should I look for when buying an e-bike? Look for an electrical safety approval mark on the bike, battery and charger, buy from a reliable manufacturer or retailer, and check the EN 15194 label where your state requires it.

Do I need to wear a helmet on an e-bike? Yes, wear a properly fastened approved helmet. Queensland and NSW both list fines for riding without one.

### Official sources and further reading
Read the [Queensland Government e-bike page](https://streetsmarts.initiatives.qld.gov.au/e-bikes-e-scooters/e-bikes/), the [NSW Government e-bike page](https://www.nsw.gov.au/driving-boating-and-transport/bikes-e-bikes-e-scooters), the [Victoria Police e-bike safety page](https://www.police.vic.gov.au/e-bike-safety) and the [WA Road Safety Commission page](https://www.wa.gov.au/organisation/road-safety-commission/bicycle-riders). Battery guidance is on the [NSW Government lithium-ion battery page](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices), the [Queensland Fire Department page](https://www.fire.qld.gov.au/safety-education/battery-and-charging-safety/lithium-ion-battery-safety) and the [ACCC Product Safety page](https://www.productsafety.gov.au/business/e-bikes-e-scooters-and-other-e-micromobility-devices).`,
  },
  {
    slug: "childs-dirt-bike-australia-electric-options",
    title: "Childs Dirt Bike Australia: Best Electric Options by Age & Price",
    excerpt: "Choosing a childs dirt bike in Australia? Compare electric dirt bikes for kids by age, size, speed limits and price, from $899 to the KTM SX-E 5 and Husqvarna EE 5.",
    category: "Buyers Guide",
    date: "2026-10-06",
    readTime: "7 min read",
    image: "/images/product-ktm-sx-e-5-side.jpg",
    imageAlt: "KTM SX-E 5 youth electric dirt bike, a childs dirt bike for ages 4 to 10 sold in Australia",
    content: `A childs dirt bike should match the rider's age, height and experience, and an electric dirt bike for kids has advantages: it is quiet, there is no clutch or gear shifting, and many models let a parent limit the top speed. This guide compares the kids and youth electric dirt bikes in our range by age, power and price. All specifications are the figures in our product listings, and every bike should be used under adult supervision on private property or a suitable off-road area.

### Ages 3 to 6: a first childs dirt bike
The [EDBA Moto 50 beginner kids electric motorbike](https://electricdirtbikeaustralia.com.au/shop/edba-moto-50-kids-beginner/) is listed for ages 3 to 6, with a 250 watt motor, a 6 km/h top speed, a 14 kg weight, up to 60 minutes of ride time and a maximum rider weight of 30 kg. It has a parental remote kill switch and key lockout. It is $1,290 AUD.

### Ages 4 to 10: factory youth bikes
The [KTM SX-E 5](https://electricdirtbikeaustralia.com.au/shop/ktm-sx-e-5-youth-electric/) and the [Husqvarna EE 5](https://electricdirtbikeaustralia.com.au/shop/husqvarna-ee-5-youth-electric/) are both listed for ages 4 to 10 with a 1,100 watt motor, a 20 km/h top speed, an 80 minute charge time and a 26 kg weight. The KTM has three parent-selectable power modes (20, 50 and 100 percent). The KTM is $7,990 AUD and the Husqvarna is $7,490 AUD.

### Ages 6 to 14: trials and training
The [OSET 20.0 Racing Junior](https://electricdirtbikeaustralia.com.au/shop/oset-20-0-racing-junior/) is listed for ages 6 to 14 with a 600 watt motor, a 24V 20Ah lithium battery, up to 3 hours of ride time, a 15 km/h top speed and a 22 kg weight. A parent can adjust the maximum speed. It is $4,290 AUD. Our [OSET bikes review](https://electricdirtbikeaustralia.com.au/blog/oset-bikes-australia-review-junior-electric/) goes into detail.

### Junior motocross with a parental app
The [Torrot Motocross Two junior](https://electricdirtbikeaustralia.com.au/shop/torrot-motocross-two-junior/) has a 1,500 watt motor, a 48V 10.4Ah quick-swap battery and a 32 kg weight, with a Bluetooth parental app limiter. It is $3,690 AUD.

### Teens and smaller adults
The [Segway X160 compact youth dirt bike](https://electricdirtbikeaustralia.com.au/shop/segway-x160-compact/) has a 3,000 watt motor, a 48V 20Ah battery, a 50 km/h top speed and up to 65 km of range at 48 kg, at $4,690 AUD. The [Razor MX650](https://electricdirtbikeaustralia.com.au/shop/razor-mx650-electric-kids/) is listed for ages 13 and up with a 650 watt motor, an 18 km/h top speed and a maximum rider weight of 81 kg, at $899 AUD.

### How to choose
Start with the child's age and height, not the power figure. Pick a bike with speed limiting, so the speed can rise as skills improve. Check the weight, because a bike a child can pick up after a fall is easier to manage. Buy protective gear at the same time as the bike.

### Where to ride
These bikes are intended for private property and supervised off-road use. Rules on young riders differ by state, so read our guide on [what age kids can ride electric dirt bikes](https://electricdirtbikeaustralia.com.au/blog/what-age-can-kids-ride-electric-dirt-bikes/) and check your state authority.

### Compare more kids bikes
See every model on our [kids electric bikes and motorbikes](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/kids/) page, read the full [kids electric bike buying guide](https://electricdirtbikeaustralia.com.au/blog/kids-electric-bike-buying-guide-australia/), or compare the pedal-style options in [kids e-bikes: EVO Racing, Lil Rippa and Warrior](https://electricdirtbikeaustralia.com.au/blog/kids-ebike-australia-evo-racing-lil-rippa-compared/).

### How to size a childs dirt bike
Size by the rider, not by the age printed on the box. The bikes in our range are listed for different age bands: the EDBA Moto 50 for ages 3 to 6, the KTM SX-E 5 and Husqvarna EE 5 for ages 4 to 10, the OSET 20.0 for ages 6 to 14 and the Razor MX650 for ages 13 and up. The Torrot Motocross Two is described as a junior bike for riders aged 6 to 11, and the Segway X160 is described as suiting riders roughly 150 cm to 170 cm tall. A child should be able to reach the ground comfortably, hold the bars with a relaxed bend in the elbows and reach the brake levers without stretching.

### Weight matters more than power
A lighter bike is easier for a child to pick up after a fall and easier to steer. The listed weights run from 14 kg for the EDBA Moto 50 and 22 kg for the OSET 20.0 to 26 kg for the KTM SX-E 5 and Husqvarna EE 5, 32 kg for the Torrot and Razor, and 48 kg for the Segway X160. If a child cannot comfortably hold the bike upright when stopped, it is too heavy or too tall for them yet.

### Speed limits and parental control
Control matters as much as speed. The listed top speeds are 6 km/h for the EDBA Moto 50, 15 km/h for the OSET 20.0, 18 km/h for the Razor MX650, 20 km/h for the KTM and Husqvarna and 50 km/h for the Segway X160. The KTM has three parent-selectable power modes at 20, 50 and 100 percent. The OSET has an infinitely variable speed dial and a parent-adjusted maximum speed. The Torrot Motocross Two has a Bluetooth app that lets a parent control top speed, acceleration sensitivity and engine braking. The EDBA Moto 50 has a parental remote kill switch and key lockout.

### Battery, run time and charging
Run time is a practical matter for a child's session. The EDBA Moto 50 is listed at up to 60 minutes of ride time, the OSET 20.0 at up to 3 hours, and the Razor MX650 at up to 45 minutes. The KTM SX-E 5 and Husqvarna EE 5 charge in about 80 minutes on the standard charger. The Razor MX650 uses a 36V 12Ah sealed lead-acid battery, while the OSET uses a 24V 20Ah lithium-ion battery and the factory youth bikes use 48V lithium packs.

### What the price ladder buys
The Razor MX650 at $899 AUD is the entry point for older kids. The EDBA Moto 50 at $1,290 AUD is a beginner bike for small children with the parental kill switch. The Torrot at $3,690 and the OSET at $4,290 add lithium batteries, app or dial control and more power. The Segway X160 at $4,690 is a teen and smaller-adult bike. The KTM at $7,990 and the Husqvarna at $7,490 add factory WP suspension and the brands' youth motocross design. Choose the rung that matches the child's skill, not the budget ceiling.

### Electric or petrol for a child?
An electric childs dirt bike is quiet, has no clutch or gear shifting and needs no fuel mixing or oil changes. That makes it easier for a beginner and kinder to neighbours. The trade-off is run time, because the battery limits a session, and the cost of the higher-end factory bikes. Our guide to [electric vs petrol running costs](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-vs-petrol-motocross-running-costs/) compares ownership costs for larger bikes.

### Safety gear and supervision
Buy a certified helmet, gloves, boots and body protection at the same time as the bike, and supervise every ride. Keep the speed limiter on a low setting until the child shows consistent control, then raise it step by step. Read our [e-bike safety guide](https://electricdirtbikeaustralia.com.au/blog/e-bike-safety-australia-guide/) for battery charging and storage advice.

### Common mistakes to avoid
The most common mistakes are buying a bike that is too big so the child can grow into it, ignoring weight, leaving the speed limiter off and riding without gear or supervision. Another is treating a kids bike like a toy: store the battery cool and dry, charge it on a hard surface and keep the charger that came with the bike.

### Where children can ride
These bikes are intended for private property and supervised off-road riding. Rules for young riders differ by state, so read our guide to [what age kids can ride electric dirt bikes](https://electricdirtbikeaustralia.com.au/blog/what-age-can-kids-ride-electric-dirt-bikes/) and check your state authority before riding anywhere other than private land.

### Where to buy: affordable dirt bikes for sale
If you are looking for affordable dirt bikes for sale for a child, we sell electric bikes only, and the lowest-priced options in our range start at $899 AUD for the Razor MX650 and $1,290 AUD for the EDBA Moto 50. Searching for dirt cheap dirt bikes for sale or cheap dirt bikes for sale under $1000? The Razor MX650 at $899 AUD is the only bike in this guide under $1,000, and it is listed for ages 13 and up with a maximum rider weight of 81 kg. Compare every model on our [kids electric bikes](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/kids/) page. Free freight applies to orders over $1,500 AUD, crypto and PayID payments receive 10% off, and each bike has a 12-month Australian warranty, with the KTM SX-E 5 priced at $7,990 AUD for riders who want a factory youth bike.

### Quick answers

What is the best childs dirt bike for a 4 to 10 year old? The KTM SX-E 5 and Husqvarna EE 5 are both listed for ages 4 to 10, with a 1,100 watt motor and a 20 km/h top speed. The KTM has three parent-selectable power modes.

What is the cheapest electric dirt bike for kids? The Razor MX650 is $899 AUD and is listed for ages 13 and up. For ages 3 to 6, the EDBA Moto 50 is $1,290 AUD.

Can parents limit the speed of an electric dirt bike for kids? Several models can. The KTM SX-E 5 has parent-selectable modes, the OSET 20.0 has a parent-adjusted maximum speed and the Torrot Motocross Two has a Bluetooth parental app limiter.

### Official sources and further reading
For battery charging and storage advice see the [NSW Government lithium-ion battery page](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices) and the [Queensland Fire Department page](https://www.fire.qld.gov.au/safety-education/battery-and-charging-safety/lithium-ion-battery-safety), and for national product-safety work on e-micromobility devices see the [ACCC Product Safety page](https://www.productsafety.gov.au/business/e-bikes-e-scooters-and-other-e-micromobility-devices). For the manufacturers' own information on youth bikes, see the [KTM](https://www.ktm.com/) and [Husqvarna](https://www.husqvarna-motorcycles.com/) sites.`,
  },
  {
    slug: "adult-electric-dirt-bike-australia-best-models",
    title: "Adult Electric Dirt Bike Australia: Best Models by Use & Budget",
    excerpt: "The best adult electric dirt bike for your riding and budget: compare Sur-Ron, Talaria, E-Ride Pro and more by power, range, weight and price in Australia.",
    category: "Buyers Guide",
    date: "2026-10-06",
    readTime: "7 min read",
    image: "/images/product-sur-ron-ultra-bee.jpg",
    imageAlt: "Sur-Ron Ultra Bee adult electric dirt bike with 12.5kW motor, sold in Australia",
    content: `The right adult electric dirt bike depends on where you ride, how experienced you are and what you want to spend. Electric dirt bikes for adults range from light trail bikes near $5,500 to full-size enduro machines above $13,000. This guide groups the models in our range by use and budget. Every figure is taken from our product listings, and real range and speed vary with rider weight, terrain and power mode.

### Lightweight trail bikes from about $5,500
The [Talaria XXX Black Edition](https://electricdirtbikeaustralia.com.au/shop/talaria-xxx-black-edition/) has a 6.5kW motor, a 60V 40Ah battery, a 75 km/h top speed and up to 80 km of range at 50 kg, for $5,490 AUD. The [Sur-Ron Light Bee X](https://electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) is 6kW with a 60V 40Ah, 2,400Wh battery, 75 km/h, up to 100 km in eco mode and 50 kg, for $6,490 AUD. The [Segway X260](https://electricdirtbikeaustralia.com.au/shop/segway-x260-dirt-ebike/) is 5kW, 75 km/h, up to 90 km and 55 kg, for $6,790 AUD.

### Mid-power trail and enduro bikes
The [Talaria Sting R MX4](https://electricdirtbikeaustralia.com.au/shop/talaria-sting-r-mx4/) has 8kW, a 2,700Wh battery, 85 km/h and up to 110 km at 63 kg, for $7,290 AUD. The [Rawrr Mantis 72V](https://electricdirtbikeaustralia.com.au/shop/rawrr-mantis-72v/) is 10kW, 85 km/h and up to 90 km at 65 kg, for $8,190 AUD. The [E-Ride Pro-SS 2.0](https://electricdirtbikeaustralia.com.au/shop/e-ride-pro-ss-2-0/) is 12kW, 95 km/h and up to 105 km at 64 kg, for $8,690 AUD.

### Full-size power
The [E-Ride Pro-SR](https://electricdirtbikeaustralia.com.au/shop/e-ride-pro-sr/) is 15kW with up to 120 km of range at 67 kg, for $9,990 AUD. The [Sur-Ron Ultra Bee](https://electricdirtbikeaustralia.com.au/shop/sur-ron-ultra-bee/) is 12.5kW with 440 Nm of rear-wheel torque, 90 km/h, up to 140 km in eco mode and 85 kg, for $10,990 AUD. The [Talaria Dragon](https://electricdirtbikeaustralia.com.au/shop/talaria-dragon-enduro/) is 28kW with a 5,100Wh battery, 110 km/h and up to 150 km at 100 kg, for $13,990 AUD.

### How to choose by riding style
For tight singletrack and lightweight handling, pick the lightest bike. For hill climbs and long days, prioritise battery size, which is listed in watt-hours. For speed and open fire trails, look at peak power and top speed. If you are new to electric dirt bikes, start with a lower-power model or a bike with selectable power modes.

### Weight and rider size
A lighter bike is easier to handle and easier to load for transport. The Sur-Ron Light Bee X and Talaria XXX weigh 50 kg, while the Ultra Bee is 85 kg and the Dragon is 100 kg. Heavier riders usually benefit from more power and a larger battery.

### Legal use
These bikes are supplied for private property and designated off-road areas. Whether any can be registered for the road depends on your state. See [electric dirt bike licence requirements](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-licence-requirements-australia/) and the [road legal electric dirt bike guide](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-road-legal-australia/).

### Next steps
Browse all [electric dirt bikes for sale](https://electricdirtbikeaustralia.com.au/electric-dirt-bikes/), compare running costs in [electric vs petrol motocross](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-vs-petrol-motocross-running-costs/), and read the [electric dirt bike cost guide](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-cost-australia-price-guide/). Free freight applies to orders over $1,500 AUD, and a 10% discount applies when you pay with crypto or PayID.

### How to read power and battery figures
Peak power in kilowatts tells you how hard the bike can accelerate, and battery energy in watt-hours tells you how long it can keep going. Two bikes with the same peak power can behave very differently because of weight and the controller settings. When you compare, look at both numbers together with weight.

### Power and battery per dollar
Using listed prices, the Talaria XXX Black Edition offers about 1.18 kW of peak power per $1,000 and about 437 Wh of battery per $1,000, the most battery energy per dollar in this guide. The Sur-Ron Light Bee X offers about 0.92 kW and 370 Wh per $1,000, and the Talaria Sting R MX4 about 1.10 kW and 370 Wh. The Rawrr Mantis offers about 1.22 kW and 308 Wh per $1,000, the E-Ride Pro-SS 2.0 about 1.38 kW and 331 Wh and the E-Ride Pro-SR about 1.50 kW and 324 Wh. The Sur-Ron Ultra Bee offers about 1.14 kW and 370 Wh, and the Talaria Dragon about 2.00 kW and 365 Wh per $1,000, the most power per dollar of the group. These ratios use published specifications and are not a ride-quality score.

### Choosing by terrain
Singletrack and tight trails reward a lighter bike such as the 50 kg Light Bee X or Talaria XXX. Open fire trails and long climbs reward more power and battery, such as the Ultra Bee at 4,070Wh or the Dragon at 5,100Wh. If you mostly ride flat private land, a mid-power bike will do everything you need at a lower price.

### Brakes and suspension
The Light Bee X lists hydraulic 4-piston disc brakes with 203mm rotors. The Ultra Bee lists 240mm fully adjustable front and rear suspension, and the E-Ride Pro-SS 2.0 lists Fastace dual-air tuned inverted forks. Suspension and brakes matter more as speed and weight go up, so check them when you move beyond lightweight bikes.

### 60V or 72V?
The lighter bikes use 60V packs and the more powerful bikes use 72V or higher. Higher voltage supports more power from the same current, but it is not automatically better for a casual rider. Our [72V vs 60V battery guide](https://electricdirtbikeaustralia.com.au/blog/72v-vs-60v-electric-dirt-bike-battery-upgrade-guide/) explains the trade-offs.

### Weight, loading and transport
At 50 kg the Light Bee X and Talaria XXX can be loaded by one person into a ute or on a hitch rack. At 85 kg or 100 kg the Ultra Bee and Dragon usually need a ramp or a second person. Our [transport guide](https://electricdirtbikeaustralia.com.au/blog/how-to-transport-electric-dirt-bikes-car-hitch-racks/) covers racks and tie-downs, and our [folding loading ramp](https://electricdirtbikeaustralia.com.au/shop/heavy-duty-folding-loading-ramp/) is listed in accessories.

### Upgrades and ownership
Many riders upgrade tyres, controllers and batteries over time. See our guides to [aftermarket mods for the Light Bee X](https://electricdirtbikeaustralia.com.au/blog/essential-aftermarket-mods-for-surron-light-bee-x/), [battery lifespan and replacement cost](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-battery-lifespan-replacement-cost/) and [servicing costs](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-servicing-cost-guide-australia/) before you commit to a model.

### Safety gear
Wear a certified helmet, gloves, boots and body protection on every ride and start in a lower power mode if you are new to electric dirt bikes. Read our [e-bike safety guide](https://electricdirtbikeaustralia.com.au/blog/e-bike-safety-australia-guide/) for battery care.

### Delivery to WA
We ship from Mittagong NSW to every state. Our [Perth delivery guide](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/perth/) explains freight to Western Australia, and the free freight threshold of $1,500 AUD applies to all of the bikes in this guide.

### How to test and compare before you buy
If you can, ride two bikes back to back. Compare the weight when you stand the bike up, the seat height and reach, how the throttle responds from a stop and how the brakes feel. Ask for the written specification, including continuous and peak power, battery energy in watt-hours and the weight. Ask about warranty coverage, parts availability and who handles service. For our bikes, the 12-month Australian warranty covers the frame, motor, controller, battery and electrical harness against manufacturer defects, and genuine replacement parts are stocked at our Mittagong NSW workshop.

### Beginner pathway
A new rider should pick a bike with selectable power modes and use the lowest mode for the first rides. Learn throttle control on flat ground, practise braking and then move to mild trails. Wear a certified helmet, gloves, boots and body protection, and ride with a friend where you can. Move up to a more powerful bike only when you outgrow the first one.

### Charging at home
Charge on a hard non-flammable surface, use the correct charger for your battery voltage and do not leave a pack charging while you sleep. Our [fast charger guide](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-fast-chargers-and-solar-generators/) explains charger options for 60V and 72V bikes, and the [NSW Government lithium-ion battery page](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices) lists general charging safety.

### Costs people forget to budget for
Besides the bike, budget for a certified helmet and full protective gear, a way to transport the bike, a spare battery or a plan to recharge between sessions, tools, spare tyres and a chain, and storage with a safe place to charge. Heavier bikes need a ramp or a second person to load. If you plan to ride away from home, allow for the time it takes to recharge, and keep your battery stored cool and dry. Our [transport guide](https://electricdirtbikeaustralia.com.au/blog/how-to-transport-electric-dirt-bikes-car-hitch-racks/) and [servicing cost guide](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-servicing-cost-guide-australia/) cover the practical side. Finally, take your time: compare at least three bikes on weight, power, battery, price and warranty, and talk to our team about your riding. A bike that matches how and where you ride will always beat one chosen on a single number.

### Where to buy: electric motor bikes for sale
Looking for electric motor bikes for sale? Electric Dirt Bike Australia lists adult electric dirt bikes from $5,490 to $13,990 AUD, with full specifications on each product page. Browse the [electric motor bikes](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/) category and the [electric dirt bikes](https://electricdirtbikeaustralia.com.au/electric-dirt-bikes/) category to compare. Searching for electric bikes for sale Perth or e bikes for sale Perth? We deliver to Perth and all of Western Australia, and our [Perth delivery guide](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/perth/) explains freight. Crypto and PayID payments receive 10% off at checkout, and every bike has a 12-month Australian warranty.

### Quick answers

How much is an adult electric dirt bike in Australia? The adult models in this guide start at $5,490 AUD for the Talaria XXX Black Edition and run to $13,990 AUD for the Talaria Dragon, with competition bikes higher.

Which adult electric dirt bike has the longest range? The Talaria Dragon is listed at up to 150 km, and the Sur-Ron Ultra Bee at up to 140 km in eco mode. These are manufacturer "up to" figures.

Are adult electric dirt bikes road legal? They are supplied for private property and designated off-road areas. Whether any can be registered for the road depends on your state.

### Official sources and further reading
For manufacturer information see the [Sur-Ron site](https://www.surron.com/) and the [Stark Future site](https://www.starkfuture.com/). For battery safety see the [NSW Government lithium-ion battery page](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices) and the [Queensland Fire Department page](https://www.fire.qld.gov.au/safety-education/battery-and-charging-safety/lithium-ion-battery-safety). For background on dirt bike riding see the [Wikipedia article on motocross](https://en.wikipedia.org/wiki/Motocross).`,
  },
  {
    slug: "high-performance-electric-dirt-bike-australia",
    title: "High Performance Electric Dirt Bike Australia: 12kW to 80HP Compared",
    excerpt: "Compare high performance electric dirt bikes in Australia by power tier: 12kW trail bikes, 22 to 28kW enduro machines and 60 to 80HP Stark Varg electric motocross bikes.",
    category: "Comparisons",
    date: "2026-10-06",
    readTime: "7 min read",
    image: "/images/product-stark-varg-mx.jpg",
    imageAlt: "Stark Varg EX 80HP electric motocross bike, a high performance electric dirt bike sold in Australia",
    content: `A high performance electric dirt bike delivers 12kW or more of peak power, a large high-discharge battery and serious suspension. Australia now has bikes from about $8,500 up to competition motocross machines near $19,000. This guide compares the high-performance bikes in our range by power tier, using the figures in our product listings.

### 12kW to 15kW: fast trail and enduro
The [Velimotor VMX12](https://electricdirtbikeaustralia.com.au/shop/velimotor-vmx12-motocross/) is 12kW with a 72V 58Ah battery and a 105 km/h top speed at 105 kg, for $8,990 AUD. The [RFN Ares Rally Pro](https://electricdirtbikeaustralia.com.au/shop/rfn-ares-rally-pro/) is 12.5kW with a 74V 35Ah battery, 85 km/h and up to 100 km at 68 kg, for $8,490 AUD. The [E-Ride Pro-SS 2.0](https://electricdirtbikeaustralia.com.au/shop/e-ride-pro-ss-2-0/) is 12kW at 95 km/h, for $8,690 AUD, and the [E-Ride Pro-SR](https://electricdirtbikeaustralia.com.au/shop/e-ride-pro-sr/) is 15kW at 100+ km/h, for $9,990 AUD. The [Arctic Leopard E-XE 880](https://electricdirtbikeaustralia.com.au/shop/arctic-leopard-e-xe-880/) is 15kW and 95 km/h at 68 kg, for $11,490 AUD, and the [Sur-Ron Ultra Bee](https://electricdirtbikeaustralia.com.au/shop/sur-ron-ultra-bee/) is 12.5kW with 440 Nm of torque, for $10,990 AUD.

### 22kW to 28kW: full-size enduro
The [Talaria Dragon](https://electricdirtbikeaustralia.com.au/shop/talaria-dragon-enduro/) is 28kW with an 88V 58Ah, 5,100Wh battery, 110 km/h and up to 150 km at 100 kg, for $13,990 AUD. The [Sur-Ron Storm Bee Enduro](https://electricdirtbikeaustralia.com.au/shop/sur-ron-storm-bee-enduro/) is 22.5kW with a 104V 55Ah, 5,720Wh battery, 110 km/h and up to 120 km at 127 kg, for $15,490 AUD.

### Electric motocross bikes for the track
For competition riders searching for electric motor cross bikes, the [Sur-Ron Storm Bee MX Track Edition](https://electricdirtbikeaustralia.com.au/shop/sur-ron-storm-bee-mx/) is 22.5kW with 520 Nm of rear-wheel torque at 122 kg, for $14,490 AUD. The [Stealth H-52](https://electricdirtbikeaustralia.com.au/shop/stealth-h-52-competition/) is a 5.2kW competition track machine at 49 kg, for $13,490 AUD.

### 60HP to 80HP: Stark Varg
The [Stark Varg Alpha 60HP](https://electricdirtbikeaustralia.com.au/shop/stark-varg-alpha-60hp/) is 60 horsepower (45kW) with 820 Nm of rear-wheel torque, a 6.0kWh battery and KYB 48mm closed-cartridge suspension with 310mm of travel, at 118 kg, for $16,990 AUD. The [Stark Varg EX 80HP](https://electricdirtbikeaustralia.com.au/shop/stark-varg-ex-80hp/) is 80 horsepower (60kW) with 938 Nm of torque and the same 310mm KYB suspension at 118 kg ready to ride, for $18,990 AUD. Read our [Stark Varg review](https://electricdirtbikeaustralia.com.au/blog/stark-varg-review-australia-2026/) for more.

### What to compare
Compare peak power, battery energy in watt-hours, weight, suspension travel and torque. Peak power is not the same as continuous power, and range falls quickly at full throttle. Pay attention to weight: a 127 kg Storm Bee Enduro handles very differently from a 64 kg E-Ride Pro-SS 2.0.

### Safety and legal use
High-performance electric dirt bikes are for private property, closed circuit tracks and designated off-road areas. Wear a certified helmet and full protective gear, and use a lower power mode until you know the bike.

### Buying
Browse all [electric motocross bikes for sale](https://electricdirtbikeaustralia.com.au/electric-motocross-bikes/) and [electric dirt bikes for sale](https://electricdirtbikeaustralia.com.au/electric-dirt-bikes/). Free freight applies over $1,500 AUD, and a 10% discount applies to crypto and PayID payments. Also see [how fast electric dirt bikes go](https://electricdirtbikeaustralia.com.au/blog/how-fast-do-electric-dirt-bikes-go/).

### Power per dollar across the tiers
Using listed prices and peak power, the Stark Varg EX 80HP offers about 3.14 kW of peak power per $1,000 and the Stark Varg Alpha 60HP about 2.63 kW per $1,000, the most of any bike in this guide. The Talaria Dragon offers about 2.00 kW per $1,000, the Kuberg Ranger about 1.82 kW, the Storm Bee MX about 1.55 kW and the Storm Bee Enduro about 1.45 kW. The RFN Ares Rally Pro is about 1.47 kW per $1,000, the Velimotor VMX12 about 1.33 kW and the Arctic Leopard about 1.31 kW. These are simple ratios from published specifications.

### Battery energy and range
For bikes that list battery energy, the Storm Bee MX has about 395 Wh per $1,000, the Storm Bee Enduro about 369 Wh, the Talaria Dragon about 365 Wh, the Stark Varg Alpha about 353 Wh and the EX 80HP about 316 Wh. The Dragon and Storm Bee Enduro list 150 km and 120 km of range respectively. The Stark Varg is a competition bike with a 6.0kWh battery, and a motocross rider will use it hard for shorter sessions, so range is a smaller factor than power delivery and cooling.

### Torque and traction
Torque figures in the listings are 938 Nm for the Stark Varg EX 80HP, 820 Nm for the Alpha 60HP, 520 Nm for the Storm Bee MX and 440 Nm for the Sur-Ron Ultra Bee at the rear wheel. That is a lot of force through a rear tyre, so tyre choice and throttle control matter. Our [knobby vs trials tyre guide](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-tyres-knobby-vs-trials-guide/) covers grip.

### Suspension travel
The Stark Varg models list KYB 48mm closed-cartridge suspension with 310mm of travel, and the Sur-Ron Ultra Bee lists 240mm of fully adjustable travel. More travel suits larger jumps and rough tracks but raises the seat and the cost.

### Weight spread
The Velimotor VMX08 carbon is listed at 47.5 kg and 8kW for $7,990 AUD, while the Storm Bee Enduro is 127 kg. Light bikes feel flickable but have less battery, and heavy bikes carry larger batteries but need more rider strength. Choose a weight you can handle after a fall.

### Trail, enduro or track
The Talaria Dragon and Sur-Ron Storm Bee Enduro suit long trail and enduro days. The Storm Bee MX, Stark Varg and Stealth H-52 suit tracks. The 12kW class bikes cover both with less weight. See our [Talaria Dragon review](https://electricdirtbikeaustralia.com.au/blog/talaria-dragon-komodo-full-size-electric-enduro-review/) and [future of electric motocross in Australia](https://electricdirtbikeaustralia.com.au/blog/future-of-electric-motocross-racing-in-australia/).

### Ownership costs at high power
Larger batteries cost more to replace, and tyres, chains and brake pads wear faster at high power. Read our [battery lifespan and replacement cost guide](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-battery-lifespan-replacement-cost/) and the [servicing cost guide](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-servicing-cost-guide-australia/).

### Safety and legal use
These bikes are for private property, closed circuit tracks and designated off-road areas. Wear a certified helmet, neck and body protection, gloves and boots. Follow the battery safety advice in our [e-bike safety guide](https://electricdirtbikeaustralia.com.au/blog/e-bike-safety-australia-guide/).

### Power modes and throttle safety
High-performance electric bikes deliver torque instantly. Use a lower power mode until you know how the bike responds, keep your weight forward on acceleration, and use smooth throttle inputs on loose or wet ground. The most powerful bikes in this guide put out hundreds of newton-metres at the rear wheel, which is far more force than a typical trail bike, so a lower mode is not a sign of weakness but a sensible way to learn.

### Track day checklist
Before a track day check tyre wear and pressure, chain tension and condition, brake pads and fluid, suspension settings for your weight and that the battery is fully charged and undamaged. Bring a certified helmet, neck protection, body armour, gloves and boots, and a spare battery or a plan for charging between sessions. Warm up with a few easy laps and check the bike after the first session for loose bolts.

### Wear parts at high power
At 12kW and above, tyres, chains, sprockets and brake pads wear faster. Plan for replacement parts and keep a small kit of spares. Our [accessories and parts](https://electricdirtbikeaustralia.com.au/accessories/) range lists chains, sprockets, tyres, brakes and protection, and our [braking upgrade guide](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-braking-upgrades-250mm-rotors/) explains rotor and pad choices.

### Warranty and parts support
Every bike from Electric Dirt Bike Australia comes with a 12-month Australian warranty covering the frame, motor, controller, battery and electrical harness against manufacturer defects, and genuine replacement parts are stocked at our Mittagong NSW workshop. Read the [warranty and service](https://electricdirtbikeaustralia.com.au/warranty-and-service/) page for details.

### Who should not buy a high performance bike yet
A first-time rider, someone without a safe place to ride at speed, a rider with no way to transport a 100 kg or heavier bike, or anyone who expects to ride on public roads should not start with a bike in this guide. Start with a lighter, lower-power bike, learn throttle control and braking, and move up when you outgrow it. Our guide to [how fast electric dirt bikes go](https://electricdirtbikeaustralia.com.au/blog/how-fast-do-electric-dirt-bikes-go/) explains why more power is not always more fun. Before you commit, check that your riding area allows high-power bikes, that you can transport and store a bike of 100 kg or more, and that you have a safe place to charge a large battery. Ask what the warranty covers for track use, whether replacement tyres, chains and brake pads are in stock, and how long parts take to arrive. A high-performance bike rewards preparation: a spare battery or a charging plan, a basic tool kit and a routine check before every ride keep the day on track.

### Where to buy: dirt motorcycles for sale, electric
If you are searching for dirt motorcycles for sale or a motorcycle dirt bike for sale, the electric options in this guide run from $8,490 AUD to $18,990 AUD, and each product page lists power, battery, torque, weight and suspension. People comparing dirt bike motorcycles for sale in petrol and electric can start with our [electric dirt bikes](https://electricdirtbikeaustralia.com.au/electric-dirt-bikes/) and [electric motocross bikes](https://electricdirtbikeaustralia.com.au/electric-motocross-bikes/) categories. Free freight applies to orders over $1,500 AUD, crypto and PayID payments receive 10% off, and each bike carries a 12-month Australian warranty.

### Quick answers

What is the most powerful electric dirt bike you sell? The Stark Varg EX 80HP is listed at 80 horsepower (60kW) with 938 Nm of rear-wheel torque, at $18,990 AUD.

What is the cheapest high performance electric dirt bike? In this guide the RFN Ares Rally Pro is $8,490 AUD at 12.5kW and the Velimotor VMX12 is $8,990 AUD at 12kW.

Are electric motocross bikes street legal? No. High-performance electric dirt bikes are for private property, closed circuit tracks and designated off-road areas.

### Official sources and further reading
For manufacturer information see the [Stark Future site](https://www.starkfuture.com/) and the [Sur-Ron site](https://www.surron.com/). For background on motocross see the [Wikipedia article on motocross](https://en.wikipedia.org/wiki/Motocross), and for battery safety see the [NSW Government lithium-ion battery page](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices).`,
  },
  {
    slug: "125cc-dirt-bike-australia-electric-alternatives",
    title: "125cc Dirt Bike Australia: Electric Alternatives to 125cc & 250cc",
    excerpt: "Shopping for a 125cc dirt bike, 150cc or 250cc dirt bikes? See which electric dirt bikes suit riders moving from petrol, and what to compare instead of engine size.",
    category: "Buyers Guide",
    date: "2026-10-06",
    readTime: "7 min read",
    image: "/images/hero_talaria_ridge_1790338208529.jpg",
    imageAlt: "Talaria electric dirt bike on an Australian trail, an electric alternative to a 125cc or 250cc petrol dirt bike",
    content: `Riders searching for a 125cc dirt bike, a 150cc dirt bike or 250cc dirt bikes are often comparing petrol bikes by engine size. Electric dirt bikes do not have an engine size, so cc is the wrong number to compare. This guide explains what to compare instead and which electric bikes in our range suit riders coming from a 125cc, 150cc or 250cc petrol bike. We sell electric bikes only, so this is a guide to switching, not a petrol sales page.

### Why cc does not apply to electric bikes
Engine size describes a petrol engine's displacement. An electric bike is described by motor power in watts or kilowatts, battery energy in watt-hours, torque, weight and top speed. Two electric bikes with the same power can feel very different because of weight, gearing and the controller settings.

### What riders switching from a 125cc dirt bike should look at
For lighter trail and play riding, look at bikes around 50 kg with 6kW to 8kW of peak power. The [Sur-Ron Light Bee X](https://electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) is 6kW and 50 kg, the [Talaria XXX Black Edition](https://electricdirtbikeaustralia.com.au/shop/talaria-xxx-black-edition/) is 6.5kW and 50 kg, and the [Talaria Sting R MX4](https://electricdirtbikeaustralia.com.au/shop/talaria-sting-r-mx4/) is 8kW and 63 kg. Prices run from $5,490 to $7,290 AUD.

### Moving up from a 150cc dirt bike
If you want more speed and range than a small trail bike, look at the 10kW to 12.5kW class: the [Rawrr Mantis 72V](https://electricdirtbikeaustralia.com.au/shop/rawrr-mantis-72v/) at 10kW, the [E-Ride Pro-SS 2.0](https://electricdirtbikeaustralia.com.au/shop/e-ride-pro-ss-2-0/) at 12kW and the [Sur-Ron Ultra Bee](https://electricdirtbikeaustralia.com.au/shop/sur-ron-ultra-bee/) at 12.5kW.

### Riders coming from 250cc dirt bikes
For full-size enduro and motocross riding, look at the highest-output bikes: the [E-Ride Pro-SR](https://electricdirtbikeaustralia.com.au/shop/e-ride-pro-sr/) at 15kW, the [Talaria Dragon](https://electricdirtbikeaustralia.com.au/shop/talaria-dragon-enduro/) at 28kW and the [Stark Varg](https://electricdirtbikeaustralia.com.au/shop/stark-varg-ex-80hp/) at 60kW. Compare weight too, since the Dragon is 100 kg and the Stark Varg is 118 kg.

### What changes when you go electric
Electric dirt bikes are quiet, so you can ride where noise is a problem on private property. There are no oil changes, spark plugs or carburettor tuning, and a charge replaces a fuel stop. The trade-off is range, which is limited by battery size and listed as "up to" figures, and charging time. Our [electric vs petrol running costs](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-vs-petrol-motocross-running-costs/) guide compares the costs.

### Safety and legal use
Electric dirt bikes of this power are for private property and designated off-road areas, and you should wear a certified helmet and full gear. Whether a bike can be registered for the road depends on your state.

### Next steps
Browse all [electric dirt bikes for sale](https://electricdirtbikeaustralia.com.au/electric-dirt-bikes/), read the [electric dirt bike cost guide](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-cost-australia-price-guide/) and use our [adult electric dirt bike guide](https://electricdirtbikeaustralia.com.au/blog/adult-electric-dirt-bike-australia-best-models/) to narrow your shortlist.

### What to compare instead of cc
Replace engine size with five numbers: peak power, battery energy, torque, weight and charge time. A bike like the Sur-Ron Light Bee X lists 6kW of peak power, a 2,400Wh battery, 50 kg and a 75 km/h top speed. The Talaria Sting R MX4 lists 8kW, 2,700Wh, 63 kg and 85 km/h. The E-Ride Pro-SR lists 15kW, 3,240Wh, 67 kg and 100+ km/h. Those numbers describe an electric bike more honestly than any cc equivalent.

### A 125cc-style trail bike
For riders who like a light, nimble trail bike, the 50 kg class is the closest feel. The Sur-Ron Light Bee X and Talaria XXX are both listed at 50 kg, 75 km/h and up to 80 to 100 km of range. They are quiet, they need no clutch and gearshifts and they can be ridden on private land where a petrol bike's noise would be a problem.

### A 150cc-style all-rounder
For riders who want more top speed and range, the 8kW to 12kW class fills the gap. The Sting R MX4 lists 85 km/h and 110 km of range, the Rawrr Mantis lists 10kW, 85 km/h and 90 km, and the E-Ride Pro-SS 2.0 lists 12kW, 95 km/h and 105 km. They are heavier at 63 kg to 65 kg, but still manageable for most adults.

### A 250cc-style enduro or motocross bike
For riders who want full-size power, the bikes with 15kW or more are the closest class: the E-Ride Pro-SR at 15kW, the Arctic Leopard at 15kW, the Talaria Dragon at 28kW and the Stark Varg at 60kW. Our [high-performance guide](https://electricdirtbikeaustralia.com.au/blog/high-performance-electric-dirt-bike-australia/) compares them.

### Charging replaces refuelling
A petrol rider fills a tank in minutes. An electric rider recharges a battery, which can take hours for a large pack, so plan for charging between sessions or buy a spare battery. Our [fast charger guide](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-fast-chargers-and-solar-generators/) explains charger options.

### Maintenance differences
Electric dirt bikes have no oil changes, spark plugs, air filter cleaning or carburettor tuning. They still need tyre, chain, brake and suspension care, and the battery needs proper charging and storage. See our [servicing cost guide](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-servicing-cost-guide-australia/).

### Noise and where you can ride
A quiet bike means fewer complaints on private land and a better ride experience, but it does not change the rules on where you may ride. Electric dirt bikes of this power are for private property and designated off-road areas.

### Road registered options
If you want road registered dirt bikes, an off-road electric dirt bike is not the answer. Road-registered electric bikes such as the NIU NQi GT or the Vmoto Soco TC-Max are listed as road-legal and LAMS approved, and our [electric moped and LAMS guide](https://electricdirtbikeaustralia.com.au/blog/electric-moped-vs-e-scooter-australia-lams-guide/) compares them. Rules differ by state, so check with your state transport authority.

### Switching checklist
Before you switch from a petrol dirt bike, decide where you will charge, how you will transport the bike, how much range you need per session and what you want to spend. Read the [electric dirt bike cost guide](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-cost-australia-price-guide/).

### Learning to ride an electric bike if you ride petrol
An electric dirt bike has no clutch lever and no gear shifting on most models, so the first adjustment is to use only the throttle and brakes. Torque arrives instantly, so be gentle on the throttle at low speed. Many electric bikes have regenerative braking, which slows the bike when you roll off the throttle and feels different from engine braking on a petrol bike. Spend a session on easy ground learning how the bike accelerates and brakes before you ride your usual trails.

### Dealing with range and charging
A petrol rider can carry fuel and refill in minutes, but an electric rider recharges a battery, which can take hours for a large pack. Plan sessions around the listed range, treat "up to" figures as the best case and keep a reserve. Charge on a hard non-flammable surface and follow the advice on the [NSW Government lithium-ion battery page](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices).

### What petrol riders gain and miss
Riders who switch often mention the quiet running, the lack of oil changes and fuel handling, and the instant torque. What they miss is the long refuel-and-go range and the sound of the engine. Our guide to [electric vs petrol motocross running costs](https://electricdirtbikeaustralia.com.au/blog/electric-dirt-bike-vs-petrol-motocross-running-costs/) compares costs, and our [electric motorbike vs petrol guide](https://electricdirtbikeaustralia.com.au/blog/electric-motorbike-vs-petrol-australia-2026/) covers road bikes.

### Which electric bike should a 125cc rider pick?
If you ride light, nimble trails and want a bike near 50 kg, look at the Sur-Ron Light Bee X at $6,490 AUD or the Talaria XXX Black Edition at $5,490 AUD. If you want a bit more speed and range with a still manageable weight, look at the Talaria Sting R MX4 at $7,290 AUD or the Rawrr Mantis at $8,190 AUD. If you want a high-power bike with more battery for long days, look at the E-Ride Pro-SS 2.0 at $8,690 AUD. If you are moving from a 250cc enduro or motocross bike, look at the E-Ride Pro-SR, the Talaria Dragon or the Stark Varg. Finally, give yourself time to adapt. Most petrol riders are comfortable on an electric bike within a few sessions, but the first rides feel different because the bike is silent, there is no clutch and the torque is instant. Ride in a familiar place, use a lower power mode and enjoy the quiet.

### Where to buy: 250 dirt bike for sale, electric alternative
If you are looking at a 250 dirt bike for sale, the closest electric alternatives are the E-Ride Pro-SR at $9,990 AUD, the Talaria Dragon at $13,990 AUD and the Stark Varg models from $16,990 AUD. Shoppers who want road registered dirt bikes should look at our road-legal electric mopeds and motorcycles, and anyone comparing motorcycle dirt bikes for sale can browse every model on our [electric dirt bikes](https://electricdirtbikeaustralia.com.au/electric-dirt-bikes/) page. Free freight applies to orders over $1,500 AUD, crypto and PayID payments receive 10% off and each bike has a 12-month Australian warranty.

### Quick answers

What is the electric equivalent of a 125cc dirt bike? There is no exact equivalent because electric bikes have no engine size. Compare peak power, battery energy, torque and weight. Bikes like the Sur-Ron Light Bee X at 6kW and 50 kg are a common starting point.

Do you sell 125cc, 150cc or 250cc petrol dirt bikes? No. We sell electric dirt bikes only, from about $5,490 AUD.

What are the downsides of switching to an electric dirt bike? Range is limited by battery size and shown as "up to" figures, and recharging takes time. The upsides are quiet running and no oil changes, spark plugs or carburettor tuning.

### Official sources and further reading
For manufacturer information see the [Sur-Ron site](https://www.surron.com/) and the [Stark Future site](https://www.starkfuture.com/). For background on how electric motorcycles work see the [Wikipedia overview of electric motorcycles and scooters](https://en.wikipedia.org/wiki/Electric_motorcycles_and_scooters), and for battery safety see the [NSW Government lithium-ion battery page](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices).`,
  },
  {
    slug: "kids-ebike-australia-evo-racing-lil-rippa-compared",
    title: "Kids Ebike Australia: EVO Racing, Lil Rippa & Warrior Compared",
    excerpt: "Compare kids ebike models in Australia: EVO Racing 16, 18 and 20 inch, the Lil Rippa fat tyre and the Warrior SX-E500, by motor, battery, range, speed and price.",
    category: "Comparisons",
    date: "2026-10-06",
    readTime: "7 min read",
    image: "/images/ampd/evo-racing-16-electric-bike-1.jpg",
    imageAlt: "EVO Racing 16 inch kids electric bike, one of the kids ebike models compared by motor, battery and price",
    content: `A kids ebike is a small electric bike for children, and the right one depends on the child's height and age, the motor power and the battery. This guide compares the childs electric bike models we stock from Ampd Bros and RFN, using the specifications in our product listings. All of these are designed for private property and supervised off-road riding, not for public roads, and they should be used with a helmet and protective gear.

### EVO Racing 16 inch
The [EVO Racing 16 inch](https://electricdirtbikeaustralia.com.au/shop/evo-racing-16-electric-bike/) has a 350W brushless motor, a 24V 5Ah battery, up to 15 km of range and a 25 km/h top speed, with a 16 inch wheel, a seat height of 620 to 760 mm and a maximum load of 50 kg. It has parental controls and hydraulic disc brakes. It is $1,599 AUD.

### EVO Racing 18 inch
The [EVO Racing 18 inch](https://electricdirtbikeaustralia.com.au/shop/evo-racing-18-kids-electric-bike/) has a 500W motor, a 36V 5Ah battery, up to 15 km of range and a 30 km/h top speed, with a seat height of 660 to 760 mm and a 50 kg maximum load. It is $1,999 AUD.

### EVO Racing 20 inch
The [EVO Racing 20 inch](https://electricdirtbikeaustralia.com.au/shop/evo-racing-20-electric-bike/) has a 750W motor, a 36V 10Ah battery, up to 20 km of range and a 35 km/h top speed, with a seat height of 665 to 850 mm and a 70 kg maximum load. It is $2,399 AUD.

### Lil Rippa 16 inch fat tyre
The [Lil Rippa 16 inch kids electric bike](https://electricdirtbikeaustralia.com.au/shop/lil-rippa-16-kids-fat-electric-bike/) has a 500W hub motor and a 36V 13Ah, 468Wh removable battery, with 40 km or up to 120 minutes of range in Eco mode. The top speed is up to 35 km/h and can be limited. It weighs 20.58 kg, has 16 x 4.0 inch fat tyres and is recommended for riders 95 cm and taller, with a 100 kg maximum load. It is $1,999 AUD.

### WARRIOR KIDS SX-E500
The [Warrior Kids SX-E500](https://electricdirtbikeaustralia.com.au/shop/rfn-warrior-kids-sx-e500-electric-bike/) has a 500W motor (700W peak) with chain drive and a 36V 7.5Ah hot-swappable battery, up to 25 km or 1 hour 15 minutes of run time, a speed limit that can be adjusted up to 35 km/h, and 14 x 2.4 inch all-terrain tyres. It is $1,899 AUD, down from $2,299.

### How to choose
Pick by the child's height and the bike's seat height range first. Choose a bike with speed limiting or parental controls. Compare battery size and listed range, because a bigger battery means longer riding between charges. The Lil Rippa has the largest listed battery of the group.

### Warranty and delivery
These bikes are supplied and shipped by Ampd Bros from the Gold Coast, Queensland, with a 1-year supplier warranty (the Warrior SX-E500 is 1 year or 3,000 km under the RFN terms), and a signature is required on delivery. Supplier delivery estimates run from 2 to 6 days to QLD up to 16 days to WA and TAS.

### Read next
See the [kids electric bikes](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/kids/) page and the [fat tyre electric bikes](https://electricdirtbikeaustralia.com.au/electric-fat-tyre-bikes/) page. Compare petrol-style kids bikes in our [childs dirt bike guide](https://electricdirtbikeaustralia.com.au/blog/childs-dirt-bike-australia-electric-options/) and read the [kids electric bike buying guide](https://electricdirtbikeaustralia.com.au/blog/kids-electric-bike-buying-guide-australia/). For safety, see [e-bike safety in Australia](https://electricdirtbikeaustralia.com.au/blog/e-bike-safety-australia-guide/).

### Battery energy and value
Battery energy tells you how long a kids ebike can run. The EVO Racing 16 inch has a 24V 5Ah battery, about 120Wh. The EVO 18 inch has a 36V 5Ah battery, about 180Wh. The EVO 20 inch has a 36V 10Ah battery, about 360Wh. The Lil Rippa lists 468Wh, and the Warrior SX-E500 has a 36V 7.5Ah battery, about 270Wh. Dividing the price by watt-hours, the EVO 16 costs about $13.33 per Wh, the EVO 18 about $11.11, the EVO 20 about $6.66, the Warrior about $7.03 and the Lil Rippa about $4.27, so the Lil Rippa gives the most battery for the price.

### Sizing a kids ebike by height
Check the seat height range. The EVO 16 inch is 620 to 760 mm, the EVO 18 inch is 660 to 760 mm and the EVO 20 inch is 665 to 850 mm. The Lil Rippa has a 560 mm seat height and is recommended for riders 95 cm and taller. The Warrior has 14 inch wheels. A smaller child on a bike that is too big cannot reach the ground, so size down rather than up.

### Maximum rider weight
The EVO 16 and 18 inch are listed at a 50 kg maximum load, the EVO 20 inch at 70 kg and the Lil Rippa at 100 kg. Always respect the limit, because it affects brakes, frame and battery performance.

### Speed control
Most of these bikes can be limited. The EVO models have parental controls, the Lil Rippa top speed of up to 35 km/h can be limited, and the Warrior has an adjustable speed limit up to 35 km/h. Start with the limiter low and raise it as the child improves.

### Fat tyres or all-terrain tyres
The Lil Rippa has 16 x 4.0 inch fat off-road tyres, which grip softer ground such as sand and loose soil. The Warrior has 14 x 2.4 inch all-terrain tyres. The EVO bikes have 16, 18 and 20 inch wheels with hydraulic disc brakes. Match the tyre to where the child rides.

### What counts as a mini bike
Searches for a mini bike dirt bike often mean a small powered bike for children. The kids electric bikes in this guide are small, lightweight and quiet, and our [mini electric bikes](https://electricdirtbikeaustralia.com.au/electric-mini-bikes/) page lists larger compact models. For a first petrol-style feel in electric, see our [childs dirt bike guide](https://electricdirtbikeaustralia.com.au/blog/childs-dirt-bike-australia-electric-options/).

### Warranty and delivery
The EVO and Lil Rippa bikes carry a 1-year Ampd Bros nationwide warranty on kids e-bikes. The Warrior is 1 year or 3,000 km under the RFN terms. Bikes are shipped from Burleigh Heads on the Gold Coast by Toll Ipec with a signature required on delivery. Supplier estimates are 2 to 6 days to QLD, 5 to 10 days to NSW, 6 to 14 days to VIC, SA, ACT and NT and up to 16 days to WA and TAS.

### Maintenance and care
Check tyre pressure before every ride, keep the chain or drive clean, check the brakes and fasteners and store the battery cool and dry. Charge on a hard surface and never leave a battery charging unattended; our [e-bike safety guide](https://electricdirtbikeaustralia.com.au/blog/e-bike-safety-australia-guide/) explains battery safety in detail.

### Where kids can ride
These bikes are designed for private property and supervised riding, not public roads or paths. Check your state rules before riding anywhere else.

### Teaching a child to ride an electric bike
Start in an open, flat private area with the speed limiter on its lowest setting. Practise starting, stopping and turning before anything else, and teach the child to use both brakes. Stand close and supervise every ride. Raise the speed limit one step at a time only when the child is consistently in control, and never leave a child to ride alone on a bike they have not mastered.

### Helmet fit and protective gear
A helmet should sit level on the head, fit snugly without moving, and fasten under the chin. Add gloves, sturdy shoes, long sleeves and trousers, and knee and elbow guards for off-road riding. Replace a helmet after a significant impact, and buy the child's gear at the same time as the bike so it is never skipped.

### A simple charging routine
Charge on a hard non-flammable surface, use the charger supplied with the bike and do not leave the battery charging overnight in a living area or while you sleep. Let the battery cool after a ride before charging. The [NSW Government lithium-ion battery page](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices) lists the advice, and our [e-bike safety guide](https://electricdirtbikeaustralia.com.au/blog/e-bike-safety-australia-guide/) summarises it.

### Fat tyre or standard kids ebike?
Fat tyres give more grip and float on soft surfaces such as sand and loose soil, which suits a child riding on a farm, a beach or a bush track. A standard all-terrain tyre rolls more easily on hard ground and tends to suit a child who rides on a flat, firm private area. The Lil Rippa is the fat tyre option in this comparison, and the EVO Racing and Warrior bikes use more conventional tyres. Choose the tyre for where the child will actually ride, and revisit the choice as the child grows.

### Where to buy: cheap electric bikes for sale for kids
Looking for cheap electric bikes for sale for children? The kids bikes in this guide run from $1,599 AUD for the EVO Racing 16 inch to $2,399 AUD for the EVO Racing 20 inch, with the Warrior SX-E500 at $1,899 AUD, reduced from $2,299. For a mini bike dirt bike feel in electric, compare them on our [kids electric bikes](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/kids/) and [fat tyre electric bikes](https://electricdirtbikeaustralia.com.au/electric-fat-tyre-bikes/) pages. If you want an electric bike for sale Melbourne families can order online, the supplier lists 6 to 14 days delivery to Victoria and our [Melbourne delivery guide](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/melbourne/) explains freight. Crypto and PayID payments receive 10% off.

### Quick answers

What is the cheapest kids ebike you sell? The EVO Racing 16 inch is $1,599 AUD, with a 350W motor and a 25 km/h top speed.

Which kids ebike has the longest range? The Lil Rippa 16 inch is listed at 40 km or up to 120 minutes in Eco mode, the longest range in this comparison.

Are these kids ebikes road legal? No. They are designed for private property and supervised off-road riding, with a helmet and protective gear.

### Official sources and further reading
For battery and product safety see the [NSW Government lithium-ion battery page](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices), the [Queensland Fire Department page](https://www.fire.qld.gov.au/safety-education/battery-and-charging-safety/lithium-ion-battery-safety) and the [ACCC Product Safety page](https://www.productsafety.gov.au/business/e-bikes-e-scooters-and-other-e-micromobility-devices). For how e-bikes work see the [Wikipedia article on electric bicycles](https://en.wikipedia.org/wiki/Electric_bicycle).`,
  },
  {
    slug: "electric-moped-vs-e-scooter-australia-lams-guide",
    title: "Moped E Scooter Australia: LAMS, Licence, Range & Prices",
    excerpt: "Moped or e scooter? Compare electric mopeds and motorcycles in Australia by power, range, LAMS approval and price: NIU NQi GT, Super Soco CPx and Vmoto TC-Max.",
    category: "Comparisons",
    date: "2026-10-06",
    readTime: "7 min read",
    image: "/images/product-super-soco-cpx.jpg",
    imageAlt: "Super Soco CPx electric moped, road-legal electric moped sold in Australia, compared with other mopeds and e-scooters",
    content: `People searching for a moped e scooter are usually weighing a small electric scooter against an electric moped or motorcycle. The difference matters for the law: electric mopeds and motorcycles are road vehicles that need registration and a licence, while e-scooter rules are set separately by each state and territory. This guide compares the electric mopeds and motorcycles in our range using the specifications in our product listings. We do not sell kick scooters, so check your state's rules if you are considering one.

### NIU NQi GT
The [NIU NQi GT electric moped](https://electricdirtbikeaustralia.com.au/shop/niu-nqi-gt-electric-moped/) is listed as road-legal and LAMS approved, legal for L and P-plate riders in all states, with a 3,000 watt motor, a 72V 26Ah dual removable lithium battery, a 70 km/h top speed, up to 100 km of range on the dual battery and a 98 kg weight. It is $5,990 AUD, down from $6,490.

### Super Soco CPx
The [Super Soco CPx](https://electricdirtbikeaustralia.com.au/shop/super-soco-cpx-electric-moped/) has a 3kW motor, a 60V 30Ah removable battery, a 65 km/h top speed, up to 90 km of range and an 85 kg weight. It has keyless Bluetooth start and regenerative braking, and the battery can be removed to charge at home or in an office. It is $5,490 AUD.

### Vmoto Soco TC-Max
The [Vmoto Soco TC-Max](https://electricdirtbikeaustralia.com.au/shop/vmoto-soco-tc-max-electric/) is a 5kW electric motorcycle with a dual removable 4.8kWh battery, a 95 km/h top speed, up to 120 km of range, WP adjustable suspension and a 117 kg weight. It is listed as LAMS compliant for road registration, at $8,990 AUD.

### Electric bike alternative: 250W commuter
If you want something lighter that follows e-bike rules, the [RTR eBike Pro](https://electricdirtbikeaustralia.com.au/shop/rtr-ebike-pro-commuter/) is a 250W commuter with a 25 km/h assist limit, up to 80 km of range, Shimano 7-speed gears and a 22 kg weight, at $3,490 AUD. E-bike rules differ by state, so read our guides to [electric bike laws in QLD](https://electricdirtbikeaustralia.com.au/blog/electric-bike-laws-qld-2026/) and [electric bike regulations in NSW](https://electricdirtbikeaustralia.com.au/blog/electric-bike-regulations-nsw-2026/).

### LAMS, licence and registration
LAMS lets learner and provisional motorcycle licence holders ride approved bikes. A moped or motorcycle needs registration and the correct licence class in your state, and insurance is a separate decision. Our guides to [road legal electric motorcycles](https://electricdirtbikeaustralia.com.au/blog/road-legal-electric-motorcycle-australia-guide/) and [electric bike registration in NSW](https://electricdirtbikeaustralia.com.au/blog/electric-bike-registration-nsw-guide/) explain more.

### E-scooter rules
E-scooters are regulated differently from e-bikes and mopeds, and private e-scooter rules vary by state and territory. The [NSW Government e-bikes and e-scooters page](https://www.nsw.gov.au/driving-boating-and-transport/bikes-e-bikes-e-scooters) is one official place to check how a state treats them.

### Which should you choose?
Choose an electric moped or motorcycle if you want road speed above 25 km/h, a longer range and a seat. Choose a 250W e-bike if you want a lighter bike under e-bike rules. See our full [electric mopeds for sale](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/commuter-mopeds/) range, the [electric motorcycles](https://electricdirtbikeaustralia.com.au/electric-motorcycles/) page and our [Australian electric motorcycle guide](https://electricdirtbikeaustralia.com.au/blog/australian-electric-motorcycle-guide-2026/).

### Moped prices and cost per kilometre
Moped prices in our range are $5,490 AUD for the Super Soco CPx, $5,990 AUD for the NIU NQi GT and $8,990 AUD for the Vmoto Soco TC-Max. Dividing price by listed range gives about $61 per listed kilometre for the Super Soco CPx, about $60 for the NIU NQi GT and about $75 for the Vmoto, while the RTR eBike Pro at $3,490 AUD and 80 km works out at about $44 per kilometre. Range figures are "up to" values, so the comparison is a guide, not a promise.

### Batteries and charging at home
The Super Soco CPx has a 60V 30Ah removable battery, about 1,800Wh, and the Vmoto Soco TC-Max has a dual removable 4.8kWh battery. Removable batteries let you charge indoors or in an office. Follow the charging and storage advice in our [e-bike safety guide](https://electricdirtbikeaustralia.com.au/blog/e-bike-safety-australia-guide/), including charging on a hard surface, never leaving a battery charging overnight in a living area and using the right charger.

### Weight and handling
The Super Soco is listed at 85 kg, the NIU at 98 kg and the Vmoto at 117 kg, against 22 kg for the RTR eBike Pro. A moped's weight gives it stability at speed but makes it harder to move by hand, so check where you will park and store it.

### City commuting or suburban riding
For short urban trips at speeds up to 65 to 70 km/h, the NIU NQi GT and Super Soco CPx fit well. For faster suburban roads and longer trips, the Vmoto Soco TC-Max has a 95 km/h top speed and 120 km of listed range. For quiet paths and light commuting under e-bike rules, the RTR eBike Pro is lighter and cheaper.

### Learner, provisional and full licences
LAMS-approved bikes can be ridden by learner and provisional motorcycle licence holders, and our listing for the NIU NQi GT says it is legal for L and P-plate riders in all states. Moped and motorcycle licensing differs by state, so check your state authority for the licence class needed for each model and whether a moped is treated as a motorcycle in your state.

### Registration and insurance
Mopeds and motorcycles need registration, and compulsory third-party insurance is arranged differently in each state, so check your state authority. Optional insurance for theft or damage is a separate decision. For process details see [electric bike registration in NSW](https://electricdirtbikeaustralia.com.au/blog/electric-bike-registration-nsw-guide/).

### Safety gear
Wear an approved motorcycle helmet, gloves, a jacket and sturdy footwear. A moped is a road vehicle, and a fall at 60 km/h is more serious than a bike fall at 25 km/h.

### E-scooters in more detail
E-scooters are regulated separately, and the rules on where and how private e-scooters can be used differ by state and territory. The [NSW Government e-bikes and e-scooters page](https://www.nsw.gov.au/driving-boating-and-transport/bikes-e-bikes-e-scooters) is one official place to check, and other states have similar pages. We do not sell kick scooters, so this guide focuses on mopeds and motorcycles.

### Compare more
See the full [electric mopeds for sale](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/commuter-mopeds/) range, the [electric motorcycles](https://electricdirtbikeaustralia.com.au/electric-motorcycles/) category and our [RTR eBike vs Super Soco CPx comparison](https://electricdirtbikeaustralia.com.au/blog/rtr-ebike-vs-super-soco-cpx-commuter-comparison/).

### Test ride and ownership checklist
When you test an electric moped, check how smoothly it pulls away, how the regenerative braking feels, how easy the removable battery is to release and carry, and how comfortable the seat and bars are. Ask about the warranty, the battery warranty and the availability of parts and service. Check where you will park and charge the bike and how you will lock it.

### Security and storage
Mopeds are a theft target, so use a strong disc lock or chain, park in a well-lit place and consider a ground anchor at home. Remove the battery if the design allows and take it indoors when you are away for a long time, and store it according to the manufacturer's advice. Follow the charging advice on the [NSW Government lithium-ion battery page](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices).

### Daily use and range planning
Plan trips around the real range, not the best-case figure. Cold weather, hills, a heavy rider and high speeds all reduce range. If your daily distance is close to the listed range, choose the bike with the larger battery or a dual removable battery, such as the NIU NQi GT or the Vmoto Soco TC-Max.

### Moped or 250W e-bike: a quick decision guide
Choose a moped or motorcycle if you need speeds above 25 km/h, a longer range, a seat for a longer commute and you are happy to register the bike and hold the right licence. Choose a 250 watt e-bike if you want a light bike that follows e-bike rules, can be stored easily and does not need registration. If you are on a learner or provisional motorcycle licence, ask about LAMS approval. If you commute in traffic every day, a moped's speed may matter more than an e-bike's low running costs. Read the [Queensland](https://electricdirtbikeaustralia.com.au/blog/electric-bike-laws-qld-2026/) and [NSW](https://electricdirtbikeaustralia.com.au/blog/electric-bike-regulations-nsw-2026/) e-bike guides for the e-bike rules. Take time to compare insurance quotes and registration costs for your state before you buy, and ask the seller which accessories, such as a top box, a phone mount and a windscreen, are available for the model you choose. Check the service arrangements so that you know where to take the bike for servicing.

### Where to buy: moped prices and road registered electric bikes
Checking moped prices? The three road-legal models in this guide are $5,490 AUD, $5,990 AUD and $8,990 AUD. If you want a road registered electric bike, the NIU NQi GT is listed as road-legal and LAMS approved and the Vmoto Soco TC-Max is listed as LAMS compliant for road registration. For electric road bikes for sale, browse our [electric mopeds](https://electricdirtbikeaustralia.com.au/electric-motor-bikes/commuter-mopeds/) and [electric motorcycles](https://electricdirtbikeaustralia.com.au/electric-motorcycles/) pages. Free freight applies on orders over $1,500 AUD, crypto and PayID payments receive 10% off and each bike has a 12-month Australian warranty.

### Quick answers

Which electric moped is LAMS approved? The NIU NQi GT is listed as road-legal and LAMS approved, legal for L and P-plate riders in all states.

How far can an electric moped go on one charge? Our listings show up to 100 km for the NIU NQi GT on its dual battery, 90 km for the Super Soco CPx and 120 km for the Vmoto Soco TC-Max.

What is the difference between an electric moped and an e-scooter? Mopeds and motorcycles are road vehicles that need registration and a licence. E-scooter rules are set separately by each state and territory, so check your state authority.

### Official sources and further reading
For background on how electric motorcycles and scooters work see the [Wikipedia overview](https://en.wikipedia.org/wiki/Electric_motorcycles_and_scooters). For e-scooter and e-bike rules see the [NSW Government e-bikes and e-scooters page](https://www.nsw.gov.au/driving-boating-and-transport/bikes-e-bikes-e-scooters). For battery safety see the [Queensland Fire Department page](https://www.fire.qld.gov.au/safety-education/battery-and-charging-safety/lithium-ion-battery-safety).`,
  },
];

export const COMPLIANCE = {
  bannedTerms: [],
  requiredFramings: [],
  prohibitedClaims: [],
  ageGate: false,
  ageMinimum: null,
  gdpr: false,
  disclaimer: 'Electric Dirt Bikes sold on this website are high-performance off-road recreational vehicles intended for private property and designated off-road tracks. Always wear an approved helmet, protective armor, and boots. Read manufacturer safety manuals before operation.',
};

// Ampd Bros range (generated by scripts/sync-ampd-products.mjs). Appended here so the generated catalogue above is left untouched.
import { AMPD_PRODUCTS, AMPD_BRANDS, AMPD_CATEGORIES } from './products-ampd';
PRODUCTS.push(...AMPD_PRODUCTS);
BRANDS.push(...AMPD_BRANDS);
CATEGORIES.push(...AMPD_CATEGORIES);

// New blog posts (generated by "new keywords e bikes/assemble-posts.cjs"). Appended here so the generated catalogue above is left untouched.
import { NEW_POSTS } from './posts-2026-10';
POSTS.push(...NEW_POSTS);

// Products imported from the user's old site (generated by "new keywords e bikes/import-old-site.cjs").
import { OLD_SITE_PRODUCTS, OLD_SITE_BRANDS, OLD_SITE_CATEGORIES } from './products-old-site';
PRODUCTS.push(...OLD_SITE_PRODUCTS);
// Skip brands already listed (rfn, e-ride-pro): their products still match through the shop's brand filter, and duplicate slugs repeat items in the menu.
BRANDS.push(...OLD_SITE_BRANDS.filter((b) => !BRANDS.some((x) => x.slug === b.slug)));
CATEGORIES.push(...OLD_SITE_CATEGORIES);
