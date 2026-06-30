"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

export function IntroSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-accent/10 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-accent/20" />
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <Badge variant="accent">About Us</Badge>
            <h2 className="text-h2 text-primary">A Legacy of Quality Since 2010</h2>
            <p className="text-body text-text-secondary">
              Sree Manikanta Cables has been at the forefront of wire and cable manufacturing since 2010.
              With state-of-the-art infrastructure and a commitment to excellence, we deliver products
              that meet international standards.
            </p>
            <p className="text-body text-text-secondary">
              Our journey began with a vision to provide reliable electrical solutions, and today we
              stand as a trusted partner for industries, contractors, and distributors across India.
            </p>
            <Button variant="primary">Know More About Us</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
