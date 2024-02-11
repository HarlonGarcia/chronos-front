/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        snow: '#FFFBFA',
        moss: '#031926',
        primary: '#00BD9D',
        secondary: '#008478',
        error: '#ff6666',
      },
      fontFamily: {
        sans: ['SourceSans3', 'monospace'],
        qs: ['Quicksand', 'sans-serif'],
      },
    },
    screens: {
      xs: '576px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
  },
  plugins: [],
};
