
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckCircle2, ArrowRight, MapPin, Download } from "lucide-react";
import { ultimateHeightData } from "../../data/ultimateheight";
import { submitLeadToGoogleSheet } from "@/src/lib/utils";

export default function UltimateHero() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", propertyType: "" });
  const [error, setError] = useState("");

  useEffect(() => { setIsMounted(true); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const openEnquiry = () => {
    window.dispatchEvent(new Event("open-enquiry-popup"));
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
    if (!formData.propertyType) {
      setError("Please select your interest.");
      return;
    }

    setIsSubmitting(true);
    try {
      await submitLeadToGoogleSheet({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        project: "Ultimate Height",
        propertyType: formData.propertyType,
      });

      try { sessionStorage.setItem("ultimate_lead_done", "1"); } catch {}
      router.push("/ultimateheight/thankyou");
    } catch {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden pt-16 sm:pt-0">
      <div className={`absolute inset-0 z-0 transition-transform duration-[2000ms] ease-out ${isMounted ? "scale-100" : "scale-110"}`}>
        <Image
          src={ultimateHeightData.hero.image}
          alt="Ultimate Heights Building"
          fill
          priority
          className="object-cover object-top sm:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/95 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/50 sm:to-black/20" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-24 lg:py-28 h-full flex flex-col justify-end sm:justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* LEFT TEXT */}
          <div className="text-white mt-10 sm:mt-0">
            <div className={`transition-all duration-1000 delay-100 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md border border-white/35 px-4 py-2 mb-4 sm:mb-5 shadow-lg">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.12em] text-amber-300">
                  {ultimateHeightData.hero.eyebrow}
                </span>
              </div>

              {/* Download Brochure Button — ab popup open karega */}
              <button
                type="button"
                onClick={openEnquiry}
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-900 text-xs font-bold uppercase tracking-wider px-4 py-2 mb-5 shadow-lg shadow-amber-400/20 transition-all active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                Download Brochure
              </button>
            </div>

            <h1 className={`font-serif text-2xl sm:text-4xl lg:text-[2.65rem] font-bold leading-[1.25] text-white mb-3 sm:mb-4 drop-shadow-lg transition-all duration-1000 delay-300 ${isMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              Experience Premium Living At{" "}
              <span className="text-amber-400 block sm:inline">Ultimate Heights</span>
            </h1>

            <p className={`text-sm sm:text-base lg:text-lg text-white/90 font-medium mb-5 max-w-lg drop-shadow-md transition-all duration-1000 delay-500 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {ultimateHeightData.hero.subtitle}
            </p>

            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5 max-w-lg transition-all duration-1000 delay-600 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {ultimateHeightData.hero.stats.map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-2 py-2 text-center">
                  <div className="text-amber-400 font-bold text-sm sm:text-base">{stat.value}</div>
                  <div className="text-white/80 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide leading-tight mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            <ul className={`space-y-2.5 sm:space-y-3 transition-all duration-1000 delay-700 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {ultimateHeightData.hero.usps.map((usp, i) => (
                <li key={i} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-base font-semibold text-white drop-shadow">
                  <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/25 border border-amber-400/50 backdrop-blur-sm">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
                  </span>
                  {usp}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT FORM */}
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
                    name="name" type="text" required
                    value={formData.name} onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 sm:py-3 text-sm outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-900/10"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">Mobile Number *</label>
                  <input
                    name="phone" type="tel" inputMode="numeric" required maxLength={10}
                    value={formData.phone} onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 sm:py-3 text-sm outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-900/10"
                  />
                </div>

                {/* Property Type Dropdown — Column F */}
                <div>
                  <label className="mb-1 block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">I&apos;m Interested In *</label>
                  <select
                    name="propertyType"
                    required
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 sm:py-3 text-sm outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-900/10 appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                    }}
                  >
                    <option value="" disabled>Select your interest</option>
                    <option value="4 BHK">4 BHK Flat</option>
                    <option value="Penthouse">Penthouse</option>
                  </select>
                </div>

                {error && (
                  <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">{error}</p>
                )}

                <button
                  type="submit" disabled={isSubmitting}
                  className="mt-1 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 shadow-lg shadow-blue-900/25 active:scale-[0.98] transition-all duration-200 disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : (<> Get More Details <ArrowRight className="w-4 h-4" /></>)}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}