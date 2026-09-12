import { paradiseData } from "../../data/paradise";

export default function ParadiseOverview() {
  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-emerald-600 text-sm font-bold uppercase tracking-widest mb-3">
            Project Overview
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            A Life of Luxury Awaits
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {paradiseData.name} is a premium residential development crafted for those who seek excellence in every detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-100">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Structure</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• {paradiseData.stats.floors} Floors</li>
              <li>• {paradiseData.stats.totalTowers} Elegant Towers</li>
              <li>• {paradiseData.stats.totalUnits} Premium Units</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-amber-100">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Sales Status</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• Sold: <span className="font-bold text-emerald-600">{paradiseData.stats.flatsSold} Units</span></li>
              <li>• Available: <span className="font-bold text-amber-600">{paradiseData.stats.flatsVacant} Units</span></li>
              <li>• Occupancy: {paradiseData.stats.occupancyRate}</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Compliance</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• RERA: {paradiseData.rera}</li>
              <li>• Possession: {paradiseData.possession}</li>
              <li>• Bank Approved Loans</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}