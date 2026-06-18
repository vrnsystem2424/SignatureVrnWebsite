// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function EnquiryPopup() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     requirement: "",
//   });

//   useEffect(() => {
//     // Show popup after 3 seconds only if not submitted before
//     const timer = setTimeout(() => {
//       const hasSubmitted = localStorage.getItem("enquirySubmitted");
//       if (!hasSubmitted) {
//         setIsOpen(true);
//       }
//     }, 6000);

//     return () => clearTimeout(timer);
//   }, []);

//   // Expose function to global scope for navbar to call
//   useEffect(() => {
//     (window as any).openEnquiryPopup = () => {
//       setIsOpen(true);
//     };
//     return () => {
//       delete (window as any).openEnquiryPopup;
//     };
//   }, []);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     localStorage.setItem("enquirySubmitted", "true");
//     setIsOpen(false);
    
//     const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nRequirement: ${formData.requirement}`;
//     window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`);
    
//     setFormData({ name: "", phone: "", email: "", requirement: "" });
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/70 z-50"
//             onClick={() => setIsOpen(false)}
//           />
          
//           {/* Modal - White Background */}
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.8, opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4"
//           >
//             <div className="relative w-full max-w-[95%] sm:max-w-md mx-auto">
//               {/* White Card */}
//               <div className="relative bg-white rounded-2xl p-5 sm:p-8 shadow-2xl">
//                 {/* Close Button */}
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-400 hover:text-slate-900 text-2xl z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
//                 >
//                   ×
//                 </button>

//                 {/* Header */}
//                 <div className="text-center mb-5 sm:mb-6">
//                   <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 sm:px-4 sm:py-2 mb-3 sm:mb-4">
//                     <span className="text-amber-600 text-sm sm:text-base">🎯</span>
//                     <span className="text-xs sm:text-sm font-semibold text-amber-700">Limited Offer</span>
//                   </div>
//                   <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
//                     Only <span className="text-amber-500">5 Units</span> Left!
//                   </h2>
//                   <p className="text-slate-500 mt-2 text-xs sm:text-sm">
//                     Book your dream home today at Ultimate Heights
//                   </p>
//                 </div>

//                 {/* Form */}
//                 <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
//                   <div>
//                     <input
//                       type="text"
//                       required
//                       placeholder="Full Name"
//                       className="w-full rounded-xl bg-gray-50 border border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 text-sm sm:text-base placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition"
//                       value={formData.name}
//                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     />
//                   </div>
                  
//                   <div>
//                     <input
//                       type="tel"
//                       required
//                       placeholder="Phone Number"
//                       className="w-full rounded-xl bg-gray-50 border border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 text-sm sm:text-base placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition"
//                       value={formData.phone}
//                       onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     />
//                   </div>
                  
//                   <div>
//                     <input
//                       type="email"
//                       placeholder="Email Address (Optional)"
//                       className="w-full rounded-xl bg-gray-50 border border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 text-sm sm:text-base placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition"
//                       value={formData.email}
//                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     />
//                   </div>
                  
//                   <div>
//                     <select
//                       className="w-full rounded-xl bg-gray-50 border border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 text-sm sm:text-base focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition"
//                       value={formData.requirement}
//                       onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
//                     >
//                       <option value="">Select BHK Type</option>
//                       <option value="3 BHK">3 BHK Premium Flat</option>
//                       <option value="4 BHK">4 BHK Luxury Flat</option>
//                       <option value="Penthouse">Penthouse Suite</option>
//                     </select>
//                   </div>
                  
//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-2.5 sm:py-3 rounded-xl hover:scale-105 transition-transform text-sm sm:text-base shadow-lg"
//                   >
//                     Get Best Price →
//                   </button>
//                 </form>

//                 {/* Footer Note */}
//                 <p className="text-center text-[11px] sm:text-xs text-slate-400 mt-4">
//                   No spam. Our team will contact you shortly
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// }





"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const lastSubmitted = localStorage.getItem("enquirySubmittedAt");

      if (!lastSubmitted) {
        setIsOpen(true);
      } else {
        const hoursPassed =
          (Date.now() - parseInt(lastSubmitted)) / (1000 * 60 * 60);
        if (hoursPassed >= 24) {
          setIsOpen(true);
        }
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  // Expose function for navbar/buttons
  useEffect(() => {
    (window as any).openEnquiryPopup = () => {
      setIsOpen(true);
      setIsSuccess(false); // Reset success state on reopen
    };
    return () => {
      delete (window as any).openEnquiryPopup;
    };
  }, []);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxLyME_VTWheBcDSzZqDApGghlm1nHRMKxe2c6kmXG0-bGvl04GccPxHAvHvCJxjgCXmg/exec";

    const params = new URLSearchParams({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      requirement: formData.requirement,
      source: "Enquiry Popup",
      timestamp: new Date().toISOString(),
    });

    // ✅ Direct Google Script call - No API route
    await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
      method: "GET",
      mode: "no-cors",
    });

    // ✅ no-cors mein response check nahi hota, direct success
    localStorage.setItem("enquirySubmittedAt", Date.now().toString());
    setIsSuccess(true);
    setFormData({ name: "", phone: "", email: "", requirement: "" });

  } catch (error) {
    console.error("Submit error:", error);
    alert("❌ Network error. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  const handleClose = () => {
    setIsOpen(false);
    // Reset success state after close animation
    setTimeout(() => setIsSuccess(false), 300);
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
            onClick={() => !isSubmitting && handleClose()}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-[95%] sm:max-w-md mx-auto">
              <div className="relative bg-white rounded-2xl p-5 sm:p-8 shadow-2xl">
                
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-400 hover:text-slate-900 text-2xl z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ×
                </button>

                {/* ✅ SUCCESS SCREEN */}
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4 }}
                      className="text-center py-6"
                    >
                      {/* Animated Checkmark */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.2,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-5 shadow-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 sm:h-14 sm:w-14 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <motion.path
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </motion.div>

                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2"
                      >
                        Thank You! 🎉
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-slate-600 text-sm sm:text-base mb-2"
                      >
                        Your enquiry has been received successfully.
                      </motion.p>

                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-slate-500 text-xs sm:text-sm mb-6"
                      >
                        Our team will contact you shortly to assist with your
                        requirements.
                      </motion.p>

                      {/* Quick Contact Options */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5"
                      >
                        <p className="text-xs sm:text-sm text-slate-700 font-medium mb-2">
                          Need immediate assistance?
                        </p>
                        <div className="flex items-center justify-center gap-2 text-amber-600 font-semibold text-sm sm:text-base">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                          </svg>
                          +91 9203403607
                        </div>
                      </motion.div>

                      <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        onClick={handleClose}
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 rounded-xl hover:scale-105 transition-transform text-sm sm:text-base shadow-lg"
                      >
                        Close
                      </motion.button>
                    </motion.div>
                  ) : (
                    /* ✅ FORM SCREEN */
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Header */}
                      <div className="text-center mb-5 sm:mb-6">
                        <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 sm:px-4 sm:py-2 mb-3 sm:mb-4">
                          <span className="text-amber-600 text-sm sm:text-base">
                            🎯
                          </span>
                          <span className="text-xs sm:text-sm font-semibold text-amber-700">
                            Limited Offer
                          </span>
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                          Only{" "}
                          <span className="text-amber-500">5 Units</span> Left!
                        </h2>
                        <p className="text-slate-500 mt-2 text-xs sm:text-sm">
                          Book your dream home today at Ultimate Heights
                        </p>
                      </div>

                      {/* Form */}
                      <form
                        onSubmit={handleSubmit}
                        className="space-y-3 sm:space-y-4"
                      >
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          className="w-full rounded-xl bg-gray-50 border border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 text-sm sm:text-base placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition disabled:opacity-60"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          disabled={isSubmitting}
                        />

                        <input
                          type="tel"
                          required
                          placeholder="Phone Number"
                          pattern="[0-9]{10}"
                          maxLength={10}
                          className="w-full rounded-xl bg-gray-50 border border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 text-sm sm:text-base placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition disabled:opacity-60"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          disabled={isSubmitting}
                        />

                        <input
                          type="email"
                          placeholder="Email Address (Optional)"
                          className="w-full rounded-xl bg-gray-50 border border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 text-sm sm:text-base placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition disabled:opacity-60"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          disabled={isSubmitting}
                        />

                        <select
                          required
                          className="w-full rounded-xl bg-gray-50 border border-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 text-slate-900 text-sm sm:text-base focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition disabled:opacity-60"
                          value={formData.requirement}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              requirement: e.target.value,
                            })
                          }
                          disabled={isSubmitting}
                        >
                          <option value="">Select BHK Type</option>
                          <option value="3 BHK">3 BHK Premium Flat</option>
                          <option value="4 BHK">4 BHK Luxury Flat</option>
                          <option value="Penthouse">Penthouse Suite</option>
                        </select>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-2.5 sm:py-3 rounded-xl hover:scale-105 transition-transform text-sm sm:text-base shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                          {isSubmitting ? "Submitting..." : "Get Best Price →"}
                        </button>
                      </form>

                      <p className="text-center text-[11px] sm:text-xs text-slate-400 mt-4">
                        No spam. Our team will contact you shortly
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}