"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef, type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "gradient" | "bordered" | "elevated";
  hover?: boolean;
  padding?: "sm" | "md" | "lg" | "none";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = false, padding = "md", children, ...props }, ref) => {
    const variants = {
      default: "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800",
      glass: "glass-card",
      gradient: "bg-gradient-to-br from-navy/5 to-electric/5 border border-navy/10",
      bordered: "bg-transparent border-2 border-navy/20 dark:border-navy/40",
      elevated: "bg-white dark:bg-gray-900 shadow-soft-lg border-0",
    };

    const paddings = {
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      none: "p-0",
    };

    const baseClassName = cn(
      "rounded-2xl transition-all duration-300",
      variants[variant],
      paddings[padding],
      hover && "card-hover cursor-pointer",
      className
    );

    if (hover) {
      return (
        <motion.div
          ref={ref}
          className={baseClassName}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          {...(props as Record<string, unknown>)}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={baseClassName} {...props}>
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 mb-4", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-xl font-heading font-semibold leading-tight tracking-tight", className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-gray-500 dark:text-gray-400", className)} {...props} />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center mt-4 pt-4 border-t border-gray-100 dark:border-gray-800", className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
