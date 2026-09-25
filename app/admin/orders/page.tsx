'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PasscodeGate } from '@/components/admin/PasscodeGate';
import { useAdminPasscode } from '@/lib/useAdminPasscode';
import { StoredOrder } from '@/lib/orderStore';
import { ShoppingBag, MessageSquare, Mail, RefreshCw, Trash2, Send, CheckCircle, Clock } from 'lucide-react';
import { REPLY } from '@/src/config/site';

export default function AdminOrdersPage() {
  return (
    <PasscodeGate>
      <OrdersDashboard />
    </PasscodeGate>
  );
}

function OrdersDashboard() {
  const { getAuthHeaders, lock } = useAdminPasscode();
  const [orders, setOrders] = useState<StoredOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/orders/', {
        headers: getAuthHeaders(),
      });
      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders || []);
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this order?')) return;
    try {
      const res = await fetch(`/api/admin/orders/${id}/`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      });
      if (res.ok) {
        setOrders((prev) => prev.filter((o) => o.id !== id && o.ref !== id));
      }
    } catch {
      // ignore
    }
  };

  const filtered = orders.filter((o) => {
    if (statusFilter === 'all') return true;
    return o.status === statusFilter;
  });

  return (
    <div className="py-10 bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Admin Navigation Hub Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold">
              EDBA
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight">
                Reply Portal · Orders Dashboard
              </h1>
              <div className="text-xs text-slate-500">
                Mittagong NSW 2575 Warehouse Order Hub
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin/orders/"
              className="px-3.5 py-1.5 bg-sky-600 text-white font-bold text-xs rounded-lg"
            >
              Orders ({orders.length})
            </Link>
            <Link
              href="/admin/enquiries/"
              className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-lg transition-colors"
            >
              Enquiries
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

        {/* Filter Controls & Refresh */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {['all', 'pending', 'payment-sent', 'paid', 'dispatched'].map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize transition-colors ${
                  statusFilter === st
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={fetchOrders}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-slate-500 text-sm">
              Loading orders...
            </div>
          ) : filtered.length === 0 ? (
            <div className="p-12 text-center text-slate-500 text-sm">
              No orders found matching status filter.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold text-[11px] uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Order Ref</th>
                    <th className="py-3 px-4">Channel</th>
                    <th className="py-3 px-4">Customer</th>
                    <th className="py-3 px-4">Items</th>
                    <th className="py-3 px-4">Total</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.map((order) => (
                    <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-sky-700">
                        {order.ref}
                      </td>
                      <td className="py-3 px-4">
                        {order.channel === 'whatsapp' ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">
                            <MessageSquare className="w-3 h-3" />
                            WhatsApp
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200 text-[11px] font-bold">
                            <Mail className="w-3 h-3" />
                            Email Form
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900">{order.customerName}</div>
                        <div className="text-[11px] text-slate-500">{order.suburbState || order.email}</div>
                      </td>
                      <td className="py-3 px-4 text-slate-600 max-w-xs truncate">
                        {order.items.map((i) => `${i.qty}x ${i.name}`).join(', ')}
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-slate-900">
                        ${order.total.toLocaleString()} AUD
                        <span className="block text-[10px] font-normal text-slate-400 capitalize">
                          {order.paymentMethod}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-bold capitalize ${
                            order.status === 'payment-sent'
                              ? 'bg-sky-100 text-sky-800'
                              : order.status === 'paid'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-orange-100 text-orange-800'
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right space-x-2">
                        <Link
                          href={`/admin/send-payment-email/?ref=${order.ref}`}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-bold transition-colors"
                        >
                          <Send className="w-3 h-3" />
                          <span>Payment Details</span>
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDelete(order.id)}
                          className="p-1.5 text-slate-400 hover:text-red-600 rounded-md"
                          title="Delete Order"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
