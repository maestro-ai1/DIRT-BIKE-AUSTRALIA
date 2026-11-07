// Legacy post upgrades, batch C: 4 thin rewrites plus 5 FAQs for the longer legacy posts. Facts come from the catalogue and the post copy.
import type { LegacyUpgrade } from './legacy-upgrades';
const D = 'https://electricdirtbikeaustralia.com.au';

export const UPGRADES_C: Record<string, LegacyUpgrade> = {
  'electric-bike-registration-nsw-guide': {
    content: `Registering an electric two-wheeler in NSW depends on what the vehicle is, not on the word "electric". A low-powered pedal-assist e-bike is treated like a bicycle, while a high-powered electric dirt bike is a motor vehicle that needs to meet registration, licensing and equipment requirements before it can be ridden on a public road. This guide explains the difference in plain language, what applies to the off-road bikes we sell, how a road-registered bike differs, and where to confirm the current rules. It is general information, not legal advice, and requirements change, so confirm with Transport for NSW before you buy or ride.

### Two Different Categories
NSW treats low-powered, pedal-assist e-bikes that meet the legal limits much like bicycles. They do not need registration, and the rider does not need a driver licence, although a helmet is required. Bikes that exceed those limits are motor vehicles. The NSW Government explains the current rules on its page about [riding bikes, e-bikes and e-scooters in NSW](https://www.nsw.gov.au/driving-boating-and-transport/bikes-e-bikes-e-scooters). Read our [NSW e-bike regulations guide](${D}/blog/electric-bike-regulations-nsw-2026/) for the certification timeline.

### Off-Road Electric Dirt Bikes: Private Property and Designated Areas
High-performance bikes such as the [Sur-Ron Light Bee X](${D}/shop/sur-ron-light-bee-x/) ($6,490) and the [Talaria Sting R MX4](${D}/shop/talaria-sting-r-mx4/) ($7,290) are supplied as off-road recreational vehicles. They are intended for private property with the owner's permission and for designated off-road parks. They are not supplied with the road equipment needed for registration, and an unregistered bike cannot be ridden on public roads. Read our guide to [whether electric dirt bikes are legal in Australia](${D}/blog/are-electric-dirt-bikes-legal-in-australia/).

### Can an Off-Road Bike Be Registered?
Some bikes can be configured for road registration, but not every model is eligible and the process depends on the bike, its documentation and the state requirements. Registration normally needs compliant lights, mirrors, indicators, a horn, a number plate bracket and identification, and the vehicle must be approved for road use. Contact Transport for NSW or Service NSW before you buy a bike that you intend to register, because a bike that cannot be registered is not a bargain at any price.

### Registered Road-Legal Electric Mopeds and Motorcycles
If you want to ride on the road, the simplest path is a bike sold for road use. The [NIU NQi GT](${D}/shop/niu-nqi-gt-electric-moped/) at $5,990 is listed as a LAMS-approved electric moped with a 3,000 watt motor and up to 100 km with dual batteries. The [Super Soco CPx](${D}/shop/super-soco-cpx-electric-moped/) at $5,490 lists a 3kW motor and a 65 km/h top speed, and the [Vmoto Soco TC-Max](${D}/shop/vmoto-soco-tc-max-electric/) at $8,990 lists a 5kW motor and a 95 km/h top speed. See the [electric mopeds and commuter bikes](${D}/electric-motor-bikes/commuter-mopeds/).

### What LAMS Means
LAMS is the Learner Approved Motorcycle Scheme. It allows learner and provisional motorcycle licence holders in NSW to ride approved motorcycles that meet power-to-weight limits. A bike must be on the approved list to count. Confirm approval with the seller in writing and check the current list on the Transport for NSW website before you buy.

### Licence and Insurance
A road-registered electric motorcycle or moped requires the correct licence class, compulsory third party insurance as part of NSW registration, and recommended comprehensive or third-party property cover. Off-road bikes on private land are not covered by CTP. See our [insurance guide](${D}/blog/electric-dirt-bike-insurance-australia-guide/) for the options.

### Helmets and Safety
Wear an approved helmet on any bike and appropriate protective gear. Keep batteries safe by using the supplied charger, charging in a ventilated area and not leaving a charging battery unattended. The NSW Government publishes guidance on [lithium-ion batteries and e-micromobility devices](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices).

### Talk to Our Team First
If road registration is your goal, ask before you order. Contact our Mittagong team through the [contact page](${D}/contact/) with the model you are considering and we will tell you what we can confirm. EDBA-supplied bikes carry a 12-month Australian warranty. Browse the [electric motorcycles range](${D}/electric-motorcycles/) and the [e-bike laws overview](${D}/electric-motor-bikes/e-bike-laws-australia/) to compare options.`,
    faqs: [
      { q: 'Do electric dirt bikes need registration in NSW?', a: `To ride on public roads, yes, and most off-road electric dirt bikes are not supplied in a registrable form. On private property and in designated off-road areas, registration is not required. Check with Transport for NSW for your situation.` },
      { q: 'Can I register a Sur-Ron or Talaria in NSW?', a: `It depends on the model, the equipment fitted and the state requirements, and many bikes are not eligible. Confirm with Transport for NSW before you buy. Bikes sold for road use include the [NIU NQi GT](${D}/shop/niu-nqi-gt-electric-moped/).` },
      { q: 'What does LAMS mean for electric bikes?', a: `LAMS is the Learner Approved Motorcycle Scheme, which lets learner and provisional riders use approved motorcycles. The [NIU NQi GT](${D}/shop/niu-nqi-gt-electric-moped/) is listed as LAMS approved. Always confirm with the seller and the current approved list.` },
      { q: 'Do I need a licence to ride an e-bike in NSW?', a: `A compliant pedal-assist e-bike is treated like a bicycle and does not need a driver licence, but a helmet is required. Motorised bikes that exceed the limits are motor vehicles and need the correct licence. Read the [NSW e-bike regulations guide](${D}/blog/electric-bike-regulations-nsw-2026/).` },
      { q: 'Where can I get official NSW e-bike rules?', a: `The NSW Government publishes them on its [bikes, e-bikes and e-scooters page](https://www.nsw.gov.au/driving-boating-and-transport/bikes-e-bikes-e-scooters), and Transport for NSW handles registration.` },
    ],
  },

  'electric-dirt-bike-insurance-australia-guide': {
    content: `Insurance is not compulsory for an unregistered electric dirt bike used on private property, but that does not mean it is a bad idea. A $6,490 Sur-Ron or an $18,990 Stark Varg is a large amount of money, and bikes are stolen, damaged in transit and crashed. This guide explains how insurance works for off-road and road-registered electric bikes, what types of cover exist, what to ask an insurer, and what a manufacturer warranty does and does not cover. It is general information, not financial or legal advice, and policies differ, so read the product disclosure statement of any policy before you buy.

### Warranty Is Not Insurance
A warranty covers faults in materials and workmanship. EDBA-supplied bikes carry a 12-month Australian warranty, and some supplier products list their own terms on the product page. A warranty does not cover theft, crashes, water damage from misuse, accident damage or normal wear items such as tyres and brake pads. Insurance covers events like theft and accidental damage. You can have both. Read the [warranty and service page](${D}/warranty-and-service/) for exactly what the warranty covers.

### Off-Road Bikes and Compulsory Third Party Insurance
Compulsory third party insurance (CTP) is part of registration for road vehicles, so unregistered off-road bikes are not covered. CTP also does not protect your own bike. If you ride an off-road bike on private land, you rely on your own cover and on the property owner's cover. Check the owner's policy before you ride on someone else's land, and ask whether visitors with motorised vehicles are covered.

### Cover Options to Ask About
Insurers differ on whether they cover electric dirt bikes at all. Ask whether they offer a recreational vehicle policy, a home and contents extension, a specialist motorcycle policy or a policy through a motorsport club. Typical options cover theft, accidental damage, fire and sometimes transit. Ask whether the policy covers the battery pack, how it treats modifications, whether it covers use at a track or only on private land, and whether it requires a secure storage arrangement. Get answers in writing.

### Higher-Value Bikes Deserve a Closer Look
The replacement cost of a [Stark Varg EX 80HP](${D}/shop/stark-varg-ex-80hp/) at $18,990, a [Sur-Ron Storm Bee Enduro](${D}/shop/sur-ron-storm-bee-enduro/) at $15,490 or a [Talaria Dragon](${D}/shop/talaria-dragon-enduro/) at $13,990 is high enough that insurance is worth pricing. Theft risk rises if the bike is stored in a garage or shed that is not locked or that is visible from the street. Lock the bike to a fixed point and record the serial or VIN number and keep photos and purchase documents.

### Road-Registered Models
If you register a bike for the road, standard CTP applies through your state registration, and you can add comprehensive or third-party property cover just as you would on any motorcycle. Registered models in our range include the [NIU NQi GT](${D}/shop/niu-nqi-gt-electric-moped/) at $5,990 and the [Vmoto Soco TC-Max](${D}/shop/vmoto-soco-tc-max-electric/) at $8,990. Read the [registration guide for NSW](${D}/blog/electric-bike-registration-nsw-guide/) for how the process works.

### Battery Safety and Insurance
Lithium batteries need care. Use the supplied charger, charge in a ventilated area, do not charge unattended overnight in a living space and stop using a pack that is swollen or damaged. The Queensland Fire Department explains [lithium-ion battery safety](https://www.fire.qld.gov.au/safety-education/battery-and-charging-safety/lithium-ion-battery-safety). Some insurers ask about charging and storage arrangements, so be ready to explain yours.

### Claims and Records
Keep your tax invoice, serial number, battery serial number, photos and any service records. If you need to claim for transit damage, photograph the packaging and the bike on delivery. Contact the seller if you find damage on delivery. Our [shipping and delivery page](${D}/shipping-and-delivery/) explains how deliveries and issues are handled.

### Buy From an Authorised Dealer
Buying through Electric Dirt Bike Australia gives you a tax invoice, a 12-month Australian warranty on EDBA-supplied bikes and support from our Mittagong NSW team. Browse the [electric dirt bike range](${D}/electric-dirt-bikes/) or ask a question on the [contact page](${D}/contact/).`,
    faqs: [
      { q: 'Do I need insurance for an electric dirt bike?', a: `Not by law for an unregistered bike used on private property, but cover for theft and accidental damage is worth considering, especially for higher-value bikes such as the [Stark Varg EX](${D}/shop/stark-varg-ex-80hp/).` },
      { q: 'Does CTP cover an off-road electric dirt bike?', a: `No. Compulsory third party insurance is part of registration for road vehicles. Unregistered off-road bikes are not covered by it.` },
      { q: 'Does the warranty cover theft or crash damage?', a: `No. A warranty covers faults in materials and workmanship, not theft, crashes or wear items. EDBA-supplied bikes carry a 12-month warranty. See the [warranty and service page](${D}/warranty-and-service/).` },
      { q: 'What should I ask an insurer?', a: `Ask whether they cover electric bikes and batteries, how they treat modifications, whether use at tracks is covered, and what storage conditions they require. Get the answers in writing.` },
      { q: 'What insurance applies to a road-registered electric bike?', a: `Registered bikes carry CTP through state registration and can have comprehensive or third-party property cover, as with any motorcycle. Registered options include the [NIU NQi GT](${D}/shop/niu-nqi-gt-electric-moped/).` },
    ],
  },

  'best-electric-dirt-bike-lighting-kits-night-riding': {
    content: `Most electric dirt bikes are designed for daytime off-road riding and ship with little or no lighting. If you want to ride at dusk, at dawn or after dark on private property, a proper lighting upgrade changes what you can see and how early you can react. This guide explains what lighting kits do, how much power they draw from the main battery, how to choose between spot and flood patterns, what to check before fitting one, and what to remember about safety and the law. The kit we stock is the Baja Designs Squadron Pro LED headlight, and the figures below are the specifications from its product listing.

### Why Stock Lighting Falls Short
A small indicator light or a basic headlamp is enough to be seen, but not enough to see uneven ground at speed. Trail hazards such as roots, ruts and rocks are hard to judge in weak light, and shadows hide changes in terrain. A dedicated lighting kit gives a brighter and wider beam so you have more time to react.

### Baja Designs Squadron Pro LED Headlight
The [Baja Designs Squadron Pro LED headlight kit](${D}/shop/baja-designs-squadron-headlight/) is $360. It lists 4,600 lumens from four Cree LEDs, a 40 watt rating with a 2.9 amp draw and an IP69K waterproof rating, which means it is sealed against dust and high-pressure water. Lumens measure total light output, and the beam pattern decides how that light is used. A well-designed optic puts the light on the track ahead rather than into your eyes.

### Spot, Driving and Flood Patterns
A spot pattern throws light a long way down a straight trail but leaves the edges dark. A flood pattern lights a wide area close to the bike and suits slow, technical riding. Many riders want a mix: a main beam with reach and a wider beam for corners. Match your pattern to your riding speed. Faster riding needs more reach, slower riding needs more width.

### How Much Range Do Lights Cost You?
Electric bikes power the lights from the main pack. A 40 watt light running for an hour uses about 40Wh of energy. On a bike with a 2,400Wh battery such as the [Sur-Ron Light Bee X](${D}/shop/sur-ron-light-bee-x/), that is under 2 percent of the pack per hour at full output. On the 2,700Wh [Talaria Sting R MX4](${D}/shop/talaria-sting-r-mx4/) it is about 1.5 percent. The effect on range is small compared with the effect of speed and terrain, but it adds up on a long night ride. Start with a full charge and plan the route with margin.

### Voltage and Wiring Compatibility
The kit draws 2.9 amps, and the figure is stated for a particular supply voltage. Electric dirt bikes run 48V to 104V main packs, so a lighting kit normally needs a suitable converter or an accessory supply that drops the voltage to the level the light is designed for. Do not connect a light directly to a high-voltage pack. Ask a competent mechanic or contact our team through the [contact page](${D}/contact/) to confirm that your bike has a suitable supply before you fit one.

### Mounting and Aiming
Mount the light solidly so it does not vibrate, aim it slightly below horizontal so oncoming riders are not dazzled, and check the beam on a flat surface before you ride. Route cables away from the chain, the wheels and sharp edges, and use proper connectors that are sealed against water. Re-check the fixings after your first ride.

### Safety and the Law
Night riding adds risk. Ride only on private property or designated areas that allow night use, tell someone where you are going, wear a full-face helmet, gloves and boots, and carry a spare light. Adding a headlight does not make an off-road bike road legal, and an unregistered bike cannot be ridden on public roads. Read our guide on [whether electric dirt bikes are legal in Australia](${D}/blog/are-electric-dirt-bikes-legal-in-australia/).

### Warranty
Fitting accessories correctly should not affect your bike's warranty, but faults caused by incorrect installation are not covered. If you are unsure, ask us before you fit it. Browse the [accessories range](${D}/accessories/) and the [electric dirt bike range](${D}/electric-dirt-bikes/).`,
    faqs: [
      { q: 'How bright is the Baja Designs Squadron Pro?', a: `The [Baja Designs Squadron Pro LED headlight kit](${D}/shop/baja-designs-squadron-headlight/) lists 4,600 lumens from four Cree LEDs, a 40 watt rating and an IP69K waterproof rating. It costs $360.` },
      { q: 'Will a light kit drain my electric dirt bike battery?', a: `A 40 watt light uses about 40Wh per hour at full output. On a 2,400Wh battery that is under 2 percent per hour, so the effect on range is small but worth planning for on long night rides.` },
      { q: 'Can I connect the light straight to the main battery?', a: `No. Main packs run at 48V to 104V, so lights need a suitable converter or accessory supply. Have a competent mechanic fit it, or ask us on the [contact page](${D}/contact/).` },
      { q: 'Does fitting a headlight make my bike road legal?', a: `No. A light does not make an unregistered off-road bike legal for public roads. Read our guide to [electric dirt bike laws](${D}/blog/are-electric-dirt-bikes-legal-in-australia/).` },
      { q: 'Will fitting a light affect my warranty?', a: `Correct installation should not, but faults caused by incorrect installation are not covered. Ask us before you fit it if you are unsure.` },
    ],
  },

  'best-electric-motorcycle-australia-2026': {
    content: `The best electric motorcycle in Australia depends on whether you want to ride on the road, off-road or both. Registered road bikes need to meet registration and licence rules, while off-road electric motorcycles are for private property and designated off-road areas. This guide lists the electric motorcycles and mopeds in our range by use, with the specifications and prices from our product listings, and explains how to choose. We have not run independent tests, so picks are based on listed specifications, and range and speed figures are manufacturer maximums.

### Best Road-Legal Electric Moped: NIU NQi GT
The [NIU NQi GT](${D}/shop/niu-nqi-gt-electric-moped/) is $5,990. It is listed as a road-legal, LAMS-approved electric moped with a 3,000 watt motor, a 72V 26Ah dual removable lithium battery, a 70 km/h top speed, up to 100 km of range with both batteries and a weight of 98 kg. Removable batteries make home charging easy. Check the [NIU website](https://global.niu.com/) for brand information.

### Best Value Road Moped: Super Soco CPx
The [Super Soco CPx](${D}/shop/super-soco-cpx-electric-moped/) is $5,490. It lists a 3kW motor, a 60V 30Ah removable lithium battery, a 65 km/h top speed, up to 90 km of range and an 85 kg weight. It suits city and suburban commuting for riders with the right licence.

### Best Premium Road Option: Vmoto Soco TC-Max
The [Vmoto Soco TC-Max](${D}/shop/vmoto-soco-tc-max-electric/) is $8,990. It lists a 5kW motor, dual removable 72V batteries with 4.8 kWh in total, a 95 km/h top speed, up to 120 km of range, a 117 kg weight and WP adjustable suspension. It is the most capable road bike in this group. See the [Vmoto website](https://vmoto.com/).

### Best Off-Road Electric Motorcycle: Talaria Dragon
The [Talaria Dragon Full-Size Enduro](${D}/shop/talaria-dragon-enduro/) is $13,990. It lists 28kW of peak power, an 88V 58Ah battery (5,100Wh), a 110 km/h top speed, up to 150 km of range, a weight of 100 kg and 21-inch front and 18-inch rear wheels. It is an off-road bike for private property and designated off-road areas.

### Best High-Power Enduro: Sur-Ron Storm Bee Enduro
The [Sur-Ron Storm Bee Enduro](${D}/shop/sur-ron-storm-bee-enduro/) is $15,490. It lists 22.5kW, a 104V 55Ah battery (5,720Wh), a 110 km/h top speed, up to 120 km of range and a 127 kg weight, with Eco, Rain, Sport and Turbo modes plus reverse.

### Best for Motocross: Stark Varg EX
The [Stark Varg EX 80HP](${D}/shop/stark-varg-ex-80hp/) is $18,990 and the [Varg Alpha 60HP](${D}/shop/stark-varg-alpha-60hp/) is $16,990. They are competition off-road bikes with 6.0 kWh batteries and KYB suspension. See [electric motocross bikes](${D}/electric-motocross-bikes/).

### Road or Off-Road: Know the Difference
Road bikes need registration, a compliant specification and the correct licence. Off-road bikes cannot be ridden on public roads. Read our [e-bike laws guide](${D}/electric-motor-bikes/e-bike-laws-australia/), our [Australian electric motorcycle guide](${D}/blog/australian-electric-motorcycle-guide-2026/) and the [registration guide for NSW](${D}/blog/electric-bike-registration-nsw-guide/).

### Buying With Confidence
Every model here is supplied through Electric Dirt Bike Australia with a 12-month Australian warranty on EDBA-supplied bikes, free freight over $1,500 and dispatch from Mittagong NSW, and crypto or PayID payments get 10 percent off. Browse all [electric motorcycles](${D}/electric-motorcycles/) and [mopeds](${D}/electric-motor-bikes/commuter-mopeds/), or ask a question on the [contact page](${D}/contact/).`,
    faqs: [
      { q: 'What is the best electric motorcycle in Australia?', a: `For road use, the [Vmoto Soco TC-Max](${D}/shop/vmoto-soco-tc-max-electric/) at $8,990 is the most capable in our range. For off-road, the [Talaria Dragon](${D}/shop/talaria-dragon-enduro/) at $13,990 leads on listed range and power.` },
      { q: 'Which electric motorcycle is LAMS approved?', a: `The [NIU NQi GT](${D}/shop/niu-nqi-gt-electric-moped/) is listed as LAMS approved. Always confirm approval in writing with the seller and your state authority.` },
      { q: 'How far can an electric motorcycle go?', a: `Listed maximums are up to 100 km for the NIU NQi GT with dual batteries, 120 km for the Vmoto Soco TC-Max and 150 km for the Talaria Dragon. Real range depends on speed, load and terrain.` },
      { q: 'Are the off-road electric motorcycles road legal?', a: `No. They are for private property and designated off-road areas unless registered for road use. See the [e-bike laws guide](${D}/electric-motor-bikes/e-bike-laws-australia/).` },
      { q: 'What warranty and delivery do you offer?', a: `EDBA-supplied bikes carry a 12-month Australian warranty, freight is free over $1,500 and crypto or PayID payments get 10 percent off.` },
    ],
  },

  // ---- FAQ-only upgrades: the body copy of these posts already runs past 1,500 words ----
  'electric-bike-laws-qld-2026': { faqs: [
    { q: 'What are the electric bike laws in Queensland in 2026?', a: `A legal e-bike has a maximum continuous motor output of 250 watts and the motor assists only up to 25 km/h. Rules changed on 31 August 2026, including age and licence conditions. Confirm details on the official [Queensland Government page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules).` },
    { q: 'Do I need a licence to ride an e-bike in Queensland?', a: `The Queensland page lists riders as needing to be 16 or older and to hold a valid driver licence, which can be a Learner licence, with exemptions such as supervised riders and designated recreational areas. Read the exact conditions on the official page.` },
    { q: 'What is the fine for riding without a licence or helmet in Queensland?', a: `The Queensland page lists $518 for each of these offences. Fines change, so check the official page for current amounts.` },
    { q: 'Do these rules apply to Sur-Ron and Talaria dirt bikes?', a: `No. Higher-powered off-road bikes are not 250W e-bikes. They are for private property and designated off-road areas. See our [guide to electric dirt bike laws](${D}/blog/are-electric-dirt-bikes-legal-in-australia/).` },
    { q: 'Where can I buy a compliant e-bike?', a: `Browse the pedal-assist range on our [electric bikes page](${D}/electric-bikes/) and check the compliance label before you buy.` },
  ] },
  'electric-bike-regulations-nsw-2026': { faqs: [
    { q: 'What are the NSW e-bike rules in 2026?', a: `The NSW Government says e-bikes up to a set power limit can be ridden like bicycles, and a lower 250 watt cap and a certification requirement are being phased in. Confirm current rules on the [NSW Government page](https://www.nsw.gov.au/driving-boating-and-transport/bikes-e-bikes-e-scooters).` },
    { q: 'Do I need to register an e-bike in NSW?', a: `A legal e-bike is treated like a bicycle, so it does not need registration and the rider does not need a driver licence. A helmet is required.` },
    { q: 'When does the EN 15194 requirement start in NSW?', a: `The NSW page says that from 1 March 2029 e-bikes used on NSW roads must comply with EN 15194. Ask the seller for the certification before you buy.` },
    { q: 'What is the fine for riding without a helmet in NSW?', a: `The NSW page lists a fine from $423. Check the official page for the latest figure.` },
    { q: 'Are electric dirt bikes covered by the e-bike rules?', a: `No. High-powered off-road bikes are for private property and designated off-road areas. Read our [guide to electric dirt bike laws](${D}/blog/are-electric-dirt-bikes-legal-in-australia/).` },
  ] },
  'australian-electric-motorcycle-guide-2026': { faqs: [
    { q: 'What electric motorcycles can I register in Australia?', a: `Models sold for road use include the [NIU NQi GT](${D}/shop/niu-nqi-gt-electric-moped/), [Super Soco CPx](${D}/shop/super-soco-cpx-electric-moped/) and [Vmoto Soco TC-Max](${D}/shop/vmoto-soco-tc-max-electric/). Confirm registration and licence rules with your state authority.` },
    { q: 'What does LAMS mean?', a: `LAMS is the Learner Approved Motorcycle Scheme, which lets learner and provisional riders use approved motorcycles. The NIU NQi GT is listed as LAMS approved.` },
    { q: 'How much does an electric motorcycle cost in Australia?', a: `Road models in our range run from $5,490 to $8,990, and off-road electric motorcycles run higher, up to $18,990 for the Stark Varg EX.` },
    { q: 'Can I ride an electric dirt bike on the road?', a: `Not unless it is registered for road use. Most are for private property and designated off-road areas. See the [e-bike laws guide](${D}/electric-motor-bikes/e-bike-laws-australia/).` },
    { q: 'Do electric motorcycles come with a warranty?', a: `EDBA-supplied bikes carry a 12-month Australian warranty. Free freight applies over $1,500.` },
  ] },
  'e-ride-pro-australia-buyers-guide': { faqs: [
    { q: 'How much is the E-Ride Pro SS 2.0?', a: `The [E-Ride Pro SS 2.0](${D}/shop/e-ride-pro-ss-2-0/) is $8,690 with 12kW of peak power, a 72V 40Ah battery and a 95 km/h top speed.` },
    { q: 'How much is the E-Ride Pro SR?', a: `The [E-Ride Pro SR](${D}/shop/e-ride-pro-sr/) is $9,990 with 15kW of peak power, a 72V 45Ah battery and a 100+ km/h top speed.` },
    { q: 'What is the range of the E-Ride Pro bikes?', a: `The listed maximums are up to 105 km for the SS 2.0 and up to 120 km for the SR. Real range depends on rider weight, terrain and mode.` },
    { q: 'Is the E-Ride Pro road legal?', a: `It is an off-road bike for private property and designated off-road areas. See the [e-bike laws guide](${D}/electric-motor-bikes/e-bike-laws-australia/).` },
    { q: 'What warranty and delivery come with an E-Ride Pro?', a: `A 12-month Australian warranty and free freight on orders over $1,500, with dispatch from Mittagong NSW. See the [E-Ride Pro range](${D}/brands/e-ride-pro/).` },
  ] },
  'e-ride-pro-ss-2-0-vs-sr-specs-price': { faqs: [
    { q: 'What is the difference between the E-Ride Pro SS 2.0 and the SR?', a: `The SR has 15kW of peak power and a 72V 45Ah battery against 12kW and 72V 40Ah on the SS 2.0, and costs $1,300 more.` },
    { q: 'Which is faster, the SS 2.0 or the SR?', a: `The [SR](${D}/shop/e-ride-pro-sr/) lists a 100+ km/h top speed and the [SS 2.0](${D}/shop/e-ride-pro-ss-2-0/) lists 95 km/h.` },
    { q: 'Which has the longer range?', a: `The SR lists up to 120 km and the SS 2.0 up to 105 km, both manufacturer maximums.` },
    { q: 'Which is better for a beginner?', a: `Both are powerful bikes. Beginners should start in the softest power mode, or consider a lighter option from the [electric dirt bike range](${D}/electric-dirt-bikes/).` },
    { q: 'What is the price difference?', a: `The SS 2.0 is $8,690 and the SR is $9,990. Both include a 12-month warranty and free freight.` },
  ] },
  'e-bike-safety-australia-guide': { faqs: [
    { q: 'Do I need a helmet to ride an e-bike?', a: `Yes. Wear a properly fastened, approved helmet every time you ride. For off-road electric dirt bikes, wear a full-face helmet, gloves and boots.` },
    { q: 'How should I charge an e-bike battery safely?', a: `Use the supplied charger, charge in a ventilated area, avoid charging unattended and stop using a swollen or damaged pack. See the [Queensland Fire Department guidance](https://www.fire.qld.gov.au/safety-education/battery-and-charging-safety/lithium-ion-battery-safety).` },
    { q: 'How should I store an e-bike battery?', a: `Store it cool and dry, away from heat sources and combustible material, and avoid leaving it fully charged or fully flat for long periods. See [Battery University](https://batteryuniversity.com/article/bu-808-how-to-prolong-lithium-based-batteries).` },
    { q: 'Can children ride e-bikes?', a: `Children should ride age-matched bikes under adult supervision with protective gear. See the [kids electric motorbikes](${D}/electric-motor-bikes/kids/).` },
    { q: 'Where do I find my state rules?', a: `Read your state authority's page, and our [e-bike laws guide](${D}/electric-motor-bikes/e-bike-laws-australia/) for an overview.` },
  ] },
  'childs-dirt-bike-australia-electric-options': { faqs: [
    { q: 'What is the best electric dirt bike for a young child?', a: `The [EDBA Moto 50](${D}/shop/edba-moto-50-kids-beginner/) at $1,290 is listed for ages 3 to 6 with a 6 km/h top speed and a 30 kg rider limit.` },
    { q: 'What is the best electric dirt bike for ages 4 to 10?', a: `The [KTM SX-E 5](${D}/shop/ktm-sx-e-5-youth-electric/) at $7,990 and [Husqvarna EE 5](${D}/shop/husqvarna-ee-5-youth-electric/) at $7,490 have three parent-selectable power modes.` },
    { q: 'What bike suits ages 6 to 14?', a: `The [OSET 20.0 Racing Junior](${D}/shop/oset-20-0-racing-junior/) at $4,290 lists ages 6 to 14 and a parent-adjustable maximum speed.` },
    { q: 'How do I size a child electric dirt bike?', a: `Size by the rider: they should reach the ground comfortably, hold the bars with relaxed elbows and reach the brake levers without stretching.` },
    { q: 'Where can children ride?', a: `On private property or designated off-road areas, under adult supervision, with a helmet, gloves and boots.` },
  ] },
  'adult-electric-dirt-bike-australia-best-models': { faqs: [
    { q: 'What is the best electric dirt bike for adults?', a: `It depends on use: the [Sur-Ron Light Bee X](${D}/shop/sur-ron-light-bee-x/) for light trail riding, the [Talaria Sting R MX4](${D}/shop/talaria-sting-r-mx4/) for hills, and bikes like the [Talaria Dragon](${D}/shop/talaria-dragon-enduro/) for full-size enduro.` },
    { q: 'How much does an adult electric dirt bike cost?', a: `Adult bikes run from about $5,500 for light trail bikes to over $13,000 for full-size enduro bikes.` },
    { q: 'Should I choose 60V or 72V?', a: `Higher voltage platforms generally deliver more power, but compare the battery capacity, weight and price of each model on its product page.` },
    { q: 'Can I ride an adult electric dirt bike on the road?', a: `Not unless it is registered for road use. See the [e-bike laws guide](${D}/electric-motor-bikes/e-bike-laws-australia/).` },
    { q: 'Do you deliver Australia-wide?', a: `Yes, with free freight on orders over $1,500. See the [shipping and delivery page](${D}/shipping-and-delivery/).` },
  ] },
  'high-performance-electric-dirt-bike-australia': { faqs: [
    { q: 'What counts as a high performance electric dirt bike?', a: `Bikes with 12kW or more of peak power, a large high-discharge battery and serious suspension, from about $8,500 to near $19,000.` },
    { q: 'What is the most powerful electric dirt bike you sell?', a: `The [Stark Varg EX 80HP](${D}/shop/stark-varg-ex-80hp/) lists 80 horsepower (60kW) at $18,990.` },
    { q: 'What are the 12kW options?', a: `The Velimotor VMX12 lists 12kW at $8,990, the RFN Ares Rally Pro lists 12.5kW at $8,490 and the [E-Ride Pro SS 2.0](${D}/shop/e-ride-pro-ss-2-0/) lists 12kW at $8,690.` },
    { q: 'Are high performance electric dirt bikes road legal?', a: `They are for private property and designated off-road areas unless registered for road use. See the [e-bike laws guide](${D}/electric-motor-bikes/e-bike-laws-australia/).` },
    { q: 'Can a beginner ride a high performance bike?', a: `Use the softest power mode, and consider starting on a lighter bike. Always wear full protective gear.` },
  ] },
  '125cc-dirt-bike-australia-electric-alternatives': { faqs: [
    { q: 'What is the electric equivalent of a 125cc dirt bike?', a: `Electric bikes have no engine size, so compare peak power, battery capacity and weight instead. See the [electric dirt bike range](${D}/electric-dirt-bikes/).` },
    { q: 'What replaces a 250cc dirt bike?', a: `Full-size electric bikes such as the [Talaria Dragon](${D}/shop/talaria-dragon-enduro/) and the [Stark Varg](${D}/shop/stark-varg-alpha-60hp/) are the closest in power class.` },
    { q: 'Do electric dirt bikes need fuel or oil?', a: `No fuel or engine oil. Charging replaces refuelling, though gearbox oil, chain and tyres still need care.` },
    { q: 'Are electric dirt bikes quieter?', a: `Yes, they are far quieter than petrol bikes, which can help with noise restrictions at some locations.` },
    { q: 'Do you sell petrol dirt bikes?', a: `No. We sell electric bikes only. This guide helps riders switching from petrol.` },
  ] },
  'kids-ebike-australia-evo-racing-lil-rippa-compared': { faqs: [
    { q: 'What are the EVO Racing kids bike sizes?', a: `The [16 inch](${D}/shop/evo-racing-16-electric-bike/) is $1,599, the [18 inch](${D}/shop/evo-racing-18-kids-electric-bike/) is $1,999 and the [20 inch](${D}/shop/evo-racing-20-electric-bike/) is $2,399.` },
    { q: 'What is the Lil Rippa?', a: `The [Lil Rippa 16 inch](${D}/shop/lil-rippa-16-kids-fat-electric-bike/) is a $1,999 kids fat tyre electric bike with a 500W hub motor and a removable 36V 13Ah battery.` },
    { q: 'What is the RFN Warrior Kids SX-E500?', a: `The [WARRIOR KIDS SX-E500](${D}/shop/rfn-warrior-kids-sx-e500-electric-bike/) is $1,899 with a 36V 7.5Ah hot-swappable battery and an adjustable speed limit.` },
    { q: 'How do I choose a size?', a: `Match the bike to the child's height and weight, and make sure they can reach the ground and the brakes comfortably.` },
    { q: 'What warranty applies?', a: `Ampd Bros kids e-bikes list a 1-year nationwide warranty and RFN products list supplier terms, shown on each product page.` },
  ] },
  'electric-moped-vs-e-scooter-australia-lams-guide': { faqs: [
    { q: 'What is the difference between an electric moped and an e-scooter?', a: `Electric mopeds and motorcycles are road vehicles that need registration and a licence. E-scooter rules are set by each state.` },
    { q: 'Which electric mopeds are LAMS approved?', a: `The [NIU NQi GT](${D}/shop/niu-nqi-gt-electric-moped/) is listed as LAMS approved. Confirm in writing with the seller.` },
    { q: 'How much do electric mopeds cost?', a: `Prices are $5,490 for the [Super Soco CPx](${D}/shop/super-soco-cpx-electric-moped/), $5,990 for the NIU NQi GT and $8,990 for the [Vmoto Soco TC-Max](${D}/shop/vmoto-soco-tc-max-electric/).` },
    { q: 'How far can an electric moped go?', a: `Listed maximums are 90 km for the Super Soco CPx, up to 100 km for the NIU with dual batteries and 120 km for the Vmoto. Real range varies.` },
    { q: 'Do you sell e-scooters?', a: `We do not sell kick scooters. Check your state's rules if you are considering one.` },
  ] },
  'fast-electric-bikes-australia-fastest-e-bikes-by-category': { faqs: [
    { q: 'What are the fastest electric bikes in Australia?', a: `Among the bikes we sell, the E-Ride Pro-SS 2.0 lists 95 km/h, the Sur-Ron Ultra Bee 90 km/h and the Talaria Sting R MX4 85 km/h. All are off-road bikes for private property.` },
    { q: 'Are fast electric bikes legal on the road?', a: `Road-legal electric bikes are limited to 25 km/h assist and 250W continuous power. Faster bikes are for private property and designated off-road parks unless they are road registered. See the [e-bike laws guide](/electric-motor-bikes/e-bike-laws-australia/).` },
    { q: 'Does a faster electric bike cost more?', a: `Generally yes. Higher voltage and power need larger batteries and controllers. Our range runs from $2,790 for a road-legal commuter to $10,990 for the Sur-Ron Ultra Bee.` },
    { q: 'Can I get a faster bike for a teenager?', a: `The [Segway X160 Compact](/shop/segway-x160-compact/) lists 50 km/h and suits teens and smaller adults. Always supervise and use full safety gear.` },
    { q: 'What decides how fast an electric bike goes?', a: `Motor power, battery voltage, controller limits, weight and gearing all matter, and manufacturer top speeds are measured in ideal conditions.` },
  ] },
};
