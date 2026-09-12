"use client";

import React from "react";
import { Home, Sparkles, Waves, MapPin } from "lucide-react";
import { heritageData } from "../../data/signatureheritage";
import ScrollReveal from "../signatureheritage/ScrollReveal";

export default function HeritageUSPs() {
  const icons = [
    <Home className="w-5 h-5 sm:w-6 sm:h-6" />,
    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
    <Waves className="w-5 h-5 sm:w-6 sm:h-6" />,
    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
  ];

  return (
    <section className="bg-white border-b border-slate-100 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 lg:divide-x divide-slate-100">
          {heritageData.strip?.features.map((item, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
              <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-2 sm:p-0 ${i !== 0 ? "lg:pl-8" : ""}`}>
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-900 border border-indigo-100">
                  {icons[i] || icons[0]}
                </div>
                <div>
                  <h3 className="text-indigo-950 font-bold text-xs sm:text-base leading-tight">{item.title}</h3>
                  <p className="text-slate-500 text-[10px] sm:text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}