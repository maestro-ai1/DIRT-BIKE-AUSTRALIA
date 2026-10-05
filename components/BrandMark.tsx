import React from 'react';
import fs from 'fs';
import path from 'path';

// Brand icon for the home brand tiles. If an official logo file exists at public/images/brands/<slug>.(svg|png|webp|jpg) it is shown;
// otherwise a clean monogram badge is drawn so every tile has the same shape. Drop real logo files into that folder to upgrade a brand.
const LOGO_EXT = ['svg', 'png', 'webp', 'jpg'];
const BADGE_COLOURS = ['bg-slate-800', 'bg-sky-800', 'bg-orange-700', 'bg-emerald-800', 'bg-purple-800', 'bg-rose-800'];

function logoPath(slug: string): string | null {
  for (const ext of LOGO_EXT) {
    try {
      if (fs.existsSync(path.join(process.cwd(), 'public', 'images', 'brands', `${slug}.${ext}`))) return `/images/brands/${slug}.${ext}`;
    } catch {
      /* ignore */
    }
  }
  return null;
}

function initials(name: string): string {
  const words = name.replace(/\(.*?\)/g, '').trim().split(/[\s-]+/).filter(Boolean);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  const w = words[0] || '?';
  return (w.length <= 3 && w === w.toUpperCase() ? w : w.slice(0, 2)).toUpperCase();
}

export function BrandMark({ name, slug, index }: { name: string; slug: string; index: number }) {
  const logo = logoPath(slug);
  if (logo) {
    return <img src={logo} alt={`${name} logo`} width={96} height={96} loading="lazy" decoding="async" className="w-12 h-12 object-contain" />;
  }
  return (
    <span
      aria-hidden="true"
      className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-extrabold text-base tracking-tight shadow-sm ${BADGE_COLOURS[index % BADGE_COLOURS.length]}`}
    >
      {initials(name)}
    </span>
  );
}
