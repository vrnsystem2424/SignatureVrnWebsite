import Link from 'next/link';

export default function ParadiseThankYouPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100 via-white to-pink-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-xl p-6 sm:p-8 text-center text-slate-900">
        
        {/* Success Icon */}
        <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Thank You Heading */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-slate-900">
          Thank You!
        </h1>

        <p className="text-sm sm:text-base font-medium mb-5 text-green-600">
          Your inquiry for Signature Paradise has been successfully received.
        </p>

        {/* Professional Sales Wording */}
        <div className="bg-slate-50/80 border border-slate-100 rounded-xl p-4 sm:p-5 mb-6 text-left">
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Our dedicated relationship manager will get in touch with you shortly to share the exclusive floor plans, pricing, and schedule your priority site visit.
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Link
            href="/paradise"
            className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm shadow-md shadow-amber-500/20 hover:bg-amber-400 transition-all duration-200"
          >
            Back to Project Page
          </Link>
        </div>

      </div>
    </main>
  );
}