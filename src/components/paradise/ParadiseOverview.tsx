"use client";

import React from "react";
import { paradiseData } from "../../data/paradise";
import ScrollReveal from "../paradise/ScrollReveal";

export default function ParadiseOverview() {
  const projectName =
    (paradiseData as any)?.name ||
    paradiseData?.projectName ||
    "Signature Paradise";

  return (
    <section id="overview" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full inline-block mb-3">
              Project Overview
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight mb-4">
              A Legacy Address, <span className="text-emerald-700">Thoughtfully Planned</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {projectName} is a premium residential development crafted for those who seek nature, serenity, and modern connectivity in Bhopal.
            </p>
          </div>
        </ScrollReveal>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {paradiseData.whyChoose?.map((item, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
              <div className="bg-[#FAFAFA] border border-slate-100 rounded-2xl p-5 text-center hover:shadow-md transition-all">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}