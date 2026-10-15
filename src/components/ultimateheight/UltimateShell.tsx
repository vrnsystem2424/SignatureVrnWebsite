"use client";

import React, { useState, useEffect } from "react";
import UltimateNavbar from "./UltimateNavbar";
import UltimateStickyBar from "./UltimateStickyBar";
import UltimateEnquiryPopup from "./UltimateEnquiryPopup";

interface UltimateShellProps {
  children: React.ReactNode;
}

export default function UltimateShell({ children }: UltimateShellProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("ultimate_lead_done")) return;
    } catch {}

    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const open = () => setIsPopupOpen(true);
    window.addEventListener("open-enquiry-popup", open);
    return () => window.removeEventListener("open-enquiry-popup", open);
  }, []);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <UltimateNavbar onEnquire={openPopup} />
      {children}
      <UltimateStickyBar onEnquire={openPopup} />
      <UltimateEnquiryPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
}