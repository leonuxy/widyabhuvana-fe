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
        bgBlue: '#D3E3FB',
        textPrimary: '#1A435B',
      }
    }
  },
  plugins: [],
}

