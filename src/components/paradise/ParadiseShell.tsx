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

  // Auto-open popup after 5 seconds (once per page visit)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
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