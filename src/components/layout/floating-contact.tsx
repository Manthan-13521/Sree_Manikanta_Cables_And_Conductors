"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Mail, X } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const buttons = [
    {
      icon: MessageCircle,
      href: `https://wa.me/919121224544`,
      label: "WhatsApp",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: Phone,
      href: `tel:${COMPANY_INFO.phone.split(" / ")[0]}`,
      label: "Call",
      color: "bg-navy hover:bg-navy-light",
    },
    {
      icon: Mail,
      href: `mailto:${COMPANY_INFO.email}`,
      label: "Email",
      color: "bg-electric hover:bg-electric-light",
    },
  ];

  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col items-center gap-3">
      <AnimatePresence>
        {isOpen && (
          <>
            {buttons.map((btn, index) => {
              const Icon = btn.icon;
              return (
                <motion.a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className={`w-12 h-12 rounded-2xl ${btn.color} text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform`}
                  aria-label={btn.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-2xl bg-electric text-white shadow-xl hover:shadow-glow flex items-center justify-center transition-shadow"
        aria-label="Contact us"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
