"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Sun,
  Moon,
  Zap,
  Factory,
  Cpu,
  Gauge,
  RotateCcw,
  Home,
  Settings,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, NAVIGATION_ITEMS, PRODUCT_CATEGORIES } from "@/lib/constants";
import { useScrollProgress } from "@/hooks";

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
  const scrollProgress = useScrollProgress();

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
            ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-soft"
            : "bg-transparent"
        )}
      >
        {/* Top Bar */}
        <div className="hidden lg:block border-b border-white/10 dark:border-gray-800/50">
          <div className="container-custom flex items-center justify-between h-10">
            <div className="flex items-center gap-6 text-xs text-gray-400">
              <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-navy dark:hover:text-white transition-colors flex items-center gap-1.5">
                <Phone className="w-3 h-3" />
                {COMPANY_INFO.phone}
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-navy dark:hover:text-white transition-colors">
                {COMPANY_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium">
              {COMPANY_INFO.certifications.slice(0, 3).map((cert) => (
                <span key={cert} className="text-gray-400">{cert}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center group-hover:bg-electric transition-colors duration-300">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm font-bold font-heading text-navy dark:text-white leading-tight">
                  SREE MANIKANTA
                </h1>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight tracking-wide">
                  CABLES AND CONDUCTORS
                </p>
              </div>
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
                        "flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                        isActive(item.href)
                          ? "text-navy dark:text-white bg-navy/5 dark:bg-white/10"
                          : "text-gray-600 dark:text-gray-300 hover:text-navy dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                        isActive(item.href)
                          ? "text-navy dark:text-white bg-navy/5 dark:bg-white/10"
                          : "text-gray-600 dark:text-gray-300 hover:text-navy dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Mega Menu */}
                  {hasChildren && (
                    <div
                      onMouseEnter={() => setIsProductsOpen(true)}
                      onMouseLeave={() => setIsProductsOpen(false)}
                      className={cn(
                        "absolute top-full left-0 w-[600px] bg-white dark:bg-gray-900 rounded-2xl shadow-soft-lg border border-gray-100 dark:border-gray-800 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0",
                        isProductsOpen && "opacity-100 visible translate-y-0"
                      )}
                    >
                      <div className="grid grid-cols-2 gap-3">
                        {PRODUCT_CATEGORIES.map((product) => (
                          <Link
                            key={product.id}
                            href={`/products/${product.slug}`}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-navy/5 dark:hover:bg-navy/10 transition-colors group/item"
                          >
                            <div className="w-10 h-10 rounded-lg bg-navy/10 dark:bg-navy/20 flex items-center justify-center text-navy dark:text-navy-light shrink-0 group-hover/item:bg-electric/10 group-hover/item:text-electric transition-colors">
                              {productIcons[product.id] || <Zap className="w-4 h-4" />}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover/item:text-navy dark:group-hover/item:text-navy-light transition-colors">
                                {product.name}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
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
            <div className="flex items-center gap-2">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDark}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Desktop CTA */}
              <div className="hidden lg:block">
                <Link href="/contact">
                  <Button variant="destructive" size="sm" className="rounded-xl">
                    <Phone className="w-3.5 h-3.5" />
                    Get Quote
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Scroll Progress Bar */}
        <motion.div
          className="h-[2px] bg-gradient-to-r from-electric to-electric-light origin-left"
          style={{ scaleX: scrollProgress }}
        />
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
                {/* Mobile Logo */}
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-navy flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold font-heading text-navy dark:text-white leading-tight">
                        SREE MANIKANTA
                      </p>
                      <p className="text-[9px] text-gray-500 leading-tight">
                        CABLES AND CONDUCTORS
                      </p>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800"
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
                            className="flex items-center justify-between w-full px-3 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
                                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:text-navy dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    >
                                      <ChevronRight className="w-3 h-3" />
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
                          className={cn(
                            "flex items-center px-3 py-3 rounded-xl text-sm font-medium transition-colors",
                            isActive(item.href)
                              ? "text-navy dark:text-white bg-navy/5 dark:bg-navy/20"
                              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                          )}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                    );
                  })}
                </div>

                {/* Mobile CTA */}
                <div className="mt-8 space-y-3">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="destructive" fullWidth className="rounded-xl">
                      <Phone className="w-4 h-4" />
                      Get a Quote
                    </Button>
                  </Link>
                  <div className="text-center text-xs text-gray-400">
                    {COMPANY_INFO.phone}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
