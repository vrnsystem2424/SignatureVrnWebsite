"use client";

import React, { useEffect, useState } from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { paradiseData } from "../../data/paradise";

export interface ParadiseEnquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ParadiseEnquiryPopup({
  isOpen,
  onClose,
}: ParadiseEnquiryPopupProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = "hidden";
    } else {
      const t = setTimeout(() => {
        setShouldRender(false);
        setSubmitted(false);
        setFormData({ name: "", phone: "" });
        setError("");
        setIsSubmitting(false);
      }, 300);
      document.body.style.overflow = "unset";
      return () => clearTimeout(t);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!shouldRender) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError("Name and phone are required.");
      return;
    }
    if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 1200));
      setSubmitted(true);
      setTimeout(() => onClose(), 2500);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className={`relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 ${
          isOpen ? "animate-modal-pop" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: isOpen
            ? "scaleUpBounce 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards"
            : undefined,
        }}
      >
        {/* Top Accent Strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600" />

        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-all active:scale-90 z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100">
                <CheckCircle2 className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Thank You!
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your enquiry for{" "}
                <strong>
                  {paradiseData?.projectName || "Signature Paradise"}
                </strong>{" "}
                has been received. Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-5 pr-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-1">
                  {paradiseData?.projectName || "Signature Paradise"}
                </p>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                  Enquire Now
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Share your details — we&apos;ll call you back soon.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                  />
                </div>

                {error && (
                  <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm uppercase tracking-wider py-3.5 shadow-lg shadow-emerald-700/20 transition-all active:scale-[0.98] disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Enquiry <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] text-slate-400">
                  🔒 Your details are safe. No spam.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}