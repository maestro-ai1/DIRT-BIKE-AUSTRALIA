import { NextResponse } from 'next/server';
import { saveEnquiry } from '@/lib/enquiryStore';
import { sendMail } from '@/lib/mailer';
import { buildEmailHtml } from '@/lib/emailTemplate';
import { CONTACT, SITE } from '@/src/config/site';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const saved = await saveEnquiry({
      type: 'contact',
      status: 'new',
      name,
      email,
      phone,
      subject,
      message,
    });

    // Send admin notification (graceful fallback if unconfigured)
    const adminEmailHtml = buildEmailHtml({
      title: `New Customer Enquiry from ${name}`,
      preheader: `Inquiry regarding ${subject || 'Electric Dirt Bikes'}`,
      rows: [
        { label: 'Customer Name', value: name },
        { label: 'Email Address', value: email },
        { label: 'Phone Number', value: phone || 'Not provided' },
        { label: 'Subject', value: subject || 'General Question' },
        { label: 'Message Content', value: message, block: true },
      ],
      cta: {
        label: 'Open Admin Portal',
        url: `https://${SITE.domain}/admin/enquiries/`,
      },
    });

    const mailResult = await sendMail({
      to: CONTACT.email,
      subject: `[Enquiry] ${subject || 'New Rider Question'} from ${name}`,
      html: adminEmailHtml,
      text: `New enquiry from ${name} (${email}):\n\n${message}`,
      replyTo: email,
    });
    if (!mailResult.sent) {
      console.error(`[contact] Email to admin failed:`, mailResult);
    }

    return NextResponse.json({ success: true, enquiryId: saved.id });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
