'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { SITE, CONTACT } from '@/src/config/site';

export function ThankYouOrderClient() {
  const searchParams = useSearchParams();
  const orderRef = searchParams.get('ref') || 'EDBA-PENDING';
  const customerEmail = searchParams.get('email');

  return (
    <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-xl text-center space-y-6">
      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
        <CheckCircle className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono font-bold bg-sky-50 text-sky-700 px-3 py-1 rounded-full border border-sky-200">
          Order Reference: {orderRef}
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Thank You! Your Order Has Been Received
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
          Our dispatch coordinator in Mittagong NSW 2575 has logged your order inquiry.
        </p>
      </div>

      {/* Mandatory Notification Box — Only "watch for payment-details email" */}
      <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-left space-y-3">
        <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm">
          <Mail className="w-5 h-5 text-sky-600 shrink-0" />
          <span>Next Step: Watch for your Payment Details Email</span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          Please watch your inbox{customerEmail ? ` at ${customerEmail}` : ''} for a personalized payment instruction email with our verified Australian account details or cryptocurrency address, along with your freight reservation number.
        </p>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/"
          className="w-full sm:w-auto px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition-colors shadow-md"
        >
          Return to Homepage
        </Link>
        <Link
          href="/shop/"
          className="w-full sm:w-auto px-6 py-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
        >
          Explore More Riding Gear
        </Link>
      </div>
    </div>
  );
}
