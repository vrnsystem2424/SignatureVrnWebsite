import { heritageData } from "../../data/signatureheritage";

export default function HeritageHighlights() {
  return (
    <section id="highlights" className="py-24 bg-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold text-amber-400 mb-12">Signature Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {heritageData.highlights.map((item, i) => (
            <div key={i} className="p-6 border border-indigo-800 bg-indigo-900/30">
              <div className="text-amber-400 mb-3 text-2xl">✦</div>
              <p className="text-indigo-100 font-light">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}