import { NextResponse } from 'next/server';
import { checkAdminPasscode } from '@/lib/adminAuth';
import { getAllEnquiries } from '@/lib/enquiryStore';

export async function GET(request: Request) {
  if (!checkAdminPasscode(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const enquiries = await getAllEnquiries();
  return NextResponse.json({ enquiries });
}
