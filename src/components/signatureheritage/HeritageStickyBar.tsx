"use client";

import { useState } from "react";
import HeritageEnquiryPopup from "./HeritageEnquiryPopup";

interface HeritageStickyBarProps {
  phone?: string;
  whatsapp?: string;
  projectName?: string; // ← Yeh line add karein
}

export default function HeritageStickyBar({
  phone = "+919999999999",
  whatsapp = "919999999999",
  projectName = "Signature Heritage",
}: HeritageStickyBarProps) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const handleCall = () => {
    window.location.href = `tel:${phone}`;
  };

  const handleChat = () => {
    const text = encodeURIComponent(
      `Hi, I am interested in ${projectName}. Please share details.`
    );
    window.open(`https://wa.me/${whatsapp}?text=${text}`, "_blank");
  };

  return (
    <>
      {/* Floating Bottom Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[380px] sm:max-w-[420px]">
        <div className="bg-white rounded-3xl shadow-[0_10px_35px_rgba(0,0,0,0.18)] border border-slate-100 py-2.5 px-3 flex items-center justify-between">
          {/* CALL */}
          <button
            onClick={handleCall}
            type="button"
            className="flex-1 flex flex-col items-center justify-center py-1 transition-transform active:scale-95 group"
          >
            <svg
              className="w-5 h-5 text-black mb-1 group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.37 2.4z" />
            </svg>
            <span className="text-xs font-semibold text-black tracking-wide">
              Call
            </span>
          </button>

          {/* Divider */}
          <div className="h-9 w-[1px] bg-slate-200/80" />

          {/* ENQUIRE */}
          <button
            onClick={() => setIsEnquiryOpen(true)}
            type="button"
            className="flex-1 flex flex-col items-center justify-center py-1 transition-transform active:scale-95 group"
          >
            <svg
              className="w-5 h-5 text-black mb-1 -rotate-12 group-hover:scale-110 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3 21l18-9L3 3l3 9zm0 0h7.5"
              />
            </svg>
            <span className="text-xs font-semibold text-black tracking-wide">
              Enquire
            </span>
          </button>

          {/* Divider */}
          <div className="h-9 w-[1px] bg-slate-200/80" />

          {/* CHAT */}
          <button
            onClick={handleChat}
            type="button"
            className="flex-1 flex flex-col items-center justify-center py-1 transition-transform active:scale-95 group"
          >
            <svg
              className="w-5 h-5 text-amber-500 mb-1 group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
            </svg>
            <span className="text-xs font-semibold text-black tracking-wide">
              Chat
            </span>
          </button>
        </div>
      </div>

      {/* Heritage Popup */}
      <HeritageEnquiryPopup
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </>
  );
}