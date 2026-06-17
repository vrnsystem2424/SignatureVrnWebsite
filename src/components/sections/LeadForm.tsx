"use client";

import Container from "../ui/Container";

export default function LeadForm() {
  return (
    <section id="enquire" className="bg-white py-20">
      <Container>
        <div className="grid gap-8 rounded-3xl bg-slate-900 p-8 text-white md:p-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Enquire Now
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Schedule a site visit for the last few available premium units
            </h2>
            <p className="mt-5 max-w-2xl text-slate-300">
              Share your details and our sales team will contact you with
              availability, pricing discussion, and site visit coordination.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm text-slate-400">Project</p>
                <p className="mt-1 font-semibold">Ultimate Heights</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm text-slate-400">Availability</p>
                <p className="mt-1 font-semibold">Only 5 Units Left</p>
              </div>
            </div>
          </div>

          <form className="rounded-3xl bg-white p-6 text-slate-900 shadow-xl">
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-slate-900"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-slate-900"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-slate-900"
              />
              <select className="h-12 rounded-xl border border-slate-300 px-4 outline-none focus:border-slate-900">
                <option>Interested In</option>
                <option>3 BHK</option>
                <option>4 BHK</option>
                <option>Penthouse</option>
                <option>Commercial Unit</option>
              </select>
              <textarea
                placeholder="Message"
                rows={4}
                className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
              />
              <button
                type="submit"
                className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
              >
                Request Callback
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
