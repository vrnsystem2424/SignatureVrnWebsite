"use client";

import React from "react";
import Image from "next/image";
import { amenities as amenitiesList } from "../../data/signatureheritage";
import ScrollReveal from "../signatureheritage/ScrollReveal";

export default function HeritageAmenities() {
  // Data file se amenities (id, icon, title, description)
  const items =
    amenitiesList?.length > 0
      ? amenitiesList
      : [
          {
            id: "clubhouse",
            icon: "🏛️",
            title: "Luxury Club House",
            description: "A premium space for recreation & social gatherings.",
          },
          {
            id: "gym",
            icon: "🏋️",
            title: "Fully Equipped Gym",
            description: "Stay active with modern fitness facilities.",
          },
          {
            id: "pool",
            icon: "🏊",
            title: "Swimming Pool",
            description: "Designed for leisure & relaxation.",
          },
          {
            id: "party",
            icon: "🎉",
            title: "Party Hall",
            description: "Perfect venue for family celebrations & events.",
          },
          {
            id: "kids",
            icon: "🎠",
            title: "Kids Play Area",
            description: "Safe & dedicated space for children.",
          },
          {
            id: "temple",
            icon: "🛕",
            title: "Community Temple",
            description: "A peaceful spiritual space within the community.",
          },
        ];

  return (
    <section id="amenities" className="py-16 sm:py-24 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full inline-block mb-3">
              Experience Premium Living
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-indigo-950 leading-tight">
              Premium Amenities At{" "}
              <span className="text-amber-500">Signature Heritage</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-lg mx-auto">
              Everything your family needs for a complete lifestyle — inside a secure gated community.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* LEFT — Clubhouse image */}
          <ScrollReveal animation="zoom-in" delay={100}>
            <div className="relative lg:sticky lg:top-28">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <Image
                  src="/images/signatureheritage/3%20CLUB%20HOUSE%20ELEVATION.jpg"
                  alt="Signature Heritage Club House"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 bg-white px-4 py-2.5 rounded-xl shadow-lg border border-slate-100">
                <p className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                  Featured
                </p>
                <p className="text-sm font-bold text-indigo-950">
                  2281 Sq.ft Club House
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT — Amenities cards grid (yeh pehle khali tha) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {items.map((item, i) => (
              <ScrollReveal key={item.id || i} animation="fade-up" delay={i * 80}>
                <div className="h-full bg-white rounded-xl border border-slate-100 p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-amber-200 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-xl mb-3">
                    {item.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-indigo-950 mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {item.description}
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