"use client";

import React, { useState, useEffect } from "react";
import ParadiseNavbar from "./ParadiseNavbar";
import ParadiseStickyBar from "./ParadiseStickyBar";
import ParadiseEnquiryPopup from "./ParadiseEnquiryPopup";

interface ParadiseShellProps {
  children: React.ReactNode;
}

export default function ParadiseShell({ children }: ParadiseShellProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 5 second baad popup — lekin agar form pehle hi bhar diya hai to nahi
  useEffect(() => {
    try {
      if (sessionStorage.getItem("paradise_lead_done")) return;
    } catch {}

    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Kisi bhi section ke button se popup kholne ke liye
  useEffect(() => {
    const open = () => setIsPopupOpen(true);
    window.addEventListener("open-enquiry-popup", open);
    return () => window.removeEventListener("open-enquiry-popup", open);
  }, []);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <ParadiseNavbar onEnquire={openPopup} />
      {children}
      <ParadiseStickyBar onEnquire={openPopup} />
      <ParadiseEnquiryPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
}