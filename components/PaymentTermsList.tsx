'use client';

import React from 'react';
import { paymentTermsLines } from '@/lib/order';
import { ShieldCheck } from 'lucide-react';

interface PaymentTermsListProps {
  orderRef: string;
  methodId?: string;
  className?: string;
}

export function PaymentTermsList({ orderRef, methodId, className = '' }: PaymentTermsListProps) {
  const lines = paymentTermsLines(orderRef, methodId);

  return (
    <div className={`bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <ShieldCheck className="w-5 h-5 text-sky-600" />
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
          Payment Terms & Dispatch Guarantee
        </h4>
      </div>
      <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
        {lines.map((line, idx) => (
          <li key={idx} className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
            <span className="leading-relaxed">{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
