import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const accept = request.headers.get('accept') ?? '';

  // Markdown content negotiation — redirect agents to /llms.txt (served as text/markdown via next.config.ts)
  // This satisfies the "Markdown for Agents" check on isitagentready.com and Cloudflare Agent standards
  if (accept.includes('text/markdown') && !request.nextUrl.pathname.startsWith('/llms')) {
    const markdownUrl = new URL('/llms.txt', request.url);
    return NextResponse.redirect(markdownUrl, {
      status: 302,
      headers: {
        'Vary': 'Accept',
        'Cache-Control': 'no-store',
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
