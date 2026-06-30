"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Award, Users, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { COMPANY_INFO } from "@/lib/constants";

const highlights = [
  { icon: Award, label: "ISO Certified", text: "9001:2015 / 14001:2015 / 45001:2018" },
  { icon: Users, label: "150+ Employees", text: "Skilled & experienced workforce" },
  { icon: Factory, label: "State-of-the-Art", text: "50,000 sq.ft manufacturing facility" },
];

export function IntroSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy/5 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-navy/20 to-electric/10 z-10" />
              <Image
                src="/images/about/factory.jpg"
                alt={COMPANY_INFO.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating Stat Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl shadow-soft-lg"
            >
              <div className="text-3xl font-bold font-heading text-electric">2010</div>
              <p className="text-sm text-gray-600">Established Year</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle
              align="left"
              badge="About Us"
              subtitle="Who We Are"
              title={COMPANY_INFO.name}
              description={COMPANY_INFO.tagline}
            />

            <p className="text-gray-600 leading-relaxed mb-8">
              Established in 2010, Sree Manikanta Cables and Conductors has emerged as a trusted
              name in the wire and cable industry. Located in Hyderabad, Telangana, our state-of-the-art
              manufacturing facility spans 50,000 square feet, equipped with advanced machinery and
              staffed by a team of 150+ skilled professionals.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-electric" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">{item.label}</p>
                    <p className="text-sm text-gray-500">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/about">
              <Button variant="default" size="lg" className="rounded-2xl">
                Know More About Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
