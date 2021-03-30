module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#FF8200',
        'secondary': '#0083B3',
        'danger': '#FFA545',
      }

    ),
    screens: {
      'xsm': '280px',
      'sm': '481px',
      'md': '769px',
      'lg': '1025px',
      'xl': '1280px',

    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}