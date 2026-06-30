"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Factory, Cpu, Zap, Gauge, RotateCcw, Home, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  "industrial-cables": <Factory className="w-7 h-7 text-accent" />,
  "control-cables": <Cpu className="w-7 h-7 text-accent" />,
  "lt-power-cables": <Zap className="w-7 h-7 text-accent" />,
  "instrumentation-cables": <Gauge className="w-7 h-7 text-accent" />,
  "flexible-cables": <RotateCcw className="w-7 h-7 text-accent" />,
  "house-wires": <Home className="w-7 h-7 text-accent" />,
  "solar-cables": <Zap className="w-7 h-7 text-accent" />,
  "special-purpose-cables": <Settings className="w-7 h-7 text-accent" />,
};

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = PRODUCT_CATEGORIES.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="primary" className="bg-white/10 text-white border-white/20">Products</Badge>
            <h1 className="text-h1 text-white">Our Product Range</h1>
            <p className="text-body-lg text-white/70">
              Explore our comprehensive catalog of wires, cables, and conductors.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.slug} variants={fadeInUp} className="group">
                <Link href={`/products/${product.slug}`}>
                  <Card variant="elevated" className="h-full transition-all duration-300 hover:-translate-y-2">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      {iconMap[product.id] || <Zap className="w-7 h-7 text-accent" />}
                    </div>
                    <h3 className="text-h5 text-primary mb-2">{product.name}</h3>
                    <p className="text-body text-text-secondary mb-4">{product.description}</p>
                    <div className="flex items-center text-small text-accent font-semibold">
                      View Details
                      <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-body text-text-tertiary">No products found.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-surface-secondary">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose Our Products?"
            subtitle="Quality, durability, and performance you can rely on."
          />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Premium Quality", desc: "Made with high-grade materials for superior performance." },
              { title: "Industry Compliant", desc: "Meets all relevant Indian and international standards." },
              { title: "Wide Range", desc: "Comprehensive selection for every application." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp}>
                <Card variant="elevated" className="h-full text-center">
                  <h3 className="text-h5 text-primary mb-2">{item.title}</h3>
                  <p className="text-body text-text-secondary">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-h2 text-white">Need Help Choosing?</h2>
            <p className="text-body-lg text-white/80">
              Our team of experts will help you find the perfect product for your needs.
            </p>
            <Button variant="primary" size="lg" className="bg-white text-accent hover:bg-white/90">
              Contact Our Team
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
