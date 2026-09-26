'use client';

import React from 'react';
import Link from 'next/link';

type Tab = 'dashboard' | 'orders' | 'enquiries';

export function AdminNav({ active, onLock }: { active: Tab; onLock: () => void }) {
  const tabs: { key: Tab; label: string; href: string }[] = [
    { key: 'dashboard', label: 'Dashboard', href: '/admin/' },
    { key: 'orders', label: 'Orders', href: '/admin/orders/' },
    { key: 'enquiries', label: 'Enquiries', href: '/admin/enquiries/' },
  ];

  return (
    <div className="border-b border-white/10 px-4 py-3 flex items-center justify-between gap-2 flex-wrap">
      <div className="flex items-center gap-1 flex-wrap">
        {tabs.map((tab) => (
          <Link
            key={tab.key}
            href={tab.href}
            className={`px-4 py-2 text-xs font-extrabold tracking-widest rounded-lg transition-colors ${
              active === tab.key
                ? 'border border-sky-500 text-sky-400'
                : 'text-gray-400 hover:text-white border border-transparent'
            }`}
          >
            {tab.label.toUpperCase()}
          </Link>
        ))}
      </div>
      <button
        type="button"
        onClick={onLock}
        className="px-4 py-2 text-xs font-extrabold tracking-widest text-red-400 border border-red-500/40 rounded-lg hover:border-red-400 transition-colors"
      >
        SIGN OUT
      </button>
    </div>
  );
}
