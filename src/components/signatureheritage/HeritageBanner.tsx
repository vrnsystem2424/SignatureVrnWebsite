"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ShoppingBag, MapPin, CalendarCheck2 } from "lucide-react";

export default function HeritageBanner() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-slate-950 py-20 flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/images/signatureheritage/entry-gate.jpg"
        alt="Signature Heritage Grand Entry Gate & Commercial Plaza"
        fill
        priority
        className="object-cover object-center transition-transform duration-1000 scale-105"
        sizes="100vw"
      />

      {/* Luxury Dark Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/50 sm:via-slate-950/65" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 px-4 py-1.5 backdrop-blur-md ring-1 ring-amber-400/40">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
              Grand Entrance & Commercial Plaza
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:text-5xl leading-[1.15]">
            Where Every Arrival <br />
            <span className="text-amber-400">Feels Truly Royal</span>
          </h2>

          {/* Subtitle / Paragraph */}
          <p className="mt-4 text-sm font-medium leading-relaxed text-slate-200 sm:text-base md:text-lg">
            Experience Bhopal’s finest gated community featuring an integrated multi-story commercial plaza, wide avenues, and 24/7 security right at your doorstep on main Kolar Road.
          </p>

          {/* Highlights Badges */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-md ring-1 ring-white/15">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-400 text-slate-950">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Commercial Plaza</p>
                <p className="text-[10px] text-slate-300">Shops & Daily Needs</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-md ring-1 ring-white/15">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-400 text-slate-950">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Gated Security</p>
                <p className="text-[10px] text-slate-300">24x7 CCTV & Guards</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3 backdrop-blur-md ring-1 ring-white/15">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-400 text-slate-950">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Prime Location</p>
                <p className="text-[10px] text-slate-300">Main Kolar Road</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg shadow-amber-400/25 transition-all hover:scale-105 hover:bg-amber-300 sm:text-sm"
            >
              <CalendarCheck2 className="h-4 w-4" />
              Schedule Site Visit
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}