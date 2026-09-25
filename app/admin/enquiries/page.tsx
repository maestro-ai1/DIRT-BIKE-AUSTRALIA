'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PasscodeGate } from '@/components/admin/PasscodeGate';
import { useAdminPasscode } from '@/lib/useAdminPasscode';
import { StoredEnquiry } from '@/lib/enquiryStore';
import { Mail, RefreshCw, Trash2, Send, MessageSquare } from 'lucide-react';

export default function AdminEnquiriesPage() {
  return (
    <PasscodeGate>
      <EnquiriesDashboard />
    </PasscodeGate>
  );
}

function EnquiriesDashboard() {
  const { getAuthHeaders, lock } = useAdminPasscode();
  const [enquiries, setEnquiries] = useState<StoredEnquiry[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/enquiries/', {
        headers: getAuthHeaders(),
      });
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data.enquiries || []);
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this enquiry?')) return;
    try {
      const res = await fetch(`/api/admin/enquiries/${id}/`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      if (res.ok) {
        setEnquiries((prev) => prev.filter((e) => e.id !== id));
      }
    } catch {
      // ignore
    }
  };

  return (
    <div className="py-10 bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-lg font-bold text-slate-900 leading-tight">
              Reply Portal · Rider &amp; Dealer Enquiries
            </h1>
            <div className="text-xs text-slate-500">
              Customer support &amp; regional fleet inquiries
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin/orders/"
              className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-lg transition-colors"
            >
              Orders
            </Link>
            <Link
              href="/admin/enquiries/"
              className="px-3.5 py-1.5 bg-sky-600 text-white font-bold text-xs rounded-lg"
            >
              Enquiries ({enquiries.length})
            </Link>
            <button
              type="button"
              onClick={lock}
              className="px-3 py-1.5 border border-slate-200 text-slate-600 hover:text-slate-900 font-semibold text-xs rounded-lg"
            >
              Lock Portal
            </button>
          </div>
        </div>

        {/* List of Enquiries */}
        <div className="space-y-4">
          {loading ? (
            <div className="p-12 text-center text-slate-500 text-sm bg-white rounded-2xl border">
              Loading enquiries...
            </div>
          ) : enquiries.length === 0 ? (
            <div className="p-12 text-center text-slate-500 text-sm bg-white rounded-2xl border">
              No enquiries logged.
            </div>
          ) : (
            enquiries.map((enq) => (
              <div
                key={enq.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row justify-between gap-6 hover:shadow-md transition-shadow"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                      {enq.type}
                    </span>
                    <span className="font-bold text-slate-900 text-sm">
                      {enq.name}
                    </span>
                    <span className="text-xs text-slate-400">
                      &lt;{enq.email}&gt;
                    </span>
                    {enq.phone && (
                      <span className="text-xs font-mono text-slate-500">
                        ({enq.phone})
                      </span>
                    )}
                  </div>

                  {enq.subject && (
                    <div className="font-bold text-slate-800 text-sm">
                      Subject: {enq.subject}
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                    {enq.message}
                  </p>

                  <div className="text-[11px] text-slate-400">
                    Logged: {new Date(enq.createdAt).toLocaleString()}
                  </div>
                </div>

                <div className="flex flex-row md:flex-col items-end justify-between gap-2 shrink-0">
                  <Link
                    href={`/admin/reply-enquiry/?id=${enq.id}`}
                    className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Compose Reply</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleDelete(enq.id)}
                    className="text-slate-400 hover:text-red-600 p-2 text-xs flex items-center gap-1"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
