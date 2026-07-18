import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", foreground: "var(--foreground)", heading: "var(--heading)", accent: "var(--accent)", card: "var(--card)", border: "var(--border)", muted: "var(--muted)",
      },
      fontFamily: { sans: ['var(--font-satoshi)', 'Inter', 'Arial', 'sans-serif'], display: ['var(--font-playfair)'] },
      maxWidth: { container: "var(--container-width)" },
      borderRadius: { brand: "var(--border-radius)" },
      boxShadow: { soft: "0 24px 80px rgba(4, 1, 18, 0.08)" },
    },
  },
  plugins: [],
};
export default config;
