"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import Image from "next/image";

interface HeritageNavbarProps {
  onEnquire?: () => void;
}

export default function HeritageNavbar({ onEnquire }: HeritageNavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCtaClick = (e: React.MouseEvent) => {
    if (onEnquire) {
      e.preventDefault();
      onEnquire();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 py-2 shadow-md backdrop-blur-md sm:py-2.5"
          : "bg-transparent py-2.5 sm:py-3.5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-5 lg:px-10">
        {/* LEFT: Project Logo */}
        <Link href="#home" className="flex flex-shrink-0 items-center group">
          <div className="flex items-center justify-center rounded-lg bg-white p-1.5 shadow-sm ring-1 ring-black/10 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/signatureheritage/Logo2.jpeg"
              alt="Signature Heritage Logo"
              width={160}
              height={56}
              priority
              unoptimized
              className="h-9 sm:h-11 md:h-12 w-auto object-contain rounded"
            />
          </div>
        </Link>

        {/* RIGHT: Book Now (Opens Popup or Scrolls to Form) */}
        <a
          href="#contact"
          onClick={handleCtaClick}
          className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-amber-400 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-indigo-950 shadow-md shadow-amber-400/30 transition-all duration-300 hover:scale-[1.03] hover:bg-amber-500 active:scale-[0.97] sm:gap-2 sm:px-5 sm:py-2.5 sm:text-xs md:px-6 md:text-sm"
        >
          <PhoneCall className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Book Now
        </a>
      </nav>
    </header>
  );
}