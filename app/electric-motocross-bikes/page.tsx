import React from 'react';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { CategoryLanding } from '@/components/CategoryLanding';

// Semrush AU: electric motocross motorcycle 880, electric motocross bike 720, e motocross bike 260, electric mx bike 90 (all Commercial).
// Main keyword (inferred transactional, 20/mo): electric motocross bike for sale.
const seo = seoFor('/electric-motocross-bikes/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `https://${SITE.domain}/electric-motocross-bikes/` },
  openGraph: { title: seo.ogTitle, description: seo.ogDescription, url: `https://${SITE.domain}/electric-motocross-bikes/`, siteName: 'Electric Dirt Bike Australia', locale: 'en_AU', type: 'website' },
};

const MX = ['stark-varg-ex-80hp', 'stark-varg-alpha-60hp', 'sur-ron-storm-bee-mx', 'stealth-h-52-competition', 'velimotor-vmx12-motocross'];
const ENDURO = ['sur-ron-storm-bee-enduro', 'talaria-dragon-enduro'];

export default function ElectricMotocrossBikesPage() {
  const mx = MX.map((s) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean) as typeof PRODUCTS;
  const prices = mx.map((p) => p.price);
  const lo = mx.find((p) => p.price === Math.min(...prices))!;
  const hi = mx.find((p) => p.price === Math.max(...prices))!;
  const money = (n: number) => `$${n.toLocaleString('en-AU')}`;

  return (
    <CategoryLanding
      path="/electric-motocross-bikes/"
      crumbs={[{ name: 'Electric Motocross Bikes' }]}
      eyebrow="Competition Electric Motocross"
      h1={seo.h1 as string}
      intro={`Buy an electric motocross bike online from Electric Dirt Bike Australia. Our electric motocross motorcycle range runs from ${money(lo.price)} (${lo.name.replace(/\s*\([^)]*\)/, '')}) to ${money(hi.price)} (${hi.name.replace(/\s*\([^)]*\)/, '')}) AUD. Every bike has a 12-month Australian warranty and ships Australia-wide from Mittagong NSW.`}
      chips={['12-Month AU Warranty', 'Free Freight Over $1,500', '10% Crypto & PayID Discount', 'Pre-Delivery Inspected']}
      groups={[
        { id: 'mx', heading: 'Electric Motocross Bikes for Sale', blurb: 'Track-focused electric motocross bikes, including the Stark Varg, Sur-Ron Storm Bee MX, Stealth H-52 and Velimotor VMX12. For closed-course tracks and private property.', slugs: MX },
        { id: 'enduro', heading: 'Full-Size Electric Enduro Bikes', blurb: 'High-output enduro platforms for trail and bush riding.', slugs: ENDURO },
      ]}
      links={[
        { href: '/electric-dirt-bikes/', label: 'Electric dirt bikes for sale' },
        { href: '/blog/electric-dirt-bike-vs-petrol-motocross-running-costs/', label: 'Electric vs petrol motocross', note: '2-year cost breakdown' },
        { href: '/blog/future-of-electric-motocross-racing-in-australia/', label: 'Future of electric motocross in Australia' },
        { href: '/blog/stark-varg-motocross-revolution-australia/', label: 'Stark Varg 80HP guide' },
      ]}
      faqs={[
        { q: 'Where can I buy an electric motocross bike in Australia?', a: `Electric Dirt Bike Australia sells electric motocross bikes online and ships Australia-wide from Mittagong NSW 2575. Choose from ${mx.length} competition models priced from ${money(lo.price)} to ${money(hi.price)} AUD. Orders over $1,500 AUD ship free and every bike has a 12-month Australian warranty.` },
        { q: 'How much does an electric motocross bike cost in Australia?', a: `Our electric motocross bikes range from ${money(lo.price)} for the ${lo.name.replace(/\s*\([^)]*\)/, '')} to ${money(hi.price)} for the ${hi.name.replace(/\s*\([^)]*\)/, '')}. All prices are in AUD and include GST, and you save 10% when you pay with crypto or PayID.` },
        { q: 'Can I ride an electric motocross bike on the road?', a: 'Our competition electric motocross bikes are supplied for closed-course tracks, designated off-road parks and private property. Road registration depends on your state, so check with your state transport authority before riding on public roads.' },
        { q: 'What is the difference between an electric motocross bike and an electric dirt bike?', a: 'Electric motocross bikes are competition-spec machines built for tracks, with higher power and long-travel suspension. The Stark Varg EX 80HP, for example, lists 80 horsepower and KYB 310mm suspension travel. Electric dirt bikes cover lighter trail and enduro riding. We sell both, so compare them on the electric dirt bikes page.' },
        { q: 'Do you deliver electric motocross bikes Australia-wide?', a: 'Yes. We ship from Mittagong NSW to every state, including Sydney, Melbourne, Brisbane, Perth and Adelaide. Free insured freight applies to orders over $1,500 AUD.' },
      ]}
      collectionName="Electric Motocross Bikes Australia"
    />
  );
}
