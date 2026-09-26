'use client';

import React, { useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Upload, CheckCircle, AlertCircle, ImageIcon, MessageSquare } from 'lucide-react';

export function ConfirmClient() {
  const searchParams = useSearchParams();
  const orderRef = searchParams.get('ref') || '';

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (f.size > 8 * 1024 * 1024) {
      setError('File must be under 8 MB.');
      return;
    }
    setError('');
    setFile(f);
    const url = URL.createObjectURL(f);
    setPreview(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) { setError('Please select a screenshot to upload.'); return; }
    setUploading(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('screenshot', file);
      formData.append('ref', orderRef);
      const res = await fetch('/api/confirm/', { method: 'POST', body: formData });
      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || 'Upload failed. Please try again or send directly via email/WhatsApp.');
      }
    } catch {
      setError('Upload failed. Please send your screenshot directly via email or WhatsApp below.');
    } finally {
      setUploading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 text-center space-y-4">
        <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-9 h-9 text-emerald-600" />
        </div>
        <h1 className="text-xl font-extrabold text-slate-900">Screenshot Received!</h1>
        <p className="text-sm text-slate-600">
          We received your payment proof for order <span className="font-mono font-bold text-sky-700">{orderRef}</span>. Our team will confirm and dispatch within 2 business days.
        </p>
        <Link href="/" className="inline-block mt-2 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl text-sm transition-colors">
          Back to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-5">
        <div>
          <h1 className="text-xl font-extrabold text-slate-900">Upload Payment Proof</h1>
          {orderRef && (
            <p className="text-xs text-slate-500 mt-1">
              Order: <span className="font-mono font-bold text-sky-700">{orderRef}</span>
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Drop zone */}
          <div
            onClick={() => inputRef.current?.click()}
            className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-colors ${
              file ? 'border-sky-400 bg-sky-50' : 'border-slate-300 bg-slate-50 hover:border-sky-400 hover:bg-sky-50/50'
            }`}
          >
            {preview ? (
              <div className="space-y-2">
                <img src={preview} alt="Payment proof preview" className="max-h-40 mx-auto rounded-lg object-contain" />
                <p className="text-xs font-semibold text-sky-700">{file?.name}</p>
                <p className="text-[11px] text-slate-400">Click to change</p>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mx-auto">
                  <ImageIcon className="w-6 h-6 text-slate-400" />
                </div>
                <p className="text-sm font-semibold text-slate-700">Click to select your screenshot</p>
                <p className="text-xs text-slate-400">JPG, PNG, WebP or PDF — max 8 MB</p>
              </div>
            )}
          </div>

          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />

          {error && (
            <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={uploading || !file}
            className="w-full py-3.5 px-4 bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors shadow-md shadow-sky-600/20"
          >
            <Upload className="w-4 h-4" />
            <span>{uploading ? 'Sending...' : 'Send Payment Proof'}</span>
          </button>
        </form>
      </div>

      {/* Fallback: direct contact */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3">
        <p className="text-xs font-bold text-slate-700">Or send directly:</p>
        <a
          href="mailto:sales@electricdirtbikeaustralia.com.au"
          className="flex items-center gap-2 text-xs text-sky-600 hover:text-sky-800 font-semibold"
        >
          <span>📧</span>
          <span>sales&#64;electricdirtbikeaustralia.com.au</span>
        </a>
        <a
          href={`https://wa.me/61420128746?text=${encodeURIComponent(`Hi! Payment proof for order ${orderRef}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-emerald-600 hover:text-emerald-800 font-semibold"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp: +61 420 128 746</span>
        </a>
      </div>
    </div>
  );
}
