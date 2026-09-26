'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Zap, ShieldCheck, Truck } from 'lucide-react';

const SLIDES = [
  {
    image: '/images/hero-1-electric-dirt-bike-australia.avif',
    imageType: 'image/avif',
    alt: 'Electric dirt bike rider tearing up Australian bush track — Sur-Ron Light Bee X electric off-road bike with instant torque delivery',
    tag: 'AUSTRALIA\'S #1 ELECTRIC DIRT BIKE DEALER',
    isH1: true,
    title: 'Electric Dirt Bike Australia | Brand New Electric Bike | Powerful Electric Dirt bikes',
    subtitle: 'Engineered for Australian bush tracks, steep climbs, and extreme enduro terrain. Genuine stock, factory warranty, and ready for immediate nationwide dispatch.',
    ctaText: 'Explore Dirt Bikes',
    ctaLink: '/shop/',
    badge: 'Sur-Ron · Talaria · Stark Varg',
  },
  {
    image: '/images/hero-2-sur-ron-electric-off-road-australia.jpg',
    imageType: 'image/jpeg',
    alt: 'Sur-Ron Storm Bee electric dirt bike flying over Australian trail — high-performance electric off-road bike with 74V battery and 6500W peak power',
    tag: 'REVOLUTIONARY MOTOCROSS PERFORMANCE',
    isH1: false,
    title: 'Stark Varg EX 80HP · Instant 938Nm Rear-Wheel Torque',
    subtitle: 'Leaving 450cc four-stroke combustion bikes behind. Water-cooled motor, KYB closed-cartridge suspension, and custom smartphone power curve tuning.',
    ctaText: 'View Stark Varg MX',
    ctaLink: '/shop/stark-varg-ex-80hp/',
    badge: 'Pro Competition MX',
  },
  {
    image: '/images/hero-3-talaria-electric-enduro-australia.jpg',
    imageType: 'image/jpeg',
    alt: 'Talaria Sting R electric enduro bike conquering rocky Australian terrain — 8kW oil-bath gearbox, 45Ah high-discharge battery, built for extreme off-road',
    tag: 'TALARIA STING R & HIGH-OUTPUT BATTERIES',
    isH1: false,
    title: 'Factory 8kW Drivetrain with Oil-Bath Gearbox',
    subtitle: 'Zero belt maintenance, 45Ah high-discharge cells, and Australian mountain-tested reliability. Save 10% instantly when paying via Crypto or PayID.',
    ctaText: 'Shop Talaria & Accessories',
    ctaLink: '/accessories/',
    badge: '10% Crypto Discount',
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] flex items-center bg-slate-950 overflow-hidden">
      {/* Background Slides — real <img> elements so browser preload scanner can discover and prioritise LCP image */}
      {SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <img
            src={s.image}
            alt={s.alt}
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
            loading={idx === 0 ? 'eager' : 'lazy'}
            fetchPriority={idx === 0 ? 'high' : 'low'}
          />
          {/* Gradient scrim — left reads clearly, right image shows bright */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl text-white">
          
          {/* Tag & Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-400 text-xs font-bold tracking-wider uppercase mb-5 backdrop-blur-sm">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>{slide.tag}</span>
            <span className="text-slate-400">·</span>
            <span className="text-orange-400 font-semibold">{slide.badge}</span>
          </div>

          {/* Heading — Exactly one H1 on slide 1; styled div on others */}
          {slide.isH1 ? (
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-5 drop-shadow-sm">
              {slide.title}
            </h1>
          ) : (
            <div className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-5 drop-shadow-sm">
              {slide.title}
            </div>
          )}

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-xl font-normal">
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={slide.ctaLink}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-700 hover:bg-sky-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-sky-700/40 hover:shadow-sky-600/40 transition-all active:scale-95"
            >
              <span>{slide.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/shop/?discount=crypto"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600/90 hover:bg-orange-500 text-white font-bold text-sm tracking-wide border border-orange-400/40 hover:border-orange-300 transition-all active:scale-95 shadow-md shadow-orange-950/40"
            >
              <span>10% Crypto Discount</span>
            </Link>

            <Link
              href="/about/"
              className="inline-flex items-center justify-center px-4 py-3.5 rounded-xl text-slate-300 hover:text-white text-xs font-semibold hover:bg-white/10 transition-colors"
            >
              NSW 2575 Facility →
            </Link>
          </div>

          {/* Micro Trust Indicators */}
          <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-sky-400" />
              <span>Free Aus Freight &gt; $1,500</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>12-Month Factory Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-400 font-bold">10% Off</span>
              <span>with Bitcoin / PayID</span>
            </div>
          </div>

        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
        <button
          type="button"
          aria-label="Previous Hero Slide"
          onClick={() => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
          className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-slate-900/80 hover:bg-sky-600 text-white border border-slate-700 transition-colors backdrop-blur-md"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        
        {/* Slide Dots */}
        <div className="flex items-center gap-1.5 px-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <span className={`block rounded-full transition-all ${
                i === current ? 'w-6 h-2 bg-sky-400' : 'w-2 h-2 bg-slate-600 hover:bg-slate-400'
              }`} />
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label="Next Hero Slide"
          onClick={() => setCurrent((prev) => (prev + 1) % SLIDES.length)}
          className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-slate-900/80 hover:bg-sky-600 text-white border border-slate-700 transition-colors backdrop-blur-md"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
