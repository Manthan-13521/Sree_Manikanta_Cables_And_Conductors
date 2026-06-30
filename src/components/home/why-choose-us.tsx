"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle, Factory, Truck, Users, Headphones } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "We use 99.99% pure copper and high-grade materials, ensuring superior conductivity and durability in every cable.",
  },
  {
    icon: CheckCircle,
    title: "ISO Certified",
    description: "ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 certified processes across design, manufacturing, and supply.",
  },
  {
    icon: Factory,
    title: "Advanced Infrastructure",
    description: "50,000 sq.ft facility with state-of-the-art extrusion lines, stranding machines, and testing equipment.",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    description: "Robust logistics network ensuring on-time delivery across India and 12+ countries worldwide.",
  },
  {
    icon: Users,
    title: "Technical Expertise",
    description: "150+ skilled professionals with deep domain expertise in cable manufacturing and quality assurance.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Dedicated technical support team providing end-to-end assistance from product selection to after-sales.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-lightgray relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 mesh-bg" />

      <div className="container-custom relative z-10">
        <SectionTitle
          badge="Why Sree Manikanta"
          subtitle="Our Strengths"
          title="Why Choose Us?"
          description="We combine advanced technology, stringent quality control, and deep industry expertise to deliver cables that exceed expectations."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 card-hover group"
            >
              <div className="w-14 h-14 rounded-2xl bg-electric/10 flex items-center justify-center mb-5 group-hover:bg-electric group-hover:text-white transition-all duration-300">
                <feature.icon className="w-7 h-7 text-electric group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
