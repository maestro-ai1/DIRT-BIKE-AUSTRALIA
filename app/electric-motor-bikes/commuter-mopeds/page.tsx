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
const seo = seoFor('/electric-motor-bikes/commuter-mopeds/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: {
    canonical: `https://${SITE.domain}/electric-motor-bikes/commuter-mopeds/`,
  },
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    url: `https://${SITE.domain}/electric-motor-bikes/commuter-mopeds/`,
    siteName: 'Electric Dirt Bike Australia',
    locale: 'en_AU',
    type: 'website',
  },
};

export default function CommuterMopedsPage() {
  const commuterSlugs = [
    'rtr-ebike-pro-commuter',
    'rtr-ebike-s-classic',
    'niu-nqi-gt-electric-moped',
    'super-soco-cpx-electric-moped',
    'vmoto-soco-tc-max-electric',
    'super73-rx-mojave',
    'super73-s2-adventure',
  ];

  const commuterProducts = PRODUCTS.filter((p) => commuterSlugs.includes(p.slug));

  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
        { '@type': 'ListItem', position: 2, name: 'Electric Motor Bikes', item: `https://${SITE.domain}/electric-motor-bikes/` },
        { '@type': 'ListItem', position: 3, name: 'Electric Commuter Mopeds', item: `https://${SITE.domain}/electric-motor-bikes/commuter-mopeds/` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do electric mopeds require registration in Australia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Electric mopeds over 250W or capable of exceeding 25 km/h without pedalling require registration as a motorcycle or moped in all Australian states. LAMS-approved models like the NIU NQi GT and Vmoto TC-Max are fully road-registerable. Pedal-assist e-bikes under 250W (such as the RTR eBike) are classified as bicycles and require no registration.',
          },
        },
        {
          '@type': 'Question',
          name: 'What licence do I need to ride an electric moped in Australia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'LAMS-approved electric mopeds require a motorcycle learner licence or full motorcycle licence in all Australian states. L-plate and P-plate riders can ride LAMS-approved models. Fully road-legal pedal-assist e-bikes under 250W require no licence. Contact your state roads authority (Service NSW, VicRoads, TMR, etc.) for specific requirements.',
          },
        },
      ],
    },
  ];

  const segments = [
    { title: 'Pedal-Assist e-Bikes (250W)', desc: 'No licence, no registration. Perfect for cycling paths and roads at up to 25 km/h.', badge: 'No Licence Needed', color: 'bg-emerald-50 border-emerald-200' },
    { title: 'Electric Mopeds (3–5kW)', desc: 'LAMS approved. Registration required. L and P-plate legal in all states. 65–95 km/h.', badge: 'LAMS Approved', color: 'bg-sky-50 border-sky-200' },
    { title: 'Urban Scramblers', desc: 'Dual-mode street and light off-road. 25 km/h street mode + unlocked trail mode.', badge: 'Dual Mode', color: 'bg-orange-50 border-orange-200' },
  ];

  return (
    <div className="py-12 min-h-screen">
      <JsonLd data={schemaData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-600 mb-6 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <Link href="/electric-motor-bikes/" className="hover:text-sky-600">Electric Motor Bikes</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Commuter Mopeds &amp; e-Bikes</span>
        </nav>

        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 mb-12 border border-slate-800 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-400/30 inline-block">
              Electric Mopeds & Commuter e-Bikes Australia
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Electric Mopeds &amp; Commuter E-Bikes for Sale in Australia
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              From road-legal 250W commuter e-bikes requiring no licence to fully registered 5kW LAMS electric mopeds — Electric Dirt Bike Australia stocks the complete range of electric commuter motorcycle options for Australian city and suburb riders. Free nationwide freight on orders over $1,500.
            </p>
            <div className="flex flex-wrap gap-3 pt-2 text-xs text-slate-300">
              {['LAMS Approved Models', 'Free AU-Wide Freight Over $1,500', '12-Month Warranty', '10% Crypto Discount'].map((t) => (
                <span key={t} className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />{t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Segment Guide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {segments.map((s) => (
            <div key={s.title} className={`p-5 rounded-xl border ${s.color} space-y-2`}>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">{s.badge}</span>
              <div className="font-bold text-slate-900">{s.title}</div>
              <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Products */}
        <div className="space-y-6 mb-16">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Electric Commuter Mopeds &amp; e-Bikes ({commuterProducts.length} Models)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">Road-legal electric bikes and mopeds dispatched from Mittagong NSW 2575.</p>
          </div>
          <ProductPager groups={[{ items: commuterProducts }]} />
        </div>

        <AuthorityLinks path="/electric-motor-bikes/commuter-mopeds/" />

        {/* FAQ */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-300 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight border-b border-slate-100 pb-4">Electric Mopeds Australia — FAQ</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
            {[
              { q: 'Do electric mopeds require registration in Australia?', a: 'Electric mopeds over 250W or capable of exceeding 25 km/h require road registration as a motorcycle or moped. LAMS-approved models like the NIU NQi GT and Vmoto TC-Max can be registered in all Australian states. Pedal-assist e-bikes under 250W require no registration.' },
              { q: 'What licence is needed for an electric moped in Australia?', a: 'LAMS-approved electric mopeds require a motorcycle learner permit or full motorcycle licence. L-plate and P-plate riders can ride LAMS-approved models in all states. RTR eBike (250W pedal-assist) models require no licence.' },
              { q: 'Are electric mopeds allowed in bike lanes in Australia?', a: 'Pedal-assist e-bikes under 250W (like the RTR eBike range) are permitted in bike lanes and shared paths. Registered electric mopeds over 250W must use the road and follow the same road rules as petrol motorcycles.' },
              { q: 'How far does an electric moped travel on one charge in Australia?', a: 'Range varies by model. The NIU NQi GT dual-battery model achieves 100 km. The Super Soco CPx delivers up to 90 km. The Vmoto TC-Max reaches 120 km. RTR eBike commuters deliver 70–80 km per charge.' },
            ].map((item, i) => (
              <FaqItem key={i} question={`${i + 1}. ${item.q}`}>{item.a}</FaqItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
