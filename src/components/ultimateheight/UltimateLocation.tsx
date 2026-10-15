"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { ultimateHeightData } from "../../data/ultimateheight";
import ScrollReveal from "./ScrollReveal";

export default function UltimateLocation() {
  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue-900 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full inline-block mb-3">
              Strategic Location
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              Perfectly Connected To <span className="text-blue-900">The Heart Of Bhopal</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ScrollReveal animation="fade-right">
            <div className="w-full h-[350px] sm:h-[450px] lg:h-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <iframe src={ultimateHeightData.mapEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm h-full">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-900" />
                Distance From Key Landmarks
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {ultimateHeightData.landmarks.map((mark, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                    <span className="text-sm font-medium text-slate-700">{mark.name}</span>
                    <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2 py-1 rounded">{mark.dist}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}