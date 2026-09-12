"use client";

import React from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { heritageData } from "../../data/signatureheritage";
import ScrollReveal from "../signatureheritage/ScrollReveal";

export default function HeritageProblems() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-indigo-800 bg-indigo-100/50 border border-indigo-200 px-3 py-1.5 rounded-full inline-block mb-3">
              Make A Smart Choice
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-indigo-950 leading-tight">
              Common Buyer Problems vs{" "}
              <span className="text-amber-600">Signature Heritage</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Problems */}
          <ScrollReveal animation="fade-right">
            <div className="h-full rounded-2xl border border-red-100 bg-red-50/50 p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-2">
                5 Most Common Problems
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Home buyers face in traditional projects
              </p>
              <ul className="space-y-4">
                {heritageData.buyerProblems?.map((item, i) => (
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

          {/* Solutions (Signature Heritage) */}
          <ScrollReveal animation="fade-left" delay={150}>
            <div className="h-full rounded-2xl border border-indigo-200 bg-indigo-50/50 p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-indigo-950 mb-2">
                Why Signature Heritage?
              </h3>
              <p className="text-xs sm:text-sm text-indigo-800/70 mb-6">
                The perfect lifestyle solution for your family
              </p>
              <ul className="space-y-4 mb-8">
                {heritageData.heritageSolutions?.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-indigo-900 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-950 hover:bg-indigo-900 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-3 shadow-md transition-all active:scale-95"
              >
                Click Here To Know More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}