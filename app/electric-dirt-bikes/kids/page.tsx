import React from 'react';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { CategoryLanding } from '@/components/CategoryLanding';

// Semrush AU: electric dirt bike for kids 320, electric dirt bike kids 110, electric kids dirt bike 110, electric mini dirt bike 90, electric dirt bikes for kids 70, electric dirt bike for 12 year olds 70 (Commercial).
const seo = seoFor('/electric-dirt-bikes/kids/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `https://${SITE.domain}/electric-dirt-bikes/kids/` },
  openGraph: { title: seo.ogTitle, description: seo.ogDescription, url: `https://${SITE.domain}/electric-dirt-bikes/kids/`, siteName: 'Electric Dirt Bike Australia', locale: 'en_AU', type: 'website' },
};

const ENTRY = ['razor-mx650-electric-kids', 'edba-moto-50-kids-beginner', 'dhz-electric-kids-mini-off-road-dirt-bike-36v-350w-motor', 'crossfire-ecr1500-kids-electric-dirt-bike', 'crossfire-ecr2000-kids-electric-dirt-bike'];
const PERFORMANCE = ['mxr-mxe-60v-mini-varg-electric-dirt-bike', 'ycf-w50-electric-bike', 'torrot-motocross-two-junior', 'mxr-mxe-72v-mini-varg-electric-dirt-bike', 'oset-20-0-racing-junior', 'husqvarna-ee-5-youth-electric', 'ktm-sx-e-5-youth-electric', 'rfn-warrior-youth-sx-e5-electric-dirt-bike', 'rfn-warrior-youth-sx-e8-electric-dirt-bike'];

export default function KidsElectricDirtBikesPage() {
  const money = (n: number) => `$${n.toLocaleString('en-AU')}`;
  const price = (s: string) => PRODUCTS.find((p) => p.slug === s)?.price ?? 0;
  const all = [...ENTRY, ...PERFORMANCE].map(price);
  return (
    <CategoryLanding
      path="/electric-dirt-bikes/kids/"
      crumbs={[{ name: 'Electric Dirt Bikes', href: '/electric-dirt-bikes/' }, { name: 'Electric Dirt Bikes for Kids' }]}
      eyebrow="Youth Electric Dirt Bikes"
      h1={seo.h1 as string}
      intro={`Choosing an electric dirt bike for kids? We stock ${all.length} youth electric dirt bikes from ${money(Math.min(...all))} to ${money(Math.max(...all))} AUD, from first-bike models to quick-swap-battery racers from Torrot, OSET, Husqvarna, KTM, Crossfire, DHZ, MXR and RFN. Each listing shows motor power, battery and top speed so you can match the bike to your child. All bikes are for private property and designated off-road areas, with a 12-month warranty and free freight over $1,500.`}
      chips={['Specs Shown On Every Bike', '12-Month Warranty', 'Free Freight Over $1,500', '10% Crypto & PayID Discount']}
      groups={[
        { id: 'entry', heading: 'First Electric Dirt Bikes for Kids', blurb: 'Low-power bikes for beginners learning throttle control on private land.', slugs: ENTRY },
        { id: 'performance', heading: 'Youth Electric Dirt Bikes for Older Kids', blurb: 'Brand-name youth bikes with lithium batteries and more power for confident riders.', slugs: PERFORMANCE },
      ]}
      links={[
        { href: '/electric-motor-bikes/kids/', label: 'Kids electric bikes and motorbikes' },
        { href: '/electric-mini-bikes/', label: 'Mini electric bikes' },
        { href: '/electric-dirt-bikes/cheap/', label: 'Cheap electric dirt bikes' },
        { href: '/blog/childrens-dirt-bike-electric-sizing-safety-guide/', label: 'Childrens electric dirt bike sizing and safety guide' },
        { href: '/blog/electric-dirt-bike-for-12-year-olds-australia/', label: 'Electric dirt bike for 12 year olds' },
        { href: '/blog/dirt-bike-for-kids-electric-buying-checklist/', label: 'Kids electric dirt bike buying checklist' },
      ]}
      faqs={[
        { q: 'What is the best electric dirt bike for kids?', a: `It depends on your child's size and experience. For a first bike, the Razor MX650 (${money(price('razor-mx650-electric-kids'))}) and EDBA Moto 50 (${money(price('edba-moto-50-kids-beginner'))}) are our entry models. Older, more confident riders may suit the Torrot Two (${money(price('torrot-motocross-two-junior'))}) or OSET 20.0 (${money(price('oset-20-0-racing-junior'))}).` },
        { q: 'Which electric dirt bike suits 12 year olds?', a: "Many 11 to 13 year olds move to a youth bike with a lithium battery and more power. Compare the Torrot Two, OSET 20.0, Husqvarna EE 5 and KTM SX-E 5 specifications on their product pages, and match the bike to your child's height and ability." },
        { q: 'Are electric dirt bikes for kids safe?', a: 'Safety depends on the rider, supervision and gear. Always use a helmet, gloves, boots and body protection, start in a safe off-road area, and choose a bike whose power and top speed suit your child. Follow the manufacturer manual.' },
        { q: 'How much does an electric dirt bike for kids cost?', a: `Our youth electric dirt bikes cost between ${money(Math.min(...all))} and ${money(Math.max(...all))} AUD. Compare power, battery and top speed on each product page.` },
        { q: 'Where can kids ride an electric dirt bike?', a: "Youth electric dirt bikes are for private property and designated off-road areas, with the landholder's permission. Rules vary by state and council, so check local requirements." },
      ]}
      collectionName="Electric Dirt Bikes for Kids Australia"
    />
  );
}
