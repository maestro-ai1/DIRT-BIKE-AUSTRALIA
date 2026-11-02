// Invoice settings. Business details come from CONTACT in site.ts. Prices on the site include 10% GST (see the FAQ), so GST = total / 11.
// Bank transfer (Osko) details are NOT stored here: this repository is public. They are saved privately in Redis from the invoice screen
// (POST /api/admin/invoice-settings, passcode protected).
export const INVOICE = {
  gstRate: 0.1,
  paymentTerms: 'Payable before dispatch. Your order is held for you once payment clears.',
} as const;
