"use client";

import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-medium transition-colors duration-200",
  {
    variants: {
      variant: {
        default: "bg-navy/10 text-navy dark:bg-navy/20 dark:text-navy-light",
        secondary: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
        destructive: "bg-electric/10 text-electric dark:bg-electric/20 dark:text-electric-light",
        success: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
        warning: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
        outline: "border border-navy text-navy dark:border-navy-light dark:text-navy-light",
        glass: "bg-white/20 backdrop-blur-sm text-white border border-white/20",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-3 py-1 text-xs",
        lg: "px-4 py-1.5 text-sm",
      },
      dot: {
        true: "gap-1.5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-current",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, dot, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size, dot }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
