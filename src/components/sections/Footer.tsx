"use client";

import Container from "../ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    // { name: "Home", href: "/" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    // { name: "Location", href: "#location" },
    { name: "Contact", href: "#enquire" },
  ];

  const flatCategories = [
    { name: "3 BHK Flats in Bhopal", href: "#" },
    { name: "4 BHK Flats in Bhopal", href: "#" },
    { name: "Penthouse in Bhopal", href: "#" },
    { name: "Premium Apartments in Bhopal", href: "#" },
    { name: "Luxury Homes in Bhopal", href: "#" },
    { name: "Ready to Move Flats in Bhopal", href: "#" },
  ];

  const locationKeywords = [
    { name: "Flats in Bawadiya Kalan", href: "#" },
    { name: "Flats Near Shahpura Bhopal", href: "#" },
    { name: "Apartments Near Aura Mall", href: "#" },
    { name: "Flats Near Bansal Hospital", href: "#" },
    { name: "Residential Projects in Bhopal", href: "#" },
    { name: "Apartments for Sale in Bhopal", href: "#" },
  ];

  const projectInfo = [
    { name: "Luxury Flats in Bhopal", href: "#" },
    { name: "New Residential Project in Bhopal", href: "#" },
    { name: "G+9 Residential Tower Bhopal", href: "#" },
  ];

  const allKeywords = [...flatCategories, ...locationKeywords, ...projectInfo];

  return (
    <footer className="bg-slate-950 pt-10 lg:pt-16 pb-24 lg:pb-8">
      {/*                ✅ pb-24 on mobile so fixed bottom bar doesn't cover content */}
      <Container>
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12">
          
          {/* Column 1 - Brand (Full width on mobile) */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
              Ultimate<span className="text-amber-500">Heights</span>
            </h3>
            <p className="text-slate-400 text-xs lg:text-sm mb-3 leading-relaxed">
              Premium residential project in Bawadiya Kalan, near Aura Mall, 
              Shahpura, Bhopal. Experience luxury living at its finest.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-amber-500 text-xs">🏗️ RERA Approved</span>
              <span className="text-slate-600 hidden lg:inline">|</span>
              <span className="text-amber-500 text-xs">⚡ Limited Inventory</span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm lg:text-lg mb-3 lg:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 lg:space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-500 transition-colors text-xs lg:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Flat Categories */}
          <div>
            <h4 className="text-white font-semibold text-sm lg:text-lg mb-3 lg:mb-4">Our Offerings</h4>
            <ul className="space-y-1.5 lg:space-y-2">
              {flatCategories.slice(0, 4).map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-amber-500 transition-colors text-xs lg:text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Location (Hidden on mobile, full row) */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-white font-semibold text-sm lg:text-lg mb-3 lg:mb-4">Location & Project</h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-1.5 lg:space-y-2 lg:gap-0">
              {locationKeywords.slice(0, 4).map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-amber-500 transition-colors text-xs lg:text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section - All Keywords - FIXED gap */}
        <div className="border-t border-white/10 pt-6 lg:pt-8">
          <div className="mb-5 lg:mb-6">
            <h5 className="text-white text-xs lg:text-sm font-semibold mb-3">Popular Searches</h5>
            
            {/* ✅ FIXED: Proper inline keyword listing with separators */}
            <p className="text-[10px] lg:text-xs leading-relaxed text-slate-500">
              {allKeywords.map((item, idx) => (
                <span key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-amber-500 transition-colors"
                  >
                    {item.name}
                  </a>
                  {idx < allKeywords.length - 1 && (
                    <span className="text-slate-700 mx-2">|</span>
                  )}
                </span>
              ))}
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center text-slate-500 text-[10px] lg:text-xs">
            <p>© {currentYear} Ultimate Heights. All rights reserved.</p>
            <p className="mt-1.5 lg:mt-2 text-[10px] lg:text-xs">
              Luxury Flats in Bhopal | Premium Apartments Near Aura Mall | Residential Projects in Shahpura
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}