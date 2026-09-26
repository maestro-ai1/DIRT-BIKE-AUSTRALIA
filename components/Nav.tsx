'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Search, ChevronDown, Menu, X } from 'lucide-react';
import { SITE, BRANDS, CATEGORIES } from '@/src/config/site';
import { useCart } from '@/lib/cartContext';

export function Nav() {
  const pathname = usePathname();
  const { itemCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [brandsDropdownOpen, setBrandsDropdownOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Zone 1: Brand Wordmark / Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-sky-700 via-sky-500 to-orange-500 flex items-center justify-center shadow-md shadow-sky-500/25 group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] sm:w-5 sm:h-5" aria-hidden="true">
                <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="2.5"/>
                <path d="M12.5 3.5L9 10L12.5 10L7.5 16.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors leading-none">
                ELECTRIC DIRT BIKE
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-orange-600 uppercase mt-0.5">
                AUSTRALIA
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <Link
              href="/"
              className={`transition-colors hover:text-sky-700 ${
                isActive('/') ? 'text-sky-700 font-bold' : ''
              }`}
            >
              Home
            </Link>

            {/* Shop Hover Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <Link
                href="/shop/"
                onClick={() => setShopDropdownOpen(false)}
                className={`flex items-center gap-1 transition-colors hover:text-sky-700 py-2 ${
                  isActive('/shop/') ? 'text-sky-700 font-bold' : ''
                }`}
              >
                <span>Shop</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${shopDropdownOpen ? 'rotate-180 text-sky-600' : ''}`} />
              </Link>

              {shopDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-900/10 p-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                    Shop by Category
                  </div>
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/shop/?category=${cat.slug}`}
                      onClick={() => setShopDropdownOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-sky-50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-slate-100">
                        <img src={cat.image} alt={cat.name} className="w-full h-full object-cover object-center" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-800 group-hover:text-sky-600 transition-colors">{cat.name}</div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">{cat.title}</div>
                      </div>
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 pt-1 mt-1">
                    <Link
                      href="/shop/"
                      onClick={() => setShopDropdownOpen(false)}
                      className="block px-3 py-2 text-xs font-bold text-sky-700 hover:bg-sky-50 rounded-lg text-center"
                    >
                      View All {CATEGORIES.reduce((n, _) => n, 0) > 0 ? '' : ''}Products →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Brands Hover / Click Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setBrandsDropdownOpen(true)}
              onMouseLeave={() => setBrandsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setBrandsDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-1 transition-colors hover:text-sky-700 py-2 ${
                  isActive('/brands/') ? 'text-sky-700 font-bold' : ''
                }`}
                aria-expanded={brandsDropdownOpen}
              >
                <span>Brands</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${brandsDropdownOpen ? 'rotate-180 text-sky-600' : ''}`} />
              </button>

              {/* Mega/Dropdown Panel */}
              {brandsDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-900/10 p-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    Trending Moto Brands
                  </div>
                  <div className="mt-1 space-y-0.5">
                    {BRANDS.map((b) => (
                      <Link
                        key={b.slug}
                        href={`/shop/?brand=${b.slug}`}
                        onClick={() => setBrandsDropdownOpen(false)}
                        className="flex items-center justify-between px-3 py-2 text-sm text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                      >
                        <span className="font-semibold">{b.name}</span>
                        <span className="text-[10px] bg-slate-100 text-slate-500 font-medium px-1.5 py-0.5 rounded">
                          {b.badge}
                        </span>
                      </Link>
                    ))}
                    <div className="border-t border-slate-100 pt-1 mt-1">
                      <Link
                        href="/brands/"
                        onClick={() => setBrandsDropdownOpen(false)}
                        className="block px-3 py-2 text-xs font-bold text-sky-700 hover:bg-sky-50 rounded-lg text-center"
                      >
                        View All Brands Guide →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/accessories/"
              className={`transition-colors hover:text-sky-700 ${
                isActive('/accessories/') ? 'text-sky-700 font-bold' : ''
              }`}
            >
              Accessories
            </Link>

            <Link
              href="/blog/"
              className={`transition-colors hover:text-sky-700 ${
                isActive('/blog/') ? 'text-sky-700 font-bold' : ''
              }`}
            >
              Blog
            </Link>

            <Link
              href="/contact/"
              className={`transition-colors hover:text-sky-700 ${
                isActive('/contact/') ? 'text-sky-700 font-bold' : ''
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Zone 3: Actions (Search, Cart, Mobile Toggle) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/search/"
              aria-label="Search dirt bikes and accessories"
              className="p-2 sm:p-2.5 text-slate-600 hover:text-sky-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <Search className="w-5 h-5" />
            </Link>

            {/* Cart Button */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Shopping Cart with ${itemCount} items`}
              className="relative flex items-center gap-2 p-2 sm:px-3 sm:py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold text-xs sm:text-sm transition-transform active:scale-95 shadow-sm"
            >
              <ShoppingBag className="w-4 h-4 text-sky-400" />
              <span className="hidden sm:inline font-mono">Cart</span>
              {itemCount > 0 ? (
                <span className="bg-orange-500 text-white text-[11px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center leading-none">
                  {itemCount}
                </span>
              ) : null}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-sky-600 border-b border-slate-100"
          >
            Home
          </Link>
          <div className="py-2 border-b border-slate-100">
            <Link
              href="/shop/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-800 hover:text-sky-600 mb-2"
            >
              Shop All Products →
            </Link>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/shop/?category=${cat.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 bg-slate-50 hover:bg-sky-50 text-xs font-semibold rounded-lg text-slate-700 hover:text-sky-600"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="py-2 border-b border-slate-100">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Trending Brands
            </span>
            <div className="grid grid-cols-2 gap-2">
              {BRANDS.map((b) => (
                <Link
                  key={b.slug}
                  href={`/shop/?brand=${b.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 bg-slate-50 hover:bg-sky-50 text-xs font-semibold rounded-lg text-slate-700 hover:text-sky-600"
                >
                  {b.name}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/accessories/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-sky-600 border-b border-slate-100"
          >
            Accessories & Batteries
          </Link>
          <Link
            href="/blog/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-sky-600 border-b border-slate-100"
          >
            Blog & Riding Guides
          </Link>
          <Link
            href="/about/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-sky-600 border-b border-slate-100"
          >
            About Us (NSW 2575)
          </Link>
          <Link
            href="/contact/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-slate-800 hover:text-sky-600"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
