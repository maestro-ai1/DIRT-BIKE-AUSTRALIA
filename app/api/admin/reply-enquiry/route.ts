import { NextResponse } from 'next/server';
import { checkAdminPasscode } from '@/lib/adminAuth';
import { updateEnquiryStatus } from '@/lib/enquiryStore';
import { sendMail } from '@/lib/mailer';
import { buildEmailHtml } from '@/lib/emailTemplate';
import { SITE, CONTACT } from '@/src/config/site';

export async function POST(request: Request) {
  if (!checkAdminPasscode(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { enquiryId, toEmail, toName, subject, replyMessage } = body;

    if (!toEmail || !replyMessage) {
      return NextResponse.json({ error: 'Missing recipient email or reply message' }, { status: 400 });
    }

    const emailHtml = buildEmailHtml({
      title: subject || `Response from ${SITE.name}`,
      preheader: `Thank you for contacting ${SITE.name}.`,
      rows: [
        { label: 'Recipient', value: toName ? `${toName} (${toEmail})` : toEmail },
        { label: 'Our Reply', value: replyMessage, block: true },
      ],
      cta: {
        label: 'Visit Our Website',
        url: `https://${SITE.domain}/`,
      },
    });

    const mailRes = await sendMail({
      to: toEmail,
      subject: subject || `Regarding your enquiry | ${SITE.name}`,
      html: emailHtml,
      text: replyMessage,
      replyTo: CONTACT.email,
    });

    if (enquiryId) {
      await updateEnquiryStatus(enquiryId, 'replied');
    }

    return NextResponse.json({ success: true, emailSent: mailRes.sent });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
