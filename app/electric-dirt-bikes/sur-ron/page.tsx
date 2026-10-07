import React from 'react';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { CategoryLanding } from '@/components/CategoryLanding';

// Semrush AU: surron for sale 260, sur ron ebike for sale 140, sur ron electric bike price 140, surrons for sale 110, surron ebike price 70, surron light bee x price australia 70, surron electric bike for sale 50 (all Transactional).
const seo = seoFor('/electric-dirt-bikes/sur-ron/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `https://${SITE.domain}/electric-dirt-bikes/sur-ron/` },
  openGraph: { title: seo.ogTitle, description: seo.ogDescription, url: `https://${SITE.domain}/electric-dirt-bikes/sur-ron/`, siteName: 'Electric Dirt Bike Australia', locale: 'en_AU', type: 'website' },
};

const BIKES = ['sur-ron-light-bee-x', 'sur-ron-storm-bee-mx', 'sur-ron-ultra-bee', 'sur-ron-storm-bee-enduro'];
const POWER = ['sur-ron-oem-60v-40ah-replacement', '60v-53ah-high-capacity-pack', '15a-fast-charger-60v-72v'];

export default function SurRonPage() {
  const bikes = PRODUCTS.filter((p) => BIKES.includes(p.slug)).sort((a, b) => a.price - b.price);
  const money = (n: number) => `$${n.toLocaleString('en-AU')}`;
  const lo = bikes[0]?.price ?? 0;
  const hi = bikes[bikes.length - 1]?.price ?? 0;
  const lbx = PRODUCTS.find((p) => p.slug === 'sur-ron-light-bee-x');
  const oem = PRODUCTS.find((p) => p.slug === 'sur-ron-oem-60v-40ah-replacement');
  const short = (n: string) => n.replace(/ \(.*\)/, '');
  return (
    <CategoryLanding
      path="/electric-dirt-bikes/sur-ron/"
      crumbs={[{ name: 'Electric Dirt Bikes', href: '/electric-dirt-bikes/' }, { name: 'Sur-Ron for Sale' }]}
      eyebrow="Sur-Ron Electric Bikes"
      h1={seo.h1 as string}
      intro={`Looking for a Surron for sale in Australia? Electric Dirt Bike Australia lists four Sur-Ron electric bikes with the full price shown: the Light Bee X from ${money(lbx?.price ?? lo)}, then the Storm Bee MX, the Ultra Bee and the Storm Bee Enduro up to ${money(hi)} AUD. Every bike ships from Australian stock with free freight over $1,500 and a 12-month warranty. Pay with crypto or PayID for 10% off.`}
      chips={['Genuine Australian Stock', '12-Month Warranty', 'Free Freight Over $1,500', '10% Crypto & PayID Discount']}
      groups={[
        { id: 'bikes', heading: 'Sur-Ron Electric Bikes for Sale', blurb: 'Light Bee X for trail riding, Storm Bee for motocross and enduro, Ultra Bee for high-power off-road use. Prices are in AUD.', slugs: bikes.map((p) => p.slug) },
        { id: 'power', heading: 'Sur-Ron Batteries & Chargers', blurb: 'Replacement and upgrade packs and a fast charger for 60V Sur-Ron bikes. Check compatibility on each product page.', slugs: POWER },
      ]}
      links={[
        { href: '/electric-dirt-bikes/', label: 'All electric dirt bikes for sale' },
        { href: '/electric-motocross-bikes/', label: 'Electric motocross bikes' },
        { href: '/electric-bike-batteries/', label: 'Electric bike batteries and chargers' },
        { href: '/blog/sur-ron-electric-bike-price-australia/', label: 'Sur-Ron electric bike price in Australia', note: 'models compared' },
        { href: '/blog/sur-ron-light-bee-x-price-australia-what-you-get/', label: 'Surron Light Bee X price in Australia' },
        { href: '/blog/sur-ron-horsepower-power-specs-explained/', label: 'Sur-Ron horsepower and power specs' },
      ]}
      faqs={[
        { q: 'Where can I buy a Surron in Australia?', a: `Electric Dirt Bike Australia sells the Sur-Ron Light Bee X, Storm Bee MX, Ultra Bee and Storm Bee Enduro online, from ${money(lo)} to ${money(hi)} AUD. Add your bike to the cart, pay by card, crypto or PayID, and it ships Australia-wide from our Mittagong NSW base. Free freight applies on orders over $1,500.` },
        { q: 'What is the Sur-Ron electric bike price in Australia?', a: `Current prices: ${bikes.map((p) => `${short(p.name)} ${money(p.price)}`).join(', ')}. Prices are in AUD and can change, so check the product page before you order.` },
        { q: 'How much is the Surron Light Bee X in Australia?', a: `The Sur-Ron Light Bee X is ${money(lbx?.price ?? 0)} AUD${lbx?.compareAtPrice ? ` (listed at ${money(lbx.compareAtPrice)} before the discount)` : ''}. It has a 6kW peak motor and a 60V 40Ah battery. A genuine OEM replacement battery is ${money(oem?.price ?? 0)}.` },
        { q: 'Do you offer a warranty on Sur-Ron bikes?', a: 'Yes. Sur-Ron bikes and accessories supplied by Electric Dirt Bike Australia carry a 12-month Australian warranty. See the warranty and service page for what is covered and how to make a claim.' },
        { q: 'Are Sur-Ron bikes road legal?', a: 'Sur-Ron bikes sold here are off-road recreational vehicles for private property and designated off-road areas. Road registration rules differ by state, so check with your state transport authority before riding on public roads.' },
        { q: 'Can I pay with crypto or PayID?', a: 'Yes. Pay with BTC, USDT or PayID at checkout and receive an instant 10% discount on your order.' },
      ]}
      collectionName="Surron for Sale Australia"
    />
  );
}
