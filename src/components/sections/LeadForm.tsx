// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Container from "../ui/Container";

// export default function LeadForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     requirement: "",
//     message: "",
//   });

// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setIsSubmitting(true);

//   try {
//     const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxLyME_VTWheBcDSzZqDApGghlm1nHRMKxe2c6kmXG0-bGvl04GccPxHAvHvCJxjgCXmg/exec";

//     const params = new URLSearchParams({
//       name: formData.name,
//       phone: formData.phone,
//       email: formData.email,
//       requirement: formData.requirement,
//       message: formData.message,
//       source: "Lead Form (Enquire Section)",
//     });

//     await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
//       method: "GET",
//       mode: "no-cors",
//     });

//     // ✅ Success screen show karo
//     setIsSuccess(true);
//     setFormData({
//       name: "",
//       phone: "",
//       email: "",
//       requirement: "",
//       message: "",
//     });

//     // Auto-hide success after 6 seconds
//     setTimeout(() => setIsSuccess(false), 6000);

//   } catch (error) {
//     console.error("Submit error:", error);
//     alert("❌ Network error. Please try again.");
//   } finally {
//     setIsSubmitting(false);
//   }
// };
//   return (
//     <section id="enquire" className="bg-white py-12 lg:py-20">
//       <Container>
//         <div className="grid gap-8 rounded-3xl bg-slate-900 p-6 sm:p-8 text-white md:p-12 lg:grid-cols-[1fr_0.9fr]">
//           {/* Left Side - Info */}
//           <div>
//             <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
//               Enquire Now
//             </p>
//             <h2 className="mt-3 text-2xl sm:text-3xl font-bold md:text-4xl">
//               Schedule a site visit for the last few available premium units
//             </h2>
//             <p className="mt-5 max-w-2xl text-slate-300 text-sm sm:text-base">
//               Share your details and our sales team will contact you with
//               availability, pricing discussion, and site visit coordination.
//             </p>

//             <div className="mt-8 grid gap-4 sm:grid-cols-2">
//               <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
//                 <p className="text-sm text-slate-400">Project</p>
//                 <p className="mt-1 font-semibold">Ultimate Heights</p>
//               </div>
//               <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
//                 <p className="text-sm text-slate-400">Availability</p>
//                 <p className="mt-1 font-semibold text-amber-400">
//                   Only 5 Units Left
//                 </p>
//               </div>
//             </div>

//             {/* Contact Info */}
//             <div className="mt-6 flex flex-col sm:flex-row gap-4">
//               <a
//                 href="tel:+919876543210"
//                 className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors text-sm"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
//                 </svg>
//                 +91 9203403607
//               </a>
//               <a
//                 href="mailto:info@ultimateheights.com"
//                 className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors text-sm"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//                 info@ultimateheights.com
//               </a>
//             </div>
//           </div>

//           {/* Right Side - Form or Success */}
//           <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-xl min-h-[500px] flex flex-col justify-center">
//             <AnimatePresence mode="wait">
//               {isSuccess ? (
//                 /* ✅ SUCCESS SCREEN */
//                 <motion.div
//                   key="success"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.8 }}
//                   transition={{ duration: 0.4 }}
//                   className="text-center py-6"
//                 >
//                   {/* Animated Checkmark */}
//                   <motion.div
//                     initial={{ scale: 0 }}
//                     animate={{ scale: 1 }}
//                     transition={{
//                       delay: 0.2,
//                       type: "spring",
//                       stiffness: 200,
//                     }}
//                     className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-5 shadow-lg"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-12 w-12 sm:h-14 sm:w-14 text-white"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth={3}
//                     >
//                       <motion.path
//                         initial={{ pathLength: 0 }}
//                         animate={{ pathLength: 1 }}
//                         transition={{ delay: 0.4, duration: 0.5 }}
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M5 13l4 4L19 7"
//                       />
//                     </svg>
//                   </motion.div>

//                   <motion.h2
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.5 }}
//                     className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2"
//                   >
//                     Thank You! 🎉
//                   </motion.h2>

//                   <motion.p
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.6 }}
//                     className="text-slate-600 text-sm sm:text-base mb-2"
//                   >
//                     Your callback request has been received successfully.
//                   </motion.p>

//                   <motion.p
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.7 }}
//                     className="text-slate-500 text-xs sm:text-sm mb-6"
//                   >
//                     Our sales team will contact you within 24 hours.
//                   </motion.p>

//                   {/* Quick Contact Box */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.8 }}
//                     className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5"
//                   >
//                     <p className="text-xs sm:text-sm text-slate-700 font-medium mb-2">
//                       Need immediate assistance?
//                     </p>
//                     <a
//                       href="tel:+919203403607"
//                       className="inline-flex items-center justify-center gap-2 text-amber-600 font-semibold text-sm sm:text-base hover:text-amber-700 transition-colors"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                       >
//                         <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
//                       </svg>
//                       +91 9203403607
//                     </a>
//                   </motion.div>

//                   <motion.button
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.9 }}
//                     onClick={() => setIsSuccess(false)}
//                     className="text-sm text-slate-500 hover:text-slate-900 transition-colors underline"
//                   >
//                     Submit another enquiry
//                   </motion.button>
//                 </motion.div>
//               ) : (
//                 /* ✅ FORM SCREEN */
//                 <motion.form
//                   key="form"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   onSubmit={handleSubmit}
//                   className="grid gap-4"
//                 >
//                   <input
//                     type="text"
//                     required
//                     placeholder="Full Name"
//                     className="h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition disabled:opacity-60"
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     disabled={isSubmitting}
//                   />
//                   <input
//                     type="tel"
//                     required
//                     placeholder="Phone Number"
//                     pattern="[0-9]{10}"
//                     maxLength={10}
//                     className="h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition disabled:opacity-60"
//                     value={formData.phone}
//                     onChange={(e) =>
//                       setFormData({ ...formData, phone: e.target.value })
//                     }
//                     disabled={isSubmitting}
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email Address"
//                     className="h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition disabled:opacity-60"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                     disabled={isSubmitting}
//                   />
//                   <select
//                     required
//                     className="h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition disabled:opacity-60"
//                     value={formData.requirement}
//                     onChange={(e) =>
//                       setFormData({ ...formData, requirement: e.target.value })
//                     }
//                     disabled={isSubmitting}
//                   >
//                     <option value="">Interested In</option>
//                     <option value="3 BHK">3 BHK</option>
//                     <option value="4 BHK">4 BHK</option>
//                     <option value="Penthouse">Penthouse</option>
//                     <option value="Commercial Unit">Commercial Unit</option>
//                   </select>
//                   <textarea
//                     placeholder="Message (Optional)"
//                     rows={4}
//                     className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition resize-none disabled:opacity-60"
//                     value={formData.message}
//                     onChange={(e) =>
//                       setFormData({ ...formData, message: e.target.value })
//                     }
//                     disabled={isSubmitting}
//                   />
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
//                   >
//                     {isSubmitting ? "Submitting..." : "Request Callback"}
//                   </button>
//                 </motion.form>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </Container>
//     </section>
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

  useEffect(() => {
    (window as any).openEnquiryPopup = () => {
      setIsOpen(true);
      setIsSuccess(false);
    };
    return () => {
      delete (window as any).openEnquiryPopup;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbxLyME_VTWheBcDSzZqDApGghlm1nHRMKxe2c6kmXG0-bGvl04GccPxHAvHvCJxjgCXmg/exec";

      const params = new URLSearchParams({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        requirement: formData.requirement,
        source: "Enquiry Popup",
      });

      await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
        method: "GET",
        mode: "no-cors",
      });

      // ✅ GTM dataLayer push - Enquiry Popup
      if (typeof window !== "undefined") {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "generate_lead",
          form_name: "Enquiry Popup",
          form_source: "Popup",
          lead_name: formData.name,
          lead_phone: formData.phone,
          lead_requirement: formData.requirement,
        });
      }

      // ✅ Success screen + timestamp save
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
    setTimeout(() => setIsSuccess(false), 300);
  };

  // Baaki return JSX bilkul same rahega - koi change nahi
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50"
            onClick={() => !isSubmitting && handleClose()}
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-[95%] sm:max-w-md mx-auto">
              <div className="relative bg-white rounded-2xl p-5 sm:p-8 shadow-2xl">
                <button
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-400 hover:text-slate-900 text-2xl z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ×
                </button>

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
                        Our team will contact you shortly.
                      </motion.p>

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
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
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