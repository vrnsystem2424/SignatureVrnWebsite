import Hero from "../components/sections/Hero";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import AmenitiesPremium from "../components/sections/AmenitiesPremium";
import Inventory from "../components/sections/Inventory";
import Location from "../components/sections/Location";
import Gallery from "../components/sections/Gallery";
import LeadForm from "../components/sections/LeadForm";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <WhyChooseUs />
      <AmenitiesPremium />
      <Inventory />
      <Location />
      <Gallery />
      <LeadForm />
      <Footer />
    </main>
  );
}