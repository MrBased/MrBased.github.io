/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        land: 'text 1s ease',
      },
      keyframes: {
        text: {
          '0%': {
            color: 'transparent',
            transform: 'translateY(50%)',
          },
          '100%': {

          },
        },
      },
      colors: {
        'blu': '#0024e7'
      },
    },
  },
  plugins: [],
}
