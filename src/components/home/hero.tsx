"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { STATS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-primary via-primary to-primary-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(214,40,40,0.15)_0%,_transparent_60%)]" />
      <div className="container-custom relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <motion.div variants={fadeInUp}>
              <Badge variant="primary" className="bg-white/10 text-white border-white/20">
                ISO 9001 | ISO 14001 | ISO 45001
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-display text-white leading-tight">
              Manufacturing of{" "}
              <span className="bg-gradient-to-r from-accent via-accent to-accent/80 bg-clip-text text-transparent">
                Wires, Cables
              </span>{" "}
              &amp; Conductors
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-body-lg text-white/70 max-w-xl">
              Sree Manikanta Cables is a leading manufacturer of high-quality wires, cables, and conductors,
              serving industries across India with excellence and reliability.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button variant="danger" size="lg">
                Get a Quote
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Explore Products
              </Button>
            </motion.div>
          </div>
          <motion.div variants={fadeInUp} className="hidden lg:flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-primary/40 border border-white/10" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-accent/30 to-transparent border border-white/10 backdrop-blur-sm" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <span className="text-small text-white/60 uppercase tracking-wider">Years of</span>
                <span className="text-h1 font-bold">14+</span>
                <span className="text-body text-white/60">Excellence</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div variants={fadeInUp} className="mt-16 lg:mt-20">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-h2 sm:text-h1 font-bold text-white">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-small text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
