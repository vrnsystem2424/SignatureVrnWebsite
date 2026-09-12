

"use client";

import { useState, FormEvent } from "react";
import { Send, MessageCircle } from "lucide-react";
import { leadFormContent, siteConfig } from "../../data/signatureheritage";

export default function HeritageLeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(leadFormContent.interestOptions[0]);
  const [submitted, setSubmitted] = useState(false);

  const buildWhatsAppUrl = () => {
    const message = `Hello Signature Heritage Team,%0A%0AMy name is *${name}*.%0AContact number: *${phone}*.%0AI am interested in: *${interest}*.%0A%0APlease share more details.`;
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !phone) return;

    // TODO: Wire this up to your CRM / lead API endpoint (e.g. fetch('/api/lead', ...))
    setSubmitted(true);

    // Open WhatsApp with a pre-filled enquiry message
    window.open(buildWhatsAppUrl(), "_blank");
  };

  return (
    <section id="contact" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <div className="overflow-hidden rounded-3xl border border-indigo-950/10 bg-indigo-950 shadow-2xl shadow-indigo-950/20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left copy panel */}
            <div className="relative flex flex-col justify-center p-10 lg:p-14">
              <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-amber-400/10" />
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                {leadFormContent.eyebrow}
              </span>
              <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl">
                {leadFormContent.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
                {leadFormContent.description}
              </p>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/50 px-5 py-3 text-sm font-medium text-amber-400 transition-colors hover:bg-amber-400 hover:text-indigo-950"
              >
                <MessageCircle size={18} />
                Chat with us on WhatsApp
              </a>
            </div>

            {/* Right form panel */}
            <div className="bg-white p-10 lg:p-14">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/10 text-3xl">
                    ✅
                  </div>
                  <h3 className="font-serif text-2xl text-indigo-950">Thank You!</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Your enquiry has been received. Our team will reach out to you shortly.
                    We've also opened WhatsApp so you can message us directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-indigo-950"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm text-indigo-950 outline-none transition-colors focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-indigo-950"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 98765 43210"
                      className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm text-indigo-950 outline-none transition-colors focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="mb-1.5 block text-sm font-medium text-indigo-950"
                    >
                      I'm Interested In
                    </label>
                    <select
                      id="interest"
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-indigo-950 outline-none transition-colors focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
                    >
                      {leadFormContent.interestOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-indigo-950 transition-transform hover:scale-[1.02]"
                  >
                    <Send size={16} />
                    Submit Enquiry
                  </button>

                  <p className="text-center text-xs text-neutral-400">
                    By submitting, you agree to be contacted regarding this project.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}