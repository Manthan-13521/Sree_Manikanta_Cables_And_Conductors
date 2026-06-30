"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { fadeInUp } from "@/lib/animations";
import { TESTIMONIALS } from "@/lib/constants";

const previewTestimonials = TESTIMONIALS.slice(0, 3);

export function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-surface-secondary">
      <div className="container-custom">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Trusted by hundreds of clients across India."
        />
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card variant="elevated" className="max-w-2xl mx-auto text-center p-8 sm:p-12">
                <Quote className="w-10 h-10 text-accent/40 mx-auto mb-6" />
                <p className="text-body-lg text-text-secondary mb-6 italic leading-relaxed">
                  &ldquo;{previewTestimonials[active].content}&rdquo;
                </p>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-h5 text-accent font-bold">
                    {previewTestimonials[active].name.charAt(0)}
                  </span>
                </div>
                <div className="font-semibold text-primary">{previewTestimonials[active].name}</div>
                <div className="text-small text-text-tertiary">{previewTestimonials[active].designation}</div>
              </Card>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-3 mt-8">
            {previewTestimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === active ? "bg-accent w-8" : "bg-text-tertiary/30 hover:bg-text-tertiary/50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
