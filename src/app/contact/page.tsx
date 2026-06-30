"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Building2,
  User,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";
import { COMPANY_INFO, WORKING_HOURS } from "@/lib/constants";

const contactMethods = [
  {
    icon: MapPin,
    title: "Address",
    lines: [COMPANY_INFO.address],
    action: { label: "Get Directions", href: `https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.address)}` },
  },
  {
    icon: Phone,
    title: "Phone",
    lines: [COMPANY_INFO.phone],
    action: { label: `Call ${COMPANY_INFO.phone.split(" / ")[0]}`, href: `tel:${COMPANY_INFO.phone.split(" / ")[0].replace(/\s/g, "")}` },
  },
  {
    icon: Mail,
    title: "Email",
    lines: [COMPANY_INFO.email],
    action: { label: `Mail ${COMPANY_INFO.email}`, href: `mailto:${COMPANY_INFO.email}` },
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: WORKING_HOURS.map((wh) => `${wh.day}: ${wh.hours}`),
    action: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
      formData.subject || "Enquiry from Website"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <main>
      <section className="relative bg-navy py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <Badge variant="glass" size="lg" className="mb-4">Get in Touch</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Contact{" "}
              <span className="text-electric">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Have a question, need a quote, or want to discuss a project? We are here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <SectionTitle
                title="Send Us a Message"
                subtitle="Fill out the form below and our team will get back to you within 24 hours"
              />
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 text-center mt-8"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your email client has been opened. Please send the email to complete your enquiry.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Your Name *"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      icon={<User className="w-4 h-4" />}
                      required
                    />
                    <Input
                      label="Email Address *"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      icon={<Mail className="w-4 h-4" />}
                      required
                    />
                    <Input
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      icon={<Phone className="w-4 h-4" />}
                    />
                    <Input
                      label="Company Name"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Pvt. Ltd."
                      icon={<Building2 className="w-4 h-4" />}
                    />
                  </div>
                  <Input
                    label="Subject *"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                  />
                  <Textarea
                    label="Message *"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirement..."
                    required
                  />
                  <Button type="submit" size="lg" variant="destructive" className="rounded-2xl">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              {contactMethods.map((method) => (
                <Card key={method.title} variant="glass" padding="md">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center shrink-0 mt-0.5">
                      <method.icon className="w-5 h-5 text-electric" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-navy dark:text-white text-sm mb-1">{method.title}</h3>
                      {method.lines.map((line, i) => (
                        <p key={i} className="text-sm text-gray-600 dark:text-gray-400">{line}</p>
                      ))}
                      {method.action && (
                        <a
                          href={method.action.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-sm font-medium text-electric hover:text-electric/80 transition-colors"
                        >
                          {method.action.label} &rarr;
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
              <a
                href={`https://wa.me/919121224544?text=Hello%20Sree%20Manikanta%20Cables`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card variant="bordered" padding="md" className="border-green-200 dark:border-green-800 hover:bg-green-50 dark:hover:bg-green-900/20 group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy dark:text-white">Chat on WhatsApp</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Quick replies &mdash; typically within 5 minutes
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-lightgray dark:bg-gray-900/50 py-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-bold text-navy dark:text-white mb-4">Our Location</h3>
            <div className="rounded-2xl overflow-hidden shadow-soft border border-gray-200 dark:border-gray-800">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(COMPANY_INFO.address)}&output=embed`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sree Manikanta Cables Location"
              />
            </div>
          </motion.div>
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
              Need a Custom Quote?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
              Tell us your requirements and get a competitive quote within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="destructive" className="rounded-2xl">
                Request a Quote
              </Button>
              <Button size="lg" variant="glass" className="rounded-2xl">
                Call Us Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}