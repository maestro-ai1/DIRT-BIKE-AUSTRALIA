import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mailer';
import { CONTACT, SITE } from '@/src/config/site';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('screenshot') as File | null;
    const ref = (formData.get('ref') as string) || 'Unknown';

    if (!file || file.size === 0) {
      return NextResponse.json({ error: 'No screenshot file provided.' }, { status: 400 });
    }

    if (file.size > 8 * 1024 * 1024) {
      return NextResponse.json({ error: 'File too large. Max 8 MB.' }, { status: 413 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const contentType = file.type || 'image/jpeg';

    const result = await sendMail({
      to: CONTACT.email,
      subject: `[Payment Proof] Order ${ref} — Screenshot Upload`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#fff;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;">
          <div style="background:#0f172a;padding:20px 24px;border-bottom:3px solid #0284c7;">
            <div style="color:#fff;font-weight:800;font-size:18px;">${SITE.name}</div>
            <div style="color:#94a3b8;font-size:12px;margin-top:2px;">Payment Proof Received</div>
          </div>
          <div style="padding:24px;">
            <h2 style="margin:0 0 12px;color:#0f172a;">Payment Screenshot for Order ${ref}</h2>
            <p style="color:#475569;font-size:14px;">A customer has uploaded a payment screenshot for order <strong>${ref}</strong>. Please find the image attached.</p>
            <div style="margin-top:16px;padding:12px 16px;background:#f0f9ff;border-left:4px solid #0284c7;border-radius:6px;">
              <div style="font-size:13px;color:#0f172a;font-weight:700;">Order Reference: ${ref}</div>
              <div style="font-size:12px;color:#475569;margin-top:4px;">Action: Log in to the admin portal and mark as Paid.</div>
            </div>
            <a href="https://${CONTACT.email.split('@')[1]}/admin/orders/" style="display:inline-block;margin-top:16px;padding:10px 20px;background:#0284c7;color:#fff;text-decoration:none;font-weight:700;font-size:13px;border-radius:8px;">Open Admin Portal</a>
          </div>
        </div>`,
      text: `Payment proof uploaded for order ${ref}. Screenshot attached.`,
      attachments: [
        {
          filename: `payment-proof-${ref}.${ext}`,
          content: buffer,
          contentType,
        },
      ],
    });

    if (!result.sent && result.reason === 'not-configured') {
      // SMTP not configured — still return 200 so the customer sees success
      console.warn('[confirm] SMTP not configured — screenshot not emailed for order', ref);
      return NextResponse.json({ success: true, warned: 'smtp-not-configured' });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('[confirm] error:', message);
    return NextResponse.json({ error: 'Upload failed. Please send your screenshot directly via email.' }, { status: 500 });
  }
}
