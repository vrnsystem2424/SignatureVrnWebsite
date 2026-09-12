"use client";

import React from "react";
import { Quote, ArrowRight, Star } from "lucide-react";
import { paradiseData } from "../../data/paradise";
import ScrollReveal from "../paradise/ScrollReveal";

export default function ParadiseTestimonials() {
  const scrollToForm = () =>
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-16 sm:py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full inline-block mb-3">
              What Our Customers Say
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              Testimonials From{" "}
              <span className="text-emerald-700">Happy Plot Owners</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {paradiseData.testimonials.map((t, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 120}>
              <div className="h-full bg-white rounded-2xl border border-slate-100 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-emerald-200" />
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-sm font-bold text-slate-900">– {t.name}</p>
                  <p className="text-[10px] uppercase tracking-wider text-emerald-600 font-semibold mt-0.5">
                    Signature Paradise
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={350}>
          <div className="text-center">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 shadow-lg shadow-emerald-700/20 transition-all active:scale-95"
            >
              Get Preference In Your City
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}