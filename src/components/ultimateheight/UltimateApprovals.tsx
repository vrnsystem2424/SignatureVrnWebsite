"use client";

import React from "react";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { ultimateHeightData } from "../../data/ultimateheight";
import ScrollReveal from "./ScrollReveal";

export default function UltimateApprovals() {
  const openEnquiry = () => window.dispatchEvent(new Event("open-enquiry-popup"));

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue-900 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full inline-block mb-3">
              Project Details &amp; Compliance
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
              Approvals &{" "}
              <span className="text-blue-900">Project Information</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={100}>
          <div className="bg-[#FAFAFA] rounded-2xl border border-slate-200 p-6 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {ultimateHeightData.approvals.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100">
                  <ShieldCheck className="w-5 h-5 text-blue-900 shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 text-center mb-6">
              Confirm the applicable documents and current project status with the developer before publishing these claims.
            </p>
            <div className="text-center">
              <button type="button" onClick={openEnquiry}
                className="inline-flex items-center gap-2 rounded-full bg-blue-900 hover:bg-blue-950 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 shadow-lg shadow-blue-900/20 transition-all active:scale-95">
                Get Approval Details <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}