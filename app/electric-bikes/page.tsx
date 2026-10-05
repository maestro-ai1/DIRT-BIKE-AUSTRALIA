import React from 'react';
import Link from 'next/link';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { JsonLd } from '@/components/JsonLd';
import { Zap, ShieldCheck, ArrowRight, CheckCircle, Gauge, Battery, MapPin } from 'lucide-react';

import { FaqItem } from '@/components/FaqItem';

// Category page for the broad "electric bike / e bike" demand (Semrush AU: electric bike 27,100, e bike 22,200,
// electric bikes for sale 1,600). Main keyword: electric bikes for sale (transactional). Primary: electric bike, e bike, electric bikes.
const seo = seoFor('/electric-bikes/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: {
    canonical: `https://${SITE.domain}/electric-bikes/`,
  },
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    url: `https://${SITE.domain}/electric-bikes/`,
    siteName: 'Electric Dirt Bike Australia',
    locale: 'en_AU',
    type: 'website',
  },
};

const GROUPS = [
  {
    id: 'fat-tyre',
    heading: 'Fat Tyre Electric Bikes & Beach Cruisers (Ampd Bros)',
    blurb: 'ACE, Stubbie, Chubbie and Riptide fat tyre e-bikes. Most models come as a 250W road-compliant bike or an off-road model for private property.',
    slugs: ['ace-adventure-fat-tyre-electric-bike', 'the-original-stubbie-fat-tyre-electric-bike', 'chubbie-v3-electric-beach-cruiser', 'riptide-electric-beach-cruiser-bike', 'ace-mini-electric-fat-bike'],
  },
  {
    id: 'road-legal',
    heading: 'Road-Legal Electric Bikes (RTR eBike)',
    blurb: '250W pedal-assist e-bikes for commuting and shared paths. Under the Australian e-bike rules these need no licence, registration or number plate.',
    slugs: ['rtr-ebike-pro-commuter', 'rtr-ebike-s-classic'],
  },
  {
    id: 'e-moto',
    heading: 'Electric Motos & Scrambler E-Bikes (Super73)',
    blurb: 'Full-suspension scrambler e-bikes with fat all-terrain tyres for trail and street riding. Check your state rules for where each model can be ridden.',
    slugs: ['super73-rx-mojave', 'super73-s2-adventure'],
  },
  {
    id: 'moped',
    heading: 'Electric Mopeds (Road-Registered)',
    blurb: 'Higher-speed electric mopeds for city and suburban commuting. These are road-registered models, not bicycles.',
    slugs: ['niu-nqi-gt-electric-moped', 'super-soco-cpx-electric-moped', 'vmoto-soco-tc-max-electric'],
  },
];

export default function ElectricBikesPage() {
  const all = GROUPS.flatMap((g) => g.slugs.map((s) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean)) as typeof PRODUCTS;
  const prices = all.map((p) => p.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  const faqs = [
    {
      q: 'Where can I buy an electric bike in Australia?',
      a: `Electric Dirt Bike Australia sells electric bikes for sale online and delivers Australia-wide from Mittagong NSW 2575. Our electric bike range runs from $${min.toLocaleString()} to $${max.toLocaleString()} AUD and covers road-legal RTR eBikes, Super73 electric motos and road-registered electric mopeds. Orders over $1,500 AUD ship free and every bike has a 12-month Australian warranty.`,
    },
    {
      q: 'How much does an electric bike cost in Australia?',
      a: 'Electric bike price depends on the type. Our RTR eBike S Classic is $2,790 and the RTR eBike Pro is $3,490. Super73 electric motos are $4,990 and $5,490. Electric mopeds range from $5,490 to $8,990. All prices are in AUD and include GST, and you save 10% when you pay with crypto or PayID.',
    },
    {
      q: 'Do I need a licence or registration for an electric bike in Australia?',
      a: 'A pedal-assist e-bike that meets the Australian 250W and 25 km/h assist standard, such as the RTR eBike, is treated as a bicycle: no licence, registration or number plate. Electric mopeds are road-registered vehicles, and the NIU NQi GT is LAMS approved for L and P-plate riders. Rules vary by state, so check your state transport authority and our electric bike laws guide.',
    },
    {
      q: 'Do you deliver electric bikes to Sydney, Brisbane, Melbourne and Perth?',
      a: 'Yes. We deliver electric bikes to every state from our Mittagong NSW workshop, including Sydney, Brisbane, Melbourne, Perth and Adelaide. Free insured freight applies to orders over $1,500 AUD. See our Melbourne and Perth pages or the Shipping & Delivery page for details.',
    },
    {
      q: 'What is the difference between an e bike and an electric motorbike?',
      a: 'An e bike is a pedal-assist bicycle limited to 250W and 25 km/h. An electric motorbike or moped has a throttle and a more powerful motor, so it is registered for the road (or supplied for off-road use only). We sell both, so you can choose the electric bike that matches how and where you ride.',
    },
  ];

  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
        { '@type': 'ListItem', position: 2, name: 'Electric Bikes', item: `https://${SITE.domain}/electric-bikes/` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Electric Bikes for Sale Australia',
      url: `https://${SITE.domain}/electric-bikes/`,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: all.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `https://${SITE.domain}/shop/${p.slug}/`,
          name: p.name,
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <JsonLd data={schemaData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Electric Bikes</span>
        </nav>

        {/* Hero */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 mb-12 border border-slate-800 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider border border-sky-400/30 inline-block">
              E-Bikes · E-Motos · Electric Mopeds
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Electric Bikes for Sale in Australia
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Buy an electric bike online from Electric Dirt Bike Australia. Our e bike range covers fat tyre e-bikes and beach cruisers, road-legal RTR eBike commuters, Super73 electric motos and road-registered electric mopeds, from ${min.toLocaleString()} to ${max.toLocaleString()} AUD. Every electric bike ships Australia-wide from Mittagong NSW with a 12-month Australian warranty.
            </p>
            <div className="flex flex-wrap gap-3 pt-2 text-xs text-slate-300">
              {['12-Month AU Warranty', 'Free Freight Over $1,500', '10% Crypto & PayID Discount', 'Ships Australia-Wide'].map((t) => (
                <span key={t} className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />{t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Product groups */}
        {GROUPS.map((g) => {
          const items = g.slugs.map((s) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean) as typeof PRODUCTS;
          return (
            <section key={g.id} className="space-y-6 mb-12" aria-labelledby={`grp-${g.id}`}>
              <div className="border-b border-slate-200 pb-4">
                <h2 id={`grp-${g.id}`} className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{g.heading}</h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl">{g.blurb}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((product) => (
                  <div key={product.slug} className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group">
                    <Link href={`/shop/${product.slug}/`} className="block relative aspect-4/3 bg-slate-100 overflow-hidden">
                      <img src={product.images[0]} alt={`${product.name} electric bike for sale Australia`} width={800} height={600} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute top-3 left-3 flex flex-col gap-1">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-white">{product.brand}</span>
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-sky-600 text-white">{product.badge}</span>
                      </div>
                    </Link>
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug mb-1.5">
                          <Link href={`/shop/${product.slug}/`}>{product.name}</Link>
                        </h3>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{product.shortDescription}</p>
                      </div>
                      {product.specs && (
                        <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-slate-600 font-medium">
                          {product.specs.motorPeak && <div className="flex items-center gap-1.5 truncate"><Zap className="w-3.5 h-3.5 text-orange-500 shrink-0" /><span className="truncate">{product.specs.motorPeak}</span></div>}
                          {product.specs.topSpeed && <div className="flex items-center gap-1.5 truncate"><Gauge className="w-3.5 h-3.5 text-sky-500 shrink-0" /><span className="truncate">{product.specs.topSpeed}</span></div>}
                          {product.specs.range && <div className="flex items-center gap-1.5 truncate"><Battery className="w-3.5 h-3.5 text-emerald-500 shrink-0" /><span className="truncate">{product.specs.range}</span></div>}
                          {(product.specs as Record<string, string>).legal && <div className="flex items-center gap-1.5 truncate"><ShieldCheck className="w-3.5 h-3.5 text-indigo-500 shrink-0" /><span className="truncate">{(product.specs as Record<string, string>).legal}</span></div>}
                        </div>
                      )}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-lg font-mono font-extrabold text-slate-900">${product.price.toLocaleString()} AUD</div>
                          <div className="text-[11px] text-orange-600 font-bold">${Math.round(product.price * 0.9).toLocaleString()} with Crypto (-10%)</div>
                        </div>
                        <Link href={`/shop/${product.slug}/`} className="px-3.5 py-2 bg-slate-900 hover:bg-sky-600 text-white rounded-xl text-xs font-bold transition-colors inline-flex items-center gap-1">
                          <span>View Bike</span><ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* Guides and related categories (internal links) */}
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm mb-12 space-y-3" aria-labelledby="ebike-guides">
          <h2 id="ebike-guides" className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <MapPin className="w-5 h-5 text-sky-600" /> More Electric Bike Guides and Categories
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <li><Link href="/electric-fat-tyre-bikes/" className="text-sky-700 font-semibold hover:underline">Electric fat tyre bikes</Link> — beach cruisers and fat bikes</li>
            <li><Link href="/electric-mini-bikes/" className="text-sky-700 font-semibold hover:underline">Mini electric bikes</Link> — compact fat tyre e-bikes</li>
            <li><Link href="/electric-bikes/cheap/" className="text-sky-700 font-semibold hover:underline">Cheap electric bikes</Link> — affordable e-bikes and kids bikes</li>
            <li><Link href="/electric-motor-bikes/rtr-ebike/" className="text-sky-700 font-semibold hover:underline">RTR eBike Australia</Link> — the full RTR e bike range</li>
            <li><Link href="/electric-motor-bikes/commuter-mopeds/" className="text-sky-700 font-semibold hover:underline">Electric mopeds</Link> — road-legal, LAMS approved</li>
            <li><Link href="/electric-motor-bikes/best-electric-bikes-australia/" className="text-sky-700 font-semibold hover:underline">Best electric bikes Australia 2026</Link></li>
            <li><Link href="/electric-motor-bikes/e-bike-laws-australia/" className="text-sky-700 font-semibold hover:underline">Electric bike laws in Australia</Link></li>
            <li><Link href="/electric-motor-bikes/kids/" className="text-sky-700 font-semibold hover:underline">Kids electric bikes</Link> — ages 3–16</li>
            <li><Link href="/electric-dirt-bikes/" className="text-sky-700 font-semibold hover:underline">Electric dirt bikes for sale</Link></li>
          </ul>
        </section>

        {/* FAQ */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight border-b border-slate-100 pb-4">Electric Bikes Australia — FAQ</h2>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <FaqItem key={i} question={`${i + 1}. ${item.q}`}>{item.a}</FaqItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
