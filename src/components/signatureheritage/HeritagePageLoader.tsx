"use client";

import React, { useState, useEffect } from "react";

export default function HeritagePageLoader() {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeAway, setFadeAway] = useState(false);

  useEffect(() => {
    // Check if page is already loaded
    if (document.readyState === "complete") {
      setFadeAway(true);
      const timer = setTimeout(() => setShowLoader(false), 400);
      return () => clearTimeout(timer);
    } else {
      const handleLoad = () => {
        setFadeAway(true);
        setTimeout(() => setShowLoader(false), 400);
      };

      window.addEventListener("load", handleLoad);
      
      // Fallback: Agar assets zyada time lein to 1.2s me force close ho jaye
      const fallbackTimer = setTimeout(() => {
        setFadeAway(true);
        setTimeout(() => setShowLoader(false), 400);
      }, 1200);

      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  if (!showLoader) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-500 ease-out ${
        fadeAway 
          ? "opacity-0 pointer-events-none backdrop-blur-0" 
          : "opacity-100 backdrop-blur-[6px] bg-white/20"
      }`}
    >
      {/* Absolute clean layout wrapper */}
      <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/60 border border-white/20 shadow-xl backdrop-blur-md">
        
        {/* Elegant Gold Circular Spinner */}
        <div className="relative h-12 w-12 flex items-center justify-center mb-3">
          {/* Static subtle background track ring */}
          <div className="absolute h-full w-full rounded-full border-[3px] border-slate-900/5" />
          {/* Animated golden active ring */}
          <div className="absolute h-full w-full rounded-full border-[3px] border-amber-500 border-t-transparent animate-spin" />
        </div>

        {/* Brand Label */}
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-950">
          Signature Heritage
        </span>
      </div>
    </div>
  );
}