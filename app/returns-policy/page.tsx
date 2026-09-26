import React from 'react';
import Link from 'next/link';
import { SITE, CONTACT } from '@/src/config/site';
import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { RotateCcw, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Returns & Refunds Policy',
  description: 'Our Australian Consumer Law compliant returns and exchange policy for electric dirt bikes, batteries, and accessories.',
  alternates: {
    canonical: `https://${SITE.domain}/returns-policy/`,
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
};

export default function ReturnsPolicyPage() {
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
        name: 'Returns Policy',
        item: `https://${SITE.domain}/returns-policy/`,
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
          <span className="text-slate-900 font-bold">Returns Policy</span>
        </nav>

        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold mb-3 border border-sky-400/30">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Customer Protection</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            Returns, Replacements &amp; Refunds Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Compliant with Australian Consumer Law (ACL) and statutory consumer guarantees.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900">
              1. Australian Consumer Guarantees
            </h2>
            <p>
              Our goods come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a replacement or refund for a major failure and compensation for any other reasonably foreseeable loss or damage. You are also entitled to have the goods repaired or replaced if the goods fail to be of acceptable quality and the failure does not amount to a major failure.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-base font-bold text-slate-900">
              2. 14-Day Unopened Return Window
            </h2>
            <p>
              If you change your mind prior to assembling or riding the bike, you may request a return within 14 days of delivery provided the bike remains sealed in its original crate packaging with all ties and inspection seals intact. Return freight and restocking fee apply for change of mind cancellations.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-base font-bold text-slate-900">
              3. Transit Damage Claims
            </h2>
            <p>
              Every shipment is fully insured. If the external transport crate arrives with visible damage, please note it on the driver’s consignment note and notify us with photos within 24 hours at {CONTACT.email}.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
