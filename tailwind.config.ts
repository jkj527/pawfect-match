import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        jet: "#1E1F1E",
        softBlue: "#90e0f3",
        ashGray: "#aab2a9",
        roseQuartz: "#b08ea2",
        cerulean: "#2978a0",
      },
      fontFamily: {
        header: "var(--font-montserrat), sans-serif",
        body: "var(--font-montserrat), sans-serif",
      },
      fontWeight: {
        light: "300",
        regular: "400",
      },
    },
  },
  plugins: [],
} satisfies Config;
