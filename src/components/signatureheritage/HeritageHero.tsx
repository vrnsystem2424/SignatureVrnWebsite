"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, MapPin, Download } from "lucide-react";
import { heroContent } from "../../data/signatureheritage";

export default function HeritageHero() {
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;
    if (!/^[0-9]{10}$/.test(formData.phone.trim())) return;

    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 1200));
      setSubmitted(true);
    } finally {
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
        {/* Desktop: halka left fade */}
        <div className="absolute inset-0 hidden sm:block bg-gradient-to-r from-white/60 via-white/25 to-transparent" />
        {/* Mobile: neeche dark band */}
        <div className="absolute inset-0 sm:hidden bg-gradient-to-t from-black/75 via-black/35 to-black/10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-24 pb-28 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">

          {/* ===== LEFT TEXT ===== */}
          <div className="lg:col-span-7 max-w-xl">
            
            {/* 1. EYEBROW BADGE - BADA KIYA GAYA HAI */}
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

            {/* 2. HEADLINE - "Own Your Dream Duplex At" CHOTA, "Signature Heritage" BADA */}
            <h1
              className={`font-serif leading-[1.2] mb-3 sm:mb-4 transition-all duration-700 delay-200 ${
                isMounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
            >
              {/* Line 1: Chota Text */}
              <span className="block text-base sm:text-xl lg:text-3xl font-semibold text-white sm:text-indigo-950/90 mb-1 drop-shadow-md sm:drop-shadow-none">
                Own Your Dream Duplex At
              </span>
              {/* Line 2: Bada Highlighted Text */}
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-400 sm:text-amber-500 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:drop-shadow-none">
                Signature Heritage
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-[11px] sm:text-sm font-semibold tracking-wide mb-4 sm:mb-5
                text-white/90 sm:text-indigo-900/80
                transition-all duration-700 delay-300 ${
                  isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              {subtitleText}
            </p>

            {/* USPs */}
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

            {/* Brochure Button */}
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
              {submitted ? (
                <div className="text-center py-6">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 border border-amber-100">
                    <CheckCircle2 className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-indigo-950 mb-1">Thank You!</h3>
                  <p className="text-xs text-slate-600">
                    Your request has been received. Our team will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "" });
                    }}
                    className="mt-4 text-[10px] font-bold uppercase text-indigo-800 underline underline-offset-4"
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <>
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
                        required
                        maxLength={10}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-indigo-950 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/25"
                      />
                    </div>

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
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}