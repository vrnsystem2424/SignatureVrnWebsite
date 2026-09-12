"use client";

import React from "react";
import { Quote, ArrowRight, Star } from "lucide-react";
import { heritageData } from "../../data/signatureheritage";
import ScrollReveal from "../signatureheritage/ScrollReveal";

export default function HeritageTestimonials() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-indigo-800 bg-indigo-100/50 border border-indigo-200 px-3 py-1.5 rounded-full inline-block mb-3">
              What Our Customers Say
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-indigo-950 leading-tight">
              Testimonials From{" "}
              <span className="text-amber-600">Happy Homeowners</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {heritageData.testimonials?.map((t, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 120}>
              <div className="h-full bg-white rounded-2xl border border-slate-100 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-300 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-indigo-100" />
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed flex-1 mb-6 font-medium italic">
                  "{t.quote}"
                </p>
                
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-sm font-bold text-indigo-950">– {t.name}</p>
                  <p className="text-[10px] uppercase tracking-wider text-amber-600 font-bold mt-0.5">
                    Signature Heritage
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}