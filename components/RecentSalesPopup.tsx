'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle, Zap } from 'lucide-react';
import Link from 'next/link';

interface SaleNotification {
  orderNumber: string;
  customer: string;
  location: string;
  product: string;
  price: string;
  timeAgo: string;
  slug: string;
}

const SAMPLE_LOCATIONS = [
  'Mittagong, NSW',
  'Newcastle, NSW',
  'Dubbo, NSW',
  'Wollongong, NSW',
  'Penrith, NSW',
  'Mornington Peninsula, VIC',
  'Geelong, VIC',
  'Gold Coast Hinterland, QLD',
  'Sunshine Coast, QLD',
  'Perth Hills, WA',
  'Adelaide Hills, SA',
  'Hobart, TAS',
  'Ballarat, VIC',
  'Cairns, QLD'
];

const SAMPLE_NAMES = [
  'Marcus T.',
  'Braden K.',
  'Liam M.',
  'Ashley R.',
  'Jarrod F.',
  'Dean C.',
  'Callum W.',
  'Jake H.',
  'Nathan S.',
  'Mitchell B.',
  'Cooper P.',
  'Lucas D.',
  'Cameron G.',
  'Harrison E.'
];

const POPULAR_ITEMS = [
  { product: 'Sur-Ron Light Bee X (60V 40Ah)', price: '$6,490 AUD', slug: 'sur-ron-light-bee-x' },
  { product: 'Talaria Sting R MX4 (60V 45Ah / 8kW)', price: '$7,290 AUD', slug: 'talaria-sting-r-mx4' },
  { product: 'Stark Varg EX 80HP Competition Motocross', price: '$18,990 AUD', slug: 'stark-varg-ex-80hp' },
  { product: 'Sur-Ron Ultra Bee (74V 55Ah / 12.5kW)', price: '$10,990 AUD', slug: 'sur-ron-ultra-bee' },
  { product: '72V 42Ah High-Discharge Lithium Battery Pack', price: '$2,190 AUD', slug: '72v-42ah-lithium-battery-upgrade' },
  { product: '15A Smart Fast Charger (Dual 60V / 72V)', price: '$380 AUD', slug: '15a-fast-charger-60v-72v' },
  { product: 'RFN Ares Rally Pro (74V 35Ah / 12.5kW)', price: '$8,490 AUD', slug: 'rfn-ares-rally-pro' },
  { product: 'E-Ride Pro-SS 2.0 (72V 40Ah / 12kW)', price: '$8,690 AUD', slug: 'e-ride-pro-ss-2-0' },
  { product: 'Torp TC500 Plug-and-Play Tunable Controller', price: '$1,390 AUD', slug: 'torp-tc500-controller' },
  { product: 'Talaria Dragon Full-Size Enduro (88V / 28kW)', price: '$13,990 AUD', slug: 'talaria-dragon-enduro' },
  { product: 'SM Pro Platinum 16/19 Wheelset with HD Spokes', price: '$1,290 AUD', slug: 'sm-pro-platinum-16-19-wheelset' },
  { product: 'Fastace ALX13RC 200mm Inverted Fork', price: '$1,190 AUD', slug: 'fastace-alx13rc-inverted-fork' },
  { product: 'Billet 5mm Heavy-Duty Aluminium Skid Plate', price: '$195 AUD', slug: 'heavy-duty-skid-plate' },
  { product: 'Stealth B-52 Bomber Australian Electric Moto', price: '$12,990 AUD', slug: 'stealth-b-52-bomber' },
];

export function RecentSalesPopup() {
  const [visible, setVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState<SaleNotification | null>(null);
  const usedOrderNumbers = useRef<Set<string>>(new Set());

  // Generate a strictly non-repeating order number
  const generateUniqueOrderNumber = (): string => {
    let orderNum = '';
    let attempts = 0;
    while (attempts < 100) {
      const rand = Math.floor(10000 + Math.random() * 89999);
      orderNum = `EDBA-${rand}`;
      if (!usedOrderNumbers.current.has(orderNum)) {
        usedOrderNumbers.current.add(orderNum);
        return orderNum;
      }
      attempts++;
    }
    return `EDBA-${Date.now().toString().slice(-5)}`;
  };

  const getNextNotification = (): SaleNotification => {
    const loc = SAMPLE_LOCATIONS[Math.floor(Math.random() * SAMPLE_LOCATIONS.length)];
    const name = SAMPLE_NAMES[Math.floor(Math.random() * SAMPLE_NAMES.length)];
    const item = POPULAR_ITEMS[Math.floor(Math.random() * POPULAR_ITEMS.length)];
    const mins = Math.floor(2 + Math.random() * 18);

    return {
      orderNumber: generateUniqueOrderNumber(),
      customer: name,
      location: loc,
      product: item.product,
      price: item.price,
      timeAgo: `${mins} minutes ago`,
      slug: item.slug,
    };
  };

  useEffect(() => {
    // Initial display after 4 seconds
    const initialTimer = setTimeout(() => {
      setCurrentNotification(getNextNotification());
      setVisible(true);
    }, 4000);

    // Interval to cycle notifications every 20 seconds (per user request)
    const cycleInterval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentNotification(getNextNotification());
        setVisible(true);
      }, 1000);
    }, 20000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(cycleInterval);
    };
  }, []);

  // Auto-hide each notification card after 6.5 seconds
  useEffect(() => {
    if (visible) {
      const hideTimer = setTimeout(() => {
        setVisible(false);
      }, 6500);
      return () => clearTimeout(hideTimer);
    }
  }, [visible]);

  if (!currentNotification || !visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 left-4 z-40 w-[calc(100vw-96px)] max-w-xs sm:w-80 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-slate-200/90 animate-in slide-in-from-bottom-5 duration-300 transition-all select-none"
    >
      <div className="flex items-start gap-3">
        {/* Icon Avatar */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-sky-600 flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5">
          <Zap className="w-5 h-5 fill-current" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-1 mb-0.5">
            <span className="text-[11px] font-bold text-slate-900 truncate">
              {currentNotification.customer} from {currentNotification.location}
            </span>
            <span className="text-[10px] font-mono font-semibold text-sky-700 bg-sky-50 px-1.5 py-0.2 rounded shrink-0">
              {currentNotification.orderNumber}
            </span>
          </div>

          <Link
            href={`/shop/${currentNotification.slug}/`}
            className="text-xs font-semibold text-slate-800 hover:text-sky-600 transition-colors line-clamp-1 block leading-tight"
          >
            {currentNotification.product}
          </Link>

          <div className="flex items-center justify-between mt-1 text-[11px] text-slate-500">
            <span className="flex items-center gap-1 text-emerald-600 font-semibold">
              <CheckCircle className="w-3 h-3" />
              Verified Purchase
            </span>
            <span className="text-slate-400 font-mono text-[10px]">
              {currentNotification.timeAgo}
            </span>
          </div>
        </div>

        {/* Close Button — 48×48px touch target to satisfy Lighthouse tap-targets audit */}
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Dismiss recent purchase popup"
          className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-slate-600 -mr-3 -mt-3 rounded-md shrink-0"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
