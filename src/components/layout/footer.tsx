"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Globe,
  MessageCircle,
  Share2,
  Video,
  Camera,
  Zap,
  ChevronRight,
} from "lucide-react";
import { COMPANY_INFO, FOOTER_SECTIONS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-2xl bg-electric text-white shadow-lg hover:shadow-glow flex items-center justify-center transition-shadow duration-300"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </motion.button>
  );
}

export function Footer() {
  return (
    <>
      <BackToTop />
      <footer className="bg-navy-dark text-white">
        {/* Main Footer */}
        <div className="container-custom py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2.5 group mb-6">
                <div className="w-10 h-10 rounded-xl bg-electric/20 flex items-center justify-center group-hover:bg-electric transition-colors duration-300">
                  <Zap className="w-5 h-5 text-electric" />
                </div>
                <div>
                  <h3 className="text-sm font-bold font-heading text-white leading-tight">
                    SREE MANIKANTA
                  </h3>
                  <p className="text-[10px] text-gray-400 leading-tight tracking-wide">
                    CABLES AND CONDUCTORS
                  </p>
                </div>
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {COMPANY_INFO.tagline}. We are committed to delivering premium quality wires, cables, and conductors with advanced manufacturing technology and rigorous quality assurance.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-electric mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-400">{COMPANY_INFO.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-electric shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-electric shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title}>
                <h4 className="text-sm font-semibold font-heading text-white mb-5">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group/link"
                      >
                        <ChevronRight className="w-3 h-3 text-electric opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-200" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter & Social */}
          <div className="mt-12 pt-12 border-t border-white/10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Newsletter */}
              <div className="w-full lg:w-auto">
                <p className="text-sm font-semibold text-white mb-3">Subscribe to our newsletter</p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 w-full lg:w-72"
                  />
                  <Button variant="destructive" size="sm">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {[Globe, MessageCircle, Share2, Video, Camera].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-electric/20 flex items-center justify-center text-gray-400 hover:text-electric transition-all duration-300"
                    aria-label={`Social link ${i + 1}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10">
          <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
