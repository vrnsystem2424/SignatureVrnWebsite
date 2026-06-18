"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";

const stats = [
  { value: "96.3%", label: "Inventory Sold", color: "text-amber-500" },
  { value: "135+", label: "Happy Families", color: "text-amber-500" },
  { value: "5", label: "Units Left", color: "text-purple-400" },
  { value: "20+", label: "Amenities", color: "text-amber-500" },
];

export default function Highlights() {
  return (
    <section className="bg-white pt-8 lg:pt-12 pb-0">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
          //          ✅ Removed max-w-5xl, now full width
        >
          <div className="bg-slate-900 rounded-3xl p-6 lg:p-12 shadow-2xl border border-slate-800">
            {/*                                ✅ Increased padding lg:p-12 for breathing room */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-4xl lg:text-6xl font-bold ${stat.color} mb-2`}>
                    {/*                  ✅ Bigger numbers on desktop (text-6xl) */}
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm lg:text-base font-medium">
                    {/*                          ✅ Bigger labels on desktop */}
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}