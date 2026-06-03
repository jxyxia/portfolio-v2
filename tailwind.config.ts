import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["DM Serif Display", "serif"],
        mono: ["DM Mono", "monospace"],
        sans: ["Syne", "sans-serif"],
      },
      colors: {
        bg: "#080808",
        surface: "#111111",
        ink: "#f0ede8",
        ink2: "#a0a0a0",
        ink3: "#555555",
        border: "#222222",
      },
    },
  },
  plugins: [],
};

export default config;
