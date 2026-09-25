import React, { Suspense } from 'react';
import Link from 'next/link';
import { SITE, PRODUCTS, POSTS } from '@/src/config/site';
import { Metadata } from 'next';
import { SearchClient } from './SearchClient';

export const metadata: Metadata = {
  title: 'Search Dirt Bikes, Batteries & Spares | Electric Dirt Bike Australia',
  description: 'Search our full inventory of Sur-Ron, Talaria, Stark Varg electric dirt bikes, batteries, chargers, and guides.',
  alternates: {
    canonical: `https://${SITE.domain}/search/`,
  },
  other: {
    'og:updated_time': new Date().toISOString(),
  },
};

export default function SearchPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Search</span>
        </nav>

        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            Search Inventory &amp; Riding Guides
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Find models by brand, wattage, voltage, battery capacity, or spare part name.
          </p>
        </div>

        <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading search...</div>}>
          <SearchClient products={PRODUCTS} posts={POSTS} />
        </Suspense>
      </div>
    </div>
  );
}
