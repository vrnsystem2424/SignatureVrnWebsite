import Navbar from "../../components/ui/Navbar";
import Hero from "../../components/sections/Hero";
import Overview from "../../components/sections/Overview";
import Highlights from "../../components/sections/Highlights";
import AmenitiesPremium from "../../components/sections/AmenitiesPremium";
import Inventory from "../../components/sections/Inventory";
import Gallery from "../../components/sections/Gallery";
import Location from "../../components/sections/Location";
import WhyChooseUs from "../../components/sections/WhyChooseUs";
import LeadForm from "../../components/sections/LeadForm";
import Footer from "../../components/sections/Footer";

import StickyCTA from "../../components/ui/StickyCTA";
import FloatingWhatsApp from "../../components/ui/FloatingWhatsApp";
import EnquiryPopup from "../../components/ui/EnquiryPopup";
import RouteLock from "../../components/ui/RouteLock";

export const metadata = {
  title: "Ultimate Heights Bhopal - Premium Flats Near Aura Mall",
  description:
    "Explore Ultimate Heights in Bhopal - premium residential flats near Aura Mall, Chuna Bhatti Square and Bansal Hospital. 96.3% inventory sold. Only 5 premium units available.",
};

export default function UltimateHeightPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <RouteLock />
      <Navbar />

      <section id="hero"><Hero /></section>
      <section id="highlights"><Highlights /></section>
      <section id="why-choose-us"><WhyChooseUs /></section>
      <section id="amenities"><AmenitiesPremium /></section>
      <section id="inventory"><Inventory /></section>
      <section id="location"><Location /></section>
      <section id="gallery"><Gallery /></section>
      <section id="lead-form"><LeadForm /></section>
      {/* <section id="overview"><Overview /></section> */}
      
      {/* LeadForm सिर्फ एक बार - Footer से पहले */}

      <EnquiryPopup />
      <Footer />

      {/* Floating widgets हमेशा पेज पर तैरेंगे */}
      <StickyCTA />
      <FloatingWhatsApp />
      
    </main>
  );
}