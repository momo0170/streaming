/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        1.5: '1.5px',
      },
      boxShadow: {
        'input-inner': 'inset 0 0 0 0 #7c3aed',
      },
    },
  },
  plugins: [],
};
