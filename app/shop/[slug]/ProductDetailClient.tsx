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
  Share2,
  HelpCircle,
} from 'lucide-react';
import { getProductFaqs, getProductTags } from '@/lib/productFaqs';
import { FaqItem } from '@/components/FaqItem';
import { ProductCard } from '@/components/ProductCard';
import { PRODUCT_GRID, toCard } from '@/lib/productCard';

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
  // Present on products supplied by Ampd Bros: their own warranty, shipping and legality wording.
  source?: string;
  warranty?: string;
  shipping?: string;
  legalNote?: string;
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

  const faqs = getProductFaqs(product);
  const tags = getProductTags(product);
  const amp = product.source === 'ampd-bros';
  const warrantyShort = amp ? (product.warranty?.match(/^(\d+-year)/i)?.[1] ?? 'Supplier') + ' Warranty' : '12-Mo Warranty';
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
          <div className="relative aspect-[4/3] bg-white rounded-2xl overflow-hidden border border-slate-200">
            <img
              src={product.images[selectedImage] || product.images[0]}
              alt={product.name}
              width={1200}
              height={900}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              style={{ height: '100%' }}
              className="absolute inset-0 w-full h-full object-contain object-center"
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
                  <img src={img} alt={`${product.name} view ${i + 1}`} width={320} height={240} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Quick Confidence Guarantee Strip */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100 text-center text-xs text-slate-600">
            <div className="p-3 bg-slate-50 rounded-xl">
              <Truck className="w-4 h-4 text-sky-600 mx-auto mb-1" />
              <div className="font-bold text-slate-900">Aus-Wide Freight</div>
              <div className="text-[11px] text-slate-400">{amp ? 'Toll Ipec, signature required' : 'Tailgate truck delivery'}</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
              <div className="font-bold text-slate-900">{warrantyShort}</div>
              <div className="text-[11px] text-slate-400">{amp ? 'Ampd Bros nationwide' : 'NSW factory support'}</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <Wrench className="w-4 h-4 text-orange-600 mx-auto mb-1" />
              <div className="font-bold text-slate-900">{amp ? 'Local Support' : 'Pre-Delivery PDI'}</div>
              <div className="text-[11px] text-slate-400">{amp ? 'Ask us on WhatsApp' : 'Inspected & tested'}</div>
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
                  <span className="text-xs font-semibold text-slate-600 ml-1.5">AUD</span>
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
              <span>{amp ? 'In Stock · Supplied by Ampd Bros from the Gold Coast, QLD' : 'In Stock in Southern Highlands NSW 2575 · Ready for Crate Dispatch'}</span>
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
                <span className="font-semibold text-slate-600 capitalize">
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
          {amp ? (
            <>
              <strong className="text-slate-900">Use and Compliance:</strong> {product.legalNote} Riders must verify local state regulations.{' '}
              <strong className="text-slate-900">Shipping:</strong> {product.shipping}
            </>
          ) : (
            <>
              <strong className="text-slate-900">Australian Off-Road Use Advisory:</strong> This bike is supplied in unrestricted high-power competition configuration for off-road closed-course tracks and private property across Australia. Riders must verify local state regulations regarding off-road trail permits and registration requirements.
            </>
          )}
        </div>
      </div>

      {/* Product tags: 15+ keyword tags per product (Semrush commercial + transactional terms) */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4" aria-labelledby="product-tags">
        <h2 id="product-tags" className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
          Popular Searches for the {product.name.replace(/\s*\([^)]*\)\s*/g, ' ').trim()}
        </h2>
        <ul className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <li key={t.label}>
              {t.href ? (
                <Link href={t.href} className="inline-block px-3 py-1.5 rounded-full bg-slate-100 hover:bg-sky-100 hover:text-sky-800 text-xs font-semibold text-slate-700 border border-slate-200 transition-colors">
                  {t.label}
                </Link>
              ) : (
                <span className="inline-block px-3 py-1.5 rounded-full bg-slate-50 text-xs font-semibold text-slate-600 border border-slate-200">
                  {t.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Product FAQ: five keyword-led questions per product, answers built from the product's own specs and site policy */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-300 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-sky-800 font-bold text-[11px] uppercase tracking-wider">
          <HelpCircle className="w-4 h-4" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight -mt-2">
          {product.name} — Rider FAQs &amp; Key Info
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} question={faq.question}>
              {faq.answer}
            </FaqItem>
          ))}
        </div>

        <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
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
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Complementary Dirt Bikes &amp; Accessories
            </h2>
            <Link href="/shop/" className="text-xs font-bold text-sky-600 hover:text-sky-800">
              Browse All →
            </Link>
          </div>

          <div className={PRODUCT_GRID}>
            {related.map((item) => (
              <ProductCard key={item.slug} product={toCard(item)} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
