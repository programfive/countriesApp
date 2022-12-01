/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        DarkBlue: `hsl(209, 23%, 22%)`,
        DarkBackground: 'hsl(207, 26%, 17%)', //(Dark Mode Background)
        lightText: `hsl(200, 15%, 8%)`, //lightText
        lightInput: `hsl(0, 0%, 52%)`, //lightInput
        lightBackground: ` hsl(0, 0%, 98%)`, //lightBackground
        whiteElements: `hsl(0, 0%, 100%)` // whiteElements
      },
      screens: {
        'sm': {
          'max': '730px'
        }, // => @media (max-width: 639px) { ... }
        'sms': {
          'max': '300px'
        }, // => @media (max-width: 300px) { ... }
        'lsm': {
          'max': '920px'
        }, // => @media (max-width: 890px) { ... }


      }
    },
  },
  plugins: [],
}