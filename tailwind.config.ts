import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        magma: {
          black: "#050403",
          charcoal: "#11100E",
          orange: "#FF6A00",
          red: "#C32616",
          gold: "#F5A623",
          ember: "#FF3B1F",
          green: "#0F6B3A",
          cream: "#FFF4E2",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        heading: ["var(--font-heading)", "Arial Narrow", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        ember: "0 0 40px -8px rgba(255,106,0,0.55)",
        "ember-lg": "0 0 80px -10px rgba(255,59,31,0.45)",
      },
      keyframes: {
        flicker: {
          "0%,100%": { opacity: "1" },
          "45%": { opacity: "0.86" },
          "70%": { opacity: "0.94" },
        },
        floatUp: {
          "0%": { transform: "translateY(8px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        flicker: "flicker 5s ease-in-out infinite",
        floatUp: "floatUp 0.7s ease-out both",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
