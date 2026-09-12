"use client";

import React from "react";
import { Phone, Send, MessageCircle } from "lucide-react";
import { paradiseData } from "../../data/paradise";

interface ParadiseStickyBarProps {
  onEnquire: () => void;
}

export default function ParadiseStickyBar({ onEnquire }: ParadiseStickyBarProps) {
  const phone = paradiseData.phone || "+919999999999";
  const wa = paradiseData.whatsappNumber || phone.replace(/[^0-9]/g, "");

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[90] w-[min(100%-1.5rem,380px)]">
      <div className="flex items-stretch overflow-hidden rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] border border-slate-200/80 backdrop-blur-md">
        
        {/* Call */}
        <a
          href={`tel:${phone}`}
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 sm:py-3 px-2 text-slate-800 hover:bg-slate-50 active:bg-slate-100 transition-colors"
        >
          <Phone className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2} />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide">Call</span>
        </a>

        <div className="w-px self-stretch bg-slate-200 my-2" />

        {/* Enquire → opens popup */}
        <button
          type="button"
          onClick={onEnquire}
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 sm:py-3 px-2 text-slate-800 hover:bg-slate-50 active:bg-slate-100 transition-colors"
        >
          <Send className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2} />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide">Enquire</span>
        </button>

        <div className="w-px self-stretch bg-slate-200 my-2" />

        {/* WhatsApp Chat */}
        <a
          href={`https://wa.me/${wa}?text=${encodeURIComponent(
            "Hi, I am interested in Signature Paradise plots on Kolar Road, Bhopal. Please share details."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 sm:py-3 px-2 text-slate-800 hover:bg-emerald-50 active:bg-emerald-100 transition-colors"
        >
          <MessageCircle className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-amber-500" strokeWidth={2} />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide">Chat</span>
        </a>
      </div>
    </div>
  );
}