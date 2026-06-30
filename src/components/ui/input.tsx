"use client";

import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, type, ...props }, ref) => (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-small font-medium text-text-primary">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-tertiary">
            {icon}
          </div>
        )}
        <input
          type={type}
          ref={ref}
          className={cn(
            "w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-body",
            "placeholder:text-text-tertiary",
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
            "transition-all duration-200",
            icon && "pl-10",
            error && "border-accent/50 focus:ring-accent/10 focus:border-accent",
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="text-small text-accent mt-1">{error}</p>
      )}
    </div>
  )
);
Input.displayName = "Input";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, ...props }, ref) => (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-small font-medium text-text-primary">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={cn(
          "w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-body min-h-[120px] resize-y",
          "placeholder:text-text-tertiary",
          "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
          "transition-all duration-200",
          error && "border-accent/50 focus:ring-accent/10 focus:border-accent",
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-small text-accent mt-1">{error}</p>
      )}
    </div>
  )
);
Textarea.displayName = "Textarea";

export { Input, Textarea };
