"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/Container";
import { submitLeadToGoogleSheet } from "@/src/lib/utils";

export default function LeadForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
    message: "",
  });

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
        city: formData.requirement,
        message: formData.message.trim(),
        project: "Ultimate Height",
      });

      // GTM dataLayer push - Lead Form
      if (typeof window !== "undefined") {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "generate_lead",
          form_name: "Lead Form",
          form_source: "Enquire Section",
          lead_name: formData.name,
          lead_phone: formData.phone,
          lead_requirement: formData.requirement,
        });
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("❌ Network error. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquire" className="bg-white py-12 lg:py-20">
      <Container>
        <div className="grid gap-8 rounded-3xl bg-slate-900 p-6 sm:p-8 text-white md:p-12 lg:grid-cols-[1fr_0.9fr]">
          {/* Left Side - Info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Enquire Now
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold md:text-4xl">
              Schedule a site visit for the last few available premium units
            </h2>
            <p className="mt-5 max-w-2xl text-slate-300 text-sm sm:text-base">
              Share your details and our sales team will contact you with
              availability, pricing discussion, and site visit coordination.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <p className="text-sm text-slate-400">Project</p>
                <p className="mt-1 font-semibold">Ultimate Heights</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                <p className="text-sm text-slate-400">Availability</p>
                <p className="mt-1 font-semibold text-amber-400">Only 5 Units Left</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919203403607"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
                +91 9203403607
              </a>
              <a
                href="mailto:info@ultimateheights.com"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@ultimateheights.com
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-xl min-h-[500px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-6"
                >
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-5 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                    Thank You! 🎉
                  </h2>
                  <p className="text-slate-600 text-sm">
                    Redirecting to thank you page...
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="grid gap-4"
                >
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition disabled:opacity-60"
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
                    className="h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition disabled:opacity-60"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    disabled={isSubmitting}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition disabled:opacity-60"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={isSubmitting}
                  />
                  <select
                    required
                    className="h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition disabled:opacity-60"
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    disabled={isSubmitting}
                  >
                    <option value="">Interested In</option>
                    <option value="3 BHK">3 BHK</option>
                    <option value="4 BHK">4 BHK</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Commercial Unit">Commercial Unit</option>
                  </select>
                  <textarea
                    placeholder="Message (Optional)"
                    rows={4}
                    className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition resize-none disabled:opacity-60"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Submitting..." : "Request Callback"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}