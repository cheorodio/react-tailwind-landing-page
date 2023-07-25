/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red: 'hsl(7, 99%, 70%)',
        lightRed: 'hsla(7, 99%, 70%, 0.3)',
        yellow: 'hsl(51, 100%, 49%)',
        lightYellow: 'rgba(255, 247, 0, 0.5)',
        cyan: 'hsl(167, 40%, 24%)',
        blue: 'hsl(198, 62%, 26%)',
        lightCyan: 'hsl(168, 34%, 41%)',
        footerBg: '#8FD4C5',
        darkBlue: 'hsl(212, 27%, 19%)',
        darkGrayBlue: 'hsl(213, 9%, 39%)',
        grayBlue: 'hsl(232, 10%, 55%)',
        lightGrayBlue: 'hsl(210, 4%, 67%)',
      },
      fontFamily: {
        fraunces: ['Fraunces'],
        barlow: ['Barlow'],
      },
    },
  },
  plugins: [],
};
