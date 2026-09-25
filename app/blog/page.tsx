import React from 'react';
import Link from 'next/link';
import { POSTS, SITE } from '@/src/config/site';
import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { BlogCatalogClient } from './BlogCatalogClient';
import { BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Electric Dirt Bike Guides, Tech Reviews & News Australia | Blog',
  description: 'Expert technical guides, Sur-Ron vs Talaria comparisons, 72V battery upgrades, legal regulations, and maintenance advice from our Mittagong NSW workshop.',
  alternates: {
    canonical: `https://${SITE.domain}/blog/`,
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
};

export default function BlogIndexPage() {
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
        name: 'Blog',
        item: `https://${SITE.domain}/blog/`,
      },
    ],
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <JsonLd data={schemaData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Blog &amp; Technical Guides</span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider border border-sky-400/30">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Australian E-Moto Knowledge Base ({POSTS.length} Articles)</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Electric Dirt Bike Guides, Tech Reviews &amp; News
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              In-depth comparison guides, battery maintenance practices, Australian road &amp; trail regulations, and controller tuning from our dedicated testing facility in Mittagong NSW 2575.
            </p>
          </div>
        </div>

        {/* Interactive Blog Catalog (9 Articles Per Page) */}
        <BlogCatalogClient posts={POSTS} />

      </div>
    </div>
  );
}
