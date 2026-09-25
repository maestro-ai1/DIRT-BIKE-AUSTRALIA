'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cartContext';
import { SITE, SHOP, REPLY, CONTACT } from '@/src/config/site';
import { waOrderLink } from '@/lib/whatsapp';
import {
  ShoppingBag,
  Zap,
  Truck,
  ShieldCheck,
  CheckCircle,
  MessageSquare,
  Wrench,
  Clock,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Share2,
  HelpCircle,
} from 'lucide-react';
import { getProductFaqs } from '@/lib/productFaqs';

interface Product {
  slug: string;
  name: string;
  brand: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  badge: string;
  shortDescription: string;
  description: string;
  specs?: Record<string, string>;
  images: string[];
  inStock: boolean;
}

export function ProductDetailClient({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = getProductFaqs(product);
  const cryptoPrice = Math.round(product.price * (1 - SHOP.cryptoDiscount / 100));
  const savings = product.price - cryptoPrice;

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleWhatsAppOrder = () => {
    const ref = `EDBA-${Math.floor(10000 + Math.random() * 89999)}`;
    const url = waOrderLink({
      ref,
      items: [{ name: product.name, qty, price: product.price }],
      total: product.price * qty,
      paymentMethod: 'Crypto / PayID / Bank Transfer',
      customerName: 'Website Rider',
      notes: `Inquiring about ${product.name} stock availability and delivery to my postcode.`,
    });
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-16">
      
      {/* Top Section: Media + Buy Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm">
        
        {/* Left Column: Image Showcase (Span 7) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
            <img
              src={product.images[selectedImage] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-1.5">
              <span className="px-3 py-1 rounded-md text-xs font-extrabold uppercase tracking-wider bg-orange-600 text-white shadow-md">
                {product.badge}
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-slate-900 text-white">
                {product.brand}
              </span>
            </div>
            {product.compareAtPrice && (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-emerald-600 text-white text-xs font-bold shadow-md">
                Save ${(product.compareAtPrice - product.price).toLocaleString()} AUD
              </div>
            )}
          </div>

          {/* Thumbnail row if multiple images exist */}
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === i ? 'border-sky-600 ring-2 ring-sky-600/30' : 'border-slate-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Quick Confidence Guarantee Strip */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100 text-center text-xs text-slate-600">
            <div className="p-3 bg-slate-50 rounded-xl">
              <Truck className="w-4 h-4 text-sky-600 mx-auto mb-1" />
              <div className="font-bold text-slate-900">Aus-Wide Freight</div>
              <div className="text-[11px] text-slate-400">Tailgate truck delivery</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
              <div className="font-bold text-slate-900">12-Mo Warranty</div>
              <div className="text-[11px] text-slate-400">NSW factory support</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <Wrench className="w-4 h-4 text-orange-600 mx-auto mb-1" />
              <div className="font-bold text-slate-900">Pre-Delivery PDI</div>
              <div className="text-[11px] text-slate-400">Inspected &amp; tested</div>
            </div>
          </div>
        </div>

        {/* Right Column: Pricing & Purchasing (Span 5) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                {product.brand} Off-Road Performance
              </span>
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share product page"
                className="text-slate-400 hover:text-slate-700 text-xs font-semibold flex items-center gap-1"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>

            {/* Exactly one H1 per page on product page */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {product.name}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Price Box with 10% Crypto Highlight */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-2xl sm:text-3xl font-mono font-extrabold text-slate-900">
                    ${product.price.toLocaleString()}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 ml-1.5">AUD</span>
                </div>
                {product.compareAtPrice && (
                  <span className="text-sm font-mono text-slate-400 line-through">
                    ${product.compareAtPrice.toLocaleString()} AUD
                  </span>
                )}
              </div>

              {/* 10% Alt-Payment Discount Pill */}
              <div className="bg-orange-100/80 border border-orange-200 text-orange-950 p-2.5 rounded-xl flex items-center justify-between text-xs font-medium">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-orange-600 fill-current shrink-0" />
                  <span>
                    Pay with <strong>Crypto (BTC / USDT)</strong>:
                  </span>
                </div>
                <div className="font-mono font-bold text-orange-700">
                  ${cryptoPrice.toLocaleString()} AUD{' '}
                  <span className="text-[10px] font-normal">(-${savings.toLocaleString()})</span>
                </div>
              </div>
            </div>

            {/* In Stock & Dispatch Status */}
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>In Stock in Southern Highlands NSW 2575 · Ready for Crate Dispatch</span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Quantity:
              </span>
              <div className="flex items-center border border-slate-300 rounded-xl bg-white">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                  className="px-3 py-1.5 text-sm hover:bg-slate-100 font-bold text-slate-600"
                >
                  -
                </button>
                <span className="px-3 py-1.5 text-sm font-mono font-bold">
                  {qty}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((prev) => prev + 1)}
                  className="px-3 py-1.5 text-sm hover:bg-slate-100 font-bold text-slate-600"
                >
                  +
                </button>
              </div>
            </div>

          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => addToCart({ slug: product.slug, name: product.name, price: product.price, image: product.images[0], category: product.category }, qty)}
              className="w-full py-4 px-6 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-sky-600/30 transition-transform active:scale-95"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Add to Cart · ${(product.price * qty).toLocaleString()} AUD</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppOrder}
              className="w-full py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire &amp; Order via WhatsApp (Instant Support)</span>
            </button>
          </div>

        </div>

      </div>

      {/* Specifications & Detailed Breakdown */}
      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-3">
            Technical Specifications &amp; Features
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            {product.description}
          </p>
        </div>

        {product.specs && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specs).map(([key, val]) => (
              <div
                key={key}
                className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm"
              >
                <span className="font-semibold text-slate-500 capitalize">
                  {key.replace(/([A-Z])/g, ' $1')}
                </span>
                <span className="font-bold text-slate-900 text-right">
                  {val}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Australian Compliance Notice */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
          <strong className="text-slate-900">Australian Off-Road Use Advisory:</strong> This bike is supplied in unrestricted high-power competition configuration for off-road closed-course tracks and private property across Australia. Riders must verify local state regulations regarding off-road trail permits and registration requirements.
        </div>
      </div>

      {/* High-Converting 5 FAQ Section with High Search-Volume Keywords */}
      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
          <div>
            <div className="flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-wider mb-1">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {product.name} — Rider FAQs &amp; Key Info
            </h2>
          </div>
          <span className="text-xs font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/80 self-start sm:self-auto">
            5 Essential Questions Answered
          </span>
        </div>

        <div className="divide-y divide-slate-100 space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="pt-2">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between py-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg group"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors pr-4">
                    {idx + 1}. {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 bg-sky-50 text-sky-600' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="pb-4 pt-1 pr-6 text-xs sm:text-sm text-slate-600 leading-relaxed animate-in fade-in duration-200">
                    <p className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>Have an unanswered technical question about the {product.name}?</span>
          <button
            type="button"
            onClick={handleWhatsAppOrder}
            className="font-bold text-sky-600 hover:text-sky-800 transition-colors inline-flex items-center gap-1"
          >
            <span>Ask our Mittagong Workshop Technicians via WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Related Products Recommendation */}
      {related.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Complementary Dirt Bikes &amp; Accessories
            </h3>
            <Link href="/shop/" className="text-xs font-bold text-sky-600 hover:text-sky-800">
              Browse All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((item) => (
              <div
                key={item.slug}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-600 text-white">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors line-clamp-1 mb-1">
                      <Link href={`/shop/${item.slug}/`}>
                        {item.name}
                      </Link>
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {item.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-mono font-bold text-sm text-slate-900">
                      ${item.price.toLocaleString()} AUD
                    </span>
                    <Link
                      href={`/shop/${item.slug}/`}
                      className="px-3 py-1.5 bg-slate-900 hover:bg-sky-600 text-white rounded-lg text-xs font-bold transition-colors"
                    >
                      View Specs
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
