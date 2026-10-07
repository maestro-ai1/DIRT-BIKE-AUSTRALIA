import React from 'react';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { CategoryLanding } from '@/components/CategoryLanding';

// Semrush AU: cheap electric dirt bikes 260, cheap electric dirt bike 140, cheap e dirt bike 140, cheapest electric dirt bike 110, electric dirt bike cheap 90, affordable electric dirt bike 50 (Commercial).
const seo = seoFor('/electric-dirt-bikes/cheap/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `https://${SITE.domain}/electric-dirt-bikes/cheap/` },
  openGraph: { title: seo.ogTitle, description: seo.ogDescription, url: `https://${SITE.domain}/electric-dirt-bikes/cheap/`, siteName: 'Electric Dirt Bike Australia', locale: 'en_AU', type: 'website' },
};

const YOUTH = ['razor-mx650-electric-kids', 'dhz-electric-kids-mini-off-road-dirt-bike-36v-350w-motor', 'edba-moto-50-kids-beginner', 'crossfire-ecr1500-kids-electric-dirt-bike'];
const ADULT = ['dhz-6000-evader-off-road-electric-dirt-bike', 'dhz-5000e-5000w-electric-dirt-bike', 'dhz-7500e-7500w-electric-dirt-bike-19-front-16-rear-off-road', 'segway-x160-compact', 'talaria-xxx-black-edition', 'sur-ron-light-bee-x', 'segway-x260-dirt-ebike'];
const TEEN = ['torrot-motocross-two-junior', 'oset-20-0-racing-junior'];

export default function CheapElectricDirtBikesPage() {
  const money = (n: number) => `$${n.toLocaleString('en-AU')}`;
  const price = (s: string) => PRODUCTS.find((p) => p.slug === s)?.price ?? 0;
  const youthLo = Math.min(...YOUTH.map(price));
  const adultLo = Math.min(...ADULT.map(price));
  const adultHi = Math.max(...ADULT.map(price));
  return (
    <CategoryLanding
      path="/electric-dirt-bikes/cheap/"
      crumbs={[{ name: 'Electric Dirt Bikes', href: '/electric-dirt-bikes/' }, { name: 'Cheap Electric Dirt Bikes' }]}
      eyebrow="Budget Electric Dirt Bikes"
      h1={seo.h1 as string}
      intro={`Shopping for cheap electric dirt bikes? Our lowest-priced youth electric dirt bikes start at ${money(youthLo)}, and our lowest-priced adult electric dirt bike is ${money(adultLo)} AUD. Adult models in this range run up to ${money(adultHi)} for the Segway X260, and electric pit bikes start lower on our electric pit bikes page. We list real specifications and prices, with a 12-month warranty and free freight over $1,500. We do not sell unbranded budget bikes.`}
      chips={['Prices Shown Up Front', '12-Month Warranty', 'Free Freight Over $1,500', '10% Crypto & PayID Discount']}
      groups={[
        { id: 'youth', heading: 'Cheap Electric Dirt Bikes for Kids', blurb: 'Entry-level youth bikes for first-time riders on private property.', slugs: YOUTH },
        { id: 'teen', heading: 'Youth Racing Electric Dirt Bikes', blurb: 'Step-up youth bikes with quick-swap batteries and more power.', slugs: TEEN },
        { id: 'adult', heading: 'Lowest-Priced Adult Electric Dirt Bikes', blurb: 'The most affordable adult electric dirt bikes in our range, ordered by price.', slugs: [...ADULT].sort((a, b) => price(a) - price(b)) },
      ]}
      links={[
        { href: '/electric-dirt-bikes/', label: 'All electric dirt bikes for sale' },
        { href: '/electric-dirt-bikes/kids/', label: 'Electric dirt bikes for kids' },
        { href: '/electric-dirt-bikes/sur-ron/', label: 'Sur-Ron electric bikes' },
        { href: '/electric-bikes/cheap/', label: 'Cheap electric bikes (e-bikes and cruisers)' },
        { href: '/blog/cheapest-electric-dirt-bike-australia-price-ladder/', label: 'Cheapest electric dirt bike: price ladder by budget' },
        { href: '/blog/electric-dirt-bike-finance-payment-plans-australia/', label: 'Electric dirt bike finance and payment options' },
      ]}
      faqs={[
        { q: 'What is the cheapest electric dirt bike in Australia?', a: `The cheapest electric dirt bike we stock is the Razor MX650 youth bike at ${money(price('razor-mx650-electric-kids'))} AUD. The cheapest adult electric dirt bike is the DHZ 6000 Evader at ${money(price('dhz-6000-evader-off-road-electric-dirt-bike'))} AUD. Prices can change, so check each product page.` },
        { q: 'Are cheap electric dirt bikes any good?', a: 'Every bike here is a named brand with published specifications: motor power, battery size, top speed and weight. Compare those numbers, not the price alone. Cheaper bikes usually trade away power, range or build quality.' },
        { q: 'Can I buy a cheap e dirt bike for my kid?', a: `Yes. Our youth electric dirt bikes start at ${money(youthLo)}. Pick a bike by your child's size, experience and the top speed listed on the product page, and always supervise riding and use a helmet and protective gear.` },
        { q: 'Is there finance or a payment discount?', a: 'Pay with crypto (BTC or USDT) or PayID for an instant 10% discount. See our finance and payment plans guide for other options.' },
        { q: 'Do cheap electric dirt bikes come with a warranty?', a: 'Bikes supplied by Electric Dirt Bike Australia carry a 12-month Australian warranty. See the product page and the warranty and service page for details.' },
      ]}
      collectionName="Cheap Electric Dirt Bikes Australia"
    />
  );
}
