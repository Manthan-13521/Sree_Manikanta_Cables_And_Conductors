"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-electric-dark" />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)]" />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-navy-light/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight mb-6">
            Ready to Partner with{" "}
            <span className="text-electric">Sree Manikanta</span>?
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you need standard cables or custom-engineered solutions, our team is ready
            to understand your requirements and deliver the perfect cabling solution for your project.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                variant="destructive"
                size="xl"
                className="rounded-2xl shadow-glow hover:shadow-glow"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="glass"
                size="xl"
                className="rounded-2xl"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-sm text-gray-400">
              Call us at{" "}
              <a href={`tel:${COMPANY_INFO.phone.split(" / ")[0].replace(/\s/g, "")}`} className="text-white hover:text-electric transition-colors font-medium">
                {COMPANY_INFO.phone.split(" / ")[0]}
              </a>
              {" "}or email{" "}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-electric transition-colors font-medium">
                {COMPANY_INFO.email}
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
