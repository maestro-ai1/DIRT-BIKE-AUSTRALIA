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
    title: 'Electric Dirt Bike for Sale Australia | Sur-Ron & More',
    description: 'Electric dirt bike for sale in Australia: Sur-Ron, Talaria, Stark Varg and kids bikes. Free freight over $1,500 and a 12-month warranty.',
    ogTitle: 'Electric Dirt Bike for Sale Australia | Sur-Ron & More',
    ogDescription: 'Electric dirt bike for sale in Australia: Sur-Ron, Talaria, Stark Varg and kids bikes. Free freight over $1,500 and a 12-month warranty.',
    h1: 'Electric Dirt Bike for Sale in Australia',
    keywords: 'electric dirt bike for sale, electric dirt bike australia, electric dirt bikes australia, electric dirtbike australia',
    main: 'electric dirt bike for sale',
    primary: ['electric dirt bike australia', 'electric dirt bikes australia', 'electric dirtbike australia'],
  },
  '/shop/': {
    title: 'Buy Electric Dirt Bike Online | Shop All Models Australia',
    description: 'Buy electric dirt bike models online: Sur-Ron, Talaria, Stark Varg, kids bikes, batteries and parts. Free freight over $1,500.',
    ogTitle: 'Buy Electric Dirt Bike Online | Shop All Models Australia',
    ogDescription: 'Buy electric dirt bike models online: Sur-Ron, Talaria, Stark Varg, kids bikes, batteries and parts. Free freight over $1,500.',
    h1: 'Shop All Electric Bikes, Dirt Bikes & Parts',
    keywords: 'buy electric dirt bike',
    main: 'buy electric dirt bike',
    primary: [],
  },
  '/electric-dirt-bikes/': {
    title: 'Electric Dirt Bikes for Sale Australia | Adult & Off-Road',
    description: 'Shop electric dirt bikes for sale in Australia: adult, off-road and trail bikes from Sur-Ron, Talaria and E-Ride Pro. Free freight over $1,500.',
    ogTitle: 'Electric Dirt Bikes for Sale Australia | Adult & Off-Road',
    ogDescription: 'Shop electric dirt bikes for sale in Australia: adult, off-road and trail bikes from Sur-Ron, Talaria and E-Ride Pro. Free freight over $1,500.',
    h1: 'Electric Dirt Bikes for Sale in Australia',
    keywords: 'electric dirt bikes for sale, electric dirt bike, electric dirt bikes, electric dirtbike, e dirt bike, electric dirt bike for adults, electric off road bike, dirt motorcycles for sale',
    main: 'electric dirt bikes for sale',
    primary: ['electric dirt bike', 'electric dirt bikes', 'electric dirtbike', 'e dirt bike', 'electric dirt bike for adults', 'electric off road bike'],
  },
  '/electric-dirt-bikes/cheap/': {
    title: 'Cheap Electric Dirt Bikes for Sale Australia | From $899',
    description: 'Cheap electric dirt bikes for sale in Australia from $899: adult, youth and mini models. Free freight over $1,500, 12-month warranty.',
    ogTitle: 'Cheap Electric Dirt Bikes for Sale Australia | From $899',
    ogDescription: 'Cheap electric dirt bikes for sale in Australia from $899: adult, youth and mini models. Free freight over $1,500, 12-month warranty.',
    h1: 'Cheap Electric Dirt Bikes for Sale in Australia',
    keywords: 'cheap electric dirt bikes, cheap electric dirt bike, cheap e dirt bike, electric dirt bike cheap, affordable electric dirt bike, affordable dirt bikes for sale, low cost dirt bike',
    main: 'cheap electric dirt bikes',
    primary: ['cheap electric dirt bike', 'cheap e dirt bike', 'electric dirt bike cheap', 'affordable electric dirt bike'],
  },
  '/electric-dirt-bikes/kids/': {
    title: 'Electric Dirt Bike for Kids Australia | Youth Bikes $899+',
    description: 'Electric dirt bike for kids in Australia: youth bikes by age and size from $899. 12-month warranty and free freight over $1,500.',
    ogTitle: 'Electric Dirt Bike for Kids Australia | Youth Bikes $899+',
    ogDescription: 'Electric dirt bike for kids in Australia: youth bikes by age and size from $899. 12-month warranty and free freight over $1,500.',
    h1: 'Electric Dirt Bikes for Kids: Youth Bikes for Sale in Australia',
    keywords: 'electric dirt bike for kids, electric dirt bike kids, electric kids dirt bike, electric dirt bikes for kids, kids electric dirtbike, childrens electric dirt bike, kids electric dirt bike, dirt bike for kids, childs dirt bike',
    main: 'electric dirt bike for kids',
    primary: ['electric dirt bike kids', 'electric kids dirt bike', 'electric dirt bikes for kids', 'kids electric dirtbike', 'childrens electric dirt bike', 'kids electric dirt bike', 'dirt bike for kids'],
  },
  '/electric-dirt-bikes/sur-ron/': {
    title: 'Surron for Sale Australia | Sur-Ron Electric Bike Prices',
    description: 'Surron for sale in Australia: Light Bee X, Ultra Bee and more with Sur-Ron electric bike prices, free freight over $1,500 and warranty.',
    ogTitle: 'Surron for Sale Australia | Sur-Ron Electric Bike Prices',
    ogDescription: 'Surron for sale in Australia: Light Bee X, Ultra Bee and more with Sur-Ron electric bike prices, free freight over $1,500 and warranty.',
    h1: 'Surron for Sale in Australia: Sur-Ron Electric Bike Prices',
    keywords: 'surron for sale, sur ron ebike for sale, surron electric bike for sale, surrons for sale, sur ron electric bike price',
    main: 'surron for sale',
    primary: ['sur ron ebike for sale', 'surron electric bike for sale', 'surrons for sale', 'sur ron electric bike price'],
  },
  '/electric-bikes/': {
    title: 'Electric Bikes for Sale Australia | E-Bikes, E-Motos, Mopeds',
    description: 'Electric bikes for sale in Australia: e-bikes, e-motos and mopeds with prices, free freight over $1,500 and a 12-month warranty.',
    ogTitle: 'Electric Bikes for Sale Australia | E-Bikes, E-Motos, Mopeds',
    ogDescription: 'Electric bikes for sale in Australia: e-bikes, e-motos and mopeds with prices, free freight over $1,500 and a 12-month warranty.',
    h1: 'Electric Bikes for Sale in Australia',
    keywords: 'electric bikes for sale, electric bike, e bike, electric bikes, electric bike australia, electric bikes australia, e bike australia, electric bike price, e bikes for sale',
    main: 'electric bikes for sale',
    primary: ['electric bike', 'e bike', 'electric bikes', 'electric bike australia', 'electric bikes australia', 'e bike australia'],
  },
  '/electric-bikes/cheap/': {
    title: 'Cheap Electric Bikes for Sale Australia | Low Cost E-Bikes',
    description: 'Cheap electric bikes for sale in Australia: low cost e-bikes and kids bikes with free freight over $1,500 and a 12-month warranty.',
    ogTitle: 'Cheap Electric Bikes for Sale Australia | Low Cost E-Bikes',
    ogDescription: 'Cheap electric bikes for sale in Australia: low cost e-bikes and kids bikes with free freight over $1,500 and a 12-month warranty.',
    h1: 'Cheap Electric Bikes for Sale in Australia',
    keywords: 'cheap electric bikes for sale, cheap electric bikes, cheap electric bikes australia, electric bike cheap, cheapest electric bike australia, cheap e bikes australia, low cost electric bike',
    main: 'cheap electric bikes for sale',
    primary: ['cheap electric bikes', 'cheap electric bikes australia', 'electric bike cheap', 'cheapest electric bike australia', 'cheap e bikes australia', 'low cost electric bike'],
  },
  '/electric-motor-bikes/': {
    title: 'Electric Motorbikes for Sale Australia | Road & Off-Road',
    description: 'Electric motorbikes for sale in Australia: road-legal mopeds, off-road bikes and kids models. Free freight over $1,500 from NSW.',
    ogTitle: 'Electric Motorbikes for Sale Australia | Road & Off-Road',
    ogDescription: 'Electric motorbikes for sale in Australia: road-legal mopeds, off-road bikes and kids models. Free freight over $1,500 from NSW.',
    h1: 'Electric Motorbikes for Sale in Australia',
    keywords: 'electric motorbikes for sale, electric motorbike, electric motorbike australia, electric motor bike, electric motor bikes, e motorbike, electric motorbikes, electric motor bikes for sale, buy electric motorbike',
    main: 'electric motorbikes for sale',
    primary: ['electric motorbike', 'electric motorbike australia', 'electric motor bike', 'electric motor bikes', 'e motorbike', 'electric motorbikes'],
  },
  '/electric-motorcycles/': {
    title: 'Electric Motorcycle for Sale Australia | Road & Off-Road',
    description: 'Electric motorcycle for sale in Australia: road-legal and off-road models with free freight over $1,500 and a 12-month warranty.',
    ogTitle: 'Electric Motorcycle for Sale Australia | Road & Off-Road',
    ogDescription: 'Electric motorcycle for sale in Australia: road-legal and off-road models with free freight over $1,500 and a 12-month warranty.',
    h1: 'Electric Motorcycles for Sale in Australia',
    keywords: 'electric motorcycle for sale, electric motorcycle, electric motorcycle australia, electric motorcycles australia, electric motorcycles, e motorcycle, electric motorcycles for adults',
    main: 'electric motorcycle for sale',
    primary: ['electric motorcycle', 'electric motorcycle australia', 'electric motorcycles australia', 'electric motorcycles', 'e motorcycle'],
  },
  '/electric-motor-bikes/commuter-mopeds/': {
    title: 'Electric Moped Australia | Road-Legal Moped Prices & Stock',
    description: 'Electric moped Australia: road-legal LAMS mopeds with moped prices, free freight over $1,500 and a 12-month warranty.',
    ogTitle: 'Electric Moped Australia | Road-Legal Moped Prices & Stock',
    ogDescription: 'Electric moped Australia: road-legal LAMS mopeds with moped prices, free freight over $1,500 and a 12-month warranty.',
    h1: 'Electric Moped Australia: Mopeds & Commuter E-Bikes for Sale',
    keywords: 'moped prices, electric moped australia, electric motorcycle moped, electric moped bike, electric mopeds australia, best electric moped australia',
    main: 'moped prices',
    primary: ['electric moped australia', 'electric motorcycle moped', 'electric moped bike', 'electric mopeds australia', 'best electric moped australia'],
  },
  '/electric-motor-bikes/best-electric-bikes-australia/': {
    title: 'Best Electric Bikes Australia 2026 | Top 10 Ranked',
    description: 'Best electric bikes Australia 2026: the top 10 ranked by price, range and rider type, with where to buy and what each costs.',
    ogTitle: 'Best Electric Bikes Australia 2026 | Top 10 Ranked',
    ogDescription: 'Best electric bikes Australia 2026: the top 10 ranked by price, range and rider type, with where to buy and what each costs.',
    h1: 'Best Electric Bikes Australia 2026: Expert Buyer\'s Guide',
    keywords: 'best electric bike australia, best electric bikes australia, best e bikes australia, best ebike australia',
    main: 'best electric bike australia',
    primary: ['best electric bikes australia', 'best e bikes australia', 'best ebike australia'],
  },
  '/electric-motor-bikes/e-bike-laws-australia/': {
    title: 'Electric Bike Laws Australia 2026 | State Rules Explained',
    description: 'Electric bike laws Australia 2026: power limits, age rules and certification for NSW, QLD, VIC and WA, plus what is road legal.',
    ogTitle: 'Electric Bike Laws Australia 2026 | State Rules Explained',
    ogDescription: 'Electric bike laws Australia 2026: power limits, age rules and certification for NSW, QLD, VIC and WA, plus what is road legal.',
    h1: 'Electric Bike Laws Australia: Are E-Bikes Legal? NSW, VIC, QLD & WA 2026',
    keywords: 'electric bike laws australia, electric bike laws qld, electric bike regulations nsw, nsw e bike certification laws, street legal electric bike, e bike laws victoria age limit, new electric bike laws',
    main: 'electric bike laws australia',
    primary: ['electric bike laws qld', 'electric bike regulations nsw', 'nsw e bike certification laws', 'street legal electric bike'],
  },
  '/electric-motor-bikes/kids/': {
    title: 'Kids Electric Bike for Sale Australia | Motorbikes Ages 3-16',
    description: 'Kids electric bike and motorbike range for ages 3 to 16: childs electric motorcycles with safety limits. Free freight over $1,500.',
    ogTitle: 'Kids Electric Bike for Sale Australia | Motorbikes Ages 3-16',
    ogDescription: 'Kids electric bike and motorbike range for ages 3 to 16: childs electric motorcycles with safety limits. Free freight over $1,500.',
    h1: 'Kids Electric Bikes & Motorbikes for Sale in Australia',
    keywords: 'kids electric bike, childs electric motorcycle, kids electric motorbike, childrens electric motorbike, children electric bike, electric motorbike kids, electric bike kids',
    main: 'kids electric bike',
    primary: ['childs electric motorcycle', 'kids electric motorbike', 'childrens electric motorbike', 'children electric bike', 'electric motorbike kids', 'electric bike kids'],
  },
  '/electric-motor-bikes/rtr-ebike/': {
    title: 'RTR eBike for Sale Australia | Buy RTR E Bike, No Licence',
    description: 'RTR eBike for sale in Australia: road-legal RTR e bike commuters, no licence needed. Free delivery over $1,500 and 12-month warranty.',
    ogTitle: 'RTR eBike for Sale Australia | Buy RTR E Bike, No Licence',
    ogDescription: 'RTR eBike for sale in Australia: road-legal RTR e bike commuters, no licence needed. Free delivery over $1,500 and 12-month warranty.',
    h1: 'RTR eBike for Sale in Australia: Road-Legal Commuter Range',
    keywords: 'rtr ebike for sale, rtr e bike, rtr ebike, rtr electric bike, rtr bike',
    main: 'rtr ebike for sale',
    primary: ['rtr e bike', 'rtr ebike', 'rtr electric bike', 'rtr bike'],
  },
  '/electric-motor-bikes/sydney/': {
    title: 'E Bikes for Sale Sydney | Electric Bikes Sydney Delivery',
    description: 'E bikes for sale in Sydney: electric bikes, e-motos and mopeds delivered from Mittagong NSW. Free freight over $1,500.',
    ogTitle: 'E Bikes for Sale Sydney | Electric Bikes Sydney Delivery',
    ogDescription: 'E bikes for sale in Sydney: electric bikes, e-motos and mopeds delivered from Mittagong NSW. Free freight over $1,500.',
    h1: 'E Bikes for Sale in Sydney: Electric Bikes with NSW Delivery',
    keywords: 'e bikes for sale sydney, ebike sydney, electric bikes sydney, ebikes sydney, e bikes sydney, electric bike sydney, electric bike for sale sydney',
    main: 'e bikes for sale sydney',
    primary: ['ebike sydney', 'electric bikes sydney', 'ebikes sydney', 'e bikes sydney', 'electric bike sydney'],
  },
  '/electric-motor-bikes/melbourne/': {
    title: 'Electric Bikes for Sale Melbourne | E Bikes Melbourne VIC',
    description: 'Electric bikes for sale in Melbourne: e bikes, mopeds and e-motos with VIC delivery. Free freight over $1,500, 12-month warranty.',
    ogTitle: 'Electric Bikes for Sale Melbourne | E Bikes Melbourne VIC',
    ogDescription: 'Electric bikes for sale in Melbourne: e bikes, mopeds and e-motos with VIC delivery. Free freight over $1,500, 12-month warranty.',
    h1: 'Electric Bikes for Sale in Melbourne: Delivery to VIC',
    keywords: 'electric bikes for sale melbourne, electric bikes melbourne, electric moped melbourne, ebike melbourne, electric bicycle melbourne, e bikes melbourne, e bikes for sale melbourne',
    main: 'electric bikes for sale melbourne',
    primary: ['electric bikes melbourne', 'electric moped melbourne', 'ebike melbourne', 'electric bicycle melbourne', 'e bikes melbourne'],
  },
  '/electric-motor-bikes/perth/': {
    title: 'Electric Bikes for Sale Perth | E Bikes Perth WA Delivery',
    description: 'Electric bikes for sale in Perth: e bikes, mopeds and e-motos delivered to WA. Free freight over $1,500 and 12-month warranty.',
    ogTitle: 'Electric Bikes for Sale Perth | E Bikes Perth WA Delivery',
    ogDescription: 'Electric bikes for sale in Perth: e bikes, mopeds and e-motos delivered to WA. Free freight over $1,500 and 12-month warranty.',
    h1: 'Electric Bikes for Sale in Perth: Delivery to WA',
    keywords: 'electric bikes for sale perth, electric bicycle perth wa, electric bikes perth, ebikes perth, e bikes perth, electric moped perth, e bikes for sale perth',
    main: 'electric bikes for sale perth',
    primary: ['electric bicycle perth wa', 'electric bikes perth', 'ebikes perth', 'e bikes perth', 'electric moped perth'],
  },
  '/electric-motor-bikes/brisbane/': {
    title: 'Electric Bikes for Sale Brisbane | E Bikes Brisbane QLD',
    description: 'Electric bikes for sale in Brisbane: e bikes and e-motos with QLD delivery. Free freight over $1,500 and a 12-month warranty.',
    ogTitle: 'Electric Bikes for Sale Brisbane | E Bikes Brisbane QLD',
    ogDescription: 'Electric bikes for sale in Brisbane: e bikes and e-motos with QLD delivery. Free freight over $1,500 and a 12-month warranty.',
    h1: 'Electric Bikes for Sale in Brisbane: Delivery to QLD',
    keywords: 'electric bikes for sale brisbane, e bikes brisbane, electric motorbike brisbane, e bike brisbane, used electric bikes brisbane, e bikes for sale brisbane',
    main: 'electric bikes for sale brisbane',
    primary: ['e bikes brisbane', 'electric motorbike brisbane', 'e bike brisbane', 'used electric bikes brisbane'],
  },
  '/electric-bike-batteries/': {
    title: 'Electric Bike Batteries Australia | 60V-84V Lithium Packs',
    description: 'Electric bike batteries in Australia: 60V to 84V lithium packs and chargers for e bikes and dirt bikes. Free freight over $1,500.',
    ogTitle: 'Electric Bike Batteries Australia | 60V-84V Lithium Packs',
    ogDescription: 'Electric bike batteries in Australia: 60V to 84V lithium packs and chargers for e bikes and dirt bikes. Free freight over $1,500.',
    h1: 'Electric Bike Batteries Australia: Lithium Packs & Chargers',
    keywords: 'electric bike batteries australia, ebike batteries australia, e bike battery, e bike batteries, battery electric bicycle, batteries for electric bicycles, e cycle battery',
    main: 'electric bike batteries australia',
    primary: ['ebike batteries australia', 'e bike battery', 'e bike batteries', 'battery electric bicycle', 'batteries for electric bicycles', 'e cycle battery'],
  },
  '/accessories/': {
    title: 'E Bike Parts Australia | Chargers, 72V Batteries & More',
    description: 'E bike parts in Australia: chargers, 72V batteries, controllers and accessories for electric dirt bikes. Free freight over $1,500.',
    ogTitle: 'E Bike Parts Australia | Chargers, 72V Batteries & More',
    ogDescription: 'E bike parts in Australia: chargers, 72V batteries, controllers and accessories for electric dirt bikes. Free freight over $1,500.',
    h1: 'E Bike Parts Australia: Chargers, 72V Batteries & Accessories',
    keywords: 'e bike parts australia, electric bike parts australia, charger for e bike, e bike chargers, charger for ebike',
    main: 'e bike parts australia',
    primary: ['electric bike parts australia', 'charger for e bike', 'e bike chargers', 'charger for ebike'],
  },
  '/electric-fat-tyre-bikes/': {
    title: 'Electric Fat Bikes for Sale Australia | Fat Tyre E-Bikes',
    description: 'Electric fat bikes for sale in Australia: fat tyre e-bikes and beach cruisers with free freight over $1,500 and 12-month warranty.',
    ogTitle: 'Electric Fat Bikes for Sale Australia | Fat Tyre E-Bikes',
    ogDescription: 'Electric fat bikes for sale in Australia: fat tyre e-bikes and beach cruisers with free freight over $1,500 and 12-month warranty.',
    h1: 'Electric Fat Bikes & Beach Cruisers for Sale in Australia',
    keywords: 'beach cruiser for sale, fat tyre electric bike, electric fat bike, e bike cruiser, best fat tyre electric bike australia, fat bike australia, cruiser electric bike australia',
    main: 'beach cruiser for sale',
    primary: ['fat tyre electric bike', 'electric fat bike', 'e bike cruiser', 'best fat tyre electric bike australia', 'fat bike australia', 'cruiser electric bike australia'],
  },
  '/electric-mini-bikes/': {
    title: 'Mini Electric Bikes for Sale Australia | Mini E-Bikes',
    description: 'Mini electric bikes for sale in Australia: mini e-bikes and fat-tyre minis for kids and teens. Free freight over $1,500.',
    ogTitle: 'Mini Electric Bikes for Sale Australia | Mini E-Bikes',
    ogDescription: 'Mini electric bikes for sale in Australia: mini e-bikes and fat-tyre minis for kids and teens. Free freight over $1,500.',
    h1: 'Mini Electric Bikes for Sale in Australia',
    keywords: 'electric mini bikes for sale, mini e bike, electric mini bike, mini electric bike, mini ebike, electric mini bike motorcycle',
    main: 'electric mini bikes for sale',
    primary: ['mini e bike', 'electric mini bike', 'mini electric bike', 'mini ebike', 'electric mini bike motorcycle'],
  },
  '/electric-motocross-bikes/': {
    title: 'Electric Motocross Bikes for Sale Australia | MX & Enduro',
    description: 'Electric motocross bikes for sale in Australia: Stark Varg, Sur-Ron and KTM SX-E. Free freight over $1,500, 12-month warranty.',
    ogTitle: 'Electric Motocross Bikes for Sale Australia | MX & Enduro',
    ogDescription: 'Electric motocross bikes for sale in Australia: Stark Varg, Sur-Ron and KTM SX-E. Free freight over $1,500, 12-month warranty.',
    h1: 'Electric Motocross Bikes for Sale in Australia',
    keywords: 'electric motocross bike for sale, electric motocross motorcycle, electric motocross bike, e motocross bike, electric mx bike',
    main: 'electric motocross bike for sale',
    primary: ['electric motocross motorcycle', 'electric motocross bike', 'e motocross bike', 'electric mx bike'],
  },
  '/electric-pit-bikes/': {
    title: 'Electric Pit Bike for Sale Australia | Pit Bikes AU',
    description: 'Electric pit bike for sale in Australia: fast electric pit bikes and e pit bikes with free freight over $1,500 and warranty.',
    ogTitle: 'Electric Pit Bike for Sale Australia | Pit Bikes AU',
    ogDescription: 'Electric pit bike for sale in Australia: fast electric pit bikes and e pit bikes with free freight over $1,500 and warranty.',
    h1: 'Electric Pit Bikes for Sale in Australia',
    keywords: 'electric pit bike for sale, electric pit bike, electric pit bikes, e pit bike, fast electric pit bike, pit bikes australia',
    main: 'electric pit bike for sale',
    primary: ['electric pit bike', 'electric pit bikes', 'e pit bike', 'fast electric pit bike', 'pit bikes australia'],
  },
  '/electric-balance-bikes/': {
    title: 'Electric Balance Bike for Sale Australia | Kids From $699',
    description: 'Electric balance bike for sale in Australia: kids e-balance bikes from $699 with free freight over $1,500 and warranty.',
    ogTitle: 'Electric Balance Bike for Sale Australia | Kids From $699',
    ogDescription: 'Electric balance bike for sale in Australia: kids e-balance bikes from $699 with free freight over $1,500 and warranty.',
    h1: 'Electric Balance Bikes for Kids: For Sale in Australia',
    keywords: 'electric balance bike for sale, electric balance bike australia',
    main: 'electric balance bike for sale',
    primary: ['electric balance bike australia'],
  },
  '/brands/': {
    title: 'Electric Bike Brands Australia | Sur-Ron, Talaria & More',
    description: 'Electric bike brands in Australia: Sur-Ron, Talaria, Stark Varg and E-Ride Pro compared with models and prices.',
    ogTitle: 'Electric Bike Brands Australia | Sur-Ron, Talaria & More',
    ogDescription: 'Electric bike brands in Australia: Sur-Ron, Talaria, Stark Varg and E-Ride Pro compared with models and prices.',
    h1: 'Electric Bike Brands in Australia: Sur-Ron, Talaria, Stark Varg & More',
    keywords: 'electric bike brands australia, electric bike brands, electric dirt bike brands, dirt bike brand',
    main: 'electric bike brands australia',
    primary: ['electric bike brands', 'electric dirt bike brands', 'dirt bike brand'],
  },
  '/faq/': {
    title: 'Electric Dirt Bike FAQ Australia | Price, Delivery & Laws',
    description: 'Electric dirt bike FAQ for Australia: price, delivery to every state, warranty, laws and how to pay with crypto or PayID.',
    ogTitle: 'Electric Dirt Bike FAQ Australia | Price, Delivery & Laws',
    ogDescription: 'Electric dirt bike FAQ for Australia: price, delivery to every state, warranty, laws and how to pay with crypto or PayID.',
    h1: 'Electric Dirt Bike FAQ Australia: Frequently Asked Questions',
    keywords: 'electric dirt bike faq',
    main: 'electric dirt bike faq',
    primary: [],
  },
  '/blog/': {
    title: 'Electric Dirt Bike Blog Australia | Guides & Reviews',
    description: 'Electric dirt bike blog for Australia: buying guides, reviews, laws, battery tips and riding advice from our NSW workshop.',
    ogTitle: 'Electric Dirt Bike Blog Australia | Guides & Reviews',
    ogDescription: 'Electric dirt bike blog for Australia: buying guides, reviews, laws, battery tips and riding advice from our NSW workshop.',
    h1: 'Electric Dirt Bike Blog: Guides, Reviews & Riding Tips Australia',
    keywords: 'electric dirt bike blog australia',
    main: 'electric dirt bike blog australia',
    primary: [],
  },
  '/electric-motor-bikes/gold-coast/': {
    title: 'Electric Bicycle Gold Coast | E Bikes for Sale QLD Delivery',
    description: 'Electric bicycle Gold Coast: e bikes, mopeds and e-motos delivered to QLD. Free freight over $1,500 and a 12-month warranty.',
    ogTitle: 'Electric Bicycle Gold Coast | E Bikes for Sale QLD Delivery',
    ogDescription: 'Electric bicycle Gold Coast: e bikes, mopeds and e-motos delivered to QLD. Free freight over $1,500 and a 12-month warranty.',
    h1: 'Electric Bicycle Gold Coast: E Bikes for Sale with QLD Delivery',
    keywords: 'electric bicycle gold coast, electric bike gold coast',
    main: 'electric bicycle gold coast',
    primary: ['electric bike gold coast'],
  },
  '/electric-motor-bikes/townsville/': {
    title: 'Electric Bikes Townsville | E Bikes for Sale QLD Delivery',
    description: 'Electric bikes Townsville: e bikes, mopeds and e-motos delivered to North QLD. Free freight over $1,500, 12-month warranty.',
    ogTitle: 'Electric Bikes Townsville | E Bikes for Sale QLD Delivery',
    ogDescription: 'Electric bikes Townsville: e bikes, mopeds and e-motos delivered to North QLD. Free freight over $1,500, 12-month warranty.',
    h1: 'Electric Bikes Townsville: E Bikes for Sale with QLD Delivery',
    keywords: 'electric bikes townsville, e bikes townsville, electric bike townsville',
    main: 'electric bikes townsville',
    primary: ['e bikes townsville', 'electric bike townsville'],
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
