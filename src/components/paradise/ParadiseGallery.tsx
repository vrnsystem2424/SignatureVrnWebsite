"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { paradiseData } from "../../data/paradise";
import ScrollReveal from "../paradise/ScrollReveal";

export default function ParadiseGallery() {
  const galleryList = (paradiseData as any)?.gallery || [
    {
      title: "Grand Entrance View",
      category: "Exterior",
      src: "/images/paradise/Signature Paradise front view.jpg",
      alt: "Signature Paradise Front Entrance Gate",
    },
    {
      title: "Club House Side View",
      category: "Amenities",
      src: "/images/paradise/Signature Paradise Club House Side view.jpg",
      alt: "Signature Paradise Club House Side View",
    },
    {
      title: "Township Boundary Wall",
      category: "Exterior",
      src: "/images/paradise/Signature Paradise -Boundarywall.jpg",
      alt: "Signature Paradise Boundary Wall",
    },
  ];

  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full inline-block mb-3">
              Project Gallery
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              A Glimpse Into <span className="text-emerald-700">Signature Paradise</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {galleryList.map((img: any, i: number) => (
            <ScrollReveal key={i} animation="zoom-in" delay={i * 100}>
              <div
                onClick={() => setSelectedImage(img)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={img.src}
                    alt={img.alt || img.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                        {img.category}
                      </span>
                      <h3 className="text-sm font-bold text-white font-serif">{img.title}</h3>
                    </div>
                    <div className="ml-auto w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-950/80 text-white flex items-center justify-center hover:bg-amber-400 hover:text-slate-950 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-100">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="font-serif font-bold text-slate-900">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}