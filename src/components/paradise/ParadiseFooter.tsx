"use client";

import React from "react";
import { PhoneCall, MapPin, Mail } from "lucide-react";
import { paradiseData } from "../../data/paradise";

export default function ParadiseFooter() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t-4 border-emerald-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-10 border-b border-slate-800 pb-10">
          
          {/* Brand Info */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-white mb-4">
              Signature Paradise
            </h2>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              A premium river view township offering Vastu-compliant residential plots. Built with world-class infrastructure and thoughtful amenities on Kolar Road.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li><a href="#home" className="text-sm hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#features" className="text-sm hover:text-emerald-400 transition-colors">Premium Features</a></li>
              <li><a href="#amenities" className="text-sm hover:text-emerald-400 transition-colors">Clubhouse & Amenities</a></li>
              <li><a href="#inventory" className="text-sm hover:text-emerald-400 transition-colors">Pricing & Floor Plans</a></li>
              <li><a href="#location" className="text-sm hover:text-emerald-400 transition-colors">Location & Map</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">Signature Paradise, Near Smart IT Park, Kolar Road, Bhopal, M.P.</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-emerald-500 shrink-0" />
                <a href={`tel:${paradiseData.phone}`} className="text-sm hover:text-emerald-400 transition-colors">{paradiseData.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <a href="mailto:info@signatureparadise.in" className="text-sm hover:text-emerald-400 transition-colors">info@signatureparadise.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO / Popular Searches Block */}
        <div className="text-center mb-6">
          <p className="text-[10px] text-slate-500 leading-relaxed max-w-5xl mx-auto text-justify sm:text-center">
            <strong className="text-slate-400 uppercase tracking-wider block mb-1">Popular Searches:</strong> 
            {paradiseData.popularSearches}
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center pt-4 border-t border-slate-800">
          <p className="text-xs font-semibold text-slate-500 tracking-wide">
            &copy; {new Date().getFullYear()} Signature Paradise. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}