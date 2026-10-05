import React from 'react';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { CategoryLanding } from '@/components/CategoryLanding';

// Semrush AU: mini e bike 1,000, electric mini bike 590, mini electric bike 590, mini ebike 590 (all Commercial).
// Main keyword (inferred transactional, 20/mo): electric mini bikes for sale.
const seo = seoFor('/electric-mini-bikes/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `https://${SITE.domain}/electric-mini-bikes/` },
  openGraph: { title: seo.ogTitle, description: seo.ogDescription, url: `https://${SITE.domain}/electric-mini-bikes/`, siteName: 'Electric Dirt Bike Australia', locale: 'en_AU', type: 'website' },
};

const MINI = ['ace-mini-electric-fat-bike', 'ace-x-mini-pro-electric-bike'];

export default function ElectricMiniBikesPage() {
  const items = PRODUCTS.filter((p) => MINI.includes(p.slug));
  const prices = items.map((p) => p.price);
  const lo = prices.length ? Math.min(...prices) : 0;
  const hi = prices.length ? Math.max(...prices) : 0;
  const money = (n: number) => `$${n.toLocaleString('en-AU')}`;

  return (
    <CategoryLanding
      path="/electric-mini-bikes/"
      crumbs={[{ name: 'Mini Electric Bikes' }]}
      eyebrow="Mini E-Bikes · Compact Fat Tyre"
      h1={seo.h1 as string}
      intro={`Buy a mini electric bike online from Electric Dirt Bike Australia. The ACE Mini and ACE-X Mini Pro from Ampd Bros are compact mini fat bikes with 16-inch wheels and a 48V 15Ah battery, priced from ${money(lo)} to ${money(hi)} AUD. The ACE Mini comes in step-through and step-over frames; the ACE-X Mini Pro adds dual suspension.`}
      chips={['Ampd Bros Warranty: 2 Years', 'Road-Compliant or Off-Road Models', '10% Crypto & PayID Discount', 'Ships Australia-Wide']}
      groups={[{ id: 'mini', heading: 'Mini Electric Fat Bikes', blurb: 'Compact 16-inch fat tyre e-bikes. 250W continuous power, hydraulic disc brakes and a 60 km listed range.', slugs: MINI }]}
      links={[
        { href: '/electric-fat-tyre-bikes/', label: 'All electric fat tyre bikes and beach cruisers' },
        { href: '/electric-bikes/cheap/', label: 'Cheap electric bikes' },
        { href: '/electric-motor-bikes/kids/', label: 'Kids electric bikes' },
        { href: '/electric-bikes/', label: 'Electric bikes for sale in Australia' },
        { href: '/electric-motor-bikes/e-bike-laws-australia/', label: 'Electric bike laws in Australia' },
      ]}
      faqs={[
        { q: 'Where can I buy a mini electric bike in Australia?', a: `Electric Dirt Bike Australia sells mini e bikes online. The ACE Mini and ACE-X Mini Pro are priced from ${money(lo)} to ${money(hi)} AUD and ship Australia-wide from the supplier, Ampd Bros, on the Gold Coast, QLD. Message us on WhatsApp to confirm stock, frame and colour.` },
        { q: 'What is a mini ebike and who is it for?', a: 'A mini ebike is a compact electric bike with smaller 16-inch wheels. The supplier lists a maximum load of 120 kg and seat heights from 730 mm, and positions the ACE Mini for first-time e-bike owners, teenagers and riders who want a smaller bike.' },
        { q: 'Is a mini electric bike road legal?', a: 'The ACE Mini and ACE-X Mini Pro are offered as a 250W road-compliant model (pedal assist limited to 25 km/h, throttle limited to 6 km/h) or as an off-road model for private property only. The model is chosen at purchase and cannot be modified later. Rules vary by state.' },
        { q: 'What warranty comes with a mini electric bike?', a: 'Ampd Bros adult e-bikes carry a 2-year nationwide warranty covering manufacturer faults and defects for the original purchaser with a receipt. Wear items such as tyres, tubes, brake pads and seats are excluded.' },
      ]}
      collectionName="Mini Electric Bikes Australia"
    />
  );
}
