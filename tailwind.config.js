/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/components/todo/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'todo-header-day': "url('/public/img/header-day.jpg')",
        'todo-header-afternoon': "url('/public/img/header-afternoon.jpg')",
        'todo-header-night': "url('/public/img/header-night.jpg')",
      }
    },
  },
  plugins: [],
}