import { NextResponse } from 'next/server';
import { checkAdminPasscode } from '@/lib/adminAuth';
import { getAllOrders } from '@/lib/orderStore';

export async function GET(request: Request) {
  if (!checkAdminPasscode(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const orders = await getAllOrders();
  return NextResponse.json({ orders });
}
