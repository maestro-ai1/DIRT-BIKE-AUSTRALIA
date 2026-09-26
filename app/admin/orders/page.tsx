'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PasscodeGate } from '@/components/admin/PasscodeGate';
import { useAdminPasscode } from '@/lib/useAdminPasscode';
import { StoredOrder } from '@/lib/orderStore';
import { RefreshCw, Send, Trash2, MessageSquare, Mail, ChevronRight } from 'lucide-react';

export default function AdminOrdersPage() {
  return (
    <PasscodeGate>
      <OrdersDashboard />
    </PasscodeGate>
  );
}

const STATUS_STYLES: Record<string, string> = {
  pending: 'bg-orange-100 text-orange-800',
  'payment-sent': 'bg-sky-100 text-sky-800',
  paid: 'bg-emerald-100 text-emerald-800',
  dispatched: 'bg-slate-100 text-slate-700',
  cancelled: 'bg-red-100 text-red-700',
};

function OrdersDashboard() {
  const { getAuthHeaders, lock } = useAdminPasscode();
  const [orders, setOrders] = useState<StoredOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>('all');

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

  useEffect(() => { fetchOrders(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this order?')) return;
    try {
      const res = await fetch(`/api/admin/orders/${id}/`, { method: 'DELETE', headers: getAuthHeaders() });
      if (res.ok) setOrders((prev) => prev.filter((o) => o.id !== id && o.ref !== id));
    } catch { /* ignore */ }
  };

  const filtered = orders.filter((o) => statusFilter === 'all' || o.status === statusFilter);

  return (
    <div className="min-h-screen bg-slate-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5">

        {/* Top Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-600 text-white font-extrabold text-xs flex items-center justify-center">
              EDBA
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-sm leading-tight">Admin · Orders</div>
              <div className="text-[11px] text-slate-400">{orders.length} total orders</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/admin/enquiries/" className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-lg transition-colors">
              Enquiries
            </Link>
            <button type="button" onClick={fetchOrders} className="p-2 text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors" title="Refresh">
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button type="button" onClick={lock} className="px-3 py-1.5 border border-slate-200 text-slate-500 hover:text-slate-900 font-semibold text-xs rounded-lg">
              Lock
            </button>
          </div>
        </div>

        {/* Status Filter Pills */}
        <div className="flex flex-wrap gap-1.5">
          {['all', 'pending', 'payment-sent', 'paid', 'dispatched'].map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1 text-xs font-semibold rounded-full capitalize transition-colors ${
                statusFilter === st ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {st}
              {st === 'all' && ` (${orders.length})`}
              {st !== 'all' && ` (${orders.filter((o) => o.status === st).length})`}
            </button>
          ))}
        </div>

        {/* Cards */}
        {loading ? (
          <div className="bg-white rounded-2xl p-10 text-center text-slate-400 text-sm">Loading orders…</div>
        ) : filtered.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center text-slate-400 text-sm">No orders found.</div>
        ) : (
          <div className="space-y-3">
            {filtered.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                <div className="p-4 flex flex-wrap items-start justify-between gap-3">

                  {/* Left: Ref + Customer */}
                  <div className="flex items-start gap-3">
                    <div className="shrink-0">
                      <div className="font-mono font-extrabold text-lg text-sky-700 leading-none">{order.ref}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {new Date(order.createdAt).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{order.customerName}</div>
                      <div className="text-xs text-slate-500">{order.suburbState || order.email}</div>
                      <div className="flex items-center gap-1 mt-1">
                        {order.channel === 'whatsapp' ? (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded text-[10px] font-bold">
                            <MessageSquare className="w-2.5 h-2.5" /> WA
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-sky-50 text-sky-700 border border-sky-200 rounded text-[10px] font-bold">
                            <Mail className="w-2.5 h-2.5" /> Email
                          </span>
                        )}
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold capitalize ${STATUS_STYLES[order.status] || 'bg-slate-100 text-slate-600'}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Amount + Actions */}
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-right">
                      <div className="font-mono font-extrabold text-base text-slate-900">${order.total.toLocaleString()} AUD</div>
                      <div className="text-[11px] text-slate-400 capitalize">{order.paymentMethod}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/admin/send-payment-email/?ref=${order.ref}`}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-bold transition-colors"
                      >
                        <Send className="w-3 h-3" />
                        <span>Send Payment Details</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(order.id)}
                        className="p-1.5 text-slate-300 hover:text-red-500 rounded-md transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Items strip */}
                <div className="px-4 pb-3 text-[11px] text-slate-500 truncate border-t border-slate-100 pt-2">
                  {order.items.map((i) => `${i.qty}× ${i.name}`).join(' · ')}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
