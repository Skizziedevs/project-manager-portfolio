/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '1024px',
      lg: '1920px'
    },
    extend: {
      colors: {
      
     },
    },
  },
  plugins: [],
}
