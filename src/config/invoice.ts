// Invoice settings. Business details come from CONTACT in site.ts. Prices on the site include 10% GST (see the FAQ), so GST = total / 11.
// Bank transfer (Osko) details: fill in once supplied. Until then the invoice shows an amber "add details" notice so it cannot go out unnoticed.
export const INVOICE = {
  gstRate: 0.1,
  paymentTerms: 'Payable before dispatch. Your order is held for you once payment clears.',
  bank: {
    accountName: '',
    bsb: '',
    accountNumber: '',
    payId: '',
    payIdType: '', // e.g. ABN, Email, Phone
    bankName: '',
  },
} as const;
