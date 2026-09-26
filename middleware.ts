import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const accept = request.headers.get('accept') ?? '';

  // Markdown content negotiation for /llms.txt — rewrite to /api/llms-txt which serves text/markdown.
  // Only applies to /llms.txt specifically; other .md files (auth.md etc.) must be served as-is
  // so agent tools like isitagentready.com see the correct H1 heading in those files.
  if (accept.includes('text/markdown') && request.nextUrl.pathname === '/llms.txt') {
    const rewriteUrl = new URL('/api/llms-txt', request.url);
    return NextResponse.rewrite(rewriteUrl, {
      headers: {
        'Vary': 'Accept',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  // Apply to all page routes — skip static files, API routes, and Next.js internals
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|png|gif|svg|webp|ico|txt|xml|json|css|js|woff|woff2)).*)',
  ],
};
