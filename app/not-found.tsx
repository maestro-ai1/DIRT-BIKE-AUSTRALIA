import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Compass, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page Not Found | Electric Dirt Bike Australia',
  description: 'The requested page could not be found.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="py-20 bg-slate-50 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 bg-slate-200 text-slate-700 rounded-full flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded">
            Error 404
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Trail End: Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The page you are looking for has been moved or does not exist. Explore our current catalog of electric dirt bikes and accessories below.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
          >
            Homepage
          </Link>
          <Link
            href="/shop/"
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
          >
            Shop Dirt Bikes
          </Link>
        </div>
      </div>
    </div>
  );
}
