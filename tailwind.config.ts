import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        heading: "var(--heading)",
        accent: "var(--accent)",
        card: "var(--card)",
        "card-surface": "var(--card-surface)",
        border: "var(--border)",
        "border-subtle": "var(--border-subtle)",
        muted: "var(--muted)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["var(--font-bricolage)", "Bricolage Grotesque", "sans-serif"],
        heading: ["var(--font-bricolage)", "Bricolage Grotesque", "sans-serif"],
      },
      maxWidth: {
        container: "var(--container-width)",
      },
      borderRadius: {
        brand: "var(--border-radius)",
        card: "20px",
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(4, 1, 18, 0.02), 0 6px 16px rgba(4, 1, 18, 0.03)",
        float: "0 12px 36px rgba(4, 1, 18, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
