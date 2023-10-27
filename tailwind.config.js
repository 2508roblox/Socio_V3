const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {

      },
      colors:{
        'primary-light':'#F2F5FA',
        'primary-dark':'#1A1A1A',
        'secondary-light':'#FFFFFF',
        'secondary-dark':'#282828',
        'btn-yellow': '#FFFD01',
        'btn-blue': '#3B82F6',
        'btn-gray': '#333333',
        'text-light-gray': '#bbbbbb',
        'text-gray': '#9a9a9a',
        'text-yellow': '#FFFD01',
        'text-blue': '#3B82F6',
      },
      
      
    },
  
  },
  darkMode: "class",
  plugins: [ nextui({
    colors: {
      blue: {
        50: "#3B82F6",
        100: "#cce3fd",
        200: "#99c7fb",
        300: "#66aaf9",
        400: "#338ef7",
        500: "#006FEE",
        600: "#005bc4",
        700: "#004493",
        800: "#002e62",
        900: "#001731",
      },
      yellow: {
        50: "#FFFD01",
        
      }
     
    },
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#3B82F6",
          

          },
        }
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: "#FFFD01",
            foreground: '#000000'
          },
        }
        
      },
    },
  }),],
}

