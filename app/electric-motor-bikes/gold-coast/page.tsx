import React from 'react';
import { SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { CategoryLanding } from '@/components/CategoryLanding';

import { DEFAULT_OG_IMAGES } from '@/lib/ogDefaults';
// Semrush AU: electric bicycle gold coast 1,600 (Commercial), electric bike gold coast 140 (Commercial).
const seo = seoFor('/electric-motor-bikes/gold-coast/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `https://${SITE.domain}/electric-motor-bikes/gold-coast/` },
  openGraph: { title: seo.ogTitle, description: seo.ogDescription, url: `https://${SITE.domain}/electric-motor-bikes/gold-coast/`, siteName: 'Electric Dirt Bike Australia', locale: 'en_AU', type: 'website', images: DEFAULT_OG_IMAGES },
};

export default function ElectricBikesGoldCoastPage() {
  return (
    <CategoryLanding
      path="/electric-motor-bikes/gold-coast/"
      crumbs={[{ name: 'Electric Motor Bikes', href: '/electric-motor-bikes/' }, { name: 'Gold Coast' }]}
      eyebrow="Electric Bicycle Gold Coast · QLD"
      h1={seo.h1 as string}
      intro="Buy an electric bicycle online for the Gold Coast from Electric Dirt Bike Australia. We ship e-bikes, electric motorbikes, mopeds and electric dirt bikes from Mittagong NSW to the Gold Coast and across Queensland. Free insured freight on orders over $1,500, a 12-month Australian warranty and 10% off with crypto or PayID."
      chips={["Delivered to the Gold Coast & QLD","Free Insured Freight Over $1,500","12-Month AU Warranty","10% Crypto & PayID Discount"]}
      groups={[
        { id: 'commuter', heading: 'E-Bikes & Mopeds for Gold Coast Riders', blurb: 'Ampd Bros fat tyre e-bikes come as a 250W road-compliant model (25 km/h assist, no licence or registration) or an off-road model. Electric mopeds are road-registered.', slugs: ['chubbie-v3-electric-beach-cruiser', 'the-original-stubbie-fat-tyre-electric-bike', 'niu-nqi-gt-electric-moped', 'super-soco-cpx-electric-moped'] },
        { id: 'dirt', heading: 'Electric Dirt Bikes for Queensland Trails', blurb: 'Off-road electric dirt bikes for private property and designated off-road parks in South-East Queensland.', slugs: ['sur-ron-light-bee-x', 'talaria-sting-r-mx4', 'sur-ron-ultra-bee'] },
      ]}
      links={[
        { href: '/electric-bikes/', label: 'Electric bikes for sale in Australia' },
        { href: '/electric-motor-bikes/e-bike-laws-australia/', label: 'Electric bike laws in Australia', note: 'including Queensland' },
        { href: '/shipping-and-delivery/', label: 'Shipping and delivery' },
        { href: '/faq/', label: 'Electric dirt bike FAQ' },
      ]}
      faqs={[
        { q: "Where can I buy an electric bicycle on the Gold Coast?", a: "You can buy an electric bicycle for the Gold Coast online from Electric Dirt Bike Australia. We dispatch from Mittagong NSW and deliver across Queensland. Free insured freight applies to orders over $1,500." },
        { q: "Do you deliver electric bikes to the Gold Coast?", a: "Yes. We ship e-bikes, electric motorbikes and electric dirt bikes to the Gold Coast and the rest of QLD. Message us on WhatsApp for a delivery estimate to your suburb." },
        { q: "Are electric bikes legal on Gold Coast paths?", a: "Pedal-assist e-bikes that meet the Australian 250W and 25 km/h standard are treated as bicycles. Higher-powered bikes need registration for the road. Check local council path rules and the Queensland laws guide." },
      ]}
      collectionName="Electric Bicycle Gold Coast"
    />
  );
}
