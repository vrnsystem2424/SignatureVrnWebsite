"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: "📍",
    title: "Prime Location",
    description: "Main road location near Aura Mall, Shahpura with excellent connectivity",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🏗️",
    title: "Premium Construction",
    description: "G+9 structure with high-quality materials and modern architecture",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "🏊",
    title: "World-Class Amenities",
    description: "Clubhouse, pool, gym, kids zone, and 20+ premium amenities",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "📈",
    title: "High Appreciation",
    description: "96.3% sold out - Proven trust and high ROI potential",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "🚗",
    title: "Ample Parking",
    description: "Dedicated parking for every flat with visitor parking",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: "🏥",
    title: "Near Hospitals",
    description: "Bansal Hospital just 1.5 km - Emergency care within minutes",
    color: "from-rose-500 to-pink-500",
  },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 mb-4">
            <span className="text-amber-600">✨</span>
            <span className="text-sm font-semibold text-amber-700">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why <span className="text-gradient">Ultimate Heights</span>?
          </h2>
          <p className="text-lg text-slate-600">
            Discover what makes us the most trusted residential project in Bhopal
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-100 group-hover:border-transparent transition-all">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-amber-400">96.3%</p>
              <p className="text-sm text-slate-300 mt-1">Inventory Sold</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-amber-400">135+</p>
              <p className="text-sm text-slate-300 mt-1">Happy Families</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-amber-400">5</p>
              <p className="text-sm text-slate-300 mt-1">Units Left</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-amber-400">20+</p>
              <p className="text-sm text-slate-300 mt-1">Amenities</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}