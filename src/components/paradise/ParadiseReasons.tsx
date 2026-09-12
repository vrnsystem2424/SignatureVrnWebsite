"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { paradiseData } from "../../data/paradise";
import ScrollReveal from "../paradise/ScrollReveal";

export default function ParadiseReasons() {
  const scrollToForm = () =>
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-16 sm:py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full inline-block mb-3">
              Best Investment Choice
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              Reasons Why Signature Paradise Is Your{" "}
              <span className="text-emerald-700">Best Plot Investment In Bhopal</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-10">
          {paradiseData.tenReasons.map((reason, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={(i % 6) * 60}>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 hover:-translate-y-0.5 transition-all h-full">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                  {i + 1}
                </span>
                <p className="text-sm font-medium text-slate-700 leading-snug flex-1">
                  {reason}
                </p>
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 hidden sm:block" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={200}>
          <div className="text-center">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 shadow-lg shadow-emerald-700/20 transition-all active:scale-95"
            >
              Get Full Project Details
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}