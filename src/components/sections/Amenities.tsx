

"use client";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import AnimatedSection from "../ui/AnimatedSection";
import { motion } from "framer-motion";

const amenities = [
  { name: "Clubhouse", icon: "🏛️", color: "from-purple-500 to-pink-500" },
  { name: "Swimming Pool", icon: "🏊", color: "from-blue-500 to-cyan-500" },
  { name: "Kids Zone", icon: "🎠", color: "from-green-500 to-emerald-500" },
  { name: "Senior Citizen Features", icon: "👴", color: "from-orange-500 to-red-500" },
  { name: "Indoor Games", icon: "🎯", color: "from-yellow-500 to-amber-500" },
  { name: "Gymnasium", icon: "💪", color: "from-red-500 to-pink-500" },
  { name: "Landscaped Gardens", icon: "🌿", color: "from-green-500 to-teal-500" },
  { name: "24/7 Security", icon: "🔒", color: "from-slate-500 to-gray-500" },
  { name: "Power Backup", icon: "⚡", color: "from-yellow-500 to-orange-500" },
  { name: "Water Treatment", icon: "💧", color: "from-blue-500 to-indigo-500" },
];

export default function Amenities() {
  return (
    <section  id="amenities" className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="World-Class Amenities"
            title="Experience Luxury Like Never Before"
            description="Every detail crafted for your comfort, health, and happiness"
          />
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
          {amenities.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 group-hover:border-white/20 transition-all">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-white mt-2">{item.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-6 py-3">
            <span className="text-amber-400 text-xl">✦</span>
            <span className="text-slate-300">Plus many more premium amenities</span>
            <span className="text-amber-400 text-xl">✦</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}