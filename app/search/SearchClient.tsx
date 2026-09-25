'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search, ArrowRight, Zap, BookOpen } from 'lucide-react';

interface Product {
  slug: string;
  name: string;
  price: number;
  brand: string;
  category: string;
  badge: string;
  shortDescription: string;
  images: string[];
}

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

export function SearchClient({
  products,
  posts,
}: {
  products: Product[];
  posts: Post[];
}) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  const q = query.toLowerCase().trim();

  const matchingProducts = products.filter((p) => {
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  });

  const matchingPosts = posts.filter((post) => {
    if (!q) return true;
    return (
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-8">
      {/* Search Input Box */}
      <div className="relative max-w-2xl">
        <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try searching 'Sur-Ron', 'Talaria', 'Stark Varg', '72V', 'fast charger'..."
          className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-300 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-sky-500 focus:outline-none shadow-xs"
        />
      </div>

      {/* Results Section */}
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Zap className="w-4 h-4 text-sky-600" />
            <span>Matching Bikes &amp; Accessories ({matchingProducts.length})</span>
          </h2>

          {matchingProducts.length === 0 ? (
            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center text-slate-500 text-sm">
              No products found matching &ldquo;{query}&rdquo;.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {matchingProducts.map((p) => (
                <div
                  key={p.slug}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-600 text-white">
                        {p.badge}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1 mb-1">
                        <Link href={`/shop/${p.slug}/`}>{p.name}</Link>
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                        {p.shortDescription}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span className="font-mono font-bold text-sm text-slate-900">
                        ${p.price.toLocaleString()} AUD
                      </span>
                      <Link
                        href={`/shop/${p.slug}/`}
                        className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-bold transition-colors"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Matching Blog Articles */}
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-orange-600" />
            <span>Matching Guides &amp; Articles ({matchingPosts.length})</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {matchingPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-sky-500 transition-all group block shadow-xs"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 block mb-1">
                  {post.category}
                </span>
                <h3 className="font-bold text-slate-900 group-hover:text-sky-600 text-sm mb-1 transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
