"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import { ultimateHeightData } from "../../data/ultimateheight";
import ScrollReveal from "./ScrollReveal";

export default function UltimateGallery() {
  const openEnquiry = () => window.dispatchEvent(new Event("open-enquiry-popup"));
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue-900 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full inline-block mb-3">
              Ultimate Heights Gallery
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              Visualize Your{" "}
              <span className="text-blue-900">Dream Home</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-10">
          {ultimateHeightData.gallery.map((img, i) => (
            <ScrollReveal key={i} animation="zoom-in" delay={i * 80}>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs sm:text-sm font-bold">{img.title}</p>
                  <p className="text-white/70 text-[10px]">{img.category}</p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={300}>
          <div className="text-center">
            <button type="button" onClick={openEnquiry}
              className="inline-flex items-center gap-2 rounded-full border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 transition-all active:scale-95">
              See More Project Images <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[300] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white/70 hover:text-white" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <Image src={ultimateHeightData.gallery[lightbox].src} alt={ultimateHeightData.gallery[lightbox].alt} fill className="object-contain rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
}