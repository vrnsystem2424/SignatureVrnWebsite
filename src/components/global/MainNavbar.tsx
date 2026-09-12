"use client";
import { useState } from "react";
import Link from "next/link";
import { allProjects } from "../../data/allProjects";

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-slate-900">
          Signature Group
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-slate-600 hover:text-amber-600 font-medium">Home</Link>
          
          {/* Projects Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-amber-600 font-medium flex items-center gap-1"
            >
              Our Projects ▼
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-4 w-56 bg-white border border-slate-100 shadow-xl rounded-md py-2">
                {allProjects.map((proj, idx) => (
                  <Link 
                    key={idx} 
                    href={proj.slug}
                    className="block px-4 py-2 hover:bg-slate-50 border-b border-slate-50 last:border-0"
                  >
                    <div className="text-sm font-bold text-slate-800">{proj.name}</div>
                    <div className="text-xs text-slate-500">{proj.location}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}