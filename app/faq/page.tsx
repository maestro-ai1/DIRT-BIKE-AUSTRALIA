import React from 'react';
import Link from 'next/link';
import { FAQ, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { seoFor, buildFaq } from '@/src/config/seo';
import { JsonLd } from '@/components/JsonLd';
import { HelpCircle, ChevronRight } from 'lucide-react';

import { FaqItem } from '@/components/FaqItem';
const seo = seoFor('/faq/');
const FAQ_ITEMS = buildFaq(FAQ);
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: {
    canonical: `https://${SITE.domain}/faq/`,
  },
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    url: `https://${SITE.domain}/faq/`,
    siteName: 'Electric Dirt Bike Australia',
    locale: 'en_AU',
    type: 'website',
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
      mainEntity: FAQ_ITEMS.map((item) => ({
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
            Electric Dirt Bike FAQ Australia: Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Answers to common questions about riding electric dirt bikes in Australia, battery care, freight timelines, and payment options.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <FaqItem key={idx} as="h2" question={item.question}>
              {item.answer}
            </FaqItem>
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
