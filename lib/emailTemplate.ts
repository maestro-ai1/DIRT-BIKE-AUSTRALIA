// lib/emailTemplate.ts — Branded HTML email builder (Mandatory LIGHT shell)
import { SITE, REPLY } from '@/src/config/site';

export interface EmailRow {
  label: string;
  value?: string;
  html?: string;
  mono?: boolean;
  heading?: boolean;
  highlight?: boolean;
  block?: boolean;
}

export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export interface CtaButton {
  label: string;
  url: string;
  style?: 'primary' | 'green' | 'dark';
}

export function buildEmailHtml(opts: {
  title: string;
  preheader?: string;
  intro?: string;
  refBadge?: string;
  rows: EmailRow[];
  afterRows?: string;
  cta?: { label: string; url: string };
  secondaryCta?: { label: string; url: string };
  ctaButtons?: CtaButton[];
  footer?: string;
  primaryColor?: string;
}): string {
  const accent = opts.primaryColor || REPLY.brand.primary;
  const headerDark = REPLY.brand.headerDark;
  const preheaderHtml = opts.preheader
    ? `<span style="display:none!important;font-size:1px;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;">${escapeHtml(opts.preheader)}</span>`
    : '';

  const rowsHtml = opts.rows
    .map((row) => {
      if (row.heading) {
        return `
        <tr>
          <td colspan="2" style="padding:16px 0 6px 0;border-bottom:2px solid ${accent};font-size:12px;font-weight:700;color:${accent};letter-spacing:1px;text-transform:uppercase;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
            ${escapeHtml(row.label)}
          </td>
        </tr>`;
      }

      if (row.highlight) {
        return `
        <tr style="border-top:2px solid ${accent};border-bottom:2px solid ${accent};background:#f8fafc;">
          <td style="padding:14px 8px;font-size:14px;font-weight:700;color:#1e293b;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
            ${escapeHtml(row.label)}
          </td>
          <td align="right" style="padding:14px 8px;font-size:22px;font-weight:800;color:${accent};font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
            ${row.html || (row.value ? escapeHtml(row.value) : '')}
          </td>
        </tr>`;
      }

      if (row.block) {
        const blockContent = row.html || (row.value ? escapeHtml(row.value).replace(/\n/g, '<br>') : '');
        return `
        <tr>
          <td colspan="2" style="padding:12px 0;font-size:14px;color:#334155;line-height:1.6;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
            <div style="font-weight:600;color:#0f172a;margin-bottom:4px;">${escapeHtml(row.label)}:</div>
            <div style="background:#f1f5f9;padding:12px;border-radius:6px;border-left:4px solid ${accent};font-family:${row.mono ? 'ui-monospace,Menlo,monospace' : 'inherit'};">
              ${blockContent}
            </div>
          </td>
        </tr>`;
      }

      return `
      <tr style="border-bottom:1px solid #e2e8f0;">
        <td style="padding:10px 0;font-size:13px;color:#64748b;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;width:40%;">
          ${escapeHtml(row.label)}
        </td>
        <td align="right" style="padding:10px 0;font-size:13px;font-weight:600;color:#0f172a;font-family:${row.mono ? 'ui-monospace,SFMono-Regular,Menlo,Monaco,monospace' : '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif'};width:60%;">
          ${row.html || (row.value ? escapeHtml(row.value) : '')}
        </td>
      </tr>`;
    })
    .join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(opts.title)}</title>
</head>
<body style="margin:0;padding:24px 0;background-color:#F4F0EA;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  ${preheaderHtml}
  <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.06);border:1px solid #e2e8f0;margin:0 auto;">
          <!-- Header Band -->
          <tr>
            <td style="background-color:${headerDark};padding:26px 32px;border-bottom:3px solid ${accent};">
              <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
                      ${SITE.name}
                    </div>
                    <div style="font-size:12px;color:#94a3b8;margin-top:4px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
                      ${REPLY.headerTagline}
                    </div>
                  </td>
                  ${REPLY.bizNumber ? `
                  <td align="right" valign="top">
                    <span style="font-size:11px;color:${accent};font-weight:700;font-family:ui-monospace,Menlo,monospace;background:rgba(255,255,255,0.08);padding:4px 8px;border-radius:4px;border:1px solid rgba(255,255,255,0.12);">
                      ${REPLY.bizNumber.label} ${REPLY.bizNumber.value}
                    </span>
                  </td>` : ''}
                </tr>
              </table>
            </td>
          </tr>

          <!-- Intro & Badge Section -->
          <tr>
            <td style="padding:28px 32px 8px 32px;">
              <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <h1 style="margin:0 0 12px 0;font-size:20px;font-weight:800;color:#0f172a;letter-spacing:-0.3px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
                      ${escapeHtml(opts.title)}
                    </h1>
                  </td>
                  ${opts.refBadge ? `
                  <td align="right" valign="top">
                    <span style="display:inline-block;padding:6px 12px;border-radius:20px;font-size:12px;font-weight:700;font-family:ui-monospace,Menlo,monospace;color:${accent};border:1.5px solid ${accent};background:#f0f9ff;">
                      ${escapeHtml(opts.refBadge)}
                    </span>
                  </td>` : ''}
                </tr>
              </table>
              ${opts.intro ? `
              <p style="margin:0 0 16px 0;font-size:14px;line-height:1.6;color:#475569;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
                ${escapeHtml(opts.intro)}
              </p>` : ''}
            </td>
          </tr>

          <!-- Data Rows Table -->
          <tr>
            <td style="padding:0 32px 16px 32px;">
              <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0">
                ${rowsHtml}
              </table>
            </td>
          </tr>

          <!-- After Rows HTML (Terms, lists, instructions) -->
          ${opts.afterRows ? `
          <tr>
            <td style="padding:0 32px 20px 32px;font-size:13px;line-height:1.6;color:#334155;">
              ${opts.afterRows}
            </td>
          </tr>` : ''}

          <!-- Stacked CTA Buttons (ctaButtons array) -->
          ${opts.ctaButtons && opts.ctaButtons.length > 0 ? `
          <tr>
            <td style="padding:8px 32px 28px 32px;">
              <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0">
                ${opts.ctaButtons.map((btn) => {
                  const bg = btn.style === 'green' ? '#16a34a' : btn.style === 'dark' ? '#1e293b' : accent;
                  return `
                <tr>
                  <td style="padding-bottom:10px;">
                    <a href="${btn.url}" target="_blank" style="display:block;width:100%;box-sizing:border-box;padding:14px 20px;background-color:${bg};color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;border-radius:8px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;text-align:center;">
                      ${escapeHtml(btn.label)}
                    </a>
                  </td>
                </tr>`;
                }).join('')}
              </table>
            </td>
          </tr>` : ''}

          <!-- Action Buttons (legacy cta/secondaryCta) -->
          ${(opts.cta || opts.secondaryCta) && !opts.ctaButtons ? `
          <tr>
            <td style="padding:10px 32px 28px 32px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  ${opts.cta ? `
                  <td style="padding-right:12px;">
                    <a href="${opts.cta.url}" target="_blank" style="display:inline-block;padding:12px 24px;background-color:${accent};color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;border-radius:8px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
                      ${escapeHtml(opts.cta.label)}
                    </a>
                  </td>` : ''}
                  ${opts.secondaryCta ? `
                  <td>
                    <a href="${opts.secondaryCta.url}" target="_blank" style="display:inline-block;padding:11px 22px;background-color:#ffffff;color:${accent};border:1.5px solid ${accent};text-decoration:none;font-weight:700;font-size:14px;border-radius:8px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
                      ${escapeHtml(opts.secondaryCta.label)}
                    </a>
                  </td>` : ''}
                </tr>
              </table>
            </td>
          </tr>` : ''}

          <!-- Light Footer -->
          <tr>
            <td style="background-color:#F7F4F0;padding:24px 32px;border-top:1px solid #e2e8f0;font-size:12px;color:#64748b;line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
              ${opts.footer ? escapeHtml(opts.footer) : `
              <div><strong>${SITE.name}</strong> · ${REPLY.headerTagline}</div>
              <div style="margin-top:4px;">Have questions? Reply directly to this email or reach us on WhatsApp at <strong>${SITE.shortName} Rider Support</strong>.</div>
              `}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
