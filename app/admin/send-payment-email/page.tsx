'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { PasscodeGate } from '@/components/admin/PasscodeGate';
import { useAdminPasscode } from '@/lib/useAdminPasscode';
import { StoredOrder } from '@/lib/orderStore';
import { Send, ArrowLeft, CheckCircle, MessageSquare, Copy, Check } from 'lucide-react';
import { paymentTermsLines } from '@/lib/order';
import { REPLY, SITE } from '@/src/config/site';

export default function SendPaymentEmailPage() {
  return (
    <PasscodeGate>
      <Suspense fallback={<div className="p-8 text-center text-slate-500 text-sm">Loading…</div>}>
        <Composer />
      </Suspense>
    </PasscodeGate>
  );
}

function Composer() {
  const searchParams = useSearchParams();
  const refParam = searchParams.get('ref') || '';
  const { getAuthHeaders } = useAdminPasscode();

  const [order, setOrder] = useState<StoredOrder | null>(null);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!refParam) return;
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/admin/orders/${refParam}/`, { headers: getAuthHeaders() });
        if (res.ok) {
          const data = await res.json();
          const o = data.order as StoredOrder;
          setOrder(o);
          // Pre-fill based on payment method
          if (o.paymentMethod === 'crypto') {
            setDetails('BTC: [paste wallet address here]\nUSDT (TRC20): [paste address here]\nReference: ' + o.ref);
          } else if (o.paymentMethod === 'payid') {
            setDetails('PayID: sales@electricdirtbikeaustralia.com.au\nAccount Name: Electric Dirt Bike Australia Pty Ltd\nBank: Commonwealth Bank');
          } else {
            setDetails('BSB: 062-815\nAccount: 1048 2914\nAccount Name: Electric Dirt Bike Australia Pty Ltd\nReference: ' + o.ref);
          }
        }
      } catch { /* ignore */ }
      finally { setLoading(false); }
    };
    load();
  }, [refParam]);

  if (!refParam) return <div className="p-12 text-center text-slate-400 text-sm">Select an order from the orders list.</div>;
  if (loading) return <div className="p-12 text-center text-slate-400 text-sm">Loading order…</div>;
  if (!order) return <div className="p-12 text-center text-slate-400 text-sm">Order not found: {refParam}</div>;

  const amount = `$${order.total.toLocaleString()} AUD`;
  const terms = paymentTermsLines(order.ref, order.paymentMethod);

  const waMessage = encodeURIComponent(
    `*${SITE.name}*\n*Payment Details — Order ${order.ref}*\n\nHi ${order.customerName},\n\n*Amount Due:* ${amount}\n*Payment Method:* ${order.paymentMethod.toUpperCase()}\n\n*Details:*\n${details}\n\n*Terms:*\n• Payment within 48hrs to secure your order\n• Use ${order.ref} as your reference\n• Ships within 2 business days\n\nOnce paid, send us a screenshot here or email sales@electricdirtbikeaustralia.com.au`
  );
  const waLink = `https://wa.me/${order.phone.replace(/\D/g, '').replace(/^0/, '61') || '61420128746'}?text=${waMessage}`;

  const handleSend = async () => {
    setSending(true);
    try {
      const res = await fetch('/api/admin/send-payment-email/', {
        method: 'POST',
        headers: { ...getAuthHeaders(), 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderRef: order.ref,
          customerEmail: order.email,
          customerName: order.customerName,
          amount,
          paymentMethod: order.paymentMethod,
          details,
        }),
      });
      if (res.ok) setSent(true);
    } catch { /* ignore */ }
    finally { setSending(false); }
  };

  const copyWa = () => {
    const raw = decodeURIComponent(waMessage);
    navigator.clipboard.writeText(raw).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-5">

        {/* Header */}
        <div className="flex items-center justify-between">
          <Link href="/admin/orders/" className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-900">
            <ArrowLeft className="w-4 h-4" />
            Back to Orders
          </Link>
          <span className="font-mono text-xs font-bold bg-white px-3 py-1 rounded-lg border border-slate-200">
            {order.ref}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* LEFT — Input */}
          <div className="space-y-4">
            {/* Order summary strip */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center justify-between">
              <div>
                <div className="font-extrabold text-slate-900">{order.customerName}</div>
                <div className="text-xs text-slate-500">{order.email}</div>
              </div>
              <div className="text-right">
                <div className="font-mono font-extrabold text-sky-600 text-lg">{amount}</div>
                <div className="text-[11px] text-slate-400 capitalize">{order.paymentMethod}</div>
              </div>
            </div>

            {/* Paste Box */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3">
              <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wide">
                Payment Details
              </label>
              <textarea
                rows={7}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Paste bank details, PayID, or crypto address here…"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl font-mono text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none resize-none"
              />

              {sent ? (
                <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-semibold">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  Email sent to {order.email}
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={sending || !details.trim()}
                  className="w-full py-3 bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors shadow-md shadow-sky-600/20"
                >
                  <Send className="w-4 h-4" />
                  {sending ? 'Sending…' : `Send Email to ${order.email}`}
                </button>
              )}
            </div>

            {/* WhatsApp */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  WhatsApp — {order.customerName}
                </div>
                <button type="button" onClick={copyWa} className="flex items-center gap-1 text-xs text-emerald-700 font-semibold hover:text-emerald-900">
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied!' : 'Copy text'}
                </button>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs rounded-xl transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Open WhatsApp Chat
              </a>
            </div>
          </div>

          {/* RIGHT — Live Preview */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Live Email Preview</span>
            <div className="bg-[#F4F0EA] p-3 rounded-3xl border border-slate-200 shadow-sm">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden text-xs max-w-full">
                {/* Header band */}
                <div className="bg-[#0f172a] px-5 py-4 border-b-4 border-sky-500">
                  <div className="font-extrabold text-white text-sm">{SITE.name}</div>
                  <div className="text-slate-400 text-[10px] mt-0.5">{REPLY.headerTagline}</div>
                </div>

                {/* Body */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="font-extrabold text-slate-900 text-sm">Payment Details</div>
                    <span className="px-2 py-0.5 border border-sky-500 text-sky-600 font-mono text-[10px] rounded-full font-bold">{order.ref}</span>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    Hi {order.customerName}, please complete your payment using the details below to dispatch your order.
                  </p>

                  {/* Amount highlight */}
                  <div className="flex items-center justify-between p-3 bg-slate-50 border-t-2 border-b-2 border-sky-500">
                    <span className="font-bold text-slate-800 text-xs">Amount Due</span>
                    <span className="font-mono font-extrabold text-sky-600 text-base">{amount}</span>
                  </div>

                  {/* Payment details block */}
                  <div>
                    <div className="font-bold text-slate-900 text-[11px] mb-1">Payment Instructions:</div>
                    <pre className="bg-slate-100 p-3 rounded-lg font-mono text-[10px] text-slate-800 whitespace-pre-wrap border-l-4 border-sky-500 leading-relaxed">
                      {details || '(paste payment details on the left)'}
                    </pre>
                  </div>

                  {/* Terms */}
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1 text-[10px] text-slate-600">
                    <div className="font-bold text-slate-900 uppercase text-[9px] tracking-wider">Order Terms</div>
                    <ul className="list-disc pl-3.5 space-y-0.5">
                      {terms.map((t, i) => <li key={i}>{t}</li>)}
                    </ul>
                  </div>

                  {/* Action buttons preview */}
                  <div className="flex gap-2 pt-1">
                    <div className="px-3 py-1.5 bg-sky-600 text-white font-bold text-[10px] rounded-lg">Upload Payment Proof</div>
                    <div className="px-3 py-1.5 bg-[#25D366] text-white font-bold text-[10px] rounded-lg">Confirm via WhatsApp</div>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-[#F7F4F0] px-5 py-3 border-t border-slate-200 text-[9px] text-slate-400 text-center">
                  {SITE.name} · {REPLY.headerTagline}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
