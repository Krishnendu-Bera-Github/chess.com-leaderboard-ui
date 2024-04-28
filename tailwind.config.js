/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customWhite: "#dfdfde",
        fillColor: "#242322",
      },
    },
  },
  plugins: [],
};
