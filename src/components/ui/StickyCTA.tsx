import { Phone, MessageCircle } from "lucide-react";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-4 left-0 z-50 w-full px-4">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3 rounded-2xl border border-white/20 bg-slate-900/95 p-3 shadow-2xl backdrop-blur">
        <a
          href="tel:+919999999999"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 font-medium text-slate-900 transition hover:bg-slate-100"
        >
          <Phone size={18} />
          Call Now
        </a>
        <a
          href="[wa.me](https://wa.me/919999999999)"
          target="_blank"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 font-medium text-white transition hover:bg-green-600"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
