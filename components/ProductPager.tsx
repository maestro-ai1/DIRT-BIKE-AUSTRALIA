import React from 'react';
import { PaginatedProducts, type PagerItem } from '@/components/PaginatedProducts';
import { toCard } from '@/lib/productCard';
import { topUpProducts } from '@/lib/topUpProducts';
import type { ProductItem } from '@/src/config/site';

export interface PagerGroup {
  id?: string;
  heading?: string;
  blurb?: string;
  items: ProductItem[];
  alt?: (p: ProductItem) => string;
}

// Server wrapper for category pages: flattens one or more product groups into a single 9-per-page listing,
// keeping each group's heading above its first product, and tops short pages up to 9 with real catalogue bikes.
export function ProductPager({ groups, topUp = true, grid }: { groups: PagerGroup[]; topUp?: boolean; grid?: string }) {
  const items: PagerItem[] = [];
  const seen = new Set<string>();
  groups.forEach((g, gi) => {
    g.items.forEach((p, i) => {
      if (seen.has(p.slug)) return;
      seen.add(p.slug);
      items.push({
        key: p.slug,
        product: toCard(p),
        alt: g.alt?.(p),
        heading: i === 0 && g.heading ? { id: g.id ?? `grp-${gi}`, title: g.heading, blurb: g.blurb } : undefined,
      });
    });
  });

  if (topUp) {
    topUpProducts([...seen]).forEach((p, i) => {
      items.push({
        key: `more-${p.slug}`,
        product: toCard(p),
        heading: i === 0 ? { id: 'grp-more', title: 'More Electric Bikes You May Like', blurb: 'Popular electric bikes from the rest of our Australian range.' } : undefined,
      });
    });
  }

  return <PaginatedProducts items={items} grid={grid} />;
}
