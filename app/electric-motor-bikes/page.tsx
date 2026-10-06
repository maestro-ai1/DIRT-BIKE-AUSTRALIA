import React from 'react';
import Link from 'next/link';
import { PRODUCTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor } from '@/src/config/seo';
import { JsonLd } from '@/components/JsonLd';
import { Zap, ShieldCheck, FileText, CheckCircle } from 'lucide-react';

import { FaqItem } from '@/components/FaqItem';
import { AuthorityLinks } from '@/components/AuthorityLinks';
import { ProductPager } from '@/components/ProductPager';
import { RelatedGuides } from '@/components/RelatedGuides';
const seo = seoFor('/electric-motor-bikes/');
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: {
    canonical: `https://${SITE.domain}/electric-motor-bikes/`,
  },
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    url: `https://${SITE.domain}/electric-motor-bikes/`,
    siteName: 'Electric Dirt Bike Australia',
    locale: 'en_AU',
    type: 'website',
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
};

export default function ElectricMotorBikesPage() {
  // 14 top electronic motor bikes (more than 10)
  const topMotorBikeSlugs = [
    'sur-ron-ultra-bee',
    'sur-ron-storm-bee-enduro',
    'talaria-dragon-enduro',
    'talaria-sting-r-mx4',
    'sur-ron-light-bee-x',
    'e-ride-pro-sr',
    'e-ride-pro-ss-2-0',
    'stealth-b-52-bomber',
    'stealth-f-37-trail-fighter',
    'super73-rx-mojave',
    'super73-s2-adventure',
    'caofen-f80-dual-sport',
    'rfn-ares-rally-pro',
    'stark-varg-ex-80hp',
  ];

  const motorBikes = PRODUCTS.filter((p) => topMotorBikeSlugs.includes(p.slug));

  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `https://${SITE.domain}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Electric Motor Bikes',
          item: `https://${SITE.domain}/electric-motor-bikes/`,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are electric motor bikes road legal in Australia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dual-sport electric motor bikes equipped with ADR (Australian Design Rules) approved headlights, mirrors, indicators, horn, and road-homologated tyres can be registered for street use under LAMS (Learner Approved Motorcycle Scheme) in NSW, Victoria, Queensland, and across Australia. Pure competition off-road bikes are intended for private property and designated off-road parks.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a motorcycle licence to ride an electric motor bike in Australia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For road-registered electric motor bikes exceeding 250W or 25km/h, an Australian motorcycle learner permit or full motorcycle licence is required. Riding on private property or closed tracks does not require a licence or registration.',
          },
        },
        {
          '@type': 'Question',
          name: 'How fast do top electric motor bikes travel in Australia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Top electric motor bikes such as the Stark Varg EX 80HP and Sur-Ron Storm Bee exceed 110 km/h, while mid-weight platforms like the Talaria Sting R and Sur-Ron Ultra Bee reach 85 to 95 km/h with instant electric torque.',
          },
        },
      ],
    },
  ];

  return (
    <div className="py-12 min-h-screen">
      <JsonLd data={schemaData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-600 mb-6 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Electric Motor Bikes</span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 mb-12 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider border border-sky-400/30 inline-block">
              Top 14 Australian Platforms · Dual-Sport &amp; High-Voltage e-Motos
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Electric Motorbikes &amp; Motorcycles for Sale in Australia
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore Australia&apos;s most capable electric motor bikes. From road-capable dual-sport enduro platforms like the Sur-Ron Ultra Bee to Australian-engineered Stealth hyper-bikes and street scramblers, find the ideal machine backed by local NSW workshop support and nationwide crate freight.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                100% Free Aus-Wide Freight Over $1,500
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                12-Month Australian Factory Warranty
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <Zap className="w-4 h-4 text-orange-400" />
                10% Instant Crypto Discount
              </span>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Explainer Box */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs mb-12 space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
            <FileText className="w-5 h-5 text-sky-600" />
            <h2>Australian Road Registration &amp; Licensing Guidelines</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs sm:text-sm text-slate-600">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
              <h3 className="font-bold text-slate-900">1. Off-Road Electric Dirt Bikes</h3>
              <p className="leading-relaxed">
                High-power dirt bikes without mirrors, indicators, horn, and ADR compliance plates are classified strictly for off-road recreation, motocross tracks, and private property use across all Australian states.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
              <h3 className="font-bold text-slate-900">2. ADR Dual-Sport Registration</h3>
              <p className="leading-relaxed">
                Models such as the Sur-Ron Ultra Bee and Storm Bee can be ordered with ADR lighting kits and VIN compliance, enabling road registration as Learner Approved Motorcycles (LAMS) in NSW, VIC, QLD, WA, and SA.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
              <h3 className="font-bold text-slate-900">3. Urban Scramblers &amp; e-Motos</h3>
              <p className="leading-relaxed">
                Platforms like the Super73-RX offer dual selectable modes: an EN15194 compliant 25km/h pedal-assist street mode and an unlocked multi-kilowatt off-road trail mode for weekend bush adventures.
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Delivery guides: <Link href="/electric-motor-bikes/sydney/" className="text-sky-700 font-semibold hover:underline">Sydney</Link>,{' '}
            <Link href="/electric-motor-bikes/melbourne/" className="text-sky-700 font-semibold hover:underline">Melbourne</Link>,{' '}
            <Link href="/electric-motor-bikes/brisbane/" className="text-sky-700 font-semibold hover:underline">Brisbane</Link> and{' '}
            <Link href="/electric-motor-bikes/perth/" className="text-sky-700 font-semibold hover:underline">Perth</Link>. Also read the{' '}
            <Link href="/electric-motor-bikes/e-bike-laws-australia/" className="text-sky-700 font-semibold hover:underline">Australian e-bike laws guide</Link> and{' '}
            <Link href="/electric-motor-bikes/best-electric-bikes-australia/" className="text-sky-700 font-semibold hover:underline">best electric bikes 2026</Link>.
          </p>
        </div>

        {/* Grid of Top 14 Electric Motor Bikes */}
        <div className="space-y-6 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Featured Electric Motor Bikes ({motorBikes.length} Models)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Every bike is factory pre-inspected, crate-packaged, and dispatched with real-time tracking from Mittagong NSW 2575.
              </p>
            </div>
            <span className="text-xs font-bold text-sky-600 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-100 self-start sm:self-auto">
              Showing All {motorBikes.length} Top Electric Motor Bikes
            </span>
          </div>

          <ProductPager groups={[{ items: motorBikes }]} />
        </div>

        <RelatedGuides path="/electric-motor-bikes/" />


        <AuthorityLinks path="/electric-motor-bikes/" />

        {/* Electric Motor Bikes Dedicated FAQ Section */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-300 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Electric Motor Bikes in Australia — Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Key considerations when choosing, riding, and registering electric motor bikes across Australian states.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
            <FaqItem question="1. What is the difference between an electric dirt bike and an electric motor bike in Australia?">
                Electric dirt bikes (such as the Light Bee X or Talaria Sting R) are purpose-built for closed-circuit trail riding, motocross tracks, and private bush tracks. Electric motor bikes include dual-sport and street-homologated platforms (like the Sur-Ron Ultra Bee ADR and Storm Bee) that feature complete lighting harnesses, mirrors, horns, and VIN tags for public road registration under state motorcycle licensing.
              </FaqItem>

            <FaqItem question="2. Can electric motor bikes be charged from standard Australian household power points?">
                Yes! Every electric motor bike sold by Electric Dirt Bike Australia includes a smart fast charger fitted with a standard Australian 240V 10A/15A wall plug. You can plug it into any regular household power outlet in your garage, shed, or pit area without needing high-voltage EV station infrastructure.
              </FaqItem>

            <FaqItem question="3. What kind of maintenance is required compared to petrol motorcycles?">
                Electric motor bikes eliminate engine oil changes, air filter washing, spark plug replacements, carburetor cleaning, and top-end rebuilds. Routine maintenance is limited to keeping the drive chain lubricated and tensioned, checking brake pad wear, monitoring tyre pressures, and ensuring battery storage voltage guidelines are followed.
              </FaqItem>

            <FaqItem question="4. What warranty and genuine replacement parts support is provided in Australia?">
                All electric motor bikes sold by Electric Dirt Bike Australia include a 12-Month Comprehensive Australian Factory Warranty covering the motor, controller, battery, frame, and wiring harness. We stock genuine replacement parts locally in our Mittagong NSW 2575 warehouse for rapid dispatch nationwide.
              </FaqItem>
          </div>
        </div>

      </div>
    </div>
  );
}
