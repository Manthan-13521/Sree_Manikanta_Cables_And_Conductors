"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import { MANUFACTURING_STAGES } from "@/lib/constants";

export default function ManufacturingPage() {
  return (
    <main>
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl mx-auto space-y-6">
            <Badge variant="primary" className="bg-white/10 text-white border-white/20">Manufacturing</Badge>
            <h1 className="text-h1 text-white">Our Manufacturing Process</h1>
            <p className="text-body-lg text-white/70">
              Every product undergoes a meticulously controlled manufacturing process to ensure the highest quality.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="End-to-End Manufacturing Excellence"
            subtitle="From raw material selection to final testing, we maintain precision at every stage."
          />
          <div className="relative mt-16">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/20 hidden md:block" />
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-12">
              {MANUFACTURING_STAGES.map((stage, index) => (
                <motion.div key={stage.title} variants={fadeInUp} className="relative">
                  <div className="hidden md:flex absolute left-8 top-8 w-0.5 -translate-x-1/2">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center relative z-10">
                      <span className="text-h5 font-bold text-white">{index + 1}</span>
                    </div>
                  </div>
                  <div className="md:ml-24">
                    <Card variant="elevated" className="p-6 sm:p-8">
                      <div className="flex md:hidden w-12 h-12 rounded-full bg-accent items-center justify-center mb-4">
                        <span className="text-h5 font-bold text-white">{index + 1}</span>
                      </div>
                      <h3 className="text-h4 text-primary mb-2">{stage.title}</h3>
                      <p className="text-body text-text-secondary mb-4">{stage.description}</p>
                      {stage.features && stage.features.length > 0 && (
                        <div className="grid sm:grid-cols-2 gap-2">
                          {stage.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-2">
                              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-body text-text-secondary">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </Card>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-h2 text-white">See Our Facility in Action</h2>
            <p className="text-body-lg text-white/80">
              Visit our manufacturing unit to see firsthand how we maintain quality.
            </p>
            <Button variant="primary" size="lg" className="bg-white text-accent hover:bg-white/90">
              Schedule a Visit
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
