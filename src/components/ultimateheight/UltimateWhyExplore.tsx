"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ultimateHeightData } from "../../data/ultimateheight";
import ScrollReveal from "./ScrollReveal";

export default function UltimateWhyExplore() {
  const openEnquiry = () => window.dispatchEvent(new Event("open-enquiry-popup"));

  return (
    <section className="py-16 sm:py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue-900 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full inline-block mb-3">
              Why Explore Ultimate Heights?
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              Your Search For Luxury{" "}
              <span className="text-blue-900">Ends Here</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {ultimateHeightData.whyExplore.map((item, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
              <div className="flex items-center gap-3 p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all h-full">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-sm sm:text-base font-semibold text-slate-700">{item}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={300}>
          <div className="text-center">
            <button type="button" onClick={openEnquiry}
              className="inline-flex items-center gap-2 rounded-full bg-blue-900 hover:bg-blue-950 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 shadow-lg shadow-blue-900/20 transition-all active:scale-95">
              Explore Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}