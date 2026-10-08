import React from 'react';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { CategoryLanding } from '@/components/CategoryLanding';

// Semrush AU (full bank): e ride pro 2,900 (navigational); e ride pro australia 170 (C); e-ride pro ss 110 (C); e ride bike 90 (C); e ride pro ss australia 50 (C).
// This page owns the brand terms; the /brands/ hub links here and keeps only "electric bike brands australia".
const PATH = '/brands/e-ride-pro/';
const title = 'E Ride Pro Australia | E-Ride Pro SS Electric Dirt Bikes for Sale';
const description = 'E Ride Pro Australia: buy the E-Ride Pro SS 2.0, SR, SE 17/17 and Mini electric dirt bikes with prices and specs shown. Free freight over $1,500, 10% off with crypto.';
export const metadata: Metadata = {
  title,
  description,
  keywords: 'e ride pro australia, e ride pro, e-ride pro ss, e ride pro ss australia, e ride bike, e-ride pro electric dirt bike',
  alternates: { canonical: `https://${SITE.domain}${PATH}` },
  openGraph: { title, description, url: `https://${SITE.domain}${PATH}`, siteName: 'Electric Dirt Bike Australia', locale: 'en_AU', type: 'website' },
};

export default function ERideProPage() {
  const money = (n: number) => `$${n.toLocaleString('en-AU')}`;
  const slugs = ['e-ride-pro-ss-2-0', 'e-ride-pro-sr', 'e-ride-pro-se-17-17-electric-dirt-bike', 'e-ride-pro-mini'];
  const bikes = slugs.map((s) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean) as typeof PRODUCTS;
  const byPrice = [...bikes].sort((a, b) => a.price - b.price);
  const lo = byPrice[0]?.price ?? 0;
  const hi = byPrice[byPrice.length - 1]?.price ?? 0;
  const ss = bikes.find((p) => p.slug === 'e-ride-pro-ss-2-0');
  const sr = bikes.find((p) => p.slug === 'e-ride-pro-sr');
  const spec = (p: typeof ss, k: string) => (p?.specs as Record<string, string> | undefined)?.[k];
  const gap = ss && sr ? sr.price - ss.price : 0;
  return (
    <CategoryLanding
      path={PATH}
      crumbs={[{ name: 'Brands', href: '/brands/' }, { name: 'E-Ride Pro Australia' }]}
      eyebrow="E-Ride Pro Australia"
      h1="E-Ride Pro Australia: Electric Dirt Bikes for Sale"
      intro={`Looking for E Ride Pro in Australia? Electric Dirt Bike Australia lists ${bikes.length} E-Ride Pro electric dirt bikes from ${money(lo)} to ${money(hi)} AUD, led by the E-Ride Pro SS 2.0 and the E-Ride Pro SR with factory 72V power. Every E-Ride Pro bike shows its price, motor, battery and range up front, ships Australia-wide, and qualifies for free freight over $1,500.`}
      chips={['Prices Shown Up Front', 'Specs On Every Bike', 'Free Freight Over $1,500', '10% Crypto & PayID Discount']}
      groups={[
        { id: 'flagship', heading: 'E-Ride Pro SS and SR: Factory 72V Electric Dirt Bikes', blurb: 'The E-Ride Pro SS 2.0 and SR are full-power 72V bikes for experienced riders.', slugs: bikes.filter((p) => p.price >= 8000).map((p) => p.slug) },
        { id: 'more', heading: 'More E-Ride Pro Electric Dirt Bikes', blurb: 'Lower-priced E-Ride Pro models, including the SE 17/17 and the Mini.', slugs: bikes.filter((p) => p.price < 8000).map((p) => p.slug) },
      ]}
      links={[
        { href: '/electric-dirt-bikes/', label: 'All electric dirt bikes for sale' },
        { href: '/brands/', label: 'Electric bike brands in Australia' },
        { href: '/electric-dirt-bikes/sur-ron/', label: 'Sur-Ron for sale' },
        { href: '/electric-motocross-bikes/', label: 'Electric motocross bikes' },
        { href: '/blog/e-ride-pro-australia-buyers-guide/', label: 'E-Ride Pro Australia buyers guide' },
        { href: '/blog/e-ride-pro-ss-2-0-vs-sr-specs-price/', label: 'E-Ride Pro SS 2.0 vs SR' },
      ]}
      faqs={[
        { q: 'Where can I buy an E-Ride Pro in Australia?', a: `Electric Dirt Bike Australia sells E-Ride Pro electric dirt bikes online, from ${money(lo)} to ${money(hi)} AUD. Add the bike to your cart and pay by card, crypto or PayID. Free freight applies to orders over $1,500, and crypto or PayID payments save 10%.` },
        { q: 'What is the E-Ride Pro SS 2.0?', a: `The E-Ride Pro SS 2.0 is a 72V electric dirt bike${spec(ss, 'motorPeak') ? ` with ${spec(ss, 'motorPeak')} peak output` : ''}${spec(ss, 'battery') ? `, a ${spec(ss, 'battery')} battery` : ''}${spec(ss, 'topSpeed') ? ` and a listed top speed of ${spec(ss, 'topSpeed')}` : ''}. It is priced at ${ss ? money(ss.price) : ''} AUD.` },
        { q: 'What is the difference between the E-Ride Pro SS 2.0 and the SR?', a: `The SR adds more power and a larger battery${spec(sr, 'motorPeak') ? `: ${spec(sr, 'motorPeak')} peak output` : ''}${spec(sr, 'battery') ? ` and a ${spec(sr, 'battery')} pack` : ''}. It costs ${gap ? money(gap) : 'more'} more than the SS 2.0. Compare the full specifications on each product page.` },
        { q: 'How much is an E-Ride Pro in Australia?', a: `E-Ride Pro electric dirt bikes at Electric Dirt Bike Australia cost between ${money(lo)} and ${money(hi)} AUD, depending on the model.` },
        { q: 'Does an E Ride bike come with a warranty?', a: 'The E-Ride Pro SS 2.0 and SR carry the 12-Month Comprehensive Australian Factory Warranty. Warranty terms for the other models are shown on each product page.' },
        { q: 'Are E-Ride Pro bikes road legal?', a: 'E-Ride Pro electric dirt bikes are supplied as off-road recreational vehicles for private property and designated off-road areas. Rules differ by state, so check with your state transport authority before riding anywhere else.' },
      ]}
      collectionName="E-Ride Pro Australia"
    />
  );
}
