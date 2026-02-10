module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#d9e0ef',
          200: '#b3c1df',
          300: '#8da2cf',
          400: '#6783bf',
          500: '#4164af',
          600: '#34508c',
          700: '#273c69',
          800: '#1a2846',
          900: '#0d1423',
          950: '#060a11',
        },
        gold: {
          50: '#fdf9ef',
          100: '#faf0d4',
          200: '#f4dfa8',
          300: '#eecb72',
          400: '#e8b440',
          500: '#d4982a',
          600: '#b87a1f',
          700: '#995c1c',
          800: '#7d4a1d',
          900: '#683d1b',
        },
        charcoal: {
          50: '#f6f7f8',
          100: '#ebedef',
          200: '#d3d7dc',
          300: '#adb4be',
          400: '#818c9b',
          500: '#636f80',
          600: '#4f596a',
          700: '#414a57',
          800: '#383f4a',
          900: '#323840',
          950: '#21252b',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}