'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { PasscodeGate } from '@/components/admin/PasscodeGate';
import { useAdminPasscode } from '@/lib/useAdminPasscode';
import { StoredOrder } from '@/lib/orderStore';
import { CONTACT } from '@/src/config/site';
import { INVOICE } from '@/src/config/invoice';
import { ArrowLeft, Printer } from 'lucide-react';

export default function AdminInvoicePage() {
  return (
    <PasscodeGate>
      <Suspense fallback={null}>
        <Invoice />
      </Suspense>
    </PasscodeGate>
  );
}

const aud = (n: number) => '$' + n.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function Invoice() {
  const ref = useSearchParams().get('ref') || '';
  const { getAuthHeaders, isUnlocked } = useAdminPasscode();
  const [order, setOrder] = useState<StoredOrder | null>(null);
  const [state, setState] = useState<'loading' | 'ready' | 'missing'>('loading');

  useEffect(() => {
    if (!isUnlocked) return;
    (async () => {
      try {
        const res = await fetch('/api/admin/orders/', { headers: getAuthHeaders() });
        const data = res.ok ? await res.json() : { orders: [] };
        const found = (data.orders || []).find((o: StoredOrder) => o.ref === ref || o.id === ref) || null;
        setOrder(found);
        setState(found ? 'ready' : 'missing');
      } catch { setState('missing'); }
    })();
  }, [isUnlocked, ref]); // eslint-disable-line react-hooks/exhaustive-deps

  const bank = INVOICE.bank;
  const bankMissing = !bank.bsb || !bank.accountNumber || !bank.accountName;

  if (state === 'loading') return <div className="p-10 text-center text-gray-500 text-sm">Loading invoice…</div>;
  if (!order) return (
    <div className="p-10 text-center text-sm text-gray-500">
      Order {ref || '(none)'} not found. <Link href="/admin/orders/" className="text-sky-600 underline">Back to orders</Link>
    </div>
  );

  const total = order.total;
  const gst = Math.round((total / (1 + INVOICE.gstRate)) * INVOICE.gstRate * 100) / 100;
  const exGst = Math.round((total - gst) * 100) / 100;
  const date = new Date(order.createdAt).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen bg-gray-200 print:bg-white py-6 print:py-0">
      <div className="max-w-3xl mx-auto px-4 print:px-0 mb-4 flex items-center justify-between print:hidden">
        <Link href="/admin/orders/" className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-700 hover:text-black">
          <ArrowLeft className="w-4 h-4" /> Orders
        </Link>
        <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm rounded-lg">
          <Printer className="w-4 h-4" /> Print / Save as PDF
        </button>
      </div>

      <style>{`@media print { body * { visibility: hidden !important; } #invoice-print, #invoice-print * { visibility: visible !important; } #invoice-print { position: absolute; left: 0; top: 0; width: 100%; max-width: none; } @page { size: A4; margin: 12mm; } }`}</style>
      <div id="invoice-print" className="max-w-3xl mx-auto bg-white text-slate-900 shadow-lg print:shadow-none p-8 sm:p-12">
        {/* Header */}
        <div className="flex items-start justify-between gap-6 border-b-4 border-[#0284c7] pb-6">
          <div>
            <div className="text-2xl font-extrabold tracking-tight text-[#0f172a]">Electric Dirt Bike Australia</div>
            <div className="text-xs text-slate-600 mt-2 leading-relaxed">
              {CONTACT.address}<br />
              ABN {CONTACT.abn}<br />
              {CONTACT.email} · {CONTACT.whatsappDisplay}
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="text-3xl font-extrabold text-[#0284c7] tracking-tight">TAX INVOICE</div>
            <div className="text-xs text-slate-600 mt-2 leading-relaxed">
              Invoice no: <b className="font-mono text-slate-900">{order.ref}</b><br />
              Date: <b className="text-slate-900">{date}</b><br />
              Status: <b className="uppercase text-slate-900">{order.status === 'payment-confirmed' || order.status === 'paid' ? 'Paid' : 'Payment due'}</b>
            </div>
          </div>
        </div>

        {/* Bill to */}
        <div className="grid sm:grid-cols-2 gap-6 mt-6 text-sm">
          <div>
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">Bill to</div>
            <div className="font-bold">{order.customerName}</div>
            <div className="text-slate-700 leading-relaxed">
              {order.address}{order.suburbState ? <>, {order.suburbState}</> : null}<br />
              {order.email}{order.phone ? <> · {order.phone}</> : null}
            </div>
          </div>
          <div>
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">Payment method</div>
            <div className="font-bold">Bank transfer (Osko / PayID)</div>
            <div className="text-slate-700">Quote reference <b className="font-mono">{order.ref}</b></div>
          </div>
        </div>

        {/* Items */}
        <table className="w-full mt-8 text-sm border-collapse">
          <thead>
            <tr className="bg-[#0f172a] text-white text-left text-[11px] uppercase tracking-widest">
              <th className="py-2.5 px-3">Description</th>
              <th className="py-2.5 px-3 text-right w-14">Qty</th>
              <th className="py-2.5 px-3 text-right w-28">Unit price</th>
              <th className="py-2.5 px-3 text-right w-28">Amount</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((it, i) => (
              <tr key={i} className="border-b border-slate-200 align-top">
                <td className="py-3 px-3 font-medium">{it.name}</td>
                <td className="py-3 px-3 text-right">{it.qty}</td>
                <td className="py-3 px-3 text-right">{aud(it.price)}</td>
                <td className="py-3 px-3 text-right font-semibold">{aud(it.price * it.qty)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <div className="flex justify-end mt-4">
          <table className="text-sm w-full sm:w-80">
            <tbody>
              <tr><td className="py-1 text-slate-600">Subtotal</td><td className="py-1 text-right">{aud(order.subtotal)}</td></tr>
              {order.discount > 0 && <tr><td className="py-1 text-slate-600">Discount</td><td className="py-1 text-right">−{aud(order.discount)}</td></tr>}
              <tr><td className="py-1 text-slate-600">Shipping</td><td className="py-1 text-right">{order.shipping > 0 ? aud(order.shipping) : 'Free'}</td></tr>
              <tr className="border-t border-slate-300"><td className="py-1 text-slate-600">Total excluding GST</td><td className="py-1 text-right">{aud(exGst)}</td></tr>
              <tr><td className="py-1 text-slate-600">GST (10%)</td><td className="py-1 text-right">{aud(gst)}</td></tr>
              <tr className="bg-slate-100 font-extrabold text-base"><td className="py-2 px-2">Total AUD (incl. GST)</td><td className="py-2 px-2 text-right">{aud(total)}</td></tr>
            </tbody>
          </table>
        </div>

        {/* Payment */}
        <div className="mt-8 rounded-xl border border-slate-300 p-5 text-sm">
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#0284c7] mb-3">How to pay: bank transfer (Osko)</div>
          {bankMissing ? (
            <div className="bg-amber-50 border border-amber-300 text-amber-900 rounded-lg p-3 text-xs font-semibold print:border-red-500">
              Bank details not added yet. Add them in src/config/invoice.ts before sending this invoice.
            </div>
          ) : (
            <dl className="grid grid-cols-[9rem_1fr] gap-y-1.5">
              <dt className="text-slate-500">Account name</dt><dd className="font-bold">{bank.accountName}</dd>
              {bank.bankName && (<><dt className="text-slate-500">Bank</dt><dd className="font-bold">{bank.bankName}</dd></>)}
              <dt className="text-slate-500">BSB</dt><dd className="font-bold font-mono">{bank.bsb}</dd>
              <dt className="text-slate-500">Account number</dt><dd className="font-bold font-mono">{bank.accountNumber}</dd>
              {bank.payId && (<><dt className="text-slate-500">PayID{bank.payIdType ? ` (${bank.payIdType})` : ''}</dt><dd className="font-bold">{bank.payId}</dd></>)}
              <dt className="text-slate-500">Amount</dt><dd className="font-bold">{aud(total)} AUD</dd>
              <dt className="text-slate-500">Reference</dt><dd className="font-bold font-mono">{order.ref}</dd>
            </dl>
          )}
          <p className="text-xs text-slate-600 mt-3 leading-relaxed">
            Osko payments clear within minutes, 24/7, across major Australian banks. Please use the reference above so we can match your payment. {INVOICE.paymentTerms}
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-200 text-[11px] text-slate-500 leading-relaxed">
          Prices include 10% GST. Delivery: Australia-wide tailgate freight from Mittagong NSW, free on orders over $1,500. Warranty and returns: see electricdirtbikeaustralia.com.au/warranty-and-service/ and /returns-policy/.
          Questions? {CONTACT.email} or {CONTACT.whatsappDisplay}. Thank you for your order.
        </div>
      </div>
    </div>
  );
}
