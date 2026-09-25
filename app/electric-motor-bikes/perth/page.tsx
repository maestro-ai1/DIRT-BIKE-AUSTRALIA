import React from 'react';
import Link from 'next/link';
import { PRODUCTS, SITE, CONTACT } from '@/src/config/site';
import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { Zap, ShieldCheck, ArrowRight, CheckCircle, Gauge, Battery, Compass, Truck, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Electric Motor Bikes Perth WA | Fast Overnight Freight to Western Australia',
  description: 'Buy electric motor bikes in Perth, WA. Fast overnight freight from our NSW warehouse to Perth. Free delivery on orders over $1,500. Sur-Ron, Talaria, NIU & more.',
  alternates: {
    canonical: `https://${SITE.domain}/electric-motor-bikes/perth/`,
  },
};

export default function ElectricMotorBikesPerthPage() {
  const featuredSlugs = [
    'sur-ron-light-bee-x',
    'talaria-sting-r-mx4',
    'sur-ron-ultra-bee',
    'e-ride-pro-ss-2-0',
    'rtr-ebike-pro-commuter',
    'niu-nqi-gt-electric-moped',
    'super-soco-cpx-electric-moped',
    'stealth-b-52-bomber',
  ];

  const products = PRODUCTS.filter((p) => featuredSlugs.includes(p.slug));

  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
        { '@type': 'ListItem', position: 2, name: 'Electric Motor Bikes', item: `https://${SITE.domain}/electric-motor-bikes/` },
        { '@type': 'ListItem', position: 3, name: 'Electric Motor Bikes Perth', item: `https://${SITE.domain}/electric-motor-bikes/perth/` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you ship electric motor bikes to Perth and Western Australia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Electric Dirt Bike Australia ships electric motor bikes to all Perth suburbs and regional Western Australia locations including Bunbury, Mandurah, Geraldton, Kalgoorlie, Fremantle, and Joondalup. All bikes are crate-packed and dispatched via insured heavy-vehicle freight with real-time tracking.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does delivery to Perth take from NSW?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standard delivery from our Mittagong NSW 2575 warehouse to Perth metropolitan area takes 5–8 business days via insured road freight. Express freight options are available at checkout for 3–4 business day delivery to Perth.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are electric bikes legal in Western Australia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pedal-assist e-bikes under 250W and 25 km/h are legal on WA roads, bike lanes, and shared paths without registration or a licence. Electric motorcycles and mopeds over 250W require road registration as a motorcycle under WA DoT rules and a motorcycle licence. Off-road electric dirt bikes are for private property and off-road venues only.',
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
          <Link href="/electric-motor-bikes/" className="hover:text-sky-600">Electric Motor Bikes</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Perth</span>
        </nav>

        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 mb-12 border border-slate-800 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider border border-purple-400/30 inline-block">
              Electric Bikes Perth · Free WA Delivery Over $1,500
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Electric Motor Bikes Perth — Delivered Free to WA
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Buy electric motor bikes online and receive free crate delivery anywhere in Perth — from Fremantle to Joondalup, Mandurah to the Hills. Electric Dirt Bike Australia dispatches from Mittagong NSW with insured heavy-freight tracking to every Perth suburb and regional Western Australia location.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { icon: Truck, color: 'text-emerald-400', text: 'Free Freight Over $1,500' },
                { icon: MapPin, color: 'text-purple-400', text: 'All Perth Suburbs' },
                { icon: ShieldCheck, color: 'text-sky-400', text: '12-Month AU Warranty' },
                { icon: CheckCircle, color: 'text-orange-400', text: '5–8 Day WA Delivery' },
              ].map(({ icon: Icon, color, text }) => (
                <span key={text} className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 text-xs text-slate-300">
                  <Icon className={`w-4 h-4 ${color} shrink-0`} />{text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Delivery Info Box */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs mb-12">
          <h2 className="font-bold text-slate-900 text-lg flex items-center gap-2 mb-4">
            <Truck className="w-5 h-5 text-sky-600" />
            Perth &amp; WA Delivery Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
              <h3 className="font-bold text-slate-900">Perth Metro (5–8 Business Days)</h3>
              <p>All Perth suburbs — Fremantle, Joondalup, Rockingham, Armadale, Midland, Cannington, Osborne Park. Crate delivered kerbside. Tail-lift truck service available.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
              <h3 className="font-bold text-slate-900">Regional WA (7–12 Business Days)</h3>
              <p>Bunbury, Geraldton, Kalgoorlie, Broome, Albany, Esperance, Port Hedland, and other regional centres. Contact us for remote area freight quotes.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
              <h3 className="font-bold text-slate-900">Free Freight on All Orders Over $1,500</h3>
              <p>All bike orders over $1,500 AUD ship free Australia-wide including Perth. No hidden freight surcharges for Western Australia. Insured and tracked from dispatch.</p>
            </div>
          </div>
          <div className="mt-5 p-4 bg-sky-50 rounded-xl border border-sky-100 text-xs text-sky-800">
            <strong>Order by WhatsApp:</strong> Call or message our team on <strong>{CONTACT.whatsappDisplay}</strong> to confirm Perth delivery timeframes for your specific suburb before ordering.
          </div>
        </div>

        {/* Products */}
        <div className="space-y-6 mb-16">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Top Electric Bikes for Perth Riders ({products.length} Models)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Every model ships free to Perth on orders over $1,500 with insured tracking.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <div key={product.slug} className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group">
                <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                  <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-white">{product.brand}</span>
                  </div>
                </div>
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
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">Electric Bikes Perth — FAQ</h2>
          <div className="divide-y divide-slate-100 space-y-4">
            {[
              { q: 'Do you ship electric motor bikes to Perth and Western Australia?', a: 'Yes. We ship to all Perth suburbs and regional WA. All orders over $1,500 ship free with insured heavy-vehicle freight and real-time tracking. Standard delivery time to Perth metro is 5–8 business days.' },
              { q: 'Are electric bikes legal in Perth and Western Australia?', a: 'Pedal-assist e-bikes under 250W and 25 km/h are legal on WA roads and shared paths with no registration or licence required. Electric mopeds and motorcycles over 250W require registration under WA DoT rules. Off-road electric dirt bikes are for private property and designated off-road venues.' },
              { q: 'Can I pick up an electric bike from a Perth store?', a: 'We currently dispatch from our Mittagong NSW warehouse. Customers in Perth can arrange freight delivery to any address. Contact us on WhatsApp for ETA confirmation before ordering. Perth delivery is typically 5–8 business days by road freight.' },
              { q: 'Where can I ride an electric dirt bike in Perth?', a: 'Off-road electric dirt bikes are permitted at designated off-road vehicle parks around Perth including the Gnangara Off-Road Vehicle Area, Bullsbrook, and other private property with landowner permission. Check with WA DMIRS for current approved sites.' },
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
