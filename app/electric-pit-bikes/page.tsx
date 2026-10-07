import React from 'react';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { CategoryLanding } from '@/components/CategoryLanding';

// Semrush AU (full bank): electric pit bike for sale 40 (T); electric pit bikes 110, e pit bike 110, fast electric pit bike 110, electric pitbike 140 (C). Products imported from the old site.
const seo = seoFor('/electric-pit-bikes/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `https://${SITE.domain}/electric-pit-bikes/` },
  openGraph: { title: seo.ogTitle, description: seo.ogDescription, url: `https://${SITE.domain}/electric-pit-bikes/`, siteName: 'Electric Dirt Bike Australia', locale: 'en_AU', type: 'website' },
};

export default function ElectricPitBikesPage() {
  const money = (n: number) => `$${n.toLocaleString('en-AU')}`;
  const bikes = PRODUCTS.filter((p) => p.category === 'pit-bikes').sort((a, b) => a.price - b.price);
  const lo = bikes[0]?.price ?? 0;
  const hi = bikes[bikes.length - 1]?.price ?? 0;
  const entry = bikes.filter((p) => p.price < 3000);
  const power = bikes.filter((p) => p.price >= 3000);
  const cheapest = bikes[0];
  return (
    <CategoryLanding
      path="/electric-pit-bikes/"
      crumbs={[{ name: 'Electric Dirt Bikes', href: '/electric-dirt-bikes/' }, { name: 'Electric Pit Bikes' }]}
      eyebrow="Electric Pit Bikes"
      h1={seo.h1 as string}
      intro={`Looking for an electric pit bike for sale in Australia? Electric Dirt Bike Australia lists ${bikes.length} electric pit bikes from ${money(lo)} to ${money(hi)} AUD, including Ebox, Dragster, ETM RTR and Ronster Rides Rizzler models for kids, teens and adults. Every listing shows the price, motor power, battery and top speed, so you can compare fast. Free freight applies on orders over $1,500, and paying with crypto or PayID takes 10% off.`}
      chips={['Prices Shown Up Front', 'Specs On Every Bike', 'Free Freight Over $1,500', '10% Crypto & PayID Discount']}
      groups={[
        { id: 'entry', heading: 'Electric Pit Bikes Under $3,000', blurb: 'Lower-priced electric pit bikes with 3.3kW to 6.3kW motors: a good first electric pit bike for teens and adults.', slugs: entry.map((p) => p.slug) },
        { id: 'power', heading: 'High-Power Electric Pit Bikes', blurb: 'Faster, more powerful electric pit bikes with larger batteries from Ebox, Dragster, ETM RTR and Ronster Rides.', slugs: power.map((p) => p.slug) },
      ]}
      links={[
        { href: '/electric-dirt-bikes/', label: 'All electric dirt bikes for sale' },
        { href: '/electric-dirt-bikes/kids/', label: 'Electric dirt bikes for kids' },
        { href: '/electric-balance-bikes/', label: 'Electric balance bikes for kids' },
        { href: '/electric-dirt-bikes/cheap/', label: 'Cheap electric dirt bikes' },
        { href: '/blog/electric-pit-bike-australia-guide/', label: 'Electric pit bike Australia guide' },
        { href: '/blog/electric-mini-dirt-bike-australia-guide/', label: 'Electric mini dirt bike guide' },
      ]}
      faqs={[
        { q: 'Where can I buy an electric pit bike in Australia?', a: `Electric Dirt Bike Australia sells electric pit bikes online, from ${money(lo)} (${cheapest?.name}) to ${money(hi)} AUD. Add your bike to the cart and pay by card, crypto or PayID. Free freight applies on orders over $1,500.` },
        { q: 'How much is an electric pit bike?', a: `Our electric pit bikes cost between ${money(lo)} and ${money(hi)} AUD. The lower-priced Ebox and Dragster models start around ${money(entry[0]?.price ?? lo)}, and the high-power ETM RTR Alpha is at the top of the range.` },
        { q: 'What is the fastest electric pit bike you sell?', a: 'The fastest listings are the 72V models, such as the Ebox V3 72RS and the Dragster EBX 72RS (5,400W). Compare the listed top speed and range on each product page, because real-world results depend on rider weight and terrain.' },
        { q: 'Are electric pit bikes good for kids and teens?', a: 'Many electric pit bikes suit teens and smaller adults, but they are powerful. Choose a bike that matches the rider\'s size and experience, supervise young riders, and always use a helmet and protective gear.' },
        { q: 'Are electric pit bikes road legal?', a: 'Electric pit bikes are sold as off-road recreational vehicles for private property and designated off-road areas. Rules differ by state, so check with your state transport authority before riding anywhere else.' },
        { q: 'Do you offer a payment discount?', a: 'Yes. Pay with crypto (BTC or USDT) or PayID for an instant 10% discount on your order.' },
      ]}
      collectionName="Electric Pit Bikes Australia"
    />
  );
}
