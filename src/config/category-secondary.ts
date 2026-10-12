// src/config/category-secondary.ts
// One short buying guide per category / sub-category / city page. Natural prose, at most two keyword phrases per paragraph (rewritten 2026-10-12; the keyword-led H2 sections live in category-sections.ts).

export interface KeywordGuideBlock {
  heading: string;
  paragraphs: string[];
  links?: { href: string; label: string }[];
}

export const KEYWORD_GUIDES: Record<string, KeywordGuideBlock> = {
  '/shop/': {
    heading: `Buy Electric Dirt Bikes in Australia`,
    paragraphs: [
      `Use this page to buy an electric dirt bike from Sur-Ron, Talaria, Stark Varg or E-Ride Pro, plus kids bikes, pit bikes, batteries and parts. Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty. You also save 10% when you pay with crypto or PayID.`,
      `Filter by brand or category above, or go straight to a focused page: electric dirt bikes for sale, electric motorbikes, kids electric bikes or e bike parts.`,
    ],
    links: [
      { href: '/electric-dirt-bikes/', label: 'Electric dirt bikes for sale' },
      { href: '/electric-motor-bikes/', label: 'Electric motorbikes' },
      { href: '/electric-dirt-bikes/kids/', label: 'Kids electric dirt bikes' },
      { href: '/accessories/', label: 'E bike parts' },
    ],
  },
  '/electric-dirt-bikes/': {
    heading: `How to Choose an Electric Dirt Bike`,
    paragraphs: [
      `Start with where you will ride and who is riding. A lighter bike suits tight trails and smaller riders, a full-size bike gives adults more range and power, and a youth bike is the right first step for kids.`,
      `Then compare battery voltage and capacity, motor power and suspension travel on each product card. If you are weighing cost, our cheap electric dirt bikes page lists entry models first.`,
    ],
    links: [
      { href: '/electric-dirt-bikes/sur-ron/', label: 'Sur-Ron for sale' },
      { href: '/electric-dirt-bikes/cheap/', label: 'Cheap electric dirt bikes' },
      { href: '/electric-motocross-bikes/', label: 'Electric motocross bikes' },
      { href: '/brands/e-ride-pro/', label: 'E-Ride Pro Australia' },
    ],
  },
  '/electric-motor-bikes/': {
    heading: `How to Choose an Electric Motorbike`,
    paragraphs: [
      `The first question is where you will ride: on the road, which needs registration and a licence, or on private land and trails, which does not. Our range is grouped to match.`,
      `Compare power, range and charging time on each product page. Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,
    ],
    links: [
      { href: '/electric-motorcycles/', label: 'Electric motorcycles' },
      { href: '/electric-motor-bikes/commuter-mopeds/', label: 'Electric mopeds' },
      { href: '/electric-motor-bikes/kids/', label: 'Kids electric motorbikes' },
    ],
  },
  '/electric-motor-bikes/kids/': {
    heading: `Kids Electric Bike Buying Guide`,
    paragraphs: [
      `Match the bike to your child's height, weight and experience before age. Look for a low seat, an adjustable power mode and a speed limiter so you can raise the pace as skills improve.`,
      `Always supervise young riders and use a helmet and protective gear. For dirt bike styles, see our kids electric dirt bike page.`,
    ],
    links: [
      { href: '/electric-dirt-bikes/kids/', label: 'Electric dirt bikes for kids' },
      { href: '/electric-balance-bikes/', label: 'Electric balance bikes' },
      { href: '/electric-pit-bikes/', label: 'Electric pit bikes' },
    ],
  },
  '/electric-motor-bikes/rtr-ebike/': {
    heading: `RTR Electric Bike Range`,
    paragraphs: [
      `The RTR eBike range is built for everyday commuting: pedal assist, a 250W motor and a quiet ride that needs no licence or registration. Compare the S Classic and the Pro by battery, range and price.`,
      `Both include a 12-month Australian warranty with local servicing. Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,
    ],
    links: [
      { href: '/electric-bikes/', label: 'Electric bikes for sale' },
      { href: '/electric-bikes/cheap/', label: 'Cheap electric bikes' },
    ],
  },
  '/electric-motor-bikes/commuter-mopeds/': {
    heading: `Electric Moped Australia: Prices and Models`,
    paragraphs: [
      `Road-registered electric mopeds suit riders who want more speed than a pedal-assist e-bike for city and suburban commuting. Many models are LAMS approved, so learner and restricted licence holders can ride them.`,
      `Compare range, charging time and licence class on each product page. Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,
    ],
    links: [
      { href: '/electric-motorcycles/', label: 'Electric motorcycles' },
      { href: '/electric-bikes/', label: 'Electric bikes' },
    ],
  },
  '/electric-motor-bikes/best-electric-bikes-australia/': {
    heading: `Best Electric Bike Australia Buyers Choose`,
    paragraphs: [
      `Our ranking weighs price, real-world range, motor power, warranty and spare-parts support, not just spec sheets. Each pick links to its product page with current price and delivery.`,
      `Use it as a shortlist, then compare two or three bikes against your commute or riding plans.`,
    ],
    links: [
      { href: '/electric-bikes/', label: 'Electric bikes for sale' },
      { href: '/electric-bikes/cheap/', label: 'Cheap electric bikes' },
      { href: '/electric-fat-tyre-bikes/', label: 'Fat tyre electric bikes' },
    ],
  },
  '/electric-motor-bikes/e-bike-laws-australia/': {
    heading: `Electric Bike Laws Australia: What to Check Before You Ride`,
    paragraphs: [
      `Pedal-assist e-bikes that meet the Australian standard (250W continuous power and a 25 km/h assist limit) are treated as bicycles. Anything more powerful is a motor vehicle on public roads and needs registration and a licence.`,
      `Rules differ by state, so use the sections below for your state and check the official source before you ride.`,
    ],
    links: [
      { href: '/electric-bikes/', label: 'Electric bikes for sale' },
      { href: '/electric-dirt-bikes/', label: 'Off-road electric dirt bikes' },
    ],
  },
  '/electric-motor-bikes/melbourne/': {
    heading: `Electric Moped Melbourne: Licence and Registration`,
    paragraphs: [
      `An electric moped in Melbourne is a registered road vehicle, so you need a licence and the bike must be registered in Victoria. LAMS-approved models are open to learner and restricted licence holders.`,
      `Pedal-assist e-bikes under the 250W standard need neither, which is why they are the popular choice for commuting.`,
    ],
    links: [
      { href: '/electric-bikes/', label: 'Electric bikes for sale' },
      { href: '/electric-motor-bikes/commuter-mopeds/', label: 'Electric mopeds' },
    ],
  },
  '/electric-motor-bikes/perth/': {
    heading: `Delivery to Perth and Western Australia`,
    paragraphs: [
      `We ship from Mittagong NSW to Perth and all of Western Australia by insured freight, with updates through to delivery. Message us on WhatsApp for an estimate to your suburb.`,
      `Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,
    ],
    links: [
      { href: '/electric-bikes/', label: 'Electric bikes for sale' },
      { href: '/electric-motor-bikes/commuter-mopeds/', label: 'Electric mopeds' },
    ],
  },
  '/electric-motor-bikes/sydney/': {
    heading: `Electric Bikes Sydney: Delivery and Pickup`,
    paragraphs: [
      `We are based in Mittagong in the NSW Southern Highlands, so Sydney orders ship fast. Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,
      `If you would like to see a bike before you buy, contact us to arrange a workshop consultation.`,
    ],
    links: [
      { href: '/electric-bikes/', label: 'Electric bikes for sale' },
      { href: '/electric-motor-bikes/commuter-mopeds/', label: 'Electric mopeds' },
    ],
  },
  '/electric-motor-bikes/brisbane/': {
    heading: `Electric Bikes Brisbane: Delivery to QLD`,
    paragraphs: [
      `We deliver to Brisbane and across Queensland from Mittagong NSW. Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,
      `Check Queensland rules for licence and registration before you ride a higher-powered bike on the road.`,
    ],
    links: [
      { href: '/electric-bikes/', label: 'Electric bikes for sale' },
      { href: '/electric-motor-bikes/commuter-mopeds/', label: 'Electric mopeds' },
    ],
  },
  '/accessories/': {
    heading: `E Bike Parts Australia: Batteries, Chargers and Upgrades`,
    paragraphs: [
      `Find lithium battery packs, chargers, controllers, brake parts and tyres for the bikes we sell. Part fit depends on voltage, connector and controller, so check the product page or message us with your bike model.`,
      `Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,
    ],
    links: [
      { href: '/electric-bike-batteries/', label: 'Electric bike batteries' },
      { href: '/electric-dirt-bikes/', label: 'Electric dirt bikes' },
    ],
  },
  '/electric-bikes/': {
    heading: `Electric Bike Australia: How to Choose`,
    paragraphs: [
      `Start with what you will use it for. Commuter e bikes suit streets and bike paths, fat tyre e bikes handle sand and gravel, and moto-style e bikes bring more power for private land.`,
      `Compare price, range and motor power on each listing. Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,
    ],
    links: [
      { href: '/electric-bikes/cheap/', label: 'Cheap electric bikes' },
      { href: '/electric-fat-tyre-bikes/', label: 'Fat tyre electric bikes' },
      { href: '/electric-motor-bikes/rtr-ebike/', label: 'RTR e bike' },
    ],
  },
  '/electric-motocross-bikes/': {
    heading: `Electric MX Bike: How to Choose`,
    paragraphs: [
      `Racers should compare power, weight and swap-battery options, while junior riders should look for adjustable power and a frame sized for their height.`,
      `Check each product page for specs and track suitability, and add a spare battery if you ride multiple motos a day.`,
    ],
    links: [
      { href: '/electric-dirt-bikes/', label: 'Electric dirt bikes' },
      { href: '/electric-dirt-bikes/kids/', label: 'Kids electric dirt bikes' },
    ],
  },
  '/electric-motorcycles/': {
    heading: `How to Choose an Electric Motorcycle`,
    paragraphs: [
      `The decision starts with the road: a registered electric motorcycle needs a licence and registration, while an off-road model is for private land and trails only. Pick the group that matches how you will ride.`,
      `Then compare range, charge time and warranty. Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,
    ],
    links: [
      { href: '/electric-motor-bikes/', label: 'Electric motorbikes' },
      { href: '/electric-motor-bikes/commuter-mopeds/', label: 'Electric mopeds' },
    ],
  },
  '/electric-fat-tyre-bikes/': {
    heading: `Beach Cruiser for Sale: Fat Bike Buying Guide`,
    paragraphs: [
      `Fat-tyre e-bikes and beach cruisers suit sand, gravel and relaxed city riding. Compare battery size, motor power and weight on each listing.`,
      `Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,
    ],
    links: [
      { href: '/electric-bikes/', label: 'Electric bikes for sale' },
      { href: '/electric-mini-bikes/', label: 'Mini electric bikes' },
    ],
  },
  '/electric-mini-bikes/': {
    heading: `Choosing an Electric Mini Bike`,
    paragraphs: [
      `Mini bikes suit teens and smaller adults on private land. Look at wheel size, top speed, weight limit and whether the power can be limited for younger riders.`,
      `Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,
    ],
    links: [
      { href: '/electric-fat-tyre-bikes/', label: 'Fat tyre electric bikes' },
      { href: '/electric-bikes/cheap/', label: 'Cheap electric bikes' },
    ],
  },
  '/electric-bikes/cheap/': {
    heading: `Cheap Electric Bikes: What to Check Before You Buy`,
    paragraphs: [
      `A low price is only a good deal if the bike has a branded battery, a proper warranty and spare parts. Compare motor power, battery capacity and warranty, not just the sticker price.`,
      `Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,
    ],
    links: [
      { href: '/electric-bikes/', label: 'Electric bikes for sale' },
      { href: '/electric-dirt-bikes/cheap/', label: 'Cheap electric dirt bikes' },
    ],
  },
  '/brands/': {
    heading: `Electric Bike Brands Australia: How to Choose`,
    paragraphs: [
      `Brands differ in power, battery size, warranty support and parts availability in Australia. Use the brand pages below to compare models and prices side by side.`,
      `Every brand on this page is backed by our 12-month Australian warranty and local workshop.`,
    ],
    links: [
      { href: '/electric-dirt-bikes/sur-ron/', label: 'Sur-Ron for sale' },
      { href: '/brands/e-ride-pro/', label: 'E-Ride Pro Australia' },
      { href: '/electric-dirt-bikes/', label: 'All electric dirt bikes' },
    ],
  },
  '/brands/e-ride-pro/': {
    heading: `E-Ride Pro SS and E Ride Bike Buying Guide`,
    paragraphs: [
      `The E-Ride Pro range covers full-power 72V bikes for experienced riders and smaller models for younger riders. Prices and specs are shown on every bike.`,
      `Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,
    ],
    links: [
      { href: '/electric-dirt-bikes/', label: 'Electric dirt bikes' },
      { href: '/brands/', label: 'All brands' },
    ],
  },
  '/electric-dirt-bikes/sur-ron/': {
    heading: `Sur Ron Ebike for Sale: Which Model?`,
    paragraphs: [
      `The Light Bee X is the lightweight all-rounder, while the Ultra Bee adds power and battery for faster trail and track riding. Compare both on this page with prices and specs.`,
      `Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,
    ],
    links: [
      { href: '/electric-dirt-bikes/', label: 'All electric dirt bikes' },
      { href: '/electric-dirt-bikes/cheap/', label: 'Cheap electric dirt bikes' },
    ],
  },
  '/electric-dirt-bikes/cheap/': {
    heading: `Cheap Electric Dirt Bike Buying Guide`,
    paragraphs: [
      `A cheap electric dirt bike should still come with a branded battery, a proper warranty and spare parts. The savings show up in running costs: no fuel, oil or carburettor work.`,
      `Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,
    ],
    links: [
      { href: '/electric-dirt-bikes/', label: 'All electric dirt bikes' },
      { href: '/electric-dirt-bikes/kids/', label: 'Kids electric dirt bikes' },
      { href: '/electric-bikes/cheap/', label: 'Cheap electric bikes' },
    ],
  },
  '/electric-dirt-bikes/kids/': {
    heading: `Electric Kids Dirt Bike Buying Guide`,
    paragraphs: [
      `Pick the bike by seat height and weight, then check the power modes so you can cap the speed for beginners. A youth bike with adjustable power grows with the rider.`,
      `Always supervise, and pair the bike with a helmet, gloves and boots.`,
    ],
    links: [
      { href: '/electric-balance-bikes/', label: 'Electric balance bikes' },
      { href: '/electric-pit-bikes/', label: 'Electric pit bikes' },
      { href: '/electric-motor-bikes/kids/', label: 'Kids electric motorbikes' },
    ],
  },
  '/electric-bike-batteries/': {
    heading: `Ebike Batteries Australia: Replacement and Upgrade Packs`,
    paragraphs: [
      `A replacement or upgrade battery must match your controller's voltage, the connector and the bike's mounting. Check these three before you order, or message us with your model.`,
      `Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,
    ],
    links: [
      { href: '/accessories/', label: 'E bike parts' },
      { href: '/electric-dirt-bikes/', label: 'Electric dirt bikes' },
    ],
  },
  '/electric-pit-bikes/': {
    heading: `Choosing an E Pit Bike`,
    paragraphs: [
      `An electric pit bike suits paddocks, tracks and tight trails, with instant torque and low running costs. Compare wheel size, battery and top speed on each listing.`,
      `Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,
    ],
    links: [
      { href: '/electric-dirt-bikes/kids/', label: 'Electric dirt bikes for kids' },
      { href: '/electric-dirt-bikes/', label: 'Electric dirt bikes' },
    ],
  },
  '/electric-balance-bikes/': {
    heading: `Electric Balance Bike for Sale: What to Look For`,
    paragraphs: [
      `A balance bike teaches young riders balance and steering before they move on. Look for a low seat, a speed limit and a battery that fits the rider's age.`,
      `Orders over $1,500 ship free from Mittagong NSW, with a 12-month Australian warranty.`,
    ],
    links: [
      { href: '/electric-dirt-bikes/kids/', label: 'Electric dirt bikes for kids' },
      { href: '/electric-pit-bikes/', label: 'Electric pit bikes' },
    ],
  },
};
