'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Check } from 'lucide-react';
import { useCart } from '@/lib/cartContext';
import type { CardProduct } from '@/lib/productCard';
import { productImageAlt } from '@/lib/productSeo';

// The one product card used on every listing: white 4:3 image well, fixed-height text rows, price and buttons pinned to the bottom.
export function ProductCard({ product, alt, as: Heading = 'h3' }: { product: CardProduct; alt?: string; as?: 'h2' | 'h3' | 'h4' }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const href = `/shop/${product.slug}/`;

  const handleAdd = () => {
    addToCart({ slug: product.slug, name: product.name, price: product.price, image: product.image, category: product.category });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article className="group flex flex-col h-full bg-white rounded-xl border border-slate-300 shadow-sm hover:shadow-lg hover:border-sky-400 transition-all overflow-hidden">
      <Link href={href} className={`relative block aspect-[4/3] border-b border-slate-200 overflow-hidden ${product.darkImage ? 'bg-black' : 'bg-white'}`} tabIndex={-1} aria-hidden="true">
        <img
          src={product.image}
          alt={alt ?? productImageAlt(product)}
          width={800}
          height={600}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 ${product.darkImage ? '' : 'p-3'}`}
        />
        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-orange-700 text-white">
          {product.badge}
        </span>
        {product.compareAtPrice ? (
          <span className="absolute top-2 right-2 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-700 text-white">
            Save ${(product.compareAtPrice - product.price).toLocaleString()}
          </span>
        ) : null}
      </Link>

      <div className="flex flex-col flex-1 p-4">
        <div className="text-[10px] font-bold uppercase tracking-wider text-sky-800 truncate">{product.brand}</div>
        <Heading className="mt-0.5 text-sm font-bold text-slate-900 leading-snug line-clamp-2 min-h-[2.5rem] group-hover:text-sky-700 transition-colors">
          <Link href={href}>{product.name}</Link>
        </Heading>
        <p className="mt-1 text-xs text-slate-600 leading-relaxed line-clamp-2 min-h-[2rem]">{product.shortDescription}</p>

        <div className="mt-2 flex flex-wrap gap-1 min-h-[1.5rem]">
          {product.specs.map((s) => (
            <span key={s} className="max-w-full truncate px-2 py-0.5 rounded bg-slate-100 text-[10px] font-semibold text-slate-700">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-3">
          <div className="flex items-end justify-between border-t border-slate-200 pt-3">
            <div className="text-lg font-mono font-extrabold text-slate-900 leading-none">
              ${product.price.toLocaleString()} <span className="text-[10px] font-normal text-slate-600">AUD</span>
            </div>
            <div className="text-[10px] font-semibold text-orange-700">${Math.round(product.price * 0.9).toLocaleString()} crypto (-10%)</div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleAdd}
              className={`py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                added ? 'bg-emerald-700 text-white' : 'bg-slate-800 hover:bg-slate-900 text-white'
              }`}
            >
              {added ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
              <span>{added ? 'Added' : 'Add to Cart'}</span>
            </button>
            <Link
              href={href}
              aria-label={`View ${product.name}`}
              className="py-2 rounded-lg text-xs font-bold text-center border border-slate-300 text-slate-800 hover:bg-slate-100 transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
