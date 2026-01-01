/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        tomorrow: ['Poppins', 'sans-serif'],
        mulish: ['Poppins', 'sans-serif'],
      },
      colors: {
        CBlue: '#0C55AC',
        CDarkBlue: '#1F366A',
        CLightBlue: '#14A0B5',
        CGreen: '#047342',
        CPurple: '#783E6C',
        CYellow: '#FDDD7F',
        CGray: '#B5B5B5',
        CPink: '#E4AEB3',
      },
    },
  },
  plugins: [],
};
