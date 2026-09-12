"use client";

import React from "react";
import Image from "next/image";
import { paradiseData } from "../../data/paradise";
import ScrollReveal from "../paradise/ScrollReveal";

export default function ParadiseAmenities() {
  return (
    <section id="amenities" className="py-16 sm:py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full inline-block mb-3">
              Experience Premium Living
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              Premium Amenities At{" "}
              <span className="text-emerald-700">Signature Paradise</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Clubhouse Image */}
          <ScrollReveal animation="zoom-in" delay={100}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-28 h-28 bg-emerald-100 rounded-full blur-2xl opacity-70" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white">
                <Image
                  src={paradiseData.images.clubhouse}
                  alt="Signature Paradise Clubhouse"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-lg border border-slate-100">
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Featured</p>
                <p className="text-sm font-bold text-slate-900">5000 Sq.ft Clubhouse</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {paradiseData.amenities.map((item, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                <div className="bg-white rounded-xl border border-slate-100 p-4 sm:p-5 shadow-sm hover:shadow-lg hover:border-emerald-100 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-xl mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}