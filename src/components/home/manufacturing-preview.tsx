"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { MANUFACTURING_STAGES } from "@/lib/constants";

const previewStages = MANUFACTURING_STAGES.slice(0, 3);

export function ManufacturingPreview() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <SectionTitle
          variant="light"
          title="Our Manufacturing Process"
          subtitle="From raw material to finished product, every step is crafted with precision."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-12"
        >
          {previewStages.map((stage, index) => (
            <motion.div key={stage.title} variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-6">
                <span className="text-h4 font-bold text-white">{index + 1}</span>
              </div>
              <h3 className="text-h5 text-white mb-3">{stage.title}</h3>
              <p className="text-body text-white/70">{stage.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-12">
          <Link href="/manufacturing">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              View Full Process
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
