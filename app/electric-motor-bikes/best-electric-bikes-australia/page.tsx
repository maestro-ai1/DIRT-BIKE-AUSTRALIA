import React from 'react';
import Link from 'next/link';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { Zap, ShieldCheck, ArrowRight, CheckCircle, Gauge, Battery, Star, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Electric Bikes Australia 2026 — Top 10 Expert Ranked | EDBA',
  description: 'Australia\'s best electric bikes for 2026. Expert-ranked: Sur-Ron Light Bee X, Talaria Sting R, Stark Varg, Stealth B-52 & more. Compare by use case, budget & skill level. Buy from Australia\'s authorised dealer.',
  keywords: 'best electric bike australia, best electric dirt bike australia 2026, best ebike australia, best electric motorbike australia, top electric bikes australia, electric bike comparison australia',
  alternates: {
    canonical: `https://${SITE.domain}/electric-motor-bikes/best-electric-bikes-australia/`,
  },
  openGraph: {
    title: 'Best Electric Bikes Australia 2026 — Top 10 Expert Ranked',
    description: 'Expert-ranked top 10 electric bikes for Australia 2026. Sur-Ron, Talaria, Stark Varg, Stealth & more compared by use case, budget & skill level.',
    url: `https://${SITE.domain}/electric-motor-bikes/best-electric-bikes-australia/`,
    siteName: 'Electric Dirt Bike Australia',
    locale: 'en_AU',
    type: 'website',
  },
};

export default function BestElectricBikesAustraliaPage() {
  const topPickSlugs = [
    'sur-ron-light-bee-x',
    'talaria-sting-r-mx4',
    'sur-ron-ultra-bee',
    'stealth-b-52-bomber',
    'ktm-sx-e-5-youth-electric',
    'rtr-ebike-pro-commuter',
    'niu-nqi-gt-electric-moped',
    'e-ride-pro-ss-2-0',
  ];

  const topProducts = PRODUCTS.filter((p) => topPickSlugs.includes(p.slug));

  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
        { '@type': 'ListItem', position: 2, name: 'Electric Motor Bikes', item: `https://${SITE.domain}/electric-motor-bikes/` },
        { '@type': 'ListItem', position: 3, name: 'Best Electric Bikes Australia', item: `https://${SITE.domain}/electric-motor-bikes/best-electric-bikes-australia/` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best electric bike in Australia in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The best electric bike in Australia depends on your use case. For off-road trail riding, the Sur-Ron Light Bee X (6,490 AUD) is the best-selling lightweight electric dirt bike with 6,000W peak power and 75 km/h capability. For commuting, the RTR eBike Pro at $3,490 is road-legal with no registration needed. For competition off-road riding, the Talaria Sting R MX4 at $8,990 delivers the most advanced suspension and performance. For kids, the KTM SX-E 5 is the world-leading youth electric motocross bike for ages 4–10.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best e-bike in Australia for commuting?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The RTR eBike Pro is Australia\'s best commuter e-bike — 250W road-legal, 80 km range, Shimano 7-speed gears, and no licence, registration, or number plate required. For higher-speed commuting that requires a motorcycle licence, the NIU NQi GT electric moped at $5,990 delivers 70 km/h and 100 km range.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best electric dirt bike in Australia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Sur-Ron Light Bee X is Australia\'s best-selling electric dirt bike. It weighs just 47 kg, produces 6,000W peak power, reaches 75 km/h, and is used for trails, motocross circuits, and MX parks. For serious competition riders, the Talaria Sting R MX4 at $8,990 offers longer range and better suspension. The Stealth B-52 Bomber at $12,990 is the most powerful Australian-engineered option at 52V/5,400W.',
          },
        },
      ],
    },
  ];

  const categories = [
    { title: 'Best for Off-Road Trail Riding', slug: 'sur-ron-light-bee-x', award: '#1 Trail Bike', why: 'Best power-to-weight ratio, 75 km/h, community parts support across Australia.' },
    { title: 'Best for Serious Competition', slug: 'talaria-sting-r-mx4', award: '#1 Competition', why: 'MX4 suspension, longest trail range, factory race geometry for serious off-road riders.' },
    { title: 'Best Commuter e-Bike', slug: 'rtr-ebike-pro-commuter', award: '#1 Commuter', why: 'No licence, no rego, 80 km range, charges at any power point. Zero running costs.' },
    { title: 'Best Kids Electric Motorbike', slug: 'ktm-sx-e-5-youth-electric', award: '#1 Youth Bike', why: 'Factory competition-spec for ages 4–10 with 3 parent power modes. KTM WP suspension.' },
    { title: 'Best Electric Moped', slug: 'niu-nqi-gt-electric-moped', award: '#1 e-Moped', why: 'LAMS approved for L and P-plates, 70 km/h, 100 km range with dual removable battery.' },
    { title: 'Best Australian-Engineered', slug: 'stealth-b-52-bomber', award: '#1 AU Made', why: 'Stealth Electric Bikes are engineered and manufactured in Melbourne, VIC. 52V hyper-power.' },
  ];

  const budgetGuide = [
    { range: 'Under $2,000', desc: 'Entry-level kids bikes (Razor MX650, EDBA Moto 50) and accessory upgrades.', link: '/electric-motor-bikes/kids/' },
    { range: '$2,000–$5,000', desc: 'RTR eBike commuters, OSET trials bikes, Segway X160. Best value beginner off-road.', link: '/electric-motor-bikes/commuter-mopeds/' },
    { range: '$5,000–$10,000', desc: 'Sur-Ron Light Bee X, Talaria Sting, KTM SX-E 5, NIU NQi GT. The sweet spot for performance.', link: '/electric-motor-bikes/' },
    { range: '$10,000+', desc: 'Stealth B-52 Bomber, Sur-Ron Ultra Bee, Vmoto TC-Max. Pro-grade or full road-legal.', link: '/electric-motor-bikes/' },
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <JsonLd data={schemaData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <Link href="/electric-motor-bikes/" className="hover:text-sky-600">Electric Motor Bikes</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Best Electric Bikes Australia</span>
        </nav>

        {/* Hero */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 mb-12 border border-slate-800 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-bold uppercase tracking-wider border border-yellow-400/30 inline-block">
              Best Electric Bikes Australia 2026 · Expert Buyer&apos;s Guide
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Best Electric Bikes Australia 2026 — Expert Buyer&apos;s Guide
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Australia&apos;s most comprehensive electric bike guide — independently reviewed by our team across off-road dirt, youth competition, road-legal commuting, and high-performance categories. Every best-pick model is in stock and dispatched from Mittagong NSW with 12-month Australian warranty.
            </p>
            <div className="flex flex-wrap gap-3 pt-2 text-xs text-slate-300">
              {['Genuine Australian Stock', 'Independent Picks', '12-Month AU Warranty', 'Free Freight Over $1,500'].map((t) => (
                <span key={t} className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />{t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Best Picks by Category */}
        <div className="space-y-6 mb-12">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Best Electric Bikes by Category — 2026</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Expert picks for each riding category from our team at Electric Dirt Bike Australia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => {
              const product = PRODUCTS.find((p) => p.slug === cat.slug);
              if (!product) return null;
              return (
                <div key={cat.slug} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all group">
                  <Link href={`/shop/${product.slug}/`} className="block relative aspect-4/3 bg-slate-100 overflow-hidden">
                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-3 left-3">
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-yellow-500 text-slate-900 shadow">
                        <Trophy className="w-3 h-3" />{cat.award}
                      </span>
                    </div>
                  </Link>
                  <div className="p-5 space-y-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{cat.title}</div>
                    <h3 className="font-bold text-sm text-slate-900 leading-snug group-hover:text-sky-600">
                      <Link href={`/shop/${product.slug}/`}>{product.name}</Link>
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{cat.why}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                      <div className="text-base font-mono font-extrabold text-slate-900">${product.price.toLocaleString()} AUD</div>
                      <Link href={`/shop/${product.slug}/`} className="px-3 py-1.5 bg-slate-900 hover:bg-sky-600 text-white rounded-lg text-xs font-bold transition-colors inline-flex items-center gap-1">
                        View<ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Budget Guide */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs mb-12">
          <h2 className="font-bold text-slate-900 text-xl flex items-center gap-2 mb-5">
            <Star className="w-5 h-5 text-yellow-500" />
            Best Electric Bikes Australia — Budget Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {budgetGuide.map((b) => (
              <div key={b.range} className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                <div className="font-extrabold text-sm text-slate-900">{b.range}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
                <Link href={b.link} className="text-xs font-bold text-sky-600 hover:underline inline-flex items-center gap-1">
                  Browse range <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* All Top Picks */}
        <div className="space-y-6 mb-16">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">All Top Picks — Best E-Bikes in Stock</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Every model in stock at our Mittagong NSW warehouse with 12-month Australian warranty.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {topProducts.map((product) => (
              <div key={product.slug} className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group">
                <Link href={`/shop/${product.slug}/`} className="block relative aspect-4/3 bg-slate-100 overflow-hidden">
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-white">{product.brand}</span>
                  </div>
                </Link>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug line-clamp-2">
                    <Link href={`/shop/${product.slug}/`}>{product.name}</Link>
                  </h3>
                  {product.specs?.topSpeed && (
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500"><Gauge className="w-3.5 h-3.5 text-sky-500" /><span>{product.specs.topSpeed}</span></div>
                  )}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-sm font-mono font-extrabold text-slate-900">${product.price.toLocaleString()}</div>
                    <Link href={`/shop/${product.slug}/`} className="px-3 py-1.5 bg-slate-900 hover:bg-sky-600 text-white rounded-lg text-xs font-bold transition-colors inline-flex items-center gap-1">
                      View<ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">Best Electric Bikes Australia — FAQ</h2>
          <div className="divide-y divide-slate-100 space-y-4">
            {[
              { q: 'What is the best electric bike in Australia in 2026?', a: 'The best electric bike depends on your use case. For off-road trail riding: Sur-Ron Light Bee X ($6,490). For commuting: RTR eBike Pro ($3,490, no licence needed). For competition: Talaria Sting R MX4 ($8,990). For kids: KTM SX-E 5 ($7,990 for ages 4–10). For road use: NIU NQi GT electric moped ($5,990, LAMS approved).' },
              { q: 'What is the best e-bike for commuting in Australia?', a: 'The RTR eBike Pro is the best commuter e-bike in Australia for most riders — 250W road-legal, 80 km range, Shimano 7-speed, no licence, no registration required. For speed above 25 km/h on roads, the NIU NQi GT delivers 70 km/h and requires a motorcycle learner permit under LAMS.' },
              { q: 'What is the best electric dirt bike in Australia?', a: 'The Sur-Ron Light Bee X at $6,490 is Australia\'s best-selling electric dirt bike — 47 kg, 6,000W peak, 75 km/h, and the most supported platform with local parts availability. For competition riders, the Talaria Sting R MX4 at $8,990 offers superior suspension and range.' },
              { q: 'How do I choose the best electric bike for my needs in Australia?', a: 'Consider: (1) Road use vs off-road — 250W pedal-assist needs no licence for roads; off-road bikes require private property. (2) Rider age — dedicated youth platforms for under 16. (3) Budget — $3,000–$9,000 covers the best middle-range. (4) Use frequency — SLA batteries for occasional use, lithium for daily riding. (5) Warranty — EDBA includes 12-month AU warranty on all models.' },
            ].map((item, i) => (
              <div key={i} className="pt-4 space-y-1.5">
                <h3 className="font-bold text-sm text-slate-900">{i + 1}. {item.q}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
