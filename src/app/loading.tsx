// File: src/app/signatureheritage/loading.tsx

"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-slate-900">
      <div className="flex flex-col items-center text-center px-4">
        {/* Simple & Elegant Premium Circular Spinner */}
        <div className="relative mb-4 flex h-12 w-12 items-center justify-center">
          <div className="absolute h-12 w-12 rounded-full border-4 border-slate-100" />
          <div className="absolute h-12 w-12 rounded-full border-4 border-amber-500 border-t-transparent animate-spin" />
        </div>

        {/* Clean Project Name Text */}
        <h2 className="text-lg font-serif font-bold tracking-[0.2em] text-indigo-950 uppercase">
          Signature Heritage
        </h2>
        <p className="mt-1.5 text-[10px] uppercase tracking-[0.15em] text-amber-600 font-semibold">
          Loading Address...
        </p>
      </div>
    </div>
  );
}