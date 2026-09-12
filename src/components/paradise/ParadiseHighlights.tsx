"use client";

import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { paradiseData } from "../../data/paradise";
import ScrollReveal from "../paradise/ScrollReveal";

export default function ParadiseHighlights() {
  const scrollToForm = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="highlights" className="py-16 sm:py-24 bg-emerald-950 text-white overflow-hidden relative">
      {/* Soft glow */}
      <div className="pointer-events-none absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-full inline-block mb-3">
              Our Project Highlights
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold leading-tight">
              Signature Paradise — A Perfect Blend Of{" "}
              <span className="text-amber-400">Nature &amp; Connectivity</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {paradiseData.highlights.map((item, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
              <div className="flex items-center gap-3 p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300 h-full">
                <div className="w-9 h-9 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-amber-400" />
                </div>
                <p className="text-sm sm:text-base font-medium text-slate-100 leading-snug">
                  {item}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={400}>
          <div className="text-center">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-900 text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 shadow-lg shadow-amber-400/20 transition-all active:scale-95"
            >
              Click Here To Know More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}