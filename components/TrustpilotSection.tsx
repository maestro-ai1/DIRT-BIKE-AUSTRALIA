'use client';

import React, { useState } from 'react';
import { Star, CheckCircle, ShieldCheck, ThumbsUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS } from '@/src/config/site';

const REVIEWS_PER_PAGE = 6;

export function TrustpilotSection() {
  const [filter, setFilter] = useState<'all' | '5star' | 'verified'>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredReviews = REVIEWS.filter((r) => {
    if (filter === '5star') return r.rating === 5;
    if (filter === 'verified') return r.verified;
    return true;
  });

  const totalPages = Math.ceil(filteredReviews.length / REVIEWS_PER_PAGE);
  const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE;
  const displayedReviews = filteredReviews.slice(startIndex, startIndex + REVIEWS_PER_PAGE);

  const handleFilterChange = (newFilter: 'all' | '5star' | 'verified') => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200/80" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hidden heading maintains correct H1→H2→H3 heading hierarchy for screen readers */}
        <h2 className="sr-only">Customer Reviews</h2>

        {/* Header Block with Trustpilot Green Accents */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">

            {/* Left: Overall Score */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-wider uppercase text-slate-500">
                  Verified Rider Feedback
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  August 2025 – Present ({REVIEWS.length} Reviews)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Excellent
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 sm:w-7 sm:h-7 bg-[#00b67a] flex items-center justify-center rounded-sm text-white shadow-xs"
                    >
                      <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600">
                Rated <strong className="text-slate-900 font-bold">4.9 / 5</strong> based on <strong className="text-slate-900 font-bold">{REVIEWS.length} Australian rider reviews</strong> on Trustpilot.
              </p>
            </div>

            {/* Middle: Rating Bar Metrics */}
            <div className="w-full lg:w-64 space-y-1 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-12 font-medium">5-Star</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00b67a] rounded-full w-[96%]" />
                </div>
                <span className="w-8 text-right font-mono font-semibold">96%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 font-medium">4-Star</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00b67a] rounded-full w-[4%]" />
                </div>
                <span className="w-8 text-right font-mono font-semibold">4%</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span className="w-12 font-medium">3-Star</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-300 rounded-full w-[0%]" />
                </div>
                <span className="w-8 text-right font-mono font-semibold">0%</span>
              </div>
            </div>

            {/* Right: Trustpilot Badge */}
            <div className="flex flex-col items-start lg:items-end justify-center border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100">
              <div className="flex items-center gap-2 text-slate-800 font-extrabold text-lg sm:text-xl tracking-tight">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-[#00b67a] text-[#00b67a]" />
                <span>Trustpilot</span>
              </div>
              <span className="text-[11px] text-slate-500 mt-0.5">
                Independent Third-Party Verification
              </span>
            </div>

          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 pt-5 mt-5 border-t border-slate-100 overflow-x-auto">
            <button
              type="button"
              onClick={() => handleFilterChange('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              All Reviews ({REVIEWS.length})
            </button>
            <button
              type="button"
              onClick={() => handleFilterChange('5star')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === '5star'
                  ? 'bg-[#006644] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              5-Star Only
            </button>
            <button
              type="button"
              onClick={() => handleFilterChange('verified')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'verified'
                  ? 'bg-sky-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              Verified Purchases
            </button>
          </div>
        </div>

        {/* Reviews Grid — Exactly 6 Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Top Row: Stars + Date */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 bg-[#00b67a] flex items-center justify-center rounded-[2px] text-white"
                      >
                        <Star className="w-2.5 h-2.5 fill-current" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {rev.date}
                  </span>
                </div>

                {/* Review Title */}
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug line-clamp-1">
                  &ldquo;{rev.title}&rdquo;
                </h3>

                {/* Comment Body */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-4">
                  {rev.comment}
                </p>
              </div>

              {/* Author & Verification Card Footer */}
              <div className="pt-3.5 border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        {rev.author}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {rev.location}
                      </div>
                    </div>
                  </div>

                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      Verified
                    </span>
                  )}
                </div>

                {/* Purchased product pill */}
                <div className="text-[10px] text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md font-medium truncate">
                  Purchased: {rev.productBought}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Compact Navigation Bar for 6-Box Grid */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-between bg-white px-4 py-3 rounded-2xl border border-slate-200 shadow-xs">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous 6</span>
            </button>

            <div className="text-xs font-semibold text-slate-600">
              Page <span className="text-slate-900 font-bold">{currentPage}</span> of{' '}
              <span className="text-slate-900 font-bold">{totalPages}</span> ({filteredReviews.length} total reviews)
            </div>

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
            >
              <span>Next 6</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Bottom Guarantee Banner */}
        <div className="mt-10 bg-white rounded-xl p-5 sm:p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ThumbsUp className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">
                Have you recently purchased from Electric Dirt Bike Australia?
              </div>
              <div className="text-xs text-slate-500">
                Check your inbox for your post-delivery invitation to leave an authentic review on Trustpilot.
              </div>
            </div>
          </div>
          <a
            href="https://www.trustpilot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold text-slate-900 bg-[#00b67a] hover:bg-[#009e6a] rounded-lg transition-colors shrink-0 shadow-xs"
          >
            Visit Our Trustpilot Page
          </a>
        </div>

      </div>
    </section>
  );
}
