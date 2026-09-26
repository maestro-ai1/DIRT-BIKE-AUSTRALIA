import React from 'react';
import Link from 'next/link';
import { PRODUCTS, SITE, CONTACT } from '@/src/config/site';
import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { Zap, ShieldCheck, ArrowRight, CheckCircle, Gauge, Truck, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Electric Motor Bikes Melbourne VIC | Same-Week Delivery to Victoria',
  description: 'Buy electric motor bikes in Melbourne and Victoria. Same-week delivery from NSW warehouse. Sur-Ron, Talaria, NIU, Stealth & more. Free freight. 12-month warranty.',
  alternates: {
    canonical: `https://${SITE.domain}/electric-motor-bikes/melbourne/`,
  },
};

export default function ElectricMotorBikesMelbournePage() {
  const featuredSlugs = [
    'sur-ron-light-bee-x',
    'talaria-sting-r-mx4',
    'sur-ron-ultra-bee',
    'stealth-b-52-bomber',
    'stealth-f-37-trail-fighter',
    'e-ride-pro-ss-2-0',
    'rtr-ebike-pro-commuter',
    'niu-nqi-gt-electric-moped',
  ];

  const products = PRODUCTS.filter((p) => featuredSlugs.includes(p.slug));

  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
        { '@type': 'ListItem', position: 2, name: 'Electric Motor Bikes', item: `https://${SITE.domain}/electric-motor-bikes/` },
        { '@type': 'ListItem', position: 3, name: 'Electric Motor Bikes Melbourne', item: `https://${SITE.domain}/electric-motor-bikes/melbourne/` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you deliver electric bikes to Melbourne and Victoria?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We ship electric motor bikes and e-bikes to all Melbourne suburbs and regional Victoria including Geelong, Ballarat, Bendigo, Shepparton, Wodonga, Warrnambool, and more. Delivery to Melbourne metro takes 2–4 business days from our Mittagong NSW warehouse.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are electric bikes legal in Melbourne and Victoria?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In Victoria, pedal-assist e-bikes under 250W and 25 km/h are legal on roads, shared paths, and bike lanes without registration or a licence. Electric motorcycles and mopeds over 250W require VicRoads registration. Off-road electric dirt bikes are for private property and designated off-road venues only.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the e-bike laws in Victoria?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Victorian e-bike law limits road-legal pedal-assist bikes to 250W continuous motor power and 25 km/h assistance. Throttle-only e-bikes are not road-legal without motorcycle registration. Off-road parks and private property have no power restriction. Visit VicRoads for detailed regulations.',
          },
        },
      ],
    },
  ];

  const melSuburbs = ['CBD', 'Richmond', 'St Kilda', 'Fitzroy', 'South Yarra', 'Footscray', 'Frankston', 'Dandenong', 'Ringwood', 'Werribee', 'Epping', 'Sunshine', 'Preston', 'Moorabbin'];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <JsonLd data={schemaData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <Link href="/electric-motor-bikes/" className="hover:text-sky-600">Electric Motor Bikes</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Melbourne</span>
        </nav>

        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 mb-12 border border-slate-800 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-xs font-bold uppercase tracking-wider border border-pink-400/30 inline-block">
              Electric Bikes Melbourne · Same-Week VIC Delivery
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Electric Motor Bikes Melbourne — Fast Delivery to VIC
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Order electric motor bikes online for delivery anywhere in Melbourne and regional Victoria. Electric Dirt Bike Australia dispatches crate-packed bikes from Mittagong NSW — just 2–4 business days to Melbourne. From road-legal commuter e-bikes to high-performance electric dirt bikes and Stealth Australian-engineered hyper-bikes.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { icon: Truck, color: 'text-emerald-400', text: '2–4 Day Melbourne Delivery' },
                { icon: MapPin, color: 'text-pink-400', text: 'All VIC Suburbs' },
                { icon: ShieldCheck, color: 'text-sky-400', text: '12-Month AU Warranty' },
                { icon: CheckCircle, color: 'text-orange-400', text: 'Free Over $1,500' },
              ].map(({ icon: Icon, color, text }) => (
                <span key={text} className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-300">
                  <Icon className={`w-4 h-4 ${color} shrink-0`} />{text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs mb-12">
          <h2 className="font-bold text-slate-900 text-lg flex items-center gap-2 mb-4">
            <Truck className="w-5 h-5 text-sky-600" />
            Melbourne &amp; Victoria Delivery Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
              <h3 className="font-bold text-slate-900">Melbourne Metro (2–4 Business Days)</h3>
              <p>All Melbourne suburbs — CBD, inner north, east, south-east, west, Frankston, and the Mornington Peninsula. Crate delivered kerbside with tail-lift truck.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
              <h3 className="font-bold text-slate-900">Regional VIC (3–6 Business Days)</h3>
              <p>Geelong, Ballarat, Bendigo, Shepparton, Wangaratta, Wodonga, Warrnambool, Mildura, and all regional towns. Ask for a regional freight estimate at checkout.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
              <h3 className="font-bold text-slate-900">Free Freight Melbourne</h3>
              <p>All bike orders over $1,500 ship free to Melbourne. Insured, real-time GPS tracking provided from our Mittagong NSW 2575 dispatch point.</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {melSuburbs.map((s) => (
              <span key={s} className="text-[10px] font-medium px-2 py-1 bg-slate-100 rounded-full text-slate-600">{s}</span>
            ))}
            <span className="text-[10px] font-medium px-2 py-1 bg-slate-100 rounded-full text-slate-500">+ all other suburbs</span>
          </div>
          <div className="mt-4 p-4 bg-sky-50 rounded-xl border border-sky-100 text-xs text-sky-800">
            <strong>Contact before ordering:</strong> Message on WhatsApp <strong>{CONTACT.whatsappDisplay}</strong> to confirm delivery ETAs for your Melbourne suburb.
          </div>
        </div>

        {/* Products */}
        <div className="space-y-6 mb-16">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Top Electric Bikes for Melbourne Riders ({products.length} Models)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Free freight to Melbourne on all orders over $1,500. Dispatched insured with real-time tracking.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <div key={product.slug} className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group">
                <Link href={`/shop/${product.slug}/`} className="block relative aspect-4/3 bg-slate-100 overflow-hidden">
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-white">{product.brand}</span>
                  </div>
                  {product.badge === 'Australian Engineered' && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-emerald-600 text-white text-[10px] font-bold">🇦🇺 AU Made</div>
                  )}
                </Link>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <h3 className="text-xs font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-2">
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

        {/* E-bike laws VIC box */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12">
          <h2 className="font-bold text-amber-900 text-base mb-3">Victorian E-Bike Laws — Quick Guide</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-amber-800">
            <div><strong>Road-legal (no rego):</strong> Pedal-assist e-bikes ≤250W, ≤25 km/h. No licence, no registration, no number plate. Must pedal to engage motor.</div>
            <div><strong>Requires rego:</strong> Throttle-only e-bikes or any electric motorcycle/moped exceeding 250W or 25 km/h must be registered with VicRoads and require a motorcycle licence.</div>
            <div><strong>Off-road:</strong> Electric dirt bikes have no power restriction on private property and designated off-road areas. No rego or licence required on private land.</div>
          </div>
          <Link href="/electric-motor-bikes/e-bike-laws-australia/" className="inline-flex items-center gap-1 mt-4 text-xs font-bold text-amber-700 underline hover:text-amber-900">
            Read full Australia-wide e-bike laws guide <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* FAQ */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">Electric Bikes Melbourne — FAQ</h2>
          <div className="divide-y divide-slate-100 space-y-4">
            {[
              { q: 'Do you deliver electric bikes to Melbourne?', a: 'Yes. We deliver to all Melbourne suburbs and regional Victoria in 2–4 business days from Mittagong NSW. All orders over $1,500 ship free with insured crate freight and real-time tracking.' },
              { q: 'Are electric bikes legal in Melbourne and Victoria?', a: 'Pedal-assist e-bikes under 250W and 25 km/h are legal on Melbourne roads, bike lanes, and shared paths without registration or a licence. Electric motorcycles over 250W require VicRoads registration and a motorcycle licence.' },
              { q: 'What are the e-bike laws in Victoria?', a: 'VIC e-bike regulations follow the national standard: pedal-assist ≤250W and ≤25 km/h is road-legal without rego. Throttle-only or higher-power electric bikes require motorcycle registration. Off-road parks and private property have no power limits.' },
              { q: 'Where can I ride an electric dirt bike near Melbourne?', a: 'Popular off-road areas near Melbourne include Broadford Motorcycle Park, Touratech Trails in the Dandenongs, private farm properties in Gippsland, and the Otway Ranges tracks for licensed off-road riders. Always check local land manager permissions before riding.' },
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
