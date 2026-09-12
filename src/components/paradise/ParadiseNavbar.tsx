// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { PhoneCall } from "lucide-react";

// interface ParadiseNavbarProps {
//   onEnquire?: () => void;
// }

// export default function ParadiseNavbar({ onEnquire }: ParadiseNavbarProps) {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5"
//           : "bg-transparent py-4"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
//         <a href="#home" className="flex items-center gap-2.5 group">
//           <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-white/80 shadow-md group-hover:scale-105 transition-transform duration-300">
//             <Image
//               src="/images/paradise/Logo2.jpeg"
//               alt="Signature Paradise Logo"
//               fill
//               className="object-cover"
//               sizes="44px"
//               priority
//             />
//           </div>
//           <span
//             className={`font-serif font-bold text-base sm:text-lg tracking-wide transition-colors duration-300 ${
//               isScrolled ? "text-slate-900" : "text-white drop-shadow-md"
//             }`}
//           >
//             Signature Paradise
//           </span>
//         </a>

//         {/* Opens popup form */}
//         <button
//           type="button"
//           onClick={onEnquire}
//           className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all active:scale-95 ${
//             isScrolled
//               ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20 hover:bg-emerald-800"
//               : "bg-white text-emerald-800 shadow-lg hover:bg-emerald-50"
//           }`}
//         >
//           <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//           Call Now
//         </button>
//       </div>
//     </nav>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";

interface ParadiseNavbarProps {
  onEnquire?: () => void;
}

export default function ParadiseNavbar({ onEnquire }: ParadiseNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO AREA */}
        <a href="#home" className="flex items-center gap-2 sm:gap-3 group">
          {/* Mobile height increased to h-12 (48px) and desktop to h-14 (56px) */}
          <div className="relative h-12 sm:h-14 w-auto bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-sm group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            <Image
              src="/images/paradise/Logo2.jpeg"
              alt="Signature Paradise Logo"
              width={160}
              height={56}
              className="h-full w-auto object-contain rounded"
              priority
            />
          </div>

          <span
            className={`font-serif font-bold text-sm sm:text-lg tracking-wide transition-colors duration-300 ${
              isScrolled ? "text-slate-900" : "text-white drop-shadow-md"
            }`}
          >
        
          </span>
        </a>

        {/* CALL NOW BUTTON */}
        <button
          type="button"
          onClick={onEnquire}
          className={`inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-[10px] sm:text-xs uppercase tracking-wider transition-all active:scale-95 shrink-0 ${
            isScrolled
              ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20 hover:bg-emerald-800"
              : "bg-white text-emerald-800 shadow-lg hover:bg-emerald-50"
          }`}
        >
          <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          Call Now
        </button>

      </div>
    </nav>
  );
}