"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { overviewContent, overviewStats } from "../../data/signatureheritage";
import ScrollReveal from "../signatureheritage/ScrollReveal";

export default function HeritageOverview() {
  return (
    <section id="overview" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* LEFT — Statement of Area copy */}
          <div>
            <ScrollReveal animation="fade-right">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full inline-block mb-3">
                {overviewContent.eyebrow}
                {/* → "The Statement of Area" */}
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-indigo-950 leading-tight mb-4">
                {overviewContent.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {overviewContent.description}
              </p>
            </ScrollReveal>

            <ul className="space-y-3">
              {overviewContent.highlights.map((item, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                  <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400/15 border border-amber-400/40 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                    </span>
                    <span>{item}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>

          {/* RIGHT — Stats cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {overviewStats.map((stat, i) => (
              <ScrollReveal key={stat.id} animation="zoom-in" delay={i * 100}>
                <div className="relative overflow-hidden rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50/80 to-white p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-300 h-full">
                  <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-amber-100/60" />
                  <div className="relative">
                    <p className="font-serif text-2xl sm:text-3xl font-bold text-indigo-950 leading-none">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-600">
                      {stat.unit}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm font-medium text-slate-600">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}