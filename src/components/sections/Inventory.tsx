"use client";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Inventory() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionTitle
          eyebrow="Inventory Status"
          title="High sell-through with very limited premium inventory remaining"
          description="A strong sold-out trend increases buyer confidence and creates urgency for decision-makers."
        />

        <div className="grid gap-6 lg:grid-cols-2 mt-12">
          {/* Sales Snapshot Card */}
          <div className="relative rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl hover:border-amber-400 transition-all duration-300">
            {/* Top accent bar */}
            <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-b-full" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Sales Snapshot</h3>
            </div>

            <div className="overflow-hidden rounded-2xl border-2 border-slate-200">
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b-2 border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-4 font-medium text-slate-700">Total Flats</td>
                    <td className="px-4 py-4 text-slate-900 font-semibold">135</td>
                  </tr>
                  <tr className="border-b-2 border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-4 font-medium text-slate-700">Flats Sold</td>
                    <td className="px-4 py-4 text-slate-900 font-semibold">130</td>
                  </tr>
                  <tr className="border-b-2 border-slate-200 hover:bg-red-50 transition-colors">
                    <td className="px-4 py-4 font-medium text-slate-700">Available Units</td>
                    <td className="px-4 py-4 text-red-600 font-bold text-lg">
                      <span className="inline-flex items-center gap-2">
                        5
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full animate-pulse">
                          Hurry!
                        </span>
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-emerald-50">
                    <td className="px-4 py-4 font-medium text-slate-700">Sell Through Rate</td>
                    <td className="px-4 py-4 text-emerald-600 font-bold text-lg">96.30% ✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Available Inventory Card */}
          <div className="relative rounded-3xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 via-white to-amber-50 p-8 shadow-lg hover:shadow-2xl hover:border-amber-500 transition-all duration-300">
            {/* Limited badge */}
            <div className="absolute -top-3 right-6">
              <div className="bg-gradient-to-r from-red-500 to-amber-500 text-white px-4 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
                ⚡ Only 5 Left
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <span className="text-xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Available Inventory</h3>
            </div>

            <div className="grid gap-4">
              {/* 4 BHK */}
              <div className="group rounded-2xl bg-white p-5 shadow-md border-l-4 border-amber-500 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏠</span>
                    <div>
                      <span className="font-semibold text-slate-900 block">4 BHK</span>
                      <span className="text-xs text-slate-500">Luxury Flat</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-amber-600">2</span>
                    <span className="text-xs text-slate-500 block">Units Left</span>
                  </div>
                </div>
              </div>

              {/* 3 BHK */}
              <div className="group rounded-2xl bg-white p-5 shadow-md border-l-4 border-red-500 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏡</span>
                    <div>
                      <span className="font-semibold text-slate-900 block">3 BHK</span>
                      <span className="text-xs text-red-500 font-semibold">Almost Sold Out!</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-red-600">1</span>
                    <span className="text-xs text-slate-500 block">Unit Left</span>
                  </div>
                </div>
              </div>

              {/* Penthouse */}
              <div className="group rounded-2xl bg-white p-5 shadow-md border-l-4 border-purple-500 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🏛️</span>
                    <div>
                      <span className="font-semibold text-slate-900 block">Penthouse</span>
                      <span className="text-xs text-purple-600 font-semibold">Premium Suite</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-purple-600">2</span>
                    <span className="text-xs text-slate-500 block">Units Left</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => {
                if ((window as any).openEnquiryPopup) {
                  (window as any).openEnquiryPopup();
                }
              }}
              className="mt-6 w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold py-3 rounded-xl hover:scale-105 transition-all shadow-lg cursor-pointer"
            >
              Book Your Unit Now →
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}