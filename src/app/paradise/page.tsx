import type { Metadata } from "next";
import ParadiseShell from "../../components/paradise/ParadiseShell";
import ParadiseHero from "../../components/paradise/ParadiseHero";
import ParadiseUSPs from "../../components/paradise/ParadiseUSPs";
import ParadiseWhyChoose from "../../components/paradise/ParadiseWhyChoose";
import ParadiseFeatures from "../../components/paradise/ParadiseFeatures";
import ParadiseInventory from "../../components/paradise/ParadiseInventory";
import ParadiseHighlights from "../../components/paradise/ParadiseHighlights";
import ParadiseAmenities from "../../components/paradise/ParadiseAmenities";
import ParadiseDidYouKnow from "../../components/paradise/ParadiseDidYouKnow";
import ParadiseProblems from "../../components/paradise/ParadiseProblems";
import ParadiseReasons from "../../components/paradise/ParadiseReasons";
import ParadiseLifestyle from "../../components/paradise/ParadiseLifestyle";
import ParadiseTestimonials from "../../components/paradise/ParadiseTestimonials";
import ParadiseComplete from "../../components/paradise/ParadiseComplete";
import ParadiseFAQ from "../../components/paradise/ParadiseFAQ";
import ParadiseLocation from "../../components/paradise/ParadiseLocation";
import ParadiseFooter from "../../components/paradise/ParadiseFooter";

export const metadata: Metadata = {
  title: "Signature Paradise | Premium Residential Plots in Kolar Road, Bhopal",
  description:
    "Buy premium residential plots at Signature Paradise on Kolar Road, Bhopal. 16.5 Acre gated township with river view, 5000 sq.ft clubhouse, and clear title approved plots.",
};

export default function ParadisePage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen relative overflow-x-hidden antialiased pb-24">
      <ParadiseShell>
        <ParadiseHero />
        <ParadiseUSPs />
        <ParadiseWhyChoose />
        <ParadiseFeatures />
        <ParadiseInventory />
        <ParadiseHighlights />
        <ParadiseAmenities />
        <ParadiseDidYouKnow />
        <ParadiseProblems />
        <ParadiseReasons />
        <ParadiseLifestyle />
        <ParadiseTestimonials />
        <ParadiseComplete />
        <ParadiseFAQ />
        <ParadiseLocation />
        <ParadiseFooter />
      </ParadiseShell>
    </main>
  );
}