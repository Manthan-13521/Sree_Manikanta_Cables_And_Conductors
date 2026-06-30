"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { MANUFACTURING_STAGES } from "@/lib/constants";

const previewStages = MANUFACTURING_STAGES.slice(0, 3);

export function ManufacturingPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[size:40px_40px]" />

      <div className="container-custom relative z-10">
        <SectionTitle
          variant="light"
          badge="Manufacturing Excellence"
          subtitle="End-to-End Capability"
          title="How We Manufacture"
          description="From raw material procurement to final dispatch, every stage is governed by strict quality protocols and precision engineering."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-white/10" />

          <div className="grid lg:grid-cols-3 gap-8">
            {previewStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center lg:text-left"
              >
                {/* Stage Number */}
                <div className="hidden lg:flex w-12 h-12 rounded-full bg-electric text-white items-center justify-center text-lg font-bold font-heading mx-auto lg:mx-0 mb-6 relative z-10">
                  {index + 1}
                </div>

                {/* Mobile Number Badge */}
                <div className="lg:hidden inline-flex items-center gap-2 bg-electric/20 rounded-full px-4 py-1.5 mb-4">
                  <span className="w-6 h-6 rounded-full bg-electric text-white flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                  <span className="text-xs font-semibold text-electric-light uppercase tracking-wider">
                    {stage.stage}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-semibold text-white mb-3">
                  {stage.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {stage.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {stage.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-gray-400">
                      <CheckCircle className="w-3.5 h-3.5 text-electric flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/manufacturing">
            <Button variant="destructive" size="lg" className="rounded-2xl">
              Explore Full Manufacturing Process
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
