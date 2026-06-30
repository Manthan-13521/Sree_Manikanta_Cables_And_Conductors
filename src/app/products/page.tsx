"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Factory, Cpu, Zap, Gauge, RotateCcw, Home, Settings, ChevronRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import Link from "next/link";

const productIcons: Record<string, React.ReactNode> = {
  "industrial-cables": <Factory className="w-8 h-8" />,
  "control-cables": <Cpu className="w-8 h-8" />,
  "lt-power-cables": <Zap className="w-8 h-8" />,
  "instrumentation-cables": <Gauge className="w-8 h-8" />,
  "flexible-cables": <RotateCcw className="w-8 h-8" />,
  "house-wires": <Home className="w-8 h-8" />,
  "solar-cables": <Zap className="w-8 h-8" />,
  "special-purpose-cables": <Settings className="w-8 h-8" />,
};

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = PRODUCT_CATEGORIES.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-navy-dark via-navy to-navy overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-electric/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="glass" size="lg" className="mb-4">Our Products</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight mb-6">
              Comprehensive Range of <span className="text-electric">Cable Solutions</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              From industrial power cables to specialized instrumentation cables, we manufacture a complete range for every application.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 -mt-8 relative z-20">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="max-w-xl mx-auto">
            <div className="glass-card p-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-base border-0 bg-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <SectionTitle title="Our Product Range" subtitle="Categories" description="Explore our comprehensive range of premium cables and conductors." />
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16"><p className="text-gray-500 text-lg">No products found matching your search.</p></div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
              {filteredProducts.map((product, index) => (
                <motion.div key={product.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}>
                  <Link href={`/products/${product.slug}`}>
                    <Card hover padding="lg" className="h-full group">
                      <div className="w-14 h-14 rounded-2xl bg-navy/10 dark:bg-navy/20 flex items-center justify-center text-navy dark:text-navy-light group-hover:bg-electric/10 group-hover:text-electric transition-all duration-300 mb-4">
                        {productIcons[product.id] || <Zap className="w-7 h-7" />}
                      </div>
                      <h3 className="text-lg font-bold font-heading text-gray-900 dark:text-white mb-2 group-hover:text-navy dark:group-hover:text-navy-light transition-colors">{product.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">{product.description}</p>
                      <div className="flex items-center text-sm font-medium text-electric group-hover:gap-2 transition-all">
                        View Details <ChevronRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-lightgray dark:bg-gray-900/50">
        <div className="container-custom">
          <SectionTitle title="Why Choose Our Products?" subtitle="Quality Assurance" description="Every product undergoes rigorous testing to meet national and international standards." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { title: "ISI Marked", desc: "All products meet BIS standards" },
              { title: "ISO Certified", desc: "Quality management certified" },
              { title: "100% Tested", desc: "Rigorous quality testing" },
              { title: "Warranty", desc: "Comprehensive product warranty" },
            ].map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-electric font-bold text-lg">✓</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-navy">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">Need a Custom Cable Solution?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Contact our engineering team for custom cable requirements or bulk orders.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact"><Button variant="destructive" size="lg" className="rounded-2xl">Request a Quote</Button></Link>
              <Link href="/quality"><Button variant="glass" size="lg" className="rounded-2xl">View Certifications</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}