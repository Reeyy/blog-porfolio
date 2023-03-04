/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1f1f1f',
        primary: '#ffffff',
        highlight: {
          dark: '#FFFFFF',
          light: '#1f1f1f',
        },
        secondary: {
          dark: '#242424',
          light: '#e6e6e6',
        },

        action: '#3B82F6',
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
