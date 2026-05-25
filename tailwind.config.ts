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
        // Coastal Glass — light glass + deep navy ink + champagne gold
        navy: {
          50: "#EAF0FB",
          100: "#D0DEF5",
          200: "#A6C0EA",
          400: "#6D90DC",
          600: "#3D6FE3",
          800: "#1B3A8C",
          900: "#0A1B3A",
        },
        sand: {
          50: "#FBEFD5",
          100: "#F4E2BD",
          200: "#E5CC8E",
        },
        accent: {
          400: "#E6C896",
          500: "#D9B26E",
          600: "#B08746",
        },
        bg: {
          base: "#FAFCFE",
          soft: "#F2F6FC",
          mesh: "#EAF0FB",
        },
        muted: "#5F7088",
        ink: "#0A1B3A",
        success: "#0F6E56",
        warning: "#B08746",
        danger: "#A32D2D",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "18px",
        xl: "24px",
        "2xl": "32px",
      },
      maxWidth: {
        container: "1240px",
      },
      boxShadow: {
        glass:
          "0 1px 0 0 rgba(255,255,255,0.8) inset, 0 24px 60px -24px rgba(10,27,58,0.18), 0 4px 14px -4px rgba(10,27,58,0.08)",
        glassHover:
          "0 1px 0 0 rgba(255,255,255,0.9) inset, 0 32px 80px -28px rgba(10,27,58,0.28), 0 8px 24px -6px rgba(10,27,58,0.12)",
        glow:
          "0 0 0 1px rgba(217,178,110,0.4), 0 12px 40px -12px rgba(217,178,110,0.5)",
        ring: "0 0 0 1px rgba(255,255,255,0.6) inset",
      },
      backdropBlur: {
        xs: "4px",
      },
      keyframes: {
        meshDrift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "33%": { transform: "translate3d(2%,-1%,0) scale(1.04)" },
          "66%": { transform: "translate3d(-2%,1%,0) scale(0.98)" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        revealUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        meshDrift: "meshDrift 24s ease-in-out infinite",
        floatY: "floatY 6s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
        revealUp: "revealUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
