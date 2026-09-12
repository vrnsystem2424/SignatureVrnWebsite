



"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { galleryImages } from "../../data/signatureheritage";

const categories = ["All", "Exterior", "Interior", "Amenities", "Temple"];

export default function HeritageGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50/80 via-white to-amber-50/40 py-16 sm:py-24"
    >
      {/* Subtle Luxury Background Glow Accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-amber-200/35 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-amber-400/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-700 ring-1 ring-amber-400/30">
            Project Gallery
          </span>
          <h2 className="mt-3 font-serif text-3xl font-extrabold text-indigo-950 sm:text-4xl lg:text-5xl">
            A Glimpse Into Signature Heritage
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-amber-400" />
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-12 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 sm:px-6 sm:py-2.5 sm:text-sm ${
                activeCategory === cat
                  ? "bg-amber-400 text-indigo-950 shadow-md shadow-amber-400/30 scale-105"
                  : "bg-white/90 text-slate-600 border border-slate-200/80 backdrop-blur-sm hover:border-amber-400 hover:text-indigo-950 hover:bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid with White Elevated Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white p-2.5 shadow-md shadow-indigo-950/5 ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-950/10 hover:ring-amber-400"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Hover Overlay with Icon & Text */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-indigo-950/85 via-indigo-950/30 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">
                    {image.category}
                  </span>
                  <h3 className="mt-1 font-serif text-lg font-bold text-white">
                    {image.title}
                  </h3>
                  
                  {/* View Icon */}
                  <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-indigo-950 shadow-md">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Title Below Photo */}
              <div className="px-2 pt-3 pb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                  {image.category}
                </span>
                <h3 className="font-serif text-base font-bold text-indigo-950 line-clamp-1">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (Full Screen Photo Preview) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-black/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-950/80 text-white backdrop-blur-sm transition-all hover:bg-amber-400 hover:text-indigo-950"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] w-[85vw] max-w-4xl overflow-hidden rounded-xl bg-slate-100">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Modal Info */}
            <div className="p-4 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                {selectedImage.category}
              </span>
              <h3 className="mt-0.5 font-serif text-xl font-bold text-indigo-950">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}