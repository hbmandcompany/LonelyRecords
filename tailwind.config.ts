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
        blood: "var(--blood)",
        void: "var(--void)",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        sub: ["var(--font-black-han)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        marker: ["var(--font-black-han)", "sans-serif"],
      },
      boxShadow: {
        sticker: "4px 4px 0px 0px rgba(225, 6, 0, 0.4)",
        "sticker-pink": "0 0 28px rgba(225, 6, 0, 0.55), 4px 4px 0px 0px var(--pink)",
        "sticker-lg": "6px 6px 0px 0px rgba(225, 6, 0, 0.5)",
        rage: "0 0 60px rgba(225, 6, 0, 0.35)",
      },
      fontSize: {
        hero: ["clamp(72px, 12vw, 180px)", { lineHeight: "0.85" }],
      },
      letterSpacing: {
        rage: "0.12em",
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
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.92" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 28s linear infinite",
        "marquee-right": "marquee-right 28s linear infinite",
        blob: "blob 10s ease-in-out infinite",
        flicker: "flicker 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
