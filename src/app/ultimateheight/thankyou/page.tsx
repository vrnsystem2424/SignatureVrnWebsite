// import Link from 'next/link';

// export default function UltimateHeightThankYouPage() {
//   return (
//     <main className="min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100 via-white to-pink-100 flex items-center justify-center px-4 py-8">
//       <div className="max-w-md w-full bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-xl p-6 sm:p-8 text-center text-slate-900">
        
//         {/* Success Icon */}
//         <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
//           <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//           </svg>
//         </div>

//         {/* Thank You Heading */}
//         <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-slate-900">
//           Thank You!
//         </h1>

//         <p className="text-sm sm:text-base font-medium text-green-600 mb-5">
//           Your inquiry for Ultimate Height has been successfully received.
//         </p>

//         {/* Professional Sales Wording */}
//         <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-4 sm:p-5 mb-6 text-left">
//           <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
//             Our dedicated relationship manager will get in touch with you shortly to share the exclusive floor plans, pricing, and schedule your priority site visit.
//           </p>
//         </div>

//         {/* Action Button */}
//         <div className="flex justify-center">
//           <Link
//             href="/ultimateheight"
//             className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm shadow-md shadow-amber-500/20 hover:bg-amber-400 transition-all duration-200"
//           >
//             Back to Project Page
//           </Link>
//         </div>

//       </div>
//     </main>
//   );
// }






import Link from "next/link";

export default function UltimateHeightThankYouPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100 via-white to-amber-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-lg w-full bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-xl p-6 sm:p-10 text-center text-slate-900">

        {/* Success Icon */}
        <div className="w-16 h-16 bg-emerald-50 border-2 border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 text-slate-900">
          Thank You for Your Interest in{" "}
          <span className="text-blue-900">Ultimate Heights!</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-2">
          Thank you for enquiring about Ultimate Heights, Bhopal — your next step towards premium{" "}
          <strong className="text-slate-900">4 BHK living</strong> and{" "}
          <strong className="text-slate-900">exclusive penthouse residences</strong>.
        </p>

        <p className="text-sm text-slate-500 leading-relaxed mb-6">
          Our team has received your enquiry and will contact you shortly to help you explore the available residences and schedule a site visit.
        </p>

        {/* Trust Badge */}
        <div className="bg-blue-950 text-white rounded-xl p-5 sm:p-6 mb-6 text-left">
          <h2 className="text-base sm:text-lg font-bold text-amber-400 mb-2">
            37+ Years of Trust. A Legacy of Excellence.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            In the last 37+ years, we have helped{" "}
            <strong className="text-white">7,487 customers</strong> achieve their real estate goals and successfully delivered{" "}
            <strong className="text-white">500+ projects</strong> across{" "}
            <strong className="text-white">3 states</strong> and{" "}
            <strong className="text-white">10 cities</strong>, covering more than{" "}
            <strong className="text-amber-400">3.33 crore sq. ft.</strong> of development.
          </p>
        </div>

        {/* What's Next */}
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 sm:p-6 mb-6 text-left">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
            What&apos;s Next?
          </h3>
          <ul className="space-y-2.5">
            <li className="flex items-start gap-2.5 text-sm text-slate-600">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-900 text-white text-[10px] font-bold">1</span>
              Our sales team will contact you shortly.
            </li>
            <li className="flex items-start gap-2.5 text-sm text-slate-600">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-900 text-white text-[10px] font-bold">2</span>
              Get detailed information about available 4 BHK flats and penthouses.
            </li>
            <li className="flex items-start gap-2.5 text-sm text-slate-600">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-900 text-white text-[10px] font-bold">3</span>
              Schedule a site visit and experience Ultimate Heights firsthand.
            </li>
          </ul>
        </div>

        {/* Closing */}
        <div className="mb-6">
          <p className="text-lg sm:text-xl font-serif font-bold text-blue-900 mb-1">
            Looking Forward to Welcoming You Home!
          </p>
          <p className="text-sm font-semibold text-slate-700">Ultimate Heights, Bhopal</p>
          <p className="text-xs text-amber-600 font-bold uppercase tracking-wider mt-1">
            Premium Living. Trusted Legacy.
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Link
            href="/ultimateheight"
            className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-blue-900 text-white font-bold text-sm shadow-md shadow-blue-900/20 hover:bg-blue-950 transition-all duration-200 active:scale-[0.98]"
          >
            Back to Project Page
          </Link>
        </div>

      </div>
    </main>
  );
}