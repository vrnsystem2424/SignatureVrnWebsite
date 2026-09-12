"use client";

import React from "react";
import Image from "next/image";
import { heritageData } from "../../data/signatureheritage";
import ScrollReveal from "../signatureheritage/ScrollReveal";

export default function HeritageWhyChoose() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <ScrollReveal animation="fade-right">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-indigo-800 bg-indigo-100/50 border border-indigo-200 px-3 py-1.5 rounded-full inline-block mb-3 sm:mb-4">
                Why Choose Signature Heritage?
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-indigo-950 leading-tight mb-8">
                A Perfect Blend Of <span className="text-amber-600">Luxury & Comfort</span>
              </h2>
            </ScrollReveal>
            
            <div className="space-y-6 sm:space-y-8">
              {heritageData.whyChoose?.map((item, i) => (
                <ScrollReveal key={i} animation="fade-up" delay={i * 150}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-xl sm:text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-indigo-950">{item.title}</h3>
                      <p className="text-slate-600 text-xs sm:text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2 px-4 sm:px-0">
            <ScrollReveal animation="zoom-in" delay={200}>
              <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-amber-200 rounded-full blur-2xl opacity-40" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 sm:w-40 sm:h-40 bg-indigo-200 rounded-full blur-2xl opacity-40" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
                <Image 
                  src="/images/signatureheritage/2%20ENTRY%20GATE.jpg"
                  alt="Signature Heritage Entry Gate" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}