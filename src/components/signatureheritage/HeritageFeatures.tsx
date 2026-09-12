"use client";

import React from "react";
import { CheckCircle2, ArrowRight, MapPin, Building2 } from "lucide-react";
import { heritageData } from "../../data/signatureheritage";
import ScrollReveal from "../signatureheritage/ScrollReveal";

export default function HeritageFeatures() {
  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-indigo-800 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full inline-block mb-3">
              Features & Advantages
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-indigo-950 leading-tight">
              Premium Community <span className="text-amber-600">& Location Benefits</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          <ScrollReveal animation="fade-right">
            <div className="h-full bg-[#FAF9F6] rounded-2xl border border-slate-200 p-6 sm:p-8 hover:shadow-xl hover:border-amber-200 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-900">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-indigo-950">
                  Premium Community Features
                </h3>
              </div>
              <ul className="space-y-3 mb-8">
                {heritageData.communityFeatures?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <CheckCircle2 className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-indigo-950 hover:bg-indigo-900 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-3 transition-all active:scale-95">
                Get Project Details <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={150}>
            <div className="h-full bg-indigo-950 rounded-2xl border border-indigo-900 p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                  Exclusive Lifestyle Advantages
                </h3>
              </div>
              <ul className="space-y-3 mb-8">
                {heritageData.lifestyleAdvantages?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-indigo-100">
                    <CheckCircle2 className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-amber-400 hover:bg-amber-500 text-indigo-950 text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-3 transition-all active:scale-95">
                Get Lifestyle Benefits <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}