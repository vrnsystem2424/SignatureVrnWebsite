import Image from "next/image";
import { paradiseData } from "../../data/paradise";

export default function ParadiseGallery() {
  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-emerald-600 text-sm font-bold uppercase tracking-widest mb-3">
            Our Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Visualize Your Dream Home
          </h2>
          <p className="text-slate-600">Step into the world of luxury and elegance</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {paradiseData.gallery.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 ? "1/1" : "4/3" }}
            >
              <Image
                src={img}
                alt={`Paradise Gallery ${i + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}