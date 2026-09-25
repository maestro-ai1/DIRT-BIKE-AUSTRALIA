'use client';

import React from 'react';
import { MessageSquare, ExternalLink, Copy } from 'lucide-react';
import { waLink, toWhatsAppNumber } from '@/lib/whatsapp';

interface WhatsAppSendPanelProps {
  customerPhone: string;
  messageText: string;
  customerName: string;
}

export function WhatsAppSendPanel({ customerPhone, messageText, customerName }: WhatsAppSendPanelProps) {
  const normPhone = toWhatsAppNumber(customerPhone);
  const link = waLink(normPhone, messageText);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(messageText);
    alert('WhatsApp message text copied to clipboard!');
  };

  return (
    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
          <MessageSquare className="w-4 h-4 text-emerald-600" />
          <span>WhatsApp Reply Panel ({customerName})</span>
        </div>
        <button
          type="button"
          onClick={copyToClipboard}
          className="text-xs text-emerald-700 hover:text-emerald-900 font-semibold flex items-center gap-1"
        >
          <Copy className="w-3.5 h-3.5" />
          Copy Text
        </button>
      </div>

      <p className="text-xs text-emerald-800 leading-relaxed">
        Send pre-formatted payment instructions directly to customer mobile: <strong>{customerPhone}</strong>
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition-colors shadow-xs"
      >
        <span>Open WhatsApp Chat with Pre-filled Message</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}
