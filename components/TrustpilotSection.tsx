import React from 'react';
import { Star, CheckCircle, ShieldCheck } from 'lucide-react';
import { REVIEWS } from '@/src/config/site';
import { SlideShow } from '@/components/SlideShow';

// Compact reviews strip: three small cards in view on desktop (two on tablet, one on mobile) that slide along automatically.
export function TrustpilotSection() {
  return (
    <section className="py-8 bg-slate-300/70 border-y border-slate-400/50" id="reviews" aria-labelledby="home-reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
          <h2 id="home-reviews" className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Customer Reviews
          </h2>
          <div className="flex items-center gap-0.5" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center rounded-sm text-white">
                <Star className="w-3 h-3 fill-current" />
              </span>
            ))}
          </div>
          <span className="text-xs text-slate-800">
            <strong className="font-bold">Excellent · 4.9 / 5</strong> from {REVIEWS.length} Australian rider reviews
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            August 2025 – Present
          </span>
        </div>

        <SlideShow label="Customer reviews slideshow" intervalMs={5000}>
          {REVIEWS.map((rev) => (
            <li key={rev.id} className="snap-start shrink-0 basis-full md:basis-[calc(50%-0.375rem)] lg:basis-[calc(33.333%-0.5rem)]">
              <article className="h-full bg-white rounded-xl border border-slate-300 shadow-sm p-4 flex flex-col">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-0.5" aria-label={`${rev.rating} out of 5 stars`}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <span key={i} className="w-3.5 h-3.5 bg-[#00b67a] flex items-center justify-center rounded-[2px] text-white">
                        <Star className="w-2 h-2 fill-current" />
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-600 font-medium">{rev.date}</span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-1">&ldquo;{rev.title}&rdquo;</h3>
                <p className="mt-1 text-xs text-slate-700 leading-relaxed line-clamp-3 min-h-[3.6rem] mb-3">{rev.comment}</p>

                <div className="mt-auto pt-2.5 border-t border-slate-200 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center shrink-0">
                      {rev.author.charAt(0)}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold text-slate-900 truncate">{rev.author}</span>
                      <span className="block text-[10px] text-slate-600 truncate">{rev.location}</span>
                    </span>
                  </div>
                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 shrink-0">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>
              </article>
            </li>
          ))}
        </SlideShow>

        <p className="mt-3 text-[11px] text-slate-700 text-center sm:text-left">
          Recently purchased? Check your inbox for your post-delivery invitation to leave a review on{' '}
          <a href="https://www.trustpilot.com" target="_blank" rel="noopener noreferrer" className="font-bold text-sky-800 hover:underline">
            Trustpilot
          </a>
          .
        </p>
      </div>
    </section>
  );
}
