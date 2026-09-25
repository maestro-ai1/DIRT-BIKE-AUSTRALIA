import { NextResponse } from 'next/server';
import { checkAdminPasscode } from '@/lib/adminAuth';
import { getOrderById, deleteOrder, updateOrderStatus } from '@/lib/orderStore';

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: Props) {
  if (!checkAdminPasscode(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const order = await getOrderById(id);
  if (!order) {
    return NextResponse.json({ error: 'Order not found' }, { status: 404 });
  }

  return NextResponse.json({ order });
}

export async function DELETE(request: Request, { params }: Props) {
  if (!checkAdminPasscode(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const success = await deleteOrder(id);
  return NextResponse.json({ success });
}

export async function PATCH(request: Request, { params }: Props) {
  if (!checkAdminPasscode(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const order = await updateOrderStatus(id, body.status);
  return NextResponse.json({ order });
}
