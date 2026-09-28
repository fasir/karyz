import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";


import { StoreDesignFeatures } from "@/components/StoreDesignFeatures";
import { SetupHighlights } from "@/components/SetupHighlights";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { MobileShowcase } from "@/components/MobileShowcase";
import { HowItWorks } from "@/components/HowItWorks";
import { BentoGrid } from "@/components/BentoGrid";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[var(--brand)] selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MobileShowcase />
        <BentoGrid />
  <HowItWorks />

        <StoreDesignFeatures />
        <Pricing />
        {/* <SetupHighlights /> */}
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
