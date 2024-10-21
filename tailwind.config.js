/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily:{
        venky:[
          "Public Sans", 'sans-serif'
        ]
      }
    },
  },
  plugins: [],
}

