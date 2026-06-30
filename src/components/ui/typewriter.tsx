"use client";

import { useState, useEffect, useCallback } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export function TypewriterText({ text, speed = 30, onComplete }: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setIsComplete(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setIsComplete(true);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <span>
      {displayed}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
}

const QUICK_MESSAGES = [
  {
    label: "🔌 Product Inquiry",
    message: "Hi, I'm interested in your cables and conductors. Could you please share your product catalog and pricing?",
  },
  {
    label: "📋 Request Quote",
    message: "Hello, I'd like to request a quote for bulk cable supply. Please share your best pricing and delivery timelines.",
  },
  {
    label: "🏭 Bulk Order",
    message: "Hi Team, we are looking for a regular supply of industrial cables for our manufacturing plant. Please share your bulk pricing and MOQ details.",
  },
  {
    label: "📄 Technical Query",
    message: "Hello, I need technical specifications for your cables. Could you share your product datasheets and compliance certificates?",
  },
];

interface QuickMessageProps {
  onSelect: (msg: string) => void;
}

export function QuickMessages({ onSelect }: QuickMessageProps) {
  return (
    <div className="space-y-2">
      <p className="text-small text-text-secondary font-medium">Quick Messages:</p>
      <div className="flex flex-wrap gap-2">
        {QUICK_MESSAGES.map((qm) => (
          <button
            key={qm.label}
            type="button"
            onClick={() => onSelect(qm.message)}
            className="text-xs px-3 py-1.5 rounded-full border border-border bg-surface-secondary hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all"
          >
            {qm.label}
          </button>
        ))}
      </div>
    </div>
  );
}