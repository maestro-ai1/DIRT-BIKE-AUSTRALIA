import React from 'react';
import Link from 'next/link';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { Zap, ShieldCheck, ArrowRight, CheckCircle, Gauge, Battery, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'RTR eBike Australia — Buy Online, Free AU Delivery | EDBA',
  description: 'Shop the RTR eBike Australia range. Road-legal electric commuters — no licence, no registration required. Free delivery over $1,500. 12-month AU warranty. Genuine stock from Mittagong NSW.',
  keywords: 'rtr ebike australia, rtr ebike, rtr electric bike australia, rtr ebike buy australia, road legal electric bike australia no licence',
  alternates: {
    canonical: `https://${SITE.domain}/electric-motor-bikes/rtr-ebike/`,
  },
  openGraph: {
    title: 'RTR eBike Australia — Free AU Delivery | EDBA',
    description: 'RTR eBike road-legal range. No licence needed. Free delivery over $1,500. 12-month AU warranty from Mittagong NSW.',
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
    <div className="py-12 bg-slate-50 min-h-screen">
      <JsonLd data={schemaData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
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
              <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* RTR eBike Products */}
        <div className="space-y-6 mb-12">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">RTR eBike Range ({rtrProducts.length} Models)</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Australia&apos;s favourite road-legal electric commuter bikes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rtrProducts.map((product) => (
              <div key={product.slug} className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group">
                <Link href={`/shop/${product.slug}/`} className="block relative aspect-4/3 bg-slate-100 overflow-hidden">
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
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
                      {(product.specs as Record<string,string>).legal && <div className="flex items-center gap-1.5 truncate"><ShieldCheck className="w-3.5 h-3.5 text-indigo-500 shrink-0" /><span className="truncate">{(product.specs as Record<string,string>).legal}</span></div>}
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
        </div>

        {/* Related Commuter Bikes */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 mb-16">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-xl font-extrabold text-slate-900">Also Consider — Electric Commuter Mopeds</h2>
              <p className="text-xs text-slate-500 mt-0.5">Road-registered e-mopeds for higher-speed commuting.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((product) => (
                <div key={product.slug} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all group">
                  <Link href={`/shop/${product.slug}/`} className="block aspect-4/3 bg-slate-100 overflow-hidden">
                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </Link>
                  <div className="p-4 space-y-2">
                    <h3 className="text-xs font-bold text-slate-900 line-clamp-2 group-hover:text-sky-600"><Link href={`/shop/${product.slug}/`}>{product.name}</Link></h3>
                    <div className="text-sm font-mono font-extrabold text-slate-900">${product.price.toLocaleString()} AUD</div>
                    <Link href={`/shop/${product.slug}/`} className="block w-full text-center px-3 py-1.5 bg-slate-100 hover:bg-sky-600 hover:text-white text-slate-700 rounded-lg text-xs font-bold transition-colors">View</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight border-b border-slate-100 pb-4">RTR eBike Australia — FAQ</h2>
          <div className="divide-y divide-slate-100 space-y-4">
            {[
              { q: 'Does an RTR eBike require registration in Australia?', a: 'No. RTR eBike models are 250W EN15194-compliant pedal-assist e-bikes — classified as bicycles under Australian law. No registration, licence, or number plate is required in any Australian state or territory.' },
              { q: 'How far can an RTR eBike travel on one charge?', a: 'The RTR eBike Pro delivers up to 80 km per charge in eco mode on its 36V 15Ah battery. The RTR eBike S Classic achieves up to 70 km on its 36V 13Ah pack. Real-world range in mixed city riding with moderate assist is typically 50–65 km.' },
              { q: 'Can I ride an RTR eBike on shared paths in Australia?', a: 'Yes. As a pedal-assist e-bike under 250W and 25 km/h, RTR eBikes are permitted on dedicated cycling paths, shared paths, and roads in all Australian states and territories under current e-bike regulations.' },
              { q: 'What warranty is included with an RTR eBike in Australia?', a: 'All RTR eBike models purchased through Electric Dirt Bike Australia include a 12-Month Comprehensive Australian Factory Warranty covering the motor, battery, controller, and frame from our Mittagong NSW warehouse.' },
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
