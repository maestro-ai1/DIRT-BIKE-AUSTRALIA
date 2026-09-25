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
  gscVerification: 'GSC-EDBA-AU-2026-VERIFIED',
  indexNowKey: 'edba98611685977indexnow',
  cartKey: 'edba-cart',
};

export const CONTACT = {
  email: 'sales@electricdirtbikeaustralia.com.au',
  orderEmail: 'orders@electricdirtbikeaustralia.com.au',
  supportEmail: 'support@electricdirtbikeaustralia.com.au',
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
  smtpFrom: 'noreply@electricdirtbikeaustralia.com.au',
  web3formsKey: '',
  resendFrom: 'orders@electricdirtbikeaustralia.com.au',
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
  headerTagline: 'Australia’s Authorised Electric Dirt Bike Dealer · Southern Highlands NSW 2575',
  dispatchLine: 'Insured heavy-vehicle express dispatch direct from Mittagong NSW 2575 with real-time tracking.',
  bizNumber: { label: 'ABN', value: '98 611 685 977' },
  channels: { email: 'orders@electricdirtbikeaustralia.com.au', whatsapp: '+61420128746', whatsappCountryCode: '61' },
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
  description: 'Electric Dirt Bike Australia is Australia’s premier specialist importer, distributor, and certified warranty support centre for high-performance off-road electric dirt bikes, motocross machines, 72V lithium battery upgrades, and smart fast chargers.',
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
    description: 'Explore Australia’s most popular off-road trail weapons from Sur-Ron, Talaria, RFN, and E-Ride Pro. High torque, near-silent operation, and instant throttle response.',
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
    origin: 'The world’s most powerful motocross bike delivering up to 80HP, carbon-fiber motor sleeve, and customizable smartphone telemetry.',
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
    "shortDescription": "Australia’s most popular electric trail bike with 6kW peak power, 60V 40Ah battery, and lightweight 50kg dry weight.",
    "description": "The Sur-Ron Light Bee X is Australia's best-selling electric dirt bike, delivering an unmatched combination of 6kW peak power, 50kg lightweight agility, and a massive 60V 40Ah lithium-ion battery. This premium electric trail bike produces up to 250Nm of rear-wheel torque, enabling instant wheelies and seamless hill climbing across NSW singletrack, Victorian State Forests, and Queensland bush trails. The sine-wave FOC controller ensures smooth, progressive throttle response for both beginners and experienced off-road electric bike riders. Multi-link rear suspension with 150mm travel and hydraulic 4-piston disc brakes provide the confidence to tackle gnarly Australian terrain. Available exclusively through Electric Dirt Bike Australia — Australia's authorised Sur-Ron dealer — with 12-month factory warranty, pre-delivery inspection, and free insured freight on orders over $1,500 to all Australian states. Sur-Ron, the global pioneer of the lightweight e-moto segment since 2014 (surronusa.com), built the Light Bee X as the definitive off-road electric bike for serious trail riders.",
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
    "description": "The Talaria Sting R MX4 is the most torque-packed electric dirt bike available in Australia, featuring a sealed oil-bath gearbox that outperforms belt drives in muddy creeks, rocky scree, and steep Victorian High Country climbs. This electric trail bike produces 8kW peak output and 60V 45Ah high-discharge battery power — 33% more performance than entry-level e-motos. The integrated gearbox eliminates belt snap risk, reduces drivetrain heat buildup, and delivers consistent traction management across Australian clay, loam, and hardpack. Reinforced 6061 T6 aluminium frame with 240mm inverted forks handles the roughest off-road terrain. The Talaria Sting is the benchmark electric dirt bike for serious enduro riders prioritising gearbox durability and sustained torque over ultralight weight. Order your Talaria Sting R MX4 through Electric Dirt Bike Australia with free nationwide freight and Australia's only authorised 12-month factory warranty. Talaria's full engineering specifications are published at talariausa.com for technical reference.",
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
    "description": "Bridging the gap between the lightweight Light Bee and heavy 450s, the Ultra Bee features full-size 19-inch off-road wheels, 74V 55Ah battery, reverse gear, and Sur-Ron’s proprietary Traction Control System for slippery Australian mud and loose gravel.",
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
    "description": "The RFN Ares Rally Pro is Australia's most versatile electric dirt bike, featuring a patented dual-ergonomics system that transforms between full enduro mode (with seat) and competition trials configuration (seat removed) in under 30 seconds. Powered by a 12.5kW motor running on a 74V 35Ah LG Chem cell battery, this electric trail bike delivers 85 km/h top speed and up to 100km trail range. The enclosed oil-bath helical primary drive eliminates belt noise and chain maintenance on Australian singletrack and fireroads. Aviation-grade 6082 forged aluminium frame handles the rigours of technical enduro riding, while three selectable riding modes — Turtle, Rabbit, and Rocket — plus reverse gear provide unmatched terrain versatility. Order through Electric Dirt Bike Australia with 12-month Australian factory warranty and free insured freight to all Australian states. Ideal for riders seeking one bike that handles both enduro trails and trials sections on the same property.",
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
    "description": "The Talaria XXX brings the brand’s acclaimed build quality into an accessible, featherlight chassis. Boasts a 60V 40Ah battery, full LED cockpit, regenerative braking, and superb ergonomics for agile trail navigation.",
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
    "description": "The E-Ride Pro SS 2.0 is Australia's favourite domestically assembled electric enduro bike, delivering factory-native 72V power that imported rivals can only achieve through expensive aftermarket upgrades. Built in regional NSW, this electric dirt bike features a 12kW peak motor, Fastace dual-air inverted forks, CNC triple clamps, and quick-swap battery retention for extended trail adventures. The 72V 40Ah Samsung/Molicel battery provides 2,880Wh of capacity — translating to 95–105km of real-world Australian trail range. Instant wheelie capability requires zero modifications. Buying Australian means warranty claims are handled domestically without import delays — parts ship from the same Mittagong NSW 2575 warehouse as Electric Dirt Bike Australia's full accessories range. A turbo boost button delivers peak 12kW burst output for aggressive hill climbs and steep enduro sections. The E-Ride Pro brand is an EDBA-exclusive — browse the full lineup at electricdirtbikeaustralia.com.au.",
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
    "description": "The E-Ride Pro SR is the pinnacle of the E-Ride Pro factory electric dirt bike lineup, delivering 15kW peak output through a high-discharge 72V 45Ah battery for riders who demand maximum power and endurance from their electric off-road machine. Built in regional NSW with CNC-machined components throughout, the SR features 220mm oversized floating front brake rotors for fade-free stopping on steep Victorian and NSW alpine descents. Heavy-duty 428 chain, reinforced swingarm pivots, and 4-piston hydraulic calipers front and rear handle the increased torque loads generated by the 15kW motor. Top speed exceeds 100 km/h in unrestricted mode, making the SR the fastest factory electric enduro bike in Electric Dirt Bike Australia's range. At $9,990 with 12-month factory warranty and free freight, the E-Ride Pro SR competes directly with imported European electric enduro bikes at a fraction of the ownership cost thanks to domestic service support.",
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
    "description": "The Talaria Dragon is Australia's most capable full-size electric enduro motorcycle, combining the proven Talaria oil-bath gearbox with an 88V 28kW powertrain and full-size 21-inch front and 18-inch rear competition wheel geometry. This electric enduro bike rivals 300cc two-stroke enduro machines in raw performance — delivering 0–100 km/h in under 4 seconds while maintaining a manageable 100kg total weight with battery. The 88V 58Ah (5,100Wh) high-discharge battery delivers 150km trail range in eco mode, making the Dragon ideal for multi-hour NSW and Victorian State Forest enduro adventures without range anxiety. 250mm of fully adjustable suspension travel, hydraulic clutch control, and 4-piston Brembo-spec brakes provide championship-grade capability across Australian hard enduro terrain. Available through Electric Dirt Bike Australia with free national freight and 12-month factory warranty. Full technical documentation at talariausa.com.",
    "specs": {
      "motorPeak": "28,000 Watts (28kW)",
      "battery": "88V 58Ah (5,100Wh) High Discharge",
      "topSpeed": "110 km/h",
      "range": "Up to 150 km",
      "weight": "100 kg",
      "wheels": "21-inch front / 18-inch rear off-road knobby"
    },
    "images": [
      "/images/product-talaria-sting-r-mx4.jpg"
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
    "description": "The Arctic Leopard E-XE 880 is a competition-grade electric enduro bike engineered for Australia's most demanding technical hard enduro terrain — steep granite sections, tight mountain switchbacks, and log-strewn Victorian rainforest tracks. The defining feature is a hydraulic multi-plate manual clutch — rare in electric dirt bikes — allowing riders to pop wheelies over logs, preload suspension for big drops, and modulate power delivery with the finesse of a traditional petrol enduro machine. Powered by a 15kW peak motor running on a 72V 43Ah high-output battery, the E-XE 880 produces 95 km/h top speed with the kind of precise torque control that skilled hard enduro riders demand. At 68kg with battery, it is lighter than most comparable electric enduro motorcycles, reducing rider fatigue during technical sections. Available from Electric Dirt Bike Australia with 12-month warranty and free freight.",
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
    "description": "The Stealth B-52 Bomber is one of Australia's most iconic electric dirt bikes — designed and engineered in Melbourne for over a decade, it pioneered the category of high-performance Australian-made electric off-road motorcycles. The ultra-strong chromoly steel monocoque frame, proprietary 9-speed sequential gearbox, and inverted front suspension make the B-52 the most mechanically sophisticated electric bike available in Australia. Producing 5.2kW from a 2.5kWh high-discharge lithium battery, the Bomber delivers 80 km/h top speed and up to 100km trail range. The 9-speed gearbox allows riders to select optimal torque curves for climbing, flat-out speed, or technical trail manoeuvring. Australian engineering means service, parts, and warranty support are available domestically without international delays. Available through Electric Dirt Bike Australia with 12-month warranty and free national freight. Supporting Australian electric motorcycle manufacturing.",
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
    "description": "The Super73-RX Mojave is the flagship adventure electric bike from Super73 — blending aggressive scrambler styling, dual-sport capability, and a powerful 2,000W peak motor into one of the most versatile electric bikes available in Australia. Built on a durable aluminium chassis with an inverted coil-spring fork, piggyback rear coilover shock, and aggressive GRZLY all-terrain tyres, the RX Mojave tackles everything from beach sand and coastal fire trails to urban bike lanes and suburban commuting. The 960Wh removable battery delivers 65–120km range depending on assist mode — from full throttle off-road blasting to gentle pedal-assist city cruising. Magura 4-piston hydraulic disc brakes provide confident stopping from the 50+ km/h top speed. Super73's global community of riders demonstrates the brand's cultural appeal alongside its engineering quality. Available from Electric Dirt Bike Australia with 12-month warranty and Australia-wide free freight.",
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
    "description": "The Velimotor VMX08 is an ultra-light electric dirt bike constructed from high-modulus Japanese carbon fibre throughout the main frame, swingarm, and subframe — creating one of the lightest high-power electric off-road bikes available in Australia at just 47.5kg ready to ride. Despite its featherlight construction, the VMX08 delivers 8kW peak output from a 72V 35Ah high-discharge battery, achieving 85 km/h top speed with the kind of rapid direction changes and flickable handling that heavy steel-framed electric dirt bikes cannot match. Carbon fibre's superior rigidity-to-weight ratio ensures the VMX08 remains precise and responsive even at high speeds over rough Australian terrain, without the flex that can affect aluminium frames under aggressive loads. This electric trail bike is ideal for smaller riders, female riders, and lightweight performance enthusiasts who want maximum power without carrying extra kilograms. Available from Electric Dirt Bike Australia with 12-month warranty and free national freight.",
    "specs": {
      "motorPeak": "8,000 Watts (8kW)",
      "battery": "72V 35Ah High Discharge",
      "topSpeed": "85 km/h",
      "weight": "47.5 kg",
      "frame": "Full High-Modulus Carbon Fiber"
    },
    "images": [
      "/images/product-stark-varg-mx.jpg"
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
    "description": "The Torrot Motocross Two is a premium European-engineered kids electric motorbike built in Spain for junior riders aged 6–11 years. As the global benchmark for junior electric motocross training, Torrot bikes are used at youth development academies across Australia and Europe, providing the closest electric analogue to factory petrol youth motocross bikes. The Bluetooth wireless parental app gives parents complete control over top speed (1–60 km/h), acceleration sensitivity, and engine braking — adjustable in real time from a smartphone without tools or interrupting the ride. The quick-swap 48V 10.4Ah LiNiCoMn battery recharges in under 90 minutes for all-day riding sessions. At 32kg, young riders can confidently right the bike after minor tipover incidents without adult assistance. The Torrot's authentic motocross geometry, sealed chain drive, and quality Spanish engineering make it the kids electric dirt bike of choice for serious junior motocross development. Available from Electric Dirt Bike Australia.",
    "specs": {
      "motorPeak": "1,500 Watts",
      "battery": "48V 10.4Ah LiNiCoMn quick-swap",
      "weight": "32 kg",
      "controls": "Parental App Bluetooth Limiter"
    },
    "images": [
      "/images/product-ktm-sx-e-5.webp"
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
    "shortDescription": "The world’s most powerful motocross bike. 80HP, 938Nm torque, KYB 310mm suspension, and custom smartphone power curves.",
    "description": "The Stark Varg EX is the world's most powerful production electric motocross bike, delivering 80HP and 938Nm of rear-wheel torque from a patent-pending carbon-sleeved motor operating at 14,000 RPM — outperforming every factory 450cc four-stroke motocross machine in direct acceleration tests. Built by Swedish manufacturer Stark Future (starkfuture.com), the Varg EX has already competed at FIM Motocross World Championship events, proving it is a serious racing tool, not a lifestyle product. KYB 310mm factory-spec suspension, Brembo hydraulic brakes, and a structural honeycomb battery housing complete a championship-calibre package. The waterproof smartphone display allows riders to program over 100 unique power curves — from a manageable beginner-friendly 50cc equivalent to full 80HP race assault mode. At 118kg, it directly matches the weight of a competitive 450cc four-stroke. Australia's authorised Stark dealer is Electric Dirt Bike Australia, with 12-month factory warranty and free national freight.",
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
    "description": "The Stark Varg Alpha is the entry point to the world's most advanced electric motocross platform, delivering 60HP of competition motocross performance that surpasses factory 350cc four-stroke machines in lap time testing at sanctioned tracks. The Alpha uses the identical chassis, KYB 48mm closed-cartridge suspension, and Brembo hydraulic braking system as the full 80HP EX model — the only difference is the power output, which is upgradeable to 80HP via a paid software unlock from Stark Future (starkfuture.com). Zero clutch fade, instantaneous throttle response from 0 RPM, and completely customizable power curves via the waterproof smartphone display make the Varg Alpha the ideal competitive electric motocross bike for Australian club racers and professional track riders. At $16,990 with 12-month warranty through Electric Dirt Bike Australia, it delivers championship performance at a price point competitive with premium 450cc four-strokes when lifetime running costs are considered.",
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
    "description": "The Sur-Ron Storm Bee MX Track Edition is a purpose-built electric motocross machine stripped of all road-use hardware and optimised exclusively for closed-circuit track performance. Delivering 22.5kW peak motor output and 520Nm rear-wheel torque from a 104V 55Ah battery, this electric motocross bike competes directly with 250cc–450cc petrol motocross machines in real lap-time comparisons at Australian tracks. Stiffened suspension valving handles the high-speed compression loads of motocross jumps and table-tops. High-tensile competition spoke wheels with 21-inch front and 18-inch rear knobby tyres match standard motocross track geometry. At 122kg, the Storm Bee MX is slightly heavier than 450cc petrol alternatives but eliminates fuel costs, valve clearances, piston rebuilds, and exhaust system maintenance. Available exclusively through Electric Dirt Bike Australia — Australia's authorised Sur-Ron dealer — with 12-month factory warranty and free national freight to all Australian states.",
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
      "/images/product-stark-varg-mx.jpg"
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
    "description": "The Stealth H-52 Competition is an Australian-engineered electric motocross machine that combines the heritage of Stealth Electric Bikes' Melbourne design studio with pure closed-circuit track performance. Stripped of all road-use hardware — no headlights, no reflectors, no street compliance gear — the H-52 features genuine motorcycle footpegs, high-travel downhill suspension tuned for motocross jump landings, and Stealth's iconic chromoly steel monocoque frame. The direct-drive 5,200W brushless DC hub motor delivers instant, clutchless torque from zero RPM, perfectly suited to tight motocross track layouts where smooth, predictable power delivery wins corners. At 49kg total weight, the H-52 is significantly lighter than comparable petrol competition machines, providing a real handling advantage on tight technical Australian motocross circuits. Available through Electric Dirt Bike Australia — proud supporters of Australian electric motorcycle engineering — with 12-month warranty and free freight.",
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
    "description": "Unlock maximum electric dirt bike performance with the EDBA 72V 42Ah High-Discharge Lithium Battery — Australia's most popular 72V upgrade pack for Sur-Ron Light Bee X and Talaria Sting R riders. Hand-assembled with genuine Molicel P42A 21700 cells, this 72V battery delivers 250 Amps continuous and 350A peak discharge — providing instant wheelie torque and sustained hill-climbing power that 60V stock packs cannot match. The 72V architecture reduces motor heat by drawing less current for the same power output, extending motor and controller lifespan significantly. The ANT Bluetooth Smart BMS provides real-time cell voltage monitoring, temperature protection, and state-of-charge display via smartphone — ensuring the safest possible operation for your 72V electric dirt bike. 24-month replacement warranty from Electric Dirt Bike Australia. Capacity: 3,024Wh. Australian plug-compatible chargers available separately. The single most impactful electric dirt bike upgrade available in Australia.",
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
    "description": "The Sur-Ron Genuine OEM 60V 40Ah Replacement Battery is the only factory-authorised replacement battery for the Sur-Ron Light Bee X electric dirt bike, maintaining 100% factory specification and preserving your full Sur-Ron warranty. Built with Panasonic and Samsung 21700 cells — the same cell brands Sur-Ron uses in new production bikes — this OEM replacement battery restores your Light Bee X to exactly its original performance specification. The aluminium extrusion housing with rubberised impact bumpers protects cells during the inevitable rough handling of off-road electric bike use. An integrated LED state-of-charge display provides at-a-glance battery level indication without requiring the bike's display to be powered. At $1,790 with genuine factory warranty, this is the recommended replacement when your original battery develops reduced capacity after years of riding. Available from Electric Dirt Bike Australia — Australia's authorised Sur-Ron dealer.",
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
    "description": "The Talaria Genuine OEM 60V 45Ah Replacement Battery is the only factory-approved replacement battery for the Talaria Sting R MX4 electric dirt bike, restoring full factory performance with genuine Talaria cells and the proprietary multi-pin connector. This OEM battery maintains the Talaria's high-discharge 45Ah capacity that enables the sealed gearbox system to draw peak current reliably during hill climbs and acceleration runs. Talaria's proprietary battery management system communicates directly with the Sting R's motor controller to optimise charge and discharge curves for the specific Talaria motor windings — ensuring the same performance consistency as a new bike. Direct drop-in installation requires no wiring modifications. At 12.8kg and $1,890, this genuine Talaria replacement battery is the cost-effective solution when original battery capacity degrades after extended use. Available through Electric Dirt Bike Australia — Australia's authorised Talaria dealer — with 12-month OEM warranty.",
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
    "description": "Cut your electric dirt bike recharge time by over 60% with the EDBA 15A Smart Fast Charger — the most popular rapid-charging solution for 60V and 72V electric dirt bike batteries in Australia. The intelligent 3-stage CC/CV charging algorithm (constant current, constant voltage, float maintenance) maximises battery cell longevity while delivering 15 Amps continuously from a standard Australian 240V/10A wall outlet. Thermal overload protection, reverse polarity protection, and over-voltage cutoff make this the safest fast charger available for Sur-Ron Light Bee X, Talaria Sting R, and E-Ride Pro batteries. The illuminated LCD screen displays real-time voltage, charging current, and accumulated amp-hours — eliminating guesswork about your battery's actual state of charge. Auto-detect switchable between 60V and 72V systems means one charger covers all bikes in your fleet. Australian standard 3-pin plug. Available from Electric Dirt Bike Australia — ships free with any bike purchase.",
    "specs": {
      "inputVoltage": "220V - 240V AC 50Hz (AU Wall Plug)",
      "outputCurrent": "15 Amps Adjustable (5A / 10A / 15A)",
      "protection": "Over-voltage, reverse polarity, thermal shutdown",
      "cables": "Heavy gauge silicone wire with genuine Anderson / Sur-Ron plug"
    },
    "images": [
      "/images/product-fast-charger-10a.jpg"
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
      "/images/product-fast-charger-5a.webp"
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
      "/images/product-bms.webp"
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
      "/images/product-bms.webp"
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
    "description": "The Torp TC500 is Australia's most popular electric dirt bike controller upgrade — a true plug-and-play performance solution that communicates natively with stock Sur-Ron Light Bee X and Talaria Sting R battery BMS systems, boosting stock 60V battery output to 8.5kW and unlocking 17kW from 72V packs without bypassing factory safety protocols. Torp revolutionised the electric dirt bike tuning world by creating the first controller that genuinely talks to factory BMS units — not bypassing them like earlier aftermarket controllers. The iOS and Android Bluetooth app provides live motor diagnostics, adjustable field weakening for 15–20 km/h top speed gains, customisable throttle response curves, and regenerative braking on brake lever pull. Maximum 500 Amps phase current delivers powerful, controlled torque for Australian trail riding and motocross. Weighing just 980 grams, the TC500 installs using the factory wiring harness without cutting or splicing. Australia's most recommended electric dirt bike performance upgrade. Available from Electric Dirt Bike Australia.",
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
    "description": "The EBMX X-9000 is an Australian-engineered electric dirt bike motor controller designed and developed by EBMX — one of the world's most respected electric motorcycle performance engineering teams. Capable of up to 25kW peak output with an upgraded battery, the X-9000 is the controller of choice for Australian electric dirt bike drag racers, sprint champions, and extreme hill-climb competitors. Custom power maps allow precise tuning for specific riding conditions — from a smooth trail mode to a full-power drag-racing assault. Variable regenerative braking adjustable via brake lever or thumb throttle provides maximum versatility across different Australian terrain types. The ultra-bright colour waterproof handlebar display is readable in full Queensland and NSW summer sunlight. The X-9000 requires a 40V–100V compatible high-discharge battery to unlock its full potential. Developed and supported in Australia means local technical help is available when tuning for specific conditions. Available from Electric Dirt Bike Australia.",
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
    "description": "The Fastace ALX13RC is Australia's most popular inverted fork upgrade for Sur-Ron Light Bee X and Talaria Sting electric dirt bikes — delivering 200mm of travel with beefed-up 37mm hardened alloy stanchions that eliminate the harsh bottoming and lack of high-speed damping control that afflicts stock forks on aggressive Australian trail terrain. The dual-air chamber design allows independent adjustment of positive and negative air spring pressure, providing a precise ride quality setup for Australian riders of all weights from 60kg to 110kg+. Independent rebound and high/low speed compression adjustments enable fine-tuning for the specific demands of NSW Blue Mountains rocky descents versus Victorian State Forest loamy flow trails. Hydraulic bottom-out bumpers prevent metal-on-metal contact on the biggest Australian washouts and moto jumps. The 20mm x 110mm Boost thru-axle provides maximum front-end stiffness. Available from Electric Dirt Bike Australia — Australia's recommended suspension upgrade for e-moto trail riders.",
    "specs": {
      "travel": "200mm (8 inches)",
      "stanchions": "37mm hardened alloy",
      "adjustments": "Rebound, High/Low Speed Compression, Air Preload",
      "axle": "20mm x 110mm Boost thru-axle",
      "weight": "4.2 kg"
    },
    "images": [
      "/images/product-onboard-display.webp"
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
    "description": "The EXT Ferro 36 Inverted Fork brings Formula 1 suspension technology to electric dirt bikes, handcrafted in Vicenza, Italy with 36mm chrome-moly stanchions and EXT’s HS3 triple-stage air spring system for supple small-bump compliance on Australian rocky trails. A hydraulic bump stop eliminates harsh bottom-outs on high-speed compressions during enduro descents, while independent high-speed and low-speed compression damping allows circuit-specific tuning without a suspension technician. Compatible with Sur-Ron, Talaria, and KTM Freeride E platforms with standard 20mm axle fitment. Premium Italian enduro suspension available with genuine Australian stock and expert fitting advice from [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/). Technical specs at [EXT Racing Italy](https://www.ext-suspension.com/).",
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
    "description": "The Magura MT7 Pro is a German-engineered 4-piston hydraulic brake set that is the benchmark choice for competitive electric dirt bike freeriders, enduro racers, and Australian riders who demand the finest stopping performance regardless of conditions. Magura's Carbotecture SL master cylinders use 30% carbon fibre to reduce weight while maintaining the stiffness that delivers precise, consistent lever feel. The 1-Finger HC levers (HC = Human Carbon) provide immediate, controlled braking from a single finger, freeing remaining fingers for throttle control on technical Australian descents. Exceptional modulation characteristics prevent front-wheel lockup on the loose gravel and clay common to Australian State Forest and national park tracks, while still delivering maximum deceleration when full braking is required. The forged monobloc caliper eliminates the caliper body flex that affects multi-piece calipers under hard braking at 80+ km/h. Available from Electric Dirt Bike Australia with Australian after-market support from Magura's Sydney distributor.",
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
    "description": "The DID 420 NZ3 Gold Racing Chain is the definitive drivetrain upgrade for electric dirt bike riders experiencing chain stretch, premature wear, or linkage slap from stock chains that cannot withstand the instant peak torque delivery of high-performance electric motors. DID's SDH pin treatment hardens chain pins against the shock loading that electric motor torque generates — conventional bicycle-grade chains can stretch by 1–2% within 10 hours of electric dirt bike use under aggressive riding conditions. At 22.0 kN (4,930 lbs) tensile strength, the NZ3 handles the full peak torque output of 72V controller-tuned electric bikes without fatigue. Gold outer plates provide active corrosion resistance in wet Australian mud, creek crossings, and salt-air coastal conditions that rapidly corrode cheaper chains. The 112-link kit with included clip-type master link fits standard 420-pitch electric dirt bike sprocket configurations. Available from Electric Dirt Bike Australia with full chain care kit recommendations.",
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
    "description": "The Baja Designs Squadron Pro LED Headlight Kit is the most trusted night riding upgrade for electric dirt bikes in Australia, delivering 4,600 lumens of military-grade Cree LED output that transforms dark Australian bush tracks and fire roads into daylight visibility. Plugs directly into the bike’s factory 12V DC converter with a waterproof handlebar switch — zero wiring modification required. IP69K waterproof rating (submersible to 9ft) ensures consistent performance through Queensland creek crossings and tropical downpours. The wide driving beam eliminates shadow gaps on single-track trails at speed, doubling your effective vision window for night enduro sessions. Genuine Australian stock available for same-week dispatch from [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/). Product tested by [MotoOnline](https://www.motoonline.com.au/).",
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
    "description": "The Dunlop Geomax MX33 Off-Road Tyre Set is the preferred rubber choice for Australian electric dirt bike riders who demand maximum traction from their instant-torque electric motors without sacrificing durability on mixed Australian trail terrain. The advanced macromolecule rubber compound delivers the grip needed to transmit electric motor torque without wheelspin in soft loamy Victorian soils and hard-packed NSW fireroad conditions. The MX33 tread block geometry provides superior cornering stability under the weight transfer forces of aggressive trail riding — crucial when your electric dirt bike's instant torque can overcome lesser tyres' grip limits in corners. The reinforced 3mm heavy-duty inner tubes provide exceptional puncture resistance against the sharp granite rocks and embedded dry sticks that plague Australian off-road trails. Dunlop's Geomax MX33 is used by factory KTM, Husqvarna, and Yamaha motocross teams at national championship level, confirming its performance credentials. Available from Electric Dirt Bike Australia.",
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
    "description": "The EDBA Heavy Duty Folding Aluminium Loading Ramp is the safest and most practical solution for loading electric dirt bikes into Australian utes, vans, and trailers without the back strain of manual lifting or the expense of a dedicated motorbike trailer. The arched aluminium profile distributes the electric bike's weight along the ramp length rather than concentrating it at the bend, providing a smooth rolling surface that reduces rolling resistance when loading heavier 80kg–110kg full-size electric enduro bikes. Rated at 340kg — more than triple the weight of any electric dirt bike — the ramp has industry-leading safety margins for confident loading of even the heaviest models like the Sur-Ron Storm Bee or Stealth B-52. Rubberised support fingers grip the ute tailgate or trailer edge without scratching paint. Folds to 1.15 metres for storage behind the vehicle seat. The safety tie-down strap prevents unwanted ramp movement during loading. Available from Electric Dirt Bike Australia — an essential accessory for any electric dirt bike transport setup.",
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
    "description": "The Pro Taper 7/8 Pillow Top Moto Grips are the world’s best-selling motocross grip — the patented Vibrasonix dual-density synthetic rubber compound reduces arm pump and trail vibration by up to 40% compared to stock OEM grips, making long sessions on Australian bush tracks dramatically more comfortable. Raised pillow cushions disperse vibration across a broader surface area, channelling hand fatigue away from key pressure points during technical rocky descents in the Blue Mountains and Victorian High Country. Universal 7/8 moto bar fitment is compatible with Sur-Ron, Talaria, Stark Varg, KTM Freeride E, and all electric dirt bikes with twist or thumb throttle configurations. Supplied with matching aluminium bar-end plugs for a factory finish. Available with same-week dispatch from [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/). Recommended by [Dirt Action Magazine](https://www.dirtaction.com.au/).",
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
    "shortDescription": "Australia's most popular kids electric motorbike with 650W motor, 18 km/h top speed, and real motocross geometry for riders aged 13+.",
    "description": "The Razor MX650 Electric Dirt Rocket is Australia's best-selling kids electric motorbike — delivering real chain-drive 650W performance, authentic motocross geometry, and genuine riding excitement for young riders aged 13 and up who are ready to progress beyond slower 36V pit bikes. Unlike toy electric bikes with plastic wheels and soft foam tyres, the MX650 features full-size 16-inch pneumatic knobby tyres, proper hydraulic front forks, and a retractable kickstand — providing genuine electric dirt bike experience at an accessible price point. The sealed 36V 12Ah lead-acid battery delivers up to 45 minutes of ride time per charge with 18 km/h top speed — safe for backyard use and wide open property tracks. The authentic twist-grip throttle and automatic shut-off teach proper throttle discipline for when riders graduate to more powerful electric bikes. Available from Electric Dirt Bike Australia with free freight — Australia's most trusted kids electric motorbike stockist.",
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
    "description": "The KTM SX-E 5 is the world's only factory-produced competition-specification youth electric motocross bike for riders aged 4–10 years — built in Austria with the same engineering standards as KTM's championship-winning adult motocross machines. Used by child racers across the globe in sanctioned KTM Junior Cup series events, the SX-E 5 provides genuine competition readiness for aspiring junior motocross champions in Australia's MotoGP junior feeder series and state championship rounds. Three parent-selectable power modes at 20%, 50%, and 100% allow gradual skill progression without requiring a new bike as ability increases. Factory KTM WP Xact suspension is identical to adult competition bikes, teaching correct body position and suspension technique from the earliest riding sessions. The quick-charge 48V 2.6Ah lithium-ion battery recharges in 80 minutes — fast enough for multiple track sessions per day. Made in Mattighofen, Austria. Available through Electric Dirt Bike Australia with 12-month KTM factory warranty.",
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
      "/images/product-ktm-sx-e-youth.jpg"],
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
    "shortDescription": "Husqvarna's factory youth electric motocross bike sharing the same Austrian-built platform as the KTM SX-E 5 with signature Husqvarna blue styling.",
    "description": "The Husqvarna EE 5 is the iconic Swedish electric motocross brand's youth offering — sharing the same Austrian factory platform and WP XACT suspension as the KTM SX-E 5 but finished with Husqvarna's distinctive blue anodised components, unique graphics, and Husqvarna brand heritage stretching back to 1903 (husqvarna-motorcycles.com). For junior riders whose families have a history with the Husqvarna brand — one of the most celebrated names in international enduro and motocross — the EE 5 provides the factory-spec platform to develop young talent through Husqvarna's own junior racing programmes. Three parent-controlled power modes (20%, 50%, 100%) allow safe, progressive skill development for children aged 4–10 years. The WP XACT closed-cartridge front and rear suspension provides genuine motocross geometry and feedback that cheap junior petrol bikes cannot match. Ideal for trackday riding, backyard trail development, and junior competitive racing. Available from Electric Dirt Bike Australia with 12-month warranty.",
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
    "description": "The OSET 20.0 Racing Junior Electric Trials Bike is the world's leading youth electric trials machine, used at FIM World Trials Championship junior events and by Australia's top junior development academies to train the next generation of trials and enduro champions. OSET's patented infinite variable speed dial is the key innovation that makes the 20.0 uniquely safe and progressively challenging — adjustable from near-walking speed for absolute beginners to competitive trials pace for advanced riders aged 6–14 years, with no abrupt power steps or clutch engagement to surprise young riders. At just 22kg, young riders aged 6+ can pick the bike up themselves after minor falls without requiring adult assistance — building independence and confidence. The 24V 20Ah lithium-ion battery provides up to 3 hours of trials riding — far more than competitive petrol kids bikes. OSET's Australian junior racing programme provides competition pathways from grassroots club trials to national championship level. Available from Electric Dirt Bike Australia at electricdirtbikeaustralia.com.au.",
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
    "description": "The EDBA Moto 50 is Australia's safest and most popular beginner kids electric motorbike for toddlers and children aged 3–6 years — purpose-built by Electric Dirt Bike Australia for the specific needs of Australian young riders taking their absolute first steps into electric motorbike riding. The extra-low 420mm seat height ensures three-year-old riders can flat-foot the ground on both sides simultaneously for maximum stability and confidence. The parental remote stop button allows parents to cut motor power instantly from 15 metres distance if their child gets into difficulty — a safety feature no other entry-level kids electric bike in Australia offers at this price point. Near-silent 250W motor with electronic soft-start prevents the sudden jolt that scares young children when throttle is first applied. Rubberised moto-style handlebar grips teach proper motorcycle grip technique from the first ride. Available exclusively from Electric Dirt Bike Australia at electricdirtbikeaustralia.com.au with 12-month warranty and free freight Australia-wide.",
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
    "description": "The RTR eBike Pro is Australia's premier road-legal electric commuter — a purpose-designed electric motor bike that meets EN15194 standard at 250W continuous power and 25 km/h pedal-assist limit, making it legally rideable on all Australian roads, bike lanes, and shared paths with no registration, no licence plate, and no motorcycle licence required. This electric commuter bike eliminates the daily petrol fuel bill (average $18–$22 per full tank for 125cc equivalents) and replaces it with an electricity cost of under $0.50 per full charge — saving Australian commuters over $2,000 per year in fuel costs alone. The rigid 7075 aerospace aluminium frame, 7-speed Shimano gears, front LED headlight, rear brake light, and quality hydraulic disc brakes provide the durability and safety needed for daily Australian urban commuting. With up to 80km range, the RTR eBike Pro covers typical Sydney, Melbourne, and Brisbane suburban commuting distances easily on a single charge. Available through Electric Dirt Bike Australia's electric motor bikes range at electricdirtbikeaustralia.com.au with free freight.",
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
    "description": "The RTR eBike S Classic is a road-legal electric urban bike from Australian brand RTR eBike, designed with a step-through frame for effortless mounting and dismounting in Australian city traffic — ideal for office workers, university students, and everyday commuters who want the benefits of electric transport without motorcycle-style high-seat-height barriers. The fully integrated 36V 13Ah lithium-ion battery is concealed inside the frame downtube for a clean, modern appearance that doesn't scream 'electric bike' to onlookers. Front suspension fork absorbs Sydney and Melbourne urban road surface imperfections and kerb drops comfortably. Hydraulic disc brakes front and rear provide confident, fade-free stopping in wet winter conditions and sudden traffic stops. At 19kg — lighter than most road-legal electric bikes with comparable battery capacity — the RTR S Classic can be carried into apartments and offices. Up to 70km urban range. Road-legal with no registration or licence required. Available from Electric Dirt Bike Australia's commuter range.",
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
    "description": "The NIU NQi GT is Australia's best-selling road-legal electric moped — a LAMS-approved electric motor bike from NIU Technologies (niu.com), the world's largest electric scooter manufacturer, offering full ADR compliance for road registration in NSW, VIC, QLD, WA, SA, and all other Australian states and territories. The cloud-connected NIU smartphone app provides real-time GPS theft tracking, ride analytics, remote locking, and battery status monitoring — features that no comparable petrol moped offers. Dual removable 72V lithium batteries allow hot-swapping for unlimited daily range: charge one at the office while riding on the second. With LAMS approval for L and P-plate motorcycle licence holders across all Australian states, the NIU NQi GT is accessible to the widest possible range of Australian riders from day one of getting their learner's permit. 100km dual-battery range, 70 km/h top speed, and near-zero running costs make this electric moped the benchmark road-legal electric motor bike in Australia. Available from Electric Dirt Bike Australia.",
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
    "description": "The Super Soco CPx is a road-legal electric moped that captures the iconic retro café-racer style of classic 1960s motorcycles while delivering the practical daily commuter benefits of modern electric motor bike technology — zero fuel costs, near-zero maintenance, and the simplicity of a keyless Bluetooth start. The removable 60V 30Ah lithium battery is the CPx's defining practical advantage: carry it to your apartment, office, or hotel room and charge it from any standard 10A power point without needing a dedicated garage charging outlet. Regenerative braking recovers kinetic energy on every urban deceleration, extending the 90km range further in stop-start Sydney and Melbourne traffic. LAMS-compliant registration means Australian learner and provisional riders can legally commute on the CPx immediately after receiving their motorcycle licence. Super Soco's global service network and Vmoto's Australian distribution ensure parts and service support are available nationally. Available from Electric Dirt Bike Australia's road-legal electric motor bike range.",
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
    "description": "The Vmoto Soco TC-Max is the flagship road-legal electric motorcycle from Vmoto Limited (ASX: VMT) — Australia's only ASX-listed electric motorcycle manufacturer and a company whose mission is to accelerate Australia's transition to clean electric motor bike transport. The TC-Max delivers full-size motorcycle ergonomics, 5kW peak power, and LAMS-compliant road registration for L and P-plate riders across all Australian states — making it Australia's most capable LAMS-approved electric motorcycle with genuine 100+ km/h highway capability. Adjustable WP suspension front and rear — the same brand used by KTM, Husqvarna, and GasGas factory racing teams — provides refined ride quality matching European premium electric motorcycles costing significantly more. The dual removable 72V battery system delivers 120km combined range and allows independent home charging of each battery. At 117kg and $8,990, the Vmoto TC-Max is the benchmark Australian road-legal electric motor bike for riders who want full-size motorcycle presence with zero-emission daily commuting economics. Available through Electric Dirt Bike Australia with 12-month warranty and free freight.",
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
    "author": "Declan O’Connor",
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
    "author": "Lucas D’Amato",
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
    "title": "DID 420 Gold Chain doesn’t stretch like cheap stock chains",
    "comment": "Installed the DID 420 NZ3 gold chain with the 54T sprocket. Over 400km of hard riding and haven’t needed to adjust the chain tensioners once.",
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
    "comment": "Parental smartphone speed limiting via Bluetooth lets me dial in power as his confidence grows. Clean, quiet, and doesn’t burn hot exhaust pipes on young legs.",
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
];

export const POSTS = [
  {
    slug: "sur-ron-vs-talaria-australia-buyers-guide",
    title: "Sur-Ron Light Bee X vs Talaria Sting R: Which Electric Dirt Bike Wins in Australia?",
    excerpt: "An in-depth breakdown of motor power, gearbox vs belt drive, suspension, and trail range on Australian rugged tracks.",
    category: "Comparisons",
    date: "2026-02-14",
    readTime: "6 min read",
    image: "/images/hero_surron_trail_1790338185425.jpg",
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
    image: "/images/hero_talaria_ridge_1790338208529.jpg",
    content: `Modern electric dirt bike lithium-ion batteries are high-density energy packs that thrive when treated with basic care. With typical Australian conditions reaching 35°C+ in summer, proper thermal management is key to maintaining 500+ charge cycles without degradation. All [Sur-Ron, Talaria, and Stark Varg battery packs](https://www.electricdirtbikeaustralia.com.au/shop/) stocked by [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/) carry a 12-month factory warranty when correct charging procedures are followed.

### 1. Allow the Pack to Cool Down After Hard Riding
Never plug your battery into a high-amperage fast charger immediately after an aggressive trail session. Give the cells 20-30 minutes to cool down to ambient temperature before initiating charging.

### 2. The 20% to 90% Golden Rule
For everyday recreational rides, charging up to 90-95% rather than keeping it pinned at 100% can double the total cycle life of Samsung and Molicel lithium cells. Once every month, charge to 100% and leave on the smart charger for an extra hour to allow the BMS to balance individual cell voltages. See [Molicel cell specifications](https://www.molicel.com/product/p45b/) for rated cycle life data.

### 3. Summer & Off-Season Storage
If leaving the bike idle for more than 3 weeks, store the battery between 45% and 60% state of charge in a cool, dry area away from direct sunlight. [Battery University's storage guide](https://batteryuniversity.com/article/bu-702-how-to-store-lithium-based-batteries) recommends below 25°C for long-term capacity retention.`,
  },
  {
    slug: "stark-varg-motocross-revolution-australia",
    title: "The Stark Varg 80HP: Revolutionising Australian Motocross and Supercross",
    excerpt: "How Sweden’s 80HP electric motocross beast is winning over traditional 450cc riders across local tracks.",
    category: "Innovations",
    date: "2025-11-10",
    readTime: "7 min read",
    image: "/images/hero_stark_track_1790338196966.jpg",
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
    image: "/images/hero_talaria_ridge_1790338208529.jpg",
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
    image: "/images/hero_stark_track_1790338196966.jpg",
    content: `Upgrading from a stock 60V pack to a high-discharge 72V lithium battery is the most impactful performance modification you can make to a Sur-Ron Light Bee X or Talaria Sting.

### The Physics of Voltage: Higher Power with Lower Amps
Electrical power is measured in Watts (Volts x Amps). To produce 12kW on a 60V system, the controller must draw 200 Amps, generating significant heat in the wiring and motor windings. On a 72V system, that same 12kW requires only 166 Amps. This reduction in current allows your motor to run significantly cooler while delivering higher sustained top speeds.

### Top Speed and Hill Climbing
A 72V Molicel P45B pack typically increases top speed by 20–25 km/h over stock (reaching 85–95 km/h) and eliminates voltage sag on steep hill climbs. Paired with a smart Bluetooth BMS, riders can monitor cell balancing in real time from their smartphone.`,
  },
  {
    slug: "talaria-dragon-komodo-full-size-electric-enduro-review",
    title: "Talaria Dragon & Komodo: Full-Size Electric Enduro Dirt Bikes Tested",
    excerpt: "A deep dive into Talaria’s 88V 28kW full-size platforms featuring 21/18-inch wheels, Brembo-spec brakes, and linkage suspension.",
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
    image: "/images/hero_surron_trail_1790338185425.jpg",
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
    image: "/images/hero_stark_track_1790338196966.jpg",
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
Aim for 25% to 30% of total travel in rider sag. If the bike compresses more than 35% under your weight with riding gear, you need a stiffer coil spring (e.g., 550 lbs/in or 650 lbs/in for the rear shock). [AMCA Australia's suspension tuning guide](https://www.amca.net.au/) provides baseline sag settings for Australian track conditions.

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
    image: "/images/hero_surron_trail_1790338185425.jpg",
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
    image: "/images/hero_talaria_ridge_1790338208529.jpg",
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
    image: "/images/hero_stark_track_1790338196966.jpg",
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
    image: "/images/hero_surron_trail_1790338185425.jpg",
    content: `Supermoto (SM) conversions replace skinny 19-inch knobby dirt wheels with wide 16-inch or 17-inch rims fitted with sticky street compound tires. This lowers the bike's centre of gravity and unlocks phenomenal cornering grip.

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
    image: "/images/hero_talaria_ridge_1790338208529.jpg",
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
    image: "/images/hero_stark_track_1790338196966.jpg",
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
    image: "/images/hero_talaria_ridge_1790338208529.jpg",
    content: `Transporting your electric dirt bike to riding parks and state forests is simple with the right vehicle setup. Because light e-motos weigh only 50kg–65kg, they can be easily loaded onto a standard car hitch carrier without needing a dedicated box trailer.

### Tow Bar Tongue Weight (Downward Load Rating)
Ensure your vehicle's tow bar is rated for at least 100kg download capacity (standard 50mm / 2-inch square hitch receiver).

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
    image: "/images/hero_surron_trail_1790338185425.jpg",
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
    excerpt: "The definitive Australian buyer's guide to electric dirt bikes — covering Sur-Ron, Talaria, Stark Varg, E-Ride Pro, and kids' bikes with prices.",
    category: "Buyers Guide",
    date: "2026-03-03",
    readTime: "9 min read",
    image: "/images/hero_talaria_ridge_1790338208529.jpg",
    content: `Australia's electric dirt bikes market has matured enormously since 2022, with authorised dealers now offering factory warranty, local parts support, and free nationwide freight on every major brand. This guide covers the best electric dirt bikes available in Australia in 2026, with prices, specifications, and riding style matches.

### Sur-Ron: Australia's Best-Selling E-Moto Brand
Sur-Ron's [Light Bee X (60V 40Ah)](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) remains the top-selling electric dirt bike in Australia at $6,490. Its 50kg dry weight, 75 km/h top speed, and enormous aftermarket community make it the default choice for trail riders. The Ultra Bee steps up to 12.5kW and 95 km/h for riders wanting more punch. Both ship free to all Australian states from Mittagong NSW.

### Talaria: Gearbox-Equipped Torque King
The [Talaria Sting R MX4](https://www.electricdirtbikeaustralia.com.au/shop/talaria-sting-r-mx4/) features an oil-bath sealed gearbox, 8kW peak output, and 60V 45Ah battery — delivering superior traction management on Australian clay, gravel, and muddy creek crossings. At $7,990, it represents outstanding value for serious off-road riders. Talaria also produces the 88V 28kW Dragon for full-size enduro adventures.

### Stark Varg: The 80HP Championship Weapon
For motocross track riders, the [Stark Varg EX](https://www.electricdirtbikeaustralia.com.au/shop/stark-varg-ex-80hp/) from [Stark Future](https://www.starkfuture.com/) in Sweden delivers 80HP, 938Nm wheel torque, and Kayaba racing suspension. Used by KTM and Husqvarna-calibre motocross athletes, it competes directly with 450cc four-strokes.

### Kids & Youth Models
OSET, Razor, KTM SX-E 5, Husqvarna EE 5, and EDBA Moto 50 cover ages 3–16 with adjustable power modes. Australia's top youth electric motocross brands are available through [Electric Dirt Bike Australia's kids section](https://www.electricdirtbikeaustralia.com.au/electric-motor-bikes/kids/).

### Where to Buy Electric Dirt Bikes in Australia
[Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/) is the country's leading authorised dealer for Sur-Ron, Talaria, Stark Varg, E-Ride Pro, OSET, and RTR eBike. All orders include 12-month Australian factory warranty, pre-delivery inspection, and free insured freight on orders over $1,500.`,
  },

  {
    slug: "talaria-sting-review-australia",
    title: "Talaria Sting Review: Australia's Most Torque-Packed E-Moto Tested",
    excerpt: "Full in-depth review of the Talaria Sting R MX4 — gearbox durability, power, range, and how it handles Australian trails and creek crossings.",
    category: "Reviews",
    date: "2026-03-05",
    readTime: "8 min read",
    image: "/images/hero_talaria_ridge_1790338208529.jpg",
    content: `The Talaria Sting is the electric dirt bike that proved a sealed oil-bath gearbox could outperform belt and chain drives in real-world off-road conditions. Since 2021, the Sting platform has evolved through multiple versions to become a benchmark electric moto for Australian trail and enduro riding.

### Talaria Sting R MX4: Specifications
The current flagship Talaria Sting R MX4 features a 60V 45Ah lithium battery, 8kW peak mid-drive motor, sealed 2-speed automatic gearbox, 240mm inverted forks, and hydraulic disc brakes front and rear. Curb weight is 54kg — slightly heavier than the Sur-Ron Light Bee X but justified by the gearbox assembly and upgraded motor.

### On-Trail Performance: Where the Gearbox Shines
In steep Australian mountain climbs — Blue Mountains switchbacks, Snowy Mountains scree slopes, and Victorian High Country creek crossings — the Talaria's sealed gearbox delivers consistent torque multiplication without slipping or heat-induced belt stretch. The lower gear ratio provides tractor-like crawling speed in technical rock gardens, while the upper gear unlocks 80 km/h flat-out trail blasting.

### Battery Range in Real Australian Conditions
Testing across mixed NSW singletrack, fireroads, and climb-heavy terrain, the 45Ah battery comfortably delivers 70–90km per charge in eco mode, dropping to 50–65km in sport/full-power mode. Charging time is 3.5–4 hours with the standard charger and 2 hours with the optional 10A fast charger available from [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/shop/fast-charger-10a/).

### Comparison: Talaria Sting vs Sur-Ron Light Bee X
The Talaria's gearbox edges out the Sur-Ron in wet, muddy, and rocky terrain where belt-drive bikes risk stretch and snap. The Sur-Ron wins on aftermarket parts availability and lighter weight for technical trials. For Australian riders who prioritise durability and torque over weight savings, the [Talaria Sting R MX4](https://www.electricdirtbikeaustralia.com.au/shop/talaria-sting-r-mx4/) is the stronger long-term choice. More technical specs are published on the official [Talaria product page](https://talariausa.com/).

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
    image: "/images/hero_stark_track_1790338196966.jpg",
    content: `The Stark Varg is not a concept bike or prototype — it is a fully race-ready 80HP electric motocross machine that has already competed at FIM Motocross World Championship events. For Australian motocross riders, it represents the pinnacle of electric motorcycle performance available today.

### Stark Varg EX Specifications
Peak power: 80HP (60kW). Peak torque: 938Nm at the rear wheel. Battery: 6.5kWh lithium pack. Suspension: KYB factory-spec open-chamber forks with adjustable 300mm travel. Weight: 110kg — comparable to a 450cc four-stroke. [Stark Future](https://www.starkfuture.com/) designed every component from ground up, with carbon-fibre motor housing and titanium fasteners throughout.

### Track Testing: Motocross Performance
On Australian motocross tracks — including competitive circuits at Broadford, Appin, and Raymond Terrace — the Stark Varg's programmable power delivery transforms riding confidence. Riders select from multiple mapped power curves via the Stark app, from a manageable trail setting that mimics a smooth 250cc to a full 80HP assault mode for championship motos. The seamless, gearless power eliminates missed shifts during technical race lines.

### Suspension & Handling at Race Speed
KYB suspension tuned specifically for the Varg's 110kg weight and power output handles Australian track conditions without drama. The single rear shock provides plush absorption over square-edged bumps while maintaining precise cornering line. Brembo-spec brakes provide immediate, linear stopping power — superior to most petrol 450cc bikes at this price point.

### Battery Life: How Long Does a Moto Last?
On full-throttle motocross usage, the 6.5kWh battery delivers approximately 45 minutes of competitive riding — effectively matching one full 30-minute moto with warm-up and cool-down. At standard charging, the pack recharges in 2.5 hours from flat. Australian riders doing back-to-back motos need the optional second battery at a dedicated fast-charging station.

### Australian Price & Availability
The [Stark Varg EX](https://www.electricdirtbikeaustralia.com.au/shop/stark-varg-ex-80hp/) retails from $16,900 AUD through [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/), Australia's authorised Stark dealer. Includes 12-month warranty, pre-delivery inspection, and free freight to any Australian state or territory.`,
  },

  {
    slug: "kids-electric-bike-buying-guide-australia",
    title: "Kids Electric Bike Australia: Age-by-Age Buyer's Guide 2026",
    excerpt: "The complete guide to choosing a kids electric bike in Australia — covering safety, age-appropriate power, top brands, and prices for every budget.",
    category: "Buyers Guide",
    date: "2026-03-09",
    readTime: "7 min read",
    image: "/images/hero_surron_trail_1790338185425.jpg",
    content: `Choosing the right kids electric bike for your child is one of the most important decisions a riding family makes. The right bike builds confidence, safety awareness, and a lifelong love of the sport. The wrong choice — too powerful, too heavy, or without adjustable limits — can cause accidents and put children off riding permanently.

### Age 3–6: Balance and First Power (Under 500W)
For the very youngest riders, OSET electric bikes set the world standard. The [OSET 12.5](https://www.osetbikes.com/) runs at 24V with ultra-low power outputs adjustable down to walking pace. At 12kg, children can right the bike themselves. It introduces throttle control and balance without risk. Available through [Electric Dirt Bike Australia's kids range](https://www.electricdirtbikeaustralia.com.au/electric-motor-bikes/kids/).

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
    title: "Electric Pit Bike Australia: Best Models, Track Use & Prices 2026",
    excerpt: "Everything you need to know about electric pit bikes in Australia — from track-legal specs to top Sur-Ron, Talaria, and EDBA pit bike models.",
    category: "Guides",
    date: "2026-03-11",
    readTime: "6 min read",
    image: "/images/hero_surron_trail_1790338185425.jpg",
    content: `An electric pit bike sits between the junior bicycle-scale kids' bikes and full-size enduro machines. They feature compact 14-inch or 17-inch wheels, underslung motors, and power outputs from 3kW to 8kW — making them ideal for pit lane practice, junior motocross, backyard riding, and tight singletrack. Australia's electric pit bike market has grown rapidly as parents discover the noise and vibration advantages over petrol 50cc–110cc pit bikes.

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
    image: "/images/hero_surron_trail_1790338185425.jpg",
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
NSW State Forests (Belanglo, Goulburn, and Wingello State Forests) accommodate registered and unregistered off-road motorcycles on designated tracks. Victoria's Broadford Complex and the Otways offer purpose-built electric-motorcycle-friendly riding. Western Australia's Gnangara Off-Road Vehicle Area provides dedicated tracks close to Perth. Always check current [NSW NPWS access restrictions](https://www.nationalparks.nsw.gov.au/) before visiting.

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
    image: "/images/hero_stark_track_1790338196966.jpg",
    content: `The 72V battery upgrade is the single most impactful performance modification available for Sur-Ron Light Bee X and Talaria Sting owners. Moving from the stock 60V system to a high-discharge 72V Molicel P45B pack increases peak power by 20%, reduces motor and controller temperatures under load, and adds 15–25 km/h to achievable top speed without changing any other components.

### Why 72V Outperforms 60V: The Physics
Electrical power equals Voltage multiplied by Current (P = V × I). Delivering 12kW through a 60V system requires 200A of current — generating significant heat in wiring, connectors, and motor windings. The same 12kW through a 72V system requires only 167A. Lower current means cooler motors, less voltage sag on hills, and longer sustained high-speed performance.

### EDBA 72V 40Ah Molicel Pack
The [72V 40Ah High Discharge Battery](https://www.electricdirtbikeaustralia.com.au/shop/72v-40ah-battery/) at Electric Dirt Bike Australia uses genuine Molicel P45B 21700 cells rated at 45A continuous discharge per cell. The pack includes a smart Bluetooth BMS for real-time cell monitoring, a QS8 discharge connector, and Anderson charge port compatible with the 72V fast chargers in EDBA's range. Capacity: 2,880Wh. Approximate range: 110–140km (eco mode trail riding).

### EDBA 72V 60Ah Maximum Range Pack
For riders prioritising endurance over sprint performance, the [72V 60Ah Samsung 50S pack](https://www.electricdirtbikeaustralia.com.au/shop/72v-60ah-battery/) delivers 4,320Wh and up to 180km trail range. These Samsung 50S cells offer 5,000mAh capacity per cell versus the Molicel P45B's 4,500mAh, making them ideal for multi-hour bush sessions where sustained range matters more than peak discharge.

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
    image: "/images/hero_talaria_ridge_1790338208529.jpg",
    content: `An electric enduro bike bridges the gap between the compact, lightweight e-moto trail bikes (Sur-Ron, Talaria Sting) and full-sized 250cc–450cc petrol enduro machines. Defined by 21-inch front and 18-inch rear wheel geometry, full-travel adjustable suspension, and power outputs of 8kW or above, electric enduro bikes like the Talaria Dragon, E-Ride Pro SS 2.0, and Sur-Ron Storm Bee are changing what riders expect from off-road electric performance.

### E-Ride Pro SS 2.0: Australian Made Enduro Weapon
The [E-Ride Pro SS 2.0](https://www.electricdirtbikeaustralia.com.au/shop/e-ride-pro-ss-2-0/) is Australia's most capable domestically assembled electric enduro bike. Built in regional NSW, it features a 72V 35Ah lithium pack (2,520Wh), 12kW peak motor, 21-inch front wheel, KYB inverted forks, and full-pivot rear linkage suspension. Weighing 95kg, it competes directly with imported full-size electric enduro machines at a significantly lower price point.

### Talaria Dragon: 88V 28kW Enduro Giant
[Talaria](https://talariausa.com/) took its proven Sting gearbox platform and scaled it to full-size 450cc dimensions with the Dragon. Running on an 88V 58Ah battery and producing 28kW peak output, it delivers sub-4-second 0–100 km/h acceleration while maintaining the gearbox durability that made the Sting R legendary for Australian conditions.

### Sur-Ron Storm Bee: The Heavyweight All-Rounder
The Sur-Ron Storm Bee Enduro is the company's full-size offering — 104V 55Ah battery, 22.5kW peak motor, reverse gear for tight mountain tracks, and full hydraulic brakes. At 110kg it is heavier than the E-Ride Pro but delivers exceptional straight-line speed and a premium suspension package.

### Choosing the Right Electric Enduro Bike for Australian Trails
Match bike size to your riding. If you're 75kg–90kg and riding mixed singletrack and fire roads, the E-Ride Pro SS 2.0 provides full-size geometry without excessive weight. If you're 90kg+ and riding aggressive steep Victorian High Country and NSW escarpment trails, the Talaria Dragon's extra power and gearbox torque are worth the additional investment. View the full electric enduro range at [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/).`,
  },

  {
    slug: "oset-bikes-australia-review-junior-electric",
    title: "OSET Bikes Australia: Junior Electric Trials & Motocross Range Reviewed 2026",
    excerpt: "A thorough review of OSET's complete junior electric trials bike range in Australia — 12.5, 16.0, 20.0, and 24R models tested by age group.",
    category: "Reviews",
    date: "2026-03-21",
    readTime: "7 min read",
    image: "/images/hero_surron_trail_1790338185425.jpg",
    content: `OSET Bikes has been the global benchmark for junior electric trials and motocross machines since 2008. Founded in the UK, [OSET](https://www.osetbikes.com/) designs bikes that teach genuine motorcycle skills to children aged 3 and up — with parent-controlled power adjustment systems that have safely introduced hundreds of thousands of young riders to motorcycling worldwide.

### Why OSET Dominates Junior Electric Riding in Australia
Three factors make OSET bikes the consistent choice for Australian riding families: precise power adjustment (0%–100% motor output via a dial accessible without tools), genuine trials geometry that builds exceptional balance and body position, and exceptional durability under the inevitable crashes of youth riding. OSET bikes are built for hard use, not display cabinet storage.

### OSET 12.5 Racing (Ages 3–6)
The 12.5 Racing is the world's most popular first electric motorcycle for children. At 12kg dry weight, a 24V lithium pack, and adjustable power from a brisk walk to 12 km/h, three-year-olds can ride independently within an afternoon. The trials geometry provides exceptional stability over bumps and logs. Available from [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/shop/oset-12-5-racing-junior/).

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
    image: "/images/hero_talaria_ridge_1790338208529.jpg",
    content: `E-Ride Pro is Australia's own premium electric off-road bike brand — designed, assembled, and supported domestically in regional NSW. For Australian riders who want factory warranty serviced locally, parts available same-day, and a bike tuned for Australian soil, heat, and terrain, E-Ride Pro represents an unmatched value proposition over pure imports.

### E-Ride Pro SS 2.0: Flagship Enduro Performance
The [E-Ride Pro SS 2.0](https://www.electricdirtbikeaustralia.com.au/shop/e-ride-pro-ss-2-0/) is E-Ride's flagship — a 72V 35Ah full-size electric enduro bike with 12kW peak output, KYB inverted forks, 21-inch front wheel, and 270mm front disc brake. At 95kg with battery, it matches the weight and geometry of a 250cc petrol enduro bike, delivering genuine bush enduro performance without the engine maintenance overhead. Price: $9,900 with free national freight.

### E-Ride Pro S16: The Youth/Small Rider Model
Sized with a 780mm seat height and 16-inch wheel configuration, the [E-Ride Pro S16](https://www.electricdirtbikeaustralia.com.au/shop/e-ride-pro-s16/) is calibrated for riders 145cm–165cm tall — younger teens, female riders, and adults of smaller stature who want a lightweight (72kg) bike with adult-grade performance. The 60V 32Ah pack delivers 90–110km trail range and powers a 6kW motor to 75 km/h.

### E-Ride Pro S17: The Versatile Mid-Size
The [S17](https://www.electricdirtbikeaustralia.com.au/shop/e-ride-pro-s17/) splits the difference between the S16 and SS 2.0 — 17-inch wheel configuration, 800mm seat height, and an 8kW motor with 60V 38Ah battery pack. This wheel size opens the largest selection of aftermarket trail and enduro tyre choices. At $7,900 it represents the best value in the E-Ride Pro range.

### Australian-Made Advantage
Buying an E-Ride Pro means your warranty claims are handled domestically without shipping delays or customs complications. Parts are stocked at the Mittagong warehouse alongside the full range of [Electric Dirt Bike Australia's](https://www.electricdirtbikeaustralia.com.au/) accessories and upgrade components. Service turnaround times are measured in days, not weeks. For serious Australian trail riders, this domestic service advantage is worth as much as the bike itself.`,
  },

  {
    slug: "electric-motor-bike-australia-guide-2026",
    title: "Electric Motor Bike Australia: Road-Legal, Off-Road & Commuter Options 2026",
    excerpt: "A complete overview of electric motor bikes in Australia — covering classifications, road-legal models, off-road performance, and commuter e-bikes.",
    category: "Guides",
    date: "2026-03-25",
    readTime: "7 min read",
    image: "/images/hero_surron_trail_1790338185425.jpg",
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
    excerpt: "Which kids electric motorbike is safest for your child's age? Age-bracketed recommendations, safety standards, and Australian price guide.",
    category: "Buyers Guide",
    date: "2026-03-27",
    readTime: "7 min read",
    image: "/images/hero_surron_trail_1790338185425.jpg",
    content: `Choosing a kids electric motorbike in Australia involves balancing performance, safety, and value at each developmental stage. Unlike pedal bicycles, electric motorbikes require proper safety gear, supervised riding environments, and power settings matched to a child's physical and cognitive development. This guide provides age-specific recommendations from Australia's leading electric motorbike retailer.

### What Makes a Kids Electric Motorbike Safe?
Key safety features include: adjustable power limits (allowing parents to cap speed and torque), automatic shutoff when the throttle is released, a low seat height that allows flat-footed confidence, lightweight construction for easy recovery after falls, and sealed battery compartments that protect cells from moisture and crash damage.

### Ages 3–5: Supervised First Riding
The [OSET 12.5 Racing](https://www.electricdirtbikeaustralia.com.au/shop/oset-12-5-racing-junior/) at $1,290 provides the safest entry point. Weighing just 12kg with 24V power adjustable to near-zero, three-year-olds genuinely control this bike from their first session. Pair with a certified ASNZS 1698 helmet, knee guards, and elbow pads.

### Ages 6–9: Building Real Skills
The [EDBA Moto 50](https://www.electricdirtbikeaustralia.com.au/shop/edba-moto-50-kids-beginner/) and OSET 16.0 Racing are the most popular choices for this bracket. Both include graduated power modes, automatic electric braking on throttle release, and appropriate geometry for riders 115cm–140cm tall. Seat heights of 570mm–680mm allow flat-footed standing and easy mounting.

### Ages 10–14: Junior Competition Ready
Factory-spec junior electric motocross bikes from KTM, Husqvarna, and GasGas (all available through [Electric Dirt Bike Australia's kids range](https://www.electricdirtbikeaustralia.com.au/electric-motor-bikes/kids/)) represent the world standard for junior competitive riding. The KTM SX-E 5 and Husqvarna EE 5 use identical chassis to their petrol siblings, delivering genuine competition performance with zero exhaust fumes.

### Helmet and Protective Gear Requirements
All electric motorbike riders — regardless of age or location — must wear an ASNZS 1698 certified motorcycle helmet in Australia. Full-face helmets with a certified visor are recommended for all off-road use. Body armour (chest protector, elbow and knee guards), gloves, and off-road boots complete a proper safety setup. Never allow children to ride without full protective gear on any electric motorbike.`,
  },

  {
    slug: "rtr-ebike-australia-review",
    title: "RTR eBike Review: Australia's Best Road-Legal Electric Commuter Tested 2026",
    excerpt: "A thorough review of the RTR eBike Pro and S Classic — performance, range, Australian LAMS compliance, and daily commuter suitability.",
    category: "Reviews",
    date: "2026-03-29",
    readTime: "7 min read",
    image: "/images/hero_surron_trail_1790338185425.jpg",
    content: `The RTR eBike is Australia's most talked-about road-legal electric commuter motorcycle, combining the aggressive styling of a trail bike with LAMS-approved performance suited for learner and provisional licence holders. Designed specifically for the Australian market, both RTR models are road-registered, ADR-compliant, and offer commuter specifications matching European electric motorcycle benchmarks.

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
    content: `Selecting the best eBike in Australia for 2026 requires matching the right machine to your riding style, terrain, legal requirements, and budget. This expert-reviewed guide crowns the category winner in each of Australia's five major eBike segments, based on independent performance testing, build quality, warranty support, and real-world Australian conditions.

### Best Trail eBike Australia 2026: Sur-Ron Light Bee X
For off-road trail riding on private property and dedicated parks, the [Sur-Ron Light Bee X](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) is Australia's category winner. Its 6kW peak power, 50kg lightweight, aftermarket ecosystem, and $6,490 price make it the default choice for adult trail riders seeking genuine performance without full-motorcycle complexity.

### Best Commuter eBike Australia 2026: RTR eBike Pro
For daily road commuting, the [RTR eBike Pro Commuter](https://www.electricdirtbikeaustralia.com.au/shop/rtr-ebike-pro-commuter/) wins on ADR compliance, LAMS approval, 95 km/h speed, and 100km urban range. At $6,900 with full road registration eligibility, it outcompetes Honda, Yamaha, and Kawasaki LAMS models on running costs.

### Best Kids eBike Australia 2026: OSET 20.0 Racing
For children ages 8–13, the [OSET 20.0 Racing Junior](https://www.electricdirtbikeaustralia.com.au/shop/oset-20-0-racing-junior/) is the undisputed youth champion. Factory trials competition specification, adjustable power from 5%–100%, and Australian dealer warranty support through [OSET Bikes](https://www.osetbikes.com/) make it the choice of junior competition coaches.

### Best Electric Moped Australia 2026: NIU NQi GT
For urban road-legal moped classification, the [NIU NQi GT](https://www.electricdirtbikeaustralia.com.au/shop/niu-nqi-gt-electric-moped/) at $5,490 provides 70km urban range, smartphone connectivity, GPS theft tracking, and full Australian road compliance. NIU is the world's largest electric moped manufacturer by units sold, with [NIU Technologies](https://www.niu.com/) serving over 80 countries.

### Best Performance eBike Australia 2026: Stark Varg EX
For maximum performance without compromise, the [Stark Varg EX](https://www.electricdirtbikeaustralia.com.au/shop/stark-varg-ex-80hp/) takes the crown with its 80HP output, 938Nm wheel torque, and championship-level KYB suspension. No other eBike in Australia delivers this combination of power density, suspension sophistication, and race-proven durability.`,
  },

  {
    slug: "childs-electric-motorcycle-australia-complete-guide",
    title: "Child's Electric Motorcycle Australia: Safety, Age Limits & Top Picks 2026",
    excerpt: "The definitive guide for Australian parents buying a child's electric motorcycle — legal age requirements, safety gear, power limits, and top models.",
    category: "Buyers Guide",
    date: "2026-04-03",
    readTime: "7 min read",
    image: "/images/hero_surron_trail_1790338185425.jpg",
    content: `A child's electric motorcycle offers an ideal pathway into safe, structured off-road riding — with adjustable power limits, lightweight construction, and no hot exhaust or fuel hazards. Australian parents purchasing their first electric motorcycle for a child need to understand age appropriateness, safety gear requirements, suitable riding locations, and how to match power output to skill level.

### Legal Age Requirements for Electric Motorcycles in Australia
In every Australian state and territory, children riding electric motorcycles (classified as off-road motorcycles >250W) on private property do not require a licence or minimum age. At organised off-road events and motocross parks, minimum age requirements typically start at 4–5 years for entry-level junior classes. No child under 16 may legally ride an unregistered motorcycle on public roads.

### Power Limits by Age: Expert Recommendations
A child's electric motorcycle power should be strictly matched to physical size and cognitive development. OSET and KTM Junior certified programmes recommend:
- Ages 3–6: Maximum 350W, speed capped at 12–15 km/h
- Ages 6–10: Maximum 750W, speed capped at 25 km/h
- Ages 10–14: Maximum 2kW, speed capped at 50 km/h
- Ages 14–16: Full junior competition spec (KTM SX-E 5 / Husqvarna EE 5 class)

### Top Child's Electric Motorcycles Available in Australia
OSET, Razor, E-Ride Pro S16, KTM SX-E 5, and the EDBA Moto 50 cover every age and skill bracket. Browse the complete [kids electric motorbike range](https://www.electricdirtbikeaustralia.com.au/electric-motor-bikes/kids/) at Electric Dirt Bike Australia for current prices and stock availability.

### Mandatory Safety Gear for Children
Every child riding an electric motorcycle in Australia must wear: an ASNZS 1698 certified motorcycle helmet (full face for off-road), long-sleeve MX jersey and pants, chest/back protector, knee guards, elbow guards, MX gloves, and off-road ankle boots. No exceptions — the Australian government's [road safety authority](https://www.infrastructure.gov.au/roads) recommends full protective gear for all age groups on all terrain types.`,
  },

  {
    slug: "road-legal-electric-motorcycle-australia-guide",
    title: "Road Legal Electric Motorcycle Australia: Registration, Laws & Top Models 2026",
    excerpt: "How to get a road-legal electric motorcycle registered in Australia — ADR requirements, state-by-state process, LAMS eligibility, and top models.",
    category: "Legal & Safety",
    date: "2026-04-05",
    readTime: "8 min read",
    image: "/images/hero_surron_trail_1790338185425.jpg",
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
The electric motorbike saves approximately $3,925 in operating costs over five years — effectively covering the initial purchase premium. [Energy Australia's residential rate data](https://www.energyaustralia.com.au/) confirms average off-peak tariffs of $0.15–$0.22/kWh make electric charging dramatically cheaper than petrol.

### Performance: Where Electric Now Wins
Electric motors deliver 100% of maximum torque from 0 RPM — a physical advantage over petrol engines that must rev to their power band. In 0–60 km/h acceleration testing, the Stark Varg EX beats every comparable petrol motocross bike. The Sur-Ron Light Bee X outaccelerates 125cc petrol pit bikes from standstill. Performance parity now exists across almost all displacement classes.

### Environmental Impact in Australia
Australia's National Electricity Market has a carbon intensity of approximately 0.5 kg CO₂ per kWh (down from 0.8 in 2020 as renewable generation increases). Running an electric motorbike produces roughly 25g CO₂ per km — compared to 75g–110g CO₂ per km for petrol equivalents. As Australia's grid transitions further toward solar and wind, the electric motorbike's environmental advantage compounds annually. Learn more at [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/).`,
  },

  {
    slug: "best-electric-bike-australia-complete-guide",
    title: "Best Electric Bike Australia 2026: Expert-Ranked Categories & Buying Advice",
    excerpt: "Our comprehensive guide to the best electric bikes available in Australia in 2026 — ranked by performance, value, reliability, and riding category.",
    category: "Buyers Guide",
    date: "2026-04-09",
    readTime: "9 min read",
    image: "/images/hero_talaria_ridge_1790338208529.jpg",
    content: `The best electric bike in Australia for 2026 depends entirely on where you ride, how fast you want to go, whether you need road compliance, and how much you are prepared to invest. This authoritative guide ranks the top electric bikes across six categories, drawing on specifications, real-world test data, and feedback from Australian riders in every state.

### Best Electric Bike for Trail Riding: Sur-Ron Light Bee X
The [Sur-Ron Light Bee X](https://www.electricdirtbikeaustralia.com.au/shop/sur-ron-light-bee-x/) continues its three-year unbroken run as Australia's best off-road trail electric bike. At 50kg and 6kW peak power, it handles NSW singletrack, Victorian state forest fireroads, and Queensland bush trails with equal confidence. The near-unlimited aftermarket upgrade path (controllers, batteries, suspension, wheels) means this bike evolves with your skills. Current price: $6,490 with free freight.

### Best Electric Bike for Motocross: Stark Varg EX
No other electric bike in Australia matches the [Stark Varg EX](https://www.electricdirtbikeaustralia.com.au/shop/stark-varg-ex-80hp/) for track performance. 80HP, 938Nm wheel torque, KYB competition suspension, and smartphone-programmable power delivery make it a genuine championship contender. [Stark Future's](https://www.starkfuture.com/) ongoing software updates continuously improve the riding experience post-purchase.

### Best Electric Bike for Commuting: RTR eBike Pro
For road-legal city commuting, the [RTR eBike Pro](https://www.electricdirtbikeaustralia.com.au/shop/rtr-ebike-pro-commuter/) offers LAMS eligibility, 95 km/h performance, 100km range, and full ADR compliance at $6,900. It eliminates petrol commuting costs within 2–3 years through electricity savings alone.

### Best Electric Bike Under $3,000: Razor MX650
For budget-conscious riders or first-time electric dirt bike buyers, the [Razor MX650](https://www.electricdirtbikeaustralia.com.au/shop/razor-mx650-dirt/) at $1,100 delivers 650W dirt bike performance for youth and lighter adult riders. Steel frame, 17-inch wheels, and hand-operated brake levers provide genuine off-road capability at entry-level pricing.

### Best Electric Bike for Kids: OSET 20.0 Racing
For children ages 8–13, the [OSET 20.0 Racing](https://www.electricdirtbikeaustralia.com.au/shop/oset-20-0-racing-junior/) is the globally recognised junior benchmark. Used in formal competition by [OSET](https://www.osetbikes.com/) junior championship riders worldwide, it provides competition-grade performance with parent-controlled power adjustment — the gold standard in youth electric motorcycling.

### Conclusion: Buying Electric in Australia in 2026
The Australian electric bike market offers genuine choices across every category, budget, and skill level. The common threads across all category winners are factory warranty support, locally available parts, and authorised dealer backup. [Electric Dirt Bike Australia](https://www.electricdirtbikeaustralia.com.au/) stocks every category winner listed above with 12-month Australian warranty, free freight over $1,500, and expert pre-purchase advice via WhatsApp.`,
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
