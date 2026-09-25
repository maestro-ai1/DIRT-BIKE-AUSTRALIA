// scripts/update-posts.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const posts = [
  {
    slug: 'sur-ron-vs-talaria-australia-buyers-guide',
    title: 'Sur-Ron Light Bee X vs Talaria Sting R: Which Electric Dirt Bike Wins in Australia?',
    excerpt: 'An in-depth breakdown of motor power, gearbox vs belt drive, suspension, and trail range on Australian rugged tracks.',
    category: 'Comparisons',
    date: '2026-02-14',
    readTime: '6 min read',
    image: '/images/hero_surron_trail_1790338185425.jpg',
    content: `Choosing between the Sur-Ron Light Bee X and the Talaria Sting R MX4 is the most common dilemma for Australian riders entering the high-performance electric dirt bike scene. Both machines offer exhilarating acceleration, zero emissions, and near-silent operation, but they cater to slightly different riding preferences.

### Drivetrain: Belt vs Gearbox
The Sur-Ron Light Bee X utilizes a primary drive belt linked to a secondary chain. This delivers whisper-quiet power delivery and lightweight nimbleness (50kg total weight), making it agile on tight singletrack. The Talaria Sting R, on the other hand, utilizes a sealed oil-bath gearbox. This eliminates belt snap risks when tackling rocky Australian scree, mud, or river crossings.

### Power & Battery Capacity
The Talaria Sting R MX4 produces 8kW peak output with its 60V 45Ah battery pack, while the standard Light Bee X provides 6kW from a 60V 40Ah pack. For heavier riders or steep hill-climbs in the Great Dividing Range, the extra 2kW on the Talaria provides noticeable punch out of corners.

### Conclusion & Verdict
If you prioritize lightweight flickability and maximum aftermarket modding potential, the Sur-Ron Light Bee X remains the gold standard. If you prefer heavier-duty stock components, gearbox durability, and 8kW power right out of the box, the Talaria Sting R MX4 takes the crown.`,
  },
  {
    slug: 'how-to-charge-maintain-electric-dirt-bike-batteries',
    title: 'Maximising Battery Lifespan: Pro Charging Guide for 60V and 72V Packs',
    excerpt: 'Essential maintenance practices, cell balancing, storage voltage, and temperature management for Australian summers.',
    category: 'Guides',
    date: '2026-01-22',
    readTime: '5 min read',
    image: '/images/hero_talaria_ridge_1790338208529.jpg',
    content: `Modern electric dirt bike lithium-ion batteries are high-density energy packs that thrive when treated with basic care. With typical Australian conditions reaching 35°C+ in summer, proper thermal management is key to maintaining 500+ charge cycles without degradation.

### 1. Allow the Pack to Cool Down After Hard Riding
Never plug your battery into a high-amperage fast charger immediately after an aggressive trail session. Give the cells 20-30 minutes to cool down to ambient temperature before initiating charging.

### 2. The 20% to 90% Golden Rule
For everyday recreational rides, charging up to 90-95% rather than keeping it pinned at 100% can double the total cycle life of Samsung and Molicel lithium cells. Once every month, charge to 100% and leave on the smart charger for an extra hour to allow the BMS to balance individual cell voltages.

### 3. Summer & Off-Season Storage
If leaving the bike idle for more than 3 weeks, store the battery between 45% and 60% state of charge in a cool, dry area away from direct sunlight.`,
  },
  {
    slug: 'stark-varg-motocross-revolution-australia',
    title: 'The Stark Varg 80HP: Revolutionising Australian Motocross and Supercross',
    excerpt: 'How Sweden’s 80HP electric motocross beast is winning over traditional 450cc riders across local tracks.',
    category: 'Innovations',
    date: '2025-11-10',
    readTime: '7 min read',
    image: '/images/hero_stark_track_1790338196966.jpg',
    content: `When Stark Future announced an 80HP electric motocross bike, sceptics doubted whether an electric motor could handle the rigours of 30-minute motos in Australian dirt and heat. Today, the Stark Varg has silenced all critics.

With 938Nm of rear-wheel torque and completely customizable throttle curves selectable on the fly via the waterproof Android dash, riders can program the bike to behave like a forgiving 125cc two-stroke for tight trails or unleash the full 80HP fire-breathing 450cc+ beast on open motocross tracks. Kayaba suspension and Brembo brakes complete this competition-ready setup.`,
  },
  {
    slug: 'are-electric-dirt-bikes-legal-in-australia',
    title: 'Are Electric Dirt Bikes Legal in Australia? Road, Trail & Forestry Laws Explained',
    excerpt: 'A comprehensive state-by-state guide to electric moto regulations in NSW, VIC, QLD, WA, SA and private land rights.',
    category: 'Legal & Safety',
    date: '2026-02-18',
    readTime: '8 min read',
    image: '/images/hero_surron_trail_1790338185425.jpg',
    content: `One of the most frequently searched questions by prospective riders is: Are electric dirt bikes legal to ride in Australia? Because electric motorbikes like the Sur-Ron Light Bee X, Talaria Sting R, and Stark Varg exceed the 250W pedal-assist bicycle threshold, Australian law classifies them as off-road motorcycles.

### Private Property & Motocross Parks
You can legally ride any high-powered electric dirt bike on private property, farms, motocross ride parks, and commercial off-road tracks without registration or a motorcycle licence. This makes them ideal for weekend family riding and property maintenance.

### State Forestry Trails & Public Bushland
In state forests and designated off-road riding areas across NSW, Victoria, and Queensland, riding rules mirror petrol dirt bikes. If your bike is unregistered, it cannot be ridden on gazetted public roads or public bush tracks where vehicle registration is mandated.

### ADR Road-Legal Models vs Off-Road Competition Models
Certain variants, such as the Sur-Ron Ultra Bee T road-homologated versions, feature ADR mirrors, turn signals, number plate brackets, and VIN plates, allowing them to be registered for road and trail use under motorcycle licensing frameworks.`,
  },
  {
    slug: 'top-10-best-electric-dirt-bikes-australia-2026',
    title: 'Top 10 Best Electric Dirt Bikes in Australia for 2026: Power, Range & Price Ranked',
    excerpt: 'The ultimate 2026 Australian rankings across light e-motos, mid-weight enduro bikes, and 80HP full-size competition machines.',
    category: 'Buyers Guide',
    date: '2026-02-22',
    readTime: '9 min read',
    image: '/images/hero_talaria_ridge_1790338208529.jpg',
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
    slug: '72v-vs-60v-electric-dirt-bike-battery-upgrade-guide',
    title: '72V vs 60V Electric Dirt Bike Batteries: Range, Torque & Acceleration Explained',
    excerpt: 'Understanding why upgrading to 72V Molicel cells delivers higher top speeds, cooler motor temps, and instantaneous throttle punch.',
    category: 'Tech Deep Dive',
    date: '2026-02-05',
    readTime: '6 min read',
    image: '/images/hero_stark_track_1790338196966.jpg',
    content: `Upgrading from a stock 60V pack to a high-discharge 72V lithium battery is the most impactful performance modification you can make to a Sur-Ron Light Bee X or Talaria Sting.

### The Physics of Voltage: Higher Power with Lower Amps
Electrical power is measured in Watts (Volts x Amps). To produce 12kW on a 60V system, the controller must draw 200 Amps, generating significant heat in the wiring and motor windings. On a 72V system, that same 12kW requires only 166 Amps. This reduction in current allows your motor to run significantly cooler while delivering higher sustained top speeds.

### Top Speed and Hill Climbing
A 72V Molicel P45B pack typically increases top speed by 20–25 km/h over stock (reaching 85–95 km/h) and eliminates voltage sag on steep hill climbs. Paired with a smart Bluetooth BMS, riders can monitor cell balancing in real time from their smartphone.`,
  },
  {
    slug: 'talaria-dragon-komodo-full-size-electric-enduro-review',
    title: 'Talaria Dragon & Komodo: Full-Size Electric Enduro Dirt Bikes Tested',
    excerpt: 'A deep dive into Talaria’s 88V 28kW full-size platforms featuring 21/18-inch wheels, Brembo-spec brakes, and linkage suspension.',
    category: 'Reviews',
    date: '2026-01-18',
    readTime: '7 min read',
    image: '/images/hero_talaria_ridge_1790338208529.jpg',
    content: `For years, off-road enthusiasts loved the agility of 50kg e-motos but yearned for full-size 21-inch front and 18-inch rear wheel geometry found on 250cc–450cc enduro machines. Talaria answered the call with the Talaria Dragon and Komodo.

### 88V 28kW Powertrain
With 28kW peak output and an 88V 58Ah lithium battery, the Dragon bridges the gap between lightweight trail bikes and heavy 450cc thumpers. It accelerates from 0–100 km/h in under 4 seconds while maintaining a manageable 105kg curb weight.

### High-End Enduro Suspension
Equipped with 250mm of adjustable inverted fork travel, progressive rear linkage, and four-piston hydraulic calipers, the Dragon soaks up rock gardens and whoops across Australian singletrack with complete stability.`,
  },
  {
    slug: 'torp-tc500-vs-bac4000-controller-comparison',
    title: 'Best Electric Dirt Bike Controllers: Torp TC500 vs BAC4000 & TC1000 Tuning',
    excerpt: 'Comparing plug-and-play mobile app tuning, field weakening, thermal rollback, and regenerative braking features.',
    category: 'Upgrades',
    date: '2026-02-10',
    readTime: '6 min read',
    image: '/images/hero_surron_trail_1790338185425.jpg',
    content: `The electronic speed controller (ESC) is the brain of your electric dirt bike. Upgrading the stock controller unlocks additional motor current, customizable throttle curves, and advanced features like field weakening for higher top speeds.

### Torp TC500: The Plug-and-Play Benchmark
The Torp TC500 communicates directly with the stock Sur-Ron or Talaria display and battery BMS. Using the Torp iOS/Android app, you can fine-tune throttle sensitivity, regen braking on brake lever pull, and temperature protection limits within seconds over Bluetooth.

### Field Weakening & Top Speed
Field weakening alters the magnetic timing of the brushless DC motor at high RPM, delivering an extra 15–20 km/h of top speed on flat straights without needing a battery upgrade.`,
  },
  {
    slug: 'electric-dirt-bike-fast-chargers-and-solar-generators',
    title: 'Off-Grid Charging Guide: 10A–15A Fast Chargers & Solar Generators for E-Motos',
    excerpt: 'How to charge your 60V and 72V electric dirt bikes in remote Australian bush camps using portable power stations.',
    category: 'Guides',
    date: '2026-01-29',
    readTime: '6 min read',
    image: '/images/hero_stark_track_1790338196966.jpg',
    content: `Australian riders love venturing into remote state forests and private properties where grid power is unavailable. With modern portable power stations (EcoFlow, Bluetti, Jackery) and high-current fast chargers, weekend bush riding is easier than ever.

### Fast Charger Amperage vs Battery Health
- 5A Standard Charger: Takes 5–6 hours for a full charge; ideal for overnight home charging.
- 10A–12A Fast Charger: Recharges a 60V 40Ah pack in 2.5–3 hours; perfect for lunch breaks at the ute.
- 15A Ultra-Fast Charger: Recharges high-capacity 72V packs in under 2 hours (ensure cell specs support 0.5C charging).

### Solar & Inverter Sizing
To run a 10A 60V charger (approx. 700W draw), use a pure sine wave inverter of at least 1200W paired with 400W–600W solar blankets to maintain continuous power throughout weekend campouts.`,
  },
  {
    slug: 'suspension-upgrades-for-sur-ron-and-talaria',
    title: 'Electric Dirt Bike Suspension Setup: Fastace, EXT Ferro & KKE Fork Tuning',
    excerpt: 'How to set correct rider sag, spring rates, compression damping, and fork oil levels for aggressive trail riding.',
    category: 'Maintenance',
    date: '2026-02-01',
    readTime: '5 min read',
    image: '/images/hero_talaria_ridge_1790338208529.jpg',
    content: `Stock suspension on entry-level electric dirt bikes is often tuned for lighter 60kg–70kg riders. If you ride aggressive downhill tracks, jump tables, or weigh over 85kg with full gear, tuning your suspension is the best way to prevent bottoming out.

### Setting Rider Sag
Aim for 25% to 30% of total travel in rider sag. If the bike compresses more than 35% under your weight with riding gear, you need a stiffer coil spring (e.g., 550 lbs/in or 650 lbs/in for the rear shock).

### Upgraded Inverted Forks
- Fastace ALX13RC: Budget-friendly, stiff 37mm stanchions with customized valving.
- EXT Ferro & Fox 40: High-end titanium spring and air-sprung precision for maximum traction over braking bumps and roots.`,
  },
  {
    slug: 'electric-dirt-bike-vs-petrol-motocross-running-costs',
    title: 'Electric Dirt Bike vs Petrol Motocross (250cc/450cc): Real 2-Year Cost Breakdown',
    excerpt: 'Detailed comparison of fuel, engine rebuilds, air filter oiling, and electricity costs across 100 hours of riding.',
    category: 'Comparisons',
    date: '2025-12-15',
    readTime: '7 min read',
    image: '/images/hero_surron_trail_1790338185425.jpg',
    content: `While high-performance electric dirt bikes have a slightly higher upfront purchase price, their lifetime operating costs are a fraction of traditional 250cc and 450cc petrol four-strokes.

### Fuel vs Electricity Costs
- Petrol 450cc: Consumes roughly 5 litres of 98-octane fuel per 2-hour moto session ($12–$15 per ride). Over 100 hours, fuel costs exceed $600.
- Electric 60V/72V E-Moto: Consumes ~2.5 kWh per charge. At average Australian off-peak residential rates of $0.28/kWh, a full charge costs less than $0.75. Over 100 hours, total electricity cost is under $40.

### Maintenance & Rebuilds
Petrol 4-strokes require engine oil changes every 5–10 hours, valve clearance checks, and top-end piston rebuilds every 50 hours ($800–$1,500). Electric dirt bikes have no pistons, valves, spark plugs, or clutch plates—only chain lube, brake pads, and tire replacements!`,
  },
  {
    slug: 'best-electric-dirt-bikes-for-beginners-and-teens',
    title: 'Best Electric Dirt Bikes for Teenagers and Beginners in Australia',
    excerpt: 'Safe, low-seat-height, manageable power electric bikes designed for building riding confidence without intimidating clutches.',
    category: 'Buyers Guide',
    date: '2026-01-10',
    readTime: '6 min read',
    image: '/images/hero_talaria_ridge_1790338208529.jpg',
    content: `Teaching a teenager or adult beginner to ride a petrol dirt bike can be daunting—managing a manual clutch, gear shifting, hot exhaust pipes, and kickstarters often leads to stalls and frustration. Electric dirt bikes simplify the learning curve with intuitive twist-and-go throttles.

### Why E-Motos Are Ideal for Beginners
1. No Clutch or Gears: Focus 100% on balance, braking, and body position.
2. Eco & Sport Modes: Switchable power limits allow parents to cap top speed at 35 km/h while novice riders develop throttle control.
3. No Hot Exhausts: Zero risk of burn injuries from exposed exhaust pipes.
4. Lightweight (40kg–55kg): Easy to pick up after a minor tip-over compared to heavy 100kg petrol bikes.

Top recommended models include the Sur-Ron Light Bee S, Talaria XXX, and RFN Warrior Youth.`,
  },
  {
    slug: 'electric-dirt-bike-braking-upgrades-250mm-rotors',
    title: 'Upgrading Braking Power: 250mm Oversized Rotors & Quad-Piston Calipers',
    excerpt: 'Why larger rotors, metallic brake pads, and DOT 5.1 brake fluid eliminate brake fade on steep Australian downhill descents.',
    category: 'Upgrades',
    date: '2026-02-12',
    readTime: '5 min read',
    image: '/images/hero_stark_track_1790338196966.jpg',
    content: `When upgrading your electric dirt bike with 72V batteries and high-power controllers, stopping power must keep pace with acceleration. Standard mountain bike spec 203mm rotors can suffer from brake fade on long downhill trails in the Blue Mountains or Victorian High Country.

### 250mm Oversized Rotor Kits
Upgrading from 203mm to 250mm oversized floating steel rotors increases braking leverage by over 20% while providing greater surface area for heat dissipation.

### Sintered Metallic Brake Pads
Organic pads wear out quickly in wet Australian clay and dust. Sintered metallic pads provide consistent bite in muddy creek crossings and withstand temperatures exceeding 500°C without glazing.`,
  },
  {
    slug: 'supermoto-wheel-conversion-for-electric-dirt-bikes',
    title: 'Supermoto Wheel Conversion Guide: 16-Inch vs 17-Inch Wheels for Sur-Ron & Talaria',
    excerpt: 'How to convert your off-road machine into an agile, sticky-tired supermoto for carving tarmac and go-kart tracks.',
    category: 'Guides',
    date: '2026-01-05',
    readTime: '6 min read',
    image: '/images/hero_surron_trail_1790338185425.jpg',
    content: `Supermoto (SM) conversions replace skinny 19-inch knobby dirt wheels with wide 16-inch or 17-inch rims fitted with sticky street compound tires. This lowers the bike's centre of gravity and unlocks phenomenal cornering grip.

### 16-Inch vs 17-Inch Wheelsets
- 16-Inch Rims: Provide the quickest turn-in and acceleration due to reduced rotational mass. Ideal for tight tracks and nimble urban maneuvering.
- 17-Inch Rims: Offer the widest selection of performance tires (Pirelli Diablo Rosso, Michelin City Grip, Heidenau K66) and better stability at high speeds (80+ km/h).

Pair with a 48T or 54T rear sprocket depending on whether you want maximum top speed or explosive wheelie-inducing torque!`,
  },
  {
    slug: 'complete-pre-ride-and-post-wash-maintenance-guide',
    title: 'Complete E-Moto Maintenance Guide: Cleaning, Chain Tension & Bearing Care',
    excerpt: 'Proper washing techniques to protect electrical connectors, non-corrosive chain lubrication, and headtube bearing maintenance.',
    category: 'Maintenance',
    date: '2025-12-28',
    readTime: '6 min read',
    image: '/images/hero_talaria_ridge_1790338208529.jpg',
    content: `While electric dirt bikes require far less maintenance than internal combustion engines, regular cleaning and mechanical checks keep your suspension, drivetrain, and electronics performing flawlessly.

### 1. Washing Rules: Never Pressure-Wash Bearing Seals & Throttle
Use a low-pressure garden hose and dedicated bike wash. Never blast high-pressure water directly at the throttle housing, ignition keyway, controller cooling fins, or wheel hub bearings.

### 2. Secondary Chain Slack
Ensure 15mm–25mm of vertical chain play with the rider off the bike. A chain that is too tight places excessive stress on the jackshaft bearings and motor output shaft.

### 3. Dielectric Grease for Connectors
Apply a dab of silicone dielectric grease to main battery discharge plugs (QS8, QS10, or Anderson connectors) to prevent oxidation and ensure minimum contact resistance.`,
  },
  {
    slug: 'molicel-p45b-vs-samsung-50s-lithium-cells',
    title: 'Lithium Cell Showdown: Molicel P45B vs Samsung 50S for High-Power E-Bikes',
    excerpt: 'Comparing 21700 cell discharge rates, voltage stability under 300A peak loads, and thermal efficiency.',
    category: 'Tech Deep Dive',
    date: '2026-02-08',
    readTime: '7 min read',
    image: '/images/hero_stark_track_1790338196966.jpg',
    content: `The quality of individual lithium-ion cells inside your battery pack dictates how much continuous power your bike can produce without thermal throttling. The two most popular 21700 cells in high-end electric dirt bike battery builds are the Molicel P45B and Samsung 50S.

### Molicel P45B: The Ultimate High-Discharge Beast
- Capacity: 4,500mAh
- Continuous Discharge Rating: 45 Amps per cell
- Internal Resistance: Ultra-low ~10 mΩ
- Verdict: The gold standard for high-draw 15kW–25kW builds where extreme acceleration and zero voltage sag are top priorities.

### Samsung 50S: Maximum Trail Range
- Capacity: 5,000mAh
- Continuous Discharge Rating: 25 Amps per cell
- Verdict: Best for 6kW–10kW setups where riders want maximum kilometre range and moderate current draw.`,
  },
  {
    slug: 'how-to-transport-electric-dirt-bikes-car-hitch-racks',
    title: 'Car Hitch Racks & Ute Loading for 50kg–110kg Electric Dirt Bikes',
    excerpt: 'Tow bar tongue weight ratings, heavy-duty steel carrier racks, tie-down techniques, and battery removal tips.',
    category: 'Guides',
    date: '2026-01-14',
    readTime: '5 min read',
    image: '/images/hero_talaria_ridge_1790338208529.jpg',
    content: `Transporting your electric dirt bike to riding parks and state forests is simple with the right vehicle setup. Because light e-motos weigh only 50kg–65kg, they can be easily loaded onto a standard car hitch carrier without needing a dedicated box trailer.

### Tow Bar Tongue Weight (Downward Load Rating)
Ensure your vehicle's tow bar is rated for at least 100kg download capacity (standard 50mm / 2-inch square hitch receiver).

### Pro-Tip: Remove the Battery During Transit
Removing the 12kg–15kg battery and storing it in your vehicle footwell reduces the weight on the rear carrier by nearly 30%, making loading effortless and protecting the pack from road vibration and weather. Use quality ratchet tie-downs on the handlebars and rear wheel strap.`,
  },
  {
    slug: 'essential-aftermarket-mods-for-surron-light-bee-x',
    title: 'Top 10 Essential Upgrades for the Sur-Ron Light Bee X',
    excerpt: 'From wide CNC footpegs and direct-mount handlebar risers to heavy-duty bash plates and upgraded drive chains.',
    category: 'Upgrades',
    date: '2026-02-16',
    readTime: '6 min read',
    image: '/images/hero_surron_trail_1790338185425.jpg',
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
    slug: 'extending-single-charge-range-on-rugged-bush-trails',
    title: 'How to Get 100km+ Range on Single Charge from Your Electric Dirt Bike',
    excerpt: 'Riding techniques, regenerative braking configurations, tyre pressure tuning, and momentum management.',
    category: 'Guides',
    date: '2026-01-25',
    readTime: '6 min read',
    image: '/images/hero_talaria_ridge_1790338208529.jpg',
    content: `Getting the absolute maximum trail range out of your 60V or 72V battery pack comes down to riding style, terrain selection, and smart bike setup. With proper technique, riders can easily exceed 80km to 100km on a single charge.

### 1. Progressive Throttle Application vs WOT Pinning
Smooth, progressive throttle inputs preserve battery voltage. Avoid pinning wide-open throttle (WOT) repeatedly from low speeds, as initial acceleration pulls peak current.

### 2. Configure Dynamic Regen Braking
Enable electronic regenerative braking via your mobile controller app. On long downhill descents, regenerative braking feeds 5%–10% of kinetic energy back into the battery while reducing brake pad wear.

### 3. Tyre Pressure & Tread Rolling Resistance
Running 14–16 PSI provides optimal traction without excessive rolling resistance. Extremely low tyre pressures increase motor drag on hardpacked fire roads.`,
  },
  {
    slug: 'future-of-electric-motocross-racing-in-australia',
    title: 'The Future of Electric Motocross Racing and Dedicated Tracks in Australia',
    excerpt: 'How silent electric dirt bikes are saving suburban ride parks, opening new indoor venues, and creating dedicated race classes.',
    category: 'Innovations',
    date: '2026-02-20',
    readTime: '7 min read',
    image: '/images/hero_stark_track_1790338196966.jpg',
    content: `Noise complaints have historically led to the closure of iconic motocross tracks near expanding suburban corridors across Sydney, Melbourne, and Brisbane. The rise of silent, zero-emission electric motorbikes is creating a massive resurgence in urban ride parks and competitive racing.

### Near-Silent Motocross Tracks
Because electric dirt bikes emit only tire noise and chain hum, dedicated tracks can operate 7 days a week closer to metropolitan centres without breaching environmental noise limits.

### Dedicated E-Moto Supercross & Sprint Classes
Motorcycling Australia and grassroots ride clubs are introducing dedicated electric motorcycle categories, pitting Sur-Rons, Talarias, and Stark Vargs against each other in thrilling sprint races and night-time supercross events. The future of Australian off-road motorsport is undeniably electric!`,
  },
];

// Read site.ts and replace POSTS array with proper TS structure
const siteTsPath = path.join(root, 'src', 'config', 'site.ts');
let siteTs = fs.readFileSync(siteTsPath, 'utf8');

const postsCode = `export const POSTS = [\n` + posts.map(p => {
  return `  {
    slug: ${JSON.stringify(p.slug)},
    title: ${JSON.stringify(p.title)},
    excerpt: ${JSON.stringify(p.excerpt)},
    category: ${JSON.stringify(p.category)},
    date: ${JSON.stringify(p.date)},
    readTime: ${JSON.stringify(p.readTime)},
    image: ${JSON.stringify(p.image)},
    content: \`${p.content.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`,
  },`;
}).join('\n') + `\n];\n`;

siteTs = siteTs.replace(/export const POSTS = \[[\s\S]*?\];\n/, postsCode);
fs.writeFileSync(siteTsPath, siteTs, 'utf8');

// Build site.js without TS types
const siteJsPath = path.join(root, 'src', 'config', 'site.js');
let siteJs = siteTs
  .replace(/ as PaymentMethodConfig\[\]/g, '')
  .replace(/export interface PaymentMethodConfig[\s\S]*?}\n\n/g, '')
  .replace(/: ProductItem\[\]/g, '')
  .replace(/export interface ProductItem[\s\S]*?}\n\n/g, '')
  .replace(/: ReviewItem\[\]/g, '')
  .replace(/export interface ReviewItem[\s\S]*?}\n\n/g, '');

fs.writeFileSync(siteJsPath, siteJs, 'utf8');

console.log('✅ Successfully wrote 20 blog posts to site.ts and site.js!');
