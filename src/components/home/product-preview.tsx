"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Factory, Cpu, Zap, Gauge, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  "factory": Factory,
  "cpu": Cpu,
  "zap": Zap,
  "gauge": Gauge,
};

const featuredProducts = PRODUCT_CATEGORIES.slice(0, 4);

export function ProductPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-lightgray to-transparent" />

      <div className="container-custom relative z-10">
        <SectionTitle
          badge="Our Products"
          subtitle="Comprehensive Range"
          title="Premium Cable Solutions"
          description="From industrial power cables to specialized instrumentation cables, we offer a complete range of high-quality cabling solutions."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product, index) => {
            const Icon = iconMap[product.icon] || Factory;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/products/${product.slug}`}>
                  <Card variant="glass" hover padding="lg" className="h-full group">
                    <div className="w-14 h-14 rounded-2xl bg-navy/10 flex items-center justify-center mb-5 group-hover:bg-navy transition-all duration-300">
                      <Icon className="w-7 h-7 text-navy group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-navy mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <span className="text-sm font-medium text-electric inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/products">
            <Button variant="default" size="lg" className="rounded-2xl">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
