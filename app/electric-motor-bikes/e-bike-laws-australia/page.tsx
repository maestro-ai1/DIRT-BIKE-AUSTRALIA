import React from 'react';
import Link from 'next/link';
import { SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { ArrowRight, CheckCircle, AlertTriangle, Scale, MapPin, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'E-Bike Laws Australia 2026 — Are Electric Dirt Bikes Legal? State-by-State Guide | EDBA',
  description: 'Complete guide to electric dirt bike and e-bike laws in Australia 2026. Are electric dirt bikes legal in Australia? Road registration, licence requirements, and off-road rules for NSW, VIC, QLD, WA & SA explained.',
  keywords: 'e-bike laws australia, are electric dirt bikes legal australia, electric bike registration australia, electric dirt bike road legal australia, electric bike licence requirements australia, electric dirt bike nsw law',
  alternates: {
    canonical: `https://${SITE.domain}/electric-motor-bikes/e-bike-laws-australia/`,
  },
  openGraph: {
    title: 'E-Bike Laws Australia 2026 — Are Electric Dirt Bikes Legal?',
    description: 'State-by-state guide: Are electric dirt bikes legal in Australia? Road registration, licence & off-road rules for NSW, VIC, QLD, WA & SA.',
    url: `https://${SITE.domain}/electric-motor-bikes/e-bike-laws-australia/`,
    siteName: 'Electric Dirt Bike Australia',
    locale: 'en_AU',
    type: 'article',
  },
};

export default function EBikeLawsAustraliaPage() {
  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
        { '@type': 'ListItem', position: 2, name: 'Electric Motor Bikes', item: `https://${SITE.domain}/electric-motor-bikes/` },
        { '@type': 'ListItem', position: 3, name: 'E-Bike Laws Australia', item: `https://${SITE.domain}/electric-motor-bikes/e-bike-laws-australia/` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are electric bikes legal in Australia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Pedal-assist e-bikes with a maximum continuous motor output of 250W that only provide assistance up to 25 km/h are legal in all Australian states and territories. These are classified as bicycles under Australian road law and require no registration, no licence, and no number plate. Electric bikes exceeding 250W or 25 km/h are classified as motorcycles or mopeds and require registration and a motorcycle licence.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do electric bikes need registration in NSW?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In New South Wales, pedal-assist e-bikes under 250W and 25 km/h require no registration, no number plate, and no licence. Electric bikes exceeding these limits must be registered with Service NSW as a motorcycle and require a motorcycle licence. Throttle-only electric bikes that can propel without pedalling also require registration regardless of power output. Source: Transport for NSW.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the e-bike laws in Victoria?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In Victoria, pedal-assist e-bikes (pedelecs) with motors up to 250W that cut out at 25 km/h are road-legal without registration or a licence. E-bikes that can operate by throttle alone, or that exceed 250W or 25 km/h, must be registered with VicRoads as a moped or motorcycle. Riders must hold the appropriate licence. Source: VicRoads Road Safety.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do NSW e-bikes need number plates?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Pedal-assist e-bikes under 250W and 25 km/h are classified as bicycles in NSW and do not require number plates. Only registered motorcycles and mopeds — including electric motorcycles over 250W — require number plates in NSW.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are electric dirt bikes legal in Australia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Off-road electric dirt bikes such as the Sur-Ron Light Bee X and Talaria Sting R are legal in Australia for use on private property and at designated off-road riding venues. They cannot be legally ridden on public roads unless registered as a motorcycle. Australian states have designated off-road parks and motocross facilities where these bikes can be legally ridden.',
          },
        },
      ],
    },
  ];

  const stateRules = [
    {
      state: 'NSW',
      authority: 'Transport for NSW',
      roadLegal: 'Pedal-assist ≤250W, ≤25 km/h, no throttle',
      licence: 'No licence required for road-legal e-bikes',
      registration: 'No registration or number plate required',
      throttle: 'Throttle-only e-bikes require motorcycle rego',
      minAge: 'No minimum age for road-legal e-bikes on shared paths',
      color: 'bg-blue-50 border-blue-200',
    },
    {
      state: 'VIC',
      authority: 'VicRoads',
      roadLegal: 'Pedal-assist ≤250W, ≤25 km/h',
      licence: 'No licence for compliant e-bikes',
      registration: 'No registration required',
      throttle: 'Throttle-only: moped/motorcycle registration required',
      minAge: 'Under 12 must wear helmet; all riders must wear helmets',
      color: 'bg-emerald-50 border-emerald-200',
    },
    {
      state: 'QLD',
      authority: 'TMR Queensland',
      roadLegal: 'Power-assisted cycles ≤200W motor, ≤25 km/h',
      licence: 'No licence for qualifying PACs',
      registration: 'No registration required for PACs',
      throttle: 'Bikes over 200W classified as motor vehicles — rego required',
      minAge: 'Helmet mandatory for all ages',
      color: 'bg-yellow-50 border-yellow-200',
    },
    {
      state: 'WA',
      authority: 'WA DoT',
      roadLegal: 'Pedalecs ≤250W, ≤25 km/h pedal-assist',
      licence: 'No licence for compliant pedalecs',
      registration: 'No registration required',
      throttle: 'Throttle e-bikes may require rego — check WA DoT',
      minAge: 'Helmet mandatory under WA Road Traffic Code',
      color: 'bg-orange-50 border-orange-200',
    },
    {
      state: 'SA',
      authority: 'DPTI SA',
      roadLegal: 'Pedalecs ≤250W, ≤25 km/h',
      licence: 'No licence required',
      registration: 'No registration or plates',
      throttle: 'Higher-powered e-bikes require registration',
      minAge: 'Helmet required; under 17 must wear approved helmet',
      color: 'bg-red-50 border-red-200',
    },
    {
      state: 'ACT / TAS / NT',
      authority: 'State transport authorities',
      roadLegal: '≤250W, ≤25 km/h pedal-assist follows national standard',
      licence: 'No licence for compliant e-bikes',
      registration: 'No registration required',
      throttle: 'Higher power or throttle-only: check local authority',
      minAge: 'Helmet mandatory in all territories',
      color: 'bg-slate-50 border-slate-200',
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
          <span className="text-slate-900 font-bold">E-Bike Laws Australia</span>
        </nav>

        {/* Hero */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 mb-12 border border-slate-800 shadow-xl">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wider border border-teal-400/30 inline-block">
              E-Bike Laws Australia 2026 · All States &amp; Territories
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Are E-Bikes Legal in Australia?<br />NSW, VIC, QLD &amp; WA Laws 2026
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Australia&apos;s definitive guide to electric bike regulations in 2026 — covering all states and territories. What power limit applies? Do you need a licence? Does your e-bike need registration or number plates? Find out what is legal and what is not before you ride.
            </p>
            <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-300">
              <strong>Note:</strong> This guide is for general information only. Laws change — always verify current regulations with your state&apos;s roads authority before riding. Links to official sources are provided throughout.
            </div>
          </div>
        </div>

        {/* National Standard */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs mb-12">
          <h2 className="font-bold text-slate-900 text-xl flex items-center gap-2 mb-4">
            <Scale className="w-5 h-5 text-teal-600" />
            Australian National E-Bike Standard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-xs sm:text-sm text-slate-600">
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-600" /><span className="font-bold text-emerald-900">Road Legal — No Rego</span></div>
              <p>Pedal-assist e-bikes with a maximum continuous motor power of <strong>250W</strong> that only assist while pedalling and cut out at <strong>25 km/h</strong>. Classified as a bicycle in all states.</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 space-y-2">
              <div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-600" /><span className="font-bold text-amber-900">Requires Registration</span></div>
              <p>Electric bikes exceeding 250W continuous power OR capable of exceeding 25 km/h without pedalling are classified as motorcycles or mopeds and require road registration and a motorcycle licence in all states.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-slate-600" /><span className="font-bold text-slate-900">Off-Road — No Restrictions</span></div>
              <p>Electric dirt bikes and off-road e-bikes operated on private property and designated off-road parks have no power restrictions in any Australian state. A current rider licence may be required at commercial venues.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 bg-slate-50 rounded-xl p-4 border border-slate-100">
            <div>
              <div className="font-bold text-slate-900 mb-1">The 250W Rule</div>
              <p>250W refers to the motor&apos;s <em>continuous</em> rated output, not peak. Many e-bikes have 500W or 750W peak motors that are compliant because their <em>continuous</em> rating is 250W. Check the bike&apos;s EN15194 compliance certificate or manufacturer spec sheet for the continuous rating.</p>
            </div>
            <div>
              <div className="font-bold text-slate-900 mb-1">The 25 km/h Threshold</div>
              <p>The motor must not assist above 25 km/h. Riders can pedal faster under their own power — the motor just must not provide assist beyond that speed. Many e-bikes are speed-limited in firmware; some have higher-speed off-road modes that take the bike out of road-legal classification if enabled.</p>
            </div>
          </div>
        </div>

        {/* State by State Guide */}
        <div className="space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-b border-slate-200 pb-4">
            E-Bike Laws by State — 2026
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stateRules.map((rule) => (
              <div key={rule.state} className={`p-5 rounded-xl border ${rule.color} space-y-3`}>
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-slate-900 text-lg">{rule.state}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white/70 px-2 py-1 rounded-md">{rule.authority}</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" /><span><strong>Road-legal:</strong> {rule.roadLegal}</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" /><span><strong>Licence:</strong> {rule.licence}</span></div>
                  <div className="flex items-start gap-2"><CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" /><span><strong>Registration:</strong> {rule.registration}</span></div>
                  <div className="flex items-start gap-2"><AlertTriangle className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" /><span><strong>Throttle-only:</strong> {rule.throttle}</span></div>
                  <div className="flex items-start gap-2"><ShieldCheck className="w-3.5 h-3.5 text-slate-500 mt-0.5 shrink-0" /><span><strong>Helmet:</strong> {rule.minAge}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Questions */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs mb-12">
          <h2 className="font-bold text-slate-900 text-xl mb-5">E-Bike Laws Australia — Key Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs sm:text-sm text-slate-700">
            {[
              { q: 'Do NSW e-bikes need number plates?', a: 'No. Compliant pedal-assist e-bikes (≤250W, ≤25 km/h) are classified as bicycles in NSW and do not require number plates, registration, or a licence.' },
              { q: 'Can I ride an e-bike on shared paths in Australia?', a: 'Yes. Road-legal pedal-assist e-bikes (≤250W, ≤25 km/h) are permitted on shared bicycle/pedestrian paths in all states. Riders must give way to pedestrians and obey path speed signs.' },
              { q: 'What is the minimum age to ride an e-bike in Australia?', a: 'There is no minimum age for road-legal e-bikes on paths and roads in most states. However, helmet use is mandatory at all ages. Some states require adults to supervise younger children on roads.' },
              { q: 'Are electric dirt bikes street legal in Australia?', a: 'Not on public roads unless registered as a motorcycle. Off-road electric dirt bikes (Sur-Ron, Talaria, Stealth etc.) are for private property and designated off-road parks only. Riding on public roads without registration is illegal.' },
              { q: 'Can L and P-plate riders ride electric bikes in Australia?', a: 'Road-legal e-bikes (≤250W bicycles) require no licence, so any rider regardless of licence status can ride them. LAMS-approved electric mopeds (like the NIU NQi GT) can be ridden by learner and provisional motorcycle licence holders under LAMS rules.' },
              { q: 'What does EN15194 mean for Australian e-bikes?', a: 'EN 15194 is the European e-bike standard that defines a road-legal pedal-assist cycle as ≤250W continuous and ≤25 km/h assist. Australian regulators use this standard as the benchmark for road-legal classification. Look for EN15194 compliance on any e-bike you plan to ride on Australian roads.' },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                <div className="font-bold text-slate-900">{item.q}</div>
                <p className="leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to related pages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {[
            { href: '/electric-motor-bikes/commuter-mopeds/', title: 'Road-Legal Commuter e-Bikes', desc: 'Shop compliant 250W e-bikes — no licence, no rego.', icon: CheckCircle, color: 'text-emerald-600' },
            { href: '/electric-motor-bikes/perth/', title: 'Electric Bikes Perth', desc: 'Perth WA delivery info, e-bike laws, top picks.', icon: MapPin, color: 'text-purple-600' },
            { href: '/electric-motor-bikes/melbourne/', title: 'Electric Bikes Melbourne', desc: 'VIC laws, same-week delivery, top models for Melbourne.', icon: MapPin, color: 'text-pink-600' },
          ].map(({ href, title, desc, icon: Icon, color }) => (
            <Link key={href} href={href} className="bg-white p-5 rounded-xl border border-slate-200 hover:border-sky-400 hover:shadow-sm transition-all flex items-start gap-3">
              <Icon className={`w-5 h-5 ${color} mt-0.5 shrink-0`} />
              <div className="space-y-0.5">
                <div className="font-bold text-sm text-slate-900">{title}</div>
                <p className="text-xs text-slate-500">{desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 ml-auto mt-0.5 shrink-0" />
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">E-Bike Laws Australia 2026 — FAQ</h2>
          <div className="divide-y divide-slate-100 space-y-4">
            {[
              { q: 'Are electric bikes legal in Australia?', a: 'Yes. Pedal-assist e-bikes with ≤250W continuous motor output that only assist to 25 km/h are legal in all Australian states as bicycles — requiring no licence, registration, or number plate. Higher-powered electric bikes are classified as motorcycles and require registration and a licence.' },
              { q: 'Do electric bikes need registration in Australia?', a: 'No, for road-legal e-bikes. Compliant pedal-assist e-bikes (≤250W, ≤25 km/h) require no registration in any Australian state. Electric motorcycles, mopeds, and throttle-only e-bikes exceeding these limits require registration with your state roads authority.' },
              { q: 'Do NSW e-bikes need number plates?', a: 'No. Road-legal pedal-assist e-bikes in NSW are classified as bicycles and do not require number plates. Only registered electric motorcycles or mopeds need plates under NSW regulations.' },
              { q: 'What are the e-bike laws in Victoria?', a: 'In Victoria, pedal-assist e-bikes (pedelecs) ≤250W that cut out at 25 km/h require no registration, no licence, and no number plates. Bikes exceeding these limits must be registered with VicRoads as mopeds or motorcycles.' },
              { q: 'Are electric dirt bikes legal in Australia?', a: 'Off-road electric dirt bikes are legal for use on private property and designated off-road parks in all Australian states. They cannot be ridden on public roads without motorcycle registration. Popular off-road parks and motocross circuits accommodate these bikes with separate track days.' },
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
