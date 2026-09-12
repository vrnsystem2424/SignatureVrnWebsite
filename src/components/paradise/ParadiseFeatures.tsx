"use client";

import React from "react";
import { CheckCircle2, ArrowRight, MapPin, Building2 } from "lucide-react";
import { paradiseData } from "../../data/paradise";
import ScrollReveal from "../paradise/ScrollReveal";

export default function ParadiseFeatures() {
  const scrollToForm = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="features" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full inline-block mb-3">
              Premium Features &amp; Location
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              Everything You Need For A{" "}
              <span className="text-emerald-700">Better Lifestyle</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Township Features */}
          <ScrollReveal animation="fade-right" delay={100}>
            <div className="h-full bg-[#FAFAFA] rounded-2xl border border-slate-100 p-6 sm:p-8 hover:shadow-xl hover:border-emerald-100 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900">
                  Premium Township Features
                </h3>
              </div>

              <ul className="space-y-3 mb-8">
                {paradiseData.townshipFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <CheckCircle2 className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-3 shadow-md shadow-emerald-700/20 transition-all active:scale-95"
              >
                Get Project Details
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>

          {/* Location Advantages */}
          <ScrollReveal animation="fade-left" delay={200}>
            <div className="h-full bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                  Exclusive Location Advantages
                </h3>
              </div>

              <ul className="space-y-3 mb-8">
                {paradiseData.locationAdvantages.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-300">
                    <CheckCircle2 className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-900 text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-3 shadow-md shadow-amber-400/20 transition-all active:scale-95"
              >
                Get Location Benefits
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}