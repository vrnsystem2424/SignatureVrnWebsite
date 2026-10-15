// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { X, CheckCircle2, ArrowRight } from "lucide-react";
// import { ultimateHeightData } from "../../data/ultimateheight";
// import { submitLeadToGoogleSheet } from "@/src/lib/utils";

// export interface UltimateEnquiryPopupProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function UltimateEnquiryPopup({ isOpen, onClose }: UltimateEnquiryPopupProps) {
//   const router = useRouter();
//   const [shouldRender, setShouldRender] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [formData, setFormData] = useState({ name: "", phone: "" });
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (isOpen) {
//       setShouldRender(true);
//       document.body.style.overflow = "hidden";
//     } else {
//       const t = setTimeout(() => {
//         setShouldRender(false);
//         setSubmitted(false);
//         setFormData({ name: "", phone: "" });
//         setError("");
//         setIsSubmitting(false);
//       }, 300);
//       document.body.style.overflow = "unset";
//       return () => clearTimeout(t);
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isOpen]);

//   if (!shouldRender) return null;

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
//     setError("");
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (isSubmitting) return;
//     setError("");

//     if (!formData.name.trim() || !formData.phone.trim()) {
//       setError("Name and phone are required.");
//       return;
//     }
//     if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
//       setError("Enter a valid 10-digit mobile number.");
//       return;
//     }

//     setIsSubmitting(true);
//     try {
//       await submitLeadToGoogleSheet({
//         name: formData.name.trim(),
//         phone: formData.phone.trim(),
//         project: "Ultimate Height",
//       });

//       try {
//         sessionStorage.setItem("ultimate_lead_done", "1");
//       } catch {}

//       setSubmitted(true);
//       document.body.style.overflow = "unset";
//       router.push("/ultimateheight/thankyou");
//     } catch {
//       setError("Something went wrong. Please try again.");
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div
//       className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-opacity duration-300 ${
//         isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//       }`}
//     >
//       <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={onClose} />

//       <div
//         className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100"
//         onClick={(e) => e.stopPropagation()}
//         style={{
//           animation: isOpen ? "scaleUpBounce 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards" : undefined,
//         }}
//       >
//         <div className="h-1.5 w-full bg-gradient-to-r from-blue-900 via-indigo-800 to-amber-400" />

//         <button
//           type="button"
//           onClick={onClose}
//           className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-all active:scale-90 z-10"
//           aria-label="Close"
//         >
//           <X className="w-5 h-5" />
//         </button>

//         <div className="p-6 sm:p-8">
//           {submitted ? (
//             <div className="text-center py-8">
//               <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 border border-amber-100">
//                 <CheckCircle2 className="w-7 h-7 text-amber-600" />
//               </div>
//               <h3 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h3>
//               <p className="text-sm text-slate-600 leading-relaxed">Redirecting to thank you page...</p>
//             </div>
//           ) : (
//             <>
//               <div className="mb-5 pr-8">
//                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-1">
//                   {ultimateHeightData?.projectName || "Ultimate Heights"}
//                 </p>
//                 <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">Enquire Now</h3>
//                 <p className="mt-1 text-sm text-slate-500">
//                   Share your details — we&apos;ll call you back soon.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-500">
//                     Full Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     name="name"
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Enter your full name"
//                     className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-blue-900 focus:ring-4 focus:ring-blue-900/10"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-500">
//                     Mobile Number <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     name="phone"
//                     type="tel"
//                     inputMode="numeric"
//                     required
//                     maxLength={10}
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="10-digit mobile number"
//                     className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-blue-900 focus:ring-4 focus:ring-blue-900/10"
//                   />
//                 </div>

//                 {error && (
//                   <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
//                     {error}
//                   </p>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-sm uppercase tracking-wider py-3.5 shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98] disabled:opacity-70"
//                 >
//                   {isSubmitting ? "Submitting..." : (<>Submit Enquiry <ArrowRight className="w-4 h-4" /></>)}
//                 </button>

//                 <p className="text-center text-[10px] text-slate-400">🔒 Your details are safe. No spam.</p>
//               </form>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { ultimateHeightData } from "../../data/ultimateheight";
import { submitLeadToGoogleSheet } from "@/src/lib/utils";

export interface UltimateEnquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UltimateEnquiryPopup({ isOpen, onClose }: UltimateEnquiryPopupProps) {
  const router = useRouter();
  const [shouldRender, setShouldRender] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", propertyType: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = "hidden";
    } else {
      const t = setTimeout(() => {
        setShouldRender(false);
        setSubmitted(false);
        setFormData({ name: "", phone: "", propertyType: "" });
        setError("");
        setIsSubmitting(false);
      }, 300);
      document.body.style.overflow = "unset";
      return () => clearTimeout(t);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!shouldRender) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setError("");

    if (!formData.name.trim() || !formData.phone.trim()) {
      setError("Name and phone are required.");
      return;
    }
    if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }
    if (!formData.propertyType) {
      setError("Please select your interest.");
      return;
    }

    setIsSubmitting(true);
    try {
      await submitLeadToGoogleSheet({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        project: "Ultimate Height",
        propertyType: formData.propertyType,
      });

      try { sessionStorage.setItem("ultimate_lead_done", "1"); } catch {}

      setSubmitted(true);
      document.body.style.overflow = "unset";
      router.push("/ultimateheight/thankyou");
    } catch {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={onClose} />

      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: isOpen ? "scaleUpBounce 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards" : undefined,
        }}
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-900 via-indigo-800 to-amber-400" />

        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-all active:scale-90 z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 border border-amber-100">
                <CheckCircle2 className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Redirecting to thank you page...</p>
            </div>
          ) : (
            <>
              <div className="mb-5 pr-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-1">
                  {ultimateHeightData?.projectName || "Ultimate Heights"}
                </p>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">Enquire Now</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Share your details — we&apos;ll call you back soon.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name" type="text" required
                    value={formData.name} onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-blue-900 focus:ring-4 focus:ring-blue-900/10"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="phone" type="tel" inputMode="numeric" required maxLength={10}
                    value={formData.phone} onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-blue-900 focus:ring-4 focus:ring-blue-900/10"
                  />
                </div>

                {/* NEW: Property Type Dropdown — Column F */}
                <div>
                  <label className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    I&apos;m Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="propertyType"
                    required
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-blue-900 focus:ring-4 focus:ring-blue-900/10 appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                    }}
                  >
                    <option value="" disabled>Select your interest</option>
                    <option value="4 BHK">4 BHK Flat</option>
                    <option value="Penthouse">Penthouse</option>
                  </select>
                </div>

                {error && (
                  <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                    {error}
                  </p>
                )}

                <button
                  type="submit" disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-sm uppercase tracking-wider py-3.5 shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98] disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : (<>Submit Enquiry <ArrowRight className="w-4 h-4" /></>)}
                </button>

                <p className="text-center text-[10px] text-slate-400">🔒 Your details are safe. No spam.</p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}