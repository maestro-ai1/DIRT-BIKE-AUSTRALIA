import { NextResponse } from 'next/server';
import { checkAdminPasscode } from '@/lib/adminAuth';
import { getSetting, setSetting } from '@/lib/orderStore';

// Invoice bank details live in Redis (passcode-protected), never in the public repository.
const KEY = 'invoice-bank';

export async function GET(request: Request) {
  if (!checkAdminPasscode(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const raw = await getSetting(KEY);
  return NextResponse.json({ bank: raw ? JSON.parse(raw) : null });
}

export async function POST(request: Request) {
  if (!checkAdminPasscode(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const b = await request.json().catch(() => null);
  const clean = (v: unknown, max = 60) => String(v ?? '').replace(/[<>]/g, '').trim().slice(0, max);
  const bank = {
    accountName: clean(b?.accountName),
    bsb: clean(b?.bsb, 7).replace(/D/g, ''),
    accountNumber: clean(b?.accountNumber, 12).replace(/D/g, ''),
    payId: clean(b?.payId),
    payIdType: clean(b?.payIdType, 20),
    bankName: clean(b?.bankName),
  };
  if (!bank.accountName || bank.bsb.length !== 6 || bank.accountNumber.length < 6) {
    return NextResponse.json({ error: 'Account name, a 6-digit BSB and an account number (6 to 12 digits) are required.' }, { status: 400 });
  }
  await setSetting(KEY, JSON.stringify(bank));
  return NextResponse.json({ ok: true, bank });
}
