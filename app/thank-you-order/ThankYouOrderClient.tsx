'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Upload, MessageSquare, Clock, Truck, RotateCcw, Mail } from 'lucide-react';
import { CONTACT } from '@/src/config/site';

export function ThankYouOrderClient() {
  const searchParams = useSearchParams();
  const orderRef = searchParams.get('ref') || 'PENDING';
  const customerEmail = searchParams.get('email') || '';
  const paymentMethod = searchParams.get('method') || 'crypto';
  const total = searchParams.get('total') || '';

  const methodLabel =
    paymentMethod === 'crypto' ? 'Crypto (BTC / USDT / ETH)' :
    paymentMethod === 'payid' ? 'PayID' :
    'Bank Transfer (EFT)';

  const waConfirmText = encodeURIComponent(
    `Hi! I have completed payment for order *${orderRef}*.\n` +
    (total ? `Amount paid: $${Number(total).toLocaleString()} AUD\n` : '') +
    `Payment method: ${methodLabel}\n\nPlease confirm receipt. Thank you!`
  );

  const waLink = `https://wa.me/61420128746?text=${waConfirmText}`;

  return (
    <div className="max-w-2xl mx-auto space-y-5">

      {/* Order Confirmed Header */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-7 text-center space-y-4">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-9 h-9" />
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Order Confirmed</p>
          <div className="inline-block font-mono font-extrabold text-2xl text-slate-900 bg-sky-50 border border-sky-200 px-4 py-1.5 rounded-xl mb-2">
            {orderRef}
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Thank You — Your Order Is In!
          </h1>
          {customerEmail && (
            <p className="text-xs text-slate-500 mt-1.5">
              Confirmation sent to <span className="font-semibold text-slate-700">{customerEmail}</span>
            </p>
          )}
        </div>

        {total && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-between">
            <span className="text-sm font-bold text-slate-700">Amount Due</span>
            <span className="font-mono font-extrabold text-xl text-sky-600">
              ${Number(total).toLocaleString()} <span className="text-xs font-normal text-slate-500">AUD</span>
            </span>
          </div>
        )}
      </div>

      {/* Payment Instructions */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
        <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
          Payment Instructions
        </h2>

        <div className="space-y-2.5">
          {[
            { icon: Clock, text: 'Payment must be completed within 48 hours to secure your stock allocation.' },
            { icon: null, text: `Use your order number — ${orderRef} — as the payment reference.` },
            { icon: Truck, text: 'Ships within 2 business days of payment confirmation.' },
            { icon: RotateCcw, text: 'Refund or re-ship within 7 days if there is a problem.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
              <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-sky-600 font-extrabold text-[10px]">{i + 1}</span>
              </div>
              <span className={i === 1 ? 'font-semibold text-slate-900' : ''}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Send Screenshot Instructions */}
        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 space-y-2.5 mt-2">
          <p className="text-sm font-bold text-sky-900">
            Once paid — send your payment screenshot to confirm dispatch:
          </p>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-slate-700">
              <Mail className="w-4 h-4 text-sky-600 shrink-0" />
              <span>
                Email: <a href="mailto:sales@electricdirtbikeaustralia.com.au" className="font-semibold text-sky-600 hover:underline">
                  sales&#64;electricdirtbikeaustralia.com.au
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-700">
              <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                WhatsApp: <span className="font-semibold text-emerald-700">+61 420 128 746</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Link
          href={`/confirm/?ref=${encodeURIComponent(orderRef)}`}
          className="flex items-center justify-center gap-2 py-4 px-5 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-2xl text-sm transition-colors shadow-md shadow-sky-600/20"
        >
          <Upload className="w-4 h-4" />
          <span>Upload Payment Proof</span>
        </Link>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 px-5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold rounded-2xl text-sm transition-colors shadow-md shadow-emerald-600/20"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Confirm via WhatsApp</span>
        </a>
      </div>

      {/* Return link */}
      <div className="text-center pt-2">
        <Link
          href="/shop/"
          className="text-xs text-slate-500 hover:text-slate-700 font-semibold underline underline-offset-2"
        >
          Continue browsing →
        </Link>
      </div>

    </div>
  );
}
