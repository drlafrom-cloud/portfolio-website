import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dental: {
          dark: "#0b1329",
          cardDark: "#111c38",
          paper: "#fbfcfd",
          paperWarm: "#f4f6f9",
          ink: "#0f172a",
          muted: "#475569",
          accent: "#2563eb",
          accentHover: "#1d4ed8",
          gold: "#c2933d",
          border: "#e2e8f0",
        },
      },
      fontFamily: {
        serif: ["Erode", "Georgia", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

