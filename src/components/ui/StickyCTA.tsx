import { Phone, MessageCircle } from "lucide-react";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-4 left-0 z-50 w-full px-4">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3 rounded-2xl border border-white/20 bg-slate-900/95 p-3 shadow-2xl backdrop-blur">
        <a
          href="tel:+919203403607"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 font-medium text-slate-900 transition hover:bg-slate-100"
        >
          <Phone size={18} />
          Call Now
        </a>
        <a
          href="https://wa.me/919203403607?text=Hi,%20I'm%20interested%20in%20Ultimate%20Heights"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 font-medium text-white transition hover:bg-green-600"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}