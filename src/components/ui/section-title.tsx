"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  align?: "left" | "center" | "right";
  variant?: "default" | "light";
  className?: string;
  as?: "h1" | "h2";
}

const alignments = {
  left: "text-left",
  center: "text-center mx-auto",
  right: "text-right ml-auto",
};

const variantStyles = {
  default: {
    badge: "bg-accent/10 text-accent",
    subtitle: "text-text-secondary",
    title: "text-text-primary",
    description: "text-text-secondary",
  },
  light: {
    badge: "bg-white/15 text-white",
    subtitle: "text-text-inverse/70",
    title: "text-text-inverse",
    description: "text-text-inverse/70",
  },
};

export function SectionTitle({
  title,
  subtitle,
  description,
  badge,
  align = "center",
  variant = "default",
  className,
  as: HeadingTag = "h2",
}: SectionTitleProps) {
  const styles = variantStyles[variant];

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "max-w-3xl mb-12 lg:mb-16",
        alignments[align],
        className
      )}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={cn(
            "inline-block rounded-full px-3 py-1 text-caption font-medium uppercase tracking-wider mb-4",
            styles.badge
          )}
        >
          {badge}
        </motion.span>
      )}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className={cn(
            "text-small uppercase tracking-widest mb-3",
            styles.subtitle
          )}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <HeadingTag
          className={cn(
            "text-h2 lg:text-h3 font-heading",
            styles.title
          )}
        >
          {title}
        </HeadingTag>
      </motion.div>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className={cn(
            "mt-4 text-body-lg max-w-2xl",
            align === "center" && "mx-auto",
            styles.description
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
