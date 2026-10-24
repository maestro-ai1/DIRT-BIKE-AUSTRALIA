import { NextRequest, NextResponse } from 'next/server';
import { CRYPTO } from '@/src/config/site';
import { getOrderById } from '@/lib/orderStore';

export const runtime = 'nodejs';

const REF_RE = /^[A-Z]{2}\d{4}$|^EDBA-\d{5}$/;

// The customer's own order reference is the token. Only crypto orders get the wallet page; PayID and bank orders are untouched.
// If the store cannot find the order (no database yet), the wallets are still returned and the total comes from the checkout link.
export async function GET(req: NextRequest) {
  const id = (req.nextUrl.searchParams.get('id') || '').toUpperCase();
  if (!REF_RE.test(id)) return NextResponse.json({ error: 'Invalid reference' }, { status: 400 });

  const order = await getOrderById(id).catch(() => undefined);
  if (order && order.paymentMethod !== 'crypto') {
    return NextResponse.json({ error: 'This order was not placed with crypto.' }, { status: 400 });
  }

  const fallbackTotal = Number(req.nextUrl.searchParams.get('total'));
  const amountDue = order ? order.total : Number.isFinite(fallbackTotal) && fallbackTotal > 0 ? fallbackTotal : 0;

  return NextResponse.json({
    orderNumber: id,
    amountDue,
    discount: order?.discount ?? 0,
    status: order?.status ?? 'pending',
    wallets: [
      { id: 'btc', label: 'Bitcoin', short: 'BTC', network: 'Bitcoin network', address: CRYPTO.bitcoinAddress, uri: `bitcoin:${CRYPTO.bitcoinAddress}` },
      { id: 'usdt-trc20', label: 'USDT', short: 'USDT', network: 'TRC20 (TRON network)', address: CRYPTO.usdtTrc20Address, uri: CRYPTO.usdtTrc20Address },
      { id: 'usdt-erc20', label: 'USDT', short: 'USDT', network: 'ERC20 (Ethereum network)', address: CRYPTO.usdtErc20Address, uri: CRYPTO.usdtErc20Address },
    ].filter((w) => w.address),
  });
}
