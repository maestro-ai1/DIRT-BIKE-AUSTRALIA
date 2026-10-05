// src/config/seo.ts
// Keyword-led on-page SEO copy, allocated from the Semrush AU export (25 Sep 2026).
// Allocation rule: Transactional + Commercial -> categories, sub-categories, products, product tags.
//                  Informational -> blog posts and tags. Navigational -> FAQ.
// Each page has one MAIN keyword (transactional) and PRIMARY keywords (commercial).
// URLs, slugs and canonicals are NOT defined here and must never change (sitemaps are already submitted).
// Volumes are monthly AU searches from the export; "(inferred)" means the keyword had no Semrush intent label.

export interface PageSeo {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  h1?: string;
  keywords: string;
  main: string; // transactional keyword
  primary: string[]; // commercial keywords
}

export const PAGE_SEO: Record<string, PageSeo> = {
  '/': {
    title: 'Electric Dirt Bike for Sale Australia | Sur-Ron, Talaria & Stark Varg',
    description: 'Buy an electric dirt bike in Australia: Sur-Ron, Talaria, Stark Varg, electric motorbikes & kids bikes. AU stock, 12-month warranty, free freight over $1,500.',
    ogTitle: 'Electric Dirt Bike Australia — Electric Dirt Bikes for Sale | Sur-Ron, Talaria & Stark Varg',
    ogDescription: 'Electric dirt bikes for sale in Australia. Sur-Ron, Talaria, Stark Varg, electric motorbikes & kids electric bikes. Genuine stock, 12-month AU warranty, free shipping over $1,500.',
    h1: 'Electric Dirt Bike Australia — Electric Dirt Bikes for Sale',
    keywords: 'electric dirt bike for sale, electric dirt bikes for sale, electric dirt bike australia, buy electric dirt bike, electric dirt bikes australia, electric motorbike australia, kids electric bike',
    main: 'electric dirt bike for sale', // 170/mo KD13 Transactional (+ electric dirt bikes for sale 110, electric dirt bike australia for sale 70)
    primary: ['electric dirt bike australia', 'electric dirt bikes australia', 'electric dirtbike australia'], // 1,300 / 320 / 90
  },
  '/shop/': {
    title: 'Electric Dirt Bikes for Sale Australia — Shop All Models | EDBA',
    description: 'Buy electric dirt bikes, motorbikes, kids bikes, batteries & parts in Australia. 70+ models: Sur-Ron, Talaria, Stark Varg & more. Free shipping over $1,500.',
    ogTitle: 'Electric Dirt Bikes for Sale Australia — Shop All Models',
    ogDescription: 'Buy electric dirt bikes online. Sur-Ron, Talaria, Stark Varg, Stealth & more. Free shipping over $1,500. 12-month AU warranty.',
    keywords: 'buy electric dirt bike, electric dirt bikes for sale, electric dirt bikes australia, electric motorbikes for sale, electric dirt bike for sale',
    main: 'buy electric dirt bike', // 40/mo KD17 Transactional
    primary: ['electric dirt bikes', 'electric dirt bikes australia'],
  },
  '/electric-dirt-bikes/': {
    title: 'Electric Dirt Bikes for Sale Australia — Off-Road, Trail & Enduro | EDBA',
    description: 'Shop electric dirt bikes for sale in Australia: adult, off-road & trail bikes from Sur-Ron, Talaria, Stark Varg & E-Ride Pro. Free freight over $1,500.',
    ogTitle: 'Electric Dirt Bikes for Sale Australia — Off-Road, Trail & Enduro',
    ogDescription: 'Adult electric dirt bikes and off-road electric bikes. Sur-Ron, Talaria, Stark Varg & more. Free freight over $1,500. 12-month AU warranty.',
    h1: 'Electric Dirt Bikes for Sale in Australia',
    keywords: 'electric dirt bikes for sale, electric dirt bike, electric dirt bikes, electric dirt bike for adults, off road electric bike, electric off road bike, electric trail bike, e dirt bike, electric dirtbike',
    main: 'electric dirt bikes for sale', // 110/mo KD11 Transactional
    primary: ['electric dirt bike', 'electric dirt bikes', 'electric dirtbike', 'e dirt bike', 'electric dirt bike for adults', 'electric off road bike'], // 6,600 / 1,000 / 1,000 / 1,000 / 320 / 590
  },
  '/electric-motor-bikes/': {
    title: 'Electric Motorbikes for Sale Australia — Dirt, Commuter & Kids | EDBA',
    description: 'Buy electric motorbikes & motorcycles in Australia: off-road, road-legal mopeds & kids range. Free shipping over $1,500. Nationwide delivery from NSW.',
    ogTitle: 'Electric Motorbikes for Sale Australia — Dirt, Commuter & Kids',
    ogDescription: 'Electric motorbikes and motorcycles for sale: off-road, road-legal mopeds and kids bikes. Free shipping over $1,500. Delivered from Mittagong NSW.',
    h1: 'Electric Motorbikes & Motorcycles for Sale in Australia',
    keywords: 'electric motorbikes for sale, electric motorbike, electric motorbike australia, electric motorcycle for sale, electric motorcycle australia, electric motor bike, buy electric motorbike',
    main: 'electric motorbikes for sale', // 210/mo KD17 Transactional (+ electric motor bikes for sale 210, electric motorbike for sale 140, electric motorcycle for sale 260)
    primary: ['electric motorbike', 'electric motorbike australia', 'electric motorcycle', 'electric motorcycle australia', 'electric motor bike', 'electric motor bikes'], // 6,600 / 1,300 / 1,900 / 1,900 / 1,000 / 1,000
  },
  '/electric-motor-bikes/kids/': {
    title: 'Kids Electric Bikes & Motorbikes for Sale Australia — Ages 3–16 | EDBA',
    description: 'Shop kids electric bikes & motorbikes in Australia: childs electric motorcycles & childrens electric dirt bikes, ages 3–16. Free freight over $1,500.',
    ogTitle: 'Kids Electric Bikes & Motorbikes for Sale Australia — Ages 3–16',
    ogDescription: 'Kids electric bikes, childs electric motorcycles and childrens electric dirt bikes for ages 3–16. 12-month AU warranty. Free freight over $1,500.',
    h1: 'Kids Electric Bikes & Motorbikes for Sale in Australia',
    keywords: 'kids electric bike, childs electric motorcycle, childrens electric dirt bike, kids electric motorbike, childrens electric motorbike, children electric bike, kids electric dirt bike, kids dirt bike for sale',
    main: 'kids dirt bike for sale', // 20/mo (inferred) - no Semrush-labelled transactional keyword exists for kids
    primary: ['kids electric bike', 'childs electric motorcycle', 'childrens electric dirt bike', 'kids electric motorbike', 'childrens electric motorbike', 'children electric bike', 'kids electric dirt bike'], // 4,400 / 2,400 / 1,300 / 1,300 / 1,300 / 1,000 / 590
  },
  '/electric-motor-bikes/rtr-ebike/': {
    title: 'RTR eBike for Sale Australia — Buy RTR E Bike Online | EDBA',
    description: 'Buy the RTR eBike in Australia. Road-legal RTR e bike commuters: no licence or registration. Free delivery over $1,500. 12-month AU warranty. Stock from NSW.',
    ogTitle: 'RTR eBike for Sale Australia — Buy RTR E Bike Online',
    ogDescription: 'RTR eBike road-legal range. No licence needed. Free delivery over $1,500. 12-month AU warranty from Mittagong NSW.',
    keywords: 'rtr ebike, rtr e bike, rtr electric bike, rtr bike, rtr ebike australia, rtr ebike for sale',
    main: 'rtr ebike for sale', // composed: no transactional RTR keyword in the bank (rtr dirt bike for sale = 10/mo inferred)
    primary: ['rtr e bike', 'rtr ebike', 'rtr electric bike', 'rtr bike'], // 1,600 / 880 / 320 / 320, KD 5-17
  },
  '/electric-motor-bikes/commuter-mopeds/': {
    title: 'Electric Mopeds for Sale Australia — Road-Legal, LAMS Approved | EDBA',
    description: 'Buy an electric moped in Australia: road-legal, LAMS-approved electric mopeds & commuter e-bikes. Free delivery over $1,500, 12-month warranty. Stock from NSW.',
    ogTitle: 'Electric Mopeds for Sale Australia — Road-Legal, LAMS Approved',
    ogDescription: 'Road-legal electric mopeds for Australian commuters. LAMS approved, free delivery over $1,500. Genuine AU stock from Mittagong NSW.',
    h1: 'Electric Mopeds & Commuter E-Bikes for Sale in Australia',
    keywords: 'electric moped australia, electric mopeds for sale, electric motorcycle moped, electric moped bike, moped prices, electric mopeds australia, road legal electric motorcycle',
    main: 'moped prices', // 70/mo KD18 Transactional
    primary: ['electric moped australia', 'electric motorcycle moped', 'electric moped bike', 'electric mopeds australia'], // 1,000 / 1,000 / 390 / 110
  },
  '/electric-motor-bikes/best-electric-bikes-australia/': {
    title: 'Best Electric Bikes Australia 2026 — Top 10 Expert Ranked | EDBA',
    description: 'The best electric bike in Australia for 2026, expert-ranked: Sur-Ron, Talaria, Stark Varg & more. Compare by use, budget & skill, then buy from an AU dealer.',
    ogTitle: 'Best Electric Bikes Australia 2026 — Top 10 Expert Ranked',
    ogDescription: 'Expert-ranked top 10 electric bikes for Australia 2026. Compare by use case, budget & skill level.',
    keywords: 'best electric bike australia, best electric bikes australia, best ebike australia, best electric dirt bike australia',
    main: 'buy electric bike australia', // 90/mo KD33 Transactional
    primary: ['best electric bike australia', 'best electric bikes australia'], // 1,300 / 590
  },
  '/electric-motor-bikes/e-bike-laws-australia/': {
    title: 'Electric Bike Laws Australia 2026 — Are Electric Dirt Bikes Legal? State-by-State Guide | EDBA',
    description: 'Electric bike laws in Australia 2026: are electric dirt bikes legal? Road registration, licence and off-road rules for NSW, VIC, QLD, WA & SA explained.',
    ogTitle: 'Electric Bike Laws Australia 2026 — Are Electric Dirt Bikes Legal?',
    ogDescription: 'State-by-state guide to electric bike laws in Australia: registration, licence & off-road rules for NSW, VIC, QLD, WA & SA.',
    keywords: 'electric bike laws australia, electric bike laws qld, nsw e bike certification laws, e-bike laws, new electric bike laws, electric bike regulations nsw, are electric dirt bikes legal in australia',
    main: 'electric bike laws australia', // Informational (210/mo KD23): informational hub, no transactional keyword
    primary: ['electric bike laws australia', 'electric bike laws qld', 'electric bike regulations nsw'],
  },
  '/electric-motor-bikes/melbourne/': {
    title: 'Electric Bikes for Sale Melbourne — Motorbikes & Mopeds, Free Delivery | EDBA',
    description: 'Buy electric bikes, motorbikes & mopeds in Melbourne VIC. Free insured delivery over $1,500 from Mittagong NSW. 12-month AU warranty. Sur-Ron, Talaria & more.',
    ogTitle: 'Electric Bikes for Sale Melbourne — Motorbikes & Mopeds, Free Delivery',
    ogDescription: 'Electric bikes, motorbikes and mopeds delivered to Melbourne VIC. Free delivery over $1,500. 12-month AU warranty.',
    h1: 'Electric Bikes for Sale in Melbourne — Fast Delivery to VIC',
    keywords: 'electric bikes for sale melbourne, electric motorbike melbourne, electric moped melbourne, electric bikes melbourne, e bikes for sale melbourne',
    main: 'electric bikes for sale melbourne', // 170/mo KD13 Transactional
    primary: ['electric bikes melbourne', 'electric moped melbourne', 'electric motorbike melbourne'], // 1,900 / 1,300 / 50
  },
  '/electric-motor-bikes/perth/': {
    title: 'Electric Bikes for Sale Perth — Motorbikes & Mopeds, Free Delivery | EDBA',
    description: 'Buy electric bikes, motorbikes & mopeds in Perth WA. Free insured freight over $1,500 from Mittagong NSW. 12-month AU warranty. Sur-Ron, Talaria & more.',
    ogTitle: 'Electric Bikes for Sale Perth — Motorbikes & Mopeds, Free Delivery',
    ogDescription: 'Electric bikes, motorbikes and mopeds delivered to Perth WA. Free freight over $1,500. 12-month AU warranty.',
    h1: 'Electric Bikes for Sale in Perth — Delivered Free to WA',
    keywords: 'electric bikes for sale perth, electric motorbike perth, electric moped perth, electric bikes perth, e bikes for sale perth',
    main: 'electric bikes for sale perth', // 140/mo KD12 Transactional
    primary: ['electric bikes perth', 'electric moped perth', 'electric motorbike perth'], // 1,900 / 590 / 170
  },
  '/accessories/': {
    title: 'Electric Bike Parts & Dirt Bike Accessories Australia — 72V Batteries & Chargers | EDBA',
    description: 'Buy e bike parts in Australia: 72V Molicel batteries, fast chargers, Sur-Ron & Talaria electric dirt bike parts & upgrades. Free shipping over $1,500.',
    ogTitle: 'Electric Bike Parts & Dirt Bike Accessories Australia — 72V Batteries & Chargers',
    ogDescription: '72V Molicel batteries, fast chargers, Sur-Ron & Talaria parts. Free shipping over $1,500 AUD. Genuine stock from Mittagong NSW.',
    keywords: 'e bike parts australia, electric bike parts australia, electric dirt bike parts, ebike battery australia, electric dirt bike battery, electric dirt bike upgrades',
    main: 'e bike parts australia', // 90/mo KD5 Informational+Transactional
    primary: ['electric bike parts australia', 'ebike battery australia', 'electric dirt bike parts'], // 110 / 40 (inferred) / 20 (inferred)
  },
  '/brands/': {
    title: 'Electric Bike Brands Australia — Sur-Ron, Talaria, Stark Varg, E-Ride Pro | EDBA',
    description: 'Electric bike brands in Australia: Sur-Ron, Talaria, Stark Varg, Stealth, E-Ride Pro & more. Genuine AU stock, factory warranty and parts support from NSW.',
    ogTitle: 'Electric Bike Brands Australia — Sur-Ron, Talaria, Stark Varg, E-Ride Pro',
    ogDescription: 'Sur-Ron, Talaria, Stark Varg, Stealth & E-Ride Pro. Genuine AU stock, factory warranty from Mittagong NSW 2575.',
    keywords: 'electric bike brands australia, e ride pro, e ride pro australia, electric dirt bike brands',
    main: 'e ride pro', // Navigational 2,900/mo KD17: brand term, answered in FAQ and brand copy
    primary: ['electric bike brands australia', 'e ride pro australia'], // 90 / 170
  },
  '/blog/': {
    title: 'Electric Dirt Bike Blog Australia — Guides, Reviews & Riding Tips | EDBA',
    description: 'Electric dirt bike and e-bike guides for Australian riders: laws, kids bikes, batteries, speed, cost and maintenance from our Mittagong NSW workshop.',
    ogTitle: 'Electric Dirt Bike Blog Australia — Guides, Reviews & Tips',
    ogDescription: 'Electric bike laws, kids bikes, battery upgrades & riding tips from Australia\'s electric dirt bike specialists in Mittagong NSW.',
    keywords: 'electric bike laws australia, electric bike regulations nsw, electric dirt bike, kids electric bike, fast electric bikes',
    main: 'electric bike laws australia',
    primary: ['electric dirt bike', 'electric bike laws australia'],
  },
  '/faq/': {
    title: 'Electric Dirt Bike FAQ Australia — E-Ride Pro, Laws, Price & Delivery | EDBA',
    description: 'Where to buy an electric dirt bike, price, kids bikes, E-Ride Pro, electric bike laws, delivery to Brisbane, Sydney & Melbourne, warranty and crypto discount.',
    ogTitle: 'Electric Dirt Bike FAQ Australia — E-Ride Pro, Laws, Price & Delivery',
    ogDescription: 'Where to buy an electric dirt bike, price, kids bikes, E-Ride Pro, laws and delivery across Australia, answered by EDBA specialists.',
    keywords: 'e ride pro, brisbane electric bikes, electric bike laws australia, how much are electric bikes, where to buy electric dirt bike',
    main: 'e ride pro', // Navigational
    primary: ['brisbane electric bikes', 'electric bikes in brisbane', 'electric bike laws australia'],
  },
  '/electric-bikes/': {
    title: 'Electric Bikes for Sale Australia — E-Bikes, E-Motos & Mopeds | EDBA',
    description: 'Buy electric bikes in Australia: RTR eBikes, Super73 e-motos and electric mopeds. Road-legal & off-road e-bikes, 12-month AU warranty. Free freight over $1,500.',
    ogTitle: 'Electric Bikes for Sale Australia — E-Bikes, E-Motos & Mopeds',
    ogDescription: 'RTR eBikes, Super73 e-motos and road-legal electric mopeds. 12-month AU warranty. Free freight over $1,500.',
    h1: 'Electric Bikes for Sale in Australia',
    keywords: 'electric bikes for sale, e-bikes for sale, electric bike price, buy electric bike australia, electric bike australia, electric bikes australia, e bike australia, e bike, electric bike',
    main: 'electric bikes for sale', // 1,600/mo KD36 Transactional (+ e-bikes for sale 320, electric bike price 480, electric bikes on sale 170)
    primary: ['electric bike', 'e bike', 'electric bikes', 'electric bike australia', 'electric bikes australia', 'e bike australia'], // 27,100 / 22,200 / 5,400 / 1,900 / 1,900 / 7,960 cluster
  },
  // ---- New category and city pages (additive URLs) ----
  '/electric-motocross-bikes/': {
    title: 'Electric Motocross Bikes for Sale Australia — Stark Varg, Sur-Ron Storm Bee | EDBA',
    description: 'Buy an electric motocross bike in Australia: Stark Varg, Sur-Ron Storm Bee MX, Stealth H-52, Velimotor VMX12. 12-month AU warranty. Free freight over $1,500.',
    ogTitle: 'Electric Motocross Bikes for Sale Australia — Stark Varg, Sur-Ron Storm Bee',
    ogDescription: 'Competition electric motocross bikes: Stark Varg, Sur-Ron Storm Bee MX, Stealth H-52 and Velimotor VMX12. 12-month AU warranty, free freight over $1,500.',
    h1: 'Electric Motocross Bikes for Sale in Australia',
    keywords: 'electric motocross bike for sale, electric motocross motorcycle, electric motocross bike, e motocross bike, electric mx bike, electric motocross bicycle',
    main: 'electric motocross bike for sale', // 20/mo (inferred): no Semrush-labelled transactional keyword for motocross
    primary: ['electric motocross motorcycle', 'electric motocross bike', 'e motocross bike', 'electric mx bike'], // 880 / 720 / 260 / 90
  },
  '/electric-motorcycles/': {
    title: 'Electric Motorcycles for Sale Australia — Road-Legal & Off-Road | EDBA',
    description: 'Buy an electric motorcycle in Australia: road-registered motorcycles and mopeds plus off-road models. 12-month AU warranty. Free freight over $1,500.',
    ogTitle: 'Electric Motorcycles for Sale Australia — Road-Legal & Off-Road',
    ogDescription: 'Road-registered electric motorcycles and mopeds plus off-road electric motorcycles. 12-month AU warranty. Free freight over $1,500.',
    h1: 'Electric Motorcycles for Sale in Australia',
    keywords: 'electric motorcycle for sale, electric motorcycles for sale, electric motorcycle, electric motorcycle australia, electric motorcycles australia, e motorcycle, road legal electric motorcycle',
    main: 'electric motorcycle for sale', // 260/mo KD20 Transactional (+ electric motorcycles for sale 90)
    primary: ['electric motorcycle', 'electric motorcycle australia', 'electric motorcycles australia', 'electric motorcycles', 'e motorcycle'], // 1,900 / 1,900 / 590 / 720 / 880
  },
  '/electric-motor-bikes/sydney/': {
    title: 'Electric Bikes for Sale Sydney — E-Bikes, Motorbikes & Mopeds | EDBA',
    description: 'Buy electric bikes, motorbikes, mopeds & dirt bikes for Sydney NSW from our Southern Highlands workshop. Free insured freight over $1,500. 12-month AU warranty.',
    ogTitle: 'Electric Bikes for Sale Sydney — E-Bikes, Motorbikes & Mopeds',
    ogDescription: 'E-bikes, electric motorbikes, mopeds and dirt bikes for Sydney from Mittagong NSW. Free freight over $1,500. 12-month AU warranty.',
    h1: 'Electric Bikes for Sale in Sydney',
    keywords: 'e bikes for sale sydney, electric bike for sale sydney, electric bikes for sale sydney, ebike sydney, electric bikes sydney, ebikes sydney, e bikes sydney',
    main: 'e bikes for sale sydney', // 110/mo KD19 Transactional (+ electric bike for sale sydney 90, electric bikes for sale sydney 70)
    primary: ['ebike sydney', 'electric bikes sydney', 'ebikes sydney', 'e bikes sydney'], // 1,600 / 880 / 480 / 390
  },
  '/electric-motor-bikes/brisbane/': {
    title: 'Electric Bikes for Sale Brisbane — E-Bikes, Motorbikes & Mopeds | EDBA',
    description: 'Buy electric bikes, motorbikes, mopeds & dirt bikes delivered to Brisbane QLD from Mittagong NSW. Free insured freight over $1,500. 12-month AU warranty.',
    ogTitle: 'Electric Bikes for Sale Brisbane — E-Bikes, Motorbikes & Mopeds',
    ogDescription: 'E-bikes, electric motorbikes, mopeds and dirt bikes delivered to Brisbane. Free freight over $1,500. 12-month AU warranty.',
    h1: 'Electric Bikes for Sale in Brisbane',
    keywords: 'electric bikes for sale brisbane, e bikes for sale brisbane, e bikes brisbane, brisbane electric bikes, electric bikes in brisbane, electric bicycle brisbane, electric motorbike brisbane',
    main: 'electric bikes for sale brisbane', // 90/mo KD21 Transactional (+ e bikes for sale brisbane 70)
    primary: ['e bikes brisbane', 'electric motorbike brisbane'], // 1,300 / 90. Navigational: brisbane electric bikes 480, electric bicycle brisbane 590, electric bikes in brisbane 210 (answered in FAQ)
  },
  // ---- Categories for demand the shop did not serve before (products supplied by Ampd Bros) ----
  '/electric-fat-tyre-bikes/': {
    title: 'Electric Fat Bikes & Beach Cruisers for Sale Australia — Fat Tyre E-Bikes | EDBA',
    description: 'Buy an electric fat bike in Australia: fat tyre e-bikes and beach cruisers from Ampd Bros (ACE, Stubbie, Chubbie, Riptide). Road-compliant or off-road.',
    ogTitle: 'Electric Fat Bikes & Beach Cruisers for Sale Australia — Fat Tyre E-Bikes',
    ogDescription: 'Fat tyre electric bikes and beach cruisers: ACE, Stubbie, Chubbie and Riptide from Ampd Bros. Road-compliant 250W or off-road models.',
    h1: 'Electric Fat Bikes & Beach Cruisers for Sale in Australia',
    keywords: 'electric fat bike, best fat tyre electric bike australia, fat bike australia, electric fat tyre bike, fat tyre electric bike australia, e bike cruiser, beach cruiser for sale, electric cruiser bike australia',
    main: 'beach cruiser for sale', // 50/mo KD13 Transactional (no Semrush transactional keyword exists for fat bikes)
    primary: ['electric fat bike', 'best fat tyre electric bike australia', 'fat bike australia', 'electric fat tyre bike', 'fat tyre electric bike australia', 'e bike cruiser'], // 720 / 320 / 210 / 210 / 140 / 390
  },
  '/electric-mini-bikes/': {
    title: 'Mini Electric Bikes for Sale Australia — Mini E Bikes & Mini Fat Bikes | EDBA',
    description: 'Buy a mini electric bike in Australia: ACE Mini and ACE-X Mini Pro compact fat tyre e-bikes from Ampd Bros. 16-inch wheels, 48V 15Ah battery.',
    ogTitle: 'Mini Electric Bikes for Sale Australia — Mini E Bikes & Mini Fat Bikes',
    ogDescription: 'Compact mini electric fat bikes: ACE Mini and ACE-X Mini Pro from Ampd Bros. Step-through and step-over frames.',
    h1: 'Mini Electric Bikes for Sale in Australia',
    keywords: 'mini e bike, electric mini bike, mini electric bike, mini ebike, mini e bikes, mini ebikes, electric mini bikes',
    main: 'electric mini bikes for sale', // 20/mo (inferred): no Semrush-labelled transactional keyword exists for mini bikes
    primary: ['mini e bike', 'electric mini bike', 'mini electric bike', 'mini ebike'], // 1,000 / 590 / 590 / 590
  },
  '/electric-bikes/cheap/': {
    title: 'Cheap Electric Bikes for Sale Australia — Affordable E-Bikes & Kids Bikes | EDBA',
    description: 'Shop cheap electric bikes in Australia: affordable e-bikes, fat tyre bikes and kids electric bikes with warranty. Pay with crypto or PayID for 10% off.',
    ogTitle: 'Cheap Electric Bikes for Sale Australia — Affordable E-Bikes & Kids Bikes',
    ogDescription: 'Affordable electric bikes, fat tyre e-bikes and kids electric bikes. Warranty included. 10% off with crypto or PayID.',
    h1: 'Cheap Electric Bikes for Sale in Australia',
    keywords: 'cheap electric bikes for sale, cheap electric bikes, cheap electric bikes australia, electric bike cheap, cheapest electric bike australia, cheap e bikes australia, electric cheap bikes',
    main: 'cheap electric bikes for sale', // 110/mo KD19 Transactional
    primary: ['cheap electric bikes', 'cheap electric bikes australia', 'electric bike cheap', 'cheapest electric bike australia', 'cheap e bikes australia', 'electric cheap bikes'], // 720 / 390 / 320 / 210 / 170 / 2,900
  },
};

// Extra FAQ entries. Navigational keywords (brand / city) and transactional questions.
// Every fact below comes from product pages or site policy in src/config/site.ts.
export interface SeoFaq { question: string; answer: string; keywords: string[]; }

export const FAQ_SEO: SeoFaq[] = [
  {
    question: 'Where can I buy an electric dirt bike for sale in Australia?',
    answer: 'Electric Dirt Bike Australia sells electric dirt bikes online and ships Australia-wide from our Mittagong NSW 2575 workshop. Browse electric dirt bikes for sale in the shop, choose your model and check out with crypto, PayID or bank transfer (10% off with crypto or PayID). Orders over $1,500 AUD ship free and every bike carries a 12-month Australian warranty.',
    keywords: ['electric dirt bike for sale', 'buy electric dirt bike', 'electric dirt bikes for sale'],
  },
  {
    question: 'Do you sell electric motorbikes and electric motorcycles for sale in Australia?',
    answer: 'Yes. Our electric motorbike range includes off-road bikes, road-legal commuter mopeds (NIU NQi GT, Super Soco CPx, Vmoto Soco TC-Max) and the RTR eBike commuters. Each product page lists power, battery, range and whether the model is road-legal, so you can compare electric motorbikes for sale before you buy.',
    keywords: ['electric motorbikes for sale', 'electric motorcycle for sale', 'electric motorbike australia'],
  },
  {
    question: 'Do you sell kids electric bikes and childs electric motorcycles?',
    answer: 'Yes. Our kids electric bike range runs from the EDBA Moto 50 for ages 3–6 ($1,290) and the Razor MX650 ($899) up to the OSET 20.0 Racing Junior for ages 6–14 ($4,290), the Torrot Motocross Two Junior ($3,690), and the KTM SX-E 5 and Husqvarna EE 5 youth electric motocross bikes for ages 4–10. See the kids page for every childs electric motorcycle and childrens electric dirt bike in stock.',
    keywords: ['kids electric bike', 'childs electric motorcycle', 'childrens electric dirt bike', 'kids electric motorbike'],
  },
  {
    question: 'Where can I buy an E-Ride Pro in Australia?',
    answer: 'We stock the E-Ride Pro-SS 2.0 (72V 40Ah, 12kW) at $8,690 and the E-Ride Pro-SR (72V 45Ah, 15kW peak) at $9,990. Both ship Australia-wide from Mittagong NSW with a 12-month Australian warranty. Open the E-Ride Pro product pages from the shop or the brands page for full specifications.',
    keywords: ['e ride pro', 'e ride pro australia', 'e-ride pro ss'],
  },
  {
    question: 'Do you deliver electric bikes to Brisbane, Sydney, Melbourne and Perth?',
    answer: 'Yes. We deliver electric bikes, electric motorbikes and electric dirt bikes to every state, including Brisbane, Sydney, Melbourne, Perth, Adelaide and regional areas, from our Mittagong NSW 2575 workshop. Free insured freight applies to orders over $1,500 AUD. See the Melbourne and Perth pages for local delivery details, or the Shipping & Delivery page for freight terms.',
    keywords: ['brisbane electric bikes', 'electric bikes in brisbane', 'electric bikes for sale melbourne', 'electric bikes for sale perth'],
  },
  {
    question: 'Do you sell RTR eBikes in Australia?',
    answer: 'Yes. We stock the RTR eBike Pro ($3,490, 250W, 36V 15Ah, up to 80km range) and the RTR eBike S Classic ($2,790). Both are 250W road-legal e-bikes that need no licence, registration or number plate. See the RTR eBike page for the full RTR e bike range.',
    keywords: ['rtr ebike', 'rtr e bike', 'rtr electric bike'],
  },
  {
    question: 'Do you sell electric mopeds in Australia?',
    answer: 'Yes. Our road-legal electric mopeds are the NIU NQi GT ($5,990, 3,000W, 100km range with dual battery), the Super Soco CPx ($5,490, 3kW) and the Vmoto Soco TC-Max ($8,990, 5kW). The NIU NQi GT is LAMS approved for L and P-plate riders. See the electric mopeds page for specifications and prices.',
    keywords: ['electric moped australia', 'moped prices', 'electric motorcycle moped'],
  },
  {
    question: 'How much do electric bikes cost in Australia?',
    answer: 'Electric bike prices at Electric Dirt Bike Australia start at $2,790 for the RTR eBike S Classic road-legal commuter and $3,490 for the RTR eBike Pro. Electric mopeds run from $5,490, adult electric dirt bikes from $5,490 up to $18,990, and kids electric bikes from $899. All prices are in AUD and include GST. Pay with crypto or PayID for 10% off.',
    keywords: ['electric bike price', 'how much are electric bikes', 'electric bikes for sale'],
  },
  {
    question: 'Are electric bikes legal in NSW, Queensland and Victoria?',
    answer: 'Rules depend on the type of bike. Pedal-assist e-bikes that meet the Australian 250W, 25 km/h assist standard, like the RTR eBike, are treated as bicycles and need no licence or registration. Higher-powered electric motorbikes are different: they are supplied for private property and off-road parks, or must be registered as motorcycles or mopeds. Rules differ by state, so check your state transport authority and read our electric bike laws guide.',
    keywords: ['electric bike laws australia', 'electric bike laws qld', 'electric bike regulations nsw'],
  },
  {
    question: 'What is the difference between an electric dirt bike and an electric motorbike?',
    answer: 'An electric dirt bike is built for off-road riding on private property, bush tracks and motocross parks, with long-travel suspension and knobby tyres. An electric motorbike or moped is typically built for roads, with lights, mirrors and registration, such as our LAMS-approved NIU NQi GT. We sell both, so you can buy the right electric bike for where you ride.',
    keywords: ['electric motorbike', 'electric dirt bike', 'electric motorcycle moped'],
  },
];

// Merges the base FAQ (src/config/site.ts, left untouched) with the keyword-led entries above.
// One base answer is corrected: it said kids bikes start at $3,690 but the catalogue starts at $899.
export interface FaqEntry { question: string; answer: string; }
export function buildFaq(base: FaqEntry[], extra: number = FAQ_SEO.length): FaqEntry[] {
  const fixed = base.map((f) =>
    f.question === 'How much does an electric dirt bike cost in Australia?'
      ? {
          question: f.question,
          answer: 'Kids electric dirt bikes start from $899 AUD (Razor MX650) and $1,290 (EDBA Moto 50, ages 3–6). Mid-range adult performance bikes like the Sur-Ron Light Bee X are $6,490 AUD and the Talaria Sting R MX4 is $7,290 AUD. High-performance motocross bikes like the Stark Varg EX 80HP are $18,990 AUD. All prices include GST, with free Australia-wide delivery on orders over $1,500.',
        }
      : f,
  );
  return [...fixed, ...FAQ_SEO.slice(0, extra).map(({ question, answer }) => ({ question, answer }))];
}

export function seoFor(path: string): PageSeo {
  const s = PAGE_SEO[path];
  if (!s) throw new Error(`No SEO entry for ${path}`);
  return s;
}
