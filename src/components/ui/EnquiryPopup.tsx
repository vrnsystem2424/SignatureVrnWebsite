"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { submitLeadToGoogleSheet } from "@/src/lib/utils";

export default function EnquiryPopup() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
  });

  // 5 second baad auto popup (24 ghante me ek baar, agar form nahi bhara)
  useEffect(() => {
    const timer = setTimeout(() => {
      let lastSubmitted: string | null = null;
      try {
        lastSubmitted = localStorage.getItem("enquirySubmittedAt");
      } catch {}

      if (!lastSubmitted) {
        setIsOpen(true);
      } else {
        const hoursPassed =
          (Date.now() - parseInt(lastSubmitted)) / (1000 * 60 * 60);
        if (hoursPassed >= 24) {
          setIsOpen(true);
        }
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Buttons se popup kholne ke dono tarike
  useEffect(() => {
    const open = () => {
      setIsOpen(true);
      setIsSuccess(false);
    };
    (window as any).openEnquiryPopup = open;
    window.addEventListener("open-enquiry-popup", open);
    return () => {
      delete (window as any).openEnquiryPopup;
      window.removeEventListener("open-enquiry-popup", open);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);

    try {
      await submitLeadToGoogleSheet({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        message: `Requirement: ${formData.requirement}`,
        project: "Ultimate Height",
      });

      // GTM dataLayer push - Enquiry Popup
      if (typeof window !== "undefined") {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "generate_lead",
          form_name: "Enquiry Popup",
          form_source: "Popup",
          lead_name: formData.name,
          lead_phone: formData.phone,
          lead_requirement: formData.requirement,
        });
      }

      try {
        localStorage.setItem("enquirySubmittedAt", Date.now().toString());
      } catch {}
      router.push("/ultimateheight/thankyou");
    } catch (error) {
      console.error("Submit error:", error);
      alert("❌ Network error. Please try again.");
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setIsSuccess(false), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50"
            onClick={() => !isSubmitting && handleClose()}
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-[95%] sm:max-w-md mx-auto">
              <div className="relative bg-white rounded-2xl p-5 sm:p-8 shadow-2xl">
                <button
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-400 hover:text-slate-900 text-2xl z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ×
                </button>

                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4 }}
                      className="text-center py-10"
                    >
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-5 shadow-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">
                        Thank You! 🎉
                      </h2>
                      <p className="text-slate-600 text-sm">
                        Redirecting to thank you page...
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="text-center mb-5 sm:mb-6">
                        <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 sm:px-4 sm:py-2 mb-3 sm:mb-4">
                          <span className="text-amber-600 text-sm sm:text-base">🎯</span>
                          <span className="text-xs sm:text-sm font-semibold text-amber-700">
                            Limited Offer
                          </span>
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                          Only <span className="text-amber-500">5 Units</span> Left!
                        </h2>
                        <p className="text-slate-500 mt-2 text-xs sm:text-sm">
                          Book your dream home today at Ultimate Heights
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          className="w-full rounded-xl bg-gray-50 border border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 text-sm sm:text-base placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition disabled:opacity-60"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          disabled={isSubmitting}
                        />
                        <input
                          type="tel"
                          inputMode="numeric"
                          required
                          placeholder="Phone Number"
                          pattern="[0-9]{10}"
                          maxLength={10}
                          className="w-full rounded-xl bg-gray-50 border border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 text-sm sm:text-base placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition disabled:opacity-60"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          disabled={isSubmitting}
                        />
                        <input
                          type="email"
                          placeholder="Email Address (Optional)"
                          className="w-full rounded-xl bg-gray-50 border border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 text-sm sm:text-base placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition disabled:opacity-60"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          disabled={isSubmitting}
                        />
                        <select
                          required
                          className="w-full rounded-xl bg-gray-50 border border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 text-sm sm:text-base focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition disabled:opacity-60"
                          value={formData.requirement}
                          onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                          disabled={isSubmitting}
                        >
                          <option value="">Select BHK Type</option>
                          <option value="3 BHK">3 BHK Premium Flat</option>
                          <option value="4 BHK">4 BHK Luxury Flat</option>
                          <option value="Penthouse">Penthouse Suite</option>
                        </select>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-2.5 sm:py-3 rounded-xl hover:scale-105 transition-transform text-sm sm:text-base shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                          {isSubmitting ? "Submitting..." : "Get Best Price →"}
                        </button>
                      </form>

                      <p className="text-center text-[11px] sm:text-xs text-slate-400 mt-4">
                        No spam. Our team will contact you shortly
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}