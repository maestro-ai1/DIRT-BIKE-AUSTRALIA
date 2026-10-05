import React from 'react';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { CategoryLanding } from '@/components/CategoryLanding';

// Semrush AU: electric fat bike 720, best fat tyre electric bike australia 320, fat bike australia 210, electric fat tyre bike 210,
// fat tyre electric bike australia 140, e bike cruiser 390 (all Commercial); beach cruiser for sale 50 (Transactional).
const seo = seoFor('/electric-fat-tyre-bikes/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `https://${SITE.domain}/electric-fat-tyre-bikes/` },
  openGraph: { title: seo.ogTitle, description: seo.ogDescription, url: `https://${SITE.domain}/electric-fat-tyre-bikes/`, siteName: 'Electric Dirt Bike Australia', locale: 'en_AU', type: 'website' },
};

const ACE = ['ace-adventure-fat-tyre-electric-bike', 'ace-pro-dual-suspension-fat-tyre-electric-bike', 'ace-x-demon-dual-motor-fat-electric-bike'];
const STUBBIE = ['the-original-stubbie-fat-tyre-electric-bike', 'the-original-stubbie-s-electric-bike'];
const CRUISERS = ['chubbie-v3-electric-beach-cruiser', 'chubbie-s-v3-electric-beach-cruiser', 'riptide-electric-beach-cruiser-bike', 'riptide-s-electric-beach-cruiser-bike'];

export default function ElectricFatTyreBikesPage() {
  const all = PRODUCTS.filter((p) => [...ACE, ...STUBBIE, ...CRUISERS].includes(p.slug));
  const prices = all.map((p) => p.price);
  const lo = prices.length ? Math.min(...prices) : 0;
  const hi = prices.length ? Math.max(...prices) : 0;
  const money = (n: number) => `$${n.toLocaleString('en-AU')}`;

  return (
    <CategoryLanding
      path="/electric-fat-tyre-bikes/"
      crumbs={[{ name: 'Electric Fat Tyre Bikes' }]}
      eyebrow="Fat Tyre E-Bikes · Beach Cruisers"
      h1={seo.h1 as string}
      intro={`Buy an electric fat bike online from Electric Dirt Bike Australia. Our fat tyre electric bikes and electric beach cruisers come from Ampd Bros, an Australian brand established on the Gold Coast in 2019. The range runs from ${money(lo)} to ${money(hi)} AUD and includes the ACE, Stubbie, Chubbie and Riptide. Most models are offered as a 250W road-compliant bike or as an off-road model for private property.`}
      chips={['Ampd Bros Warranty: 2 Years', 'Road-Compliant or Off-Road Models', '10% Crypto & PayID Discount', 'Ships Australia-Wide']}
      groups={[
        { id: 'ace', heading: 'ACE Fat Tyre Electric Bikes', blurb: '20-inch fat tyre ACE e-bikes in step-through and step-over frames. The ACE-X Demon is a dual-motor off-road model.', slugs: ACE },
        { id: 'stubbie', heading: 'Stubbie Fat Tyre Electric Bikes', blurb: 'The Original Stubbie: a 20-inch fat tyre e-bike with a 48V 15Ah battery and 7-speed gearing.', slugs: STUBBIE },
        { id: 'cruisers', heading: 'Electric Beach Cruisers (Chubbie & Riptide)', blurb: '26-inch electric beach cruisers with 48V batteries and up to 80 km listed range.', slugs: CRUISERS },
      ]}
      links={[
        { href: '/electric-mini-bikes/', label: 'Mini electric bikes', note: 'ACE Mini and ACE-X Mini Pro' },
        { href: '/electric-bikes/', label: 'Electric bikes for sale in Australia' },
        { href: '/electric-bikes/cheap/', label: 'Cheap electric bikes' },
        { href: '/electric-motor-bikes/kids/', label: 'Kids electric bikes' },
        { href: '/electric-motor-bikes/e-bike-laws-australia/', label: 'Electric bike laws in Australia' },
        { href: '/blog/electric-fat-bike-guide-australia/', label: 'Electric fat bike guide' },
      ]}
      faqs={[
        { q: 'Where can I buy an electric fat bike in Australia?', a: `Electric Dirt Bike Australia sells fat tyre electric bikes and electric beach cruisers online. The range from Ampd Bros is priced from ${money(lo)} to ${money(hi)} AUD. Bikes are shipped Australia-wide by the supplier from the Gold Coast, QLD. Message us on WhatsApp to confirm stock, frame and colour for your postcode.` },
        { q: 'Are electric fat bikes road legal in Australia?', a: 'Most Ampd Bros fat tyre e-bikes are offered in two factory configurations: a 250W road-compliant model (pedal assist limited to 25 km/h, throttle limited to 6 km/h) and an off-road model for private property only. The ACE-X Demon is listed as off-road only. The model is chosen at purchase and cannot be modified later. Rules vary by state, so check with your state transport authority.' },
        { q: 'What warranty comes with an electric fat bike?', a: 'Ampd Bros e-bikes carry the supplier’s 2-year nationwide warranty on adult e-bikes. It covers manufacturer faults and defects for the original purchaser with a receipt, and excludes wear items such as tyres, tubes, brake pads and seats.' },
        { q: 'What is the best fat tyre electric bike for beach riding?', a: 'The Chubbie and Riptide electric beach cruisers use 26-inch wheels, 48V batteries and listed ranges of 60 to 80 km. For a more compact bike, the Original Stubbie has 20-inch wheels and a 48V 15Ah battery. Compare the specifications on each product page.' },
        { q: 'How long does delivery take?', a: 'Ampd Bros delivers bikes by Toll Ipec with a signature required. The supplier’s delivery estimates for bikes are QLD 2-6 days, NSW 5-10 days, VIC/SA/ACT 6-14 days, NT 6-14 days and WA/TAS up to 16 days. Message us for a freight quote to your postcode.' },
      ]}
      collectionName="Electric Fat Tyre Bikes Australia"
    />
  );
}
