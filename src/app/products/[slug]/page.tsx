"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import Link from "next/link";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = PRODUCT_CATEGORIES.find((p) => p.slug === slug);

  if (!product) {
    return (
      <main className="min-h-screen bg-navy flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Product Not Found</h1>
          <p className="text-gray-300 mb-8">The product you are looking for does not exist.</p>
          <Link href="/products">
            <Button className="bg-electric hover:bg-electric/90 text-white">
              Back to Products
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  const features = [
    "IS 1554 / IEC 60502 Compliant",
    "High conductivity copper/aluminum conductor",
    "Superior insulation & sheathing",
    "Rigorous quality testing",
    "Custom lengths available",
    "ISI marked & certified",
  ];

  const applications = [
    "Industrial power distribution",
    "Commercial building wiring",
    "Control & instrumentation systems",
    "Renewable energy projects",
    "Infrastructure development",
    "OEM & panel building",
  ];

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
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-electric transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
            <Badge className="mb-4 bg-electric/20 text-electric border-none text-sm px-4 py-1.5">
              {product.name}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {product.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              {product.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-electric hover:bg-electric/90 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Get a Quote
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Browse All Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-navy mb-8">Key Features</h2>
              <div className="space-y-4">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-navy mb-8">Applications</h2>
              <div className="space-y-4">
                {applications.map((app, i) => (
                  <motion.div
                    key={app}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{app}</span>
                  </motion.div>
                ))}
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
              Interested in {product.name}?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
              Get in touch with our team for pricing, specifications, and customized solutions
              tailored to your project needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-electric hover:bg-electric/90 text-white">
                  Get a Quote
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Back to Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
