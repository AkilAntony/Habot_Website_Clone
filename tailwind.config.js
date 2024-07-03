/** @type {import('tailwindcss').Config} */

module.exports = {
   content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
        colors: {
          customGreen: 'rgba(0, 115, 47, 1)',
          sandyBrown:'rgba(235, 113, 80, 1)',
          // frameButtonText:'rgba(255, 255, 255, 1)',
          videoContainer:'rgba(7, 47, 87, 1)',
          customBrown:' rgba(231, 118, 13, 1)',
         },
        width: {
          '400p': '400px',
          '117.94':'117.94px',
          '1512':'1512px',
          '317':'317px',
          '620':'620px',
          '120':'120px',
          '541':'541px',
          '260':'260px'
        },
        height:{
          '54':'54px',
          '609':'609px',
          '244':'244px',
          "65":"65px",
          '120':'120px',
        },
        borderRadius:{
          '5':'5px',
        },
        fontSize:{
          '15.13':'15.13px',
          '55': '55px',
          '18':'18px',
          '37.34':'37.34px',
          '17.16':'17.16px',
          '18.75':'18.75px',
        },
        fontFamily: {
        poppins: ['Poppins'],
        inter:['Inter']
      },
      backgroundImage:{
       'logo': "url('/Assets/habot-logo.jpg')",
      //  'banner': "url('/Assets/banner.svg')",
      },
      lineHeight:{
        '66':'66px',
      }
    },
  },
  plugins: [],
}

