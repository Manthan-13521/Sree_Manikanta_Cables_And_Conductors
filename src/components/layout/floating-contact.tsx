"use client";

import { MessageCircle } from "lucide-react";

export function FloatingContact() {
  return (
    <div className="fixed bottom-24 right-8 z-40">
      <a
        href="https://wa.me/919121224544"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-xl bg-green-500 text-white shadow-lg hover:bg-green-600 hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
