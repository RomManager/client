/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          0: '#1a1a1a',
          1: '#313131',
          2: '#484848',
          3: '#5f5f5f',
          4: '#767676',
          5: '#8d8d8d',
          6: '#a3a3a3',
          7: '#bababa',
          8: '#d1d1d1',
          9: '#e8e8e8',
          10: '#ffffff',
        },
        pink: {
          0: '#750f32',
          1: '#8c123b',
          2: '#a31545',
          3: '#ba814f',
          4: '#d21b59',
          5: '#e91e63',
          6: '#eb3573',
          7: '#ed4b82',
          8: '#f06292',
          9: '#f278a1',
          10: '#f48fb1',
        },
        blue: {
          0: '#294560',
          1: '#315273',
          2: '#396086',
          3: '#426e9a',
          4: '#4a7bad',
          5: '#5289c0',
          6: '#6395c6',
          7: '#75a1cd',
          8: '#86acd3',
          9: '#97b8d9',
          10: '#a9c4e0',
        },
      },
      boxShadow: {
        strong: '0 22px 70px 4px rgba(0, 0, 0, 0.35)',
      },
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
