// lib/adminAuth.ts — Passcode gate check for Admin API routes
// ADMIN_PASSCODE is server-only — NEVER prefix with NEXT_PUBLIC_*
import { timingSafeEqual } from 'crypto';

export function checkAdminPasscode(request: Request): boolean {
  const adminPasscode = process.env.ADMIN_PASSCODE || 'edba2026';
  const incoming = request.headers.get('x-admin-passcode') || request.headers.get('X-Admin-Passcode');

  if (!incoming) return false;

  const a = Buffer.from(incoming.trim());
  const b = Buffer.from(adminPasscode.trim());

  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
