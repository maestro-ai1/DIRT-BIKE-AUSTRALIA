'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PasscodeGate } from '@/components/admin/PasscodeGate';
import { AdminNav } from '@/components/admin/AdminNav';
import { useAdminPasscode } from '@/lib/useAdminPasscode';
import { StoredOrder } from '@/lib/orderStore';
import { RefreshCw, Send, Trash2, MessageSquare, Mail } from 'lucide-react';

export default function AdminOrdersPage() {
  return (
    <PasscodeGate>
      <OrdersList />
    </PasscodeGate>
  );
}

const STATUS_STYLE: Record<string, string> = {
  pending:        'bg-amber-500/10 border-amber-500/30 text-amber-400',
  'payment-sent': 'bg-sky-500/10 border-sky-500/30 text-sky-400',
  paid:           'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
  dispatched:     'bg-gray-500/10 border-gray-500/30 text-gray-400',
  cancelled:      'bg-red-500/10 border-red-500/30 text-red-400',
};

function OrdersList() {
  const { getAuthHeaders, lock, isUnlocked } = useAdminPasscode();
  const [orders, setOrders] = useState<StoredOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/orders/', { headers: getAuthHeaders() });
      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders || []);
      }
    } catch { /* ignore */ }
    finally { setLoading(false); }
  };

  useEffect(() => { if (isUnlocked) fetchOrders(); }, [isUnlocked]);

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this order?')) return;
    try {
      const res = await fetch(`/api/admin/orders/${id}/`, { method: 'DELETE', headers: getAuthHeaders() });
      if (res.ok) setOrders((prev) => prev.filter((o) => o.id !== id && o.ref !== id));
    } catch { /* ignore */ }
  };

  const filtered = filter === 'all' ? orders : orders.filter((o) => o.status === filter);

  return (
    <div className="min-h-screen bg-black text-white">
      <AdminNav active="orders" onLock={lock} />

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-5">

        {/* Heading + refresh */}
        <div className="flex items-center justify-between">
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-sky-400">
            Orders ({orders.length})
          </div>
          <button
            type="button"
            onClick={fetchOrders}
            className="p-2 text-gray-500 hover:text-white rounded-lg transition-colors"
            title="Refresh"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-1.5">
          {['all', 'pending', 'payment-sent', 'paid', 'dispatched'].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setFilter(s)}
              className={`px-3 py-1 text-[11px] font-bold rounded-full border capitalize transition-colors ${
                filter === s
                  ? 'bg-white/10 border-white/30 text-white'
                  : 'border-white/10 text-gray-500 hover:text-gray-300'
              }`}
            >
              {s === 'all' ? `All (${orders.length})` : `${s} (${orders.filter((o) => o.status === s).length})`}
            </button>
          ))}
        </div>

        {/* Cards */}
        {loading ? (
          <div className="text-center text-gray-600 py-16 text-sm">Loading orders…</div>
        ) : filtered.length === 0 ? (
          <div className="text-center text-gray-600 py-16 text-sm">No orders found.</div>
        ) : (
          <div className="space-y-3">
            {filtered.map((order) => (
              <div key={order.id} className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-4">
                  {/* Row 1: ref + badges + trash */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono font-extrabold text-sky-400 text-sm tracking-wide">{order.ref}</span>
                      <span className={`px-2 py-0.5 text-[10px] font-extrabold rounded border uppercase ${STATUS_STYLE[order.status] || STATUS_STYLE.pending}`}>
                        {order.status}
                      </span>
                      {order.channel === 'whatsapp' ? (
                        <span className="flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-extrabold rounded uppercase">
                          <MessageSquare className="w-2.5 h-2.5" /> WhatsApp
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 px-2 py-0.5 bg-sky-500/10 border border-sky-500/30 text-sky-400 text-[10px] font-extrabold rounded uppercase">
                          <Mail className="w-2.5 h-2.5" /> Email
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDelete(order.id)}
                      className="text-gray-700 hover:text-red-500 transition-colors shrink-0"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Row 2: customer name */}
                  <div className="font-bold text-white text-base mb-0.5">{order.customerName}</div>

                  {/* Row 3: email · phone */}
                  <div className="text-xs text-gray-500 mb-2">
                    {order.email} · {order.phone || '—'}
                  </div>

                  {/* Row 4: items · amount */}
                  <div className="flex items-end justify-between gap-3">
                    <div className="text-[11px] text-gray-600 truncate flex-1">
                      {order.items.map((i) => `${i.qty}× ${i.name}`).join(' · ')} — ${order.total.toLocaleString()} AUD
                    </div>
                    <div className="text-[11px] text-gray-600 shrink-0">
                      {new Date(order.createdAt).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>

                {/* Send button */}
                <div className="border-t border-white/5 px-4 py-3">
                  <Link
                    href={`/admin/send-payment-email/?ref=${order.ref}`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-xl transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Send Payment Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
