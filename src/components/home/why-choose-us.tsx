"use client";
import { motion } from "framer-motion";
import { Shield, Award, Factory, Truck, Users, Headphones } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const features = [
  {
    icon: Shield,
    title: "Certified Quality",
    description: "ISO certified products with rigorous quality testing at every stage.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "14+ years of experience in wire and cable manufacturing.",
  },
  {
    icon: Factory,
    title: "Modern Infrastructure",
    description: "State-of-the-art manufacturing facility with advanced machinery.",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    description: "Reliable logistics ensuring on-time delivery across India.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Skilled professionals dedicated to manufacturing excellence.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer service for all your queries.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-surface-secondary">
      <div className="container-custom">
        <SectionTitle
          title="Why Choose Sree Manikanta Cables?"
          subtitle="We combine quality, reliability, and innovation to deliver the best products in the industry."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeInUp} className="group">
              <Card variant="elevated" className="h-full transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-h5 text-primary mb-2">{feature.title}</h3>
                <p className="text-body text-text-secondary">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
