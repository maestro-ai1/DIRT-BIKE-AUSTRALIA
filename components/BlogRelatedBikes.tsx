import React from 'react';
import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCT_GRID, toCard } from '@/lib/productCard';
import { productImageAlt, productKind } from '@/lib/productSeo';
import { productsForPost, VEHICLE_KINDS } from '@/lib/relatedProducts';

// "Shop related bikes" row under a guide: three catalogue products that suit the post topic, as crawlable internal links to money pages.
export function BlogRelatedBikes({ slug, avoid = [] }: { slug: string; avoid?: string[] }) {
  const items = productsForPost(slug, 3, avoid);
  if (items.length === 0) return null;
  const bikes = items.some((p) => VEHICLE_KINDS.includes(productKind(p)));
  return (
    <section aria-labelledby="blog-related-bikes" className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h2 id="blog-related-bikes" className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          {bikes ? 'Shop Electric Bikes Related to This Guide' : 'Shop Batteries, Parts and Accessories for This Guide'}
        </h2>
        <Link href={bikes ? '/shop/' : '/accessories/'} className="text-xs font-bold text-sky-800 hover:underline shrink-0">{bikes ? 'Browse all bikes →' : 'Browse all accessories →'}</Link>
      </div>
      <div className={PRODUCT_GRID}>
        {items.map((p) => (
          <ProductCard key={p.slug} product={toCard(p)} alt={productImageAlt(p)} as="h3" />
        ))}
      </div>
    </section>
  );
}

// Product slugs a post already links to, so the related row never repeats them.
export function shopSlugsIn(data: unknown): string[] {
  const s = typeof data === 'string' ? data : JSON.stringify(data);
  return [...new Set([...s.matchAll(/\/shop\/([a-z0-9-]+)\//g)].map((m) => m[1]))];
}
