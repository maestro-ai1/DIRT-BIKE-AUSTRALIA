import React from 'react';
import Link from 'next/link';
import { SITE, CONTACT } from '@/src/config/site';
import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { ShieldCheck, Wrench, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Warranty & Service | Electric Dirt Bike Australia',
  description: '12-Month Australian Factory Warranty terms, replacement parts support, and workshop service guidelines for electric dirt bikes in NSW.',
  alternates: {
    canonical: `https://${SITE.domain}/warranty-and-service/`,
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
};

export default function WarrantyServicePage() {
  const schemaData = {
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
        name: 'Warranty & Service',
        item: `https://${SITE.domain}/warranty-and-service/`,
      },
    ],
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <JsonLd data={schemaData} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Warranty &amp; Service</span>
        </nav>

        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold mb-3 border border-emerald-400/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>12-Month Factory Protection</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            12-Month Comprehensive Australian Factory Warranty
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Peace of mind with genuine replacement parts and experienced local technicians based in Mittagong NSW 2575.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>What Is Covered Under the 12-Month Warranty?</span>
            </h2>
            <p>
              All electric dirt bikes and high-discharge battery packs sold by Electric Dirt Bike Australia include 12 months of coverage against manufacturer defects on:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Aviation-grade aluminium chassis and rear swingarm structural integrity.</li>
              <li>Permanent magnet electric motor and sealed gearbox assemblies.</li>
              <li>Sine-wave electronic motor controllers and wiring harnesses.</li>
              <li>Factory lithium battery packs (cell balance, BMS circuitry, and discharge stability).</li>
              <li>Digital display readouts and throttle sensors.</li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-sky-600" />
              <span>Routine Maintenance &amp; Exclusions</span>
            </h2>
            <p>
              Like any high-performance motorcycle, regular wear-and-tear items are not covered under warranty. These include: brake pads, tyre treads, chains, sprockets, and cosmetic damage resulting from crashes or water submersion.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-base font-bold text-slate-900">
              How to Lodge a Technical Support or Warranty Claim
            </h2>
            <p>
              Contact our Mittagong workshop with your order number and video/photos of the issue at <strong>support@electricdirtbikeaustralia.com.au</strong> or via WhatsApp at <strong>{CONTACT.whatsappDisplay}</strong>. If a component fails within warranty, replacement parts are dispatched via express courier.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
