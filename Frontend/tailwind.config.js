/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkModeL:"class",
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

