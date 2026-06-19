/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0d0d0d',
        'card-bg': '#181818',
        'accent-red': '#ff3b2f',
        'accent-red-hover': '#e02e24',
        'accent-red-light': '#ff5a5a',
        'accent-purple': '#8a2be2',
        'accent-gold': '#ffc400',
        'border-default': '#2a2a2a',
        'border-subtle': '#222222',
        'border-card': '#2f2f2f',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        barlow: ['"Barlow Condensed"', 'Rajdhani', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
      }
    },
  },
  plugins: [],
}


