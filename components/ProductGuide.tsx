import React from 'react';
import { getProductGuide } from '@/lib/productGuide';
import { renderInline } from '@/components/BlogRichContent';

// Buying-guide block under each product: one H2, three H3 sections, internal links (category + guides) and outbound official/reference links.
export function ProductGuide({ product }: { product: Parameters<typeof getProductGuide>[0] }) {
  const g = getProductGuide(product);
  return (
    <section className="mt-10 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-5" aria-labelledby="product-guide">
      <h2 id="product-guide" className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">{g.h2}</h2>
      {g.sections.map((s, i) => (
        <div key={i} className="space-y-1.5">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">{s.h3}</h3>
          <p className="text-sm text-slate-700 leading-relaxed">{renderInline(s.text, `pg${i}`)}</p>
        </div>
      ))}
      <p className="text-sm text-slate-700 leading-relaxed">{renderInline(g.further, 'pgf')}</p>
      <div className="border-t border-slate-200 pt-3">
        <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">Official guides and references</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs">
          {g.outbound.map((o) => (
            <li key={o.url}>
              <a href={o.url} target="_blank" rel="noopener noreferrer" className="text-sky-700 underline hover:text-sky-900 font-medium">{o.label}</a>
              <span className="text-slate-500"> ({o.source})</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
