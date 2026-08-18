import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Ei line ta src er sob file ke cover korbe
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
