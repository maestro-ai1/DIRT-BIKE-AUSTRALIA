'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { PasscodeGate } from '@/components/admin/PasscodeGate';
import { useAdminPasscode } from '@/lib/useAdminPasscode';
import { StoredOrder } from '@/lib/orderStore';
import { WhatsAppSendPanel } from '@/components/admin/WhatsAppSendPanel';
import { Send, ArrowLeft, CheckCircle, RefreshCw, MessageSquare } from 'lucide-react';
import { paymentMethodParts, paymentTermsLines, instructionsParts } from '@/lib/order';
import { waPaymentDetailsMessage } from '@/lib/whatsapp';

export default function SendPaymentEmailPage() {
  return (
    <PasscodeGate>
      <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading composer...</div>}>
        <Composer />
      </Suspense>
    </PasscodeGate>
  );
}

function Composer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const refParam = searchParams.get('ref') || '';
  const { getAuthHeaders } = useAdminPasscode();

  const [order, setOrder] = useState<StoredOrder | null>(null);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<'template' | 'paste'>('template');
  const [pastedDetails, setPastedDetails] = useState('');
  const [sending, setSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  useEffect(() => {
    if (!refParam) return;
    const fetchOrder = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/admin/orders/${refParam}/`, {
          headers: getAuthHeaders(),
        });
        if (res.ok) {
          const data = await res.json();
          setOrder(data.order);
          // Set initial template details
          const method = data.order?.paymentMethod || 'crypto';
          if (method === 'crypto') {
            setPastedDetails('BTC Address: bc1q8w4edba98611685977australia99182\nUSDT (TRC20): TEdba98611685977AusDirtBikeMotto118\nNetwork Confirmation: 1 block required for dispatch queue.');
          } else if (method === 'payid') {
            setPastedDetails('PayID: sales@electricdirtbikeaustralia.com.au\nAccount Name: Electric Dirt Bike Australia Pty Ltd\nBank: Commonwealth Bank of Australia (CBA)');
          } else {
            setPastedDetails('BSB: 062-815\nAccount Number: 1048 2914\nAccount Name: Electric Dirt Bike Australia Pty Ltd\nReference: ' + data.order.ref);
          }
        }
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [refParam]);

  if (!refParam) {
    return (
      <div className="p-12 text-center text-slate-500">
        Please select an order from the dashboard to send payment instructions.
      </div>
    );
  }

  if (loading) {
    return <div className="p-12 text-center text-slate-500">Loading order details...</div>;
  }

  if (!order) {
    return (
      <div className="p-12 text-center text-slate-500">
        Order not found: {refParam}
      </div>
    );
  }

  const parts = paymentMethodParts(order.paymentMethod, `$${order.total.toLocaleString()} AUD`, order.ref);
  const fullInstructions = instructionsParts(parts.opening, pastedDetails, parts.closing);
  const waText = waPaymentDetailsMessage(order.ref, order.customerName, `$${order.total.toLocaleString()} AUD`, parts.label, pastedDetails);

  const handleSendEmail = async () => {
    setSending(true);
    try {
      const res = await fetch('/api/admin/send-payment-email/', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          orderRef: order.ref,
          customerEmail: order.email,
          customerName: order.customerName,
          amount: `$${order.total.toLocaleString()} AUD`,
          paymentMethod: parts.label,
          details: pastedDetails,
        }),
      });

      if (res.ok) {
        setSentSuccess(true);
      }
    } catch {
      // ignore
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="py-10 bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link
            href="/admin/orders/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Orders List</span>
          </Link>

          <span className="font-mono text-xs font-bold bg-white px-3 py-1 rounded-md border border-slate-200">
            Order: {order.ref}
          </span>
        </div>

        {/* 2-Column Composer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Editor (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <h2 className="font-extrabold text-slate-900 text-base">
                  Payment Details Composer
                </h2>
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setMode('template')}
                    className={`px-3 py-1 rounded-md ${
                      mode === 'template' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Template
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('paste')}
                    className={`px-3 py-1 rounded-md ${
                      mode === 'paste' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Paste Raw
                  </button>
                </div>
              </div>

              {/* Order Meta Info */}
              <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                <div>
                  <span className="text-slate-400 block font-semibold">Customer:</span>
                  <span className="font-bold text-slate-900">{order.customerName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Email:</span>
                  <span className="font-bold text-slate-900">{order.email}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Total Due:</span>
                  <span className="font-bold text-sky-600 font-mono">${order.total.toLocaleString()} AUD</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Selected Rail:</span>
                  <span className="font-bold text-slate-900 capitalize">{order.paymentMethod}</span>
                </div>
              </div>

              {/* Editable Payment Details Box */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Payment Details / Wallet / BSB &amp; Account
                </label>
                <textarea
                  rows={5}
                  value={pastedDetails}
                  onChange={(e) => setPastedDetails(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-mono text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  placeholder="Paste bank transfer account details or crypto address..."
                />
              </div>

              {sentSuccess ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800 text-xs font-semibold">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Branded Light Email successfully dispatched to {order.email}! Order status set to Payment-Sent.</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleSendEmail}
                  disabled={sending}
                  className="w-full py-3 px-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md shadow-sky-600/20"
                >
                  <Send className="w-4 h-4" />
                  <span>{sending ? 'Sending Branded Email...' : `Send Branded Email to ${order.email}`}</span>
                </button>
              )}
            </div>

            {/* WhatsApp Send Panel */}
            <WhatsAppSendPanel
              customerPhone={order.phone}
              customerName={order.customerName}
              messageText={waText}
            />
          </div>

          {/* Right: Live Light Shell Preview (Span 6) */}
          <div className="lg:col-span-6 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Live Customer Email Preview (Light Shell)
            </span>
            <div className="bg-[#F4F0EA] p-4 rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden max-w-lg mx-auto text-xs">
                
                {/* Header Band */}
                <div className="bg-[#0f172a] p-5 border-b-4 border-sky-500 text-white">
                  <div className="font-extrabold text-base tracking-tight">
                    ELECTRIC DIRT BIKE AUSTRALIA
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Australia’s Authorised Dealer · Southern Highlands NSW 2575
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-slate-900 text-sm">
                      Payment Details for Order {order.ref}
                    </h3>
                    <span className="px-2 py-0.5 border border-sky-500 text-sky-600 font-mono text-[10px] rounded-full font-bold">
                      {order.ref}
                    </span>
                  </div>

                  <p className="text-slate-600 leading-relaxed text-xs">
                    Hi {order.customerName}, thank you for your order with Electric Dirt Bike Australia. Please complete payment using the details below.
                  </p>

                  {/* Highlight Row */}
                  <div className="p-3 bg-slate-50 border-t-2 border-b-2 border-sky-500 flex items-center justify-between">
                    <span className="font-bold text-slate-800">Total Amount Due</span>
                    <span className="font-mono text-lg font-extrabold text-sky-600">
                      ${order.total.toLocaleString()} AUD
                    </span>
                  </div>

                  {/* Payment Details Block */}
                  <div className="space-y-1">
                    <span className="font-bold text-slate-900">Payment Instructions:</span>
                    <pre className="p-3 bg-slate-100 rounded-lg text-xs font-mono text-slate-800 whitespace-pre-wrap border-l-4 border-sky-500">
                      {fullInstructions}
                    </pre>
                  </div>

                  {/* Terms List */}
                  <div className="bg-slate-50 p-3 rounded-lg border text-[11px] text-slate-600 space-y-1">
                    <div className="font-bold text-slate-900 uppercase">Order Terms:</div>
                    <ul className="list-disc pl-4 space-y-0.5">
                      {paymentTermsLines(order.ref, order.paymentMethod).map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Light Footer */}
                <div className="bg-[#F7F4F0] p-4 border-t border-slate-200 text-[10px] text-slate-500 text-center">
                  Electric Dirt Bike Australia · Mittagong NSW 2575 · ABN 98 611 685 977
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
