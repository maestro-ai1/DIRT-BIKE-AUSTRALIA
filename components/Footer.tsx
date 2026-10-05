'use client';

import React from 'react';
import Link from 'next/link';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';
import { SITE, CONTACT } from '@/src/config/site';

// Lean footer: contact details, support pages and one link per category page (no duplicates). Brands and Shop live in the main menu. The blog link stays here (informational keyword anchor) but is kept out of the category list.
const SUPPORT_LINKS = [
  { href: '/faq/', label: 'FAQs' },
  { href: '/contact/', label: 'Contact Us' },
  { href: '/shipping-and-delivery/', label: 'Shipping & Delivery' },
  { href: '/returns-policy/', label: 'Returns Policy' },
  { href: '/warranty-and-service/', label: 'Warranty & Service' },
  { href: '/about/', label: 'About Us' },
  { href: '/blog/', label: 'Blog & Riding Guides' },
];

const SHOP_LINKS = [
  { href: '/electric-dirt-bikes/', label: 'Electric Dirt Bikes' },
  { href: '/electric-motocross-bikes/', label: 'Electric Motocross Bikes' },
  { href: '/electric-motor-bikes/', label: 'Electric Motor Bikes' },
  { href: '/electric-bikes/', label: 'Electric Bikes' },
  { href: '/electric-fat-tyre-bikes/', label: 'Fat Tyre Electric Bikes' },
  { href: '/electric-mini-bikes/', label: 'Mini Electric Bikes' },
  { href: '/electric-bikes/cheap/', label: 'Cheap Electric Bikes' },
  { href: '/electric-motor-bikes/kids/', label: 'Kids Electric Bikes' },
  { href: '/accessories/', label: 'Batteries & Chargers' },
];

const linkClass = 'text-slate-700 hover:text-sky-800 hover:underline transition-colors';

export function Footer() {
  return (
    <footer className="bg-slate-300 text-slate-800 border-t border-slate-400 pt-8 pb-5 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-8 pb-6 border-b border-slate-400/70">
          {/* Brand + contact */}
          <div className="col-span-2 md:col-span-6 space-y-3">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-600 to-orange-500 flex items-center justify-center text-white">
                <Zap className="w-4 h-4 fill-current" />
              </span>
              <span className="flex flex-col">
                <span className="font-extrabold text-sm tracking-tight text-slate-900 leading-none">ELECTRIC DIRT BIKE</span>
                <span className="text-[10px] font-bold tracking-widest text-orange-800 uppercase mt-0.5">AUSTRALIA</span>
              </span>
            </Link>
            <ul className="space-y-1.5 text-slate-800">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-800 shrink-0 mt-0.5" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-800 shrink-0" />
                <span>Phone: {CONTACT.phoneDisplay}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-800 shrink-0" />
                <span>Email: {CONTACT.email.replace('@', ' [at] ')}</span>
              </li>
            </ul>
            {/* ABN strictly at footer per user instruction */}
            <span className="inline-block bg-white border border-slate-400 text-slate-900 font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded">
              ABN: {CONTACT.abn}
            </span>
          </div>

          {/* Customer support */}
          <nav className="col-span-1 md:col-span-3" aria-label="Customer support">
            <p className="text-slate-900 font-bold uppercase tracking-wider mb-2.5">Support &amp; Guides</p>
            <ul className="space-y-1.5 font-medium">
              {SUPPORT_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Shop */}
          <nav className="col-span-1 md:col-span-3" aria-label="Shop">
            <p className="text-slate-900 font-bold uppercase tracking-wider mb-2.5">Shop</p>
            <ul className="space-y-1.5 font-medium">
              {SHOP_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-2 text-slate-700">
          <span className="text-center md:text-left">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved. Payments: Bitcoin / USDT, PayID / Osko, Direct EFT, Visa / Mastercard.
          </span>
          <span className="text-[11px] text-center md:text-right max-w-xl leading-snug">
            Notice: high-powered electric dirt bikes are for off-road recreation, closed circuit tracks and private property use only. Always wear Australian standard certified helmets and full safety gear.
          </span>
        </div>
      </div>
    </footer>
  );
}
