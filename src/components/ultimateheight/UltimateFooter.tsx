"use client";

import React from "react";
import { PhoneCall, MapPin, Mail } from "lucide-react";
import { ultimateHeightData } from "../../data/ultimateheight";

export default function UltimateFooter() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t-4 border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-10 border-b border-slate-800 pb-10">
          <div>
            <h2 className="font-serif text-2xl font-bold text-white mb-4">Ultimate Heights</h2>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Luxury 4 BHK flats and exclusive penthouses near Aura Mall, Bawadiya Kalan, Bhopal. Premium construction with 20+ world-class amenities.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><a href="#home" className="text-sm hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#features" className="text-sm hover:text-amber-400 transition-colors">Premium Features</a></li>
              <li><a href="#amenities" className="text-sm hover:text-amber-400 transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="text-sm hover:text-amber-400 transition-colors">Gallery</a></li>
              <li><a href="#location" className="text-sm hover:text-amber-400 transition-colors">Location &amp; Map</a></li>
              <li><a href="#faq" className="text-sm hover:text-amber-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">Ultimate Heights, Near Aura Mall, Behind Indus Empire, Bawadiya Kalan, Bhopal, M.P.</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-amber-500 shrink-0" />
                <a href={`tel:${ultimateHeightData.phone}`} className="text-sm hover:text-amber-400 transition-colors">{ultimateHeightData.phone}</a>
              </li>
              {/* <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <a href="mailto:info@ultimateheights.in" className="text-sm hover:text-amber-400 transition-colors"></a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="text-center mb-6">
          <p className="text-[10px] text-slate-500 leading-relaxed max-w-5xl mx-auto text-justify sm:text-center">
            <strong className="text-slate-400 uppercase tracking-wider block mb-1">Popular Searches:</strong>
            {ultimateHeightData.popularSearches}
          </p>
        </div>

        <div className="text-center pt-4 border-t border-slate-800">
          <p className="text-xs font-semibold text-slate-500 tracking-wide">
            &copy; {new Date().getFullYear()} Ultimate Heights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}