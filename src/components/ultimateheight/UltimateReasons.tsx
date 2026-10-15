"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ultimateHeightData } from "../../data/ultimateheight";
import ScrollReveal from "./ScrollReveal";

export default function UltimateReasons() {
  const openEnquiry = () => window.dispatchEvent(new Event("open-enquiry-popup"));

  return (
    <section className="py-16 sm:py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue-900 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full inline-block mb-3">
              Best Investment Choice
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              10 Reasons To Choose{" "}
              <span className="text-blue-900">Ultimate Heights In Bhopal</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-10">
          {ultimateHeightData.tenReasons.map((reason, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={(i % 6) * 60}>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all h-full">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-900 text-xs font-bold border border-blue-100">
                  {i + 1}
                </span>
                <p className="text-sm font-medium text-slate-700 leading-snug flex-1">{reason}</p>
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 hidden sm:block" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="text-center">
            <button type="button" onClick={openEnquiry}
              className="inline-flex items-center gap-2 rounded-full bg-blue-900 hover:bg-blue-950 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 shadow-lg shadow-blue-900/20 transition-all active:scale-95">
              Get Full Project Details <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}