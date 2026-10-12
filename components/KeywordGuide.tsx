import React from 'react';
import Link from 'next/link';
import { KEYWORD_GUIDES } from '@/src/config/category-secondary';
import { extraBlockFor } from '@/src/config/category-sections';
import { FaqItem } from '@/components/FaqItem';

// Buying-guide block (H2 + paragraphs + internal links) carrying a page's secondary keywords, then the remap's extra keyword-led H2 sections.
// Copy lives in src/config/category-secondary.ts and src/config/category-sections.ts.
const cardCls = 'bg-white p-5 sm:p-6 rounded-2xl border border-slate-300 shadow-sm space-y-3';

function SeeAlso({ links }: { links?: { href: string; label: string }[] }) {
  if (!links || links.length === 0) return null;
  return (
    <p className="text-sm font-semibold text-slate-700">
      See also:{' '}
      {links.map((l, i) => (
        <React.Fragment key={l.href}>
          {i > 0 && ' · '}
          <Link href={l.href} className="text-sky-700 hover:underline">{l.label}</Link>
        </React.Fragment>
      ))}
    </p>
  );
}

export function KeywordGuide({ path, className = 'mb-12', faqs = false }: { path: string; className?: string; faqs?: boolean }) {
  const g = KEYWORD_GUIDES[path];
  const extra = extraBlockFor(path);
  const showFaqs = faqs && !!extra && extra.faqs.length > 0;
  if (!g && !(extra && extra.sections.length) && !showFaqs) return null;
  const id = `kw-${path.replace(/\W+/g, '-')}`;
  return (
    <div className={`space-y-5 ${className}`}>
      {g && (
        <section aria-labelledby={id} className={cardCls}>
          <h2 id={id} className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">{g.heading}</h2>
          {g.paragraphs.map((p, i) => (
            <p key={i} className="text-sm sm:text-base text-slate-700 leading-relaxed">{p}</p>
          ))}
          <SeeAlso links={g.links} />
        </section>
      )}
      {extra?.sections.map((s, n) => (
        <section key={s.heading} aria-labelledby={`${id}-x${n}`} className={cardCls}>
          <h2 id={`${id}-x${n}`} className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">{s.heading}</h2>
          {s.paragraphs.map((p, i) => (
            <p key={i} className="text-sm sm:text-base text-slate-700 leading-relaxed">{p}</p>
          ))}
          <SeeAlso links={s.links} />
        </section>
      ))}
      {showFaqs && (
        <section aria-labelledby={`${id}-faq`} className={cardCls}>
          <h2 id={`${id}-faq`} className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Quick Answers</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
            {extra!.faqs.map((f, i) => (
              <FaqItem key={f.q} question={`${i + 1}. ${f.q}`}>{f.a}</FaqItem>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
