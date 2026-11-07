// Legacy post rewrites, batch A. Facts come only from the product catalogue in site.ts and the store policy pages.
import type { LegacyUpgrade } from './legacy-upgrades';
const D = 'https://electricdirtbikeaustralia.com.au';

export const UPGRADES_A: Record<string, LegacyUpgrade> = {
  'sur-ron-vs-talaria-australia-buyers-guide': {
    content: `Choosing between the Sur-Ron Light Bee X and the Talaria Sting R MX4 is the most common decision for Australian riders stepping into high-performance electric dirt bikes. Both are light, quiet, fast off the line and legal to ride on private property and in designated off-road areas, so the real question is which trade-offs suit you. This guide compares the two bikes using the specifications listed in our own catalogue, then walks through who each bike suits, what it costs to own, and how to decide.

### The Short Answer
The [Sur-Ron Light Bee X](${D}/shop/sur-ron-light-bee-x/) is the lighter and cheaper bike at $6,490. The [Talaria Sting R MX4](${D}/shop/talaria-sting-r-mx4/) costs $7,290, makes more peak power and carries a bigger battery. If you want the nimblest bike and the widest range of upgrade parts, start with the Sur-Ron. If you are heavier, ride steep terrain or want a sealed gearbox and more reserve power, the Talaria is the stronger fit. The rest of this guide shows why.

### Specifications Side by Side
The Light Bee X lists 6kW peak power, a 60V 40Ah battery (2,400Wh), a 75 km/h top speed in off-road mode, up to 100 km in eco mode, a 3.5 hour charge and a 50 kg weight. The Sting R MX4 lists 8kW peak power, a 60V 45Ah battery (2,700Wh), an 85 km/h unrestricted top speed, up to 110 km of range, a 3.5 hour charge and a 63 kg weight. Range and top speed figures are manufacturer maximums measured in ideal conditions, so treat them as a ceiling, not a promise. Your weight, terrain, rider mode and tyre pressure decide the real number.

### Drivetrain: Belt Versus Sealed Gearbox
The Light Bee X uses a belt primary drive linked to a chain. That keeps it very quiet and light, and it is why the bike feels so flickable on tight singletrack. The Sting R MX4 uses a sealed oil-bath gearbox with a 420 chain. A sealed gearbox keeps dust, mud and water away from the drive, which matters if your rides include creek crossings, sand or fine dust. A belt is not fragile when it is set up correctly, but it does need inspection and the right tension, while a gearbox asks for oil changes at the intervals the manufacturer gives.

### Power, Battery and Hills
Two extra kilowatts is a 33 percent increase in peak power, and the Talaria battery holds 300Wh more energy, about 12.5 percent. On a steep fire trail or a long climb with a heavier rider, that reserve shows up as stronger pull and less time spent at the limit of the controller. On flat, tight trails the difference is smaller, and the lighter Sur-Ron can feel just as quick because there is simply less bike to move. Both bikes charge in around 3.5 hours with the standard charger, and a [10A compact touring fast charger](${D}/shop/10a-compact-touring-charger/) is available for $240 if you want shorter stops on ride days.

### Weight and Handling
There is a 13 kg difference between the two bikes, which is about a quarter of the Sur-Ron's total weight. That is noticeable when you lift the front wheel, push the bike up a loading ramp, or pick it up after a fall. Newer riders and smaller riders often prefer the lighter bike for confidence. Experienced riders who carry speed through rough ground often prefer the extra mass and power of the Talaria because it feels planted.

### Price and Value
At $6,490 the Light Bee X works out to about $2.70 per watt-hour of battery. The Sting R MX4 at $7,290 also lands at about $2.70 per watt-hour, so you are paying for the extra capacity and power at the same rate rather than at a premium. The $800 difference buys 2kW more peak power, 300Wh more battery and a sealed gearbox. Both bikes ship with a 12-month Australian warranty from Electric Dirt Bike Australia, and free freight applies to orders over $1,500, so the shipping cost is the same for either bike.

### Spare Batteries and Running Costs
Replacement packs are available if you want to ride longer or keep a second pack charged. A genuine [Sur-Ron 60V 40Ah battery](${D}/shop/sur-ron-oem-60v-40ah-replacement/) is $1,790, and a genuine [Talaria 60V 45Ah battery](${D}/shop/talaria-oem-60v-45ah-replacement/) is $1,890. Neither bike uses fuel or engine oil, so ongoing costs are tyres, brake pads, chain or belt wear, and the periodic gearbox oil on the Talaria. Charging a 2.4 to 2.7 kWh pack at home costs only a few dollars at typical household tariffs, which you can confirm on your own bill.

### Riding Where It Is Allowed
Both bikes are high-performance recreational vehicles for private property and designated off-road parks. They are not supplied road legal, and state rules differ on what can be ridden where. Read our [e-bike laws guide](${D}/electric-motor-bikes/e-bike-laws-australia/) and the official [Sur-Ron website](https://www.surron.com/) before you plan a ride, and always check with the land manager before riding on public land.

### Which One Should You Buy
Choose the Sur-Ron Light Bee X if you are under about 85 kg, ride tight technical trails, want the lightest bike and plan to modify it over time. Choose the Talaria Sting R MX4 if you ride steeper terrain, want a bigger battery and more peak power, or like the idea of a sealed drivetrain. If neither suits, compare them against the rest of the [Sur-Ron range](${D}/electric-dirt-bikes/sur-ron/) and the full [electric dirt bike range](${D}/electric-dirt-bikes/), or ask our Mittagong team on the [contact page](${D}/contact/) to talk through your riding.`,
    faqs: [
      { q: 'Is the Sur-Ron Light Bee X or the Talaria Sting R MX4 faster?', a: `The Talaria Sting R MX4 lists an unrestricted 85 km/h top speed and 8kW peak power. The [Sur-Ron Light Bee X](${D}/shop/sur-ron-light-bee-x/) lists 75 km/h in off-road mode and 6kW. In practice the Talaria is quicker on climbs and at the top end, while the lighter Sur-Ron can feel just as quick on tight trails.` },
      { q: 'How much do the Light Bee X and the Sting R MX4 cost in Australia?', a: `The Sur-Ron Light Bee X is $6,490 and the [Talaria Sting R MX4](${D}/shop/talaria-sting-r-mx4/) is $7,290. Both include a 12-month Australian warranty, and freight is free on orders over $1,500. Paying with crypto or PayID gives a 10 percent discount.` },
      { q: 'Which bike is better for a heavier rider?', a: `The Talaria has the bigger battery (2,700Wh against 2,400Wh), 2kW more peak power and a sturdier sealed gearbox, so heavier riders and steep terrain usually favour it. The Sur-Ron is lighter at 50 kg and suits smaller riders and technical trails.` },
      { q: 'Can I ride either bike on the road?', a: `Both are supplied as off-road bikes for private property and designated off-road areas. Road use depends on the model, registration and your state rules, so read our [e-bike laws guide](${D}/electric-motor-bikes/e-bike-laws-australia/) and check with your state transport authority first.` },
      { q: 'How long does it take to charge each bike?', a: `Both list a charge time of about 3.5 hours on the standard charger. A [10A compact touring charger](${D}/shop/10a-compact-touring-charger/) is available for $240 if you want faster top-ups between rides.` },
    ],
  },

  'stark-varg-motocross-revolution-australia': {
    content: `When Stark Future launched an electric motocross bike with petrol-class power, many riders doubted that a battery could last a full moto in Australian heat and dirt. The Stark Varg is built to answer that question, and two versions are available through Electric Dirt Bike Australia. This guide explains what the Varg is, how the Varg EX 80HP and Varg Alpha 60HP differ, what the listed figures mean for track and trail riding, and what to consider before you spend close to $19,000 on an electric motocross bike.

### What the Stark Varg Is
The Stark Varg is a full-size electric motocross bike made by [Stark Future](https://starkfuture.com/). It is built around a 6.0 kWh battery pack, KYB suspension with 310 mm of travel, and a motor that makes up to 80 horsepower. It weighs 118 kg. The bike is positioned as a competition-grade machine, not an entry-level trail bike, and it is priced like one.

### Varg EX 80HP Versus Varg Alpha 60HP
The [Stark Varg EX 80HP](${D}/shop/stark-varg-ex-80hp/) is $18,990 and lists 80 horsepower (60kW) and 938 Nm of rear-wheel torque. The [Stark Varg Alpha 60HP](${D}/shop/stark-varg-alpha-60hp/) is $16,990 and lists 60 horsepower (45kW) and 820 Nm. Both use the 6.0 kWh battery, KYB 48 mm closed-cartridge suspension with 310 mm of travel, and share the 118 kg weight. The $2,000 difference buys the extra 20 horsepower and 118 Nm of torque. If you race at an advanced level, the EX is the obvious choice. If you want a powerful, controllable motocross bike without paying for the top output, the Alpha is a sensible step down.

### Why Torque Numbers Look So Big
A figure like 938 Nm is measured at the rear wheel and is far higher than the torque on a petrol motocross engine, because an electric motor makes its torque from zero revolutions and the figure includes the drive ratio. It explains why electric bikes feel so strong off the line. It does not mean the bike is uncontrollable, because the power delivery is programmable.

### Programmable Power Modes
The Varg lets you change how the power is delivered through its dash, so you can soften the response for a novice session, a wet track or a tight trail, then switch to the full output for an open track. That flexibility is one of the main reasons riders look at electric motocross, because one bike can be gentle for a learner and sharp for an experienced rider. Always set the softest mode first when anyone new rides the bike.

### Battery Life and Charging
The Varg EX lists up to six hours of trail riding or a full motocross heat, and a 6.0 kWh pack. Treat the runtime as an upper figure: a hard-ridden motocross moto uses far more energy than easy trail riding. Plan a charging setup at your track or property, check the charger specification with our team before you buy, and keep batteries out of direct heat while charging. The NSW Government publishes guidance on [lithium-ion battery safety](https://www.nsw.gov.au/housing-and-construction/safety-home/electrical-safety/lithium-ion-batteries-and-e-micromobility-devices) that applies to charging any large pack.

### Running Costs Compared With Petrol
An electric bike removes fuel, oil changes, air filters, spark plugs and the engine rebuilds that come with a high-revving petrol motor. You still pay for tyres, brake pads, chain, sprockets, suspension servicing and the battery over its life. The saving depends on how much you ride, and the high purchase price means the saving rarely pays for the bike on running costs alone. The case for the Varg is noise, power delivery, convenience and being able to ride places that restrict petrol bikes.

### Where You Can Ride It
The Varg is a competition bike for private property, motocross tracks and designated off-road areas. Rules for electric classes, noise limits and sign-on differ between clubs and tracks, so ask your local club before you commit. Our [electric motocross bikes page](${D}/electric-motocross-bikes/) lists the current range, and our [e-bike laws guide](${D}/electric-motor-bikes/e-bike-laws-australia/) explains where off-road bikes can legally be ridden.

### Is the Varg Worth It
If you want a premium, high-power electric motocross bike and have the budget, the Varg is one of the most capable machines in the category. If you mainly ride trails, an [electric dirt bike](${D}/electric-dirt-bikes/) from the $5,000 to $8,000 range such as the [Sur-Ron Light Bee X](${D}/shop/sur-ron-light-bee-x/) is far cheaper and lighter. Every bike from Electric Dirt Bike Australia includes a 12-month warranty, free freight over $1,500 and dispatch from Mittagong NSW, and you can compare options or ask questions through our [contact page](${D}/contact/).`,
    faqs: [
      { q: 'How much does the Stark Varg cost in Australia?', a: `The [Stark Varg EX 80HP](${D}/shop/stark-varg-ex-80hp/) is $18,990 and the [Stark Varg Alpha 60HP](${D}/shop/stark-varg-alpha-60hp/) is $16,990. Both include a 12-month warranty and free freight, and crypto or PayID payments get 10 percent off.` },
      { q: 'What is the difference between the Varg EX and the Varg Alpha?', a: `The EX makes 80 horsepower (60kW) and 938 Nm of torque, the Alpha makes 60 horsepower (45kW) and 820 Nm. Battery size (6.0 kWh), KYB suspension with 310 mm of travel and weight (118 kg) are the same on both bikes.` },
      { q: 'How long does the Varg battery last?', a: `The listed runtime is up to six hours of trail riding or a full motocross heat from the 6.0 kWh pack. Hard track riding uses the battery faster than easy trail riding, so treat the figure as a maximum.` },
      { q: 'Is the Stark Varg road legal?', a: `No. It is a competition off-road bike for private property, motocross tracks and designated off-road areas. Read our [e-bike laws guide](${D}/electric-motor-bikes/e-bike-laws-australia/) for where each type of bike can be ridden.` },
      { q: 'Can a beginner ride a Stark Varg?', a: `The power can be reduced with programmable modes, which helps, but the bike weighs 118 kg and is built for experienced riders. Beginners usually start on a lighter bike such as the [Sur-Ron Light Bee X](${D}/shop/sur-ron-light-bee-x/) at 50 kg.` },
    ],
  },

  'are-electric-dirt-bikes-legal-in-australia': {
    content: `Are electric dirt bikes legal in Australia? The short answer is yes, as long as you ride them in the right place. High-powered electric dirt bikes such as the Sur-Ron Light Bee X, Talaria Sting R MX4 and Stark Varg are sold as off-road recreational vehicles. They can be ridden on private property and in designated off-road areas, but they are not road legal unless the specific model has been registered for road use. This guide explains the rules in plain language and shows how to check what applies in your state. It is general information, not legal advice, and rules change, so always confirm with your state authority.

### The Two Types of Electric Bike in Australian Law
Australian states separate power-assisted bicycles from motorcycles. A power-assisted e-bike typically has a motor limited to 250 watts of continuous power, assists the rider while they pedal and has a compliance label such as EN 15194 or an equivalent. Anything more powerful, or that can be ridden by throttle alone beyond the limits, is treated as a motor vehicle. High-performance electric dirt bikes have peak outputs of 6kW to 80 horsepower, so they sit in the motor vehicle category, not the bicycle one. Our [e-bike laws guide](${D}/electric-motor-bikes/e-bike-laws-australia/) explains the difference in more detail.

### Private Property
You can generally ride an electric dirt bike on private property with the owner's permission, without registration or a motorcycle licence. Local councils can still apply noise rules or land-use conditions, and a small number of properties have insurance or lease conditions. Children should always ride under adult supervision and wear a helmet, gloves and boots. The [kids electric motorbikes range](${D}/electric-motor-bikes/kids/) is designed for this kind of use.

### Motocross Parks and Designated Off-Road Areas
Commercial tracks and designated riding parks set their own rules. Many accept electric bikes and some run separate electric classes, while others have age, helmet or sign-on requirements. Because electric bikes are quiet, some parks welcome them where noise limits restrict petrol bikes. Call the park before you travel, tell them the bike model, and ask about conditions.

### Public Roads and Trails
An unregistered electric dirt bike cannot be ridden on public roads or on public tracks where vehicle registration is required. This includes many state forest roads. Riding an unregistered bike there can lead to fines and a possible impound, exactly as it would for a petrol dirt bike. If you want a bike you can legally ride on the road, look at registered road models such as the [electric mopeds and motorcycles](${D}/electric-motor-bikes/commuter-mopeds/) or the [NIU NQi GT](${D}/shop/niu-nqi-gt-electric-moped/), which is sold as a road-legal, LAMS-approved electric moped.

### Registration Pathways
Some models can be configured for road registration, but requirements vary by state and by model, and not every bike is eligible. Registration typically requires compliant lighting, mirrors and identification, and the rider must hold the correct licence class. Check the registration requirements with your state transport authority before you buy, because the bike you want may not be eligible. See our guide to [electric bike registration in NSW](${D}/blog/electric-bike-registration-nsw-guide/) for an example.

### Licence and Age Rules
Because licensing and age rules vary by state, no single answer applies across Australia. As one example, Queensland introduced rules for riders of certain e-bikes from 31 August 2026, including age and licence conditions, which are published on the [Queensland Government e-bike rules page](https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules). Other states publish their own pages, such as [NSW](https://www.nsw.gov.au/driving-boating-and-transport/bikes-e-bikes-e-scooters) and [Victoria](https://transport.vic.gov.au/road-and-active-transport/active-transport/bicycles/electric-bikes). Read your own state's page before you ride.

### Insurance and Liability
Compulsory third party insurance applies to registered vehicles, not to unregistered off-road bikes. That means you are responsible for your own cover on private property, and the property owner may have conditions. Read our [electric dirt bike insurance guide](${D}/blog/electric-dirt-bike-insurance-australia-guide/) for the options.

### Practical Checklist Before You Ride
Confirm the land is private or a designated off-road area. Get the owner's or park's permission. Wear a helmet, gloves, boots and eye protection. Start in the softest power mode. Check local noise rules and any fire-ban conditions. Keep a copy of your purchase documents. If you are unsure whether a place allows electric bikes, ask before you ride. Shop for compatible bikes in our [electric dirt bike range](${D}/electric-dirt-bikes/) and ask our Mittagong team on the [contact page](${D}/contact/) if you need help.`,
    faqs: [
      { q: 'Are electric dirt bikes legal to ride in Australia?', a: `Yes, on private property with permission and in designated off-road areas. An unregistered electric dirt bike cannot be ridden on public roads or on public tracks where registration is required. Our [e-bike laws guide](${D}/electric-motor-bikes/e-bike-laws-australia/) explains the rules in more detail.` },
      { q: 'Do I need a licence to ride an electric dirt bike on private land?', a: `Generally no, but rules vary by state and by the land manager, and some tracks set their own age and equipment rules. Check your state's official page, such as the [NSW e-bike rules](https://www.nsw.gov.au/driving-boating-and-transport/bikes-e-bikes-e-scooters).` },
      { q: 'Can I register a Sur-Ron or Talaria for the road?', a: `Eligibility depends on the model and the state, and many are not eligible. Confirm with your state transport authority before you buy. Road-legal alternatives are listed in our [commuter mopeds range](${D}/electric-motor-bikes/commuter-mopeds/).` },
      { q: 'Can kids ride electric dirt bikes?', a: `Yes, on private property and at designated off-road areas under adult supervision with a helmet, gloves and boots. See the [kids electric motorbikes range](${D}/electric-motor-bikes/kids/) for age-matched bikes with parent-adjustable speed.` },
      { q: 'Do I need insurance for an off-road electric dirt bike?', a: `Compulsory third party cover applies to registered vehicles, not unregistered off-road bikes. Specialist recreational vehicle policies exist, and our [insurance guide](${D}/blog/electric-dirt-bike-insurance-australia-guide/) covers what to ask for.` },
    ],
  },

  'supermoto-wheel-conversion-for-electric-dirt-bikes': {
    content: `A supermoto conversion swaps the narrow knobby off-road wheels on an electric dirt bike for wider wheels with road-compound tyres. The result is a bike that corners harder on sealed surfaces, with a lower centre of gravity and far more grip on asphalt. People convert Sur-Ron and Talaria bikes for track days, kart tracks, car parks used for practice and private sealed roads. This guide explains how 16-inch and 17-inch wheel sets differ, what else changes when you convert, the safety and legal points to check, and when an off-road tyre is still the better choice.

### What a Supermoto Conversion Does
A standard electric dirt bike runs a larger front wheel and a narrow knobby tyre designed to bite into soil. A supermoto set replaces both wheels with smaller, wider rims and a slick or street-compound tyre. The contact patch on sealed surfaces grows, the bike sits lower, and the steering becomes sharper. Off-road ability drops, so most owners keep their standard wheels and swap between the two sets.

### 16-Inch Versus 17-Inch Wheels
A 16-inch rim has less rotating mass and a shorter overall tyre diameter. That makes the bike feel quicker to turn in and accelerate, which suits tight tracks and slow, technical riding. A 17-inch rim gives a much wider choice of road and sports tyres, and typically feels more stable at higher speeds. Neither size is universally better: choose 16-inch for agility and 17-inch for tyre choice and stability. Both need correct fitment for the bike's axle, brake rotor position and mudguard clearance.

### Gearing and Speed
Smaller wheels change the effective gear ratio, so a conversion can make the bike feel more eager but also reduce the top speed for a given sprocket. Many riders pair the new wheels with a different rear sprocket to rebalance acceleration and top speed. Bikes with a motor controller that limits speed will not exceed that limit, so changing sprockets mostly affects how quickly the bike accelerates to it.

### Brakes and Suspension
Road tyres grip far better than knobbies, so the bike can generate more braking force, and the standard brakes and suspension need to be in perfect order. Check pad thickness, rotor condition, brake fluid and fork seals before you convert. A bike that stops harder also loads the front forks more, and soft factory settings may feel vague on pavement.

### Tyre Choice and Care
Pick a tyre designed for the load and speed of your bike, and read the manufacturer's pressure advice. New road tyres often have a mould release coating and need gentle scrubbing in before hard cornering. Cold tyres have less grip, so warm them up for the first few minutes. Do not ride on tyres that are cracked, flat-spotted or past their age limit.

### Legal and Safety Points
A converted off-road bike is still an off-road bike. Fitting road tyres does not make it road legal, and an unregistered bike cannot be ridden on public roads. Use closed circuits, private sealed areas and permitted track days. Read our [guide to the laws for electric dirt bikes](${D}/blog/are-electric-dirt-bikes-legal-in-australia/) and the [e-bike laws overview](${D}/electric-motor-bikes/e-bike-laws-australia/). Wear a full-face helmet, gloves, boots and a jacket with armour, because falls on pavement are much harsher than on dirt.

### Which Bikes Suit a Conversion
The [Sur-Ron Light Bee X](${D}/shop/sur-ron-light-bee-x/) at 50 kg and the [Talaria Sting R MX4](${D}/shop/talaria-sting-r-mx4/) are common choices because of their light weight, power and aftermarket support. If you are looking at a purpose-built road electric bike, a registered model such as the [NIU NQi GT](${D}/shop/niu-nqi-gt-electric-moped/) may be a better answer than modifying an off-road bike.

### When to Keep Knobby Tyres
If your riding is mostly trails, fire roads or mixed terrain, keep the standard wheels. A supermoto set is a second set for sealed surfaces, not a replacement. Compare options in our [electric dirt bike range](${D}/electric-dirt-bikes/), browse [accessories](${D}/accessories/), or ask our team for advice on the [contact page](${D}/contact/). Fitting non-standard parts should be done by a competent mechanic, and you should check how modifications affect your warranty before you start.`,
    faqs: [
      { q: 'What is a supermoto conversion on an electric dirt bike?', a: `It swaps the narrow knobby wheels for wider, smaller wheels with road-compound tyres. The bike sits lower and grips far better on sealed surfaces, but it loses off-road ability.` },
      { q: 'Should I choose 16-inch or 17-inch wheels?', a: `Sixteen-inch rims give quicker turn-in and acceleration because they carry less rotating mass. Seventeen-inch rims offer a wider choice of tyres and feel more stable at speed. Pick based on whether you value agility or tyre choice.` },
      { q: 'Does a supermoto conversion make my bike road legal?', a: `No. Fitting road tyres does not make an unregistered off-road bike legal on public roads. Use closed circuits and permitted private areas, and read our [guide to electric dirt bike laws](${D}/blog/are-electric-dirt-bikes-legal-in-australia/).` },
      { q: 'Will a conversion affect my warranty?', a: `It can, depending on what is changed and how it is fitted. Check with the seller before you modify the bike, and have a competent mechanic do the work. Contact our team through the [contact page](${D}/contact/) if you are unsure.` },
      { q: 'Which electric dirt bikes suit a supermoto conversion?', a: `Light, powerful bikes such as the [Sur-Ron Light Bee X](${D}/shop/sur-ron-light-bee-x/) and [Talaria Sting R MX4](${D}/shop/talaria-sting-r-mx4/) are popular because of their weight and aftermarket support.` },
    ],
  },
};
