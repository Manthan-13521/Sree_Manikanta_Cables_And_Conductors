"use client";

import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  FlaskConical,
  TrendingUp,
  CheckCircle2,
  FileCheck,
  Thermometer,
  Zap,
  BarChart3,
  Users,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  QUALITY_CERTIFICATIONS,
  QUALITY_TESTS,
  COMPANY_INFO,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

const certIcons = [Award, ShieldCheck, FileCheck, TrendingUp, Award, ShieldCheck];
const testIcons = [FlaskConical, Thermometer, Zap, BarChart3, ShieldCheck, CheckCircle2, Users, FlaskConical];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
};

export default function QualityPage() {
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
              Quality Assurance
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Uncompromising Quality
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Every cable we manufacture undergoes rigorous testing and meets international
              standards, ensuring safety, reliability, and peak performance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Certifications"
            subtitle="Internationally recognized certifications that validate our commitment to quality"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 lg:mt-16">
            {QUALITY_CERTIFICATIONS.map((cert, index) => {
              const Icon = certIcons[index % certIcons.length];
              return (
                <motion.div
                  key={cert.name}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Card className="h-full p-6 lg:p-8 border border-gray-100 hover:border-electric/20 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-xl bg-electric/10 flex items-center justify-center mb-5 group-hover:bg-electric/20 transition-colors">
                      <Icon className="w-7 h-7 text-electric" />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2">{cert.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{cert.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Quality Tests & Parameters"
            subtitle="Every cable batch undergoes comprehensive testing across these critical parameters"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 lg:mt-16">
            {QUALITY_TESTS.map((test, index) => {
              const Icon = testIcons[index % testIcons.length];
              return (
                <motion.div
                  key={test.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <Card className="h-full p-6 lg:p-7 border border-gray-100 hover:border-electric/20 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-navy" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="font-bold text-navy">{test.name}</h3>
                          {test.standard && (
                            <Badge variant="outline" className="text-xs bg-navy/5 text-navy/60 border-navy/10">
                              {test.standard}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-3">{test.description}</p>
                        <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                          <span className="font-medium">Equipment:</span> {test.equipment}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Testing Facility"
            subtitle="State-of-the-art in-house laboratory equipped with advanced testing equipment"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: FlaskConical,
                title: "In-House Lab",
                desc: "Fully equipped testing laboratory with calibrated instruments for precise measurements.",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Qualified engineers and technicians with years of experience in cable testing.",
              },
              {
                icon: BarChart3,
                title: "Digital Reports",
                desc: "Computerized test reports with traceable data for complete transparency.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 lg:p-8 text-center border border-gray-100 hover:border-electric/20 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-electric/10 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-8 h-8 text-electric" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
              <SectionTitle
                title="Safety Standards"
                subtitle="We adhere to the highest safety standards in manufacturing and testing"
                variant="light"
              />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { label: "IS 694", desc: "PVC Insulated Cables" },
                { label: "IS 1554", desc: "PVC Insulated Heavy Duty" },
                { label: "IS 4288", desc: "Flexible Cables" },
                { label: "ISO 9001:2015", desc: "Quality Management" },
              ].map((std, index) => (
                <motion.div
                  key={std.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
                >
                  <div className="text-2xl font-bold text-electric mb-1">{std.label}</div>
                  <p className="text-sm text-gray-300">{std.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Download Our Quality Brochure
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
              Get detailed information about our quality standards, certifications, and testing
              procedures in our comprehensive quality brochure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-navy hover:bg-navy/90 text-white">
                Download Brochure
              </Button>
              <Button size="lg" variant="outline" className="border-navy text-navy hover:bg-navy/5">
                Request Certificate Copy
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
