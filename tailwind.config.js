/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ Habilita el modo oscuro basado en la clase "dark"
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // ✅ Incluye archivos HTML y JSX para que Tailwind detecte las clases usadas
  theme: {
    extend: {
      colors: {
        customWhite: "#ffffff",
        customDark: "#242424",
      },
    },
  },
  plugins: [],
};