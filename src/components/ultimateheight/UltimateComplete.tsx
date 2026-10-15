"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ultimateHeightData } from "../../data/ultimateheight";
import ScrollReveal from "./ScrollReveal";

export default function UltimateComplete() {
  const openEnquiry = () => window.dispatchEvent(new Event("open-enquiry-popup"));

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue-900 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full inline-block mb-3">
              Complete Luxury Lifestyle
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              Everything You Need For{" "}
              <span className="text-blue-900">Premium Living</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {ultimateHeightData.completeLifestyle.map((item, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={(i % 8) * 50}>
              <div className="flex items-center gap-2.5 p-3.5 sm:p-4 rounded-xl bg-[#FAFAFA] border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-all h-full">
                <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">{item}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="text-center">
            <button type="button" onClick={openEnquiry}
              className="inline-flex items-center gap-2 rounded-full bg-blue-900 hover:bg-blue-950 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 shadow-lg shadow-blue-900/20 transition-all active:scale-95">
              Know More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}