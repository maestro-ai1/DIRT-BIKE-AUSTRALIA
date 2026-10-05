'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search, ArrowRight, Zap, BookOpen } from 'lucide-react';
import { PaginatedProducts } from '@/components/PaginatedProducts';
import { toCard } from '@/lib/productCard';

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
            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center text-slate-600 text-sm">
              No products found matching &ldquo;{query}&rdquo;.
            </div>
          ) : (
            <PaginatedProducts key={query} items={matchingProducts.map((p) => ({ key: p.slug, product: toCard(p) }))} />
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
                <p className="text-xs text-slate-600 line-clamp-2">
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
