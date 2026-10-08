// src/config/category-secondary.ts
// One "buying guide" block per category / sub-category / city page: an H2 and two short paragraphs that carry the page's secondary keywords
// (the Semrush AU primaries assigned in seo.ts that were missing from the page body, plus buyer-intent variants). Rendered by components/KeywordGuide.tsx.
// Facts are limited to site policy (free freight over $1,500, 10% crypto/PayID discount, dispatch from Mittagong NSW) and links to other pages.
// Volumes (AU/month, Semrush export): see seo.ts and "new keywords e bikes/audit-cat.cjs", which re-checks that every keyword is on the page.

export interface KeywordGuideBlock {
  heading: string;
  paragraphs: string[];
  links?: { href: string; label: string }[];
}

export const KEYWORD_GUIDES: Record<string, KeywordGuideBlock> = {
  '/shop/': {
    heading: 'Buy Electric Dirt Bikes in Australia',
    paragraphs: [
      'Use this page to buy electric dirt bike models from Sur-Ron, Talaria, Stark Varg, E-Ride Pro and more, plus kids bikes, pit bikes, batteries and parts. Our electric dirt bikes Australia range ships from Mittagong NSW to every state, with free freight over $1,500 and 10% off when you pay by crypto or PayID.',
      'Filter by brand or category above, or go straight to a focused page: electric dirt bikes for sale, electric motorbikes, kids electric bikes or e bike parts.',
    ],
    links: [
      { href: '/electric-dirt-bikes/', label: 'Electric dirt bikes for sale' },
      { href: '/electric-motor-bikes/', label: 'Electric motorbikes' },
      { href: '/electric-dirt-bikes/kids/', label: 'Kids electric dirt bikes' },
      { href: '/accessories/', label: 'E bike parts' },
    ],
  },
  '/electric-dirt-bikes/': {
    heading: 'Electric Dirt Bike for Adults, Trail and Off Road Riding',
    paragraphs: [
      'This range covers every kind of rider. Pick an electric dirt bike for adults if you want a full-size frame and a bigger battery, a lighter e dirt bike for tight trails, or an electric off road bike with long-travel suspension for rougher ground. Searching for an electric dirtbike, an electric trail bike or an electric enduro bike? They are all here, with prices and specifications on every listing.',
      'Every bike is sold as an off-road recreational vehicle for private property and designated tracks. Compare power, battery size and weight on the product pages, then buy online with free freight over $1,500.',
    ],
    links: [
      { href: '/electric-dirt-bikes/sur-ron/', label: 'Sur-Ron for sale' },
      { href: '/electric-dirt-bikes/cheap/', label: 'Cheap electric dirt bikes' },
      { href: '/electric-motocross-bikes/', label: 'Electric motocross bikes' },
      { href: '/brands/e-ride-pro/', label: 'E-Ride Pro Australia' },
    ],
  },
  '/electric-motor-bikes/': {
    heading: 'Electric Motorbikes for Sale in Australia',
    paragraphs: [
      'Browse electric motorbikes for sale across three groups: off-road electric motorbike models, road-focused electric motorcycle and moped options, and kids bikes. Each electric motorbike Australia buyers can order here lists its price, motor, battery and legal use, and ships Australia-wide from Mittagong NSW.',
      'Looking for an electric motorcycle Australia riders can register, or a fun electric motorbike for private land? Start with the group that matches how and where you will ride, then check your state rules before you head out.',
    ],
    links: [
      { href: '/electric-motorcycles/', label: 'Electric motorcycles' },
      { href: '/electric-motor-bikes/commuter-mopeds/', label: 'Electric mopeds' },
      { href: '/electric-motor-bikes/kids/', label: 'Kids electric motorbikes' },
    ],
  },
  '/electric-motor-bikes/kids/': {
    heading: 'Kids Electric Dirt Bike and Childs Electric Motorcycle Guide',
    paragraphs: [
      'Shopping for a childs electric motorcycle? Match the bike to your child\'s age, height and experience first. This page lists a kids electric dirt bike for first-time riders, childrens electric dirt bike models with adjustable power, and a childrens electric motorbike that grows with them. Many children electric bike models have speed limiters so you can raise the pace as skills improve.',
      'Always supervise young riders and use a helmet and protective gear. Compare the age range, top speed and battery on each listing, and check the kids dirt bike for sale options on our dedicated kids page.',
    ],
    links: [
      { href: '/electric-dirt-bikes/kids/', label: 'Electric dirt bikes for kids' },
      { href: '/electric-balance-bikes/', label: 'Electric balance bikes' },
      { href: '/electric-pit-bikes/', label: 'Electric pit bikes' },
    ],
  },
  '/electric-motor-bikes/rtr-ebike/': {
    heading: 'RTR E Bike for Sale: RTR Electric Bike Range',
    paragraphs: [
      'The RTR e bike is a road-friendly commuter that is popular with riders who want an easy daily bike. Browse the RTR ebike range here, compare each RTR electric bike on price, motor and battery, and see why the RTR bike keeps showing up in searches. RTR ebike for sale listings include the Pro and S Classic.',
      'Check your state rules for registration and licence requirements, then add the RTR ebike you like to your cart. Delivery is Australia-wide, and orders over $1,500 ship free.',
    ],
    links: [
      { href: '/electric-bikes/', label: 'Electric bikes for sale' },
      { href: '/electric-bikes/cheap/', label: 'Cheap electric bikes' },
    ],
  },
  '/electric-motor-bikes/commuter-mopeds/': {
    heading: 'Electric Moped Australia: Prices and Models',
    paragraphs: [
      'An electric moped Australia riders can use for the daily commute is quiet, cheap to run and easy to park. This page lists each electric moped bike with its price, range and licence notes, so you can compare moped prices at a glance. Our electric motorcycle moped options include LAMS-approved models.',
      'Choose by range and top speed, check the licence and registration rules in your state, and order online. Free freight applies to orders over $1,500.',
    ],
    links: [
      { href: '/electric-motorcycles/', label: 'Electric motorcycles' },
      { href: '/electric-bikes/', label: 'Electric bikes' },
    ],
  },
  '/electric-motor-bikes/best-electric-bikes-australia/': {
    heading: 'Best Electric Bike Australia Buyers Choose',
    paragraphs: [
      'Wondering which is the best electric bike Australia has to offer? It depends on where you ride: a commuter e bike, a fat tyre cruiser, a moto-style bike or a full off-road electric dirt bike. Use the picks above as a shortlist, then compare price, range and legal use.',
      'Ready to buy electric bike Australia-wide from a local dealer? Add your pick to the cart and pay by card, crypto or PayID. Orders over $1,500 ship free.',
    ],
    links: [
      { href: '/electric-bikes/', label: 'Electric bikes for sale' },
      { href: '/electric-bikes/cheap/', label: 'Cheap electric bikes' },
      { href: '/electric-fat-tyre-bikes/', label: 'Fat tyre electric bikes' },
    ],
  },
  '/electric-motor-bikes/e-bike-laws-australia/': {
    heading: 'Electric Bike Laws Australia: What to Check Before You Ride',
    paragraphs: [
      'Electric bike laws Australia riders must follow differ by state and by the type of bike. A pedal-assist e-bike is treated differently from a moto-style electric motorbike, and an off-road electric dirt bike is for private property and designated tracks only. Use this page as a starting point and confirm the current rules with your state transport authority.',
      'Once you know the rules, compare road-legal e bikes on our electric bikes page or browse off-road models if you ride on private land.',
    ],
    links: [
      { href: '/electric-bikes/', label: 'Electric bikes for sale' },
      { href: '/electric-dirt-bikes/', label: 'Off-road electric dirt bikes' },
    ],
  },
  '/electric-motor-bikes/melbourne/': {
    heading: 'Electric Bikes for Sale Melbourne: Delivery to Victoria',
    paragraphs: [
      'Looking for electric bikes for sale Melbourne riders can order online? We ship across Victoria from Mittagong NSW, with free freight over $1,500. Choose an electric moped Melbourne commuters like, an electric motorbike Melbourne trail riders can take to private land, or a commuter e bike.',
      'Compare prices and specs on each product page and check Victorian rules for licence and registration before you ride.',
    ],
    links: [
      { href: '/electric-bikes/', label: 'Electric bikes for sale' },
      { href: '/electric-motor-bikes/commuter-mopeds/', label: 'Electric mopeds' },
    ],
  },
  '/electric-motor-bikes/perth/': {
    heading: 'Electric Bikes for Sale Perth: Delivery to Western Australia',
    paragraphs: [
      'Searching for electric bikes for sale Perth wide? We deliver to Western Australia from Mittagong NSW, with free freight over $1,500. Browse an electric moped Perth commuters can use daily, an electric motorbike Perth riders can take off-road, or a commuter e bike.',
      'Check the specs and price on each product page and confirm Western Australian rules for licence and registration before you ride.',
    ],
    links: [
      { href: '/electric-bikes/', label: 'Electric bikes for sale' },
      { href: '/electric-motor-bikes/commuter-mopeds/', label: 'Electric mopeds' },
    ],
  },
  '/electric-motor-bikes/sydney/': {
    heading: 'E Bikes for Sale Sydney: Ebike Sydney Delivery',
    paragraphs: [
      'Searching for e bikes for sale Sydney wide? We ship from Mittagong NSW, so an ebike Sydney buyer can have their order delivered across greater Sydney. Browse e bikes Sydney riders like for commuting, ebikes Sydney trail riders can use on private land, and electric motorbikes and mopeds.',
      'Orders over $1,500 ship free, and you save 10% when you pay by crypto or PayID. Check NSW rules for licence and registration before you ride.',
    ],
    links: [
      { href: '/electric-bikes/', label: 'Electric bikes for sale' },
      { href: '/electric-motor-bikes/commuter-mopeds/', label: 'Electric mopeds' },
    ],
  },
  '/electric-motor-bikes/brisbane/': {
    heading: 'Electric Bikes for Sale Brisbane: E Bikes Brisbane Delivery',
    paragraphs: [
      'Looking for electric bikes for sale Brisbane wide? We deliver to Queensland from Mittagong NSW. Browse e bikes Brisbane commuters choose, an electric motorbike Brisbane riders can take to private land, and electric mopeds for the daily trip.',
      'Free freight applies to orders over $1,500. Check Queensland rules for licence and registration before you ride.',
    ],
    links: [
      { href: '/electric-bikes/', label: 'Electric bikes for sale' },
      { href: '/electric-motor-bikes/commuter-mopeds/', label: 'Electric mopeds' },
    ],
  },
  '/accessories/': {
    heading: 'E Bike Parts Australia: Batteries, Chargers and Upgrades',
    paragraphs: [
      'Buy e bike parts Australia riders trust: batteries, chargers, controllers, brakes, suspension and protection. Our electric bike parts Australia range lists fitment and specs on every product, so you can pick the right upgrade for your bike. Looking for an ebike battery Australia wide? Start with the battery section.',
      'Browse electric dirt bike parts by type, check compatibility with your model, and message us on WhatsApp if you want fitment confirmed before you buy.',
    ],
    links: [
      { href: '/electric-bike-batteries/', label: 'Electric bike batteries' },
      { href: '/electric-dirt-bikes/', label: 'Electric dirt bikes' },
    ],
  },
  '/electric-bikes/': {
    heading: 'Electric Bike Australia and E Bike Australia: How to Choose',
    paragraphs: [
      'Whether you want an electric bike Australia commuters can ride daily or an e bike Australia trail riders can take further, start with what you will use it for. Commuter e bikes suit streets and bike paths, fat tyre e bikes handle sand and gravel, and moto-style e bikes bring more power for private land.',
      'Compare price, range and motor power on each listing, then buy with free freight over $1,500.',
    ],
    links: [
      { href: '/electric-bikes/cheap/', label: 'Cheap electric bikes' },
      { href: '/electric-fat-tyre-bikes/', label: 'Fat tyre electric bikes' },
      { href: '/electric-motor-bikes/rtr-ebike/', label: 'RTR e bike' },
    ],
  },
  '/electric-motocross-bikes/': {
    heading: 'Electric Motocross Bike for Sale: E Motocross Bike and Electric MX Bike',
    paragraphs: [
      'Shop an electric motocross bike for sale in Australia, from lightweight e motocross bike models to full-power competition machines. Each electric mx bike here lists its motor, battery, weight and suspension so you can compare track performance. Electric motocross motorcycle models deliver instant torque with no gears to shift.',
      'These bikes are sold for private property and designated tracks. Order online with free freight over $1,500.',
    ],
    links: [
      { href: '/electric-dirt-bikes/', label: 'Electric dirt bikes' },
      { href: '/electric-dirt-bikes/kids/', label: 'Kids electric dirt bikes' },
    ],
  },
  '/electric-motorcycles/': {
    heading: 'Electric Motorcycle for Sale in Australia',
    paragraphs: [
      'Browse an electric motorcycle for sale, from road-focused models to off-road bikes. Every electric motorcycle Australia buyers can order here lists price, power and legal notes, and the e motorcycle options include mopeds and moto-style bikes.',
      'Registration and licence rules vary by state, so check with your transport authority before you buy. Free freight applies to orders over $1,500.',
    ],
    links: [
      { href: '/electric-motor-bikes/', label: 'Electric motorbikes' },
      { href: '/electric-motor-bikes/commuter-mopeds/', label: 'Electric mopeds' },
    ],
  },
  '/electric-fat-tyre-bikes/': {
    heading: 'Fat Tyre Electric Bike Australia: Beach Cruiser for Sale and Fat Bike Guide',
    paragraphs: [
      'Looking for the best fat tyre electric bike Australia has? Compare an electric fat bike with a beach cruiser for sale, from relaxed e bike cruiser styles to dual-suspension fat bikes. A fat tyre electric bike Australia riders pick for sand, gravel and trails has wide tyres for grip and comfort.',
      'Browse fat bike Australia models by motor power, battery size and range, then order online. Free freight over $1,500 applies, and you can buy any electric fat tyre bike on this page by card, crypto or PayID.',
    ],
    links: [
      { href: '/electric-bikes/', label: 'Electric bikes for sale' },
      { href: '/electric-mini-bikes/', label: 'Mini electric bikes' },
    ],
  },
  '/electric-mini-bikes/': {
    heading: 'Mini E Bike and Electric Mini Bikes for Sale',
    paragraphs: [
      'Shop electric mini bikes for sale: a compact mini e bike with 16-inch wheels is easy to store and fun to ride. Each electric mini bike here lists its motor, battery and range, so you can choose the right size.',
      'Compare models, add one to your cart and pay by card, crypto or PayID. Free freight applies to orders over $1,500.',
    ],
    links: [
      { href: '/electric-fat-tyre-bikes/', label: 'Fat tyre electric bikes' },
      { href: '/electric-bikes/cheap/', label: 'Cheap electric bikes' },
    ],
  },
  '/electric-bikes/cheap/': {
    heading: 'Cheapest Electric Bike Australia: Cheap E Bikes Compared',
    paragraphs: [
      'Searching for an electric bike cheap enough for your budget? We list the cheapest electric bike Australia buyers can order with prices shown up front. Compare cheap e bikes Australia riders choose by range, motor power and warranty, rather than price alone. If you are after electric cheap bikes that still hold up, check the battery and warranty terms.',
      'Pay by crypto or PayID for 10% off, and enjoy free freight on orders over $1,500.',
    ],
    links: [
      { href: '/electric-bikes/', label: 'Electric bikes for sale' },
      { href: '/electric-dirt-bikes/cheap/', label: 'Cheap electric dirt bikes' },
    ],
  },
  '/brands/': {
    heading: 'Electric Bike Brands Australia: How to Choose',
    paragraphs: [
      'Comparing electric bike brands Australia riders trust? Start with how you will ride. Sur-Ron and Talaria suit trail riding, Stark Varg targets competition motocross, and E-Ride Pro offers factory 72V power. Browse a Sur Ron ebike for sale on our Sur-Ron page, or see E Ride Pro Australia models on the E-Ride Pro page.',
      'Every brand here lists price, motor, battery and warranty on the product page, ships Australia-wide, and qualifies for free freight over $1,500. Compare electric dirt bike brands by the specs that matter to you, not just the badge.',
    ],
    links: [
      { href: '/electric-dirt-bikes/sur-ron/', label: 'Sur-Ron for sale' },
      { href: '/brands/e-ride-pro/', label: 'E-Ride Pro Australia' },
      { href: '/electric-dirt-bikes/', label: 'All electric dirt bikes' },
    ],
  },
  '/brands/e-ride-pro/': {
    heading: 'E-Ride Pro SS and E Ride Bike Buying Guide',
    paragraphs: [
      'The E-Ride Pro SS range is the focus of E Ride Pro Australia searches, and the SS 2.0 is the model most riders compare first. If you are comparing an E Ride bike against other electric dirt bikes, look at peak power, battery size and weight, all listed on each product page. Search for E Ride Pro SS Australia and you will find the SS 2.0 and SR here.',
      'Orders over $1,500 ship free, and you save 10% with crypto or PayID.',
    ],
    links: [
      { href: '/electric-dirt-bikes/', label: 'Electric dirt bikes' },
      { href: '/brands/', label: 'All brands' },
    ],
  },
  '/electric-dirt-bikes/sur-ron/': {
    heading: 'Sur Ron Ebike for Sale: Surrons and Surron Electric Bike Range',
    paragraphs: [
      'Buy a Sur Ron ebike for sale from an Australian dealer. This page lists Surrons for sale with prices shown, and each surron electric bike for sale includes specs, battery size and warranty. Compare models, then see our Sur Ron electric bike price on each product page.',
      'Free freight applies to orders over $1,500, and crypto or PayID payments save 10%.',
    ],
    links: [
      { href: '/electric-dirt-bikes/', label: 'All electric dirt bikes' },
      { href: '/electric-dirt-bikes/cheap/', label: 'Cheap electric dirt bikes' },
    ],
  },
  '/electric-dirt-bikes/cheap/': {
    heading: 'Cheap Electric Dirt Bike and Affordable Electric Dirt Bike Options',
    paragraphs: [
      'Want a cheap electric dirt bike that still delivers? Compare each affordable electric dirt bike by motor, battery and warranty, not just price. An electric dirt bike cheap on price but short on range may cost more over time, so look at the full specs.',
      'Browse by price band, add the bike you like to your cart and save 10% with crypto or PayID. Free freight applies to orders over $1,500.',
    ],
    links: [
      { href: '/electric-dirt-bikes/', label: 'All electric dirt bikes' },
      { href: '/electric-dirt-bikes/kids/', label: 'Kids electric dirt bikes' },
      { href: '/electric-bikes/cheap/', label: 'Cheap electric bikes' },
    ],
  },
  '/electric-dirt-bikes/kids/': {
    heading: 'Electric Kids Dirt Bike and Kids Electric Dirtbike Buying Guide',
    paragraphs: [
      'Choose an electric kids dirt bike by age, height and riding experience. Our kids electric dirtbike range includes first bikes for young riders and bigger bikes for teens, with speed limits and power modes on selected models.',
      'Looking for a KTM electric dirt bike for a young rider? The KTM SX-E 5 youth electric motocross bike is listed here with its price and specifications. Always supervise children and use proper protective gear. Compare each listing, then buy online with free freight on orders over $1,500.',
    ],
    links: [
      { href: '/electric-balance-bikes/', label: 'Electric balance bikes' },
      { href: '/electric-pit-bikes/', label: 'Electric pit bikes' },
      { href: '/electric-motor-bikes/kids/', label: 'Kids electric motorbikes' },
    ],
  },
  '/electric-bike-batteries/': {
    heading: 'Ebike Batteries Australia: Replacement and Upgrade Packs',
    paragraphs: [
      'Browse ebike batteries Australia riders can order online, from replacement packs to high-capacity upgrades. Each listing shows voltage, capacity and compatibility, so you can match the pack to your bike.',
      'Not sure which battery fits? Message us on WhatsApp with your bike and we will confirm fitment before you buy. Free freight applies to orders over $1,500.',
    ],
    links: [
      { href: '/accessories/', label: 'E bike parts' },
      { href: '/electric-dirt-bikes/', label: 'Electric dirt bikes' },
    ],
  },
  '/electric-pit-bikes/': {
    heading: 'E Pit Bike and Fast Electric Pit Bike Options',
    paragraphs: [
      'An e pit bike is quiet, needs little maintenance and suits kids, teens and adults. If you want a fast electric pit bike, compare the 72V models on this page by motor power, battery and top speed.',
      'Each listing shows its price and specs, ships Australia-wide, and qualifies for free freight over $1,500.',
    ],
    links: [
      { href: '/electric-dirt-bikes/kids/', label: 'Electric dirt bikes for kids' },
      { href: '/electric-dirt-bikes/', label: 'Electric dirt bikes' },
    ],
  },
  '/electric-balance-bikes/': {
    heading: 'Electric Balance Bike for Sale: Electric Balance Bike Australia Guide',
    paragraphs: [
      'Shop an electric balance bike for sale, from 12 to 24 inch models for young riders. Every electric balance bike Australia parents can order here lists the age range, top speed and battery, so you can match the bike to your child.',
      'Always supervise children and use a helmet and protective gear. Free freight applies to orders over $1,500.',
    ],
    links: [
      { href: '/electric-dirt-bikes/kids/', label: 'Electric dirt bikes for kids' },
      { href: '/electric-pit-bikes/', label: 'Electric pit bikes' },
    ],
  },
};
