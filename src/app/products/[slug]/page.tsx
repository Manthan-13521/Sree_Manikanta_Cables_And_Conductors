"use client";
import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Factory, Cpu, Zap, Gauge, RotateCcw, Home, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { fadeInUp, fadeInLeft, fadeInRight, viewportOptions } from "@/lib/animations";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  "industrial-cables": <Factory className="w-8 h-8 text-accent" />,
  "control-cables": <Cpu className="w-8 h-8 text-accent" />,
  "lt-power-cables": <Zap className="w-8 h-8 text-accent" />,
  "instrumentation-cables": <Gauge className="w-8 h-8 text-accent" />,
  "flexible-cables": <RotateCcw className="w-8 h-8 text-accent" />,
  "house-wires": <Home className="w-8 h-8 text-accent" />,
  "solar-cables": <Zap className="w-8 h-8 text-accent" />,
  "special-purpose-cables": <Settings className="w-8 h-8 text-accent" />,
};

const iconMapLarge: Record<string, React.ReactNode> = {
  "industrial-cables": <Factory className="w-32 h-32 text-accent/40" />,
  "control-cables": <Cpu className="w-32 h-32 text-accent/40" />,
  "lt-power-cables": <Zap className="w-32 h-32 text-accent/40" />,
  "instrumentation-cables": <Gauge className="w-32 h-32 text-accent/40" />,
  "flexible-cables": <RotateCcw className="w-32 h-32 text-accent/40" />,
  "house-wires": <Home className="w-32 h-32 text-accent/40" />,
  "solar-cables": <Zap className="w-32 h-32 text-accent/40" />,
  "special-purpose-cables": <Settings className="w-32 h-32 text-accent/40" />,
};

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = PRODUCT_CATEGORIES.find((p) => p.slug === slug);

  if (!product) {
    return (
      <main className="section-padding bg-primary min-h-screen flex items-center justify-center">
        <div className="text-center text-white space-y-4">
          <h1 className="text-h1">Product Not Found</h1>
          <Link href="/products">
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Back to Products
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-4xl">
            <Link href="/products" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                {iconMap[product.id] || <Zap className="w-8 h-8 text-accent" />}
              </div>
              <div className="space-y-3">
                <Badge variant="primary" className="bg-white/10 text-white border-white/20">Product</Badge>
                <h1 className="text-h1 text-white">{product.name}</h1>
                <p className="text-body-lg text-white/70">{product.description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" {...viewportOptions}>
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                {iconMapLarge[product.id] || <Zap className="w-32 h-32 text-accent/40" />}
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" {...viewportOptions} className="space-y-6">
              <Badge variant="accent">Details</Badge>
              <h2 className="text-h2 text-primary">About {product.name}</h2>
              <p className="text-body text-text-secondary">{product.description}</p>
              <Link href="/contact">
                <Button variant="danger" size="lg">
                  Enquire Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-secondary">
        <div className="container-custom">
          <h2 className="text-h3 text-primary mb-8 text-center">Related Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCT_CATEGORIES.filter((p) => p.id !== product.id).slice(0, 4).map((related) => (
              <Link key={related.id} href={`/products/${related.slug}`}>
                <Card variant="default" className="h-full card-hover p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    {iconMap[related.id] || <Zap className="w-6 h-6 text-accent" />}
                  </div>
                  <h3 className="text-title font-heading font-semibold text-primary mb-2">{related.name}</h3>
                  <p className="text-small text-text-secondary line-clamp-2">{related.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-center">
        <div className="container-custom">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" {...viewportOptions} className="space-y-6">
            <h2 className="text-h2 text-white">Need a Custom Solution?</h2>
            <p className="text-body-lg text-white/70 max-w-2xl mx-auto">
              Contact our team for custom cable requirements or bulk orders.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <Button variant="primary" className="bg-white text-primary hover:bg-white/90">
                  Request Quote
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  All Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
