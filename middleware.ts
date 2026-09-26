import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const accept = request.headers.get('accept') ?? '';

  // Markdown content negotiation — rewrite to /api/llms-txt which serves text/markdown.
  // Applies to all non-static paths EXCEPT: .md files must be served as-is so agent tools
  // (e.g. isitagentready.com) see the correct H1 heading in /auth.md rather than llms.txt content.
  if (accept.includes('text/markdown') &&
      !request.nextUrl.pathname.startsWith('/api/llms-txt') &&
      !request.nextUrl.pathname.endsWith('.md')) {
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
