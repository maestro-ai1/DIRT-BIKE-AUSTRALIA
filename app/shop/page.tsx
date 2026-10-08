import React, { Suspense } from 'react';
import Link from 'next/link';
import { PRODUCTS, BRANDS, CATEGORIES, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { JsonLd } from '@/components/JsonLd';
import { Zap, Filter, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { ShopCatalogClient } from './ShopCatalogClient';
import { KeywordGuide } from '@/components/KeywordGuide';

const seo = seoFor('/shop/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: {
    canonical: `https://${SITE.domain}/shop/`,
  },
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    url: `https://${SITE.domain}/shop/`,
    siteName: 'Electric Dirt Bike Australia',
    locale: 'en_AU',
    type: 'website',
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
};

export default function ShopPage() {
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
        name: 'Shop All Products',
        item: `https://${SITE.domain}/shop/`,
      },
    ],
  };

  return (
    <div className="py-10 min-h-screen">
      <JsonLd data={schemaData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-600 mb-6 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Shop</span>
        </nav>

        {/* Header Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 mb-10 shadow-lg border border-slate-800">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold mb-3 border border-sky-400/30">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Australian Authorised Stock</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Electric Dirt Bikes for Sale in Australia
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Buy electric dirt bikes online with free Australia-wide delivery. Sur-Ron, Talaria, Stark Varg, E-Ride Pro, Stealth, and 72V Molicel battery upgrades — all genuine AU stock dispatched from our Southern Highlands NSW 2575 workshop with 12-month factory warranty.
            </p>
          </div>
        </div>

        {/* Client Interactive Filter & Catalog */}
        <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight mb-4">
          All Electric Dirt Bikes, E-Bikes, Batteries &amp; Parts
        </h2>
        <Suspense fallback={null}>
          <ShopCatalogClient products={PRODUCTS} brands={BRANDS} categories={CATEGORIES} />
        </Suspense>

        <KeywordGuide path="/shop/" className="mt-12" />

      </div>
    </div>
  );
}
