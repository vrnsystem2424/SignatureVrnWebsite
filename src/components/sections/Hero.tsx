

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

//   return (
//     <section className="relative min-h-screen overflow-hidden">
//       {/* Desktop Background - Full screen image */}
//       <div className="absolute inset-0 hidden lg:block">
//         <div className="relative w-full h-full">
//           <Image
//             src="/images/exterior.jpg"
//             alt="Ultimate Heights"
//             fill
//             className="object-cover"
//             priority
//             sizes="100vw"
//             quality={90}
//           />
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-black/90" />
//         <div className="absolute inset-0 opacity-20" 
//           style={{ 
//             backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 1px)", 
//             backgroundSize: "40px 40px" 
//           }} 
//         />
//       </div>

//       {/* Mobile Background */}
//       <div className="absolute inset-0 lg:hidden">
//         <div className="relative w-full h-[60vh]">
//           <Image
//             src="/images/exterior.jpg"
//             alt="Ultimate Heights"
//             fill
//             className="object-cover"
//             priority
//             sizes="100vw"
//             quality={90}
//           />
//         </div>
//         <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-white" />
//       </div>

//       <Container>
//         {/* Desktop Layout */}
//         <div className="hidden lg:block relative z-10 min-h-screen flex items-center py-20">
//           <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
            
//             {/* Left Content - Desktop */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="lg:pl-8 xl:pl-12 2xl:pl-16 lg:pr-4"
//             >
//               <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 px-4 py-2 mb-6">
//                 <span className="relative flex h-3 w-3">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
//                 </span>
//                 <span className="text-sm font-semibold text-amber-400">
//                   Prime Main Road | Near Aura Mall
//                 </span>
//               </div>

//               <h1 className="text-7xl xl:text-8xl font-bold leading-tight">
//                 <span className="text-white">Ultimate</span>
//                 <br />
//                 <span className="text-gradient">Heights</span>
//               </h1>

//               <div className="mt-6 space-y-3">
//                 <p className="text-lg text-slate-300">
//                   🏗️ <strong className="text-white">135 Premium Flats</strong> | 96.3% Sold Out
//                 </p>
//                 <p className="text-lg text-slate-300">
//                   🏆 <strong className="text-white">Only 5 Units Left</strong> - Last Chance!
//                 </p>
//                 <p className="text-lg text-slate-300">
//                   📍 <strong className="text-white">Main Road Location</strong> | Near Aura Mall, Bansal Hospital
//                 </p>
//               </div>

//               <div className="mt-8 flex gap-4">
//                 <a
//                   href="#amenities"
//                   className="rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 font-semibold text-slate-950 transition-all hover:scale-105 hover:shadow-2xl"
//                 >
//                   Explore Amenities →
//                 </a>
//                 <a
//                   href="#gallery"
//                   className="rounded-full border-2 border-amber-500/50 px-8 py-4 font-semibold text-white transition-all hover:border-amber-500 hover:bg-amber-500/10 hover:scale-105"
//                 >
//                   View Gallery
//                 </a>
//               </div>

//               <div className="mt-10 flex gap-6">
//                 <div className="flex items-center gap-2">
//                   <span className="text-2xl">🏗️</span>
//                   <span className="text-sm text-slate-300">RERA Approved</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="text-2xl">🔒</span>
//                   <span className="text-sm text-slate-300">Freehold</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="text-2xl">⚡</span>
//                   <span className="text-sm text-slate-300">Possession Soon</span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right Form - Desktop with WHITE BACKGROUND */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="-ml-8"
//             >
//               <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
//                 <div className="absolute -top-4 -right-4">
//                   <div className="bg-gradient-to-r from-amber-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg">
//                     ⚡ Limited Time
//                   </div>
//                 </div>

//                 <div className="text-center mb-6">
//                   <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
//                     Get <span className="text-amber-500">Best Price</span>
//                   </h3>
//                   <p className="text-slate-500 text-sm mt-2">
//                     Fill the form to book a site visit
//                   </p>
//                 </div>

//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <input
//                     type="text"
//                     required
//                     placeholder="Full Name"
//                     className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   />
                  
//                   <input
//                     type="tel"
//                     required
//                     placeholder="Phone Number"
//                     className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                   />
                  
//                   <select
//                     className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
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
//                     className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold py-3 rounded-xl hover:scale-105 transition-all"
//                   >
//                     Book Site Visit →
//                   </button>
//                 </form>

//                 <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-500">
//                   <span>🔒 Secure</span>
//                   <span>⚡ Quick Response</span>
//                   <span>📞 24/7 Support</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Mobile Layout - Form below image with WHITE BACKGROUND */}
//         <div className="lg:hidden relative z-10">
//           {/* Hero Text Overlay on Image */}
//           <div className="relative min-h-[60vh] flex items-end pb-20">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="w-full"
//             >
//               {/* <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 px-3 py-1.5 mb-4">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
//                 </span>
//                 {/* <span className="text-xs font-semibold text-amber-400">
//                   Prime Main Road | Near Aura Mall
//                 </span> */}
//               {/* </div> */} 

//               <h1 className="text-4xl font-bold leading-tight">
//                 <span className="text-white">Ultimate</span>
//                 <br />
//                 <span className="text-gradient">Heights</span>
//               </h1>

//               <div className="mt-4 space-y-2">
//                 <p className="text-sm text-slate-200">
//                   🏗️ <strong className="text-white">135 Premium Flats</strong> | 96.3% Sold Out
//                 </p>
//                 <p className="text-sm text-slate-200">
//                   🏆 <strong className="text-white">Only 5 Units Left</strong> - Last Chance!
//                 </p>
//                 <p className="text-sm text-slate-200">
//                   📍 <strong className="text-white">Main Road Location</strong>
//                 </p>
//               </div>

//               <div className="mt-6 flex gap-3">
//                 <a
//                   href="#amenities"
//                   className="rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-2.5 font-semibold text-slate-950 text-sm transition-all hover:scale-105"
//                 >
//                   Explore →
//                 </a>
//                 <a
//                   href="#gallery"
//                   className="rounded-full border-2 border-amber-500/50 px-6 py-2.5 font-semibold text-white text-sm transition-all hover:border-amber-500 hover:bg-amber-500/10"
//                 >
//                   Gallery
//                 </a>
//               </div>
//             </motion.div>
//           </div>

//           {/* White Form Section Below - Mobile */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="relative -mt-10 mb-10"
//           >
//             <div className="bg-white rounded-2xl p-6 shadow-xl">
//               <div className="absolute -top-3 right-4">
//                 <div className="bg-gradient-to-r from-amber-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
//                   ⚡ Limited Time
//                 </div>
//               </div>

//               <div className="text-center mb-5">
//                 <h3 className="text-xl font-bold text-slate-900">
//                   Get <span className="text-amber-500">Best Price</span>
//                 </h3>
//                 <p className="text-slate-500 text-xs mt-1">
//                   Fill the form to book a site visit
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-3">
//                 <input
//                   type="text"
//                   required
//                   placeholder="Full Name"
//                   className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none text-sm"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 />
                
//                 <input
//                   type="tel"
//                   required
//                   placeholder="Phone Number"
//                   className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none text-sm"
//                   value={formData.phone}
//                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                 />
                
//                 <select
//                   className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-slate-900 focus:border-amber-500 focus:outline-none text-sm"
//                   value={formData.requirement}
//                   onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
//                 >
//                   <option value="">Select BHK Type</option>
//                   <option value="3 BHK">3 BHK Premium Flat</option>
//                   <option value="4 BHK">4 BHK Luxury Flat</option>
//                   <option value="Penthouse">Penthouse Suite</option>
//                 </select>
                
//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold py-3 rounded-xl hover:scale-105 transition-all text-sm"
//                 >
//                   Book Site Visit →
//                 </button>
//               </form>

//               <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-slate-400">
//                 <span>🔒 Secure</span>
//                 <span>⚡ Quick Response</span>
//                 <span>📞 24/7 Support</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Trust Badges Mobile */}
//           <div className="flex flex-wrap gap-4 justify-center pb-10">
//             <div className="flex items-center gap-1">
//               <span className="text-lg">🏗️</span>
//               <span className="text-xs text-slate-500">RERA Approved</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <span className="text-lg">🔒</span>
//               <span className="text-xs text-slate-500">Freehold</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <span className="text-lg">⚡</span>
//               <span className="text-xs text-slate-500">Possession Soon</span>
//             </div>
//           </div>
//         </div>
//       </Container>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
//         <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
//           <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
//         </div>
//       </div>
//     </section>
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nRequirement: ${formData.requirement}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`);
    
    setFormData({ name: "", phone: "", requirement: "" });
    alert("Thank you! Our team will contact you shortly.");
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-20 lg:pt-0">
      {/* Desktop Background - Full screen image */}
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
        <div className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 1px)", 
            backgroundSize: "40px 40px" 
          }} 
        />
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 lg:hidden">
        <div className="relative w-full h-[70vh]">
          <Image
            src="/images/exterior.jpg"
            alt="Ultimate Heights"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/90" />
        </div>
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

              <div className="mt-8 flex gap-4">
                <a
                  href="#amenities"
                  className="rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 font-semibold text-slate-950 transition-all hover:scale-105 hover:shadow-2xl"
                >
                  Explore Amenities →
                </a>
                <a
                  href="#gallery"
                  className="rounded-full border-2 border-amber-500/50 px-8 py-4 font-semibold text-white transition-all hover:border-amber-500 hover:bg-amber-500/10 hover:scale-105"
                >
                  View Gallery
                </a>
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
                    className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  
                  <select
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
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold py-3 rounded-xl hover:scale-105 transition-all"
                  >
                    Book Site Visit →
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

        {/* Mobile Layout */}
        <div className="lg:hidden relative z-10">
          {/* Hero Text - now properly spaced below navbar */}
          <div className="pt-8 pb-8">
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

              <div className="mt-6 flex gap-3">
                <a
                  href="#amenities"
                  className="rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-2.5 font-semibold text-slate-950 text-sm transition-all hover:scale-105"
                >
                  Explore →
                </a>
                <a
                  href="#gallery"
                  className="rounded-full border-2 border-amber-500/50 px-6 py-2.5 font-semibold text-white text-sm transition-all hover:border-amber-500 hover:bg-amber-500/10"
                >
                  Gallery
                </a>
              </div>
            </motion.div>
          </div>

          {/* White Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-6 mb-10"
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
                  className="w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none text-sm"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                
                <select
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
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold py-3 rounded-xl hover:scale-105 transition-all text-sm"
                >
                  Book Site Visit →
                </button>
              </form>

              <div className="mt-4 flex items-center justify-center gap-4 text-[10px] text-slate-400">
                <span>🔒 Secure</span>
                <span>⚡ Quick Response</span>
                <span>📞 24/7 Support</span>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges Mobile */}
          <div className="flex flex-wrap gap-4 justify-center pb-10">
            <div className="flex items-center gap-1">
              <span className="text-lg">🏗️</span>
              <span className="text-xs text-white/80">RERA Approved</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-lg">🔒</span>
              <span className="text-xs text-white/80">Freehold</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-lg">⚡</span>
              <span className="text-xs text-white/80">Possession Soon</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}