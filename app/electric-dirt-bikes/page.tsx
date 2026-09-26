import React from 'react';
import Link from 'next/link';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { Zap, ShieldCheck, ArrowRight, CheckCircle, Gauge, Battery, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Electric Dirt Bikes | Off-Road Trail & Enduro Models',
  description: 'Shop Australia\'s top electric dirt bikes. Sur-Ron, Talaria, Stark Varg & more — genuine AU stock, 12-month warranty, free freight over $1,500 AUD.',
  alternates: {
    canonical: `https://${SITE.domain}/electric-dirt-bikes/`,
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
};

export default function ElectricDirtBikesPage() {
  const featuredSlugs = [
    'sur-ron-light-bee-x',
    'sur-ron-ultra-bee',
    'sur-ron-storm-bee-enduro',
    'talaria-sting-r-mx4',
    'talaria-xxx-black-edition',
    'talaria-dragon-enduro',
    'rfn-ares-rally-pro',
    'e-ride-pro-sr',
    'e-ride-pro-ss-2-0',
    'stark-varg-ex-80hp',
    'stealth-b-52-bomber',
    'stealth-f-37-trail-fighter',
  ];

  const dirtBikes = PRODUCTS.filter(
    (p) =>
      featuredSlugs.includes(p.slug) ||
      p.category === 'dirt-bikes' ||
      p.category === 'motocross'
  ).filter((p) => p.price >= 2000);

  const schemaData = [
    {
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
          name: 'Electric Dirt Bikes',
          item: `https://${SITE.domain}/electric-dirt-bikes/`,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the best electric dirt bikes available in Australia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The top electric dirt bikes in Australia include the Sur-Ron Light Bee X for lightweight trail riding, the Sur-Ron Ultra Bee for high-power enduro, the Talaria Sting R MX4 for sealed oil-bath trail performance, the Stark Varg EX 80HP for championship motocross, and the Stealth B-52 Bomber for heavy-duty Australian bush riding.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are electric dirt bikes road legal in Australia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pure off-road electric dirt bikes without ADR compliance fittings (mirrors, indicators, horn, headlight) are intended for private property and designated off-road parks only. Some models like the Sur-Ron Ultra Bee can be ordered with ADR lighting kits for road registration under LAMS in NSW, VIC, QLD, and WA.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does the battery last on an electric dirt bike?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Battery range varies by riding style and terrain. Trail riding typically yields 40–90 km per charge on mid-size platforms (Sur-Ron Light Bee X, Talaria Sting R). Hard motocross track use can reduce this to 25–50 km. All bikes include a 240V Australian smart fast charger for overnight or quick top-up charging.',
          },
        },
      ],
    },
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <JsonLd data={schemaData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Electric Dirt Bikes</span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 mb-12 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-400/30 inline-block">
              AU Genuine Stock · Sur-Ron, Talaria, Stark &amp; More
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Electric Dirt Bikes in Australia
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Australia's most capable off-road electric dirt bikes — from the lightweight Sur-Ron Light Bee X to the championship-grade Stark Varg EX 80HP. Every bike is genuine Australian stock, pre-delivery inspected at our Mittagong NSW 2575 facility, and dispatched with nationwide insured crate freight.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Free Aus-Wide Freight Over $1,500
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                12-Month Australian Factory Warranty
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <Zap className="w-4 h-4 text-orange-400" />
                10% Instant Crypto Discount
              </span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="space-y-6 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Featured Electric Dirt Bikes ({dirtBikes.length} Models)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Every bike pre-inspected and crate-dispatched from Mittagong NSW 2575.
              </p>
            </div>
            <Link
              href="/shop/?category=dirt-bikes"
              className="text-xs font-bold text-sky-600 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-100 self-start sm:self-auto hover:bg-sky-100 transition-colors"
            >
              Browse All Products →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dirtBikes.map((product) => (
              <div
                key={product.slug}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <Link href={`/shop/${product.slug}/`} className="block relative aspect-4/3 bg-slate-100 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-white shadow-xs">
                      {product.brand}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-orange-600 text-white shadow-xs">
                      {product.badge}
                    </span>
                  </div>
                  {product.compareAtPrice && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-emerald-600 text-white text-[10px] font-bold shadow-xs">
                      Save ${(product.compareAtPrice - product.price).toLocaleString()}
                    </div>
                  )}
                </Link>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug mb-1.5">
                      <Link href={`/shop/${product.slug}/`}>{product.name}</Link>
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>

                  {product.specs && (
                    <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-slate-600 font-medium">
                      {product.specs.motorPeak && (
                        <div className="flex items-center gap-1.5 truncate">
                          <Zap className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                          <span className="truncate">{product.specs.motorPeak}</span>
                        </div>
                      )}
                      {product.specs.battery && (
                        <div className="flex items-center gap-1.5 truncate">
                          <Battery className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                          <span className="truncate">{product.specs.battery}</span>
                        </div>
                      )}
                      {product.specs.topSpeed && (
                        <div className="flex items-center gap-1.5 truncate">
                          <Gauge className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{product.specs.topSpeed}</span>
                        </div>
                      )}
                      {product.specs.range && (
                        <div className="flex items-center gap-1.5 truncate">
                          <Compass className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                          <span className="truncate">{product.specs.range}</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-mono font-extrabold text-slate-900">
                        ${product.price.toLocaleString()} AUD
                      </div>
                      <div className="text-[11px] text-orange-600 font-bold">
                        ${Math.round(product.price * 0.9).toLocaleString()} with Crypto (-10%)
                      </div>
                    </div>
                    <Link
                      href={`/shop/${product.slug}/`}
                      className="px-3.5 py-2 bg-slate-900 hover:bg-sky-600 text-white rounded-xl text-xs font-bold transition-colors shadow-xs inline-flex items-center gap-1"
                    >
                      <span>View Bike</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Electric Dirt Bikes in Australia — Frequently Asked Questions
            </h2>
          </div>
          <div className="divide-y divide-slate-100 space-y-4">
            <div className="pt-4 space-y-1.5">
              <h3 className="font-bold text-sm text-slate-900">
                1. What are the best electric dirt bikes available in Australia?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The top electric dirt bikes in Australia include the Sur-Ron Light Bee X for lightweight trail riding, the Sur-Ron Ultra Bee for high-power enduro, the Talaria Sting R MX4 for sealed oil-bath trail performance, the Stark Varg EX 80HP for championship motocross, and the Stealth B-52 Bomber for heavy-duty Australian bush riding.
              </p>
            </div>
            <div className="pt-4 space-y-1.5">
              <h3 className="font-bold text-sm text-slate-900">
                2. Are electric dirt bikes road legal in Australia?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pure off-road electric dirt bikes without ADR compliance fittings are intended for private property and designated off-road parks only. Some models can be ordered with ADR lighting kits for road registration under LAMS in NSW, VIC, QLD, and WA.
              </p>
            </div>
            <div className="pt-4 space-y-1.5">
              <h3 className="font-bold text-sm text-slate-900">
                3. How long does the battery last on an electric dirt bike?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Battery range varies by riding style and terrain. Trail riding typically yields 40–90 km per charge on mid-size platforms. All bikes include a 240V Australian smart fast charger for overnight or quick top-up charging.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
