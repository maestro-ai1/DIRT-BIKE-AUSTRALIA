import React from 'react';
import Link from 'next/link';
import { KEYWORD_GUIDES } from '@/src/config/category-secondary';

// Short buying-guide block (H2 + two paragraphs + internal links) carrying a page's secondary keywords. Copy lives in src/config/category-secondary.ts.
export function KeywordGuide({ path, className = 'mb-12' }: { path: string; className?: string }) {
  const g = KEYWORD_GUIDES[path];
  if (!g) return null;
  const id = `kw-${path.replace(/\W+/g, '-')}`;
  return (
    <section aria-labelledby={id} className={`bg-white p-5 sm:p-6 rounded-2xl border border-slate-300 shadow-sm space-y-3 ${className}`}>
      <h2 id={id} className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">{g.heading}</h2>
      {g.paragraphs.map((p, i) => (
        <p key={i} className="text-sm sm:text-base text-slate-700 leading-relaxed">{p}</p>
      ))}
      {g.links && g.links.length > 0 && (
        <p className="text-sm font-semibold text-slate-700">
          See also:{' '}
          {g.links.map((l, i) => (
            <React.Fragment key={l.href}>
              {i > 0 && ' · '}
              <Link href={l.href} className="text-sky-700 hover:underline">{l.label}</Link>
            </React.Fragment>
          ))}
        </p>
      )}
    </section>
  );
}
