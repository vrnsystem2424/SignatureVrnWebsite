"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { paradiseData } from "../../data/paradise";
import { submitLeadToGoogleSheet } from "@/src/lib/utils";

export default function ParadiseLeadForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
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

    // WhatsApp click ke turant baad khulega, warna mobile par block hota hai
    const waNumber =
      paradiseData.whatsappNumber ||
      paradiseData.phone?.replace(/[^0-9]/g, "") ||
      "919999999999";

    const msg = `New Enquiry - Signature Paradise%0A%0AName: ${encodeURIComponent(
      formData.name.trim()
    )}%0APhone: ${encodeURIComponent(
      formData.phone.trim()
    )}%0AEmail: ${encodeURIComponent(
      formData.email.trim()
    )}%0ACity: ${encodeURIComponent(formData.city.trim())}`;

    window.open(`https://wa.me/${waNumber}?text=${msg}`, "_blank");

    try {
      await submitLeadToGoogleSheet({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        city: formData.city.trim(),
        project: "Signature Paradise",
      });

      try {
        sessionStorage.setItem("paradise_lead_done", "1");
      } catch {}

      setSubmitted(true);
      router.push("/paradise/thankyou");
    } catch {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAFAFA] rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl relative overflow-hidden">

          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full inline-block mb-3">
              Book Your Site Visit
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Get In Touch With <span className="text-emerald-700">Signature Paradise</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Fill in your details below and our team will get back to you shortly.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100">
                <CheckCircle2 className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h3>
              <p className="text-sm text-slate-600">
                Your enquiry has been received. Redirecting...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Full Name *
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>

              <div>
                <label className="mb-1 block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Mobile Number *
                </label>
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  required
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>

              <div>
                <label className="mb-1 block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Email ID
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>

              <div>
                <label className="mb-1 block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  City Name
                </label>
                <input
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g. Bhopal"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>

              {error && (
                <p className="sm:col-span-2 text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-4 shadow-lg shadow-emerald-700/20 active:scale-[0.98] transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Request <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}