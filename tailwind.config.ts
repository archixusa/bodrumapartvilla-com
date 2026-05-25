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
          50: "#E3EBFB",
          100: "#BFD0F2",
          200: "#95B0E8",
          400: "#6B8FE0",
          600: "#2E5FCC",
          800: "#1B3A8C",
          900: "#122766",
        },
        sand: {
          50: "#FBFAF5",
          100: "#F2EDDC",
          200: "#E5DCC0",
        },
        accent: {
          400: "#E8A547",
          500: "#B57828",
          600: "#884F18",
        },
        muted: "#5F6B7A",
        ink: "#1A2434",
        success: "#0F6E56",
        warning: "#B57828",
        danger: "#A32D2D",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "sans-serif"],
      },
      borderRadius: {
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)",
        cardHover:
          "0 10px 25px -3px rgb(18 39 102 / 0.12), 0 4px 10px -2px rgb(18 39 102 / 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
