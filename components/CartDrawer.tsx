'use client';

import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, Truck, Zap, MessageSquare, AlertCircle } from 'lucide-react';
import { useCart } from '@/lib/cartContext';
import { SITE, SHOP, REPLY, CONTACT } from '@/src/config/site';
import { waOrderLink } from '@/lib/whatsapp';
import { generateOrderRef } from '@/lib/order';
import { useRouter } from 'next/navigation';

export function CartDrawer() {
  const router = useRouter();
  const {
    items,
    itemCount,
    subtotal,
    cryptoDiscountAmount,
    totalWithCrypto,
    standardTotal,
    shippingFee,
    isFreeShipping,
    freeShippingDelta,
    freeShippingPercent,
    isCartOpen,
    setIsCartOpen,
    updateQty,
    removeFromCart,
    clearCart,
  } = useCart();

  const [checkoutMode, setCheckoutMode] = useState<'cart' | 'checkout'>('cart');
  const [paymentMethod, setPaymentMethod] = useState<'crypto' | 'payid' | 'bank-transfer'>('crypto');

  // Form fields
  const [name, setName]           = useState('');
  const [email, setEmail]         = useState('');
  const [phone, setPhone]         = useState('');
  const [address, setAddress]     = useState('');
  const [suburb, setSuburb]       = useState('');
  const [stateAu, setStateAu]     = useState('');
  const [postcode, setPostcode]   = useState('');
  const [notes, setNotes]         = useState('');

  // UI state
  const [isSubmitting, setIsSubmitting]   = useState(false);
  const [submitError, setSubmitError]     = useState('');
  const [fieldErrors, setFieldErrors]     = useState<Record<string, string>>({});

  if (!isCartOpen) return null;

  const currentTotal = paymentMethod === 'crypto' ? totalWithCrypto : standardTotal;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim())      errs.name     = 'Full name is required';
    if (!email.trim())     errs.email    = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email address';
    if (!phone.trim())     errs.phone    = 'Phone number is required';
    if (!address.trim())   errs.address  = 'Street address is required';
    if (!suburb.trim())    errs.suburb   = 'Suburb / City is required';
    if (!postcode.trim())  errs.postcode = 'Postcode is required';
    return errs;
  };

  // WhatsApp checkout — fire-and-forget; window.open must be synchronous
  const handleWhatsAppCheckout = (e: React.MouseEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    const orderRef = generateOrderRef();
    const fullSuburbState = [suburb, stateAu, postcode].filter(Boolean).join(' ') || 'Australia';
    const fullAddress = [address, fullSuburbState].filter(Boolean).join(', ');

    const waUrl = waOrderLink({
      ref: orderRef,
      items: items.map((i) => ({ name: i.name, qty: i.qty, price: i.price })),
      total: currentTotal,
      paymentMethod: paymentMethod === 'crypto' ? 'Crypto (-10%)' : paymentMethod === 'payid' ? 'PayID' : 'Bank Transfer',
      customerName: name || 'Website Customer',
      customerPhone: phone,
      suburbState: fullSuburbState,
      notes,
    });

    window.open(waUrl, '_blank');

    // Non-blocking: save order so admin portal sees it
    fetch('/api/order/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ref: orderRef,
        channel: 'whatsapp',
        customerName: name || 'Website Customer',
        email: email || `wa-${phone.replace(/\D/g, '')}@customer.local`,
        phone: phone || 'Via WhatsApp',
        address: fullAddress || 'Via WhatsApp consultation',
        suburbState: fullSuburbState,
        items: items.map((i) => ({ name: i.name, qty: i.qty, price: i.price, slug: i.slug })),
        subtotal,
        discount: paymentMethod === 'crypto' ? cryptoDiscountAmount : 0,
        shipping: shippingFee,
        total: currentTotal,
        paymentMethod,
        notes,
      }),
    }).catch(() => {});

    clearCart();
    setIsCartOpen(false);
    router.push(`/thank-you-order/?ref=${orderRef}&method=${paymentMethod}&total=${currentTotal}`);
  };

  // Email/form checkout
  const handleDirectOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      return;
    }
    setFieldErrors({});

    if (items.length === 0) return;
    setIsSubmitting(true);

    const orderRef = generateOrderRef();
    const fullSuburbState = [suburb, stateAu, postcode].filter(Boolean).join(' ');
    const fullAddress = [address, fullSuburbState].filter(Boolean).join(', ');

    try {
      const res = await fetch('/api/order/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ref: orderRef,
          channel: 'email',
          customerName: name,
          email,
          phone,
          address: fullAddress,
          suburbState: fullSuburbState,
          items: items.map((i) => ({ name: i.name, qty: i.qty, price: i.price, slug: i.slug })),
          subtotal,
          discount: paymentMethod === 'crypto' ? cryptoDiscountAmount : 0,
          shipping: shippingFee,
          total: currentTotal,
          paymentMethod,
          notes,
        }),
      });

      if (res.ok) {
        clearCart();
        setIsCartOpen(false);
        router.push(`/thank-you-order/?ref=${orderRef}&email=${encodeURIComponent(email)}&method=${paymentMethod}&total=${currentTotal}`);
      } else {
        const data = await res.json().catch(() => ({}));
        setSubmitError(data?.error || 'Something went wrong. Please try WhatsApp or email us directly.');
      }
    } catch {
      setSubmitError('Network error. Please check your connection or order via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const Field = ({
    id, label, required, error, children,
  }: { id: string; label: string; required?: boolean; error?: string; children: React.ReactNode }) => (
    <div>
      <label htmlFor={id} className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wide">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-[10px] text-red-500 mt-1 font-medium">{error}</p>}
    </div>
  );

  const inputClass = (err?: string) =>
    `w-full px-3 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none transition-colors ${
      err ? 'border-red-400 bg-red-50' : 'border-slate-300 bg-white'
    }`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Cart"
      className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">

        {/* Header */}
        <div className="px-4 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base text-slate-900">
              {checkoutMode === 'cart' ? 'Your Cart' : 'Order Details'}
            </span>
            <span className="text-[11px] font-bold bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free shipping bar */}
        <div className="px-4 py-2.5 bg-sky-50 border-b border-sky-100 text-xs text-sky-900 shrink-0">
          <div className="flex items-center justify-between mb-1 font-semibold">
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-sky-600" />
              {isFreeShipping
                ? <span className="text-emerald-700 font-bold">FREE Australia-wide freight unlocked!</span>
                : <span>Add ${freeShippingDelta.toLocaleString()} more for FREE freight</span>}
            </span>
            <span className="font-mono font-bold">{freeShippingPercent}%</span>
          </div>
          <div className="w-full h-1.5 bg-sky-200/80 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${isFreeShipping ? 'bg-emerald-500' : 'bg-sky-500'}`}
              style={{ width: `${freeShippingPercent}%` }}
            />
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center p-6">
              <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-3 text-slate-400">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-1">Your cart is empty</h3>
              <p className="text-xs text-slate-500 mb-5 max-w-xs">
                Browse our lineup of high-performance electric dirt bikes and accessories.
              </p>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold transition-colors"
              >
                Browse Electric Bikes →
              </button>
            </div>
          ) : checkoutMode === 'cart' ? (
            /* ── Cart Items ── */
            <div className="p-4 space-y-3">
              {items.map((item) => (
                <div key={item.slug} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                  <div className="w-16 h-16 bg-white rounded-lg border border-slate-200 flex items-center justify-center p-1 shrink-0 overflow-hidden">
                    <img
                      src={item.image || '/images/hero_surron_trail_1790338185425.jpg'}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 leading-snug line-clamp-2">{item.name}</h4>
                    <div className="text-xs font-mono font-bold text-sky-600 mt-1">${item.price.toLocaleString()} AUD</div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-slate-300 rounded-md bg-white">
                        <button type="button" onClick={() => updateQty(item.slug, item.qty - 1)} className="p-1 hover:bg-slate-100 text-slate-600" aria-label="Decrease">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold font-mono">{item.qty}</span>
                        <button type="button" onClick={() => updateQty(item.slug, item.qty + 1)} className="p-1 hover:bg-slate-100 text-slate-600" aria-label="Increase">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button type="button" onClick={() => removeFromCart(item.slug)} className="text-slate-400 hover:text-red-500 p-1" aria-label="Remove">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-orange-50 border border-orange-200/80 rounded-xl p-3.5 flex items-start gap-2.5">
                <Zap className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <div className="text-xs text-orange-950">
                  <div className="font-bold">Save 10% instantly with Crypto!</div>
                  <div className="text-orange-800 text-[11px] mt-0.5">
                    Pay with Bitcoin, USDT, or ETH to deduct <strong>${cryptoDiscountAmount.toLocaleString()} AUD</strong>.
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ── Checkout Form ── */
            <form onSubmit={handleDirectOrder} noValidate className="p-4 space-y-3">

              {/* Payment method */}
              <div>
                <span className="block text-[11px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Payment Method</span>
                <div className="grid grid-cols-3 gap-2">
                  {([
                    { id: 'crypto',        label: 'Crypto',    sub: '-10% OFF', color: 'orange' },
                    { id: 'payid',         label: 'PayID',     sub: 'Instant',  color: 'sky'    },
                    { id: 'bank-transfer', label: 'Bank EFT',  sub: 'Standard', color: 'sky'    },
                  ] as const).map(({ id, label, sub, color }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setPaymentMethod(id)}
                      className={`p-2 rounded-lg border text-center font-bold text-xs flex flex-col items-center gap-0.5 transition-colors ${
                        paymentMethod === id
                          ? color === 'orange'
                            ? 'border-orange-500 bg-orange-50 text-orange-700'
                            : 'border-sky-500 bg-sky-50 text-sky-700'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className={`text-[10px] font-bold ${color === 'orange' ? 'text-orange-600' : 'text-sky-600'}`}>{sub}</span>
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-3 space-y-3">

                <Field id="name" label="Full Name" required error={fieldErrors.name}>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setFieldErrors((p) => ({ ...p, name: '' })); }}
                    placeholder="e.g. Marcus Thornton"
                    className={inputClass(fieldErrors.name)}
                  />
                </Field>

                <div className="grid grid-cols-2 gap-2">
                  <Field id="email" label="Email" required error={fieldErrors.email}>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setFieldErrors((p) => ({ ...p, email: '' })); }}
                      placeholder="your@email.com"
                      className={inputClass(fieldErrors.email)}
                    />
                  </Field>
                  <Field id="phone" label="Phone" required error={fieldErrors.phone}>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => { setPhone(e.target.value); setFieldErrors((p) => ({ ...p, phone: '' })); }}
                      placeholder="0412 345 678"
                      className={inputClass(fieldErrors.phone)}
                    />
                  </Field>
                </div>

                <Field id="address" label="Street Address" required error={fieldErrors.address}>
                  <input
                    id="address"
                    type="text"
                    value={address}
                    onChange={(e) => { setAddress(e.target.value); setFieldErrors((p) => ({ ...p, address: '' })); }}
                    placeholder="e.g. 12 Rider Lane"
                    className={inputClass(fieldErrors.address)}
                  />
                </Field>

                <div className="grid grid-cols-6 gap-2">
                  <div className="col-span-3">
                    <Field id="suburb" label="Suburb / City" required error={fieldErrors.suburb}>
                      <input
                        id="suburb"
                        type="text"
                        value={suburb}
                        onChange={(e) => { setSuburb(e.target.value); setFieldErrors((p) => ({ ...p, suburb: '' })); }}
                        placeholder="Sydney"
                        className={inputClass(fieldErrors.suburb)}
                      />
                    </Field>
                  </div>
                  <div className="col-span-1">
                    <Field id="state" label="State" error={fieldErrors.stateAu}>
                      <select
                        id="state"
                        value={stateAu}
                        onChange={(e) => setStateAu(e.target.value)}
                        className="w-full px-2 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white"
                      >
                        <option value="">—</option>
                        {['NSW','VIC','QLD','WA','SA','TAS','NT','ACT'].map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <div className="col-span-2">
                    <Field id="postcode" label="Postcode" required error={fieldErrors.postcode}>
                      <input
                        id="postcode"
                        type="text"
                        inputMode="numeric"
                        maxLength={4}
                        value={postcode}
                        onChange={(e) => { setPostcode(e.target.value.replace(/\D/g, '')); setFieldErrors((p) => ({ ...p, postcode: '' })); }}
                        placeholder="2000"
                        className={inputClass(fieldErrors.postcode)}
                      />
                    </Field>
                  </div>
                </div>

                <Field id="notes" label="Short Note">
                  <textarea
                    id="notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Any questions or special requests? (optional)"
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none resize-none"
                  />
                </Field>
              </div>

              {/* Error banner */}
              {submitError && (
                <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg p-3 text-xs text-red-700">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Submit buttons */}
              <div className="space-y-2 pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-sky-600 hover:bg-sky-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-sky-600/20"
                >
                  {isSubmitting ? 'Placing Order…' : `Place Order · $${currentTotal.toLocaleString()} AUD`}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Order Instantly via WhatsApp
                </button>

                <button
                  type="button"
                  onClick={() => setCheckoutMode('cart')}
                  className="w-full py-2 text-slate-500 hover:text-slate-700 text-xs font-semibold text-center"
                >
                  ← Back to Cart
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Cart footer — only in cart mode with items */}
        {items.length > 0 && checkoutMode === 'cart' && (
          <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-3 shrink-0">
            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono font-semibold">${subtotal.toLocaleString()} AUD</span>
              </div>
              <div className="flex justify-between">
                <span>Freight (Australian Mainland)</span>
                <span className="font-mono font-semibold">
                  {isFreeShipping ? <span className="text-emerald-700 font-bold">FREE</span> : `$${shippingFee.toLocaleString()} AUD`}
                </span>
              </div>
              {cryptoDiscountAmount > 0 && (
                <div className="flex justify-between text-orange-600 font-bold">
                  <span>10% Crypto Discount</span>
                  <span className="font-mono">-${cryptoDiscountAmount.toLocaleString()} AUD</span>
                </div>
              )}
              <div className="border-t border-slate-200 pt-2 flex justify-between text-sm font-extrabold text-slate-900">
                <span>Total Due</span>
                <span className="font-mono text-sky-600">
                  ${totalWithCrypto.toLocaleString()} AUD
                  <span className="text-[11px] font-normal text-slate-500 ml-1">(Crypto)</span>
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                const url = waOrderLink({
                  ref: generateOrderRef(),
                  items: items.map((i) => ({ name: i.name, qty: i.qty, price: i.price })),
                  total: totalWithCrypto,
                  paymentMethod: 'Crypto / PayID / Bank Transfer',
                  customerName: 'Website Customer',
                  notes: 'Please contact me to confirm payment.',
                });
                window.open(url, '_blank');
              }}
              className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-extrabold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-transform active:scale-95"
            >
              <MessageSquare className="w-5 h-5" />
              Order via WhatsApp · Instant
            </button>

            <button
              type="button"
              onClick={() => setCheckoutMode('checkout')}
              className="w-full py-3 px-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <span>Fill Order Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
