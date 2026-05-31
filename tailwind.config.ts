import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        paper: "var(--paper)",
        pink: "var(--pink)",
        volt: "var(--volt)",
        violet: "var(--violet)",
        ghost: "var(--ghost)",
        smoke: "var(--smoke)",
      },
      fontFamily: {
        display: ["var(--font-bangers)", "cursive"],
        sub: ["var(--font-black-han)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        marker: ["var(--font-marker)", "cursive"],
      },
      boxShadow: {
        sticker: "4px 4px 0px 0px var(--ink)",
        "sticker-pink": "6px 6px 0px 0px var(--pink)",
        "sticker-lg": "8px 8px 0px 0px var(--ink)",
      },
      fontSize: {
        hero: ["clamp(72px, 12vw, 180px)", { lineHeight: "0.85" }],
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        blob: {
          "0%, 100%": {
            borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%",
          },
          "50%": {
            borderRadius: "59% 41% 38% 62% / 56% 63% 37% 44%",
          },
        },
      },
      animation: {
        "marquee-left": "marquee-left 28s linear infinite",
        "marquee-right": "marquee-right 28s linear infinite",
        blob: "blob 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
