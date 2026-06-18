"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import Image from "next/image";

const amenities = [
  { name: "Grand Clubhouse", icon: "🏛️", description: "2,500 sq.ft. premium clubhouse" },
  { name: "Swimming Pool", icon: "🏊", description: "Temperature controlled pool" },
  { name: "State-of-art Gym", icon: "💪", description: "Modern equipment & trainer" },
  { name: "Kids Play Area", icon: "🎪", description: "Safe & fun zone for children" },
  { name: "Jogging Track", icon: "🏃", description: "Rooftop jogging track" },
  { name: "Indoor Games", icon: "🎯", description: "Table tennis, billiards, chess" },
  { name: "Landscaped Garden", icon: "🌳", description: "Green oasis in city" },
  { name: "Party Hall", icon: "🎉", description: "Celebrate special moments" },
  { name: "Yoga Deck", icon: "🧘", description: "Meditation & yoga area" },
  { name: "Senior Citizen Zone", icon: "👴", description: "Dedicated space for elders" },
];

export default function AmenitiesPremium() {
  return (
    <section id="amenities" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-2 mb-4 backdrop-blur-sm">
            <span className="text-amber-400">🌟</span>
            <span className="text-sm font-semibold text-amber-400">World-Class Amenities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Live a Life of <span className="text-gradient">Luxury</span>
          </h2>
          <p className="text-lg text-slate-300">
            Experience 20+ premium amenities designed for modern family living
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {amenities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:border-amber-500/50 transition-all h-full">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform inline-block">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{item.name}</h3>
                <p className="text-slate-400 text-xs">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <a
            href="#enquire"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-8 py-3 font-semibold hover:scale-105 transition-all"
          >
            Book a Tour Now <span>→</span>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}