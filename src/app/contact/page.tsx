"use client";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TypewriterText, QuickMessages } from "@/components/ui/typewriter";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { COMPANY_INFO, WORKING_HOURS } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [typingMessage, setTypingMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (isTyping) return;
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleQuickMessage = useCallback((msg: string) => {
    setTypingMessage(msg);
    setIsTyping(true);
  }, []);

  const handleTypeComplete = useCallback(() => {
    setFormData((prev) => ({ ...prev, message: typingMessage }));
    setIsTyping(false);
  }, [typingMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const greeting = formData.name
      ? `Hi, I am ${formData.name}.`
      : "Hi Sree Manikanta Cables!";
    const whatsappUrl = `https://wa.me/${"919121224544"}?text=${encodeURIComponent(
      `${greeting}%0A%0A${formData.subject ? `Subject: ${formData.subject}%0A` : ""}%0A${formData.message}%0A%0A---%0A${formData.name ? `Name: ${formData.name}%0A` : ""}${formData.email ? `Email: ${formData.email}%0A` : ""}${formData.phone ? `Phone: ${formData.phone}` : ""}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const infoCards = [
    { icon: MapPin, title: "Address", content: COMPANY_INFO.address },
    { icon: Phone, title: "Phone", content: COMPANY_INFO.phone },
    { icon: Mail, title: "Email", content: COMPANY_INFO.email },
    { icon: Clock, title: "Working Hours", lines: WORKING_HOURS.map((w) => `${w.day}: ${w.hours}`) },
  ];

  return (
    <main>
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="max-w-3xl mx-auto space-y-6">
            <Badge variant="primary" className="bg-white/10 text-white border-white/20">Contact</Badge>
            <h1 className="text-h1 text-white">Get in Touch</h1>
            <p className="text-body-lg text-white/70">
              We would love to hear from you. Reach out for inquiries, quotes, or support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-3">
              <Card variant="elevated" className="p-6 sm:p-8">
                <h3 className="text-h4 text-primary mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input label="Your Name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                    <Input label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                    <Input label="Subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Product Inquiry" />
                  </div>
                  <div>
                    <label className="block text-small font-medium text-primary mb-1.5">Message</label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                        placeholder={isTyping ? "" : "Write your message here..."}
                        required
                      />
                      {isTyping && (
                        <div className="absolute inset-0 px-4 py-3 text-text-primary pointer-events-none">
                          <TypewriterText text={typingMessage} speed={25} onComplete={handleTypeComplete} />
                        </div>
                      )}
                    </div>
                    <div className="mt-3">
                      <QuickMessages onSelect={handleQuickMessage} />
                    </div>
                  </div>
                  <Button type="submit" variant="danger" size="lg" className="w-full sm:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    Send via WhatsApp
                  </Button>
                </form>
              </Card>
            </motion.div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2 space-y-6">
              {infoCards.map((card) => (
                <motion.div key={card.title} variants={fadeInUp}>
                  <Card variant="elevated">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <card.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-h5 text-primary">{card.title}</h4>
                        {card.lines ? (
                          card.lines.map((line, i) => <p key={i} className="text-body text-text-secondary">{line}</p>)
                        ) : (
                          <p className="text-body text-text-secondary">{card.content}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
              <motion.div variants={fadeInUp}>
                <Card variant="elevated" className="bg-accent/5 border-accent/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-h5 text-primary">Chat on WhatsApp</h4>
                      <p className="text-small text-text-secondary">Quick responses during business hours</p>
                    </div>
                    <a
                      href={`https://wa.me/${"919121224544"}?text=${encodeURIComponent(
                        "Hi Sree Manikanta Cables! I visited your website and would like to discuss my cable requirements."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="danger" size="sm">
                        Chat Now
                      </Button>
                    </a>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-2xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.123456789!2d78.4!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location"
            />
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-h2 text-white">We Are Here to Help</h2>
            <p className="text-body-lg text-white/80">
              Our team is ready to assist you with any inquiries or support needs.
            </p>
            <Button variant="primary" size="lg" className="bg-white text-accent hover:bg-white/90">
              Call Us Now
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
