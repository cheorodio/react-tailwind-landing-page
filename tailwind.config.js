/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red: 'hsl(7, 99%, 70%)',
        yellow: 'hsl(51, 100%, 49%)',
        cyan: 'hsl(167, 40%, 24%)',
        blue: 'hsl(198, 62%, 26%)',
        lightCyan: 'hsl(168, 34%, 41%)',
      },
      fontFamily: {
        fraunces: ['Fraunces'],
        barlow: ['Barlow'],
      },
    },
  },
  plugins: [],
};
