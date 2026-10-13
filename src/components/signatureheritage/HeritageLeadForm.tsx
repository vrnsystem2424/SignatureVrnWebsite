"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Send, MessageCircle } from "lucide-react";
import { leadFormContent, siteConfig } from "../../data/signatureheritage";
import { submitLeadToGoogleSheet } from "@/src/lib/utils";

export default function HeritageLeadForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(leadFormContent.interestOptions[0]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const buildWhatsAppUrl = () => {
    const message = `Hello Signature Heritage Team,%0A%0AMy name is *${encodeURIComponent(
      name.trim()
    )}*.%0AContact number: *${encodeURIComponent(
      phone.trim()
    )}*.%0AI am interested in: *${encodeURIComponent(
      interest
    )}*.%0A%0APlease share more details.`;
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setError("");

    if (!name.trim() || !phone.trim()) {
      setError("Name and phone are required.");
      return;
    }
    if (!/^[0-9]{10}$/.test(phone.trim())) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);

    // WhatsApp click ke turant baad khulega, warna mobile par block hota hai
    window.open(buildWhatsAppUrl(), "_blank");

    try {
      await submitLeadToGoogleSheet({
        name: name.trim(),
        phone: phone.trim(),
        message: `Interested in: ${interest}`,
        project: "Signature Heritage",
      });

      try {
        sessionStorage.setItem("heritage_lead_done", "1");
      } catch {}
      router.push("/signatureheritage/thankyou");
    } catch (err) {
      console.error("Submission error:", err);
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
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
                    Your enquiry has been received. Redirecting to thank you page...
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
                      onChange={(e) => {
                        setName(e.target.value);
                        setError("");
                      }}
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
                      inputMode="numeric"
                      required
                      maxLength={10}
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        setError("");
                      }}
                      placeholder="10-digit mobile number"
                      className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm text-indigo-950 outline-none transition-colors focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="mb-1.5 block text-sm font-medium text-indigo-950"
                    >
                      I&apos;m Interested In
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

                  {error && (
                    <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-indigo-950 transition-transform hover:scale-[1.02] disabled:opacity-70"
                  >
                    <Send size={16} />
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
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