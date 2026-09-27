import { NextResponse } from 'next/server';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
};

export async function POST() {
  return NextResponse.json(
    {
      status: 'not_required',
      note: 'Electric Dirt Bike Australia is a fully public catalog. Anonymous identities need no claim; there are no accounts to link.',
    },
    { status: 200, headers: { ...CORS, 'Cache-Control': 'no-store' } }
  );
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}
