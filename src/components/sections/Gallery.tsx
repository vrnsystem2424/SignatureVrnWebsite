// import Image from "next/image";
// import Container from "../ui/Container";
// import SectionTitle from "../ui/SectionTitle";

// export default function Gallery() {
//   return (
//     <section className="bg-slate-50 py-20">
//       <Container>
//         <SectionTitle
//           eyebrow="Gallery"
//           title="Visual glimpse of the project lifestyle"
//           description="Use naturally lit exterior and interior imagery to establish trust and premium appeal for ad traffic."
//         />

//         <div className="grid gap-6 lg:grid-cols-2">
//           <div className="relative min-h-[340px] overflow-hidden rounded-3xl">
//             {/* YAHAN PEHLE SE RELATIVE THA, BUT INNER DIV ADD KARO */}
//             <div className="relative w-full h-full">
//               <Image
//                 src="/images/exterior.jpg"
//                 alt="Ultimate Heights exterior view"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>

//           <div className="relative min-h-[340px] overflow-hidden rounded-3xl">
//             <div className="relative w-full h-full">
//               <Image
//                 src="/images/living-room.jpg"
//                 alt="Ultimate Heights premium living room"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }





"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  { src: "/images/exterior.jpg", title: "Magnificent Exterior", category: "Exterior" },
  { src: "/images/living-room.jpg", title: "Premium Living Room", category: "Interior" },
  { src: "/images/gallery-1.jpg", title: "Modern Kitchen", category: "Interior" },
  { src: "/images/gallery-2.jpg", title: "Luxury Bedroom", category: "Interior" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Agar extra images chahiye to ye batao, main download karne ka link dunga

  return (
    <section id="gallery" className="py-24 bg-white">
      <Container>
        <SectionTitle
          eyebrow="Our Gallery"
          title="Visualize Your Dream Home"
          description="Step into the world of luxury and elegance"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(idx)}
            >
              <div className="relative h-72 overflow-hidden rounded-2xl">
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-white font-semibold">{image.title}</p>
                  <p className="text-amber-400 text-sm">{image.category}</p>
                </div>
                <div className="absolute top-4 right-4 bg-amber-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[80vh]">
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].title}
                  fill
                  className="object-contain"
                />
              </div>
              <button
                className="absolute top-4 right-4 text-white text-5xl hover:text-amber-400 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <p className="text-xl font-semibold">{galleryImages[selectedImage].title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}