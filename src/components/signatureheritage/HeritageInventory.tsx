"use client";

import { heritageData } from "../../data/signatureheritage";

export default function HeritageInventory() {
  const openEnquiry = () => {
    window.dispatchEvent(new Event("open-enquiry-popup"));
  };

  return (
    <section id="inventory" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center text-indigo-950 mb-16">Exclusive Residences</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {heritageData.vacantInventory.map((item, i) => (
            <div key={i} className="bg-white border border-indigo-100 p-8 hover:shadow-2xl transition">
              <h3 className="text-2xl font-serif font-bold text-indigo-950">{item.type}</h3>
              <p className="text-amber-600 font-bold tracking-widest uppercase text-sm mt-2">{item.area}</p>
              <div className="my-6 text-3xl font-light text-indigo-900">{item.price}</div>
              <ul className="space-y-3 mb-8 border-t border-gray-100 pt-6">
                {item.features.map((feat, j) => (
                  <li key={j} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-amber-500">♦</span> {feat}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={openEnquiry}
                className="block w-full text-center rounded-xl bg-amber-500 text-slate-950 py-3.5 uppercase text-sm font-bold shadow-md shadow-amber-500/20 hover:bg-amber-400 transition-all duration-200"
              >
                Request Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}