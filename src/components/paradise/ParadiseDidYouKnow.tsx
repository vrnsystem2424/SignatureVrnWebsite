"use client";

import React from "react";
import { Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react";
import { paradiseData } from "../../data/paradise";
import ScrollReveal from "../paradise/ScrollReveal";

export default function ParadiseDidYouKnow() {
  const scrollToForm = () =>
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-16 sm:py-24 bg-emerald-950 text-white overflow-hidden relative">
      <div className="pointer-events-none absolute top-0 left-1/4 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 mb-3">
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                Did You Know
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold leading-tight">
              Facts About Premium{" "}
              <span className="text-amber-400">Plotted Developments</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto mb-10">
          {paradiseData.didYouKnow.map((fact, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
              <div className="flex items-start gap-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-400/30 transition-all h-full">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-medium">
                  {fact}
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