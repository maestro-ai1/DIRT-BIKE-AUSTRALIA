import React from 'react';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { CategoryLanding } from '@/components/CategoryLanding';

// Semrush AU: electric bike batteries australia 90, ebike batteries australia 50, lithium bike battery 70, dirt bike battery 140, e bike battery charger 210, charger for e bike 210 (Commercial).
const seo = seoFor('/electric-bike-batteries/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `https://${SITE.domain}/electric-bike-batteries/` },
  openGraph: { title: seo.ogTitle, description: seo.ogDescription, url: `https://${SITE.domain}/electric-bike-batteries/`, siteName: 'Electric Dirt Bike Australia', locale: 'en_AU', type: 'website' },
};

const PACK60 = ['sur-ron-oem-60v-40ah-replacement', 'talaria-oem-60v-45ah-replacement', '60v-53ah-high-capacity-pack'];
const PACK72 = ['72v-42ah-lithium-battery-upgrade', '72v-50ah-long-range-battery', '84v-45ah-extreme-voltage-battery'];
const CHARGERS = ['10a-compact-touring-charger', '15a-fast-charger-60v-72v', '20a-ultra-fast-pit-charger'];

export default function ElectricBikeBatteriesPage() {
  const money = (n: number) => `$${n.toLocaleString('en-AU')}`;
  const price = (s: string) => PRODUCTS.find((p) => p.slug === s)?.price ?? 0;
  const packs = [...PACK60, ...PACK72].map(price);
  return (
    <CategoryLanding
      path="/electric-bike-batteries/"
      crumbs={[{ name: 'Accessories', href: '/accessories/' }, { name: 'Electric Bike Batteries' }]}
      eyebrow="Batteries & Chargers"
      h1={seo.h1 as string}
      intro={`Buy lithium electric bike batteries in Australia: six high-voltage packs from ${money(Math.min(...packs))} to ${money(Math.max(...packs))} AUD, plus three fast chargers. These are traction packs (60V, 72V and 84V) for electric dirt bikes and e-motos such as the Sur-Ron and Talaria. We do not sell 12V motorcycle starter batteries or packs for pedal e-bikes. Each pack lists voltage, capacity in Wh, cells and compatibility. Free freight over $1,500.`}
      chips={['Capacity Shown In Wh', 'Compatibility Listed', 'Free Freight Over $1,500', '10% Crypto & PayID Discount']}
      groups={[
        { id: 'pack60', heading: '60V Lithium Battery Packs', blurb: 'Genuine OEM replacements and a high-capacity 60V pack for Sur-Ron, Talaria and Segway bikes. Confirm compatibility on the product page.', slugs: PACK60 },
        { id: 'pack72', heading: '72V and 84V High-Output Battery Packs', blurb: 'Higher-voltage packs for tuned and upgraded bikes. Pair with a compatible controller.', slugs: PACK72 },
        { id: 'chargers', heading: 'Lithium Battery Chargers', blurb: 'Compact, fast and ultra-fast chargers for 60V and 72V packs.', slugs: CHARGERS },
        { id: 'carry', heading: 'Battery Carry Accessories', blurb: 'Carry a spare pack on the trail.', slugs: ['battery-carry-backpack-harness'] },
      ]}
      links={[
        { href: '/accessories/', label: 'All accessories, parts and upgrades' },
        { href: '/electric-dirt-bikes/', label: 'Electric dirt bikes for sale' },
        { href: '/electric-dirt-bikes/sur-ron/', label: 'Sur-Ron electric bikes' },
        { href: '/blog/battery-for-an-electric-bike-buying-safety-checklist/', label: 'Electric bike batteries Australia: buying and safety checklist' },
        { href: '/blog/e-bike-battery-charger-guide-australia/', label: 'E-bike battery charger guide' },
        { href: '/blog/e-bike-battery-replacement-australia-cost-guide/', label: 'E-bike battery replacement guide' },
      ]}
      faqs={[
        { q: 'What electric bike batteries do you sell?', a: `We sell 60V, 72V and 84V lithium traction packs for electric dirt bikes and e-motos, from ${money(Math.min(...packs))} to ${money(Math.max(...packs))} AUD. We do not sell 12V motorcycle starter batteries or packs for pedal e-bikes.` },
        { q: 'How do I choose a lithium bike battery?', a: 'Match the nominal voltage of your bike first, then compare capacity in watt-hours (Wh), which is volts multiplied by amp hours. Check the compatibility line and cell type on each product page. If unsure, contact us with your bike model before ordering.' },
        { q: 'What is the best charger for an e-bike battery?', a: `Use a charger that matches your pack voltage and connector. We stock a 10A compact charger (${money(price('10a-compact-touring-charger'))}), a 15A fast charger for 60V and 72V packs (${money(price('15a-fast-charger-60v-72v'))}) and a 20A ultra-fast charger (${money(price('20a-ultra-fast-pit-charger'))}).` },
        { q: 'Are replacement batteries covered by warranty?', a: 'Batteries supplied by Electric Dirt Bike Australia carry the warranty stated on the product page. Some upgrade packs list a longer replacement warranty. Read the product page for exact terms.' },
        { q: 'Where can I read battery safety advice?', a: 'Read our battery buying and safety guide and the official lithium-ion battery safety advice from NSW and Queensland government agencies, linked in the Official Guides section below.' },
      ]}
      collectionName="Electric Bike Batteries Australia"
    />
  );
}
