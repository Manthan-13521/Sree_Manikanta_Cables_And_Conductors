"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  variant?: "default" | "light" | "minimal";
  badge?: string;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  description,
  align = "center",
  variant = "default",
  badge,
  className,
}: SectionTitleProps) {
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const variants = {
    default: {
      badge: "bg-navy/10 text-navy",
      title: "text-gray-900 dark:text-white",
      subtitle: "text-electric",
      description: "text-gray-600 dark:text-gray-400",
    },
    light: {
      badge: "bg-white/20 text-white",
      title: "text-white",
      subtitle: "text-electric-light",
      description: "text-gray-300",
    },
    minimal: {
      badge: "bg-navy/5 text-navy",
      title: "text-gray-900 dark:text-white",
      subtitle: "text-navy",
      description: "text-gray-500 dark:text-gray-400",
    },
  };

  const currentVariant = variants[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={cn("max-w-3xl mx-auto mb-12 lg:mb-16", alignments[align], className)}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={cn(
            "inline-block rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-4",
            currentVariant.badge
          )}
        >
          {badge}
        </motion.span>
      )}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={cn(
            "text-sm font-semibold tracking-widest uppercase mb-3",
            currentVariant.subtitle
          )}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold font-heading leading-tight",
          currentVariant.title
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            currentVariant.description
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
