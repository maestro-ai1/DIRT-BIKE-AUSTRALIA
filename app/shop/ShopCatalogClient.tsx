'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cartContext';
import { ShoppingBag, Check, Zap, Filter, Search, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  slug: string;
  name: string;
  brand: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  badge: string;
  shortDescription: string;
  images: string[];
  specs?: Record<string, string>;
}

interface Category {
  slug: string;
  name: string;
}

interface Brand {
  slug: string;
  name: string;
}

const ITEMS_PER_PAGE = 9;

export function ShopCatalogClient({
  products,
  brands,
  categories,
}: {
  products: Product[];
  brands: Brand[];
  categories: Category[];
}) {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [addedSlug, setAddedSlug] = useState<string | null>(null);
  const catalogTopRef = useRef<HTMLDivElement>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      if (selectedBrand !== 'all' && p.brand.toLowerCase() !== selectedBrand.toLowerCase()) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchDesc = p.shortDescription.toLowerCase().includes(q);
        const matchBrand = p.brand.toLowerCase().includes(q);
        if (!matchName && !matchDesc && !matchBrand) return false;
      }
      return true;
    });
  }, [products, selectedCategory, selectedBrand, searchQuery]);

  // Reset to page 1 whenever filters or search query change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedBrand, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      if (catalogTopRef.current) {
        catalogTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleAddToCart = (p: Product) => {
    addToCart({
      slug: p.slug,
      name: p.name,
      price: p.price,
      image: p.images[0],
      category: p.category,
    });
    setAddedSlug(p.slug);
    setTimeout(() => setAddedSlug(null), 1500);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endIndex = Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length);

  return (
    <div ref={catalogTopRef} className="space-y-8 scroll-mt-24">
      {/* Filter and Search Bar */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-4">
        
        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by model, brand, 72V battery, or fast charger..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* Categories Tabs */}
        <div>
          <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            Categories
          </span>
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Categories ({products.length})
            </button>
            {categories.map((c) => (
              <button
                key={c.slug}
                type="button"
                onClick={() => setSelectedCategory(c.slug)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCategory === c.slug
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Brands Filter */}
        <div className="pt-2 border-t border-slate-100">
          <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            Filter by Brand
          </span>
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedBrand('all')}
              className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                selectedBrand === 'all'
                  ? 'bg-slate-900 text-white font-bold'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Brands
            </button>
            {brands.map((b) => (
              <button
                key={b.slug}
                type="button"
                onClick={() => setSelectedBrand(b.name)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                  selectedBrand.toLowerCase() === b.name.toLowerCase()
                    ? 'bg-slate-900 text-white font-bold'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Results Count & Current Page Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 px-1 gap-2">
        <span>
          {filteredProducts.length > 0 ? (
            <>
              Showing <strong>{startIndex}–{endIndex}</strong> of <strong>{filteredProducts.length}</strong> products (Page {currentPage} of {totalPages})
            </>
          ) : (
            'Showing 0 products'
          )}
        </span>
        {(selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery) && (
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setSelectedBrand('all');
              setSearchQuery('');
            }}
            className="text-sky-600 hover:text-sky-800 font-bold self-start sm:self-auto"
          >
            Reset All Filters
          </button>
        )}
      </div>

      {/* Grid of 9 Products per page */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
          <p className="text-slate-600 font-semibold mb-2">No products found matching your filters.</p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setSelectedBrand('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 bg-sky-600 text-white text-xs font-bold rounded-lg"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedProducts.map((p) => (
              <div
                key={p.slug}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* 4:3 Image Container */}
                  <Link href={`/shop/${p.slug}/`} className="block relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-orange-600 text-white shadow-xs">
                        {p.badge}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-xs">
                        {p.brand}
                      </span>
                    </div>
                    {p.compareAtPrice && (
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-emerald-600 text-white text-[10px] font-bold">
                        Save ${(p.compareAtPrice - p.price).toLocaleString()}
                      </div>
                    )}
                  </Link>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1 mb-1">
                      <Link href={`/shop/${p.slug}/`}>
                        {p.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
                      {p.shortDescription}
                    </p>

                    {p.specs?.motorPeak && (
                      <div className="text-[11px] bg-slate-50 p-2 rounded-lg text-slate-600 mb-2 flex items-center justify-between">
                        <span className="text-slate-400">Peak Output:</span>
                        <span className="font-bold text-slate-900">{p.specs.motorPeak}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Price & Cart Action */}
                <div className="p-4 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between mb-3">
                    <div>
                      <div className="text-base sm:text-lg font-mono font-extrabold text-slate-900">
                        ${p.price.toLocaleString()} <span className="text-[11px] font-normal text-slate-500">AUD</span>
                      </div>
                      <div className="text-[10px] text-orange-600 font-semibold">
                        ${Math.round(p.price * 0.9).toLocaleString()} on Crypto (-10%)
                      </div>
                    </div>

                    <Link
                      href={`/shop/${p.slug}/`}
                      className="text-xs font-bold text-sky-600 hover:text-sky-800"
                    >
                      Specs →
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(p)}
                      className={`py-2 px-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                        addedSlug === p.slug
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      {addedSlug === p.slug ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5 text-sky-400" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>

                    <Link
                      href={`/shop/${p.slug}/`}
                      className="py-2 px-2.5 bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-bold rounded-lg text-center transition-colors"
                    >
                      Order Info
                    </Link>
                  </div>

                </div>

              </div>
            ))}
          </div>

          {/* 9 Products per Page Pagination Bar */}
          {totalPages > 1 && (
            <div className="pt-6 pb-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 font-medium">
                Page <span className="font-bold text-slate-900">{currentPage}</span> of{' '}
                <span className="font-bold text-slate-900">{totalPages}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 text-xs font-bold rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 transition-colors shadow-xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    className={`w-9 h-9 text-xs font-bold rounded-xl transition-all ${
                      currentPage === page
                        ? 'bg-sky-600 text-white shadow-md shadow-sky-500/20'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 text-xs font-bold rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 transition-colors shadow-xs"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
