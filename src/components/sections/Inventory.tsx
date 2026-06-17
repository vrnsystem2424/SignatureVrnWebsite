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

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 p-8">
            <h3 className="text-xl font-semibold text-slate-900">Sales Snapshot</h3>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-left">
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="px-4 py-4 font-medium text-slate-700">Total Flats</td>
                    <td className="px-4 py-4 text-slate-900">135</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="px-4 py-4 font-medium text-slate-700">Flats Sold</td>
                    <td className="px-4 py-4 text-slate-900">130</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="px-4 py-4 font-medium text-slate-700">Available Units</td>
                    <td className="px-4 py-4 text-slate-900">5</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-slate-700">Sell Through Rate</td>
                    <td className="px-4 py-4 text-emerald-600 font-semibold">96.30%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-xl font-semibold text-slate-900">Available Inventory</h3>
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-700">4 BHK</span>
                  <span className="text-xl font-bold text-slate-900">2</span>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-700">3 BHK</span>
                  <span className="text-xl font-bold text-slate-900">1</span>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-700">Penthouse</span>
                  <span className="text-xl font-bold text-slate-900">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
