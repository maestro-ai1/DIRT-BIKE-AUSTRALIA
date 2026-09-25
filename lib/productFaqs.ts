// lib/productFaqs.ts — Generates 5 high-converting, high-search-volume SEO FAQs for each product

export interface ProductFaq {
  question: string;
  answer: string;
}

export function getProductFaqs(product: {
  name: string;
  brand: string;
  category: string;
  price: number;
  specs?: Record<string, string>;
  shortDescription?: string;
}): ProductFaq[] {
  const isBike = product.category === 'dirt-bikes' || product.category === 'motocross';
  const isBatteryOrCharger = product.category === 'accessories';

  if (isBike) {
    const topSpeed = product.specs?.topSpeed || 'up to 85 km/h';
    const motorPower = product.specs?.motorPeak || 'high-output electric motor';
    const battery = product.specs?.battery || 'high-discharge lithium battery pack';
    const range = product.specs?.range || 'up to 100 km';

    return [
      {
        question: `Is the ${product.name} legal to ride in Australia, and do I need a motorcycle licence?`,
        answer: `In Australia, the ${product.name} is supplied as a high-powered electric dirt bike engineered for off-road recreation, motocross parks, and private property tracks where no licence or vehicle registration is required. Dual-sport models equipped with ADR (Australian Design Rules) compliance kits can be road-registered under state LAMS motorcycle schemes (NSW TfNSW, VicRoads, QLD TMR) requiring a valid motorcycle licence.`,
      },
      {
        question: `What is the top speed, peak motor power, and acceleration of the ${product.name}?`,
        answer: `The ${product.name} produces ${motorPower} with instantaneous electric torque, reaching an off-road top speed of ${topSpeed}. Unlike petrol dirt bikes that require clutch slipping and shifting, the electric powertrain delivers immediate wheel torque from zero RPM for rapid acceleration out of trail corners and up steep hill climbs.`,
      },
      {
        question: `What is the real-world battery range and charging time for the ${product.name} in Australian conditions?`,
        answer: `Equipped with a ${battery}, riders can expect ${range} depending on trail terrain, rider weight, and selected throttle mode (Eco, Sport, or Race). Charging from 0% to 100% takes approximately 3 to 4 hours using the included Australian 240V smart fast charger plugged into standard household wall sockets.`,
      },
      {
        question: `How is the ${product.name} delivered across Australia, and is shipping free?`,
        answer: `Every ${product.name} is packaged in a heavy-duty steel-reinforced transport crate with custom protective foam brackets to prevent transit damage. Because the order value exceeds $1,500 AUD, delivery is 100% FREE nationwide via insured hydraulic tailgate freight carriers direct from our Mittagong NSW 2575 distribution facility with live online tracking.`,
      },
      {
        question: `What Australian warranty and spare parts support is included with the ${product.name}?`,
        answer: `Your purchase includes a 12-Month Comprehensive Australian Factory Warranty covering the frame, electric motor, controller, lithium battery pack, and electrical harness against manufacturer defects. Electric Dirt Bike Australia stocks genuine replacement sprockets, chains, brake pads, tyres, and suspension components locally in our Southern Highlands NSW workshop for rapid turnaround.`,
      },
    ];
  }

  if (isBatteryOrCharger) {
    return [
      {
        question: `Which electric dirt bike models are compatible with the ${product.name}?`,
        answer: `The ${product.name} is engineered for seamless plug-and-play compatibility with popular Australian electric trail bikes including Sur-Ron Light Bee X, Sur-Ron Ultra Bee, Talaria Sting R MX4, and E-Ride Pro platforms. High-current connectors ensure low resistance and zero voltage sag under heavy off-road throttle demand.`,
      },
      {
        question: `What performance, range, and charging gains will I see with the ${product.name}?`,
        answer: `Upgrading to the ${product.name} significantly enhances your ride time, reduces recharge cycles, and maintains stable voltage during long bush rides. Australian riders report up to 50% more singletrack range and quicker turnaround times between moto heats.`,
      },
      {
        question: `How does the smart battery management system (BMS) handle hot Australian summer riding conditions?`,
        answer: `The integrated high-current smart BMS features active cell balancing, high and low temperature cutoffs, over-charge protection, and Bluetooth smartphone telemetry. In Australian summer conditions exceeding 35°C, thermal sensors actively monitor internal cell banks to protect pack health and prolong cycle longevity.`,
      },
      {
        question: `How many charge cycles can I expect from the ${product.name} before capacity drops?`,
        answer: `Manufactured with premium grade-A lithium-ion cells (such as Molicel and Samsung), the pack retains over 80% of its rated capacity even after 600+ full charge-discharge cycles, equating to years of regular weekend trail riding when properly maintained.`,
      },
      {
        question: `What Australian warranty and freight coverage applies to the ${product.name}?`,
        answer: `The ${product.name} is backed by an Australian replacement warranty against cell and BMS defects. Orders over $1,500 AUD receive 100% free nationwide express shipping with dangerous goods lithium certification and protective packaging from Mittagong NSW 2575.`,
      },
    ];
  }

  // Parts and Upgrades category
  return [
    {
      question: `Is the ${product.name} a direct bolt-on installation on Australian electric dirt bikes?`,
      answer: `Yes, the ${product.name} is precision CNC machined and engineered as a direct replacement upgrade for factory Sur-Ron, Talaria, and Segway components. It uses existing mounting points without requiring irreversible frame modifications or custom fabrication.`,
    },
    {
      question: `How does the ${product.name} improve off-road durability on Australian rocky trails?`,
      answer: `Constructed from heavy-duty aerospace-grade materials, the ${product.name} is tested against harsh Australian terrain, including granite boulders, washouts, and red dirt roost. It provides superior rigidity, impact deflection, and component protection over lightweight stock bicycle parts.`,
    },
    {
      question: `Will installing the ${product.name} affect my electric dirt bike factory warranty?`,
      answer: `Installing genuine performance parts and protection upgrades supplied by Electric Dirt Bike Australia does not void your statutory rights. All components are factory-approved upgrades designed to work safely within the bike's electrical and mechanical tolerances.`,
    },
    {
      question: `What tools are needed to install the ${product.name} at home?`,
      answer: `Most riders can complete installation in 20 to 45 minutes using standard metric Allen hex keys, a torque wrench, and basic hand tools. Our Mittagong NSW technical support team is also available via phone and WhatsApp (+61 420 128 746) to assist with installation guidance.`,
    },
    {
      question: `How fast is shipping for the ${product.name} across Australia?`,
      answer: `Parts and accessories are in stock at our Southern Highlands NSW 2575 facility and dispatch within 24 business hours via Australia Post Express or StarTrack Couriers. Combined orders exceeding $1,500 AUD qualify for 100% free shipping nationwide.`,
    },
  ];
}
