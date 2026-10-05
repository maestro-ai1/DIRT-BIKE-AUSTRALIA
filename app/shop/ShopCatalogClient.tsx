'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCT_GRID, toCard } from '@/lib/productCard';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

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

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
// A product matches a brand filter by name, by slug ("e-ride-pro" = "E-Ride Pro") or when the filter name extends the product brand ("RFN (Apollo)" = "RFN").
const brandMatches = (productBrand: string, selected: string) => {
  const p = slugify(productBrand);
  const s = slugify(selected);
  return p === s || s.startsWith(p + '-');
};

export function ShopCatalogClient({
  products,
  brands,
  categories,
}: {
  products: Product[];
  brands: Brand[];
  categories: Category[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const catalogTopRef = useRef<HTMLDivElement>(null);

  // Nav and footer link to /shop/?category=... and /shop/?brand=...; apply them once on load (the canonical stays /shop/).
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get('category');
      const brand = params.get('brand');
      if (cat && categories.some((c) => c.slug === cat)) setSelectedCategory(cat);
      if (brand) {
        const b = brands.find((x) => slugify(x.slug) === slugify(brand) || slugify(x.name) === slugify(brand));
        setSelectedBrand(b ? b.name : brand);
      }
    } catch {
      /* ignore malformed query strings */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      if (selectedBrand !== 'all' && !brandMatches(p.brand, selectedBrand)) return false;
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
          <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
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
          <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 px-1 gap-2">
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
          <div className={PRODUCT_GRID}>
            {paginatedProducts.map((p) => (
              <ProductCard key={p.slug} product={toCard(p)} />
            ))}
          </div>

          {/* 9 Products per Page Pagination Bar */}
          {totalPages > 1 && (
            <div className="pt-6 pb-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-600 font-medium">
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
