/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        '1point5': '1.5px',
      },
    },
  },
  plugins: [],
};
