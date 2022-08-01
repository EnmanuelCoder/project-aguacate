const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "primary": "#1a4a09",
      "secondary": "#3f3d56",
      "white": "#ffffff",
      colors

    },
    fontFamily: { 
      roboto: ["'Roboto', sans-serif"],
    },
    extend: {
      
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}