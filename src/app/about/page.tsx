"use client";

import { motion } from "framer-motion";
import {
  Target, Eye, Shield, Factory, Users, Award, CheckCircle, TrendingUp, Building2,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { COMPANY_INFO, STATS } from "@/lib/constants";
import Link from "next/link";

const milestones = [
  { year: 2010, title: "Foundation", description: "Established with a vision to manufacture premium quality wires and cables.", icon: Building2 },
  { year: 2013, title: "First Expansion", description: "Expanded manufacturing capacity with state-of-the-art extrusion lines.", icon: Factory },
  { year: 2016, title: "ISO Certification", description: "Achieved ISO 9001:2015 certification, marking commitment to quality.", icon: Award },
  { year: 2019, title: "Product Diversification", description: "Launched solar cables, instrumentation cables, and special purpose cables.", icon: TrendingUp },
  { year: 2021, title: "Infrastructure Upgrade", description: "Invested in advanced testing laboratory and modern machinery.", icon: Building2 },
  { year: 2023, title: "Global Reach", description: "Expanded exports to 12+ countries with multiple international certifications.", icon: Users },
  { year: 2025, title: "Industry Leadership", description: "Recognized as a leading cable manufacturer with 500+ satisfied clients.", icon: Award },
];

const values = [
  { icon: Shield, title: "Quality First", description: "Uncompromising quality at every stage with rigorous testing protocols." },
  { icon: Users, title: "Customer Focus", description: "Understanding and exceeding customer expectations through personalized solutions." },
  { icon: TrendingUp, title: "Continuous Innovation", description: "Embracing new technologies to deliver superior products." },
  { icon: CheckCircle, title: "Integrity", description: "Building trust through transparent business practices and ethical operations." },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function AboutPage() {
  return (
    <main>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-navy-dark via-navy to-navy overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <Badge variant="glass" size="lg" className="mb-4">About Us</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight mb-6">
              Powering Progress with <span className="text-electric">Premium Cable Solutions</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              With over 15 years of manufacturing excellence, {COMPANY_INFO.name} has established itself as a trusted partner for industrial cable solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Badge variant="default" className="mb-4">Our Story</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-6">A Legacy of Quality Since 2010</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>Founded in 2010, we began our journey with a clear vision: to manufacture wires, cables, and conductors that meet the highest standards. Our facility at Survey No. 317 & 318, Dommara Pochampally Village, Hyderabad, is equipped with advanced machinery and staffed by experienced professionals.</p>
                <p>Over 15 years, we have grown from a modest unit to a comprehensive cable solutions provider, serving 500+ clients across 12+ countries.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-navy/10 to-electric/10 border border-gray-200 dark:border-gray-800 flex items-center justify-center">
                <Building2 className="w-24 h-24 text-navy/30 dark:text-white/20" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-6 shadow-soft-lg max-w-[200px]">
                <p className="text-3xl font-bold font-heading text-navy dark:text-white">15+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-lightgray dark:bg-gray-900/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Eye, title: "Our Vision", description: "To be the most trusted cable manufacturing company in India, known for uncompromising quality, innovation, and customer satisfaction.", color: "from-navy to-navy-light" },
              { icon: Target, title: "Our Mission", description: "To deliver superior quality wires, cables, and conductors through advanced manufacturing, continuous innovation, and commitment to excellence.", color: "from-electric to-electric-light" },
            ].map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <Card variant="elevated" padding="lg" className="h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <SectionTitle title="Our Impact in Numbers" subtitle="Achievements" description="Our journey of excellence reflected through numbers." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {STATS.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Card variant="glass" className="text-center" padding="lg">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} label={stat.label} />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-navy text-white">
        <div className="container-custom">
          <SectionTitle title="Our Core Values" subtitle="What Drives Us" description="The principles that guide every decision and action." variant="light" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <Card variant="bordered" padding="lg" className="text-center h-full border-white/10 hover:border-electric/30">
                    <Icon className="w-10 h-10 text-electric mx-auto mb-4" />
                    <h3 className="text-lg font-bold font-heading text-white mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <SectionTitle title="Our Journey" subtitle="Milestones" description="Key moments that shaped our growth." />
          <div className="relative mt-16">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric via-navy to-electric md:-translate-x-px" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isEven = index % 2 === 0;
                return (
                  <motion.div key={milestone.year} initial={{ opacity: 0, x: isEven ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}
                    className={`relative flex items-start gap-8 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-electric border-4 border-navy-dark dark:border-gray-900 -translate-x-1/2 mt-1 z-10" />
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                      <Card variant="glass" padding="md" className="inline-block">
                        <Badge variant="destructive" size="sm" className="mb-2">{milestone.year}</Badge>
                        <h3 className="text-lg font-bold font-heading text-gray-900 dark:text-white mb-2">{milestone.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{milestone.description}</p>
                      </Card>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-r from-electric to-electric-dark">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">Want to Know More About Us?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Visit our manufacturing facility or schedule a meeting with our team.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact"><Button variant="glass" size="lg" className="rounded-2xl">Contact Us</Button></Link>
              <Link href="/manufacturing"><Button variant="default" size="lg" className="rounded-2xl bg-white text-navy hover:bg-gray-100">Our Facility</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}