"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { heritageData } from "../../data/signatureheritage";
import ScrollReveal from "../signatureheritage/ScrollReveal";

export default function HeritageReasons() {
  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full inline-block mb-3">
              Unmatched Value
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-indigo-950 leading-tight">
              10 Reasons Why Signature Heritage Is Your{" "}
              <span className="text-amber-600">Best Duplex Choice In Bhopal</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* List of 10-15 Reasons mapping */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-10">
          {heritageData.reasons?.map((reason, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={(i % 6) * 60}>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#FAF9F6] border border-slate-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all h-full">
                <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-900 text-xs font-bold border border-indigo-100">
                  {i + 1}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug flex-1">
                  {reason}
                </p>
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 hidden sm:block" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-950 hover:bg-indigo-900 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 shadow-lg transition-all active:scale-95"
            >
              Get Full Project Details
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}