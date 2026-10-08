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
          name: 'Does an RTR eBike require registration in Australia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The RTR eBike Pro and S Classic are 250W EN15194-compliant pedal-assist e-bikes. Under Australian law, these are classified as bicycles — not motorcycles or mopeds — so no registration, no licence, and no number plate is required in any Australian state or territory.',
          },
        },
        {
          '@type': 'Question',
          name: 'How far can an RTR eBike travel on one charge?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The RTR eBike Pro delivers up to 80 km per charge on a 36V 15Ah battery in eco pedal-assist mode. In higher assist modes, expect 50–65 km of real-world range. The RTR eBike S Classic achieves up to 70 km on its 36V 13Ah battery.',
          },
        },
      ],
    },
  ];

  const features = [
    { icon: CheckCircle, color: 'text-emerald-500', title: 'No Licence Required', desc: '250W road-legal assist means it\'s classified as a bicycle — ride anywhere in Australia without a motorcycle licence.' },
    { icon: ShieldCheck, color: 'text-sky-500', title: 'No Registration Needed', desc: 'EN15194 compliant at 25 km/h. No number plates, no CTP insurance, no annual rego costs.' },
    { icon: Zap, color: 'text-orange-500', title: 'Charge at Home', desc: 'Plug into any standard Australian 240V power point. Full charge in 4–5 hours. No EV charging station needed.' },
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
              RTR eBike Australia · Road-Legal Electric Commuter
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              RTR eBike Australia<br />Road-Legal Electric Commuter Range
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              RTR eBike is Australia&apos;s leading commuter electric bike brand, delivering road-legal 250W e-bikes that require no licence, no registration, and no number plate. Ride to work, along shared paths, and through CBD streets with confidence — backed by 12-month Australian warranty from Mittagong NSW.
            </p>
            <div className="flex flex-wrap gap-3 pt-2 text-xs text-slate-300">
              {['No Licence Required', 'No Registration', 'Free AU-Wide Freight Over $1,500', '10% Crypto Discount'].map((t) => (
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
              { id: 'rtr-range', heading: `RTR eBike Range (${rtrProducts.length} Models)`, blurb: "Australia's favourite road-legal electric commuter bikes.", items: rtrProducts },
              { id: 'rtr-related', heading: 'Also Consider — Electric Commuter Mopeds', blurb: 'Road-registered e-mopeds for higher-speed commuting.', items: relatedProducts },
            ]}
          />
        </div>

        <KeywordGuide path="/electric-motor-bikes/rtr-ebike/" />

        <RelatedGuides path="/electric-motor-bikes/rtr-ebike/" />


        <AuthorityLinks path="/electric-motor-bikes/rtr-ebike/" />

        {/* FAQ */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-300 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight border-b border-slate-100 pb-4">RTR eBike Australia — FAQ</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
            {[
              { q: 'Does an RTR eBike require registration in Australia?', a: 'No. RTR eBike models are 250W EN15194-compliant pedal-assist e-bikes — classified as bicycles under Australian law. No registration, licence, or number plate is required in any Australian state or territory.' },
              { q: 'How far can an RTR eBike travel on one charge?', a: 'The RTR eBike Pro delivers up to 80 km per charge in eco mode on its 36V 15Ah battery. The RTR eBike S Classic achieves up to 70 km on its 36V 13Ah pack. Real-world range in mixed city riding with moderate assist is typically 50–65 km.' },
              { q: 'Can I ride an RTR eBike on shared paths in Australia?', a: 'Yes. As a pedal-assist e-bike under 250W and 25 km/h, RTR eBikes are permitted on dedicated cycling paths, shared paths, and roads in all Australian states and territories under current e-bike regulations.' },
              { q: 'What warranty is included with an RTR eBike in Australia?', a: 'All RTR eBike models purchased through Electric Dirt Bike Australia include a 12-Month Comprehensive Australian Factory Warranty covering the motor, battery, controller, and frame from our Mittagong NSW warehouse.' },
            ].map((item, i) => (
              <FaqItem key={i} question={`${i + 1}. ${item.q}`}>{item.a}</FaqItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
