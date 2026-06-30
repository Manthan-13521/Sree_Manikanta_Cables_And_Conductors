"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";

export function CTASection() {
  return (
    <section className="section-padding bg-accent">
      <div className="container-custom">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-h2 text-white">Ready to Partner with Us?</h2>
          <p className="text-body-lg text-white/80">
            Get in touch with our team for quotes, inquiries, or any assistance. We are here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button variant="primary" size="lg" className="bg-white text-accent hover:bg-white/90">
              Contact Us Today
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Request a Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
