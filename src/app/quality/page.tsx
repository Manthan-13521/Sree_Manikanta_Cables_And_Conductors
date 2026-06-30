"use client";
import { motion } from "framer-motion";
import { Shield, CheckCircle, FileText, FlaskConical, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { QUALITY_CERTIFICATIONS, QUALITY_TESTS } from "@/lib/constants";

export default function QualityPage() {
  return (
    <main>
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl mx-auto space-y-6">
            <Badge variant="primary" className="bg-white/10 text-white border-white/20">Quality</Badge>
            <h1 className="text-h1 text-white">Commitment to Quality</h1>
            <p className="text-body-lg text-white/70">
              We adhere to the highest standards of quality, backed by certifications and rigorous testing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle title="Our Certifications" subtitle="Certified by leading industry bodies for quality and compliance." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {QUALITY_CERTIFICATIONS.map((cert) => (
              <motion.div key={cert.name} variants={fadeInUp}>
                <Card variant="elevated" className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-h5 text-primary mb-1">{cert.name}</h3>
                      <p className="text-small text-text-secondary">{cert.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface-secondary">
        <div className="container-custom">
          <SectionTitle title="Quality Testing Parameters" subtitle="Every product undergoes these rigorous tests before dispatch." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {QUALITY_TESTS.map((test) => (
              <motion.div key={test.name} variants={fadeInUp}>
                <Card variant="elevated" className="h-full">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-h5 text-primary mb-2">{test.name}</h3>
                  <p className="text-body text-text-secondary">{test.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle title="Our Testing Facility" subtitle="State-of-the-art equipment for precise quality assessment." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: FlaskConical,
                title: "Chemical Lab",
                desc: "Advanced equipment for material composition analysis and purity testing.",
              },
              {
                icon: FileText,
                title: "Mechanical Lab",
                desc: "Comprehensive mechanical property testing including tensile and elongation.",
              },
              {
                icon: HardHat,
                title: "Electrical Lab",
                desc: "High-precision instruments for electrical conductivity and insulation testing.",
              },
            ].map((facility) => (
              <motion.div key={facility.title} variants={fadeInUp}>
                <Card variant="elevated" className="h-full text-center">
                  <facility.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h3 className="text-h5 text-primary mb-2">{facility.title}</h3>
                  <p className="text-body text-text-secondary">{facility.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface-secondary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
              <Badge variant="accent">Safety Standards</Badge>
              <h2 className="text-h2 text-primary">Safety First, Always</h2>
              <p className="text-body text-text-secondary">
                We strictly follow all safety standards and regulations in our manufacturing process,
                ensuring our products are safe for use in all applications.
              </p>
              <ul className="space-y-3">
                {[
                  "Compliance with IS and IEC standards",
                  "RoHS compliant manufacturing",
                  "Fire retardant material usage",
                  "Regular safety audits",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-body text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <HardHat className="w-20 h-20 text-accent/40" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-h2 text-white">Quality You Can Trust</h2>
            <p className="text-body-lg text-white/80">
              Experience the difference that rigorous quality standards make.
            </p>
            <Button variant="primary" size="lg" className="bg-white text-accent hover:bg-white/90">
              Request Product Details
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
