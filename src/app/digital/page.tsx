"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Headphones,
  Smartphone,
  BarChart3,
  Shield,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { DIGITAL_FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const featureIcons = [Globe, ShoppingCart, Headphones, Smartphone, BarChart3, Shield, RefreshCw];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function DigitalPage() {
  return (
    <main>
      <section className="relative bg-navy py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <Badge className="mb-4 bg-electric/20 text-electric border-none text-sm px-4 py-1.5">
              Digital Presence
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Digitally Connected
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Embracing technology to provide you with seamless ordering, real-time tracking, and
              exceptional digital support across every touchpoint.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Digital Features"
            subtitle="Seven powerful digital capabilities designed to make your experience effortless"
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16"
          >
            {DIGITAL_FEATURES.map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length];
              const isHighlight = index === 0;
              return (
                <motion.div
                  key={feature.title}
                  variants={cardVariants}
                  className={cn(
                    "group",
                    isHighlight && "lg:col-span-2 lg:row-span-1"
                  )}
                >
                  <Card
                    className={cn(
                      "h-full p-6 lg:p-8 border border-gray-100 hover:border-electric/20 transition-all duration-300 relative overflow-hidden",
                      isHighlight && "lg:p-10 bg-gradient-to-br from-white to-electric/[0.02]"
                    )}
                  >
                    <div
                      className={cn(
                        "w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors",
                        "bg-electric/10 group-hover:bg-electric/20"
                      )}
                    >
                      <Icon className="w-7 h-7 text-electric" />
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-electric transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      {feature.description}
                    </p>
                    {feature.features && feature.features.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-navy/50 uppercase tracking-wider mb-2">
                          Features
                        </h4>
                        <ul className="space-y-1.5">
                          {feature.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-electric flex-shrink-0 mt-0.5" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {feature.benefits && feature.benefits.length > 0 && (
                      <div className="pt-4 border-t border-gray-100">
                        <h4 className="text-xs font-semibold text-navy/50 uppercase tracking-wider mb-2">
                          Benefits
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {feature.benefits.map((b) => (
                            <Badge
                              key={b}
                              variant="outline"
                              className="text-xs bg-green-50 text-green-700 border-green-200"
                            >
                              {b}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {isHighlight && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-electric text-white border-none text-xs">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-electric/10 text-electric border-none">Coming Soon</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Sree Manikanta Cables Mobile App
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our upcoming mobile application will put the entire cable ordering experience in
                your pocket. Browse products, place orders, track shipments, and connect with our
                support team anytime, anywhere.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Real-time order tracking with notifications",
                  "Digital catalog with complete specifications",
                  "Instant quote generation and sharing",
                  "Direct WhatsApp integration for support",
                  "Digital payment gateway for quick checkout",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="bg-navy hover:bg-navy/90 text-white">
                Get Notified When Launched
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[9/16] max-w-[320px] mx-auto bg-gradient-to-br from-navy to-navy/80 rounded-[3rem] p-4 shadow-2xl">
                <div className="w-full h-full bg-white/5 rounded-[2.5rem] flex items-center justify-center border border-white/10">
                  <div className="text-center p-6">
                    <Smartphone className="w-16 h-16 text-electric/50 mx-auto mb-4" />
                    <p className="text-white/60 text-sm">Mobile App</p>
                    <p className="text-white/40 text-xs mt-1">Coming Soon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience the Digital Difference
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
              Register on our platform to access exclusive digital features, track orders, and
              manage your account seamlessly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-electric hover:bg-electric/90 text-white">
                Create an Account
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
