"use client";

import Container from "../ui/Container";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
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

  return (
    <footer className="bg-slate-950 pt-16 pb-8">
      <Container>
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1 - Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Ultimate<span className="text-amber-500">Heights</span>
            </h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Premium residential project in Bawadiya Kalan, near Aura Mall, 
              Shahpura, Bhopal. Experience luxury living at its finest.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-amber-500 text-sm">🏗️ RERA Approved</span>
              <span className="text-slate-600">|</span>
              <span className="text-amber-500 text-sm">⚡ Limited Inventory</span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Flat Categories */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Our Offerings</h4>
            <ul className="space-y-2">
              {flatCategories.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Location & Project */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Location & Project</h4>
            <ul className="space-y-2 mb-4">
              {locationKeywords.slice(0, 3).map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {projectInfo.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section - All Keywords */}
        <div className="border-t border-white/10 pt-8">
          <div className="mb-6">
            <h5 className="text-white text-sm font-semibold mb-3">Popular Searches</h5>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {[...flatCategories, ...locationKeywords, ...projectInfo].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="text-slate-500 hover:text-amber-500 transition-colors text-xs"
                >
                  {item.name}
                  {idx < [...flatCategories, ...locationKeywords, ...projectInfo].length - 1 && (
                    <span className="text-slate-700 ml-4">|</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-slate-500 text-xs">
            <p>© {currentYear} Ultimate Heights. All rights reserved.</p>
            <p className="mt-2">
              Luxury Flats in Bhopal | Premium Apartments Near Aura Mall | Residential Projects in Shahpura
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}