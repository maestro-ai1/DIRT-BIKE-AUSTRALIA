'use client';

import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCT_GRID } from '@/lib/productCard';
import type { CardProduct } from '@/lib/productCard';

export interface PagerItem {
  key: string;
  product: CardProduct;
  alt?: string;
  // Section heading shown above this card (used where a page groups products, e.g. "ACE Fat Tyre Electric Bikes").
  heading?: { id: string; title: string; blurb?: string };
}

export const PAGE_SIZE = 9;

// Category-page product listing: 9 cards per page with Page 1, 2, 3... controls.
// Every card is rendered in the HTML (pages other than the current one are just hidden), so all product links stay crawlable.
export function PaginatedProducts({ items, pageSize = PAGE_SIZE, grid = PRODUCT_GRID }: { items: PagerItem[]; pageSize?: number; grid?: string }) {
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const first = (page - 1) * pageSize;
  const last = Math.min(page * pageSize, items.length);

  const go = (n: number) => {
    if (n < 1 || n > totalPages || n === page) return;
    setPage(n);
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navBtn =
    'px-3 py-2 text-xs font-bold rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 transition-colors';

  return (
    <div ref={topRef} className="scroll-mt-24">
      <div className={grid}>
        {items.map((it, i) => {
          const visible = i >= first && i < first + pageSize;
          return (
            <React.Fragment key={it.key}>
              {it.heading && (
                <div className={`col-span-full border-b border-slate-300 pb-3 pt-2 ${visible ? '' : 'hidden'}`}>
                  <h2 id={it.heading.id} className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {it.heading.title}
                  </h2>
                  {it.heading.blurb && <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">{it.heading.blurb}</p>}
                </div>
              )}
              <div className={visible ? 'contents' : 'hidden'}>
                <ProductCard product={it.product} alt={it.alt} />
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {totalPages > 1 && (
        <nav aria-label="Product pages" className="mt-8 pt-5 border-t border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-700 font-medium">
            Showing <strong>{first + 1}–{last}</strong> of <strong>{items.length}</strong> products · Page <strong>{page}</strong> of <strong>{totalPages}</strong>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            <button type="button" onClick={() => go(page - 1)} disabled={page === 1} className={navBtn}>
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => go(n)}
                aria-label={`Page ${n}`}
                aria-current={n === page ? 'page' : undefined}
                className={`w-9 h-9 text-xs font-bold rounded-lg transition-colors ${
                  n === page ? 'bg-slate-800 text-white' : 'bg-white border border-slate-300 text-slate-800 hover:bg-slate-100'
                }`}
              >
                {n}
              </button>
            ))}
            <button type="button" onClick={() => go(page + 1)} disabled={page === totalPages} className={navBtn}>
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}
