'use client';

import React from 'react';
import Link from 'next/link';
import { Zap, ShieldCheck, Truck, Headphones, Mail, Phone, MapPin } from 'lucide-react';
import { SITE, CONTACT, BRAND } from '@/src/config/site';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-orange-500 flex items-center justify-center text-white">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-white leading-none">
                  ELECTRIC DIRT BIKE
                </span>
                <span className="text-[10px] font-bold tracking-widest text-orange-500 uppercase mt-0.5">
                  AUSTRALIA
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {BRAND.description} Backed by real Australian technicians, authentic factory parts, and nationwide insured crate shipping.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Phone: {CONTACT.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Email: {CONTACT.email.replace('@', ' [at] ')}</span>
              </div>
            </div>

            {/* ABN strictly at footer per user instruction */}
            <div className="pt-2">
              <span className="inline-block bg-slate-900 border border-slate-800 text-sky-400 font-mono text-xs font-semibold px-3 py-1 rounded-md">
                ABN: {CONTACT.abn}
              </span>
            </div>
          </div>

          {/* Col 2: Customer Care & Policies */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Customer Support
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <Link href="/faq/" className="hover:text-white transition-colors">
                  FAQ’s
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping-and-delivery/" className="hover:text-white transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns-policy/" className="hover:text-white transition-colors">
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link href="/warranty-and-service/" className="hover:text-white transition-colors">
                  Warranty & Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Shop & Specialty */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Bikes & Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <Link href="/shop/?category=dirt-bikes" className="hover:text-white transition-colors">
                  Electric Dirt Bikes
                </Link>
              </li>
              <li>
                <Link href="/shop/?category=motocross" className="hover:text-white transition-colors">
                  Electric Motocross (MX)
                </Link>
              </li>
              <li>
                <Link href="/accessories/" className="hover:text-white transition-colors">
                  Batteries & Chargers
                </Link>
              </li>
              <li>
                <Link href="/brands/" className="hover:text-white transition-colors">
                  Browse by Brand
                </Link>
              </li>
              <li>
                {/* As requested: Electric Motor Bikes link in footer only */}
                <Link href="/electric-motor-bikes/" className="hover:text-sky-400 font-semibold text-slate-300 transition-colors">
                  Electric Motor Bikes
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="hover:text-white transition-colors">
                  Blog & Riding Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Dispatch & Trust Badges */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Australian Guarantees
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg">
                <div className="font-semibold text-white flex items-center gap-1.5 mb-1">
                  <Truck className="w-3.5 h-3.5 text-sky-400" />
                  Free Aus Freight
                </div>
                <span>Free heavy freight on bike orders above $1,500 AUD.</span>
              </div>
              <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg">
                <div className="font-semibold text-white flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  12-Mo AU Warranty
                </div>
                <span>Factory backed with local NSW parts support.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Payments & Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved. Mittagong NSW 2575 Australia.
          </div>

          {/* Supported Rails */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] text-slate-400 font-semibold">Accepted Payments:</span>
            <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded text-sky-300 font-mono text-[10px]">
              Bitcoin / USDT (-10%)
            </span>
            <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded text-orange-300 font-mono text-[10px]">
              PayID / Osko
            </span>
            <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded text-slate-300 font-mono text-[10px]">
              Direct EFT
            </span>
            <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 rounded text-slate-300 font-mono text-[10px]">
              Visa / Mastercard
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <Link href="/about/" className="hover:text-slate-300">
              About Us
            </Link>
            <span>·</span>
            <Link href="/shipping-and-delivery/" className="hover:text-slate-300">
              Shipping
            </Link>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-8 pt-4 border-t border-slate-900/60 text-[11px] text-slate-500 leading-relaxed text-center">
          Notice: High-powered electric dirt bikes are intended strictly for off-road recreation, closed circuit tracks, and private property use across Australian states and territories. Always wear Australian standard certified helmets and full safety gear.
        </div>

      </div>
    </footer>
  );
}
