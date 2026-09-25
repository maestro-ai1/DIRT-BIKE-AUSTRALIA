'use client';

import React, { useState, useEffect } from 'react';
import { Truck, Zap, Shield, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const ANNOUNCEMENTS = [
  {
    icon: Truck,
    text: 'FREE AUSTRALIA-WIDE FREIGHT ON BIKES & ORDERS OVER $1,500 AUD',
    badge: 'FREE DELIVERY',
    link: '/shipping-and-delivery/',
  },
  {
    icon: Zap,
    text: '10% INSTANT DISCOUNT WITH CRYPTO (BTC, USDT, ETH) & PAYID AT CHECKOUT',
    badge: '10% OFF',
    link: '/shop/',
  },
  {
    icon: Shield,
    text: '100% GENUINE AUSTRALIAN STOCK · WAREHOUSE & WORKSHOP IN MITTAGONG NSW 2575',
    badge: 'AUS STOCK',
    link: '/about/',
  },
];

export function AnnouncementBar() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const item = ANNOUNCEMENTS[current];
  const Icon = item.icon;

  return (
    <div className="bg-slate-950 text-white border-b border-slate-800 text-xs py-2 px-3 relative z-40 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Previous button */}
        <button
          type="button"
          aria-label="Previous announcement"
          onClick={() => setCurrent((prev) => (prev - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length)}
          className="p-1 hover:text-sky-400 text-slate-400 transition-colors hidden sm:block shrink-0"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {/* Center message */}
        <div className="flex-1 flex items-center justify-center gap-2 overflow-hidden text-center">
          <span className="inline-block bg-sky-500/20 text-sky-400 border border-sky-400/30 text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase shrink-0">
            {item.badge}
          </span>
          <Link
            href={item.link}
            className="flex items-center gap-1.5 font-medium hover:text-sky-300 transition-colors truncate"
          >
            <Icon className="w-3.5 h-3.5 text-sky-400 shrink-0 hidden xs:inline-block" />
            <span className="truncate tracking-wide">{item.text}</span>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0 inline-block" />
          </Link>
        </div>

        {/* Next button */}
        <button
          type="button"
          aria-label="Next announcement"
          onClick={() => setCurrent((prev) => (prev + 1) % ANNOUNCEMENTS.length)}
          className="p-1 hover:text-sky-400 text-slate-400 transition-colors hidden sm:block shrink-0"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
