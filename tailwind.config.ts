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
      colors: colors,
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
