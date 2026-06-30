"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, STATS } from "@/lib/constants";

const words = ["Quality", "Innovation", "Trust", "Excellence"];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-navy-dark via-navy to-navy-dark">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-navy-light/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-electric/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Floating Elements */}
      <FloatingElements />

      <div className="relative container-custom z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="pt-24 lg:pt-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6"
            >
              <Shield className="w-3.5 h-3.5 text-electric" />
              <span className="text-xs font-medium text-white/80">
                ISO 9001:2015 | ISO 14001:2015 | ISO 45001:2018
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold font-heading text-white leading-[1.1] mb-6"
            >
              Manufacturing of 
              <span className="block text-electric">Wires, Cables</span>
              <span className="block">& Conductors</span>
            </motion.h1>

            {/* Animated Words */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-lg text-gray-300">Built on</span>
              <TypeWriter words={words} />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-8"
            >
              With over 15 years of excellence, we deliver premium quality industrial cables,
              control cables, and conductors trusted by leading organizations across India
              and 12+ countries worldwide.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <Button
                  variant="destructive"
                  size="lg"
                  className="rounded-2xl shadow-glow hover:shadow-glow"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  variant="glass"
                  size="lg"
                  className="rounded-2xl"
                >
                  Explore Products
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Main Circle */}
              <div className="aspect-square rounded-full bg-gradient-to-br from-electric/20 via-navy-light/20 to-transparent border border-white/10 p-12">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-navy-light/30 to-electric/10 flex items-center justify-center">
                  <div className="text-center">
                    <Zap className="w-16 h-16 text-electric mx-auto mb-4" />
                    <p className="text-white font-heading font-bold text-2xl">15+ Years</p>
                    <p className="text-gray-400 text-sm">of Excellence</p>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 -right-4 glass-dark rounded-2xl p-4"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mb-2" />
                <p className="text-white text-sm font-semibold">ISO Certified</p>
                <p className="text-gray-400 text-xs">Quality Assured</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative -mb-24 mt-8 lg:mt-0"
        >
          <div className="glass-dark rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold font-heading text-white">
                  {stat.value}+
                </div>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TypeWriter({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null as unknown as ReturnType<typeof setTimeout>);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (!isDeleting && currentText === currentWord) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeoutRef.current = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentWord.slice(0, prev.length + 1)
        );
      }, isDeleting ? 50 : 100);
    }

    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="text-lg font-semibold text-electric">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function FloatingElements() {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/10 rounded-full"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </>
  );
}
