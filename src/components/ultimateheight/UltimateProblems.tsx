"use client";

import React from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { ultimateHeightData } from "../../data/ultimateheight";
import ScrollReveal from "./ScrollReveal";

export default function UltimateProblems() {
  const openEnquiry = () => window.dispatchEvent(new Event("open-enquiry-popup"));

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue-900 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full inline-block mb-3">
              5 Things To Consider Before Buying A Luxury Flat
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              Common Problems vs{" "}
              <span className="text-blue-900">Ultimate Heights</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <ScrollReveal animation="fade-right">
            <div className="h-full rounded-2xl border border-red-100 bg-red-50/40 p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-2">5 Most Common Problems</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">Homebuyers face while purchasing luxury flats</p>
              <ul className="space-y-3.5">
                {ultimateHeightData.buyerProblems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-slate-700">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                      <X className="w-4 h-4" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={150}>
            <div className="h-full rounded-2xl border border-blue-100 bg-blue-50/50 p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-2">Why Consider Ultimate Heights?</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">The smarter alternative for Bhopal homebuyers</p>
              <ul className="space-y-3.5 mb-8">
                {ultimateHeightData.ultimateSolutions.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-900 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button type="button" onClick={openEnquiry}
                className="inline-flex items-center gap-2 rounded-full bg-blue-900 hover:bg-blue-950 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-3 shadow-md shadow-blue-900/20 transition-all active:scale-95">
                Click Here To Know More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}