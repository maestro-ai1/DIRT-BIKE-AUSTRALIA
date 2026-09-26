import React from 'react';
import Link from 'next/link';
import { BRANDS, SITE, PRODUCTS } from '@/src/config/site';
import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { Zap, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Electric Dirt Bike Brands Australia — Sur-Ron, Talaria, Stark Varg & More | EDBA',
  description: 'Australia\'s authorised dealer for the world\'s best electric dirt bike brands — Sur-Ron, Talaria, Stark Varg, Stealth, E-Ride Pro & more. Genuine AU stock, factory warranty, parts support from Mittagong NSW.',
  keywords: 'electric dirt bike brands australia, sur ron australia, talaria bikes australia, stark varg australia, stealth electric bikes australia, e-ride pro australia, electric dirt bike brands comparison',
  alternates: {
    canonical: `https://${SITE.domain}/brands/`,
  },
  openGraph: {
    title: 'Electric Dirt Bike Brands Australia — Sur-Ron, Talaria, Stark Varg & More',
    description: 'Authorised AU dealer for Sur-Ron, Talaria, Stark Varg, Stealth & E-Ride Pro. Genuine stock, factory warranty from Mittagong NSW 2575.',
    url: `https://${SITE.domain}/brands/`,
    siteName: 'Electric Dirt Bike Australia',
    locale: 'en_AU',
    type: 'website',
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
};

export default function BrandsPage() {
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
        name: 'Brands',
        item: `https://${SITE.domain}/brands/`,
      },
    ],
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <JsonLd data={schemaData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Brands</span>
        </nav>

        {/* Header */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 mb-12 border border-slate-800 shadow-lg">
          <div className="max-w-3xl">
            <span className="px-3 py-1 rounded-full bg-orange-600/30 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/30 inline-block mb-3">
              Official Partner Brands
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Electric Dirt Bike Brands in Australia — Sur-Ron, Talaria, Stark Varg &amp; More
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Australia\'s authorised dealer for the world\'s best electric dirt bike brands. Sur-Ron, Talaria, Stark Varg, E-Ride Pro, Stealth, and Super73 — every brand certified for Australian conditions with factory spare parts stocked in Mittagong NSW 2575.
            </p>
          </div>
        </div>

        {/* Brands Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRANDS.map((brand) => {
            const brandProducts = PRODUCTS.filter((p) => p.brand.toLowerCase() === brand.name.toLowerCase());
            return (
              <div
                key={brand.slug}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-orange-600 uppercase tracking-wider bg-orange-50 px-2.5 py-1 rounded-md">
                      {brand.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {brand.country}
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
                    {brand.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {brand.origin}
                  </p>

                  <div className="mb-6">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Models in Australia:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {brand.popularModels.map((m) => (
                        <span key={m} className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-md text-xs font-semibold">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-slate-500">
                    {brandProducts.length} in stock
                  </span>
                  <Link
                    href={`/shop/?brand=${brand.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 group-hover:bg-sky-600 text-white rounded-xl text-xs font-bold transition-colors"
                  >
                    <span>Shop {brand.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
