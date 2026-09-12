"use client";
import { useState } from "react";
import { paradiseData } from "../../data/paradise";

export default function ParadiseLeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `New Enquiry - Paradise%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AInterested In: ${formData.interest}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${paradiseData.contact.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <section id="lead-form" className="py-20 bg-gradient-to-br from-slate-900 to-emerald-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-3">
              Enquire Now
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your Site Visit Today
            </h2>
            <p className="text-slate-300 mb-8">
              Our sales team will contact you within 30 minutes with pricing, availability and site visit coordination.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-xs text-slate-400 uppercase">Project</p>
                <p className="text-lg font-bold">{paradiseData.name}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-xs text-slate-400 uppercase">Availability</p>
                <p className="text-lg font-bold text-emerald-400">Only {paradiseData.stats.flatsVacant} Left</p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <p>📞 {paradiseData.contact.phone}</p>
              <p>✉️ {paradiseData.contact.email}</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 text-slate-900 space-y-4">
            <input
              type="text"
              required
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none"
            />
            <input
              type="tel"
              required
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none"
            />
            <select
              required
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none"
            >
              <option value="">Interested In</option>
              <option value="2 BHK">2 BHK</option>
              <option value="3 BHK">3 BHK</option>
              <option value="3 BHK Premium">3 BHK Premium</option>
              <option value="Penthouse">Penthouse</option>
            </select>
            <textarea
              placeholder="Message (Optional)"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-lg font-bold text-lg transition"
            >
              Send Enquiry →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}