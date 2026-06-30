"use client";

import { Hero } from "@/components/home/hero";
import { IntroSection } from "@/components/home/intro-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { ProductPreview } from "@/components/home/product-preview";
import { ManufacturingPreview } from "@/components/home/manufacturing-preview";
import { Testimonials } from "@/components/home/testimonials";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <WhyChooseUs />
      <ProductPreview />
      <ManufacturingPreview />
      <Testimonials />
      <CTASection />
    </main>
  );
}
