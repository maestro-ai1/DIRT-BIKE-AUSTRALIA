import React from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/src/config/site';
import { ProductCard } from '@/components/ProductCard';
import { toCard } from '@/lib/productCard';
import { productImageAlt } from '@/lib/productSeo';

// Renderer for "rich" blog posts (src/config/posts-2026-10.ts): ## H2, ### H3, #### H4, images with alt text, {{product:slug}} cards,
// pipe tables, bullet and numbered lists, **bold**, and [text](url) links (internal links start with "/").

export type RichBlock =
  | { kind: 'h'; level: 2 | 3 | 4; text: string; id: string }
  | { kind: 'p'; text: string }
  | { kind: 'img'; alt: string; src: string }
  | { kind: 'product'; slug: string }
  | { kind: 'table'; head: string[]; rows: string[][] }
  | { kind: 'list'; ordered: boolean; items: string[] };

export const slugifyHeading = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export function parseRich(content: string): RichBlock[] {
  const lines = content.replace(/\r/g, '').split('\n');
  const blocks: RichBlock[] = [];
  const seen = new Map<string, number>();
  const idFor = (text: string) => {
    const base = slugifyHeading(text) || 'section';
    const n = (seen.get(base) ?? 0) + 1;
    seen.set(base, n);
    return n > 1 ? `${base}-${n}` : base;
  };
  let para: string[] = [];
  const flush = () => {
    if (para.length) blocks.push({ kind: 'p', text: para.join(' ') });
    para = [];
  };
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const t = line.trim();
    if (!t) { flush(); continue; }
    let m: RegExpMatchArray | null;
    if ((m = t.match(/^(#{2,4})\s+(.+)$/))) {
      flush();
      const level = m[1].length as 2 | 3 | 4;
      blocks.push({ kind: 'h', level, text: m[2].trim(), id: idFor(m[2].trim()) });
    } else if ((m = t.match(/^!\[([^\]]*)\]\(([^)]+)\)$/))) {
      flush();
      blocks.push({ kind: 'img', alt: m[1], src: m[2] });
    } else if ((m = t.match(/^\{\{product:([^}]+)\}\}$/))) {
      flush();
      blocks.push({ kind: 'product', slug: m[1] });
    } else if (t.startsWith('|') && lines[i + 1] && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
      flush();
      const cells = (s: string) => s.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      const head = cells(t);
      const rows: string[][] = [];
      i += 2;
      while (i < lines.length && lines[i].trim().startsWith('|')) { rows.push(cells(lines[i])); i++; }
      i--;
      blocks.push({ kind: 'table', head, rows });
    } else if (/^([-*]|\d+\.)\s+/.test(t)) {
      flush();
      const ordered = /^\d+\./.test(t);
      const items: string[] = [];
      while (i < lines.length && /^([-*]|\d+\.)\s+/.test(lines[i].trim())) { items.push(lines[i].trim().replace(/^([-*]|\d+\.)\s+/, '')); i++; }
      i--;
      blocks.push({ kind: 'list', ordered, items });
    } else {
      para.push(t);
    }
  }
  flush();
  return blocks;
}

// Inline markdown: [text](url) and **bold**. Internal links are same-tab; outbound links open in a new tab with noopener.
export function renderInline(text: string, keyPrefix = 'i'): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let n = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const key = `${keyPrefix}-${n++}`;
    if (m[3] !== undefined) {
      out.push(<strong key={key}>{m[3]}</strong>);
    } else {
      const url = m[2];
      const internal = url.startsWith('/') || url.includes('electricdirtbikeaustralia.com.au');
      out.push(
        internal ? (
          <Link key={key} href={url.replace(/^https?:\/\/(www\.)?electricdirtbikeaustralia\.com\.au/, '')} className="text-sky-700 underline hover:text-sky-900 font-medium">{m[1]}</Link>
        ) : (
          <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="text-sky-700 underline hover:text-sky-900 font-medium">{m[1]}</a>
        ),
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function RichContent({ blocks }: { blocks: RichBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.kind) {
          case 'h': {
            if (b.level === 2) return <h2 key={i} id={b.id} className="text-xl sm:text-2xl font-extrabold text-slate-900 pt-6 tracking-tight scroll-mt-28">{b.text}</h2>;
            if (b.level === 3) return <h3 key={i} id={b.id} className="text-lg sm:text-xl font-bold text-slate-900 pt-3 tracking-tight scroll-mt-28">{b.text}</h3>;
            return <h4 key={i} id={b.id} className="text-base font-bold text-slate-800 pt-2 scroll-mt-28">{b.text}</h4>;
          }
          case 'p':
            return <p key={i} className="text-slate-700 leading-relaxed">{renderInline(b.text, `p${i}`)}</p>;
          case 'img':
            return (
              <figure key={i} className="my-2">
                <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
                  <img src={b.src} alt={b.alt} width={1200} height={900} loading="lazy" decoding="async" className="w-full h-auto aspect-[4/3] object-contain bg-white" />
                </div>
              </figure>
            );
          case 'product': {
            const p = PRODUCTS.find((x) => x.slug === b.slug);
            if (!p) return null;
            return (
              <div key={i} className="my-2 max-w-sm mx-auto">
                <ProductCard product={toCard(p)} alt={productImageAlt(p)} as="h4" />
              </div>
            );
          }
          case 'table':
            return (
              <div key={i} className="overflow-x-auto rounded-xl border border-slate-300">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-100 text-slate-900">
                    <tr>{b.head.map((h, j) => <th key={j} scope="col" className="px-3 py-2 font-bold whitespace-nowrap">{renderInline(h, `th${i}-${j}`)}</th>)}</tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j} className="border-t border-slate-200 odd:bg-white even:bg-slate-50">
                        {r.map((c, k) => <td key={k} className="px-3 py-2 align-top text-slate-700">{renderInline(c, `td${i}-${j}-${k}`)}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'list': {
            const Tag = b.ordered ? 'ol' : 'ul';
            return (
              <Tag key={i} className={`${b.ordered ? 'list-decimal' : 'list-disc'} pl-6 space-y-1.5 text-slate-700`}>
                {b.items.map((it, j) => <li key={j} className="leading-relaxed">{renderInline(it, `li${i}-${j}`)}</li>)}
              </Tag>
            );
          }
        }
      })}
    </>
  );
}

export function plainFaqAnswer(a: string): string {
  return a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim();
}
