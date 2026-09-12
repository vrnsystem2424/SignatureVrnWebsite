import { heritageData } from "../../data/signatureheritage";

export default function HeritageInventory() {
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
              <a href="#lead-form" className="block text-center border border-indigo-950 text-indigo-950 py-3 uppercase text-sm font-bold hover:bg-indigo-950 hover:text-white transition">
                Request Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}