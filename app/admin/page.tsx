'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PasscodeGate } from '@/components/admin/PasscodeGate';
import { AdminNav } from '@/components/admin/AdminNav';
import { useAdminPasscode } from '@/lib/useAdminPasscode';
import { Package, MessageSquare } from 'lucide-react';

export default function AdminDashboardPage() {
  return (
    <PasscodeGate>
      <Dashboard />
    </PasscodeGate>
  );
}

function Dashboard() {
  const { getAuthHeaders, lock, isUnlocked } = useAdminPasscode();
  const [ordersCount, setOrdersCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [enquiriesCount, setEnquiriesCount] = useState(0);
  const [newEnquiriesCount, setNewEnquiriesCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isUnlocked) return;
    const fetchStats = async () => {
      try {
        const [ordRes, enqRes] = await Promise.all([
          fetch('/api/admin/orders/', { headers: getAuthHeaders() }),
          fetch('/api/admin/enquiries/', { headers: getAuthHeaders() }),
        ]);
        if (ordRes.ok) {
          const d = await ordRes.json();
          const orders = d.orders || [];
          setOrdersCount(orders.length);
          setPendingCount(orders.filter((o: { status: string }) => o.status === 'pending').length);
        }
        if (enqRes.ok) {
          const d = await enqRes.json();
          const enqs = d.enquiries || [];
          setEnquiriesCount(enqs.length);
          setNewEnquiriesCount(enqs.filter((e: { replied?: boolean }) => !e.replied).length);
        }
      } catch { /* ignore */ }
      finally { setLoading(false); }
    };
    fetchStats();
  }, [isUnlocked]);

  return (
    <div className="min-h-screen bg-black text-white">
      <AdminNav active="dashboard" onLock={lock} />

      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        <div className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500">Dashboard</div>

        {loading ? (
          <div className="text-center text-gray-600 py-16 text-sm">Loading…</div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/admin/orders/"
              className="bg-[#111111] border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-2 hover:border-sky-500/40 transition-colors"
            >
              <Package className="w-10 h-10 text-orange-400 mb-1" strokeWidth={1.5} />
              <div className="text-5xl font-black text-white leading-none">{ordersCount}</div>
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500">Orders</div>
              {pendingCount > 0 && (
                <span className="mt-1 px-3 py-1 bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold rounded-full">
                  {pendingCount} pending
                </span>
              )}
            </Link>

            <Link
              href="/admin/enquiries/"
              className="bg-[#111111] border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-2 hover:border-sky-500/40 transition-colors"
            >
              <MessageSquare className="w-10 h-10 text-gray-300 mb-1" strokeWidth={1.5} />
              <div className="text-5xl font-black text-white leading-none">{enquiriesCount}</div>
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-gray-500">Enquiries</div>
              {newEnquiriesCount > 0 && (
                <span className="mt-1 px-3 py-1 bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-bold rounded-full">
                  {newEnquiriesCount} new
                </span>
              )}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
