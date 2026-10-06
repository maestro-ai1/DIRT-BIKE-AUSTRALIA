import React from 'react';
import Link from 'next/link';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { JsonLd } from '@/components/JsonLd';
import { Zap, ShieldCheck, ArrowRight, CheckCircle, Gauge, Battery, Compass } from 'lucide-react';

import { FaqItem } from '@/components/FaqItem';
import { AuthorityLinks } from '@/components/AuthorityLinks';
import { ProductPager } from '@/components/ProductPager';
import { RelatedGuides } from '@/components/RelatedGuides';
const seo = seoFor('/electric-dirt-bikes/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: {
    canonical: `https://${SITE.domain}/electric-dirt-bikes/`,
  },
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    url: `https://${SITE.domain}/electric-dirt-bikes/`,
    siteName: 'Electric Dirt Bike Australia',
    locale: 'en_AU',
    type: 'website',
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
    <div className="py-12 min-h-screen">
      <JsonLd data={schemaData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-600 mb-6 font-medium">
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
              Electric Dirt Bikes for Sale in Australia
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Australia&apos;s most capable off-road electric dirt bikes — from the lightweight Sur-Ron Light Bee X to the championship-grade Stark Varg EX 80HP. Every bike is genuine Australian stock, pre-delivery inspected at our Mittagong NSW 2575 facility, and dispatched with nationwide insured crate freight.
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
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
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

          <ProductPager groups={[{ items: dirtBikes }]} />
        </div>

        {/* SEO Buying Guide Section */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6 mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight border-b border-slate-100 pb-4">
            Buying Electric Dirt Bikes in Australia — Complete Guide
          </h2>
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
            <p>
              Electric dirt bikes in Australia have evolved from novelty to genuine performance machines that compete directly with 125cc–450cc petrol motocross bikes. Whether you&apos;re searching for an <strong>off-road electric bike for adults</strong>, a <strong>kids electric dirt bike</strong>, or a full-send <strong>electric enduro bike</strong> for Australian bush tracks — EDBA stocks the complete range.
            </p>
            <p>
              The most popular electric dirt bikes for sale in Australia are the <Link href="/shop/sur-ron-light-bee-x/" className="text-sky-600 hover:underline font-medium">Sur-Ron Light Bee X</Link> (50 kg, 75 km/h, $6,490 AUD), the <Link href="/shop/talaria-sting-r-mx4/" className="text-sky-600 hover:underline font-medium">Talaria Sting R MX4</Link> (sealed gearbox, 85 km/h, $7,290 AUD), and the <Link href="/shop/stark-varg-ex-80hp/" className="text-sky-600 hover:underline font-medium">Stark Varg EX 80HP</Link> for motocross competition ($18,990 AUD). For pure trail riding, the <Link href="/shop/e-ride-pro-sr/" className="text-sky-600 hover:underline font-medium">E-Ride Pro SR</Link> and <Link href="/shop/stealth-b-52-bomber/" className="text-sky-600 hover:underline font-medium">Stealth B-52 Bomber</Link> offer longer-range off-road performance across Australian terrain.
            </p>
            <p>
              All electric dirt bikes purchased from Electric Dirt Bike Australia include <strong>free crate freight</strong> on orders over $1,500 AUD, a <strong>12-month Australian factory warranty</strong>, and expert after-sales support from our Mittagong NSW 2575 workshop. Prefer to buy with Bitcoin, USDT or Ethereum? Select Crypto at checkout for an instant <strong>10% discount</strong>.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <Link href="/brands/" className="text-xs font-medium px-3 py-1.5 bg-slate-100 hover:bg-sky-100 text-slate-700 hover:text-sky-700 rounded-lg border border-slate-200 transition-colors">Browse All Brands →</Link>
              <Link href="/accessories/" className="text-xs font-medium px-3 py-1.5 bg-slate-100 hover:bg-sky-100 text-slate-700 hover:text-sky-700 rounded-lg border border-slate-200 transition-colors">72V Battery Upgrades →</Link>
              <Link href="/electric-motor-bikes/" className="text-xs font-medium px-3 py-1.5 bg-slate-100 hover:bg-sky-100 text-slate-700 hover:text-sky-700 rounded-lg border border-slate-200 transition-colors">Electric Motorbikes →</Link>
              <Link href="/faq/" className="text-xs font-medium px-3 py-1.5 bg-slate-100 hover:bg-sky-100 text-slate-700 hover:text-sky-700 rounded-lg border border-slate-200 transition-colors">FAQ & Buying Help →</Link>
            </div>
          </div>
        </div>

        <RelatedGuides path="/electric-dirt-bikes/" />


        <AuthorityLinks path="/electric-dirt-bikes/" />

        {/* FAQ */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-300 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Electric Dirt Bikes in Australia — Frequently Asked Questions
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
            <FaqItem question="1. What are the best electric dirt bikes available in Australia?">
                The top electric dirt bikes in Australia include the Sur-Ron Light Bee X for lightweight trail riding, the Sur-Ron Ultra Bee for high-power enduro, the Talaria Sting R MX4 for sealed oil-bath trail performance, the Stark Varg EX 80HP for championship motocross, and the Stealth B-52 Bomber for heavy-duty Australian bush riding.
              </FaqItem>
            <FaqItem question="2. Are electric dirt bikes road legal in Australia?">
                Pure off-road electric dirt bikes without ADR compliance fittings are intended for private property and designated off-road parks only. Some models can be ordered with ADR lighting kits for road registration under LAMS in NSW, VIC, QLD, and WA.
              </FaqItem>
            <FaqItem question="3. How long does the battery last on an electric dirt bike?">
                Battery range varies by riding style and terrain. Trail riding typically yields 40–90 km per charge on mid-size platforms. All bikes include a 240V Australian smart fast charger for overnight or quick top-up charging.
              </FaqItem>
          </div>
        </div>

      </div>
    </div>
  );
}
