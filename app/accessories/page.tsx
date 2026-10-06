import React from 'react';
import Link from 'next/link';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { JsonLd } from '@/components/JsonLd';
import { BatteryCharging, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { AuthorityLinks } from '@/components/AuthorityLinks';
import { ProductPager } from '@/components/ProductPager';
import { RelatedGuides } from '@/components/RelatedGuides';

const seo = seoFor('/accessories/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: {
    canonical: `https://${SITE.domain}/accessories/`,
  },
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    url: `https://${SITE.domain}/accessories/`,
    siteName: 'Electric Dirt Bike Australia',
    locale: 'en_AU',
    type: 'website',
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
};

export default function AccessoriesPage() {
  const accessories = PRODUCTS.filter((p) => p.category === 'accessories' || p.category === 'parts-upgrades');

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `https://${SITE.domain}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Accessories',
        item: `https://${SITE.domain}/accessories/`,
      },
    ],
  };

  return (
    <div className="py-12 min-h-screen">
      <JsonLd data={schemaData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-600 mb-6 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Accessories &amp; Power</span>
        </nav>

        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-12 mb-12 border border-slate-800 shadow-xl">
          <div className="max-w-3xl">
            <span className="px-3 py-1 rounded-full bg-orange-600/30 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/30 inline-block mb-3">
              Power Upgrades &amp; Protection
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Electric Dirt Bike Accessories Australia — 72V Batteries, Fast Chargers &amp; Parts
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Upgrade your Sur-Ron or Talaria with 72V Molicel lithium battery packs, high-amperage 15A alloy fast chargers, OEM spare parts, and Aussie bush-tested bash plates. All genuine AU stock — free shipping over $1,500 AUD and 10% off with Crypto or PayID.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <ProductPager groups={[{ id: 'accessories-list', heading: 'Electric Dirt Bike Batteries, Chargers & Performance Parts', blurb: '72V lithium batteries, fast chargers, controllers, suspension, brakes and protection with Australian plugs and local support.', items: accessories }]} topUp={false} />

        <RelatedGuides path="/accessories/" className="mt-12" />


        <AuthorityLinks path="/accessories/" className="mt-12" />
      </div>
    </div>
  );
}
