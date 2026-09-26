import { NextRequest, NextResponse } from 'next/server';

// Agent identity registration endpoint (auth.md spec, anonymous flow)
// Electric Dirt Bike Australia is a public catalog — all agents are granted anonymous access.
export async function POST(request: NextRequest) {
  const now = Math.floor(Date.now() / 1000);

  return NextResponse.json(
    {
      identity_type: 'anonymous',
      iss: 'https://electricdirtbikeaustralia.com.au',
      iat: now,
      exp: now + 86400,
      scope: 'public',
      note: 'Electric Dirt Bike Australia is a fully public catalog. All resources are accessible without credentials.',
    },
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Accept',
        'Cache-Control': 'no-store',
      },
    }
  );
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Accept',
    },
  });
}
