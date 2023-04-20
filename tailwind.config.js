/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["JetBrains Mono", "monospace"],
        dancingScript: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
  darkMode: "class"
};
