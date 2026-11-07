// Legacy post rewrites, batch B. Facts come only from the product catalogue in site.ts and the store policy pages.
import type { LegacyUpgrade } from './legacy-upgrades';
const D = 'https://electricdirtbikeaustralia.com.au';

export const UPGRADES_B: Record<string, LegacyUpgrade> = {
  'best-electric-bike-australia-complete-guide': {
    content: `The best electric bike in Australia depends on where you ride, how fast you want to go, whether you need a road-legal bike and what you are prepared to spend. There is no single winner, so this guide picks a leading option in each category from the range we sell, using the specifications and prices listed in our catalogue. It also explains how to match a bike to your riding, what the numbers on a spec sheet mean, and what to check before you buy. We have not run lab tests, so the picks are based on listed specifications, not on test results.

### How to Choose the Best Electric Bike for You
Start with where you will ride. A bike for private property and off-road parks can be far more powerful than a bike that must meet road rules. Then decide your budget, because prices in our range run from $699 to $18,990. Finally consider the rider: weight, height and experience matter more than the headline power figure. Use the sections below to find your category, then check the product page for the full specifications.

### Best for Trail Riding: Sur-Ron Light Bee X
The [Sur-Ron Light Bee X](${D}/shop/sur-ron-light-bee-x/) is $6,490. It lists 6kW of peak power, a 60V 40Ah battery (2,400Wh), a 75 km/h top speed in off-road mode, up to 100 km in eco mode and a weight of 50 kg. That low weight is the main reason it suits technical trails, and there is a large range of aftermarket parts if you want to modify it. See the [Sur-Ron range](${D}/electric-dirt-bikes/sur-ron/) for the other models, and the official [Sur-Ron website](https://www.surron.com/) for brand information.

### Best for Hills and Heavier Riders: Talaria Sting R MX4
The [Talaria Sting R MX4](${D}/shop/talaria-sting-r-mx4/) is $7,290 with 8kW of peak power, a 60V 45Ah battery (2,700Wh), an 85 km/h top speed and a sealed oil-bath gearbox. At 63 kg it is heavier than the Sur-Ron, and the extra power and battery suit steeper terrain and larger riders. Our [Sur-Ron versus Talaria comparison](${D}/blog/sur-ron-vs-talaria-australia-buyers-guide/) sets the two out side by side.

### Best for Motocross: Stark Varg EX
The [Stark Varg EX 80HP](${D}/shop/stark-varg-ex-80hp/) is $18,990 and lists 80 horsepower, 938 Nm of rear-wheel torque, KYB suspension with 310 mm of travel and a 6.0 kWh battery. It is a competition bike and the most expensive in our range. The [Stark Varg Alpha 60HP](${D}/shop/stark-varg-alpha-60hp/) at $16,990 is the lower-output version. Browse all [electric motocross bikes](${D}/electric-motocross-bikes/) if you race.

### Best Budget Pick: Razor MX650
The [Razor MX650](${D}/shop/razor-mx650-electric-kids/) is $899. It lists a 650 watt motor, a 36V 12Ah sealed lead-acid battery, an 18 km/h top speed, up to 45 minutes of ride time and a 32 kg weight, with a maximum rider weight of 81 kg and a listed rider age of 13 and over. It suits lighter riders and first-time buyers who want to try an electric dirt bike for little money. It is not an adult-performance bike, and the lead-acid battery is much heavier per unit of energy than the lithium packs in the bikes above. See the [Razor website](https://razor.com/) for brand details and our [cheap electric dirt bikes](${D}/electric-dirt-bikes/cheap/) for other low-cost options.

### Best for Children: Age-Matched Bikes
For young children the [EDBA Moto 50](${D}/shop/edba-moto-50-kids-beginner/) at $1,290 is listed for ages 3 to 6 with a 6 km/h top speed and a maximum rider weight of 30 kg. For ages 4 to 10, the [KTM SX-E 5](${D}/shop/ktm-sx-e-5-youth-electric/) at $7,990 and [Husqvarna EE 5](${D}/shop/husqvarna-ee-5-youth-electric/) at $7,490 have three parent-selectable power modes. For ages 6 to 14 the [OSET 20.0 Racing Junior](${D}/shop/oset-20-0-racing-junior/) at $4,290 lists a 22 kg weight and a parent-adjustable maximum speed. See all [kids electric motorbikes](${D}/electric-motor-bikes/kids/).

### Best Road-Legal Pick: Electric Mopeds and Motorcycles
If you need a bike you can register, look at the [NIU NQi GT](${D}/shop/niu-nqi-gt-electric-moped/) at $5,990, listed as a LAMS-approved electric moped with a 3kW motor and up to 100 km with dual batteries, the [Super Soco CPx](${D}/shop/super-soco-cpx-electric-moped/) at $5,490 and the [Vmoto Soco TC-Max](${D}/shop/vmoto-soco-tc-max-electric/) at $8,990. Licence and registration rules differ between states, so read the [e-bike laws guide](${D}/electric-motor-bikes/e-bike-laws-australia/) and your state authority's page before you buy.

### Best for Cruising and Commuting: Pedal-Assist E-Bikes
If you want a pedal-assist bike for paths and roads, browse our [electric bikes](${D}/electric-bikes/) and [fat tyre e-bikes](${D}/electric-fat-tyre-bikes/). These are limited to 250 watts of continuous power in most states, which is why they are priced and specified differently from the off-road bikes above.

### What to Check Before You Buy
Check the rider weight and height range, the warranty length, where the bike can legally be ridden, spare parts and battery availability, and who supports the bike after sale. Every EDBA-supplied bike carries a 12-month Australian warranty, with free freight on orders over $1,500, and some supplier products carry their own warranty terms shown on the product page. Questions are welcome on our [contact page](${D}/contact/).`,
    faqs: [
      { q: 'What is the best electric bike in Australia?', a: `It depends on where and how you ride. The [Sur-Ron Light Bee X](${D}/shop/sur-ron-light-bee-x/) suits trails, the [Talaria Sting R MX4](${D}/shop/talaria-sting-r-mx4/) suits hills and heavier riders, the [Stark Varg EX](${D}/shop/stark-varg-ex-80hp/) suits motocross, and registered mopeds suit road use.` },
      { q: 'What is the best cheap electric bike?', a: `The [Razor MX650](${D}/shop/razor-mx650-electric-kids/) at $899 is the lowest-cost dirt-bike style option in this guide. See the [cheap electric dirt bikes](${D}/electric-dirt-bikes/cheap/) page for other low-priced models.` },
      { q: 'What is the best electric bike for kids?', a: `Match the bike to age and height: the [EDBA Moto 50](${D}/shop/edba-moto-50-kids-beginner/) for ages 3 to 6, the [KTM SX-E 5](${D}/shop/ktm-sx-e-5-youth-electric/) or [Husqvarna EE 5](${D}/shop/husqvarna-ee-5-youth-electric/) for ages 4 to 10, and the [OSET 20.0](${D}/shop/oset-20-0-racing-junior/) for ages 6 to 14.` },
      { q: 'Can I ride these electric bikes on the road?', a: `The dirt bikes in this guide are for private property and designated off-road areas. Registered electric mopeds such as the [NIU NQi GT](${D}/shop/niu-nqi-gt-electric-moped/) are intended for road use with the right licence.` },
      { q: 'Do these bikes come with a warranty?', a: `EDBA-supplied e-motos and accessories carry a 12-month Australian warranty, and some supplier products list their own terms on the product page. Free freight applies to orders over $1,500.` },
    ],
  },

  'talaria-sting-review-australia': {
    content: `The Talaria Sting is one of the best-known electric dirt bikes in Australia, and the Sting R MX4 is the current model in our range. This review is based on the specifications and price listed in our catalogue, not on a lab test, so treat it as a buyer's guide that explains what the numbers mean for your riding. It covers the motor and gearbox, battery and range, handling and weight, price and running costs, how it compares with the Sur-Ron Light Bee X, and who should buy it. Figures marked as maximums are manufacturer claims measured in ideal conditions.

### Talaria Sting R MX4 Specifications
The [Talaria Sting R MX4](${D}/shop/talaria-sting-r-mx4/) is $7,290. It lists 8kW peak power, a 60V 45Ah battery (2,700Wh), an 85 km/h unrestricted top speed, up to 110 km of range, a 3.5 hour charge, a 63 kg weight, a reinforced 6061 T6 aluminium frame, and a sealed oil-bath gearbox with a 420 chain. It carries a 12-month Australian warranty from Electric Dirt Bike Australia.

### The Sealed Gearbox
Where many light electric bikes use a belt, the Sting uses a sealed oil-bath gearbox. Sealing the drivetrain keeps dust, mud and water out, which matters on rocky, muddy or sandy ground. A gearbox needs oil changes at the intervals set by the manufacturer, and you should follow that schedule and keep records, because it supports the warranty. A sealed gearbox is not a guarantee against wear, and the chain still needs cleaning, lubrication and tension checks.

### Power and Battery
With 8kW of peak power, the Sting R MX4 has about a third more peak power than the 6kW [Sur-Ron Light Bee X](${D}/shop/sur-ron-light-bee-x/), and its 2,700Wh battery holds about 12.5 percent more energy. That reserve is useful on steep climbs and for heavier riders. The 3.5 hour charge time on the standard charger is similar to its rival, and a [10A compact touring charger](${D}/shop/10a-compact-touring-charger/) at $240 can shorten stops. A genuine [Talaria 60V 45Ah replacement battery](${D}/shop/talaria-oem-60v-45ah-replacement/) is $1,890 if you want a second pack.

### Range in Practice
The listed range of up to 110 km is a maximum from the manufacturer. Real range depends on rider weight, speed, terrain, temperature and how often you use the full-power mode. As a rule, hard climbing and constant full throttle can cut range sharply, while steady, lower-power riding extends it. Plan rides with a margin, and avoid running the battery to empty, because keeping a lithium pack between roughly 20 and 80 percent when you can is easier on its lifespan, as Battery University explains in its guide to [prolonging lithium-based batteries](https://batteryuniversity.com/article/bu-808-how-to-prolong-lithium-based-batteries).

### Handling and Weight
At 63 kg the Sting R MX4 is 13 kg heavier than the Light Bee X. That mass helps it feel planted at speed and over rough ground, but it is harder to lift, load and manoeuvre in tight spots. Riders who value flickability and a light feel may prefer the Sur-Ron, while riders who value stability and torque often prefer the Talaria.

### Talaria Sting Versus Other Talaria Models
The [Talaria XXX Black Edition](${D}/shop/talaria-xxx-black-edition/) at $5,490 lists 6.5kW, a 60V 40Ah battery, a 75 km/h top speed, up to 80 km of range, a 50 kg weight and a carbon fibre reinforced belt drive. It is the lighter and cheaper Talaria. At the top end the [Talaria Dragon Full-Size Enduro](${D}/shop/talaria-dragon-enduro/) at $13,990 lists 28kW, an 88V 58Ah battery, a 110 km/h top speed and a 100 kg weight. See all [electric dirt bikes](${D}/electric-dirt-bikes/) for the full range.

### Sting R MX4 Versus Sur-Ron Light Bee X
The Talaria costs $800 more, makes 2kW more peak power, holds 300Wh more energy and weighs 13 kg more. Per watt-hour of battery both bikes cost about $2.70. Our detailed [Sur-Ron versus Talaria comparison](${D}/blog/sur-ron-vs-talaria-australia-buyers-guide/) explains the trade-offs.

### Where You Can Ride It
The Sting R MX4 is a high-performance recreational vehicle for private property and designated off-road areas. It is not supplied road legal, and state rules vary, so read our [e-bike laws guide](${D}/electric-motor-bikes/e-bike-laws-australia/) before you ride.

### Verdict
The Sting R MX4 is a strong choice for riders who want more power, a bigger battery and a sealed drivetrain, and who accept a heavier bike. If you prioritise light weight and a lower price, compare it with the Light Bee X. Ask our Mittagong team on the [contact page](${D}/contact/) if you want help choosing.`,
    faqs: [
      { q: 'How much is the Talaria Sting R MX4 in Australia?', a: `The [Talaria Sting R MX4](${D}/shop/talaria-sting-r-mx4/) is $7,290 with a 12-month Australian warranty. Freight is free on orders over $1,500, and crypto or PayID payments receive a 10 percent discount.` },
      { q: 'How fast is the Talaria Sting R MX4?', a: `It lists an unrestricted top speed of 85 km/h and 8kW of peak power. Speeds on a trail will be lower and depend on rider weight, terrain and mode.` },
      { q: 'What is the range of the Talaria Sting R MX4?', a: `The listed range is up to 110 km from the 60V 45Ah (2,700Wh) battery. This is a manufacturer maximum, and real range depends on terrain, speed and rider weight.` },
      { q: 'Is the Talaria Sting better than the Sur-Ron Light Bee X?', a: `The Talaria has more power, a bigger battery and a sealed gearbox, while the [Sur-Ron Light Bee X](${D}/shop/sur-ron-light-bee-x/) is lighter at 50 kg and $800 cheaper. Our [comparison guide](${D}/blog/sur-ron-vs-talaria-australia-buyers-guide/) explains which suits which rider.` },
      { q: 'Is the Talaria Sting road legal?', a: `It is sold as an off-road bike for private property and designated off-road areas. Read the [e-bike laws guide](${D}/electric-motor-bikes/e-bike-laws-australia/) and your state authority's rules before riding anywhere else.` },
    ],
  },

  'electric-dirt-bike-cost-australia-price-guide': {
    content: `Electric dirt bike prices in Australia range from about $700 for a small kids bike to nearly $19,000 for a full motocross machine. This guide breaks the range down by type using the prices listed in our catalogue, explains what drives the cost, and covers the extra costs to budget for, such as spare batteries, chargers and protective gear. Prices are in Australian dollars, were correct when this page was last updated, but check the product page for the current figure.

### The Price Range at a Glance
Across the 121 bikes in our range, 15 are under $1,500, 58 are between $1,500 and $3,999, 29 are between $4,000 and $7,999 and 19 are $8,000 or more. The lowest-priced bike is $699 and the highest is $18,990. Where a bike sits depends mainly on battery size, motor power, suspension quality and brand.

### Kids and Entry-Level Bikes: From $699
Kids electric bikes in our range run from $899 to $7,990, with a middle price of about $2,400. The [Razor MX650](${D}/shop/razor-mx650-electric-kids/) is $899 and the [EDBA Moto 50](${D}/shop/edba-moto-50-kids-beginner/) for ages 3 to 6 is $1,290. At the top of this group, the [KTM SX-E 5](${D}/shop/ktm-sx-e-5-youth-electric/) is $7,990, which reflects its brand, suspension and parent-selectable power modes. Electric balance bikes start at $699. See all [kids electric motorbikes](${D}/electric-motor-bikes/kids/).

### Electric Pit Bikes: $1,850 to $6,999
Pit bikes are a popular value option. Prices run from $1,850 to $6,999 with a middle price of $3,200. The [ETM RTR Lite](${D}/shop/etm-rtr-lite-electric-pit-bike/) is $3,399 and the [ETM RTR Alpha](${D}/shop/etm-rtr-alpha-electric-pit-bike/) is $6,999. See our [electric pit bikes](${D}/electric-motor-bikes/) for the range.

### Mid-Range Trail Bikes: About $5,000 to $8,000
This is where most adult buyers land. The [Sur-Ron Light Bee X](${D}/shop/sur-ron-light-bee-x/) is $6,490, the [Talaria Sting R MX4](${D}/shop/talaria-sting-r-mx4/) is $7,290, the [E-Ride Pro SS 2.0](${D}/shop/e-ride-pro-ss-2-0/) is $8,690 and the [Talaria XXX Black Edition](${D}/shop/talaria-xxx-black-edition/) is $5,490. Electric dirt bikes overall run from $2,599 to $15,490, with a middle price of about $7,700.

### High-Performance and Motocross: $9,000 and Above
Full-size motocross bikes run from $8,990 to $18,990. The [Stark Varg Alpha 60HP](${D}/shop/stark-varg-alpha-60hp/) is $16,990 and the [Stark Varg EX 80HP](${D}/shop/stark-varg-ex-80hp/) is $18,990. At the top of the dirt-bike range, the [Sur-Ron Storm Bee Enduro](${D}/shop/sur-ron-storm-bee-enduro/) is $15,490 and the [Talaria Dragon](${D}/shop/talaria-dragon-enduro/) is $13,990. You pay for higher battery capacity, stronger suspension and brakes, and competition-grade parts.

### Road-Legal Electric Mopeds and Motorcycles
Registered electric mopeds and motorcycles run from $5,490 to $8,990. The [Super Soco CPx](${D}/shop/super-soco-cpx-electric-moped/) is $5,490, the [NIU NQi GT](${D}/shop/niu-nqi-gt-electric-moped/) is $5,990 and the [Vmoto Soco TC-Max](${D}/shop/vmoto-soco-tc-max-electric/) is $8,990. You will also pay registration and insurance costs for a road bike.

### Extra Costs to Budget For
A spare battery is the largest extra. A genuine [Sur-Ron 60V 40Ah pack](${D}/shop/sur-ron-oem-60v-40ah-replacement/) is $1,790 and a [Talaria 60V 45Ah pack](${D}/shop/talaria-oem-60v-45ah-replacement/) is $1,890. A [10A fast charger](${D}/shop/10a-compact-touring-charger/) is $240. Add protective gear, a stand, a helmet, tyres over time and, if you want it, insurance (see our [insurance guide](${D}/blog/electric-dirt-bike-insurance-australia-guide/)). Browse [accessories](${D}/accessories/) and [batteries](${D}/electric-bike-batteries/).

### What Is Included in the Price
Every EDBA-supplied bike includes a 12-month Australian warranty, and some supplier products list their own terms on the product page. Freight is free on orders over $1,500, and paying with crypto or PayID gives a 10 percent discount. Read our [payment options guide](${D}/blog/electric-dirt-bike-finance-payment-plans-australia/) for how to pay, and the [cheap electric dirt bikes](${D}/electric-dirt-bikes/cheap/) page if budget is your priority.`,
    faqs: [
      { q: 'How much does an electric dirt bike cost in Australia?', a: `Prices in our range run from $699 to $18,990. Adult trail bikes such as the [Sur-Ron Light Bee X](${D}/shop/sur-ron-light-bee-x/) at $6,490 and [Talaria Sting R MX4](${D}/shop/talaria-sting-r-mx4/) at $7,290 sit in the middle.` },
      { q: 'What is the cheapest electric dirt bike?', a: `The [Razor MX650](${D}/shop/razor-mx650-electric-kids/) is $899 and electric balance bikes start at $699. See [cheap electric dirt bikes](${D}/electric-dirt-bikes/cheap/) for more low-cost options.` },
      { q: 'Why do some electric dirt bikes cost so much more?', a: `Price follows battery capacity, motor power, suspension and brakes, and brand. Motocross machines like the [Stark Varg EX](${D}/shop/stark-varg-ex-80hp/) at $18,990 use competition-grade parts.` },
      { q: 'What other costs should I budget for?', a: `A spare battery ($1,790 to $1,890 for genuine Sur-Ron or Talaria packs), a fast charger ($240), protective gear, tyres and optional insurance. Browse [accessories](${D}/accessories/).` },
      { q: 'Is there a discount for paying with crypto?', a: `Yes, paying with crypto (BTC or USDT) or PayID gives an instant 10 percent discount. Free freight applies to orders over $1,500.` },
    ],
  },

  'electric-dirt-bike-finance-payment-plans-australia': {
    content: `Buying an electric dirt bike is a significant purchase, and many riders want to know how they can pay. This guide explains the payment methods accepted by Electric Dirt Bike Australia, how the crypto and PayID discount works, what to know about arranging finance through a third party, and how to get a quote. Electric Dirt Bike Australia does not provide in-house finance and does not recommend or endorse any lender, so nothing here is financial advice. Check any finance offer with the provider and read the terms carefully before you sign.

### Payment Methods We Accept
Customers can pay by bank transfer and PayID, and by crypto (Bitcoin and USDT). The checkout on each product page shows the options available. Bank transfers and PayID payments are usually fast, and Osko-enabled banks can clear funds within minutes. Orders are processed once payment is received.

### The 10 Percent Discount
Paying with crypto or PayID gives an instant 10 percent discount on the order. On a $6,490 [Sur-Ron Light Bee X](${D}/shop/sur-ron-light-bee-x/), that is a saving of $649. On a $7,290 [Talaria Sting R MX4](${D}/shop/talaria-sting-r-mx4/) the saving is $729. The discount is applied at checkout. See the [FAQ](${D}/faq/) for more detail on how crypto payment works.

### Free Freight Over $1,500
Freight is free on orders over $1,500, which covers most bikes in the range. For orders under $1,500, shipping is quoted at checkout. Read the [shipping and delivery page](${D}/shipping-and-delivery/) for delivery information and the [returns policy](${D}/returns-policy/) for return terms.

### Arranging Finance Through a Third Party
Electric Dirt Bike Australia does not operate a finance product. Some customers arrange personal loans, consumer finance or novated leases independently, then pay us by bank transfer once the loan is approved. If you plan to do this, ask us for a written quote showing the bike price, freight and any discount, then take it to your lender. Compare interest rates, fees and total repayment amounts, and only borrow what you can afford to repay. The Australian Government's MoneySmart website publishes independent guidance on borrowing, and you can ask a licensed adviser about your own situation.

### Getting a Quote
Contact our Mittagong team through the [contact page](${D}/contact/) with the model you want and your delivery postcode. A quote lists the bike price, freight, the crypto or PayID discount if it applies, and the total. Quotes help you compare the full cost before you pay, and give a lender what it needs if you are arranging your own finance.

### Warranty and Support After You Pay
EDBA-supplied bikes carry a 12-month Australian warranty. Some supplier products list their own warranty terms on the product page, and these are shown before you order. Read our [warranty and service page](${D}/warranty-and-service/) for how claims work.

### Budgeting for the Whole Cost
Besides the bike, budget for a spare battery if you want longer rides, a fast charger, protective gear and insurance. Our [price guide](${D}/blog/electric-dirt-bike-cost-australia-price-guide/) breaks down typical costs by bike type, and the [electric dirt bike range](${D}/electric-dirt-bikes/) lets you compare models by price. If you want to keep costs down, see the [cheap electric dirt bikes](${D}/electric-dirt-bikes/cheap/) page.`,
    faqs: [
      { q: 'Does Electric Dirt Bike Australia offer finance?', a: `No. We do not provide in-house finance. Some customers arrange third-party finance independently and then pay by bank transfer. Ask for a written quote on our [contact page](${D}/contact/) to take to a lender.` },
      { q: 'What payment methods do you accept?', a: `Bank transfer, PayID and crypto (Bitcoin and USDT). The options are shown at checkout.` },
      { q: 'How does the crypto and PayID discount work?', a: `Paying with crypto or PayID gives an instant 10 percent discount, for example $649 off a $6,490 [Sur-Ron Light Bee X](${D}/shop/sur-ron-light-bee-x/). The discount is applied at checkout.` },
      { q: 'Is freight free?', a: `Freight is free on orders over $1,500. Smaller orders are quoted shipping at checkout. See the [shipping and delivery page](${D}/shipping-and-delivery/).` },
      { q: 'Can I get a written quote before I pay?', a: `Yes. Contact our team through the [contact page](${D}/contact/) with the model and your postcode, and we will send a quote showing the price, freight and any discount.` },
    ],
  },

  'what-age-can-kids-ride-electric-dirt-bikes': {
    content: `There is no single legal or safe age at which children can ride an electric dirt bike, because the right age depends on the child's height, weight, strength, maturity and experience, and on the bike. Many manufacturers and suppliers publish a recommended age range for each model, and responsible riding means supervising children closely and keeping them to private property and designated off-road areas. This guide explains how to match a bike to a child using the age ranges listed in our catalogue, what features to look for, which safety gear is essential and the rules to check. It is general advice, so always follow the manufacturer's instructions.

### Age Is Only a Starting Point
Two children of the same age can differ a lot in size and confidence. Use age as a first filter, then check the rider weight limit, the seat height and whether the child can reach the controls comfortably. A child should be able to put both feet near the ground, hold the bars with a relaxed grip, and operate the throttle and brake without strain. If the bike is too big, wait or choose a smaller model.

### Ages 3 to 6: First Bike
The [EDBA Moto 50](${D}/shop/edba-moto-50-kids-beginner/) is $1,290 and is listed for ages 3 to 6 with a maximum rider weight of 30 kg. It has a 250 watt motor, a 6 km/h top speed, up to 60 minutes of ride time, a 14 kg weight and a parent-adjustable speed setting. The very low speed makes it suitable for learning balance and throttle control under close supervision.

### Is There an Electric Motorbike for a 3 Year Old?
Yes, the EDBA Moto 50 is designed for children from age 3, as long as the child is within the 30 kg weight limit and can sit and balance on the bike comfortably. A parent should stay within arm's reach, keep the speed setting at its lowest, and ride on a flat, enclosed area.

### Ages 4 to 10: Stepping Up
The [KTM SX-E 5](${D}/shop/ktm-sx-e-5-youth-electric/) at $7,990 and the [Husqvarna EE 5](${D}/shop/husqvarna-ee-5-youth-electric/) at $7,490 are listed for ages 4 to 10. Each has a 1,100 watt motor, a 48V battery, a 20 km/h top speed in full-power mode, an 80 minute charge, a 26 kg weight and three parent-selectable power modes (20, 50 and 100 percent). The parent can cap the bike to a low power level for a beginner and raise it as skills improve.

### Is There an Electric Motorbike for a 5 Year Old?
Many five-year-olds step up to a bike like the KTM SX-E 5 or Husqvarna EE 5 after they have learned balance. Start in the 20 percent mode and increase only when the child is comfortable. Lower-cost options include the [RFN Warrior Kids SX-E250](${D}/shop/rfn-warrior-kids-sx-e250-electric-dirt-bike/) at $1,599 with Eco, Low and Sport speed modes, and the [EVO Racing 16 inch](${D}/shop/evo-racing-16-electric-bike/) at $1,599.

### Ages 6 to 14: Junior and Youth Bikes
The [OSET 20.0 Racing Junior](${D}/shop/oset-20-0-racing-junior/) at $4,290 is listed for ages 6 to 14, with a 600 watt motor, a 24V 20Ah battery, a 22 kg weight and a variable speed dial with a parent-adjustable maximum speed. For larger or more experienced children, the [RFN Warrior Youth SX-E5](${D}/shop/rfn-warrior-youth-sx-e5-electric-dirt-bike/) at $4,990 lists a 40 km/h top speed and a 58 kg weight, and the [EVO Racing 20 inch](${D}/shop/evo-racing-20-electric-bike/) at $2,399 lists a 35 km/h top speed. See the [kids electric dirt bikes](${D}/electric-dirt-bikes/kids/) range.

### Protective Gear
Every rider, whatever their age, should wear a properly fitted helmet that meets the relevant standard, gloves, boots, eye protection and, for faster bikes, body armour. Children grow quickly, so check the fit each season. Do not let children ride without a helmet, even at low speed.

### Where Children Can Ride
Children should ride on private property with the owner's permission, or in designated off-road areas, under adult supervision. Rules differ between states and between parks, so check them before you ride. Our [e-bike laws guide](${D}/electric-motor-bikes/e-bike-laws-australia/) and the [laws for electric dirt bikes](${D}/blog/are-electric-dirt-bikes-legal-in-australia/) explain the basics. For more on sizing, read the [kids electric bike buying guide](${D}/blog/kids-electric-bike-buying-guide-australia/), and see the [kids electric motorbikes](${D}/electric-motor-bikes/kids/) range. Questions are welcome on the [contact page](${D}/contact/).`,
    faqs: [
      { q: 'What age can a child ride an electric dirt bike?', a: `There is no single age. Manufacturers list age ranges, such as ages 3 to 6 for the [EDBA Moto 50](${D}/shop/edba-moto-50-kids-beginner/) and ages 4 to 10 for the [KTM SX-E 5](${D}/shop/ktm-sx-e-5-youth-electric/). Size, weight and experience matter as much as age.` },
      { q: 'Is there an electric motorbike for a 3 year old?', a: `Yes. The EDBA Moto 50 is listed for ages 3 to 6 with a 30 kg rider limit and a 6 km/h top speed. Supervise closely and keep the speed at its lowest setting.` },
      { q: 'Is there an electric motorbike for a 5 year old?', a: `Yes. Options include the [KTM SX-E 5](${D}/shop/ktm-sx-e-5-youth-electric/) and [Husqvarna EE 5](${D}/shop/husqvarna-ee-5-youth-electric/), which have three parent-selectable power modes, and the [RFN Warrior Kids SX-E250](${D}/shop/rfn-warrior-kids-sx-e250-electric-dirt-bike/).` },
      { q: 'What safety gear does a child need?', a: `A properly fitted helmet, gloves, boots and eye protection at minimum, with body armour for faster bikes. Always supervise, and ride only on private property or designated off-road areas.` },
      { q: 'Can children ride on public roads?', a: `Off-road electric dirt bikes are for private property and designated off-road areas. Read our [e-bike laws guide](${D}/electric-motor-bikes/e-bike-laws-australia/) for the rules.` },
    ],
  },
};
