/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        success: 'var(--color-success)',
        darkPrimary: 'var(--color-dark-primary)',
        white: 'var(--color-white)',
        darkWhite: 'var(--color-dark-white)',
        yellow: 'var(--color-yellow)',
        midnightBlue: 'var(--color-midnight-blue)',
        offWhite: 'var(--color-off-white)',
        deepSeaBlue: 'var(--color-deep-sea-blue)',
        lightGrey: 'var(--color-light-grey)',
        slateBlue: 'var(--color-slate-blue)',
      },
      boxShadow: {
        '3xl': 'O 35px 60px -15px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}
