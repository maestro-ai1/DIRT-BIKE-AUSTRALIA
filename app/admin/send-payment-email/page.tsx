'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { PasscodeGate } from '@/components/admin/PasscodeGate';
import { useAdminPasscode } from '@/lib/useAdminPasscode';
import { StoredOrder } from '@/lib/orderStore';
import { ArrowLeft, Send, CheckCircle, MessageSquare, Clipboard } from 'lucide-react';
import { SITE, CONTACT, REPLY } from '@/src/config/site';

export default function SendPaymentEmailPage() {
  return (
    <PasscodeGate>
      <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-gray-500 text-sm">Loading…</div>}>
        <Composer />
      </Suspense>
    </PasscodeGate>
  );
}

const TEMPLATES: Record<string, (ref: string, amount: string) => string> = {
  payid: (ref, amount) =>
    `Please send ${amount} via PayID:\n\nPayID: ${CONTACT.email}\nAccount Name: ${SITE.name} Pty Ltd\nBank: Commonwealth Bank (CBA)\nReference: ${ref}\n\nPayID clears instantly 24/7.`,
  'bank-transfer': (ref, amount) =>
    `Please transfer ${amount} to:\n\nBSB: 062-815\nAccount: 1048 2914\nAccount Name: ${SITE.name} Pty Ltd\nReference: ${ref}\n\nEFT clears within 24–48 business hours.`,
  crypto: (ref, amount) =>
    `Please send ${amount} in crypto (BTC, USDT or ETH):\n\nBitcoin (BTC): [paste wallet address]\nUSDT (TRC20): [paste wallet address]\nUSDT (ERC20): [paste wallet address]\nReference: ${ref}\n\n10% discount already applied.`,
};

const METHOD_LABEL: Record<string, string> = {
  payid: 'PayID (Instant)',
  'bank-transfer': 'Bank Transfer (EFT)',
  crypto: 'Crypto (BTC / USDT / ETH)',
};

function Composer() {
  const searchParams = useSearchParams();
  const refParam = searchParams.get('ref') || '';
  const { getAuthHeaders, isUnlocked } = useAdminPasscode();

  const [order, setOrder] = useState<StoredOrder | null>(null);
  const [loading, setLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('payid');
  const [instructions, setInstructions] = useState('');
  const [notes, setNotes] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!refParam || !isUnlocked) return;
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/admin/orders/${refParam}/`, { headers: getAuthHeaders() });
        if (res.ok) {
          const data = await res.json();
          const o = data.order as StoredOrder;
          setOrder(o);
          const method = o.paymentMethod || 'payid';
          setPaymentMethod(method);
          const amt = `$${o.total.toLocaleString()} AUD`;
          setInstructions(TEMPLATES[method]?.(o.ref, amt) ?? '');
        }
      } catch { /* ignore */ }
      finally { setLoading(false); }
    };
    load();
  }, [refParam, isUnlocked]);

  if (!refParam) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-gray-500 text-sm">
        No order selected. <Link href="/admin/orders/" className="text-sky-400 ml-1 underline">Go to orders →</Link>
      </div>
    );
  }

  if (loading) {
    return <div className="min-h-screen bg-black flex items-center justify-center text-gray-500 text-sm">Loading order {refParam}…</div>;
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-gray-500 text-sm">
        Order not found: {refParam}. <Link href="/admin/orders/" className="text-sky-400 ml-1 underline">Back to orders →</Link>
      </div>
    );
  }

  const amount = `$${order.total.toLocaleString()} AUD`;

  const fillTemplate = () => {
    setInstructions(TEMPLATES[paymentMethod]?.(order.ref, amount) ?? '');
  };

  const pasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInstructions(text);
    } catch {
      (document.getElementById('instructions-field') as HTMLTextAreaElement)?.focus();
    }
  };

  const waText = encodeURIComponent(
    `*${SITE.name}*\n*Payment Details — Order ${order.ref}*\n\nHi ${order.customerName},\n\n*Amount Due:* ${amount}\n*Payment Method:* ${METHOD_LABEL[paymentMethod] || paymentMethod}\n\n*Payment Details:*\n${instructions}\n\n*Terms:*\n• Pay within 48hrs to secure your order\n• Use ${order.ref} as your reference\n• Ships within 2 business days\n\nSend your payment screenshot to ${CONTACT.email} or reply here.`
  );
  const waLink = `https://wa.me/${(order.phone || CONTACT.whatsapp).replace(/\D/g, '').replace(/^0/, '61')}?text=${waText}`;

  const handleSend = async () => {
    if (!instructions.trim()) return;
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
          paymentMethod,
          details: instructions,
          notes,
          items: order.items,
        }),
      });
      if (res.ok) setSent(true);
    } catch { /* ignore */ }
    finally { setSending(false); }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <div className="border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <Link href="/admin/orders/" className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          All Orders
        </Link>
        <span className="font-mono text-xs font-bold text-gray-400">{order.ref}</span>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-5">

        <div>
          <div className="text-lg font-extrabold text-white">Send Payment Details</div>
          <div className="text-xs text-gray-500 mt-0.5">Fill in your payment details below — the customer receives exactly what you type.</div>
        </div>

        {/* Pre-filled order fields */}
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-4 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-extrabold uppercase tracking-widest text-gray-500 mb-1">Order #</label>
              <input readOnly value={order.ref}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-gray-300 cursor-default" />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase tracking-widest text-gray-500 mb-1">Amount Due</label>
              <input readOnly value={amount}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-mono font-bold text-sky-400 cursor-default" />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-extrabold uppercase tracking-widest text-gray-500 mb-1">Customer Name</label>
            <input readOnly value={order.customerName}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 cursor-default" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-extrabold uppercase tracking-widest text-gray-500 mb-1">Customer Email</label>
              <input readOnly value={order.email}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400 cursor-default truncate" />
            </div>
            <div>
              <label className="block text-[10px] font-extrabold uppercase tracking-widest text-gray-500 mb-1">Customer Phone</label>
              <input readOnly value={order.phone || '—'}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400 cursor-default" />
            </div>
          </div>
        </div>

        {/* Payment method + details */}
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-4 space-y-4">
          <div>
            <label className="block text-[10px] font-extrabold uppercase tracking-widest text-gray-500 mb-1.5">Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => {
                setPaymentMethod(e.target.value);
                setInstructions(TEMPLATES[e.target.value]?.(order.ref, amount) ?? '');
              }}
              className="w-full px-3 py-2.5 bg-[#1a1a1a] border border-white/15 rounded-lg text-sm text-white focus:outline-none focus:border-sky-500"
            >
              <option value="payid">PayID (Instant Bank Rail)</option>
              <option value="bank-transfer">Bank Transfer (EFT)</option>
              <option value="crypto">Crypto (BTC / USDT / ETH)</option>
            </select>
          </div>

          {/* Payment Details textarea */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500">
                Payment Details <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-1.5">
                <button type="button" onClick={fillTemplate}
                  className="px-3 py-1 bg-sky-500 hover:bg-sky-400 text-white text-[10px] font-extrabold rounded-md transition-colors">
                  TEMPLATE
                </button>
                <button type="button" onClick={pasteFromClipboard}
                  className="px-3 py-1 border border-white/20 text-gray-400 hover:text-white text-[10px] font-extrabold rounded-md transition-colors flex items-center gap-1">
                  <Clipboard className="w-3 h-3" /> PASTE
                </button>
              </div>
            </div>
            <textarea
              id="instructions-field"
              rows={7}
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder={`One detail per line, e.g.\nBSB: 062-815\nAccount: 1048 2914\nAccount Name: ${SITE.name} Pty Ltd\nReference: ${order.ref}`}
              className="w-full px-3 py-2.5 bg-[#1a1a1a] border border-white/15 rounded-lg font-mono text-xs text-gray-300 focus:outline-none focus:border-sky-500 resize-none leading-relaxed"
            />
            <div className="text-[10px] text-gray-600 mt-1">Whatever you type here is what the customer receives — edit freely.</div>
          </div>

          {/* Payment terms — always included */}
          <div className="border border-white/10 rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500">Payment Terms</span>
              <span className="text-[10px] text-gray-600 italic">always included</span>
            </div>
            <ul className="space-y-1 text-[11px] text-gray-400">
              <li>• Pay within 48 hours to confirm this order.</li>
              <li>• Use <span className="font-mono text-sky-400">{order.ref}</span> as the payment reference.</li>
              <li>• Once paid, send your receipt to <span className="text-sky-400">{CONTACT.email}</span></li>
            </ul>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-[10px] font-extrabold uppercase tracking-widest text-gray-500 mb-1.5">Notes (Optional)</label>
            <textarea rows={2} value={notes} onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. estimated dispatch date, stock notes…"
              className="w-full px-3 py-2.5 bg-[#1a1a1a] border border-white/15 rounded-lg text-xs text-gray-300 focus:outline-none focus:border-sky-500 resize-none" />
          </div>
        </div>

        {/* ── EMAIL PREVIEW ── */}
        <div>
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500 mb-3">Email Preview</div>
          <div className="bg-[#F4F0EA] p-3 rounded-2xl">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">

              {/* Dark header */}
              <div className="bg-[#0f172a] px-5 py-4 border-b-4 border-sky-500">
                <div className="font-extrabold text-white text-sm">{SITE.name}</div>
                <div className="text-slate-400 text-[10px] mt-0.5">{REPLY.headerTagline}</div>
              </div>

              {/* Order # + Amount Due — two column banner */}
              <div className="grid grid-cols-2 border-b border-slate-100">
                <div className="px-5 py-4 border-r border-slate-100">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">Order Reference</div>
                  <div className="font-mono font-extrabold text-slate-900 text-base leading-none">{order.ref}</div>
                </div>
                <div className="px-5 py-4">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">Amount Due</div>
                  <div className="font-mono font-extrabold text-sky-600 text-base leading-none">{amount}</div>
                </div>
              </div>

              <div className="px-5 py-4 space-y-3">

                {/* Greeting */}
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Hi {order.customerName}, please complete your payment using the details below to dispatch your order.
                </p>

                {/* Order items */}
                <div className="border border-slate-100 rounded-lg overflow-hidden">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-start px-3 py-2 border-b border-slate-50 last:border-0">
                      <span className="text-slate-700 text-[10px] pr-2">{item.qty}× {item.name}</span>
                      <span className="font-mono text-slate-800 text-[10px] font-semibold shrink-0">${item.price.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center px-3 py-2 bg-slate-50">
                    <span className="text-slate-400 text-[10px]">Shipping (Australia-wide)</span>
                    <span className="text-emerald-600 text-[10px] font-bold">FREE</span>
                  </div>
                </div>

                {/* Payment method divider */}
                <div className="border-t-2 border-sky-500 pt-3">
                  <div className="text-[9px] font-extrabold uppercase tracking-widest text-sky-600 mb-1">
                    Pay via {METHOD_LABEL[paymentMethod] || paymentMethod}
                  </div>
                  <p className="text-slate-500 text-[10px]">
                    Please pay exactly <strong className="text-slate-800">{amount}</strong> using the details below:
                  </p>
                </div>

                {/* Instructions — live from textarea */}
                <pre className="bg-slate-50 border-l-4 border-sky-500 px-3 py-3 rounded-r-lg font-mono text-[10px] text-slate-800 whitespace-pre-wrap leading-relaxed min-h-[48px]">
                  {instructions || 'Your payment details will appear here as you type…'}
                </pre>

                {/* Notes */}
                {notes && (
                  <p className="text-slate-500 text-[10px] italic">{notes}</p>
                )}

                {/* Dark terms box */}
                <div className="bg-slate-900 rounded-lg px-4 py-3 space-y-1">
                  <div className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">Before Your Order Ships</div>
                  <div className="text-[10px] text-slate-300">• Pay within 48 hours to confirm this order.</div>
                  <div className="text-[10px] text-slate-300">• Use <span className="font-mono text-sky-400 font-bold">{order.ref}</span> as your payment reference.</div>
                  <div className="text-[10px] text-slate-300">• Once paid, send your receipt to <span className="text-sky-400">{CONTACT.email}</span> or WhatsApp {CONTACT.phoneDisplay}.</div>
                  <div className="text-[10px] text-slate-300">• Ships within 2 business days of payment confirmation.</div>
                </div>

              </div>

              {/* Footer */}
              <div className="bg-[#F7F4F0] px-5 py-3 border-t border-slate-100 text-[9px] text-slate-400 text-center">
                {SITE.name} · ABN {REPLY.bizNumber?.value} · {REPLY.headerTagline}
              </div>

            </div>
          </div>
        </div>

        {/* Send button */}
        {sent ? (
          <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400 text-sm font-bold">
            <CheckCircle className="w-5 h-5 shrink-0" />
            Email sent to {order.email}
          </div>
        ) : (
          <button
            type="button"
            onClick={handleSend}
            disabled={sending || !instructions.trim()}
            className="w-full py-4 bg-sky-600 hover:bg-sky-500 disabled:opacity-40 text-white font-extrabold text-sm rounded-2xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-sky-600/20"
          >
            <Send className="w-4 h-4" />
            {sending ? 'Sending…' : `SEND TO ${order.email.toUpperCase()}`}
          </button>
        )}

        {/* WhatsApp */}
        <div className="space-y-2 pb-8">
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-gray-600 text-center">or send via WhatsApp</div>
          <a href={waLink} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#20BA5A] text-white font-extrabold text-sm rounded-2xl transition-colors">
            <MessageSquare className="w-4 h-4" />
            WhatsApp {order.customerName}
          </a>
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-4">
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-gray-600 mb-2">WhatsApp Message Preview</div>
            <pre className="text-[11px] text-gray-400 whitespace-pre-wrap leading-relaxed font-sans">
              {decodeURIComponent(waText)}
            </pre>
          </div>
        </div>

      </div>
    </div>
  );
}
