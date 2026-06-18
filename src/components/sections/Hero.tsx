



// "use client";

// import Image from "next/image";
// import Container from "../ui/Container";
// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function Hero() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     requirement: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nRequirement: ${formData.requirement}`;
//     window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`);
//     setFormData({ name: "", phone: "", requirement: "" });
//     alert("Thank you! Our team will contact you shortly.");
//   };

//   // Open enquiry popup
//   const openEnquiryPopup = () => {
//     if ((window as any).openEnquiryPopup) {
//       (window as any).openEnquiryPopup();
//     }
//   };

//   return (
//     <>
//       <section className="relative lg:min-h-screen overflow-hidden pt-20 lg:pt-0 pb-4 lg:pb-0">
//         {/* Desktop Background */}
//         <div className="absolute inset-0 hidden lg:block">
//           <div className="relative w-full h-full">
//             <Image
//               src="/images/exterior.jpg"
//               alt="Ultimate Heights"
//               fill
//               className="object-cover"
//               priority
//               sizes="100vw"
//               quality={90}
//             />
//           </div>
//           <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-black/90" />
//           <div
//             className="absolute inset-0 opacity-20"
//             style={{
//               backgroundImage:
//                 "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 1px)",
//               backgroundSize: "40px 40px",
//             }}
//           />
//         </div>

//         {/* Mobile Background - Full coverage */}
//         <div className="absolute inset-0 lg:hidden">
//           <Image
//             src="/images/exterior.jpg"
//             alt="Ultimate Heights"
//             fill
//             className="object-cover"
//             priority
//             sizes="100vw"
//             quality={90}
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
//         </div>

//         <Container>
//           {/* Desktop Layout */}
//           <div className="hidden lg:flex relative z-10 min-h-screen items-center py-20">
//             <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center w-full">
              
//               {/* Left Content - Desktop */}
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="lg:pl-8 xl:pl-12 2xl:pl-16 lg:pr-4"
//               >
//                 <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 px-4 py-2 mb-6">
//                   <span className="relative flex h-3 w-3">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
//                   </span>
//                   <span className="text-sm font-semibold text-amber-400">
//                     Prime Main Road | Near Aura Mall
//                   </span>
//                 </div>

//                 <h1 className="text-7xl xl:text-8xl font-bold leading-tight">
//                   <span className="text-white">Ultimate</span>
//                   <br />
//                   <span className="text-gradient">Heights</span>
//                 </h1>

//                 <div className="mt-6 space-y-3">
//                   <p className="text-lg text-slate-300">
//                     🏗️ <strong className="text-white">135 Premium Flats</strong> | 96.3% Sold Out
//                   </p>
//                   <p className="text-lg text-slate-300">
//                     🏆 <strong className="text-white">Only 5 Units Left</strong> - Last Chance!
//                   </p>
//                   <p className="text-lg text-slate-300">
//                     📍 <strong className="text-white">Main Road Location</strong> | Near Aura Mall, Bansal Hospital
//                   </p>
//                 </div>

//                 {/* Desktop - Download Brochure Button */}
//                 <div className="mt-8">
//                   <button
//                     onClick={openEnquiryPopup}
//                     className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 font-semibold text-slate-950 transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth={2.5}
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
//                       />
//                     </svg>
//                     Download Brochure
//                   </button>
//                 </div>

//                 <div className="mt-10 flex gap-6">
//                   <div className="flex items-center gap-2">
//                     <span className="text-2xl">🏗️</span>
//                     <span className="text-sm text-slate-300">RERA Approved</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <span className="text-2xl">🔒</span>
//                     <span className="text-sm text-slate-300">Freehold</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <span className="text-2xl">⚡</span>
//                     <span className="text-sm text-slate-300">Possession Soon</span>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Right Form - Desktop */}
//               <motion.div
//                 initial={{ opacity: 0, x: 30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="-ml-8"
//               >
//                 <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
//                   <div className="absolute -top-4 -right-4">
//                     <div className="bg-gradient-to-r from-amber-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">
//                       ⚡ Limited Time
//                     </div>
//                   </div>

//                   <div className="text-center mb-6">
//                     <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
//                       Get <span className="text-amber-500">Best Price</span>
//                     </h3>
//                     <p className="text-slate-500 text-sm mt-2">
//                       Fill the form to book a site visit
//                     </p>
//                   </div>

//                   <form onSubmit={handleSubmit} className="space-y-4">
//                     <input
//                       type="text"
//                       required
//                       placeholder="Full Name"
//                       className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
//                       value={formData.name}
//                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     />
                    
//                     <input
//                       type="tel"
//                       required
//                       placeholder="Phone Number"
//                       className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
//                       value={formData.phone}
//                       onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     />
                    
//                     <select
//                       className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
//                       value={formData.requirement}
//                       onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
//                     >
//                       <option value="">Select BHK Type</option>
//                       <option value="3 BHK">3 BHK Premium Flat</option>
//                       <option value="4 BHK">4 BHK Luxury Flat</option>
//                       <option value="Penthouse">Penthouse Suite</option>
//                     </select>
                    
//                     <button
//                       type="submit"
//                       className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold py-3 rounded-xl hover:scale-105 transition-all"
//                     >
//                       Book Site Visit →
//                     </button>
//                   </form>

//                   <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-500">
//                     <span>🔒 Secure</span>
//                     <span>⚡ Quick Response</span>
//                     <span>📞 24/7 Support</span>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </div>

//           {/* Mobile Layout - Compact */}
//           <div className="lg:hidden relative z-10">
//             {/* Hero Text */}
//             <div className="pt-6 pb-6">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="w-full"
//               >
//                 <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 px-3 py-1.5 mb-4">
//                   <span className="relative flex h-2 w-2">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
//                   </span>
//                   <span className="text-xs font-semibold text-amber-400">
//                     Prime Main Road | Near Aura Mall
//                   </span>
//                 </div>

//                 <h1 className="text-5xl font-bold leading-tight">
//                   <span className="text-white">Ultimate</span>
//                   <br />
//                   <span className="text-gradient">Heights</span>
//                 </h1>

//                 <div className="mt-4 space-y-2">
//                   <p className="text-sm text-slate-200">
//                     🏗️ <strong className="text-white">135 Premium Flats</strong> | 96.3% Sold Out
//                   </p>
//                   <p className="text-sm text-slate-200">
//                     🏆 <strong className="text-white">Only 5 Units Left</strong> - Last Chance!
//                   </p>
//                   <p className="text-sm text-slate-200">
//                     📍 <strong className="text-white">Main Road Location</strong>
//                   </p>
//                 </div>

//                 {/* Mobile - Download Brochure Button */}
//                 <div className="mt-6">
//                   <button
//                     onClick={openEnquiryPopup}
//                     className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 font-semibold text-slate-950 text-sm shadow-lg hover:scale-105 transition-all cursor-pointer"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth={2.5}
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
//                       />
//                     </svg>
//                     Download Brochure
//                   </button>
//                 </div>
//               </motion.div>
//             </div>

//             {/* White Form Section */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="relative mt-4 mb-2"
//             >
//               <div className="bg-white rounded-2xl p-6 shadow-xl">
//                 <div className="absolute -top-3 right-4">
//                   <div className="bg-gradient-to-r from-amber-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
//                     ⚡ Limited Time
//                   </div>
//                 </div>

//                 <div className="text-center mb-5">
//                   <h3 className="text-xl font-bold text-slate-900">
//                     Get <span className="text-amber-500">Best Price</span>
//                   </h3>
//                   <p className="text-slate-500 text-xs mt-1">
//                     Fill the form to book a site visit
//                   </p>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-3">
//                   <input
//                     type="text"
//                     required
//                     placeholder="Full Name"
//                     className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none text-sm"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   />
                  
//                   <input
//                     type="tel"
//                     required
//                     placeholder="Phone Number"
//                     className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none text-sm"
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                   />
                  
//                   <select
//                     className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-slate-900 focus:border-amber-500 focus:outline-none text-sm"
//                     value={formData.requirement}
//                     onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
//                   >
//                     <option value="">Select BHK Type</option>
//                     <option value="3 BHK">3 BHK Premium Flat</option>
//                     <option value="4 BHK">4 BHK Luxury Flat</option>
//                     <option value="Penthouse">Penthouse Suite</option>
//                   </select>
                  
//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold py-3 rounded-xl hover:scale-105 transition-all text-sm"
//                   >
//                     Book Site Visit →
//                   </button>
//                 </form>

//                 <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-slate-400">
//                   <span>🔒 Secure</span>
//                   <span>⚡ Quick Response</span>
//                   <span>📞 24/7 Support</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </Container>

//         {/* Scroll Indicator - Desktop Only */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
//           <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
//             <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
//           </div>
//         </div>
//       </section>

//       {/* FIXED BOTTOM ACTION BAR - Mobile Only */}
//       <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-amber-500/20 shadow-2xl">
//         <div className="grid grid-cols-2 gap-2 p-3">
//           {/* Call Button */}
//           <a
//             href="tel:+919203403607"
//             className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold text-sm shadow-lg active:scale-95 transition-transform"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//             >
//               <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
//             </svg>
//             Call Now
//           </a>

//           {/* WhatsApp Button */}
//           <a
//             href="https://wa.me/919876543210?text=Hi,%20I'm%20interested%20in%20Ultimate%20Heights"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold text-sm shadow-lg active:scale-95 transition-transform"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//             >
//               <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
//             </svg>
//             WhatsApp
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }






"use client";

import Image from "next/image";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requirement: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ✅ Send to Google Sheets via API route
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          requirement: formData.requirement,
          source: "Hero Form",
        }),
      });

      if (response.ok) {
        // Also open WhatsApp with details
        const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nRequirement: ${formData.requirement}`;
       

        alert("✅ Thank you! Our team will contact you shortly.");
        setFormData({ name: "", phone: "", requirement: "" });
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("❌ Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Open enquiry popup
  const openEnquiryPopup = () => {
    if ((window as any).openEnquiryPopup) {
      (window as any).openEnquiryPopup();
    }
  };

  return (
    <>
      <section className="relative lg:min-h-screen overflow-hidden pt-20 lg:pt-0 pb-4 lg:pb-0">
        {/* Desktop Background */}
        <div className="absolute inset-0 hidden lg:block">
          <div className="relative w-full h-full">
            <Image
              src="/images/exterior.jpg"
              alt="Ultimate Heights"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={90}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-black/90" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Mobile Background */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="/images/exterior.jpg"
            alt="Ultimate Heights"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        </div>

        <Container>
          {/* Desktop Layout */}
          <div className="hidden lg:flex relative z-10 min-h-screen items-center py-20">
            <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center w-full">
              
              {/* Left Content - Desktop */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:pl-8 xl:pl-12 2xl:pl-16 lg:pr-4"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 px-4 py-2 mb-6">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                  </span>
                  <span className="text-sm font-semibold text-amber-400">
                    Prime Main Road | Near Aura Mall
                  </span>
                </div>

                <h1 className="text-7xl xl:text-8xl font-bold leading-tight">
                  <span className="text-white">Ultimate</span>
                  <br />
                  <span className="text-gradient">Heights</span>
                </h1>

                <div className="mt-6 space-y-3">
                  <p className="text-lg text-slate-300">
                    🏗️ <strong className="text-white">135 Premium Flats</strong> | 96.3% Sold Out
                  </p>
                  <p className="text-lg text-slate-300">
                    🏆 <strong className="text-white">Only 5 Units Left</strong> - Last Chance!
                  </p>
                  <p className="text-lg text-slate-300">
                    📍 <strong className="text-white">Main Road Location</strong> | Near Aura Mall, Bansal Hospital
                  </p>
                </div>

                {/* Desktop - Download Brochure Button */}
                <div className="mt-8">
                  <button
                    onClick={openEnquiryPopup}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 font-semibold text-slate-950 transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download Brochure
                  </button>
                </div>

                <div className="mt-10 flex gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🏗️</span>
                    <span className="text-sm text-slate-300">RERA Approved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🔒</span>
                    <span className="text-sm text-slate-300">Freehold</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    <span className="text-sm text-slate-300">Possession Soon</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Form - Desktop */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="-ml-8"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="absolute -top-4 -right-4">
                    <div className="bg-gradient-to-r from-amber-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">
                      ⚡ Limited Time
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
                      Get <span className="text-amber-500">Best Price</span>
                    </h3>
                    <p className="text-slate-500 text-sm mt-2">
                      Fill the form to book a site visit
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    
                    <select
                      required
                      className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    >
                      <option value="">Select BHK Type</option>
                      <option value="3 BHK">3 BHK Premium Flat</option>
                      <option value="4 BHK">4 BHK Luxury Flat</option>
                      <option value="Penthouse">Penthouse Suite</option>
                    </select>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold py-3 rounded-xl hover:scale-105 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? "Submitting..." : "Book Site Visit →"}
                    </button>
                  </form>

                  <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-500">
                    <span>🔒 Secure</span>
                    <span>⚡ Quick Response</span>
                    <span>📞 24/7 Support</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile Layout - Compact */}
          <div className="lg:hidden relative z-10">
            {/* Hero Text */}
            <div className="pt-6 pb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 px-3 py-1.5 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-amber-400">
                    Prime Main Road | Near Aura Mall
                  </span>
                </div>

                <h1 className="text-5xl font-bold leading-tight">
                  <span className="text-white">Ultimate</span>
                  <br />
                  <span className="text-gradient">Heights</span>
                </h1>

                <div className="mt-4 space-y-2">
                  <p className="text-sm text-slate-200">
                    🏗️ <strong className="text-white">135 Premium Flats</strong> | 96.3% Sold Out
                  </p>
                  <p className="text-sm text-slate-200">
                    🏆 <strong className="text-white">Only 5 Units Left</strong> - Last Chance!
                  </p>
                  <p className="text-sm text-slate-200">
                    📍 <strong className="text-white">Main Road Location</strong>
                  </p>
                </div>

                {/* Mobile - Download Brochure Button */}
                <div className="mt-6">
                  <button
                    onClick={openEnquiryPopup}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 font-semibold text-slate-950 text-sm shadow-lg hover:scale-105 transition-all cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download Brochure
                  </button>
                </div>
              </motion.div>
            </div>

            {/* White Form Section - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mt-4 mb-2"
            >
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="absolute -top-3 right-4">
                  <div className="bg-gradient-to-r from-amber-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
                    ⚡ Limited Time
                  </div>
                </div>

                <div className="text-center mb-5">
                  <h3 className="text-xl font-bold text-slate-900">
                    Get <span className="text-amber-500">Best Price</span>
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">
                    Fill the form to book a site visit
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none text-sm"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none text-sm"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  
                  <select
                    required
                    className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-slate-900 focus:border-amber-500 focus:outline-none text-sm"
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  >
                    <option value="">Select BHK Type</option>
                    <option value="3 BHK">3 BHK Premium Flat</option>
                    <option value="4 BHK">4 BHK Luxury Flat</option>
                    <option value="Penthouse">Penthouse Suite</option>
                  </select>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold py-3 rounded-xl hover:scale-105 transition-all text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Submitting..." : "Book Site Visit →"}
                  </button>
                </form>

                <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-slate-400">
                  <span>🔒 Secure</span>
                  <span>⚡ Quick Response</span>
                  <span>📞 24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>

        {/* Scroll Indicator - Desktop Only */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* FIXED BOTTOM ACTION BAR - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-amber-500/20 shadow-2xl">
        <div className="grid grid-cols-2 gap-2 p-3">
          {/* Call Button */}
          <a
            href="tel:+919876543210"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold text-sm shadow-lg active:scale-95 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
            Call Now
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919876543210?text=Hi,%20I'm%20interested%20in%20Ultimate%20Heights"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold text-sm shadow-lg active:scale-95 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}