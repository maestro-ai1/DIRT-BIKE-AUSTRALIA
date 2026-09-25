// lib/adminAuth.ts — Passcode gate check for Admin API routes
// ADMIN_PASSCODE is server-only — NEVER prefix with NEXT_PUBLIC_*

export function checkAdminPasscode(request: Request): boolean {
  const adminPasscode = process.env.ADMIN_PASSCODE || 'edba2026';
  const incomingHeader = request.headers.get('x-admin-passcode') || request.headers.get('X-Admin-Passcode');
  
  if (!incomingHeader) {
    return false;
  }

  return incomingHeader.trim() === adminPasscode.trim();
}
