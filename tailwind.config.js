/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        '2xl': '0 0.05rem 0.1rem rgb(0 0 0 / 50%)',
      },
      backgroundColor: {
        primary: 'rgb(33, 37, 41)',
      },
      height: {
        input: 'calc(3.5rem + 2px)',
      },
      padding: {
        input: '1rem 0.75rem',
      },
      maxWidth: {
        heading: '42rem',
      },
    },
    plugins: [],
  },
};
