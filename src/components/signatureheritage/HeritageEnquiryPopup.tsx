"use client";

import { useState, useEffect } from "react";

interface HeritageEnquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HeritageEnquiryPopup({
  isOpen,
  onClose,
}: HeritageEnquiryPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Background scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Reset form jab popup band ho
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setFormData({ name: "", phone: "", message: "" });
        setIsSuccess(false);
        setError("");
        setIsSubmitting(false);
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError("Name and Phone are required.");
      return;
    }
    if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);

    try {
      // ────────────────────────────────────────────────
      // TODO: Yahan Signature Heritage ka apna API endpoint lagao
      // ────────────────────────────────────────────────

      // Demo delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSuccess(true);

      // 3 sec baad auto-close
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Gold top strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600" />

        {/* Close button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-7 sm:p-8">
          {/* Header */}
          <div className="mb-6">
            <p className="text-[11px] font-bold uppercase tracking-widest text-amber-600 mb-1">
              Signature Heritage
            </p>
            <h3 className="text-2xl font-bold text-slate-900">Enquire Now</h3>
            <p className="text-sm text-slate-500 mt-1">
              Fill in your details &amp; our team will get back to you shortly.
            </p>
          </div>

          {isSuccess ? (
            /* ── Success State ── */
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your enquiry for <strong>Signature Heritage</strong> has been
                received. Our team will contact you soon.
              </p>
            </div>
          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="heritage-name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="heritage-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 outline-none transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="heritage-phone" className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="heritage-phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 outline-none transition-all"
                />
              </div>

              {/* Message (optional) */}
              <div>
                <label htmlFor="heritage-message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <textarea
                  id="heritage-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific requirement?"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500 outline-none transition-all resize-none"
                />
              </div>

              {/* Error */}
              {error && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 mt-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold rounded-xl shadow-md shadow-amber-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </button>

              <p className="text-[11px] text-center text-slate-400 pt-1">
                By submitting, you agree to be contacted by our sales team.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}