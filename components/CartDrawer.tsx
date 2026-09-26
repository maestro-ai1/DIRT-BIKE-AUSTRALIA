'use client';

import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck, Zap, MessageSquare, CreditCard, Check } from 'lucide-react';
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [suburbState, setSuburbState] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCartOpen) return null;

  const currentTotal = paymentMethod === 'crypto' ? totalWithCrypto : standardTotal;

  // Handle WhatsApp Checkout
  const handleWhatsAppCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || items.length === 0) return;

    const orderRef = generateOrderRef();

    // WebForge Rule: window.open() MUST be called synchronously before await to avoid popup blockers
    const waUrl = waOrderLink({
      ref: orderRef,
      items: items.map((i) => ({ name: i.name, qty: i.qty, price: i.price })),
      total: currentTotal,
      paymentMethod: paymentMethod === 'crypto' ? 'Crypto (-10% Applied)' : paymentMethod === 'payid' ? 'PayID' : 'Bank Transfer',
      customerName: name,
      customerPhone: phone,
      suburbState: suburbState,
      notes: notes,
    });

    window.open(waUrl, '_blank');

    // Fire and forget save to order store so admin portal sees it
    try {
      fetch('/api/order/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ref: orderRef,
          channel: 'whatsapp',
          customerName: name,
          email: email || `${phone.replace(/\D/g, '')}@whatsapp.customer`,
          phone: phone || 'WhatsApp',
          address: 'Via WhatsApp consultation',
          suburbState: suburbState || 'Australia',
          items: items.map((i) => ({ name: i.name, qty: i.qty, price: i.price, slug: i.slug })),
          subtotal,
          discount: paymentMethod === 'crypto' ? cryptoDiscountAmount : 0,
          shipping: shippingFee,
          total: currentTotal,
          paymentMethod,
          notes,
        }),
      });
    } catch {
      // non-blocking
    }

    clearCart();
    setIsCartOpen(false);
    router.push(`/thank-you-order/?ref=${orderRef}&method=${paymentMethod}&total=${currentTotal}`);
  };

  // Handle Direct Order Form Submit
  const handleDirectOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || items.length === 0) return;

    setIsSubmitting(true);
    const orderRef = generateOrderRef();

    try {
      const res = await fetch('/api/order/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ref: orderRef,
          channel: 'email',
          customerName: name,
          email: email || `${phone.replace(/\D/g, '')}@whatsapp.customer`,
          phone,
          address: 'Via online checkout',
          suburbState,
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
      }
    } catch {
      // fallback
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Cart Drawer"
      className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
    >
      {/* Click outside to close */}
      <div
        className="absolute inset-0"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md sm:max-w-lg bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base sm:text-lg text-slate-900">
              {checkoutMode === 'cart' ? 'Your Riding Gear' : 'Secure Checkout'}
            </span>
            <span className="text-xs font-mono font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full">
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

        {/* Free Shipping Progress Indicator */}
        <div className="px-4 py-3 bg-sky-50 border-b border-sky-100 text-xs text-sky-900">
          <div className="flex items-center justify-between mb-1.5 font-medium">
            <span className="flex items-center gap-1.5 font-bold">
              <Truck className="w-4 h-4 text-sky-600" />
              {isFreeShipping ? (
                <span className="text-emerald-700">Congratulations! You unlocked FREE Australia-wide freight.</span>
              ) : (
                <span>Add ${freeShippingDelta.toLocaleString()} AUD more for FREE Freight</span>
              )}
            </span>
            <span className="font-mono font-bold">{freeShippingPercent}%</span>
          </div>
          <div className="w-full h-1.5 bg-sky-200/80 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                isFreeShipping ? 'bg-emerald-500' : 'bg-sky-500'
              }`}
              style={{ width: `${freeShippingPercent}%` }}
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center p-6 text-slate-500">
              <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-3 text-slate-400">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-1">Your cart is empty</h3>
              <p className="text-xs text-slate-500 mb-6 max-w-xs">
                Explore our lineup of high-performance electric dirt bikes, Stark Varg motocross, and high-drain lithium battery upgrades.
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
            /* Items List */
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.slug}
                  className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200/80 rounded-xl"
                >
                  <div className="w-16 h-16 bg-white rounded-lg border border-slate-200 flex items-center justify-center p-1 shrink-0 overflow-hidden">
                    <img
                      src={item.image || '/images/hero_surron_trail_1790338185425.jpg'}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 leading-snug line-clamp-2">
                      {item.name}
                    </h4>
                    <div className="text-xs font-mono font-bold text-sky-600 mt-1">
                      ${item.price.toLocaleString()} AUD
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-slate-300 rounded-md bg-white">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${item.name}`}
                          onClick={() => updateQty(item.slug, item.qty - 1)}
                          className="p-1 hover:bg-slate-100 text-slate-600"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold font-mono">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          aria-label={`Increase quantity of ${item.name}`}
                          onClick={() => updateQty(item.slug, item.qty + 1)}
                          className="p-1 hover:bg-slate-100 text-slate-600"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        aria-label={`Remove ${item.name} from cart`}
                        onClick={() => removeFromCart(item.slug)}
                        className="text-slate-400 hover:text-red-500 p-1 text-xs"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* 10% Crypto Incentive Notice */}
              <div className="bg-orange-50 border border-orange-200/80 rounded-xl p-3.5 flex items-start gap-2.5">
                <Zap className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <div className="text-xs text-orange-950">
                  <div className="font-bold">Save 10% instantly with Crypto!</div>
                  <div className="text-orange-800 text-[11px] mt-0.5">
                    Pay with Bitcoin, USDT, or ETH to deduct <strong>${cryptoDiscountAmount.toLocaleString()} AUD</strong> from your order.
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Checkout Form View */
            <form onSubmit={handleDirectOrder} className="space-y-4 text-xs">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 block mb-2 uppercase tracking-wider text-[11px]">
                  Select Payment Method
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('crypto')}
                    className={`p-2 rounded-lg border text-center font-bold flex flex-col items-center gap-1 ${
                      paymentMethod === 'crypto'
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    <span className="text-[10px] text-orange-600 font-extrabold">-10% OFF</span>
                    <span>Crypto</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('payid')}
                    className={`p-2 rounded-lg border text-center font-bold flex flex-col items-center gap-1 ${
                      paymentMethod === 'payid'
                        ? 'border-sky-500 bg-sky-50 text-sky-700'
                        : 'border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    <span className="text-[10px] text-sky-600 font-extrabold">Instant</span>
                    <span>PayID</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank-transfer')}
                    className={`p-2 rounded-lg border text-center font-bold flex flex-col items-center gap-1 ${
                      paymentMethod === 'bank-transfer'
                        ? 'border-sky-500 bg-sky-50 text-sky-700'
                        : 'border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    <span className="text-[10px] text-slate-500 font-medium">Standard</span>
                    <span>Bank EFT</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Marcus Thornton"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Mobile / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0412 890 123"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Suburb & Postcode *
                  </label>
                  <input
                    type="text"
                    required
                    value={suburbState}
                    onChange={(e) => setSuburbState(e.target.value)}
                    placeholder="e.g. Sydney NSW 2000"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Email <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="for order confirmation email"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Notes <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any questions or special requests?"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                />
              </div>

              {/* Action Buttons in Checkout Mode */}
              <div className="space-y-2 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-sky-600/20"
                >
                  {isSubmitting ? 'Processing Order...' : `Confirm Order · $${currentTotal.toLocaleString()} AUD`}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant Order via WhatsApp Rider Support</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCheckoutMode('cart')}
                  className="w-full py-2 text-slate-500 hover:text-slate-800 text-xs font-semibold text-center block"
                >
                  ← Back to Cart
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer Summary (Active when in cart mode and has items) */}
        {items.length > 0 && checkoutMode === 'cart' && (
          <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-3">
            <div className="space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span className="font-mono font-semibold">${subtotal.toLocaleString()} AUD</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Freight (Australian Mainland)</span>
                <span className="font-mono font-semibold">
                  {isFreeShipping ? (
                    <span className="text-emerald-700 font-bold">FREE</span>
                  ) : (
                    `$${shippingFee.toLocaleString()} AUD`
                  )}
                </span>
              </div>
              {cryptoDiscountAmount > 0 && (
                <div className="flex items-center justify-between text-orange-600 font-bold">
                  <span>10% Crypto Discount</span>
                  <span className="font-mono">-${cryptoDiscountAmount.toLocaleString()} AUD</span>
                </div>
              )}
              <div className="border-t border-slate-200 pt-2 flex items-center justify-between text-sm sm:text-base font-extrabold text-slate-900">
                <span>Total Due</span>
                <span className="font-mono text-sky-600">
                  ${totalWithCrypto.toLocaleString()} AUD{' '}
                  <span className="text-[11px] font-normal text-slate-500">(Crypto)</span>
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                const ref = generateOrderRef();
                const url = waOrderLink({
                  ref,
                  items: items.map((i) => ({ name: i.name, qty: i.qty, price: i.price })),
                  total: totalWithCrypto,
                  paymentMethod: 'Crypto / PayID / Bank Transfer',
                  customerName: 'Website Customer',
                  notes: 'Please contact me to confirm my order and arrange payment.',
                });
                window.open(url, '_blank');
              }}
              className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-extrabold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-transform active:scale-95"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Order via WhatsApp · Instant</span>
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
