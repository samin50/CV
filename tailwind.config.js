/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./*.{html,js,ts,jsx}",
    "./node_modules/flowbite/**/*.js"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        primary: "Raleway",
      },
      fontFamily: {
        secondary: "Raleway_2",
      },
      fontFamily: {
        tertiary: "Raleway_3",
      },
      width: {
        a4: '210mm',
      },
      height: {
        a4: '594mm',
      },
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          h1: {
            fontSize: theme("fontSize.3xl"),
          },
        },
      },
    }),
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  important: false,
};

