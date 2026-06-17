"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
  });

  useEffect(() => {
    // Show popup after 3 seconds only if not submitted before
    const timer = setTimeout(() => {
      const hasSubmitted = localStorage.getItem("enquirySubmitted");
      if (!hasSubmitted) {
        setIsOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Expose function to global scope for navbar to call
  useEffect(() => {
    (window as any).openEnquiryPopup = () => {
      setIsOpen(true);
    };
    return () => {
      delete (window as any).openEnquiryPopup;
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("enquirySubmitted", "true");
    setIsOpen(false);
    
    const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nRequirement: ${formData.requirement}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`);
    
    setFormData({ name: "", phone: "", email: "", requirement: "" });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal - White Background */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-[95%] sm:max-w-md mx-auto">
              {/* White Card */}
              <div className="relative bg-white rounded-2xl p-5 sm:p-8 shadow-2xl">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-400 hover:text-slate-900 text-2xl z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
                >
                  ×
                </button>

                {/* Header */}
                <div className="text-center mb-5 sm:mb-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 sm:px-4 sm:py-2 mb-3 sm:mb-4">
                    <span className="text-amber-600 text-sm sm:text-base">🎯</span>
                    <span className="text-xs sm:text-sm font-semibold text-amber-700">Limited Offer</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                    Only <span className="text-amber-500">5 Units</span> Left!
                  </h2>
                  <p className="text-slate-500 mt-2 text-xs sm:text-sm">
                    Book your dream home today at Ultimate Heights
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      className="w-full rounded-xl bg-gray-50 border border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 text-sm sm:text-base placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      className="w-full rounded-xl bg-gray-50 border border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 text-sm sm:text-base placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address (Optional)"
                      className="w-full rounded-xl bg-gray-50 border border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 text-sm sm:text-base placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <select
                      className="w-full rounded-xl bg-gray-50 border border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 text-sm sm:text-base focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition"
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    >
                      <option value="">Select BHK Type</option>
                      <option value="3 BHK">3 BHK Premium Flat</option>
                      <option value="4 BHK">4 BHK Luxury Flat</option>
                      <option value="Penthouse">Penthouse Suite</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-2.5 sm:py-3 rounded-xl hover:scale-105 transition-transform text-sm sm:text-base shadow-lg"
                  >
                    Get Best Price →
                  </button>
                </form>

                {/* Footer Note */}
                <p className="text-center text-[11px] sm:text-xs text-slate-400 mt-4">
                  No spam. Our team will contact you shortly
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}