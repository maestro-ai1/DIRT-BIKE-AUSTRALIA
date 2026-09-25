'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SITE, CONTACT } from '@/src/config/site';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Product / Sizing Question');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });
      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
          router.push('/thank-you-contact/');
        }, 1200);
      }
    } catch {
      // fallback
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Contact Us</span>
        </nav>

        {/* Header */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-xl">
          <div className="max-w-2xl space-y-3">
            <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider border border-sky-400/30 inline-block">
              Rider Support &amp; Technical Advice
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Get in Touch with Our Australian Workshop
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Have questions about bike sizing, battery capacity, fast chargers, or freight to your postcode? Our Mittagong NSW team is on standby to assist.
            </p>
          </div>
        </div>

        {/* Grid: Details + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Direct Contact Channels
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <a
                  href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}
                  className="flex items-start gap-3 p-3.5 bg-slate-50 hover:bg-sky-50 border border-slate-200/80 rounded-xl transition-colors group"
                >
                  <Phone className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      Sales &amp; Technical Helpline
                    </div>
                    <div className="font-mono text-xs text-slate-500 mt-0.5">
                      {CONTACT.phoneDisplay}
                    </div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}?text=Hi%20Electric%20Dirt%20Bike%20Australia%2C%20I%20have%20an%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 rounded-xl transition-colors group"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-emerald-900">
                      WhatsApp Instant Messenger
                    </div>
                    <div className="text-xs text-emerald-700 mt-0.5">
                      Chat directly with an experienced technician
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                  <Mail className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">
                      Email Inquiries
                    </div>
                    <div className="font-mono text-xs text-slate-500 mt-0.5">
                      {CONTACT.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                  <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">
                      Southern Highlands Warehouse
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {CONTACT.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                  <Clock className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">
                      Dispatch &amp; Support Hours
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {CONTACT.hours}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 tracking-tight mb-1">
                  Send a Message to Our Workshop
                </h2>
                <p className="text-xs text-slate-500">
                  Fill in your details below and a team member will get back to you within 2-4 business hours.
                </p>
              </div>

              {success ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-bold text-emerald-950">Thank you for your message!</h3>
                  <p className="text-xs text-emerald-800">
                    We have received your enquiry and our team in Mittagong will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Marcus Thornton"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="marcus@domain.com.au"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0412 890 123"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Inquiry Topic
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      >
                        <option>Product / Sizing Question</option>
                        <option>Freight Time to Postcode</option>
                        <option>Crypto / PayID Discount</option>
                        <option>72V Battery Compatibility</option>
                        <option>Wholesale &amp; Fleet Orders</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please let us know which model you are interested in or any specific questions about Australian dirt tracks..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors shadow-md shadow-sky-600/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? 'Sending Message...' : 'Send Message to Workshop'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
