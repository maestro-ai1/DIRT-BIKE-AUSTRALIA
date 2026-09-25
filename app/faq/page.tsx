import React from 'react';
import Link from 'next/link';
import { FAQ, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { HelpCircle, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Electric Dirt Bike Australia',
  description: 'Everything you need to know about off-road electric dirt bikes in Australia, legality, 10% crypto discount, shipping logistics, and warranty.',
  alternates: {
    canonical: `https://${SITE.domain}/faq/`,
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
};

export default function FaqPage() {
  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
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
          name: 'FAQ',
          item: `https://${SITE.domain}/faq/`,
        },
      ],
    },
  ];

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <JsonLd data={schemaData} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Frequently Asked Questions</span>
        </nav>

        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold mb-3 border border-sky-400/30">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Direct Answers</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Answers to common questions about riding electric dirt bikes in Australia, battery care, freight timelines, and payment options.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs"
            >
              <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                {item.question}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-sky-50 border border-sky-200 p-6 rounded-2xl text-center space-y-2">
          <div className="font-bold text-sky-950 text-sm">
            Need further technical guidance on choosing the right bike?
          </div>
          <p className="text-xs text-sky-800 max-w-md mx-auto">
            Our Australian workshop team in Mittagong is happy to advise on terrain suitability, suspension setups, and custom battery configurations.
          </p>
          <div className="pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition-colors"
            >
              <span>Contact Us Today</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
