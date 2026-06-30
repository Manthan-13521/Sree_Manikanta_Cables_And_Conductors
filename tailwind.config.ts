import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B3C74",
          light: "#144A8C",
          dark: "#082A5A",
        },
        electric: {
          DEFAULT: "#D62828",
          light: "#E83E3E",
          dark: "#B81E1E",
        },
        lightgray: "#F8F9FA",
        dark: {
          DEFAULT: "#0F172A",
          lighter: "#1E293B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "soft-lg": "0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 2px 10px -2px rgba(0, 0, 0, 0.05)",
        glow: "0 0 20px rgba(214, 40, 40, 0.3)",
        "glow-blue": "0 0 20px rgba(11, 60, 116, 0.3)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        "slide-left": "slideLeft 0.6s ease-out",
        "slide-right": "slideRight 0.6s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "pulse-soft": "pulseSoft 2s infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 3s linear infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(214, 40, 40, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(214, 40, 40, 0.5)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-navy": "linear-gradient(135deg, #0B3C74 0%, #08222, #144A8C 100%)",
        "gradient-electric": "linear-gradient(135deg, #D62828 0%, #B81E1E 100%)",
        "gradient-glass": "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
        "mesh-gradient": "radial-gradient(at 40% 20%, hsla(220,90%,40%,0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(355,80%,50%,0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(220,90%,40%,0.2) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;