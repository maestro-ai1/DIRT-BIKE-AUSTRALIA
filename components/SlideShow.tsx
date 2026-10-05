'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

// Scroll-snap slideshow: children are <li> slides. Each slide's width comes from its own className (e.g. basis-1/3), so the caller decides how many show at once.
// Slides advance by one card every `intervalMs`, wrap at the end, pause on hover/focus, and never auto-move for people who prefer reduced motion.
export function SlideShow({
  children,
  label,
  intervalMs = 4500,
  gap = 'gap-3',
  id,
}: {
  children: React.ReactNode;
  label: string;
  intervalMs?: number;
  gap?: string;
  id?: string;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [hovered, setHovered] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  const step = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    const first = el?.firstElementChild as HTMLElement | null | undefined;
    if (!el || !first) return;
    const g = parseFloat(getComputedStyle(el).columnGap || '0') || 0;
    const distance = first.getBoundingClientRect().width + g;
    const max = el.scrollWidth - el.clientWidth;
    if (dir === 1 && el.scrollLeft >= max - 4) el.scrollTo({ left: 0, behavior: 'smooth' });
    else if (dir === -1 && el.scrollLeft <= 4) el.scrollTo({ left: max, behavior: 'smooth' });
    else el.scrollBy({ left: dir * distance, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (hovered || userPaused) return;
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => step(1), intervalMs);
    return () => clearInterval(timer);
  }, [hovered, userPaused, intervalMs, step]);

  const btn = 'w-8 h-8 rounded-lg bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 flex items-center justify-center';

  return (
    <div id={id}>
      <ul
        ref={trackRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        aria-label={label}
        className={`flex ${gap} overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
      >
        {children}
      </ul>
      <div className="mt-3 flex items-center justify-center gap-1.5">
        <button type="button" onClick={() => step(-1)} aria-label={`Previous: ${label}`} className={btn}>
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => setUserPaused((p) => !p)}
          aria-label={userPaused ? `Play ${label}` : `Pause ${label}`}
          className={btn}
        >
          {userPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
        </button>
        <button type="button" onClick={() => step(1)} aria-label={`Next: ${label}`} className={btn}>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
