import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";

export default function Overview() {
  return (
    <section id="overview" className="bg-slate-50 py-20">
      <Container>
        <SectionTitle
          eyebrow="Project Overview"
          title="A premium residential address crafted for modern family living"
          description="Ultimate Heights combines location advantage, high occupancy confidence, and premium lifestyle planning in one of Bhopal's fast-growing residential belts."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Project Details</h3>
            <div className="mt-6 space-y-4 text-slate-600">
              <p><strong>Project Name:</strong> Ultimate Heights</p>
              <p><strong>Type:</strong> Residential Flats + Commercial</p>
              <p><strong>Location:</strong> Aura Mall, Behind Indus Empire, Bawadiya Kalan, Near Shahpura, Bhopal</p>
              <p><strong>Structure:</strong> G+9 Floors</p>
              <p><strong>Parking:</strong> 1 Dedicated Parking per Flat</p>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm">
            <h3 className="text-xl font-semibold">Why Buyers Respond Fast</h3>
            <div className="mt-6 space-y-4 text-slate-300">
              <p>Strong market trust with 130 flats already sold.</p>
              <p>Rare remaining inventory across 3 BHK, 4 BHK and Penthouse categories.</p>
              <p>Main road visibility and easy access to healthcare, schools, and commercial zones.</p>
              <p>Ideal for end-users as well as serious location-focused buyers.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
