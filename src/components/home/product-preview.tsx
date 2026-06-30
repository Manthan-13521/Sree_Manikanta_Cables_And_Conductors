"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Factory, Cpu, Zap, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  "industrial-cables": <Factory className="w-8 h-8 text-accent" />,
  "control-cables": <Cpu className="w-8 h-8 text-accent" />,
  "lt-power-cables": <Zap className="w-8 h-8 text-accent" />,
  "instrumentation-cables": <Gauge className="w-8 h-8 text-accent" />,
};

const previewProducts = PRODUCT_CATEGORIES.slice(0, 4);

export function ProductPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionTitle
          title="Our Product Range"
          subtitle="Explore our comprehensive range of wires, cables, and conductors designed for diverse applications."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {previewProducts.map((product) => (
            <motion.div key={product.slug} variants={fadeInUp} className="group">
              <Link href={`/products/${product.slug}`}>
                <Card variant="elevated" className="h-full text-center transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    {iconMap[product.id]}
                  </div>
                  <h3 className="text-h5 text-primary mb-2">{product.name}</h3>
                  <p className="text-body text-text-secondary mb-4">{product.description}</p>
                  <span className="text-small text-accent font-semibold">Learn More &rarr;</span>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-12">
          <Link href="/products">
            <Button variant="primary" size="lg">
              View All Products
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
