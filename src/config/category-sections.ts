// src/config/category-sections.ts
// Extra keyword-led H2 sections and FAQ answers per category / city page (the 2026-10-12 remap).
// Rule: one keyword per heading, each omitted buy-intent keyword used once, in a true statement. No keyword lists.
// Volumes are in docs/seo-remap-plan-preview-2026-10-12.html. Policy facts: free freight over $1,500, 10% off with crypto or PayID,
// dispatch from Mittagong NSW, 12-month Australian warranty. Prices are only quoted where already published on the site.

export interface ExtraSection { heading: string; paragraphs: string[]; links?: { href: string; label: string }[]; }
export interface ExtraFaq { q: string; a: string; }
export interface ExtraBlock { sections: ExtraSection[]; faqs: ExtraFaq[]; }

const SHIP = 'Orders over $1,500 ship free and insured from Mittagong NSW, every bike has a 12-month Australian warranty, and you save 10% when you pay with crypto or PayID.';

export const EXTRA_BLOCKS: Record<string, ExtraBlock> = {
  '/': {
    sections: [
      {
        heading: 'Electric Dirt Bike Australia: Why Riders Are Switching',
        paragraphs: [
          'An electric dirt bike gives you instant torque, no fuel, no carburettor tuning and far less servicing than a petrol bike. That is why trail riders, parents and motocross racers across Australia are moving to electric. Every electric dirtbike Australia customers order from us is checked in our NSW workshop before it ships.',
          'Not sure where to start? Pick the rider first: adults, kids, or a cheaper first bike, then compare the models on the matching page below.',
        ],
        links: [
          { href: '/electric-dirt-bikes/kids/', label: 'Kids electric dirt bikes' },
          { href: '/electric-dirt-bikes/cheap/', label: 'Cheap electric dirt bikes' },
          { href: '/electric-motocross-bikes/', label: 'Electric motocross bikes' },
        ],
      },
      {
        heading: 'Electric Dirt Bikes Australia: Shop by Rider and Budget',
        paragraphs: [
          `Our electric dirt bikes Australia range runs from small youth bikes through to full-size 12kW+ adult machines from Sur-Ron, Talaria, Stark Varg and E-Ride Pro. ${SHIP}`,
        ],
      },
    ],
    faqs: [],
  },
  '/shop/': {
    sections: [
      {
        heading: 'How to Choose the Right Model',
        paragraphs: [
          'Start with who is riding. Youth riders need a lower seat height and a limited-power mode, adults riding trails want a full-size frame and a bigger battery, and commuters should look at the road-legal e-bike and moped ranges.',
          'Then match the battery to your ride length, check the controller and motor power on the product page, and add a charger or spare battery if you ride long days. Every bike on this page includes specs, price and delivery details.',
        ],
      },
    ],
    faqs: [],
  },
  '/electric-dirt-bikes/': {
    sections: [
      {
        heading: 'Electric Dirt Bike for Adults: Full-Size Trail Bikes',
        paragraphs: [
          'Adult riders should look for a full-size frame, 40Ah or larger battery and long-travel suspension. The Sur-Ron Ultra Bee, Talaria Sting R MX4 and E-Ride Pro SS are full-size adult options for trail and track riding.',
        ],
      },
      {
        heading: 'Electric Off Road Bike Range',
        paragraphs: [
          'An electric off road bike suits rough fire trails, private property and designated off-road parks. Among off road electric bikes, 60V packs are light and nimble, while 72V and 74V packs add the power for climbs and sand. Look at ground clearance, wheel size and battery voltage.',
        ],
      },
      {
        heading: 'E Dirt Bike Options for Tight Trails',
        paragraphs: [
          'A lighter e dirt bike such as the Sur-Ron Light Bee X turns quickly through single track and is easy to load on a ute or car rack. Choose a full-size bike only if you need the extra range and top speed. Some riders search for an electric dirtbike or e dirt bikes; both mean the same electric off-road bikes listed on this page.',
        ],
      },
      {
        heading: 'Dirt Motorcycles for Sale: The Electric Alternative',
        paragraphs: [
          'Looking for dirt motorcycles for sale? Every dirt bike we stock is electric: no fuel, no oil changes and far less noise, so you can ride closer to home. Browse the range above, or message us on WhatsApp and we will point you to the right model for your weight, skill and budget.',
        ],
      },
    ],
    faqs: [
      { q: 'Is a dirt bicycle the same as an electric dirt bike?', a: `People often search for a dirt bicycle for sale when they mean a dirt bike. Our electric dirt bikes are motorised off-road bikes, not pedal bicycles. If you want a pedal-assist e-bike for the road, see our electric bikes range. ${SHIP}` },
      { q: 'Do you have a motorcycle dirt bike for sale?', a: 'Yes, all of our motorcycle-style dirt bikes are electric. Our motorcycle dirt bikes for sale include the Stark Varg and KTM SX-E in the electric motocross range, while the Sur-Ron and Talaria bikes cover trail riding. The KTM electric dirt bike Australia price is $7,990 for the SX-E 5.' },
      { q: 'Where can I find an electric dirt bike Australia for sale with delivery?', a: `Every electric dirt bike for sale on this page ships Australia-wide from Mittagong NSW. ${SHIP}` },
      { q: 'Do you run a dirtbike sale or other discounts?', a: 'There is no clearance dirtbike sale to wait for: a standing 10% discount when you pay with crypto or PayID, and free insured freight on orders over $1,500. These apply to every electric dirt bike on this page.' },
    ],
  },
  '/electric-dirt-bikes/cheap/': {
    sections: [
      {
        heading: 'Affordable Dirt Bikes for Sale: Budget Picks',
        paragraphs: [
          'The most affordable dirt bikes for sale here are the youth and mini models, which suit first-time riders and growing kids. They use smaller batteries and lower power, which is what keeps the price down while still giving a proper off-road ride.',
        ],
      },
      {
        heading: 'Low Cost Dirt Bike Options Under $1,000',
        paragraphs: [
          'If you want a low cost dirt bike, our entry youth models start from $899. For adults, the next step up is a mid-range 60V bike. Electric bikes save on fuel and servicing, so the running cost is lower than petrol.',
        ],
      },
    ],
    faqs: [
      { q: 'Are there dirt cheap dirt bikes for sale?', a: 'Our lowest-priced electric dirt bikes are youth models from $899. We do not sell very cheap unbranded bikes, because every bike here carries a 12-month Australian warranty and spare-parts support.' },
      { q: 'Where can I find low price dirt bikes in Australia?', a: `Compare the youth and mini bikes at the top of this page, then check the adult bikes by price. ${SHIP}` },
      { q: 'Do you sell cheap dirt motorbikes?', a: 'We sell entry-level electric dirt bikes rather than the cheapest petrol machines. The saving shows up in running costs: no fuel, oil or carburettor servicing.' },
    ],
  },
  '/electric-dirt-bikes/kids/': {
    sections: [
      {
        heading: 'Childrens Electric Dirt Bike: Sizes by Age',
        paragraphs: [
          'A childrens electric dirt bike should match seat height and weight, not just age. Younger riders do best on small-wheel bikes with a limited-power mode, then step up to a full 16-inch frame as they gain confidence.',
        ],
      },
      {
        heading: 'Childs Dirt Bike or Childrens Dirt Bike: Which Size?',
        paragraphs: [
          'Whether you call it a childs dirt bike or a childrens dirt bike, fit comes first: the rider should reach the ground with the balls of both feet. Check the seat height on each product page and choose the bike that fits now, not the one to grow into.',
        ],
      },
      {
        heading: 'Dirt Bike for Kids: Speed Limits and Safety',
        paragraphs: [
          'A good dirt bike for kids has adjustable power modes so a parent can cap the speed for beginners. Always pair it with a helmet, gloves, boots and supervision, and ride only on private land or approved off-road areas.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you sell kids dirt bikes that are electric?', a: 'Yes. Every kids dirt bike we sell is electric: quiet, no fuel and simple to maintain. Pick the bike by seat height and the rider\'s weight.' },
      { q: 'Which electric bikes for kids suit beginners?', a: 'Electric balance bikes suit the youngest riders, and youth dirt bikes with adjustable power suit older kids. See the kids range for each model\'s power modes.' },
      { q: 'What is the best childrens electric dirt bike in Australia?', a: 'It depends on age and size. Compare the youth models on this page by seat height, battery and top speed, and message us on WhatsApp if you want a sizing check.' },
    ],
  },
  '/electric-dirt-bikes/sur-ron/': {
    sections: [
      {
        heading: 'Surrons for Sale: Light Bee X, Ultra Bee and More',
        paragraphs: [
          `Looking for surrons for sale in Australia? We list the Light Bee X, the more powerful Ultra Bee and parts, with prices shown on every product card. ${SHIP}`,
        ],
      },
      {
        heading: 'Sur-Ron Electric Bike Price Guide',
        paragraphs: [
          'The Sur-Ron electric bike price depends on battery size and power: the Light Bee X is the entry model, and the Ultra Bee sits at the top. Compare the models above, then add a spare battery or charger if you plan long rides.',
        ],
      },
    ],
    faqs: [
      { q: 'Is there a Sur-Ron shop near me?', a: 'We are an online Sur-Ron dealer with a workshop in Mittagong NSW, shipping Australia-wide. Pickup consultations are by arrangement: contact us before visiting.' },
      { q: 'What is the Surron Light Bee X price in Australia?', a: 'The current Light Bee X price is shown on its product card on this page, including GST. That is the surron light bee x price Australia buyers pay, and you save 10% with crypto or PayID. Orders over $1,500 ship free.' },
      { q: 'Is the Sur-Ron electric bike for sale here new?', a: 'Yes. Every surron electric bike for sale on this page is new Australian stock with a 12-month warranty.' },
      { q: 'How much is a Surron ebike price compared to a Talaria?', a: 'Both brands cover a similar range. See our Sur-Ron vs Talaria guide for a side-by-side on price, power and range.' },
    ],
  },
  '/electric-bikes/': {
    sections: [
      {
        heading: 'Electric Bike Price in Australia: What Each Type Costs',
        paragraphs: [
          'Electric bike price depends on the type. Our fat-tyre e-bikes start at $2,190 and the RTR eBike range at $2,790. Kids and balance e-bikes start from $699, electric mopeds from $5,490, and electric dirt bikes and motorbikes sit above that. Prices on this page are in AUD including GST.',
        ],
        links: [{ href: '/blog/e-bike-cost-australia-price-guide/', label: 'E-bike cost guide' }],
      },
      {
        heading: 'E Bikes for Sale Australia-Wide',
        paragraphs: [
          'We list e bikes for sale in every major category and deliver Australia-wide from Mittagong NSW. Choose a pedal-assist commuter, an electric moped or a kids bike, then check the product page for range, motor power and licence rules. Riders also call them ebikes, electric bicycles or simply an e bike Australia wide, and an ebike Australia buyers order online from us carries the same 12-month warranty.',
        ],
      },
      {
        heading: 'Buy Electric Bike Australia: Delivery and Warranty',
        paragraphs: [
          `When you buy an electric bike in Australia from us, you get the specs and price up front, free insured freight over $1,500 and a 12-month Australian warranty with local servicing and parts.`,
        ],
      },
      {
        heading: 'E Bike Battery Range and Replacement',
        paragraphs: [
          'An e bike battery lasts several years with sensible charging. When it is time to replace it, our batteries page lists 60V to 84V lithium packs and chargers matched to the bikes we sell.',
        ],
        links: [{ href: '/electric-bike-batteries/', label: 'Electric bike batteries' }],
      },
    ],
    faqs: [
      { q: 'What is the electric bicycle price in Australia?', a: 'Adult electric bicycles start from $2,190 for our fat-tyre range and $2,790 for the RTR eBike range. Kids and balance e-bikes start from $699, and electric motorbikes cost more. See the price on each product card.' },
      { q: 'What is the e bike price in Australia for a good commuter?', a: 'Expect roughly $2,200 to $3,500 for a quality adult e-bike. Bikes at that level come with a proper warranty, spare parts and a local workshop.' },
      { q: 'Where can I buy an electric bike for sale in Australia?', a: `You can order online from Electric Dirt Bike Australia. We list electric bicycles for sale Australia-wide, and our e bike sales Australia customers receive free insured freight over $1,500 from Mittagong NSW.` },
      { q: 'Do you have electric road bikes for sale?', a: 'Road-registered electric mopeds are the road bikes in our range, and the road-compliant Ampd Bros e-bikes are 250W pedal-assist bikes. See the electric motorbikes and mopeds pages.' },
      { q: 'Do you have an electric bike in black?', a: 'Several Ampd Bros e-bikes, including the ACE Mini and the CHUBBIE 3, are offered in matte black. Each product page lists the colour options. Prices are shown on each listing, and the 10% crypto and PayID saving applies to all electric bikes on sale here.' },
      { q: 'Do you have an ebike for sale in Australia that needs no licence?', a: 'Yes. Pedal-assist e-bikes that meet the Australian 250W and 25 km/h assist standard, like the road-compliant Ampd Bros e-bikes, need no licence or registration. Higher-powered bikes must be registered or used off-road.' },
    ],
  },
  '/electric-bikes/cheap/': {
    sections: [
      {
        heading: 'Low Cost Electric Bike Buying Guide',
        paragraphs: [
          'A low cost electric bike should still have a branded battery, a proper warranty and available spare parts. A very cheap import can cost more once the battery fails. Compare motor power, battery capacity and warranty, not just the price. If you are looking for an electric bike cheap enough for daily commuting, start with the road-legal range.',
        ],
      },
      {
        heading: 'Cheapest Electric Bike Australia: Price Bands',
        paragraphs: [
          'The cheapest electric bike Australia buyers can get from us is the kids electric balance bike range from $699. For adults, fat-tyre e-bikes start at $2,190 and the RTR eBike range at $2,790.',
        ],
        links: [{ href: '/electric-balance-bikes/', label: 'Electric balance bikes' }],
      },
    ],
    faqs: [
      { q: 'Do you sell a cheap electric bike for under $500?', a: 'No. Our lowest-priced electric bikes start from $699 for kids balance bikes. Anything cheaper typically skips warranty cover and spare parts, which costs more over time.' },
      { q: 'What are the cheapest e bikes Australia riders can buy from you?', a: 'Kids and mini models are the most affordable. For adults, the fat-tyre range from $2,190 and the RTR eBike range from $2,790 are the entry points.' },
      { q: 'Is a cheap ebike in Australia safe to buy online?', a: 'Buy from an Australian dealer that lists the battery, motor specs and warranty. Every bike we sell has a 12-month warranty and a local workshop.' },
    ],
  },
  '/electric-motor-bikes/': {
    sections: [
      {
        heading: 'Electric Motorbike Australia: Road-Legal and Off-Road Ranges',
        paragraphs: [
          'An electric motorbike in Australia falls into two groups: road-registered models such as mopeds and commuters, and off-road bikes for private land and trails. Pick the group first, because it decides licence, registration and where you can ride.',
        ],
      },
      {
        heading: 'Electric Motor Bikes for Sale: Choose by Rider',
        paragraphs: [
          'Adults, teens and kids each need a different frame, power level and battery. Use this page to compare electric motor bikes for sale by rider type, then open the product page for specs, price and delivery.',
        ],
      },
      {
        heading: 'E Motorbike Power Classes Explained',
        paragraphs: [
          'Power is quoted in kW. Under 2kW suits kids and beginners, 3kW to 6kW suits teens and casual adult riding, and 8kW and above suits experienced riders. Higher power needs a licence on the road and more care off it.',
        ],
      },
      {
        heading: 'Buy Electric Motorbike Online With Free Freight',
        paragraphs: [
          `Buy an electric motorbike online from a local Australian dealer. ${SHIP}`,
        ],
      },
    ],
    faqs: [
      { q: 'Do you have an electric motorbike for sale for adults?', a: 'Yes. The adult range covers road-legal mopeds, commuter bikes and full-size off-road electric motorbikes. Filter by use: road, trail or track.' },
      { q: 'Which electric motorbikes Australia wide are road legal?', a: 'Electric mopeds that are road-registered, and electric motorbikes that meet ADR requirements. Off-road motorbikes are for private land only. See the laws guide for details.' },
      { q: 'Is an e motorbike in Australia the same as an e-bike?', a: 'Not quite. An e-bike is pedal-assist and limited to 250W, while an e motorbike has a throttle and higher power and usually needs registration and a licence on the road.' },
    ],
  },
  '/electric-motorcycles/': {
    sections: [
      {
        heading: 'Electric Motorcycle Australia: Models by Licence Type',
        paragraphs: [
          'An electric motorcycle in Australia needs registration and a licence on the road, while off-road models do not. Our range is split by use so you can see which bikes are road legal and which are for private land and trails.',
        ],
      },
      {
        heading: 'E Motorcycle Range for Commuters',
        paragraphs: [
          'A commuter e motorcycle gives you fast city riding with very low running costs. Look at range per charge, charging time and whether the model is LAMS approved if you hold a learner or restricted licence.',
        ],
      },
      {
        heading: 'Electric Motorcycles for Adults',
        paragraphs: [
          'Adult riders should compare power, battery capacity and weight. Heavier electric motorcycles carry bigger batteries and ride further, while lighter ones are easier to handle on tight trails.',
        ],
      },
    ],
    faqs: [
      { q: 'Where can I buy electric motorcycles for sale in Australia?', a: `You can buy electric motorcycles online from Electric Dirt Bike Australia. ${SHIP}` },
      { q: 'What is the electric motorcycle Australia price range?', a: 'Road-legal electric mopeds start from $5,490, and performance motorcycles cost more. See each product card for the exact price.' },
      { q: 'Is there an electric motorcycle au wide warranty?', a: 'Yes. Every electric motorcycle we sell includes a 12-month Australian warranty with workshop servicing from Mittagong NSW.' },
    ],
  },
  '/electric-motor-bikes/commuter-mopeds/': {
    sections: [
      {
        heading: 'Electric Moped Bike for City Riding',
        paragraphs: [
          'An electric moped bike is ideal for city commuting: quiet, cheap to run and easy to park. Most models are LAMS approved, which means learner and restricted licence holders can ride them.',
        ],
      },
      {
        heading: 'Best Electric Moped Australia by Licence',
        paragraphs: [
          'The best electric moped in Australia for you depends on licence and range. Check LAMS status, battery capacity and the charging time on each product page before you choose.',
        ],
      },
    ],
    faqs: [
      { q: 'What are cheap electric mopeds in Australia?', a: 'Our road-legal electric mopeds start from $5,490. That includes registration-ready bikes with a 12-month warranty; unregistered cheap mopeds cost more in the long run.' },
      { q: 'Is an electric motorcycle moped the same as a scooter?', a: 'The terms overlap. Our mopeds are registered road bikes with a LAMS-approved motor class, a step-through or standard frame and a lithium battery.' },
      { q: 'Do I need a licence for an electric moped bike?', a: 'Yes, in most states you need a licence and the bike must be registered. LAMS models suit learner and restricted riders.' },
    ],
  },
  '/electric-motor-bikes/best-electric-bikes-australia/': {
    sections: [
      {
        heading: 'Best E Bikes Australia: Value Picks',
        paragraphs: [
          'The best e bikes Australia has to offer balance price, range and warranty. In our ranking the value picks are the road-compliant Ampd Bros e-bikes: 250W, 25 km/h assist and no licence or registration in the road-compliant option. People also look for the best ebikes Australia wide or cool electric bikes for weekend rides, and the picks above cover both.',
        ],
      },
      {
        heading: 'Best Ebike Australia for Commuters',
        paragraphs: [
          'The best ebike Australia commuters can buy has a 50km+ real-world range, a reliable battery and mudguards. Check the range and charging time on each product page against your commute.',
        ],
      },
    ],
    faqs: [
      { q: 'Where to buy electric bike models in Australia?', a: `Buy from an Australian dealer with a local workshop, parts and a warranty. ${SHIP}` },
      { q: 'What are the coolest e bikes in Australia?', a: 'Super73 electric motos and our fat-tyre cruisers are the most popular style picks. For performance, the electric dirt bikes lead.' },
      { q: 'What are the best electric bicycles Australia riders recommend?', a: 'Commuters choose the road-compliant Ampd Bros e-bikes, riders on rougher terrain choose fat-tyre e-bikes, and trail riders choose electric dirt bikes.' },
    ],
  },
  '/electric-motor-bikes/e-bike-laws-australia/': {
    sections: [
      {
        heading: 'Electric Bike Laws QLD',
        paragraphs: [
          'Queensland follows the national standard for pedal-assist bikes: 250W continuous power and a 25 km/h assist cutoff. Higher-powered bikes are treated as motor vehicles on public roads and need registration and a licence.',
        ],
        links: [{ href: '/blog/electric-bike-laws-qld-2026/', label: 'Electric bike laws QLD guide' }],
      },
      {
        heading: 'Electric Bike Regulations NSW and Certification',
        paragraphs: [
          'New South Wales uses the same 250W and 25 km/h standard. Bikes must meet the Australian standard to be sold and ridden as bicycles, and our e-bikes that carry this status need no registration. Read the NSW regulations guide for the detail.',
        ],
        links: [{ href: '/blog/electric-bike-regulations-nsw-2026/', label: 'NSW e-bike regulations' }],
      },
      {
        heading: 'E Bike Laws Victoria: Age Limit',
        paragraphs: [
          'Victoria allows pedal-assist e-bikes that meet the 250W standard to be ridden without a licence, with the rider age and helmet rules that apply to bicycles. Higher-powered bikes need registration.',
        ],
      },
      {
        heading: 'Street Legal Electric Bike: What Qualifies',
        paragraphs: [
          'A street legal electric bike either meets the bicycle standard or is registered as a motor vehicle. Road-registered electric mopeds qualify; off-road electric dirt bikes do not, whatever the seller says.',
        ],
        links: [{ href: '/electric-motor-bikes/commuter-mopeds/', label: 'Road-registered electric mopeds' }],
      },
    ],
    faqs: [
      { q: 'What is a road legal electric bike?', a: 'A road legal electric bike meets the 250W and 25 km/h bicycle standard, or is a registered electric moped or motorcycle. Off-road dirt bikes are not road legal.' },
      { q: 'Are road legal dirt bikes available as electric?', a: 'Electric dirt bikes are off-road only unless the model has road registration. Road-registered options are the electric mopeds and electric motorcycles.' },
      { q: 'Can I get a road registered electric bike?', a: 'Yes, our electric mopeds and some motorcycles are road registered, which makes them a road registered electric bike in the legal sense. Check each product page for registration details.' },
    ],
  },
  '/electric-motor-bikes/kids/': {
    sections: [
      {
        heading: 'Childs Electric Motorcycle: Safe First Bikes',
        paragraphs: [
          'A childs electric motorcycle should have an adjustable power mode, a low seat and a throttle limiter so a parent can cap speed. Our youth range is chosen for those features.',
        ],
      },
      {
        heading: 'Kids Electric Motorbike for Every Age',
        paragraphs: [
          'The right kids electric motorbike changes with age: balance bikes for the youngest riders, 12-inch bikes for primary-school ages, and 14 to 16-inch youth bikes for older kids. Match the bike to height and weight. Whether it is an electric bike for kids or a childs electric bike, always choose adjustable power.',
        ],
      },
      {
        heading: 'Childrens Electric Motorbike Sizing Guide',
        paragraphs: [
          'Use seat height first: your child should reach the ground with the balls of both feet. Then check weight limit and power mode on the product page. Always add a helmet, gloves and boots.',
        ],
      },
    ],
    faqs: [
      { q: 'What is the best children electric bike for a 5 year old?', a: 'A 12-inch balance or 12-inch youth bike with a low-power mode. See the sizing guide above and each bike\'s seat height.' },
      { q: 'Do you sell a childrens electric motor bike for older kids?', a: 'Yes. Larger 14 to 16-inch youth bikes suit older kids and have adjustable power so you can set the speed.' },
      { q: 'Is an electric kids bike safe for beginners?', a: 'Yes, when it has adjustable power modes, ridden with protective gear and supervised on private land. Start in the lowest power setting.' },
    ],
  },
  '/electric-motor-bikes/rtr-ebike/': {
    sections: [
      {
        heading: 'RTR E Bike Models and Prices',
        paragraphs: [
          'The RTR e bike range includes the S Classic from $2,790 and the Pro from $3,490. They are RTR (Ready To Rip) electric bikes for off-road riding on private property and designated off-road areas, not for public roads. Whether you call it an RTR bike or an RTR electric bike, the range is the same.',
        ],
      },
    ],
    faqs: [
      { q: 'Is the RTR electric dirt bike the same as the RTR eBike?', a: 'They are the same family: RTR electric bikes are built for off-road riding. See our electric dirt bikes and electric pit bikes for the wider range.' },
      { q: 'Is an RTR electric bike road legal?', a: 'No. RTR electric bikes are sold for off-road recreational use on private property and designated off-road areas. They are not registered for public roads, and rules vary by state.' },
    ],
  },
  '/electric-motor-bikes/sydney/': {
    sections: [
      {
        heading: 'Electric Bike for Sale Sydney: Delivery From Mittagong',
        paragraphs: [
          `Looking for an electric bike for sale in Sydney? We dispatch from Mittagong, about 90 minutes south-west of the city, so Sydney delivery is quick. ${SHIP}`,
        ],
      },
      {
        heading: 'Ebike Sydney: Which Type Suits Your Commute?',
        paragraphs: [
          'For an ebike in Sydney, a road-compliant Ampd Bros e-bike suits most commutes: 250W, 25 km/h assist and no licence or registration in the road-compliant option. Choose an electric moped if you want more speed and have a licence. Whether you search for ebikes Sydney or e bikes Sydney, the range on this page is the same.',
        ],
      },
    ],
    faqs: [
      { q: 'Where can I find electric bikes for sale in Sydney?', a: 'Order online from Electric Dirt Bike Australia and we deliver ebikes for sale in Sydney from Mittagong NSW, or arrange a workshop pickup consultation first.' },
      { q: 'Do you stock an electric bike Sydney commuters can use without a licence?', a: 'Yes. The Ampd Bros e-bikes are offered as a 250W road-compliant model that meets the Australian standard for pedal-assist bikes, so no licence or registration is needed. Choose that option when you order.' },
      { q: 'Which e bike Sydney riders choose for hills?', a: 'Look for a mid-drive or higher-torque hub motor and a 48V battery; our commuter range shows motor torque on each product page.' },
    ],
  },
  '/electric-motor-bikes/melbourne/': {
    sections: [
      {
        heading: 'Ebike Melbourne: Commuter and Off-Road Options',
        paragraphs: [
          'An ebike in Melbourne covers commuter rides on bike paths and weekend trips to the Victorian high country. Pick a road-compliant Ampd Bros e-bike for commuting, or an electric dirt bike for private land and forestry trails. Whether you search for ebikes Melbourne or Melbourne ebikes, the range is the same.',
        ],
      },
      {
        heading: 'Electric Bicycle Melbourne: Prices and Delivery',
        paragraphs: [
          `We deliver electric bicycles to Melbourne and all of Victoria from Mittagong NSW, and prices include GST. ${SHIP}`,
        ],
      },
      {
        heading: 'E Bikes for Sale Melbourne: In-Stock Range',
        paragraphs: [
          'The e bikes for sale in Melbourne on this page are our in-stock range, with prices shown including GST and a 12-month warranty.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you have dirt bikes for sale in Melbourne?', a: 'Yes. We ship electric dirt bikes to Melbourne and all of Victoria, and they are for private land and approved off-road areas.' },
      { q: 'Where can I find an electric bike for sale in Melbourne?', a: 'Order online and we deliver to Melbourne from Mittagong NSW. Whether you want an ebike for sale in Melbourne for commuting or a Melbourne electric bicycle for weekend rides, the range above shows price, battery and range on every listing.' },
      { q: 'Where can I buy an electric bike in Melbourne?', a: 'Order online and we deliver to Melbourne from Mittagong NSW. Contact us on WhatsApp for a delivery estimate to your suburb.' },
      { q: 'What do I need to ride an ebike in Melbourne?', a: 'Pedal-assist bikes that meet the 250W standard need no licence. Helmets are mandatory in Victoria.' },
    ],
  },
  '/electric-motor-bikes/perth/': {
    sections: [
      {
        heading: 'Electric Bicycle Perth WA: Road-Legal Options',
        paragraphs: [
          'Searching for an electric bicycle in Perth WA? The road-compliant Ampd Bros e-bikes meet the national 250W and 25 km/h standard, so they can be ridden on roads and shared paths without a licence or registration.',
        ],
      },
      {
        heading: 'E Bikes for Sale Perth: Popular Models',
        paragraphs: [
          `Our e bikes for sale in Perth include road-legal commuters, electric mopeds and electric dirt bikes, all delivered to WA. Every e bike Perth riders order ships with the same warranty. ${SHIP}`,
        ],
      },
    ],
    faqs: [
      { q: 'What are WA ebike laws?', a: 'Western Australia follows the national standard: 250W continuous power and a 25 km/h assist limit for bicycle-class e-bikes. See our laws guide for the detail.' },
      { q: 'Can I buy ebikes in Perth online?', a: 'Yes. We deliver e bikes to Perth from Mittagong NSW with free freight over $1,500. The electric bike for sale Perth riders ask about most is the road-compliant Ampd Bros e-bike.' },
      { q: 'Do you sell an electric motorbike in Perth?', a: 'Yes. Our electric motorbikes and mopeds ship to Perth. Road models need registration and a licence.' },
    ],
  },
  '/electric-motor-bikes/brisbane/': {
    sections: [
      {
        heading: 'E Bikes for Sale Brisbane: Range and Delivery',
        paragraphs: [
          `Our e bikes for sale in Brisbane include road-legal commuters, electric mopeds and kids bikes, delivered across Queensland. ${SHIP}`,
        ],
      },
      {
        heading: 'Electric Motorbike Brisbane: Licence and Rego Basics',
        paragraphs: [
          'An electric motorbike in Brisbane is treated like a petrol motorbike on the road: it needs registration and a licence. Off-road electric bikes are for private land only. Pedal-assist e-bikes under 250W need neither.',
        ],
      },
    ],
    faqs: [
      { q: 'Is there an electric bike for sale in Brisbane with free delivery?', a: 'Yes. Free insured freight applies to orders over $1,500 AUD, including to Brisbane and the rest of QLD. Brisbane riders also ask for electric bikes in Milton: we deliver there too.' },
      { q: 'Can I rent an e bike in Brisbane?', a: 'We sell e-bikes rather than rent them. Contact us and we will advise on the right model for your rides.' },
      { q: 'Do you sell electric motorcycles in Brisbane?', a: 'Yes. Our electric motorcycles and mopeds ship to Brisbane with a 12-month Australian warranty.' },
    ],
  },
  '/electric-motor-bikes/gold-coast/': {
    sections: [
      {
        heading: 'Electric Bike Gold Coast: Commuter and Beach Riding',
        paragraphs: [
          'An electric bike on the Gold Coast suits beachfront paths, canal tracks and daily commutes. Fat-tyre e-bikes handle sand and boardwalks, while the road-compliant Ampd Bros e-bikes cover longer commutes with no licence.',
        ],
      },
    ],
    faqs: [],
  },
  '/electric-motor-bikes/townsville/': {
    sections: [
      {
        heading: 'E Bikes Townsville: Built for Heat and Distance',
        paragraphs: [
          'North Queensland heat is hard on batteries, so choose a bike with a quality lithium pack and charge it in the shade. Our commuter e-bikes and electric mopeds suit Townsville\'s flat roads and the Strand.',
        ],
      },
    ],
    faqs: [],
  },
  '/electric-bike-batteries/': {
    sections: [
      {
        heading: 'E Bike Battery Guide: Voltage, Amp Hours and Range',
        paragraphs: [
          'An e bike battery is defined by voltage and amp hours. Voltage sets power, and amp hours set range: a 72V 40Ah pack stores roughly 2.9kWh. Match the pack to your controller and the bike\'s connector before you buy.',
        ],
        links: [{ href: '/blog/e-bike-battery-guide-voltage-capacity-range/', label: 'E bike battery guide' }],
      },
      {
        heading: 'E Cycle Battery and Replacement Packs',
        paragraphs: [
          'An e cycle battery pack that has lost capacity can be replaced with a new lithium pack in the same voltage. Check the controller\'s maximum voltage first, and use a charger matched to the pack.',
        ],
      },
      {
        heading: 'Batteries for Electric Bicycles: Compatibility',
        paragraphs: [
          'Batteries for electric bicycles are not interchangeable. Voltage, connector, form factor and the battery management system must match your bike. Contact us with your bike model and we will confirm the correct pack.',
        ],
      },
    ],
    faqs: [
      { q: 'How much is an electric bicycle battery replacement?', a: 'Replacement cost depends on voltage and capacity. See the packs on this page for current pricing, and read our battery replacement cost guide.' },
      { q: 'Do you sell e bike batteries and chargers together?', a: 'Yes. Packs and matched chargers are listed here, and free freight applies over $1,500.' },
      { q: 'Can I get an e bike battery charger separately?', a: 'Yes, chargers are sold separately. Choose one that matches your pack voltage and connector.' },
    ],
  },
  '/accessories/': {
    sections: [
      {
        heading: 'Charger for E Bike: Fast and Standard Chargers',
        paragraphs: [
          'A charger for an e bike must match the pack voltage and connector. Standard 3A to 5A chargers suit overnight charging, while 10A and 15A fast chargers cut a 72V pack to a few hours. Fast charging is convenient but runs the battery warmer, so keep it for when you need it.',
        ],
      },
      {
        heading: 'Electric Bike Parts Australia: Controllers and Brakes',
        paragraphs: [
          'We stock electric bike parts for Australian riders: controllers, brake pads and rotors, tyres, chargers and spare batteries. Message us with your bike model and we will confirm fit before you order.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you sell chargers for ebike models other than yours?', a: 'We stock chargers matched to the bikes we sell. If your bike is another brand, send us the pack voltage and connector type and we will advise.' },
      { q: 'Where to buy e bike chargers in Australia?', a: 'You can buy e bike chargers online from Electric Dirt Bike Australia and have them shipped from Mittagong NSW.' },
    ],
  },
  '/electric-fat-tyre-bikes/': {
    sections: [
      {
        heading: 'Fat Tyre Electric Bike: Sand, Beach and Trail',
        paragraphs: [
          'A fat tyre electric bike runs 4-inch tyres at low pressure so it floats over sand, gravel and soft trails. They are heavier than standard e-bikes but far more stable off the road. The best fat tyre electric bike Australia riders can buy depends on terrain and budget, so compare battery and motor power on each listing.',
        ],
      },
      {
        heading: 'E Bike Cruiser Range',
        paragraphs: [
          'An e bike cruiser pairs a relaxed seating position with a throttle and pedal assist. Our cruiser range, including the Chubbie and Riptide, suits beachfront riding and short commutes.',
        ],
      },
      {
        heading: 'Cruiser Electric Bike Australia: Prices',
        paragraphs: [
          'Cruiser electric bike prices in Australia start at the entry fat-tyre models and rise with battery size and motor power. Compare the bikes above and check the specs on each product page.',
        ],
      },
    ],
    faqs: [
      { q: 'What is a fat tire electric bicycle best for?', a: 'Soft ground: sand, snow and loose gravel. The wide tyre gives traction and a cushioned ride, at the cost of some weight.' },
      { q: 'Do you have a beach cruiser for sale?', a: 'Yes. Our cruiser range includes the CHUBBIE 3 and the Stubbie S3, which suit beach paths and relaxed city riding. Prices for each cruiser electric bike Australia-wide are on the listings, and the road-compliant models need no licence or registration.' },
      { q: 'Are fat bikes Australia road legal?', a: 'Fat-tyre e-bikes that meet the 250W standard are legal on roads and paths. Higher-powered ones are off-road only.' },
    ],
  },
  '/electric-mini-bikes/': {
    sections: [
      {
        heading: 'Electric Mini Bike Range for Teens',
        paragraphs: [
          'An electric mini bike is a compact, low-seat bike that suits teens and smaller adults. They are quiet, simple and fun on private land, and need very little maintenance.',
        ],
      },
      {
        heading: 'Mini E Bike Sizes and Speeds',
        paragraphs: [
          'For any mini e bike or mini ebike, check the wheel size, top speed and weight limit. A 12-inch model suits kids, while 16-inch and larger frames suit teens.',
        ],
      },
    ],
    faqs: [
      { q: 'Is an electric mini bike motorcycle road legal?', a: 'Most mini bikes are for private land and off-road areas only. See each product page for registration details.' },
      { q: 'Do you sell mini dirt bikes that are electric?', a: 'Yes. Every mini dirt bike we sell is electric, with adjustable speed so parents can limit the power.' },
      { q: 'What is the right mini electric dirt bike for kids?', a: 'Match the bike to seat height and weight, and start on the lowest power setting. See the kids dirt bikes page for sizing.' },
    ],
  },
  '/electric-motocross-bikes/': {
    sections: [
      {
        heading: 'Electric Motocross Motorcycle: Race-Ready Power',
        paragraphs: [
          'An electric motocross motorcycle delivers full torque from zero rpm, which is why Stark Varg and KTM SX-E riders launch hard off the gate. Our motocross range lists power, weight and battery data side by side.',
        ],
      },
      {
        heading: 'E Motocross Bike Options for Juniors',
        paragraphs: [
          'For junior riders, an e motocross bike like the KTM SX-E 5 or the E-Ride Pro Mini offers real MX-style geometry in a size and power level kids can handle.',
        ],
      },
    ],
    faqs: [
      { q: 'Is an electric motocross bicycle the same as an electric motocross bike?', a: 'People search both terms. We sell full motorised electric motocross bikes, not pedal bicycles.' },
      { q: 'Can I take an electric mx motorcycle to a track?', a: 'Yes, most MX tracks allow electric bikes. Check the track\'s noise and entry rules before you go.' },
    ],
  },
  '/electric-pit-bikes/': {
    sections: [
      {
        heading: 'Fast Electric Pit Bike Range',
        paragraphs: [
          'A fast electric pit bike gives you instant torque and low running costs. Our range includes small-wheel models for track days, paddocks and tight trails.',
        ],
      },
      {
        heading: 'Pit Bikes Australia: Electric vs Petrol',
        paragraphs: [
          'Pit bikes in Australia are traditionally petrol, but electric pit bikes remove the fuel, oil and carburettor work, and they are quieter for neighbours and track days.',
        ],
      },
    ],
    faqs: [
      { q: 'Where can I buy pit bikes AU wide?', a: 'Order online from Electric Dirt Bike Australia and we ship electric pit bikes Australia-wide from Mittagong NSW.' },
      { q: 'What is an electric pitbike?', a: 'It is a small-wheel off-road bike with an electric motor and battery instead of a petrol engine. Often used for paddocks, tracks and kids.' },
    ],
  },
  '/electric-balance-bikes/': {
    sections: [
      {
        heading: 'Which Balance Bike Size Fits Your Child?',
        paragraphs: [
          'An electric balance bike in Australia suits young riders and helps kids build balance before they move up to a pedal bike or a youth electric dirt bike. Check seat height and weight limit on each product page.',
        ],
      },
    ],
    faqs: [],
  },
  '/brands/': {
    sections: [
      {
        heading: 'Dirt Bike Brand Guide: Which Suits Your Riding?',
        paragraphs: [
          'Choosing a dirt bike brand comes down to riding style. Sur-Ron and Talaria suit trail and mixed riding, Stark Varg and KTM suit motocross, and E-Ride Pro covers entry and youth models.',
        ],
      },
    ],
    faqs: [{ q: 'Which ebike brands Australia riders trust most?', a: 'Sur-Ron, Talaria, RTR and Super73 are among the most popular in Australia. See each brand page for models, price and warranty.' }],
  },
  '/brands/e-ride-pro/': {
    sections: [
      {
        heading: 'E Ride Pro SS Australia: Models and Prices',
        paragraphs: [
          'The E Ride Pro SS is the brand\'s flagship electric dirt bike. Compare the SS 2.0, SR and SE models above for power, battery and price.',
        ],
      },
    ],
    faqs: [],
  },
};

export function extraBlockFor(path: string): ExtraBlock | undefined { return EXTRA_BLOCKS[path]; }
export function extraFaqs(path: string): ExtraFaq[] { return EXTRA_BLOCKS[path]?.faqs ?? []; }
