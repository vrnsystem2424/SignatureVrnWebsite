import React from "react";
import { Compass, Tag, Map, TreePine } from "lucide-react";
import ScrollReveal from "../paradise/ScrollReveal";

export default function ParadiseUSPs() {
  const usps = [
    { icon: <Compass className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Vastu Compliant Plots", desc: "East & West Facing" },
    { icon: <Tag className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Starting From", desc: "1100 Sq.ft Onwards" },
    { icon: <Map className="w-5 h-5 sm:w-6 sm:h-6" />, title: "River View Location", desc: "Premium Destination" },
    { icon: <TreePine className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Premium Amenities", desc: "Clubhouse & Gardens" }
  ];

  return (
    <section className="bg-white border-b border-slate-100 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Mobile: 2x2 Grid, Desktop: 1x4 Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 divide-x-0 lg:divide-x divide-slate-100">
          {usps.map((item, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
              <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-2 sm:p-0 ${i !== 0 ? "lg:pl-8" : ""}`}>
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-xs sm:text-base leading-tight">{item.title}</h3>
                  <p className="text-slate-500 text-[10px] sm:text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}