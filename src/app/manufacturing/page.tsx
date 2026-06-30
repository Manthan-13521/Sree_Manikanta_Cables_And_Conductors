"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Settings, ClipboardCheck, Factory, ShieldCheck } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MANUFACTURING_STAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const stageIcons = [Factory, Settings, ClipboardCheck, ShieldCheck, CheckCircle2, Factory];

export default function ManufacturingPage() {
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
              Our Process
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Manufacturing Excellence
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              From raw material selection to final testing, every stage follows stringent quality
              protocols to deliver cables that exceed industry standards.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Our Manufacturing Process"
            subtitle="A meticulously crafted 6-stage process ensuring uncompromising quality at every step"
          />
          <div className="relative mt-16 lg:mt-20">
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-navy/10 lg:-translate-x-px" />
            <div className="space-y-12 lg:space-y-16">
              {MANUFACTURING_STAGES.map((stage, index) => {
                const Icon = stageIcons[index % stageIcons.length];
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={stage.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={cn(
                      "relative flex flex-col lg:flex-row items-start gap-6 lg:gap-12",
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    )}
                  >
                    <div className="hidden lg:block flex-1">
                      {!isEven && (
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                          <span className="text-6xl font-bold text-navy/5">{String(index + 1).padStart(2, "0")}</span>
                        </div>
                      )}
                    </div>
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white",
                          "bg-navy text-white"
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="flex-1 group">
                      <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-bold text-electric">{String(index + 1).padStart(2, "0")}</span>
                          <span className="text-xs text-gray-400">Stage {index + 1}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-navy mb-3">{stage.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-5">{stage.description}</p>
                        {stage.features && stage.features.length > 0 && (
                          <div className="mb-5">
                            <h4 className="text-sm font-semibold text-navy/70 mb-2 uppercase tracking-wider">Key Features</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {stage.features.map((f) => (
                                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                                  <CheckCircle2 className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {(stage.equipment || stage.qualityChecks) && (
                          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                            {stage.equipment && stage.equipment.length > 0 && (
                              <div>
                                <span className="text-xs font-semibold text-navy/50 uppercase tracking-wider">Equipment</span>
                                <div className="flex flex-wrap gap-1.5 mt-1">
                                  {stage.equipment.map((eq) => (
                                    <Badge key={eq} variant="outline" className="text-xs bg-gray-50 text-navy border-gray-200">
                                      {eq}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                            {stage.qualityChecks && stage.qualityChecks.length > 0 && (
                              <div>
                                <span className="text-xs font-semibold text-navy/50 uppercase tracking-wider">Quality Checks</span>
                                <div className="flex flex-wrap gap-1.5 mt-1">
                                  {stage.qualityChecks.map((qc) => (
                                    <Badge key={qc} className="text-xs bg-green-50 text-green-700 border-green-200">
                                      {qc}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="hidden lg:block flex-1">
                      {isEven && (
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                          <span className="text-6xl font-bold text-navy/5">{String(index + 1).padStart(2, "0")}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
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
              Want to See Our Facility in Action?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
              Schedule a virtual or physical tour of our manufacturing plant and witness quality
              being built into every cable.
            </p>
            <Button size="lg" className="bg-electric hover:bg-electric/90 text-white">
              Schedule a Plant Tour
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
