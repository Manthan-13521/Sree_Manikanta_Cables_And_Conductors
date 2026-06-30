"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import { STATS } from "@/lib/constants";

const coreValues = [
  {
    title: "Quality First",
    description: "Uncompromising quality at every stage of manufacturing.",
  },
  {
    title: "Customer Centric",
    description: "We put our customers at the heart of everything we do.",
  },
  {
    title: "Innovation",
    description: "Continuously improving our processes and products.",
  },
  {
    title: "Integrity",
    description: "Ethical business practices and transparency.",
  },
];

const milestones = [
  { year: "2010", title: "Company Founded", description: "Sree Manikanta Cables was established." },
  { year: "2012", title: "First Major Contract", description: "Secured our first large-scale industry contract." },
  { year: "2015", title: "Expansion Phase", description: "Expanded manufacturing capacity with new machinery." },
  { year: "2018", title: "ISO Certification", description: "Achieved ISO 9001 quality management certification." },
  { year: "2020", title: "10 Year Milestone", description: "Celebrated a decade of manufacturing excellence." },
  { year: "2022", title: "New Facility", description: "Opened a new state-of-the-art manufacturing unit." },
  { year: "2024", title: "Continued Growth", description: "Expanded product range and market reach." },
];

export default function AboutPage() {
  return (
    <main>
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl mx-auto space-y-6">
            <Badge variant="primary" className="bg-white/10 text-white border-white/20">About Us</Badge>
            <h1 className="text-h1 text-white">Our Story, Our Commitment</h1>
            <p className="text-body-lg text-white/70">
              Discover the journey of Sree Manikanta Cables and our dedication to manufacturing excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-h2 font-bold text-primary">14+</div>
                  <div className="text-body text-text-secondary">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
              <Badge variant="accent">Our Story</Badge>
              <h2 className="text-h2 text-primary">A Journey of Quality and Trust</h2>
              <p className="text-body text-text-secondary">
                Founded in 2010, Sree Manikanta Cables started with a vision to deliver reliable electrical
                solutions. Over the years, we have grown into a trusted name in the wire and cable industry.
              </p>
              <p className="text-body text-text-secondary">
                Our commitment to quality, innovation, and customer satisfaction has driven our growth,
                enabling us to serve diverse industries across India.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-secondary">
        <div className="container-custom">
          <SectionTitle title="Our Vision & Mission" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div variants={fadeInUp}>
              <Card variant="elevated" className="h-full">
                <h3 className="text-h4 text-primary mb-4">Our Vision</h3>
                <p className="text-body text-text-secondary">
                  To be the most trusted and preferred wire and cable manufacturer in India, known for
                  uncompromising quality and innovation.
                </p>
              </Card>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Card variant="elevated" className="h-full">
                <h3 className="text-h4 text-primary mb-4">Our Mission</h3>
                <p className="text-body text-text-secondary">
                  To deliver superior quality products that exceed customer expectations, while fostering
                  a culture of continuous improvement and sustainable growth.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle title="Our Achievements in Numbers" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp}>
                <Card variant="elevated" className="text-center">
                  <div className="text-h2 font-bold text-accent">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-body text-text-secondary mt-1">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-custom">
          <SectionTitle variant="light" title="Our Core Values" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {coreValues.map((value) => (
              <motion.div key={value.title} variants={fadeInUp}>
                <Card variant="ghost" className="h-full text-center border border-white/10">
                  <h3 className="text-h4 text-white mb-3">{value.title}</h3>
                  <p className="text-body text-white/70">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle title="Our Journey" subtitle="Key milestones in our path to becoming an industry leader." />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative mt-12">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 -translate-x-1/2" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div key={milestone.year} variants={fadeInUp} className={`relative flex items-start gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:block flex-1" />
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-accent border-4 border-white flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <Card variant="elevated" className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right md:mr-12" : "md:ml-12"}`}>
                    <div className="text-small text-accent font-semibold mb-1">{milestone.year}</div>
                    <h3 className="text-h5 text-primary mb-1">{milestone.title}</h3>
                    <p className="text-body text-text-secondary">{milestone.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-h2 text-white">Let&apos;s Work Together</h2>
            <p className="text-body-lg text-white/80">
              Partner with us for reliable, high-quality wire and cable solutions.
            </p>
            <Button variant="primary" size="lg" className="bg-white text-accent hover:bg-white/90">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
