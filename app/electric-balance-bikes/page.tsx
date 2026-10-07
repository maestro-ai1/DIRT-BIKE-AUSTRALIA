import React from 'react';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { CategoryLanding } from '@/components/CategoryLanding';

// Semrush AU (full bank): electric balance bike for sale 20 (T); electric balance bike australia 70 (C). Products imported from the old site.
const seo = seoFor('/electric-balance-bikes/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `https://${SITE.domain}/electric-balance-bikes/` },
  openGraph: { title: seo.ogTitle, description: seo.ogDescription, url: `https://${SITE.domain}/electric-balance-bikes/`, siteName: 'Electric Dirt Bike Australia', locale: 'en_AU', type: 'website' },
};

export default function ElectricBalanceBikesPage() {
  const money = (n: number) => `$${n.toLocaleString('en-AU')}`;
  const bikes = PRODUCTS.filter((p) => p.category === 'balance-bikes').sort((a, b) => a.price - b.price);
  const lo = bikes[0]?.price ?? 0;
  const hi = bikes[bikes.length - 1]?.price ?? 0;
  const small = bikes.filter((p) => p.price < 1300);
  const big = bikes.filter((p) => p.price >= 1300);
  return (
    <CategoryLanding
      path="/electric-balance-bikes/"
      crumbs={[{ name: 'Electric Bikes', href: '/electric-bikes/' }, { name: 'Electric Balance Bikes' }]}
      eyebrow="Kids Electric Balance Bikes"
      h1={seo.h1 as string}
      intro={`Shopping for an electric balance bike in Australia? We stock ${bikes.length} kids electric balance bikes and e-BMX bikes from ${money(lo)} to ${money(hi)} AUD, from Apollo, GoBike, Flight Risk, YCF, DHZ and Wired Bikes. Start young riders on a 12 inch model and step up to 16, 20 and 24 inch e-bikes as they grow. Every listing shows price, motor power and key specs. Free freight over $1,500 and 10% off with crypto or PayID.`}
      chips={['Price And Specs Shown', 'Sizes From 12 To 24 Inch', 'Free Freight Over $1,500', '10% Crypto & PayID Discount']}
      groups={[
        { id: 'small', heading: `Electric Balance Bikes Under ${money(1300)}`, blurb: 'Light electric balance bikes for toddlers and young kids learning balance and throttle control.', slugs: small.map((p) => p.slug) },
        { id: 'big', heading: 'Kids Electric BMX and Step-Up Electric Bikes', blurb: 'Larger kids and teen electric bikes with bigger motors and suspension for confident riders.', slugs: big.map((p) => p.slug) },
      ]}
      links={[
        { href: '/electric-dirt-bikes/kids/', label: 'Electric dirt bikes for kids' },
        { href: '/electric-pit-bikes/', label: 'Electric pit bikes' },
        { href: '/electric-motor-bikes/kids/', label: 'Kids electric bikes and motorbikes' },
        { href: '/electric-mini-bikes/', label: 'Mini electric bikes' },
        { href: '/blog/dirt-bike-for-kids-electric-buying-checklist/', label: 'Dirt bike for kids: buying checklist' },
        { href: '/blog/childrens-dirt-bike-electric-sizing-safety-guide/', label: 'Childrens dirt bike sizing and safety guide' },
      ]}
      faqs={[
        { q: 'Where can I buy an electric balance bike in Australia?', a: `Electric Dirt Bike Australia sells kids electric balance bikes online from ${money(lo)} to ${money(hi)} AUD. Add the bike to your cart and pay by card, crypto or PayID. Free freight applies on orders over $1,500.` },
        { q: 'How much does an electric balance bike cost?', a: `Our electric balance bikes start at ${money(lo)} for the Apollo RXF DNA 16 inch. Larger kids e-bikes and e-BMX bikes cost more, up to ${money(hi)}.` },
        { q: 'What size electric balance bike should I choose?', a: 'Choose by your child\'s height and confidence. 12 inch models suit the youngest riders, and 16, 20 and 24 inch models suit growing kids and teens. Check the listed age range and weight limit on each product page.' },
        { q: 'Are electric balance bikes safe for toddlers?', a: 'Pick a low-power model with a limited top speed, supervise riding, and always use a helmet and protective gear. Read the manufacturer manual before the first ride.' },
        { q: 'Do you offer a payment discount?', a: 'Yes. Pay with crypto (BTC or USDT) or PayID for an instant 10% discount on your order.' },
      ]}
      collectionName="Electric Balance Bikes Australia"
    />
  );
}
