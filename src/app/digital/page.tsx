"use client";
import { motion } from "framer-motion";
import { Search, Zap, Users, FileText, BarChart3, Globe, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { DIGITAL_FEATURES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  search: <Search className="w-7 h-7 text-accent" />,
  zap: <Zap className="w-7 h-7 text-accent" />,
  users: <Users className="w-7 h-7 text-accent" />,
  "file-text": <FileText className="w-7 h-7 text-accent" />,
  "bar-chart": <BarChart3 className="w-7 h-7 text-accent" />,
  globe: <Globe className="w-7 h-7 text-accent" />,
  "trending-up": <TrendingUp className="w-7 h-7 text-accent" />,
};

export default function DigitalPage() {
  return (
    <main>
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl mx-auto space-y-6">
            <Badge variant="primary" className="bg-white/10 text-white border-white/20">Digital Presence</Badge>
            <h1 className="text-h1 text-white">Our Digital Ecosystem</h1>
            <p className="text-body-lg text-white/70">
              Leveraging technology to deliver seamless experiences and enhanced service.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Digital Features We Offer"
            subtitle="Modern solutions for modern businesses."
          />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {DIGITAL_FEATURES.map((feature) => (
              <motion.div key={feature.title} variants={fadeInUp}>
                <Card variant="elevated" className="h-full">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                    {iconMap[feature.icon]}
                  </div>
                  <h3 className="text-h5 text-primary mb-3">{feature.title}</h3>
                  <p className="text-body text-text-secondary mb-4">{feature.description}</p>
                  {feature.features && feature.features.length > 0 && (
                    <ul className="space-y-2">
                      {feature.features.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-small text-text-tertiary">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
