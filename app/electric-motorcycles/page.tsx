import React from 'react';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { CategoryLanding } from '@/components/CategoryLanding';

// Semrush AU: electric motorcycle 1,900, electric motorcycle australia 1,900, e motorcycle 880, electric motorcycles 720,
// electric motorcycles australia 590 (Commercial); electric motorcycle for sale 260 (Transactional); australian electric motorcycle 1,300 (Informational, FAQ).
const seo = seoFor('/electric-motorcycles/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `https://${SITE.domain}/electric-motorcycles/` },
  openGraph: { title: seo.ogTitle, description: seo.ogDescription, url: `https://${SITE.domain}/electric-motorcycles/`, siteName: 'Electric Dirt Bike Australia', locale: 'en_AU', type: 'website' },
};

const ROAD = ['vmoto-soco-tc-max-electric', 'niu-nqi-gt-electric-moped', 'super-soco-cpx-electric-moped'];
const OFFROAD = ['sur-ron-ultra-bee', 'sur-ron-storm-bee-enduro', 'talaria-dragon-enduro', 'stealth-b-52-bomber'];

export default function ElectricMotorcyclesPage() {
  const all = [...ROAD, ...OFFROAD].map((s) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean) as typeof PRODUCTS;
  const lo = Math.min(...all.map((p) => p.price));
  const hi = Math.max(...all.map((p) => p.price));
  const money = (n: number) => `$${n.toLocaleString('en-AU')}`;

  return (
    <CategoryLanding
      path="/electric-motorcycles/"
      crumbs={[{ name: 'Electric Motorcycles' }]}
      eyebrow="Electric Motorcycles Australia"
      h1={seo.h1 as string}
      intro={`Buy an electric motorcycle online from Electric Dirt Bike Australia. Our electric motorcycle range runs from ${money(lo)} to ${money(hi)} AUD and covers road-registered electric motorcycles and mopeds for commuting plus high-output off-road electric motorcycles. Every model has a 12-month Australian warranty and ships Australia-wide from Mittagong NSW.`}
      chips={['12-Month AU Warranty', 'Free Freight Over $1,500', '10% Crypto & PayID Discount', 'LAMS-Approved Option']}
      groups={[
        { id: 'road', heading: 'Road-Registered Electric Motorcycles & Mopeds', blurb: 'Electric motorcycles and mopeds for city and suburban roads. Registration and licence rules apply. The NIU NQi GT is LAMS approved for L and P-plate riders.', slugs: ROAD },
        { id: 'offroad', heading: 'Off-Road Electric Motorcycles', blurb: 'High-power electric motorcycles for trail, enduro and private-property riding. Supplied for off-road use.', slugs: OFFROAD },
      ]}
      links={[
        { href: '/electric-motor-bikes/', label: 'All electric motorbikes' },
        { href: '/electric-motor-bikes/commuter-mopeds/', label: 'Electric mopeds', note: 'road-legal, LAMS approved' },
        { href: '/electric-motor-bikes/e-bike-laws-australia/', label: 'Electric bike laws in Australia' },
        { href: '/blog/best-electric-motorcycle-australia-2026/', label: 'Best electric motorcycles in Australia (2026)' },
        { href: '/blog/road-legal-electric-motorcycle-australia-guide/', label: 'Road-legal electric motorcycle guide' },
      ]}
      faqs={[
        { q: 'Where can I buy an electric motorcycle in Australia?', a: `Electric Dirt Bike Australia sells electric motorcycles for sale online and ships Australia-wide from Mittagong NSW 2575. Prices run from ${money(lo)} to ${money(hi)} AUD. Orders over $1,500 AUD ship free and every bike has a 12-month Australian warranty.` },
        { q: 'Are there Australian electric motorcycles?', a: 'Yes. Stealth Electric Bikes is an Australian brand from Melbourne, building electric motorcycles with chromoly monocoque frames. We stock the Stealth B-52 Bomber, F-37 Trail Fighter and H-52 Competition. See the Stealth range in the shop.' },
        { q: 'Are electric motorcycles road legal in Australia?', a: 'Road-registered models such as the NIU NQi GT (LAMS approved) and the Vmoto Soco TC-Max are listed as road-legal on their product pages. Our off-road electric motorcycles are supplied for private property and designated off-road parks. Registration and licence rules vary by state, so check your state transport authority.' },
        { q: 'How much does an electric motorcycle cost in Australia?', a: `Electric motorcycle prices in our range run from ${money(lo)} to ${money(hi)} AUD, including GST. Pay with crypto or PayID for 10% off.` },
        { q: 'Do you deliver electric motorcycles Australia-wide?', a: 'Yes. We ship from Mittagong NSW to every state, including Sydney, Melbourne, Brisbane, Perth and Adelaide. Free insured freight applies to orders over $1,500 AUD.' },
      ]}
      collectionName="Electric Motorcycles Australia"
    />
  );
}
