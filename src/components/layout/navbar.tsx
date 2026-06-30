"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Phone,
  Zap,
  Factory,
  Cpu,
  Gauge,
  RotateCcw,
  Home,
  Settings,
  ChevronRight,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, NAVIGATION_ITEMS, PRODUCT_CATEGORIES } from "@/lib/constants";

const productIcons: Record<string, React.ReactNode> = {
  "industrial-cables": <Factory className="w-4 h-4" />,
  "control-cables": <Cpu className="w-4 h-4" />,
  "lt-power-cables": <Zap className="w-4 h-4" />,
  "instrumentation-cables": <Gauge className="w-4 h-4" />,
  "flexible-cables": <RotateCcw className="w-4 h-4" />,
  "house-wires": <Home className="w-4 h-4" />,
  "solar-cables": <Zap className="w-4 h-4" />,
  "special-purpose-cables": <Settings className="w-4 h-4" />,
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = stored ? JSON.parse(stored) : prefersDark;
    setIsDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  const toggleDark = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem("darkMode", JSON.stringify(newDark));
    document.documentElement.classList.toggle("dark", newDark);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-bold font-heading text-primary dark:text-white leading-tight">
                SREE MANIKANTA
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAVIGATION_ITEMS.map((item) => {
                const hasChildren = "children" in item;
                return (
                  <div key={item.label} className="relative group">
                    {hasChildren ? (
                      <button
                        onMouseEnter={() => setIsProductsOpen(true)}
                        onMouseLeave={() => setIsProductsOpen(false)}
                        className={cn(
                          "flex items-center gap-1 px-3 py-2 rounded-lg text-small font-medium transition-all duration-200",
                          isActive(item.href)
                            ? "text-primary font-semibold bg-primary/5 dark:bg-primary/10"
                            : "text-text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-surface-secondary dark:hover:bg-gray-800"
                        )}
                      >
                        {item.label}
                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center px-3 py-2 rounded-lg text-small font-medium transition-all duration-200",
                          isActive(item.href)
                            ? "text-primary font-semibold bg-primary/5 dark:bg-primary/10"
                            : "text-text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-surface-secondary dark:hover:bg-gray-800"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Products Dropdown */}
                    {hasChildren && (
                      <div
                        onMouseEnter={() => setIsProductsOpen(true)}
                        onMouseLeave={() => setIsProductsOpen(false)}
                        className={cn(
                          "absolute top-full left-0 w-[640px] bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-border dark:border-gray-800 p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0",
                          isProductsOpen && "opacity-100 visible translate-y-0"
                        )}
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {PRODUCT_CATEGORIES.map((product) => (
                            <Link
                              key={product.id}
                              href={`/products/${product.slug}`}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-secondary dark:hover:bg-gray-800 transition-colors group/item"
                            >
                              <div className="w-9 h-9 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-primary-light shrink-0 group-hover/item:bg-accent/10 group-hover/item:text-accent transition-colors">
                                {productIcons[product.id] || <Zap className="w-4 h-4" />}
                              </div>
                              <div className="min-w-0">
                                <p className="text-small font-semibold text-text-primary dark:text-white group-hover/item:text-primary dark:group-hover/item:text-primary-light transition-colors">
                                  {product.name}
                                </p>
                                <p className="text-caption text-text-tertiary dark:text-gray-400 mt-0.5 line-clamp-1">
                                  {product.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDark}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-text-secondary dark:text-gray-300 hover:bg-surface-secondary dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phone.split(" / ")[0]}`}
                  className="flex items-center gap-1.5 text-small text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span className="hidden xl:inline">{COMPANY_INFO.phone.split(" / ")[0]}</span>
                </a>
                <Link href="/contact">
                  <Button variant="danger" size="sm" className="rounded-lg">
                    <Phone className="w-3.5 h-3.5" />
                    Get Quote
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-text-secondary dark:text-gray-300 hover:bg-surface-secondary dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[320px] max-w-[85vw] bg-white dark:bg-gray-950 z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center gap-2.5" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-bold font-heading text-primary dark:text-white leading-tight">
                      SREE MANIKANTA
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-9 h-9 rounded-lg flex items-center justify-center bg-surface-secondary dark:bg-gray-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Mobile Nav Links */}
                <div className="space-y-1">
                  {NAVIGATION_ITEMS.map((item) => {
                    const hasChildren = "children" in item;
                    return (
                      <div key={item.label}>
                        {hasChildren ? (
                          <>
                            <button
                              onClick={() => setIsProductsOpen(!isProductsOpen)}
                              className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-small font-medium text-text-primary dark:text-gray-200 hover:bg-surface-secondary dark:hover:bg-gray-800 transition-colors"
                            >
                              {item.label}
                              <ChevronDown className={cn("w-4 h-4 transition-transform", isProductsOpen && "rotate-180")} />
                            </button>
                            <AnimatePresence>
                              {isProductsOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-4 py-1 space-y-1">
                                    {PRODUCT_CATEGORIES.map((product) => (
                                      <Link
                                        key={product.id}
                                        href={`/products/${product.slug}`}
                                        onClick={() => {
                                          setIsMobileMenuOpen(false);
                                          setIsProductsOpen(false);
                                        }}
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-small text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white hover:bg-surface-secondary dark:hover:bg-gray-800 transition-colors"
                                      >
                                        <ChevronRight className="w-3 h-3 shrink-0" />
                                        {product.name}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              "flex items-center px-3 py-3 rounded-lg text-small font-medium transition-colors",
                              isActive(item.href)
                                ? "text-primary font-semibold bg-primary/5 dark:bg-primary/10"
                                : "text-text-primary dark:text-gray-200 hover:bg-surface-secondary dark:hover:bg-gray-800"
                            )}
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Mobile Contact */}
                <div className="mt-8 space-y-3 pt-8 border-t border-border dark:border-gray-800">
                  <a
                    href={`tel:${COMPANY_INFO.phone.split(" / ")[0]}`}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg text-small text-text-secondary dark:text-gray-400 hover:bg-surface-secondary dark:hover:bg-gray-800 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {COMPANY_INFO.phone.split(" / ")[0]}
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg text-small text-text-secondary dark:text-gray-400 hover:bg-surface-secondary dark:hover:bg-gray-800 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {COMPANY_INFO.email}
                  </a>
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="danger" className="w-full rounded-lg mt-4">
                      <Phone className="w-4 h-4" />
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
