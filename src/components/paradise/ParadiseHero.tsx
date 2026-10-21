"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckCircle2, ArrowRight, MapPin } from "lucide-react";
import { paradiseData } from "../../data/paradise";
import { submitLeadToGoogleSheet } from "@/src/lib/utils";

export default function ParadiseHero() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    try {
      await submitLeadToGoogleSheet({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        project: "Signature Paradise",
      });

      try {
        sessionStorage.setItem("paradise_lead_done", "1");
      } catch {}

      router.push("/paradise/thankyou");
    } catch {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden pt-16 sm:pt-0">

      {/* ========== ANIMATED BACKGROUND IMAGE ========== */}
      <div className={`absolute inset-0 z-0 transition-transform duration-[2000ms] ease-out ${isMounted ? "scale-100" : "scale-110"}`}>
        <Image
          src={paradiseData.hero.image}
          alt="Signature Paradise Main Gate"
          fill
          priority
          className="object-cover object-top sm:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/95 sm:bg-gradient-to-r sm:from-black/70 sm:via-black/40 sm:to-black/20" />
      </div>

      {/* ========== CONTENT ========== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-24 lg:py-28 h-full flex flex-col justify-end sm:justify-center">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* LEFT — Text Area */}
          <div className="text-white mt-10 sm:mt-0">

            <div className={`transition-all duration-1000 delay-100 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md border border-white/35 px-4 py-2 mb-4 sm:mb-5 shadow-lg">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.12em] text-amber-300">
                  {paradiseData.hero.eyebrow}
                </span>
              </div>
            </div>

            <h1 className={`font-serif text-2xl sm:text-4xl lg:text-[2.65rem] font-bold leading-[1.25] text-white mb-3 sm:mb-4 drop-shadow-lg transition-all duration-1000 delay-300 ${isMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              Own Your Dream Plot At{" "}
              <span className="text-amber-400 block sm:inline">Signature Paradise</span>
            </h1>

            <p className={`text-sm sm:text-base lg:text-lg text-white/90 font-medium mb-6 max-w-lg drop-shadow-md transition-all duration-1000 delay-500 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {paradiseData.hero.subtitle}
            </p>

            <ul className={`space-y-2.5 sm:space-y-3 transition-all duration-1000 delay-700 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {paradiseData.hero.usps.map((usp, i) => (
                <li key={i} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-base font-semibold text-white drop-shadow">
                  <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/25 border border-emerald-400/50 backdrop-blur-sm">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                  </span>
                  {usp}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Form Card */}
          <div className={`w-full max-w-[320px] sm:max-w-[340px] mx-auto lg:mx-0 lg:justify-self-end transition-all duration-1000 delay-1000 ${isMounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl shadow-black/40 border border-white/60 p-5 sm:p-6">
              <div className="mb-4 sm:mb-5">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900">Book A Site Visit Now!</h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-500">Share your details — we&apos;ll call you back.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="mb-1 block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">Full Name *</label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 sm:py-3 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">Mobile Number *</label>
                  <input
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 sm:py-3 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
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
                  className="mt-1 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 shadow-lg shadow-emerald-700/25 active:scale-[0.98] transition-all duration-200 disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : <>Submit <ArrowRight className="w-4 h-4" /></>}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}