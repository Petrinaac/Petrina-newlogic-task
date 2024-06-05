/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/Pages/Invoice.jsx",
    "./src/Pages/Order.jsx",
    "./src/Pages/User.jsx",
    "./src/Components/List.jsx",
    "./src/App.jsx"    
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", 'sans-serif']
    },
    extend: {
      screens: {
        '2xl': '1300px'
      }
    },
  },
  plugins: [],
}

