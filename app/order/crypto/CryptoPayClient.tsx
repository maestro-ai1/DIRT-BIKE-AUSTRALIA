'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import QRCode from 'qrcode';
import { Check, Copy, ShieldCheck, TriangleAlert, CheckCircle } from 'lucide-react';
import { CONTACT } from '@/src/config/site';

type Wallet = { id: string; label: string; short: string; network: string; address: string; uri: string };
type Data = { orderNumber: string; amountDue: number; discount: number; status: string; wallets: Wallet[] };

const aud = (n: number) =>
  '$' + n.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' AUD';

function Qr({ value, label }: { value: string; label: string }) {
  const [src, setSrc] = useState('');
  useEffect(() => {
    let live = true;
    QRCode.toDataURL(value, { width: 480, margin: 2, errorCorrectionLevel: 'M' })
      .then((u) => live && setSrc(u))
      .catch(() => live && setSrc(''));
    return () => { live = false; };
  }, [value]);
  return (
    <div className="mx-auto grid h-56 w-56 place-items-center rounded-2xl border border-slate-200 bg-white p-2">
      {src
        // eslint-disable-next-line @next/next/no-img-element
        ? <img src={src} alt={`QR code for the ${label} wallet address`} width={224} height={224} className="h-full w-full" />
        : <span className="text-xs text-slate-500">Loading QR…</span>}
    </div>
  );
}

export function CryptoPayClient() {
  const params = useSearchParams();
  const id = (params.get('id') || '').toUpperCase();
  const total = params.get('total') || '';
  const [data, setData] = useState<Data | null>(null);
  const [err, setErr] = useState('');
  const [pick, setPick] = useState(0);
  const [copied, setCopied] = useState('');
  const [state, setState] = useState<'idle' | 'busy' | 'done'>('idle');
  const [upErr, setUpErr] = useState('');
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (!id) return;
    const q = `id=${encodeURIComponent(id)}${total ? `&total=${encodeURIComponent(total)}` : ''}`;
    fetch(`/api/order/crypto/?${q}`)
      .then(async (r) => {
        const j = await r.json();
        if (r.ok) {
          setData(j);
          if (j.status === 'screenshot-received' || j.status === 'payment-confirmed') setState('done');
        } else setErr(j.error || 'This page is not available.');
      })
      .catch(() => setErr(`Could not load your order. Please WhatsApp ${CONTACT.whatsappDisplay}.`));
  }, [id, total]);

  async function copy(key: string, text: string) {
    try { await navigator.clipboard.writeText(text); } catch { /* selecting the address box still works */ }
    setCopied(key);
    setTimeout(() => setCopied(''), 2000);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;
    setState('busy');
    setUpErr('');
    const fd = new FormData();
    fd.set('screenshot', file);
    fd.set('ref', id);
    fd.set('method', 'crypto');
    try {
      const r = await fetch('/api/confirm/', { method: 'POST', body: fd });
      if (r.ok) setState('done');
      else {
        const j = await r.json().catch(() => ({}));
        setUpErr(j.error || 'Upload failed. Please try again.');
        setState('idle');
      }
    } catch {
      setUpErr('Network error. Please try again.');
      setState('idle');
    }
  }

  const box = 'bg-white rounded-2xl border border-slate-200 shadow-sm';
  if (!id) return <p className={`${box} p-5 text-slate-600`}>Open this page from checkout or from the link in your order email.</p>;
  if (err) return <p className={`${box} p-5 text-slate-600`} role="alert">{err}</p>;
  if (!data) return <p className="text-sm text-slate-600">Loading your order…</p>;

  if (data.status === 'payment-confirmed') {
    return (
      <p className={`${box} p-6 text-lg font-semibold text-slate-900`}>
        Payment received for order {data.orderNumber}. Thank you! We are preparing your order for dispatch and will be in touch.
      </p>
    );
  }

  const w = data.wallets[pick];
  return (
    <div>
      <div className="rounded-2xl bg-slate-900 p-5 text-white">
        <p className="text-xs font-bold uppercase tracking-wider text-sky-300">Order {data.orderNumber}</p>
        {data.amountDue > 0 ? (
          <p className="mt-1 text-3xl font-black tabular-nums">{aud(data.amountDue)}</p>
        ) : (
          <p className="mt-1 text-lg font-bold">Amount as shown in your order email</p>
        )}
        <p className="mt-1 text-sm text-slate-300">
          Includes your 10% crypto discount. Pay the equivalent value in the crypto you choose below.
        </p>
      </div>

      <h2 className="mt-8 text-xl font-extrabold text-slate-900">1. Choose how you want to pay</h2>
      <div role="tablist" aria-label="Crypto payment options" className="mt-3 grid gap-2 sm:grid-cols-3">
        {data.wallets.map((x, i) => (
          <button
            key={x.id}
            type="button"
            role="tab"
            aria-selected={pick === i}
            onClick={() => setPick(i)}
            className={`rounded-xl border-2 p-3 text-left transition ${pick === i ? 'border-sky-600 bg-sky-50' : 'border-slate-200 bg-white hover:border-sky-400'}`}
          >
            <span className="block font-extrabold text-slate-900">{x.label}</span>
            <span className="block text-xs text-slate-500">{x.network}</span>
          </button>
        ))}
      </div>

      <div role="tabpanel" className={`${box} mt-4 p-5 sm:p-6`}>
        <Qr value={w.uri} label={`${w.label} ${w.network}`} />
        <p className="mt-4 text-center text-sm font-semibold text-slate-800">Scan with your wallet app, or copy the address</p>
        <label htmlFor={`addr-${w.id}`} className="mt-3 block text-xs font-bold uppercase tracking-wider text-sky-700">
          {w.label} address · {w.network}
        </label>
        <textarea
          id={`addr-${w.id}`}
          readOnly
          rows={2}
          value={w.address}
          onFocus={(e) => e.currentTarget.select()}
          onClick={(e) => e.currentTarget.select()}
          className="mt-1.5 w-full resize-none break-all rounded-xl border-2 border-sky-600 bg-sky-50 p-3 text-center font-mono text-[15px] font-bold text-slate-900"
        />
        <button
          type="button"
          onClick={() => copy(w.id, w.address)}
          aria-label={`Copy ${w.label} ${w.network} address`}
          className={`mt-2 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl font-bold text-white transition ${copied === w.id ? 'bg-emerald-600' : 'bg-sky-600 hover:bg-sky-500'}`}
        >
          {copied === w.id ? <><Check size={18} /> Address copied</> : <><Copy size={18} /> Copy address</>}
        </button>
        <p className="mt-4 flex gap-2 rounded-xl bg-amber-50 p-3 text-sm font-semibold text-amber-800">
          <TriangleAlert size={18} className="mt-0.5 shrink-0" />
          <span>
            Send only {w.short} on the {w.network}. Funds sent on a different network cannot be recovered. Network fees are paid by you,
            so send enough to cover {data.amountDue > 0 ? aud(data.amountDue) : 'your order total'} after fees.
          </span>
        </p>
      </div>

      <h2 className="mt-8 text-xl font-extrabold text-slate-900">2. Upload your payment screenshot</h2>
      {state === 'done' ? (
        <div className={`${box} mt-3 flex gap-3 p-6`} role="status">
          <CheckCircle className="h-7 w-7 shrink-0 text-emerald-600" />
          <p className="font-semibold text-slate-900">
            Thank you. We have your screenshot for order {data.orderNumber}. We will check it against our wallet and email you as soon as your payment is confirmed.
          </p>
        </div>
      ) : (
        <form onSubmit={submit} className={`${box} mt-3 space-y-4 p-5 sm:p-6`}>
          <p className="text-sm text-slate-600">
            After you have sent the payment, upload a screenshot showing the amount and transaction (JPG, PNG, WebP or HEIC, up to 4MB).
          </p>
          <label className="block text-sm font-bold text-slate-900">
            Payment screenshot
            <input
              type="file"
              name="file"
              accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
              required
              onChange={(e) => {
                const f = e.target.files?.[0] || null;
                if (f && f.size > 4 * 1024 * 1024) { setUpErr('File too large (max 4MB).'); setFile(null); e.target.value = ''; return; }
                setUpErr('');
                setFile(f);
              }}
              className="mt-1.5 block w-full rounded-xl border border-slate-300 bg-white p-3 text-sm"
            />
          </label>
          {upErr && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700">{upErr}</p>}
          <button
            type="submit"
            disabled={state === 'busy' || !file}
            className="min-h-[52px] w-full rounded-xl bg-sky-600 font-bold text-white transition hover:bg-sky-500 disabled:opacity-50"
          >
            {state === 'busy' ? 'Uploading…' : 'I have paid: send screenshot'}
          </button>
          <p className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck size={14} /> Questions? WhatsApp {CONTACT.whatsappDisplay} or email {CONTACT.email}.
          </p>
        </form>
      )}
    </div>
  );
}
