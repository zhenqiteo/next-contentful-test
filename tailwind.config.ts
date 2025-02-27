import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import { colors } from "./lib/colors";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        ...colors,
        primary: {
          DEFAULT: "#00205B", // Deep blue
          light: "#35AFE6",
          dark: "#00205B",
        },
        secondary: {
          DEFAULT: "#059669", // Emerald green
          light: "#10B981",
          dark: "#047857",
        },
        border: {
          light: "#E5E7EB",
          DEFAULT: "#D1D5DB",
          dark: "#9CA3AF",
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
  variants: {
    scrollbar: ["rounded"],
  },
} satisfies Config;
