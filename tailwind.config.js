/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customGray: '#999999',
      },
      borderRadius: {
        '30px': '38px',
      },
    },
  },
  plugins: [require('daisyui'),],
}