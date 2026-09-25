'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { PasscodeGate } from '@/components/admin/PasscodeGate';
import { useAdminPasscode } from '@/lib/useAdminPasscode';
import { StoredEnquiry } from '@/lib/enquiryStore';
import { Send, ArrowLeft, CheckCircle } from 'lucide-react';
import { SITE, CONTACT } from '@/src/config/site';

export default function ReplyEnquiryPage() {
  return (
    <PasscodeGate>
      <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading enquiry reply...</div>}>
        <EnquiryReplyComposer />
      </Suspense>
    </PasscodeGate>
  );
}

function EnquiryReplyComposer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const idParam = searchParams.get('id') || '';
  const { getAuthHeaders } = useAdminPasscode();

  const [enquiry, setEnquiry] = useState<StoredEnquiry | null>(null);
  const [loading, setLoading] = useState(true);
  const [replyText, setReplyText] = useState('');
  const [sending, setSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  useEffect(() => {
    if (!idParam) return;
    const fetchEnquiry = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/admin/enquiries/${idParam}/`, {
          headers: getAuthHeaders(),
        });
        if (res.ok) {
          const data = await res.json();
          setEnquiry(data.enquiry);
          setReplyText(
            `Hi ${data.enquiry.name},\n\nThank you for reaching out to Electric Dirt Bike Australia regarding your inquiry.\n\nWe would be glad to assist you. Our Mittagong workshop team has confirmed that we have full stock ready for immediate dispatch.\n\nPlease let us know if you need assistance configuring suspension, chargers, or locking in your order with the 10% Crypto discount.\n\nBest regards,\nElectric Dirt Bike Australia Sales & Technical Team\nMittagong NSW 2575\nPhone: (02) 4871 2940`
          );
        }
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    };
    fetchEnquiry();
  }, [idParam]);

  if (!idParam) {
    return <div className="p-12 text-center text-slate-500">Please select an enquiry to reply to.</div>;
  }

  if (loading) {
    return <div className="p-12 text-center text-slate-500">Loading enquiry...</div>;
  }

  if (!enquiry) {
    return <div className="p-12 text-center text-slate-500">Enquiry not found.</div>;
  }

  const handleSend = async () => {
    setSending(true);
    try {
      const res = await fetch('/api/admin/reply-enquiry/', {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          enquiryId: enquiry.id,
          toEmail: enquiry.email,
          toName: enquiry.name,
          subject: `Re: ${enquiry.subject || 'Your Inquiry with Electric Dirt Bike Australia'}`,
          replyMessage: replyText,
        }),
      });
      if (res.ok) {
        setSentSuccess(true);
      }
    } catch {
      // ignore
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="py-10 bg-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <Link
            href="/admin/enquiries/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Enquiries</span>
          </Link>
          <span className="text-xs font-mono font-bold bg-white px-3 py-1 rounded-md border">
            Enquiry: {enquiry.id}
          </span>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-xl font-extrabold text-slate-900">
            Reply to {enquiry.name} ({enquiry.email})
          </h2>

          <div className="bg-slate-50 p-4 rounded-xl border text-xs space-y-1 text-slate-600">
            <span className="font-bold text-slate-800">Original Inquiry:</span>
            <p className="italic">&ldquo;{enquiry.message}&rdquo;</p>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Your Response Message (Formatted into Branded Light HTML Email)
            </label>
            <textarea
              rows={8}
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-sans focus:ring-2 focus:ring-sky-500 focus:outline-none"
            />
          </div>

          {sentSuccess ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800 text-xs font-semibold">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Response successfully emailed to {enquiry.email}!</span>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleSend}
              disabled={sending}
              className="w-full py-3.5 px-6 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md shadow-sky-600/20"
            >
              <Send className="w-4 h-4" />
              <span>{sending ? 'Sending Branded Email...' : `Send Reply to ${enquiry.email}`}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
