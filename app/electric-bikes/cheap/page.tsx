import React from 'react';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { CategoryLanding } from '@/components/CategoryLanding';

// Semrush AU: electric cheap bikes 2,900, cheap electric bikes 720, cheap electric bikes australia 390, electric bike cheap 320,
// cheapest electric bike australia 210, cheap e bikes australia 170 (Commercial); cheap electric bikes for sale 110 (Transactional).
const seo = seoFor('/electric-bikes/cheap/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `https://${SITE.domain}/electric-bikes/cheap/` },
  openGraph: { title: seo.ogTitle, description: seo.ogDescription, url: `https://${SITE.domain}/electric-bikes/cheap/`, siteName: 'Electric Dirt Bike Australia', locale: 'en_AU', type: 'website' },
};

const ADULT_CAP = 2800; // adult e-bikes up to this price are listed
const KIDS_CAP = 2500;

export default function CheapElectricBikesPage() {
  const adult = PRODUCTS.filter((p) => ['fat-tyre-ebikes', 'electric-motorbikes'].includes(p.category) && !/niu|soco/.test(p.slug) && p.price <= ADULT_CAP).sort((a, b) => a.price - b.price);
  const kids = PRODUCTS.filter((p) => p.category === 'kids-ebikes' && p.price <= KIDS_CAP).sort((a, b) => a.price - b.price);
  const money = (n: number) => `$${n.toLocaleString('en-AU')}`;
  const adultLo = adult[0]?.price ?? 0;
  const kidsLo = kids[0]?.price ?? 0;

  return (
    <CategoryLanding
      path="/electric-bikes/cheap/"
      crumbs={[{ name: 'Electric Bikes', href: '/electric-bikes/' }, { name: 'Cheap Electric Bikes' }]}
      eyebrow="Affordable E-Bikes"
      h1={seo.h1 as string}
      intro={`Looking for a cheap electric bike? Electric Dirt Bike Australia lists affordable e-bikes with a manufacturer warranty, starting at ${money(adultLo)} for adult e-bikes and ${money(kidsLo)} for kids electric bikes. We do not sell unbranded budget bikes, so every bike here has published specifications, hydraulic disc brakes and Australian warranty support. Pay with crypto or PayID for 10% off.`}
      chips={['Warranty Included', 'Published Specifications', '10% Crypto & PayID Discount', 'Ships Australia-Wide']}
      groups={[
        { id: 'adult', heading: `Affordable Adult Electric Bikes (up to ${money(ADULT_CAP)})`, blurb: 'Fat tyre e-bikes, beach cruisers and road-legal commuters at our lowest adult prices.', slugs: adult.map((p) => p.slug) },
        { id: 'kids', heading: `Affordable Kids Electric Bikes (up to ${money(KIDS_CAP)})`, blurb: 'Kids electric bikes with adjustable speed and hydraulic brakes.', slugs: kids.map((p) => p.slug) },
      ]}
      links={[
        { href: '/electric-bikes/', label: 'All electric bikes for sale' },
        { href: '/electric-fat-tyre-bikes/', label: 'Electric fat tyre bikes and beach cruisers' },
        { href: '/electric-mini-bikes/', label: 'Mini electric bikes' },
        { href: '/electric-motor-bikes/kids/', label: 'Kids electric bikes' },
        { href: '/electric-motor-bikes/best-electric-bikes-australia/', label: 'Best electric bikes Australia 2026' },
      ]}
      faqs={[
        { q: 'What is the cheapest electric bike for sale in Australia here?', a: `Our lowest-priced adult electric bike is currently ${money(adultLo)} AUD and our lowest-priced kids electric bike is ${money(kidsLo)} AUD. Prices are in AUD including GST and can change, so check the product page for the current price.` },
        { q: 'Are cheap electric bikes any good?', a: 'Every bike listed here comes from a named brand with published specifications, including motor power, battery size, range, brakes and maximum load, plus a supplier warranty. Compare the specifications on each product page before you buy.' },
        { q: 'Do cheap electric bikes come with a warranty?', a: 'Ampd Bros adult e-bikes carry a 2-year nationwide warranty and Ampd Bros kids e-bikes carry a 1-year warranty. RTR eBikes carry the Electric Dirt Bike Australia 12-month Australian warranty. Warranty excludes wear items such as tyres, tubes and brake pads.' },
        { q: 'Can I get a discount on an electric bike?', a: 'Yes. Pay with crypto or PayID at checkout and 10% comes off the price. Some bikes are also listed with a reduced sale price.' },
      ]}
      collectionName="Cheap Electric Bikes Australia"
    />
  );
}
