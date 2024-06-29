/** @type {import('tailwindcss').Config} */
// import logo from './src/Assets/habot-logo.jpg'
module.exports = {
   content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
        colors: {
          customGreen: 'rgba(0, 115, 47, 1)',
          frameButton:'rgba(235, 113, 80, 1)',
          frameButtonText:'rgba(255, 255, 255, 1)',
         },
        fontFamily: {
        poppins: ['Poppins'],
        inter:['Inter']
      },
    },
  },
  plugins: [],
}

