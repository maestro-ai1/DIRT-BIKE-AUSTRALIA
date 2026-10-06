import React from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { POSTS } from '@/src/config/site';
import { RELATED_GUIDES } from '@/src/config/related-guides';

// "Related Buying Guides": internal links from a category page to the blog guides that answer the same shopper's questions.
export function RelatedGuides({ path, className = 'mb-12' }: { path: string; className?: string }) {
  const guides = (RELATED_GUIDES[path] ?? []).map((slug) => POSTS.find((p) => p.slug === slug)).filter(Boolean) as typeof POSTS;
  if (guides.length === 0) return null;
  const id = `guides-${path.replace(/\W+/g, '-')}`;
  return (
    <aside className={`bg-white p-5 sm:p-6 rounded-2xl border border-slate-300 shadow-sm ${className}`} aria-labelledby={id}>
      <h2 id={id} className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
        <BookOpen className="w-4 h-4 text-sky-700" aria-hidden="true" />
        Related Buying Guides
      </h2>
      <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
        {guides.map((g) => (
          <li key={g.slug} className="text-xs leading-snug">
            <Link href={`/blog/${g.slug}/`} className="font-bold text-sky-800 hover:underline">
              {g.title}
            </Link>
            <span className="block text-slate-600 line-clamp-2 mt-0.5">{g.excerpt}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
