// import type { Metadata } from "next";
// import HeritageNavbar from "../../components/signatureheritage/HeritageNavbar";
// import HeritageHero from "../../components/signatureheritage/HeritageHero";
// import HeritageOverview from "../../components/signatureheritage/HeritageOverview";
// import HeritageAmenities from "../../components/signatureheritage/HeritageAmenities";
// import HeritageBanner from "../../components/signatureheritage/HeritageBanner";
// import HeritageGallery from "../../components/signatureheritage/HeritageGallery";
// import HeritageLocation from "../../components/signatureheritage/HeritageLocation";
// import HeritageLeadForm from "../../components/signatureheritage/HeritageLeadForm";
// import HeritageFooter from "../../components/signatureheritage/HeritageFooter";
// import HeritageDidYouKnow from "../../components/signatureheritage/HeritageDidYouKnow";
// import HeritageProblems from "../../components/signatureheritage/HeritageProblems";
// import HeritageReasons from "../../components/signatureheritage/HeritageReasons";
// import HeritageTestimonials from "../../components/signatureheritage/HeritageTestimonials";
// import { siteConfig } from "../../data/signatureheritage";

// import RouteLock from "../../components/ui/RouteLock";
// import HeritageStickyBar from "../../components/signatureheritage/HeritageStickyBar";

// // ✅ Transparent Client Page Loader Import Kiya
// import HeritagePageLoader from "../../components/signatureheritage/HeritagePageLoader";

// export const metadata: Metadata = {
//   title:
//     "Signature Heritage | Premium Plots in Kolar Road, Bhopal | Luxury Gated Community",
//   description:
//     "Signature Heritage offers premium residential plots in Kolar Road, Bhopal with a royal clubhouse, swimming pool & commercial plaza. Explore property in Kolar today — book your site visit now.",
//   keywords: [
//     "plots in Kolar Road Bhopal",
//     "property in Kolar",
//     "luxury gated community Bhopal",
//     "residential plots Bhopal",
//     "Kolar Road real estate",
//     "Signature Heritage Bhopal",
//     "gated community Kolar Road",
//     "plots for sale Bhopal",
//   ],
//   openGraph: {
//     title: "Signature Heritage | Premium Plots in Kolar Road, Bhopal",
//     description:
//       "A royal, gated residential community on Kolar Road, Bhopal featuring a luxury clubhouse, pool & commercial plaza. Download the brochure or book a site visit.",
//     url: "https://www.yourdomain.com/signatureheritage",
//     siteName: "Signature Heritage",
//     images: [
//       {
//         url: "/images/signatureheritage/entry-gate.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Signature Heritage Entry Gate - Kolar Road, Bhopal",
//       },
//     ],
//     locale: "en_IN",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Signature Heritage | Premium Plots in Kolar Road, Bhopal",
//     description:
//       "Premium residential plots & luxury gated community with a clubhouse and commercial plaza on Kolar Road, Bhopal.",
//     images: ["/images/signatureheritage/entry-gate.jpg"],
//   },
//   alternates: {
//     canonical: "https://www.yourdomain.com/signatureheritage",
//   },
// };

// export default function SignatureHeritagePage() {
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "RealEstateListing",
//     name: siteConfig.projectName,
//     description:
//       "Premium residential plots and a luxury gated community with a clubhouse and commercial plaza on Kolar Road, Bhopal.",
//     url: "https://www.yourdomain.com/signatureheritage",
//     image: [
//       "/images/signatureheritage/entry-gate.jpg",
//       "/images/signatureheritage/club-elevation.jpg",
//       "/images/signatureheritage/club-pool.jpg",
//       "/images/signatureheritage/garden.jpg",
//       "/images/signatureheritage/commercial-plaza.jpg",
//     ],
//     address: {
//       "@type": "PostalAddress",
//       streetAddress: "Kolar Road",
//       addressLocality: "Bhopal",
//       addressRegion: "Madhya Pradesh",
//       addressCountry: "IN",
//     },
//     telephone: siteConfig.phone,
//     email: siteConfig.email,
//     amenityFeature: [
//       { "@type": "LocationFeatureSpecification", name: "Clubhouse", value: true },
//       { "@type": "LocationFeatureSpecification", name: "Swimming Pool", value: true },
//       { "@type": "LocationFeatureSpecification", name: "24x7 Security", value: true },
//       { "@type": "LocationFeatureSpecification", name: "Commercial Plaza", value: true },
//       { "@type": "LocationFeatureSpecification", name: "Landscaped Gardens", value: true },
//     ],
//     additionalProperty: [
//       {
//         "@type": "PropertyValue",
//         name: "Total Project Area",
//         value: "4205 Sq.Mt.",
//       },
//       {
//         "@type": "PropertyValue",
//         name: "Clubhouse Area",
//         value: "2281 Sq.Ft.",
//       },
//       {
//         "@type": "PropertyValue",
//         name: "Swimming Pool Area",
//         value: "1390 Sq.Ft.",
//       },
//     ],
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />

//       <main className="bg-white relative">
//         {/* ✅ Transparent Loader Component sabse upar inject kiya */}
//         <HeritagePageLoader />

//         <RouteLock />
//         <HeritageNavbar />
//         <HeritageHero />
//         <HeritageOverview />
//         <HeritageAmenities />
//         <HeritageGallery />
//         <HeritageBanner />
//         <HeritageLocation />
//         <HeritageLeadForm />
//         <HeritageDidYouKnow />
// <HeritageProblems />
// <HeritageReasons />
// <HeritageTestimonials />
//         <HeritageFooter />

//        <HeritageStickyBar
//           phone={siteConfig.phone || "+919999999999"}
//           whatsapp={siteConfig.phone?.replace(/[^0-9]/g, "") || "919999999999"}
//         />
//       </main>
//     </>
//   );
// }






import type { Metadata } from "next";
import { siteConfig } from "../../data/signatureheritage";

import RouteLock from "../../components/ui/RouteLock";
// import HeritagePageLoader from "../../components/signatureheritage/HeritagePageLoader";
import HeritageNavbar from "../../components/signatureheritage/HeritageNavbar";
import HeritageHero from "../../components/signatureheritage/HeritageHero";
import HeritageUSPs from "../../components/signatureheritage/HeritageUSPs";
import HeritageWhyChoose from "../../components/signatureheritage/HeritageWhyChoose";
import HeritageFeatures from "../../components/signatureheritage/HeritageFeatures";
import HeritageOverview from "../../components/signatureheritage/HeritageOverview";
import HeritageInventory from "../../components/signatureheritage/HeritageInventory";
import HeritageHighlights from "../../components/signatureheritage/HeritageHighlights";
import HeritageAmenities from "../../components/signatureheritage/HeritageAmenities";
import HeritageGallery from "../../components/signatureheritage/HeritageGallery";
import HeritageBanner from "../../components/signatureheritage/HeritageBanner";
import HeritageDidYouKnow from "../../components/signatureheritage/HeritageDidYouKnow";
import HeritageProblems from "../../components/signatureheritage/HeritageProblems";
import HeritageReasons from "../../components/signatureheritage/HeritageReasons";
import HeritageTestimonials from "../../components/signatureheritage/HeritageTestimonials";
import HeritageLocation from "../../components/signatureheritage/HeritageLocation";
import HeritageLeadForm from "../../components/signatureheritage/HeritageLeadForm";
import HeritageFooter from "../../components/signatureheritage/HeritageFooter";
import HeritageStickyBar from "../../components/signatureheritage/HeritageStickyBar";

export const metadata: Metadata = {
  title:
    "Signature Heritage | Premium Duplex Homes on Kolar Road, Bhopal | Luxury Gated Community",
  description:
    "Own your dream duplex at Signature Heritage on Kolar Road, Bhopal. Premium gated community with luxury clubhouse, swimming pool, gym & family amenities. Book a site visit today.",
  keywords: [
    "duplex in Bhopal",
    "duplex on Kolar Road Bhopal",
    "Signature Heritage Bhopal",
    "premium duplex homes Bhopal",
    "gated community Kolar Road",
    "plots in Kolar Road Bhopal",
    "luxury gated community Bhopal",
    "residential plots Bhopal",
    "Kolar Road real estate",
    "clubhouse duplex Bhopal",
  ],
  openGraph: {
    title: "Signature Heritage | Premium Duplex on Kolar Road, Bhopal",
    description:
      "Premium duplex living on Kolar Road, Bhopal — luxury clubhouse, pool, gym & gated community. Download brochure or book a site visit.",
    url: "https://www.yourdomain.com/signatureheritage",
    siteName: "Signature Heritage",
    images: [
      {
        url: "/images/signatureheritage/entry-gate.jpg",
        width: 1200,
        height: 630,
        alt: "Signature Heritage Entry Gate - Kolar Road, Bhopal",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Signature Heritage | Premium Duplex on Kolar Road, Bhopal",
    description:
      "Premium duplex homes & luxury gated community with clubhouse and pool on Kolar Road, Bhopal.",
    images: ["/images/signatureheritage/entry-gate.jpg"],
  },
  alternates: {
    canonical: "https://www.yourdomain.com/signatureheritage",
  },
};

export default function SignatureHeritagePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: siteConfig.projectName,
    description:
      "Premium duplex homes and a luxury gated community with clubhouse, swimming pool and amenities on Kolar Road, Bhopal.",
    url: "https://www.yourdomain.com/signatureheritage",
    image: [
      "/images/signatureheritage/entry-gate.jpg",
      "/images/signatureheritage/6%20DUPLEX%20ELEVATION.jpg",
      "/images/signatureheritage/3%20CLUB%20HOUSE%20ELEVATION.jpg",
      "/images/signatureheritage/4%20CLUB%20HOUSE%20POOL.jpg",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kolar Road",
      addressLocality: "Bhopal",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Clubhouse", value: true },
      { "@type": "LocationFeatureSpecification", name: "Swimming Pool", value: true },
      { "@type": "LocationFeatureSpecification", name: "Gym", value: true },
      { "@type": "LocationFeatureSpecification", name: "24x7 Security", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kids Play Area", value: true },
      { "@type": "LocationFeatureSpecification", name: "Community Temple", value: true },
    ],
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Total Project Area",
        value: "45254 Sq.Ft.",
      },
      {
        "@type": "PropertyValue",
        name: "Clubhouse Area",
        value: "2281 Sq.Ft.",
      },
      {
        "@type": "PropertyValue",
        name: "Swimming Pool Area",
        value: "1390 Sq.Ft.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white relative min-h-screen overflow-x-hidden antialiased pb-24">
        {/* <HeritagePageLoader /> */}
        <RouteLock />
        <HeritageNavbar />

        {/* 1. First impression */}
        <HeritageHero />
        <HeritageUSPs />

        {/* 2. Project vision */}
        <HeritageWhyChoose />
        <HeritageOverview />
        <HeritageFeatures />

        {/* 3. Product + lifestyle proof */}
        <HeritageInventory />
        <HeritageHighlights />
        <HeritageAmenities />
        <HeritageGallery />
        <HeritageBanner />

        {/* 4. Educate + trust (sales funnel) */}
        <HeritageDidYouKnow />
        <HeritageProblems />
        <HeritageReasons />
        <HeritageTestimonials />

        {/* 5. Location + convert */}
        <HeritageLocation />
        <HeritageLeadForm />
        <HeritageFooter />

        <HeritageStickyBar
          phone={siteConfig.phone || "+919999999999"}
          whatsapp={
            siteConfig.whatsappNumber ||
            siteConfig.phone?.replace(/[^0-9]/g, "") ||
            "919999999999"
          }
        />
      </main>
    </>
  );
}