import { NextResponse } from 'next/server';
import { checkAdminPasscode } from '@/lib/adminAuth';
import { getEnquiryById, deleteEnquiry, updateEnquiryStatus } from '@/lib/enquiryStore';

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: Props) {
  if (!checkAdminPasscode(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const enquiry = await getEnquiryById(id);
  if (!enquiry) {
    return NextResponse.json({ error: 'Enquiry not found' }, { status: 404 });
  }

  return NextResponse.json({ enquiry });
}

export async function DELETE(request: Request, { params }: Props) {
  if (!checkAdminPasscode(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const success = await deleteEnquiry(id);
  return NextResponse.json({ success });
}

export async function PATCH(request: Request, { params }: Props) {
  if (!checkAdminPasscode(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();
  const enquiry = await updateEnquiryStatus(id, body.status);
  return NextResponse.json({ enquiry });
}
