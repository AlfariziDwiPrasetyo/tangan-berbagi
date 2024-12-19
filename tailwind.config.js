/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add your own content paths here, e.g., your pages and components
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", // Keep dark mode if you want it
  plugins: [], // Remove the nextui plugin
};
