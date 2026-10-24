import React from 'react';
import { SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { CategoryLanding } from '@/components/CategoryLanding';

import { DEFAULT_OG_IMAGES } from '@/lib/ogDefaults';
// Semrush AU: e bikes brisbane 1,300 (Navigational + Commercial), electric motorbike brisbane 90 (Commercial);
// electric bikes for sale brisbane 90, e bikes for sale brisbane 70 (Transactional);
// brisbane electric bikes 480, electric bicycle brisbane 590, electric bikes in brisbane 210 (Navigational, answered in the FAQ).
const seo = seoFor('/electric-motor-bikes/brisbane/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `https://${SITE.domain}/electric-motor-bikes/brisbane/` },
  openGraph: { title: seo.ogTitle, description: seo.ogDescription, url: `https://${SITE.domain}/electric-motor-bikes/brisbane/`, siteName: 'Electric Dirt Bike Australia', locale: 'en_AU', type: 'website', images: DEFAULT_OG_IMAGES },
};

export default function ElectricBikesBrisbanePage() {
  return (
    <CategoryLanding
      path="/electric-motor-bikes/brisbane/"
      crumbs={[{ name: 'Electric Motor Bikes', href: '/electric-motor-bikes/' }, { name: 'Brisbane' }]}
      eyebrow="Electric Bikes Brisbane · QLD"
      h1={seo.h1 as string}
      intro="Buy an electric bike online for Brisbane from Electric Dirt Bike Australia. We ship e-bikes, electric motorbikes, mopeds and electric dirt bikes from Mittagong NSW to Brisbane and across Queensland. Free insured freight on orders over $1,500 and a 12-month Australian warranty on every bike."
      chips={['Delivered to Brisbane & QLD', 'Free Insured Freight Over $1,500', '12-Month AU Warranty', '10% Crypto & PayID Discount']}
      groups={[
        { id: 'commuter', heading: 'E-Bikes & Mopeds for Brisbane Riders', blurb: 'Ampd Bros fat tyre e-bikes come as a 250W road-compliant model (25 km/h assist, no registration; Queensland riders must be 16 and hold a licence) or an off-road model. Electric mopeds are road-registered.', slugs: ['chubbie-v3-electric-beach-cruiser', 'the-original-stubbie-fat-tyre-electric-bike', 'niu-nqi-gt-electric-moped', 'super-soco-cpx-electric-moped'] },
        { id: 'dirt', heading: 'Electric Dirt Bikes for Queensland Trails', blurb: 'Off-road electric dirt bikes for private property and designated off-road parks.', slugs: ['sur-ron-light-bee-x', 'talaria-sting-r-mx4', 'sur-ron-ultra-bee'] },
      ]}
      links={[
        { href: '/electric-bikes/', label: 'Electric bikes for sale in Australia' },
        { href: '/electric-motor-bikes/e-bike-laws-australia/', label: 'Electric bike laws in Australia', note: 'including Queensland' },
        { href: '/shipping-and-delivery/', label: 'Shipping and delivery' },
        { href: '/faq/', label: 'Electric dirt bike FAQ' },
      ]}
      faqs={[
        { q: 'Do you sell electric bikes in Brisbane?', a: 'Yes. Electric Dirt Bike Australia sells electric bikes online and delivers them to Brisbane from our Mittagong NSW workshop. Our range includes fat tyre e-bikes, electric mopeds, electric motorbikes and electric dirt bikes.' },
        { q: 'Can I buy an electric bicycle in Brisbane?', a: 'Yes. The CHUBBIE 3 ($3,490) and Stubbie S3 ($2,590) are available as 250W road-compliant pedal-assist e-bikes that need no registration or number plate (Queensland riders must be 16 and hold a licence, at least a Learner, from 31 August 2026); choose the road-compliant option when you order. They ship to Brisbane with free insured freight on orders over $1,500 AUD.' },
        { q: 'Do you deliver electric bikes in Brisbane and Queensland?', a: 'Yes. We deliver to Brisbane and regional Queensland. Free insured freight applies to orders over $1,500 AUD. Message us on WhatsApp for a delivery estimate to your postcode.' },
        { q: 'Are electric bikes legal in Queensland?', a: 'Pedal-assist e-bikes that meet the Australian 250W and 25 km/h assist standard are treated as bicycles. Higher-powered electric motorbikes must be registered for the road or used off-road only. Rules vary by state, so check Queensland transport rules and read our electric bike laws guide.' },
        { q: 'How much do electric bikes cost in Brisbane?', a: 'Our fat tyre e-bikes start at $2,190, electric mopeds from $5,490 and adult electric dirt bikes from $5,490. Prices are in AUD including GST, with 10% off when you pay with crypto or PayID.' },
      ]}
      collectionName="Electric Bikes Brisbane"
    />
  );
}
