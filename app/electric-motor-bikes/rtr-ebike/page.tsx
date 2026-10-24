import React from 'react';
import Link from 'next/link';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { JsonLd } from '@/components/JsonLd';
import { Zap, ShieldCheck, ArrowRight, CheckCircle, Gauge, Battery, MapPin } from 'lucide-react';

import { FaqItem } from '@/components/FaqItem';
import { AuthorityLinks } from '@/components/AuthorityLinks';
import { ProductPager } from '@/components/ProductPager';
import { RelatedGuides } from '@/components/RelatedGuides';
import { KeywordGuide } from '@/components/KeywordGuide';
import { DEFAULT_OG_IMAGES } from '@/lib/ogDefaults';
const seo = seoFor('/electric-motor-bikes/rtr-ebike/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: {
    canonical: `https://${SITE.domain}/electric-motor-bikes/rtr-ebike/`,
  },
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    url: `https://${SITE.domain}/electric-motor-bikes/rtr-ebike/`,
    siteName: 'Electric Dirt Bike Australia',
    locale: 'en_AU',
    type: 'website',
    images: DEFAULT_OG_IMAGES,
  },
};

export default function RtrEbikePage() {
  const rtrSlugs = ['rtr-ebike-pro-commuter', 'rtr-ebike-s-classic'];
  const relatedSlugs = ['super73-rx-mojave', 'super73-s2-adventure', 'niu-nqi-gt-electric-moped', 'super-soco-cpx-electric-moped'];
  const rtrProducts = PRODUCTS.filter((p) => rtrSlugs.includes(p.slug));
  const relatedProducts = PRODUCTS.filter((p) => relatedSlugs.includes(p.slug));

  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
        { '@type': 'ListItem', position: 2, name: 'Electric Motor Bikes', item: `https://${SITE.domain}/electric-motor-bikes/` },
        { '@type': 'ListItem', position: 3, name: 'RTR eBike', item: `https://${SITE.domain}/electric-motor-bikes/rtr-ebike/` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is an RTR eBike road legal in Australia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. RTR eBikes are sold as off-road recreational electric bikes for private property and designated off-road areas. They are not registered for public roads, and rules vary by state, so check with your state transport authority before riding anywhere else.',
          },
        },
        {
          '@type': 'Question',
          name: 'What battery does the RTR eBike Pro have?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The RTR eBike Pro lists a 72V 25Ah battery and weighs 80 kg. Real-world range depends on rider weight, terrain and riding mode, so message us for the full specification sheet before you order.',
          },
        },
      ],
    },
  ];

  const features = [
    { icon: CheckCircle, color: 'text-emerald-500', title: 'Off-Road Riding', desc: 'Built for private property and designated off-road areas. Not registered for public roads.' },
    { icon: ShieldCheck, color: 'text-sky-500', title: 'Know Your State Rules', desc: 'Rules for off-road vehicles vary by state. Check land access and local rules before you ride.' },
    { icon: Zap, color: 'text-orange-500', title: 'Charge at Home', desc: 'Charge from a standard Australian 240V power point. No fuel, oil or carburettor servicing.' },
    { icon: MapPin, color: 'text-purple-500', title: 'Nationwide Free Delivery', desc: 'Free crate freight to all mainland capital cities and most regional centres on orders over $1,500.' },
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
          <span className="text-slate-900 font-bold">RTR eBike</span>
        </nav>

        {/* Hero */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 mb-12 border border-slate-800 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider border border-sky-400/30 inline-block">
              RTR eBike Australia · Off-Road Electric Bikes
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              {seo.h1}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              RTR (Ready To Rip) electric bikes are built for off-road riding on private property and designated off-road areas. Prices are shown up front, bikes ship Australia-wide from Mittagong NSW, and our workshop supports what we sell. Not registered for public roads.
            </p>
            <div className="flex flex-wrap gap-3 pt-2 text-xs text-slate-300">
              {['Off-Road Use', 'Prices Shown Up Front', 'Free AU-Wide Freight Over $1,500', '10% Crypto Discount'].map((t) => (
                <span key={t} className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />{t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {features.map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <Icon className={`w-6 h-6 ${color}`} />
              <div className="font-bold text-sm text-slate-900">{title}</div>
              <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* RTR eBike range, with related commuter mopeds, 9 products per page */}
        <div className="mb-12">
          <ProductPager
            groups={[
              { id: 'rtr-range', heading: `RTR eBike Range (${rtrProducts.length} Models)`, blurb: 'RTR electric bikes for off-road riding. Check each product page for specifications.', items: rtrProducts },
              { id: 'rtr-related', heading: 'Looking for a Road-Registered Bike?', blurb: 'Road-registered electric mopeds and e-motos for commuting.', items: relatedProducts },
            ]}
          />
        </div>

        <KeywordGuide path="/electric-motor-bikes/rtr-ebike/" faqs />

        <RelatedGuides path="/electric-motor-bikes/rtr-ebike/" />


        <AuthorityLinks path="/electric-motor-bikes/rtr-ebike/" />

        {/* FAQ */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-300 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight border-b border-slate-100 pb-4">RTR eBike Australia — FAQ</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
            {[
              { q: 'Is an RTR eBike road legal in Australia?', a: 'No. RTR eBikes are sold as off-road recreational electric bikes for private property and designated off-road areas. They are not registered for public roads, and rules vary by state.' },
              { q: 'What battery does the RTR eBike Pro have?', a: 'The RTR eBike Pro lists a 72V 25Ah battery and weighs 80 kg. Real-world range depends on rider weight, terrain and riding mode. Message us for the full specification sheet.' },
              { q: 'Where can I ride an RTR eBike?', a: 'On private property with the owner\'s permission and in designated off-road areas. They are not intended for roads, footpaths or shared paths.' },
              { q: 'What warranty is included with an RTR eBike in Australia?', a: 'Warranty terms are shown on each product page and confirmed with your order. Our Mittagong NSW workshop supports what we sell.' },
            ].map((item, i) => (
              <FaqItem key={i} question={`${i + 1}. ${item.q}`}>{item.a}</FaqItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
