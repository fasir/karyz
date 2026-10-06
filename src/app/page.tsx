import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DistributionOS } from "@/components/DistributionOS";
import { ProductCatalogue } from "@/components/ProductCatalogue";
import { DistributionChallenge } from "@/components/DistributionChallenge";
import { NetworkLevels } from "@/components/NetworkLevels";
import { NetworkViews } from "@/components/NetworkViews";

import { StoreDesignFeatures } from "@/components/StoreDesignFeatures";
import { SetupHighlights } from "@/components/SetupHighlights";
import { Faq } from "@/components/Faq";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { MobileShowcase } from "@/components/MobileShowcase";
import { HowItWorks } from "@/components/HowItWorks";
import { BentoGrid } from "@/components/BentoGrid";
import { GoingLive } from "@/components/GoingLive";
import { BookDemo } from "@/components/BookDemo";
import { Pricing } from "@/components/Pricing";
import { PaymentMethods } from "@/components/PaymentMethods";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[var(--brand)] selection:text-white">
      <Navbar />
      <main className="flex-1">
       
        <DistributionOS />
         <Hero />
        {/* <ProductCatalogue /> */}
        <DistributionChallenge />
        <NetworkLevels />
        <NetworkViews />
        {/* <NetworkLevels /> */}
        {/* <MobileShowcase /> */}
        <BentoGrid />
        <GoingLive />
        {/* <HowItWorks /> */}

        {/* <StoreDesignFeatures /> */}
        <Pricing />
        {/* <SetupHighlights /> */}
        <Faq />
        <BookDemo />

        <PaymentMethods />

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
