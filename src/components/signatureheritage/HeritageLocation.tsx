// import { heritageData } from "../../data/signatureheritage";

// export default function HeritageLocation() {
//   return (
//     <section id="location" className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-14">
//           <p className="text-amber-600 text-sm font-bold uppercase tracking-[0.25em] mb-3">
//             Prime Location
//           </p>
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-indigo-950 mb-4">
//             Plots on Kolar Road, Bhopal
//           </h2>
//           <p className="text-indigo-900/70 max-w-3xl mx-auto leading-relaxed">
//             <strong>Signature Heritage</strong> is a premium gated residential project on{" "}
//             <strong>Kolar Road, Bhopal</strong> — ideal if you are searching for{" "}
//             <em>plots in Kolar Road</em>, <em>villa plots in Bhopal</em>, or a{" "}
//             <em>gated community near Shahpura, Chuna Bhatti & Bawadiya Kalan</em>.
//             Enjoy club house, pool, lawn, temple and commercial plaza in one address.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//           <div className="rounded-2xl overflow-hidden border border-indigo-100 shadow-lg h-80 lg:h-full min-h-[320px]">
//             {/* अपना real Google Maps embed link लगाएँ */}
//             <iframe
//               title="Signature Heritage Kolar Road Bhopal Location Map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.0!2d77.40!3d23.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKolar%20Road%20Bhopal!5e0!3m2!1sen!2sin!4v1"
//               width="100%"
//               height="100%"
//               style={{ border: 0, minHeight: 320 }}
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>

//           <div>
//             <h3 className="text-2xl font-serif font-bold text-indigo-950 mb-6">
//               Connectivity from Kolar Road
//             </h3>
//             <div className="space-y-3">
//               {heritageData.connectivity.map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center justify-between bg-indigo-50/80 hover:bg-amber-50 p-4 rounded-xl border border-indigo-100 transition"
//                 >
//                   <div>
//                     <p className="font-semibold text-indigo-950">{item.place}</p>
//                     <p className="text-xs text-indigo-900/50">{item.distance}</p>
//                   </div>
//                   <span className="bg-indigo-950 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full">
//                     {item.time}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import { MapPin } from "lucide-react";
import { locationContent, nearbyLandmarks, siteConfig } from "../../data/signatureheritage";

export default function HeritageLocation() {
  return (
    <section id="location" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
            {locationContent.eyebrow}
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-indigo-950 sm:text-4xl lg:text-5xl">
            {locationContent.title}
          </h2>
          <p className="mt-4 text-neutral-600">{locationContent.description}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm lg:col-span-3">
            <iframe
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${siteConfig.projectName} location map - ${siteConfig.location}`}
              className="h-[320px] w-full lg:h-full"
            />
          </div>

          {/* Landmarks list */}
          <div className="lg:col-span-2">
            <ul className="space-y-3">
              {nearbyLandmarks.map((landmark) => (
                <li
                  key={landmark.id}
                  className="flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 px-5 py-4 transition-colors hover:border-amber-400/50 hover:bg-amber-50/40"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="text-amber-500" size={18} />
                    <div>
                      <p className="text-sm font-medium text-indigo-950">{landmark.name}</p>
                      <p className="text-xs text-neutral-500">{landmark.category}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-semibold text-amber-600">
                    {landmark.distance}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}