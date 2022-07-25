/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        primary_background: '#9EC639',
        text_color: '#696969',
        darkGrayishBlue: 'hsl(227,12%,61%)',
        lightRed:'#FF0000',
        
      }
    },
  },
  plugins: [],
}
