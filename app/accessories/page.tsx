import React from 'react';
import Link from 'next/link';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { BatteryCharging, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Electric Dirt Bike Batteries & Fast Chargers Australia',
  description: 'High-discharge 72V Molicel battery packs, 15A smart fast chargers, and heavy-duty protection accessories for Sur-Ron and Talaria electric dirt bikes.',
  alternates: {
    canonical: `https://${SITE.domain}/accessories/`,
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
    <div className="py-12 bg-slate-50 min-h-screen">
      <JsonLd data={schemaData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
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
              High-Drain Lithium Batteries, Fast Chargers &amp; Spares
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Equip your Sur-Ron or Talaria with custom 72V Molicel battery packs, high-amperage 15A alloy fast chargers, and Aussie bush-tested bash plates. Enjoy 10% instant discount when paying with Crypto or PayID.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {accessories.map((p) => (
            <div
              key={p.slug}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-orange-600 text-white">
                      {p.badge}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1 mb-2">
                    <Link href={`/shop/${p.slug}/`}>{p.name}</Link>
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">
                    {p.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between mb-3">
                  <div>
                    <div className="text-lg font-mono font-extrabold text-slate-900">
                      ${p.price.toLocaleString()} AUD
                    </div>
                    <div className="text-[10px] text-orange-600 font-semibold">
                      ${Math.round(p.price * 0.9).toLocaleString()} on Crypto (-10%)
                    </div>
                  </div>
                  <Link
                    href={`/shop/${p.slug}/`}
                    className="px-4 py-2 bg-slate-900 hover:bg-sky-600 text-white rounded-lg text-xs font-bold transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
