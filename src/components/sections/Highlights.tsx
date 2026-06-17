import Container from "../ui/Container";

const items = [
  "135 Premium Flats + 27 Commercial Units",
  "130 Flats Already Sold",
  "Only 5 Premium Units Available",
  "96.3% Inventory Sold",
  "Prime Main Road Location",
  "Dedicated Parking for Every Flat",
];

export default function Highlights() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-800 shadow-sm"
            >
              <p className="text-lg font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
