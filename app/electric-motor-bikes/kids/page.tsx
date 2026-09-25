import React from 'react';
import Link from 'next/link';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { Zap, ShieldCheck, ArrowRight, CheckCircle, Gauge, Battery, Baby, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kids Electric Motorbikes Australia | Childs Electric Motorcycle Ages 3–16',
  description: 'Shop Australia\'s best kids electric motorbikes. From toddler starter bikes to competition-spec KTM SX-E 5 for ages 4–10. Free AU-wide freight. 12-month warranty.',
  alternates: {
    canonical: `https://${SITE.domain}/electric-motor-bikes/kids/`,
  },
};

export default function KidsElectricMotorbikeePage() {
  const kidsSlugs = [
    'edba-moto-50-kids-beginner',
    'razor-mx650-electric-kids',
    'oset-20-0-racing-junior',
    'torrot-motocross-two-junior',
    'segway-x160-compact',
    'ktm-sx-e-5-youth-electric',
    'husqvarna-ee-5-youth-electric',
    'kuberg-ranger-multi-purpose',
  ];

  const kidsProducts = PRODUCTS.filter((p) => kidsSlugs.includes(p.slug));

  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
        { '@type': 'ListItem', position: 2, name: 'Electric Motor Bikes', item: `https://${SITE.domain}/electric-motor-bikes/` },
        { '@type': 'ListItem', position: 3, name: 'Kids Electric Motorbikes', item: `https://${SITE.domain}/electric-motor-bikes/kids/` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What age is a kids electric motorbike suitable for in Australia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kids electric motorbikes are available for ages 3 and up. Beginner 250W bikes suit toddlers aged 3–6, mid-range models like the Razor MX650 are ideal for ages 8–13, and competition-spec bikes like the KTM SX-E 5 are designed for ages 4–10 with parent-adjustable power modes. For teenagers aged 13+, the Segway X160 and Torrot junior bikes offer more performance with parent-controlled speed limits.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do kids need a licence to ride an electric motorbike in Australia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No licence is required for children riding electric motorbikes on private property, closed tracks, or designated off-road areas. Kids bikes under 250W and 25 km/h do not require registration or a licence for off-road use. Riding on public roads requires meeting state e-bike or motorcycle licensing rules depending on the bike power output.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which kids electric motorbike is best for a 5 year old in Australia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The KTM SX-E 5 and Husqvarna EE 5 are the world\'s best kids electric motorbikes for ages 4–10. Both feature 3 parent-selectable power modes starting at just 20% power, KTM/WP suspension, and a factory 48V lithium battery. The OSET 20.0 Racing is the top choice for trials riding, with an infinite variable speed dial so parents can set any output level from near-zero upwards.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a kids electric motorbike battery last?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ride times vary by model and power setting. The KTM SX-E 5 delivers approximately 35 minutes at full power or up to 80 minutes at 20% setting. The OSET 20.0 Racing provides up to 3 hours of continuous trials riding. Beginner models like the Razor MX650 offer around 40–45 minutes of continuous riding on a full charge.',
          },
        },
      ],
    },
  ];

  const ageGroups = [
    { label: 'Ages 3–6', desc: 'Toddler starter bikes, 250W, 6 km/h max, parental remote kill switch', color: 'bg-emerald-50 border-emerald-200 text-emerald-800' },
    { label: 'Ages 6–10', desc: 'OSET trials bikes and KTM SX-E 5 competition models with 3 parent power modes', color: 'bg-sky-50 border-sky-200 text-sky-800' },
    { label: 'Ages 10–13', desc: 'Razor MX650, Torrot, Segway X160 — real motocross styling with safety controls', color: 'bg-orange-50 border-orange-200 text-orange-800' },
    { label: 'Ages 13–16', desc: 'Kuberg Ranger and full-size youth platforms with higher power output', color: 'bg-purple-50 border-purple-200 text-purple-800' },
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
          <span className="text-slate-900 font-bold">Kids Electric Motorbikes</span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 mb-12 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-400/30 inline-block">
              Kids Electric Motorbikes Australia · Ages 3–16
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Kids Electric Motorbikes Australia
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Shop Australia&apos;s best range of kids and children&apos;s electric motorbikes — from toddler starter models at 250W to factory competition-spec KTM SX-E 5 and OSET trials bikes. Every kids electric bike comes with 12-month Australian warranty and free nationwide freight on orders over $1,500.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <Baby className="w-4 h-4 text-emerald-400" />
                Ages 3–16 Models Available
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                12-Month Australian Warranty
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                Parent Speed &amp; Power Controls
              </span>
            </div>
          </div>
        </div>

        {/* Age Groups */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {ageGroups.map((g) => (
            <div key={g.label} className={`p-4 rounded-xl border ${g.color} space-y-1`}>
              <div className="font-extrabold text-sm">{g.label}</div>
              <p className="text-xs leading-relaxed opacity-90">{g.desc}</p>
            </div>
          ))}
        </div>

        {/* Safety Notice */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs mb-12">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-500 mt-0.5 shrink-0" />
            <div className="space-y-2">
              <h2 className="font-bold text-slate-900 text-base">Australian Safety &amp; Parental Control Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div className="font-bold text-slate-900">Power Mode Adjustment</div>
                  <p>KTM SX-E 5 and Husqvarna EE 5 include 3 parent-selectable power modes (20%, 50%, 100%), so children start slow and progress at their pace.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div className="font-bold text-slate-900">Remote Stop Buttons</div>
                  <p>Beginner models include a wireless parental remote stop button and physical key lockout. Riders cannot start without parent knowledge.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div className="font-bold text-slate-900">Riding Helmet Mandatory</div>
                  <p>All children must wear a certified helmet when riding off-road. EDBA stocks AS/NZS 1698 certified youth helmets — ask at checkout for a bundled safety kit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="space-y-6 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Kids Electric Motorbikes ({kidsProducts.length} Models)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Every kids bike pre-inspected, firmware-checked, and crated from Mittagong NSW 2575 with real-time tracking.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100 self-start sm:self-auto">
              Showing All {kidsProducts.length} Kids Models
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kidsProducts.map((product) => (
              <div
                key={product.slug}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900 text-white shadow-xs">{product.brand}</span>
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-emerald-600 text-white shadow-xs">{product.badge}</span>
                  </div>
                  {product.compareAtPrice && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-emerald-600 text-white text-[10px] font-bold shadow-xs">
                      Save ${(product.compareAtPrice - product.price).toLocaleString()}
                    </div>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors leading-snug mb-1.5">
                      <Link href={`/shop/${product.slug}/`}>{product.name}</Link>
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{product.shortDescription}</p>
                  </div>

                  {product.specs && (
                    <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-slate-600 font-medium">
                      {product.specs.motorPeak && (
                        <div className="flex items-center gap-1.5 truncate"><Zap className="w-3.5 h-3.5 text-orange-500 shrink-0" /><span className="truncate">{product.specs.motorPeak}</span></div>
                      )}
                      {(product.specs as Record<string,string>).riderAge && (
                        <div className="flex items-center gap-1.5 truncate"><Baby className="w-3.5 h-3.5 text-emerald-500 shrink-0" /><span className="truncate">{(product.specs as Record<string,string>).riderAge}</span></div>
                      )}
                      {product.specs.topSpeed && (
                        <div className="flex items-center gap-1.5 truncate"><Gauge className="w-3.5 h-3.5 text-sky-500 shrink-0" /><span className="truncate">{product.specs.topSpeed}</span></div>
                      )}
                      {product.specs.battery && (
                        <div className="flex items-center gap-1.5 truncate"><Battery className="w-3.5 h-3.5 text-indigo-500 shrink-0" /><span className="truncate">{product.specs.battery}</span></div>
                      )}
                    </div>
                  )}

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-mono font-extrabold text-slate-900">${product.price.toLocaleString()} AUD</div>
                      <div className="text-[11px] text-orange-600 font-bold">${Math.round(product.price * 0.9).toLocaleString()} with Crypto (-10%)</div>
                    </div>
                    <Link href={`/shop/${product.slug}/`} className="px-3.5 py-2 bg-slate-900 hover:bg-sky-600 text-white rounded-xl text-xs font-bold transition-colors shadow-xs inline-flex items-center gap-1">
                      <span>View Bike</span><ArrowRight className="w-3 h-3" />
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
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Kids Electric Motorbikes Australia — FAQ</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Everything Australian parents need to know before buying a kids electric motorbike.</p>
          </div>
          <div className="divide-y divide-slate-100 space-y-4">
            {[
              { q: 'What age is suitable for a kids electric motorbike in Australia?', a: 'Kids electric motorbikes are available for ages 3 and up. Toddler starter models (250W, 6 km/h) suit ages 3–6. Competition-spec KTM SX-E 5 and Husqvarna EE 5 are designed for ages 4–10 with parent-adjustable power modes. OSET trials bikes suit ages 6–14, and teen-friendly platforms like the Razor MX650 are ideal from ages 13+.' },
              { q: 'Do Australian kids need a licence to ride an electric motorbike?', a: 'No licence is required for private property and designated off-road riding regardless of age. For road use, state laws vary — bikes under 250W and 25 km/h pedal-assist generally require no licence, while higher-powered bikes require motorcycle licensing. All kids bikes in our range are sold for off-road use only unless noted as road-legal.' },
              { q: 'Which kids electric motorbike is best for a 5 year old?', a: 'The KTM SX-E 5 and Husqvarna EE 5 are specifically engineered for ages 4–10 with 3 parent-selectable power modes starting at 20% power. The OSET 20.0 Racing is the leading choice for trials riding with its infinite variable speed dial. Both brands are used in official junior competition series worldwide.' },
              { q: 'How long does a childs electric motorbike battery last per charge?', a: 'Ride time varies by model and power setting. The KTM SX-E 5 provides 35–80 minutes depending on the power mode selected. The OSET 20.0 Racing lasts up to 3 hours. The Razor MX650 delivers approximately 40–45 minutes per charge. All chargers included use standard Australian 240V wall plugs.' },
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
