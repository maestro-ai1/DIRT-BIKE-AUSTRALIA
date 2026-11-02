'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { PasscodeGate } from '@/components/admin/PasscodeGate';
import { useAdminPasscode } from '@/lib/useAdminPasscode';
import { StoredOrder } from '@/lib/orderStore';
import { CONTACT } from '@/src/config/site';
import { INVOICE } from '@/src/config/invoice';
import { ArrowLeft, Printer, Pencil } from 'lucide-react';

export default function AdminInvoicePage() {
  return (
    <PasscodeGate>
      <Suspense fallback={null}>
        <Invoice />
      </Suspense>
    </PasscodeGate>
  );
}

interface Bank { accountName: string; bsb: string; accountNumber: string; payId: string; payIdType: string; bankName: string }
const EMPTY_BANK: Bank = { accountName: '', bsb: '', accountNumber: '', payId: '', payIdType: '', bankName: '' };
const aud = (n: number) => '$' + n.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtBsb = (b: string) => (b.length === 6 ? `${b.slice(0, 3)}-${b.slice(3)}` : b);
const field = 'w-full border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 bg-white';

function Invoice() {
  const ref = useSearchParams().get('ref') || '';
  const { getAuthHeaders, isUnlocked } = useAdminPasscode();
  const [order, setOrder] = useState<StoredOrder | null>(null);
  const [state, setState] = useState<'loading' | 'ready' | 'missing'>('loading');
  const [bank, setBank] = useState<Bank | null>(null);
  const [bankForm, setBankForm] = useState<Bank>(EMPTY_BANK);
  const [bankErr, setBankErr] = useState('');
  const [editBank, setEditBank] = useState(false);
  const [editBill, setEditBill] = useState(false);
  const [bill, setBill] = useState({ address: '', email: '', phone: '' });
  const [sendTo, setSendTo] = useState('');
  const [sendMsg, setSendMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!isUnlocked) return;
    (async () => {
      try {
        const res = await fetch('/api/admin/orders/', { headers: getAuthHeaders() });
        const data = res.ok ? await res.json() : { orders: [] };
        const found: StoredOrder | null = (data.orders || []).find((o: StoredOrder) => o.ref === ref || o.id === ref) || null;
        setOrder(found);
        setState(found ? 'ready' : 'missing');
        if (found) {
          let saved: Partial<typeof bill> = {};
          try { saved = JSON.parse(localStorage.getItem('edba_invoice_bill_' + found.ref) || '{}'); } catch { /* ignore */ }
          setBill({
            address: saved.address ?? [found.address, found.suburbState].filter(Boolean).join(', '),
            email: saved.email ?? found.email ?? '',
            phone: saved.phone ?? found.phone ?? '',
          });
        }
      } catch { setState('missing'); }
      try {
        const r = await fetch('/api/admin/invoice-settings/', { headers: getAuthHeaders() });
        const d = r.ok ? await r.json() : { bank: null };
        if (d.bank) { setBank(d.bank); setBankForm({ ...EMPTY_BANK, ...d.bank }); }
      } catch { /* ignore */ }
    })();
  }, [isUnlocked, ref]); // eslint-disable-line react-hooks/exhaustive-deps

  const saveBank = async () => {
    setBankErr('');
    const r = await fetch('/api/admin/invoice-settings/', { method: 'POST', headers: { ...getAuthHeaders(), 'Content-Type': 'application/json' }, body: JSON.stringify(bankForm) });
    const d = await r.json().catch(() => ({}));
    if (!r.ok) { setBankErr(d.error || 'Could not save.'); return; }
    setBank(d.bank); setEditBank(false);
  };

  const sendInvoice = async () => {
    if (!order) return;
    const to = (sendTo || bill.email).trim();
    if (!window.confirm(`Email tax invoice ${order.ref} (${aud(order.total)} AUD) to ${to}?`)) return;
    setSending(true); setSendMsg(null);
    try {
      const r = await fetch('/api/admin/send-invoice/', { method: 'POST', headers: { ...getAuthHeaders(), 'Content-Type': 'application/json' }, body: JSON.stringify({ ref: order.ref, email: to, address: bill.address, phone: bill.phone }) });
      const d = await r.json().catch(() => ({}));
      setSendMsg(r.ok ? { ok: true, text: `Invoice emailed to ${to}.` } : { ok: false, text: d.error || 'Could not send.' });
    } catch { setSendMsg({ ok: false, text: 'Network error.' }); }
    finally { setSending(false); }
  };

  const previewEmail = async () => {
    if (!order) return;
    const w = window.open('', '_blank');
    const r = await fetch('/api/admin/send-invoice/', { method: 'POST', headers: { ...getAuthHeaders(), 'Content-Type': 'application/json' }, body: JSON.stringify({ ref: order.ref, email: (sendTo || bill.email).trim() || 'preview@example.com', address: bill.address, phone: bill.phone, preview: true }) });
    const d = await r.json().catch(() => ({}));
    if (w) { w.document.open(); w.document.write(r.ok ? d.html : `<p style="font-family:sans-serif;padding:24px">${d.error || 'Preview failed.'}</p>`); w.document.close(); }
  };

  const saveBill = (next: typeof bill) => {
    setBill(next);
    if (order) { try { localStorage.setItem('edba_invoice_bill_' + order.ref, JSON.stringify(next)); } catch { /* ignore */ } }
  };

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
  const showBankForm = !bank || editBank;

  return (
    <div className="min-h-screen bg-gray-200 print:bg-white py-6 print:py-0">
      <style>{`@media print { body * { visibility: hidden !important; } #invoice-print, #invoice-print * { visibility: visible !important; } #invoice-print { position: absolute; left: 0; top: 0; width: 100%; max-width: none; } @page { size: A4; margin: 12mm; } }`}</style>

      <div className="max-w-3xl mx-auto px-4 print:px-0 mb-4 flex items-center justify-between print:hidden">
        <Link href="/admin/orders/" className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-700 hover:text-black">
          <ArrowLeft className="w-4 h-4" /> Orders
        </Link>
        <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm rounded-lg">
          <Printer className="w-4 h-4" /> Print / Save as PDF
        </button>
      </div>

      {/* Email the invoice (screen only) */}
      <div className="max-w-3xl mx-auto mb-4 bg-white border border-slate-300 rounded-xl p-5 print:hidden text-slate-900">
        <div className="text-sm font-extrabold mb-2">Email this invoice to the customer</div>
        <div className="flex flex-col sm:flex-row gap-2">
          <input className={field} type="email" placeholder="Customer email" value={sendTo || bill.email} onChange={(e) => setSendTo(e.target.value)} />
          <button type="button" disabled={!bank} onClick={previewEmail} className="px-4 py-2 bg-slate-200 hover:bg-slate-300 disabled:opacity-50 text-slate-900 font-bold text-sm rounded-lg whitespace-nowrap">Preview email</button>
          <button type="button" disabled={sending || !bank} onClick={sendInvoice} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-sm rounded-lg whitespace-nowrap">{sending ? 'Sending…' : 'Send invoice'}</button>
        </div>
        {!bank && <div className="text-xs text-amber-700 mt-2 font-semibold">Save the bank details below first.</div>}
        {sendMsg && <div className={`text-xs mt-2 font-semibold ${sendMsg.ok ? 'text-emerald-700' : 'text-red-600'}`}>{sendMsg.text}</div>}
        <div className="text-xs text-slate-500 mt-2">Prefer your own mailbox (Zoho)? Use Print / Save as PDF above and attach the file.</div>
      </div>

      {/* Bank details form (screen only, saved privately) */}
      {showBankForm && (
        <div className="max-w-3xl mx-auto mb-4 bg-white border border-amber-300 rounded-xl p-5 print:hidden text-slate-900">
          <div className="text-sm font-extrabold mb-1">Bank details for Osko payments (saved privately, never in the public code)</div>
          <div className="grid sm:grid-cols-2 gap-3 mt-3">
            <input className={field} placeholder="Account name" value={bankForm.accountName} onChange={(e) => setBankForm({ ...bankForm, accountName: e.target.value })} />
            <input className={field} placeholder="Bank name (optional)" value={bankForm.bankName} onChange={(e) => setBankForm({ ...bankForm, bankName: e.target.value })} />
            <input className={field} placeholder="BSB (6 digits)" inputMode="numeric" value={bankForm.bsb} onChange={(e) => setBankForm({ ...bankForm, bsb: e.target.value })} />
            <input className={field} placeholder="Account number" inputMode="numeric" value={bankForm.accountNumber} onChange={(e) => setBankForm({ ...bankForm, accountNumber: e.target.value })} />
            <input className={field} placeholder="PayID (optional)" value={bankForm.payId} onChange={(e) => setBankForm({ ...bankForm, payId: e.target.value })} />
            <input className={field} placeholder="PayID type, e.g. Email, Phone, ABN (optional)" value={bankForm.payIdType} onChange={(e) => setBankForm({ ...bankForm, payIdType: e.target.value })} />
          </div>
          {bankErr && <div className="text-red-600 text-xs font-semibold mt-2">{bankErr}</div>}
          <button type="button" onClick={saveBank} className="mt-3 px-4 py-2 bg-slate-900 text-white font-bold text-sm rounded-lg">Save bank details</button>
        </div>
      )}

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
            <div className="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">
              <span>Bill to</span>
              <button type="button" onClick={() => setEditBill(!editBill)} className="print:hidden inline-flex items-center gap-1 normal-case tracking-normal text-sky-600 font-bold">
                <Pencil className="w-3 h-3" /> {editBill ? 'Done' : 'Edit'}
              </button>
            </div>
            <div className="font-bold">{order.customerName}</div>
            {editBill ? (
              <div className="space-y-2 mt-2 print:hidden">
                <textarea className={field} rows={2} placeholder="Address" value={bill.address} onChange={(e) => saveBill({ ...bill, address: e.target.value })} />
                <input className={field} placeholder="Email" value={bill.email} onChange={(e) => saveBill({ ...bill, email: e.target.value })} />
                <input className={field} placeholder="Phone" value={bill.phone} onChange={(e) => saveBill({ ...bill, phone: e.target.value })} />
              </div>
            ) : (
              <div className="text-slate-700 leading-relaxed">
                {bill.address && <>{bill.address}<br /></>}
                {[bill.email, bill.phone].filter(Boolean).join(' · ')}
              </div>
            )}
          </div>
          <div>
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 mb-1">Payment method</div>
            <div className="font-bold">Bank transfer (Osko)</div>
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
          <div className="flex items-center justify-between mb-3">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#0284c7]">How to pay: bank transfer (Osko)</div>
            {bank && !editBank && (
              <button type="button" onClick={() => setEditBank(true)} className="print:hidden inline-flex items-center gap-1 text-xs text-sky-600 font-bold"><Pencil className="w-3 h-3" /> Edit</button>
            )}
          </div>
          {!bank ? (
            <div className="bg-amber-50 border border-amber-300 text-amber-900 rounded-lg p-3 text-xs font-semibold">
              Bank details not added yet. Add them in the form above before sending this invoice.
            </div>
          ) : (
            <dl className="grid grid-cols-[9rem_1fr] gap-y-1.5">
              <dt className="text-slate-500">Account name</dt><dd className="font-bold">{bank.accountName}</dd>
              {bank.bankName && (<><dt className="text-slate-500">Bank</dt><dd className="font-bold">{bank.bankName}</dd></>)}
              <dt className="text-slate-500">BSB</dt><dd className="font-bold font-mono">{fmtBsb(bank.bsb)}</dd>
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
