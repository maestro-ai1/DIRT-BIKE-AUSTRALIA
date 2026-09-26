import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const accept = request.headers.get('accept') ?? '';

  // Markdown content negotiation — rewrite agents to /api/llms-txt which serves text/markdown
  // Using rewrite (not redirect) so the response URL stays the same and Content-Type is controlled
  // by the API route handler (not overridden by Vercel CDN's static file MIME detection).
  if (accept.includes('text/markdown') && !request.nextUrl.pathname.startsWith('/api/llms-txt')) {
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
