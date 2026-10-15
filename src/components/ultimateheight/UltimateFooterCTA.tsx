"use client";

import React from "react";
import { PhoneCall, ArrowRight, Calendar } from "lucide-react";
import { ultimateHeightData } from "../../data/ultimateheight";
import ScrollReveal from "./ScrollReveal";

export default function UltimateFooterCTA() {
  const openEnquiry = () => window.dispatchEvent(new Event("open-enquiry-popup"));
  const phone = ultimateHeightData.phone.replace(/[^0-9+]/g, "");

  return (
    <section className="py-16 sm:py-24 bg-blue-950 text-white overflow-hidden relative">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal animation="fade-up">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-full inline-block mb-4">
            Limited Units Available
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-4">
            Looking For A 4 BHK Flat Or{" "}
            <span className="text-amber-400">Penthouse In Bhopal?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-xl mx-auto">
            Discover Premium Living At Ultimate Heights, Near Aura Mall, Bawadiya Kalan, Shahpura. Book Your Site Visit Today!
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a href={`tel:${phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-900 text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 shadow-lg shadow-amber-400/20 transition-all active:scale-95">
              <PhoneCall className="w-4 h-4" /> Call Now
            </a>
            <button type="button" onClick={openEnquiry}
              className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-slate-100 text-blue-900 text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 shadow-lg transition-all active:scale-95">
              Enquire Now <ArrowRight className="w-4 h-4" />
            </button>
            <button type="button" onClick={openEnquiry}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 hover:border-white text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 transition-all active:scale-95">
              <Calendar className="w-4 h-4" /> Schedule A Visit
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}