"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonHover } from "@/lib/animations";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-light shadow-sm",
        secondary: "bg-surface-secondary text-text-primary hover:bg-surface-tertiary border border-border",
        outline: "border-2 border-primary text-primary hover:bg-primary/5",
        ghost: "text-text-secondary hover:bg-surface-hover",
        danger: "bg-accent text-white hover:bg-accent-light shadow-sm",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-9 px-4 text-small",
        md: "h-10 px-5 text-body",
        lg: "h-12 px-6 text-body",
        xl: "h-14 px-8 text-title",
        icon: "w-10 h-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      loading = false,
      icon,
      iconPosition = "left",
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(buttonVariants({ variant, size, className }));
    const isDisabled = props.disabled || loading;

    const content = (
      <>
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {icon && iconPosition === "left" && !loading && (
          <span className="flex-shrink-0" aria-hidden="true">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && !loading && (
          <span className="flex-shrink-0" aria-hidden="true">{icon}</span>
        )}
      </>
    );

    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={baseClasses}
          aria-busy={loading}
          {...(props as React.ComponentPropsWithoutRef<typeof Slot> & { disabled?: boolean })}
        >
          {content}
        </Slot>
      );
    }

    const isAnimated = variant === "primary";

    if (isAnimated) {
      return (
        <motion.button
          ref={ref}
          className={baseClasses}
          disabled={isDisabled}
          aria-busy={loading}
          {...buttonHover}
          {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
        >
          {content}
        </motion.button>
      );
    }

    return (
      <button ref={ref} className={baseClasses} disabled={isDisabled} aria-busy={loading} {...props}>
        {content}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
