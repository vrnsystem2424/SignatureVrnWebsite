import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Location() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionTitle
          eyebrow="Location Advantage"
          title="Strategically located for daily convenience and strong accessibility"
          description="Ultimate Heights is positioned on main road connectivity near established social infrastructure and key city movement corridors."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-8">
            <h3 className="text-xl font-semibold text-slate-900">Nearby Landmarks</h3>
            <div className="mt-6 space-y-4 text-slate-700">
              <p><strong>Address:</strong> Aura Mall, Behind Indus Empire, Bawadiya Kalan, Near Shahpura, Bhopal</p>
              <p><strong>Main Road Distance:</strong> On Main Road</p>
              <p><strong>Bansal Hospital:</strong> 1.5 km</p>
              <p><strong>Schools:</strong> 300 metre</p>
              <p><strong>Mall:</strong> 3 km</p>
              <p><strong>Landmarks:</strong> Chuna Bhatti Square, Bansal Hospital, Aura Mall</p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8">
            <h3 className="text-xl font-semibold text-slate-900">Estimated Travel Time</h3>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-700">From</th>
                    <th className="px-4 py-3 text-sm font-semibold text-slate-700">Travel Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-slate-200">
                    <td className="px-4 py-4 text-slate-700">Arera Colony</td>
                    <td className="px-4 py-4 text-slate-900">9 min</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="px-4 py-4 text-slate-700">Shahpura</td>
                    <td className="px-4 py-4 text-slate-900">5 min</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="px-4 py-4 text-slate-700">MP Nagar</td>
                    <td className="px-4 py-4 text-slate-900">17 min</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="px-4 py-4 text-slate-700">Kolar Road</td>
                    <td className="px-4 py-4 text-slate-900">6 min</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
