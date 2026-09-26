import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const accept = request.headers.get('accept') ?? '';

  // Markdown content negotiation — return llms.txt as text/markdown when agents request it
  // This satisfies the "Markdown for Agents" check on isitagentready.com and Cloudflare Agent standards
  if (accept.includes('text/markdown') && !request.nextUrl.pathname.startsWith('/llms')) {
    const markdownUrl = new URL('/llms.txt', request.url);
    return NextResponse.rewrite(markdownUrl, {
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Vary': 'Accept',
        'Cache-Control': 'public, max-age=3600',
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
