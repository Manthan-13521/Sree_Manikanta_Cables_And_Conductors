import { type Variants, type Transition } from "framer-motion";

/* ── Duration tokens ── */
export const DURATION = {
  fast: 0.2,
  normal: 0.35,
  slow: 0.5,
  xslow: 0.7,
} as const;

/* ── Easing tokens ── */
export const EASE = {
  standard: [0.25, 0.1, 0.25, 1],
  out: [0, 0, 0.2, 1],
  in: [0.4, 0, 1, 1],
  inOut: [0.65, 0, 0.35, 1],
  spring: { type: "spring" as const, stiffness: 300, damping: 30 },
  springSnap: { type: "spring" as const, stiffness: 400, damping: 25 },
} as const;

/* ── Default transition ── */
export const defaultTransition: Transition = {
  duration: DURATION.normal,
  ease: EASE.standard,
};

/* ── Fade variants ── */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: defaultTransition },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: defaultTransition },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: defaultTransition },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: defaultTransition },
};

/* ── Scale variants ── */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: defaultTransition },
};

/* ── Stagger container ── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/* ── Card hover ── */
export const cardHover = {
  whileHover: { y: -4, transition: { duration: DURATION.fast, ease: EASE.out } },
};

/* ── Button hover ── */
export const buttonHover = {
  whileHover: { scale: 1.02, transition: { duration: DURATION.fast } },
  whileTap: { scale: 0.98 },
};

/* ── Section reveal ── */
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE.out,
    },
  },
};

/* ── Counter animation ── */
export const counterAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

/* ── Line reveal ── */
export const lineReveal: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: DURATION.slow, ease: EASE.standard },
  },
};

/* ── Viewport options ── */
export const viewportOptions = {
  once: true,
  margin: "-80px" as const,
};

/* ── Helper: create staggered children easily ── */
export function createStaggerChildren(index: number, baseDelay = 0) {
  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: viewportOptions,
    transition: { delay: baseDelay + index * 0.08 },
  };
}