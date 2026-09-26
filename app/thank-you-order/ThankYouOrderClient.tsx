'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { REPLY } from '@/src/config/site';

export function ThankYouOrderClient() {
  const searchParams = useSearchParams();
  const orderRef   = searchParams.get('ref')    || 'PENDING';
  const customerEmail = searchParams.get('email') || '';
  const paymentMethod = searchParams.get('method') || 'crypto';
  const total      = searchParams.get('total')  || '';

  const methodLabel =
    paymentMethod === 'crypto'        ? 'Crypto  (BTC / USDT / ETH)' :
    paymentMethod === 'payid'         ? 'PayID  (Instant Bank Rail)'  :
    paymentMethod === 'bank-transfer' ? 'Bank Transfer  (EFT)'        :
                                        paymentMethod;

  const amountFormatted = total
    ? `$${Number(total).toLocaleString('en-AU')} AUD`
    : 'As quoted';

  const terms = [
    'This order is confirmed once payment is received.',
    `Use your order number — ${orderRef} — as the payment reference.`,
    'Ships within 2 business days of payment confirmation.',
    "Refund or re-ship within 7 days if there's a problem.",
  ];

  return (
    <div className="max-w-lg mx-auto">

      {/* Invoice Card */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200">

        {/* Dark Header */}
        <div className="bg-slate-900 px-6 py-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                Electric Dirt Bike Australia
              </p>
              <p className="text-[10px] text-slate-500">ABN {REPLY.bizNumber.value}</p>
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 text-[11px] font-bold px-3 py-1 rounded-full">
              <CheckCircle className="w-3.5 h-3.5" />
              Order Received
            </div>
          </div>

          {/* Order Ref + Amount */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Order Reference
              </p>
              <p className="font-mono font-extrabold text-3xl text-white tracking-wider">
                {orderRef}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Amount Due
              </p>
              <p className="font-mono font-extrabold text-2xl text-sky-400">
                {amountFormatted}
              </p>
            </div>
          </div>

          {/* Method chip */}
          <div className="mt-4 inline-flex items-center gap-1.5 bg-slate-800 border border-slate-700 text-slate-300 text-[11px] font-semibold px-3 py-1.5 rounded-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 inline-block" />
            Payment via {methodLabel}
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-5">

          {/* Terms */}
          <ul className="space-y-2.5">
            {terms.map((t, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[13px] text-slate-700">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-[10px] font-extrabold text-slate-500">
                  {i + 1}
                </span>
                <span className={i === 1 ? 'font-semibold text-slate-900' : ''}>{t}</span>
              </li>
            ))}
          </ul>

          {/* Footer note */}
          {customerEmail && (
            <p className="text-[11px] text-slate-400 text-center">
              Confirmation sent to&nbsp;<span className="font-semibold text-slate-500">{customerEmail}</span>
            </p>
          )}
        </div>
      </div>

      {/* Back link */}
      <div className="text-center mt-5">
        <Link href="/shop/" className="text-xs text-slate-500 hover:text-slate-700 font-semibold underline underline-offset-2">
          Continue browsing →
        </Link>
      </div>

    </div>
  );
}
