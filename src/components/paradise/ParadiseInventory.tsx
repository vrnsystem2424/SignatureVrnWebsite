"use client";

import React from "react";
import { CheckCircle2, ArrowRight, Ruler, LayoutGrid, Sparkles } from "lucide-react";
import { paradiseData } from "../../data/paradise";
import ScrollReveal from "../paradise/ScrollReveal";

export default function ParadiseInventory() {
  const scrollToForm = () =>
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });

  const plots = [
    {
      size: "1100 Sq.ft",
      dimension: "22 × 50 ft",
      tag: "Most Popular",
      tagColor: "bg-emerald-100 text-emerald-800",
      features: [
        "Vastu Compliant Layout",
        "Ideal for 2–3 BHK Home",
        "Corner & Regular Options",
        "Gated Township Living",
      ],
    },
    {
      size: "1500 Sq.ft",
      dimension: "25 × 60 ft",
      tag: "Premium Choice",
      tagColor: "bg-amber-100 text-amber-800",
      features: [
        "Spacious Family Layout",
        "Ideal for 3–4 BHK Home",
        "Wider Frontage Options",
        "High Appreciation Potential",
      ],
    },
  ];

  return (
    <section id="inventory" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full inline-block mb-3">
              Available Layouts
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              Choose Your Perfect{" "}
              <span className="text-emerald-700">Plot Size</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-lg mx-auto">
              Thoughtfully planned residential plots designed for modern living
              and long-term value on Kolar Road, Bhopal.
            </p>
          </div>
        </ScrollReveal>

        {/* Project quick stats */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-12 sm:mb-14">
            {[
              { label: "Total Area", value: paradiseData.projectStats?.totalArea || "16.3 Acres" },
              { label: "Residential", value: `${paradiseData.projectStats?.residentialPlots || 272} Plots` },
              { label: "Commercial", value: `${paradiseData.projectStats?.commercialPlots || 31} Units` },
              { label: "Total Units", value: `${paradiseData.projectStats?.totalPlots || 303}` },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center rounded-xl bg-[#FAFAFA] border border-slate-100 px-3 py-4"
              >
                <div className="text-lg sm:text-xl font-bold text-emerald-700 font-serif">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Plot cards — NO PRICE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {plots.map((plot, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 150}>
              <div className="group relative h-full bg-[#FAFAFA] rounded-2xl border border-slate-200 p-6 sm:p-8 hover:shadow-xl hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                
                {/* Top row */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                      <LayoutGrid className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                        {plot.size}
                      </h3>
                      <p className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 mt-0.5">
                        <Ruler className="w-3.5 h-3.5" />
                        {plot.dimension}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${plot.tagColor}`}
                  >
                    {plot.tag}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-200 mb-5" />

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plot.features.map((feat, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA — no price, only enquire */}
                <button
                  onClick={scrollToForm}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 shadow-md shadow-emerald-700/15 transition-all active:scale-[0.98]"
                >
                  <Sparkles className="w-4 h-4" />
                  Get Availability &amp; Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom note */}
        <ScrollReveal animation="fade-up" delay={300}>
          <p className="text-center text-xs sm:text-sm text-slate-400 mt-8 max-w-md mx-auto">
            Limited inventory available. Share your details to receive current
            availability, facing options &amp; exclusive pre-launch benefits.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}