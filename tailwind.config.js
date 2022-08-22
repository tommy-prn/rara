module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      lineHeight: {
        loose: '2.2rem',
      },
      blur: {
        xs: '2px',
      },
      colors: {
        'gray-70': '#f7f7f7',
      },
    },
  },
  plugins: [],
};
