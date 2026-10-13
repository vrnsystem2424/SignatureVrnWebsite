"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckCircle2, ArrowRight, MapPin, Download } from "lucide-react";
import { heroContent } from "../../data/signatureheritage";
import { submitLeadToGoogleSheet } from "@/src/lib/utils";

export default function HeritageHero() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [error, setError] = useState("");

  const heroImage =
    heroContent?.backgroundImage ||
    "/images/signatureheritage/6%20DUPLEX%20ELEVATION.jpg";

  const eyebrowText = "LOOKING FOR A DUPLEX IN BHOPAL?";
  const subtitleText = "PREMIUM LIVING DESIGNED FOR MODERN FAMILIES";

  const uspsList = [
    "Ready Lifestyle Amenities",
    "Premium Duplex Homes",
    "Limited Inventory Available",
  ];

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
        project: "Signature Heritage",
      });

      try {
        sessionStorage.setItem("heritage_lead_done", "1");
      } catch {}

      router.push("/signatureheritage/thankyou");
    } catch {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full flex items-end sm:items-center overflow-hidden"
    >
      {/* ===== BACKGROUND ===== */}
      <div
        className={`absolute inset-0 z-0 transition-transform duration-[2000ms] ease-out ${
          isMounted ? "scale-100" : "scale-105"
        }`}
      >
        <Image
          src={heroImage}
          alt="Signature Heritage Duplex"
          fill
          priority
          quality={100}
          className="object-cover object-[center_25%] sm:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 hidden sm:block bg-gradient-to-r from-white/60 via-white/25 to-transparent" />
        <div className="absolute inset-0 sm:hidden bg-gradient-to-t from-black/75 via-black/35 to-black/10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-24 pb-28 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">

          {/* ===== LEFT TEXT ===== */}
          <div className="lg:col-span-7 max-w-xl">

            <div
              className={`transition-all duration-700 delay-100 ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="inline-flex items-center gap-2.5 rounded-full bg-amber-400 px-4 py-2 mb-3 sm:mb-4 shadow-md">
                <MapPin className="w-4 h-4 text-indigo-950 shrink-0" />
                <span className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.12em] text-indigo-950">
                  {eyebrowText}
                </span>
              </div>
            </div>

            <h1
              className={`font-serif leading-[1.2] mb-3 sm:mb-4 transition-all duration-700 delay-200 ${
                isMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
            >
              <span className="block text-base sm:text-xl lg:text-3xl font-semibold text-white sm:text-indigo-950/90 mb-1 drop-shadow-md sm:drop-shadow-none">
                Own Your Dream Duplex At
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-400 sm:text-amber-500 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:drop-shadow-none">
                Signature Heritage
              </span>
            </h1>

            <p
              className={`text-[11px] sm:text-sm font-semibold tracking-wide mb-4 sm:mb-5
                text-white/90 sm:text-indigo-900/80
                transition-all duration-700 delay-300 ${
                  isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              {subtitleText}
            </p>

            <ul
              className={`space-y-2 mb-5 transition-all duration-700 delay-400 ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {uspsList.map((usp, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-xs sm:text-sm font-medium text-white sm:text-indigo-950"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/25 border border-amber-400/80">
                    <CheckCircle2 className="w-3 h-3 text-amber-300 sm:text-amber-600" />
                  </span>
                  {usp}
                </li>
              ))}
            </ul>

            <div
              className={`hidden sm:block transition-all duration-700 delay-500 ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="/images/signatureheritage/signature%20heritage%20brochure%20SALES.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-400 hover:bg-amber-500 text-indigo-950 font-bold text-xs uppercase tracking-wider px-5 py-3 shadow-md transition-all active:scale-95"
              >
                <Download className="w-4 h-4" />
                Download Brochure
              </a>
            </div>
          </div>

          {/* ===== RIGHT FORM ===== */}
          <div
            className={`lg:col-span-5 w-full max-w-[340px] mx-auto lg:ml-auto lg:mr-0 transition-all duration-700 delay-500 ${
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-2xl shadow-black/20 border border-slate-100 p-5 sm:p-6">
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-indigo-950">
                  Book A Site Visit Now!
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Share your details — we&apos;ll call you back.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-indigo-950 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/25"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-slate-500">
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
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-indigo-950 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/25"
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
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-950 hover:bg-indigo-900 text-white font-bold text-xs uppercase tracking-wider py-3.5 shadow-md transition-all active:scale-[0.98] disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <a
                  href="/images/signatureheritage/signature%20heritage%20brochure%20SALES.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:hidden flex items-center justify-center gap-2 w-full rounded-xl bg-amber-400 text-indigo-950 font-bold text-xs uppercase tracking-wider py-3"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Brochure
                </a>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}