"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ultimateHeightData } from "../../data/ultimateheight";
import ScrollReveal from "./ScrollReveal";

export default function UltimateWhyChoose() {
  const openEnquiry = () => window.dispatchEvent(new Event("open-enquiry-popup"));

  return (
    <section className="py-16 sm:py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <ScrollReveal animation="fade-right">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue-900 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full inline-block mb-3 sm:mb-4">
                Why Choose Ultimate Heights?
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight mb-8">
                A Perfect Blend Of <span className="text-blue-900">Luxury &amp; Convenience</span>
              </h2>
            </ScrollReveal>

            <div className="space-y-6 sm:space-y-8">
              {ultimateHeightData.whyChoose.map((item, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 150}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-xl sm:text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 text-xs sm:text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal animation="fade-up" delay={300}>
              <button type="button" onClick={openEnquiry}
                className="mt-8 sm:mt-10 inline-flex items-center gap-2 rounded-full bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-7 py-3.5 shadow-lg shadow-blue-900/25 active:scale-[0.98] transition-all duration-200">
                Know More <ArrowRight className="w-4 h-4" />
              </button>
            </ScrollReveal>
          </div>

          <div className="relative order-1 lg:order-2 px-4 sm:px-0">
            <ScrollReveal animation="zoom-in" delay={200}>
              <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-amber-100 rounded-full blur-2xl opacity-60" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 sm:w-40 sm:h-40 bg-blue-100 rounded-full blur-2xl opacity-60" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
                <Image src={ultimateHeightData.images.exterior} alt="Ultimate Heights Exterior" width={800} height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-right-8 bg-white p-3 sm:p-5 rounded-xl shadow-xl border border-slate-100 max-w-[160px] sm:max-w-[200px]">
                <div className="text-blue-900 font-bold text-xl sm:text-2xl">G+9</div>
                <div className="text-slate-600 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-1">Premium Tower</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}