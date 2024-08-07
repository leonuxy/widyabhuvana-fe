/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#3F6AC7',
        secondaryBlue: '#163E81',
        chocolateMain: '#523A3A',
        bgBlue: '#D3E3FB',
        textPrimary: '#1A435B',
        secondaryPurple: '#476BC7',
        bgRed:'#6C2323',
        bgPurple:'#371B8C',
      }
    }
  },
  plugins: [],
}

