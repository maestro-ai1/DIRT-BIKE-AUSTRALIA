// lib/mailer.ts — nodemailer lazy singleton (WebForge v10 standard)
import nodemailer from 'nodemailer';
import { FORMS } from '@/src/config/site';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let transporter: any = null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getTransporter(): any {
  if (transporter) return transporter;

  const host = process.env.EMAIL_SERVER_HOST;
  const port = parseInt(process.env.EMAIL_SERVER_PORT || '465', 10);
  const user = process.env.EMAIL_SERVER_USER;
  const pass = process.env.EMAIL_SERVER_PASSWORD;
  const secure = process.env.EMAIL_SERVER_SECURE === 'true' || port === 465;

  if (!host || !user || !pass) {
    return null;
  }

  try {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });
  } catch {
    transporter = null;
  }

  return transporter;
}

export async function sendMail(opts: {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  attachments?: Array<{ filename: string; content: Buffer; contentType: string }>;
}): Promise<{ sent: true } | { sent: false; reason: 'not-configured' | 'error'; error?: string }> {
  const mailClient = getTransporter();

  if (!mailClient) {
    // Unconfigured in dev or pending credentials — gracefully returns false without crashing
    return { sent: false, reason: 'not-configured' };
  }

  // Zoho SMTP only allows FROM = the authenticated user (or a configured alias).
  // Always derive from EMAIL_SERVER_USER so Zoho never rejects the envelope.
  const fromAddr =
    process.env.EMAIL_SERVER_USER ||
    process.env.EMAIL_FROM ||
    FORMS.smtpFrom ||
    'sales@electricdirtbikeaustralia.com.au';
  const from = `Electric Dirt Bike Australia <${fromAddr}>`;

  try {
    await mailClient.sendMail({
      from,
      to: opts.to,
      subject: opts.subject,
      html: opts.html,
      text: opts.text,
      replyTo: opts.replyTo,
      attachments: opts.attachments?.map((a) => ({
        filename: a.filename,
        content: a.content,
        contentType: a.contentType,
      })),
    });
    return { sent: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return { sent: false, reason: 'error', error: message };
  }
}
