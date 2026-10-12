import { IMAGE_VARIANTS } from '@/src/config/image-variants';

// srcSet for an image that has a generated smaller variant (scripts/gen-image-variants.cjs). Returns undefined when no variant exists,
// so callers can spread it safely and the original <img src> keeps working.
export function srcSetFor(src: string): string | undefined {
  const v = IMAGE_VARIANTS[src];
  return v ? `${v.v} ${v.vw}w, ${src} ${v.w}w` : undefined;
}
