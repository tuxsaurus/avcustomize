// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.4xl') },
        h2: { fontSize: theme('fontSize.3xl') },
        h3: { fontSize: theme('fontSize.2xl') },
        h4: { fontSize: theme('fontSize.xl') },
      })
    }),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'emerald',
      {
        mytheme: {
          // custom theme
          primary: '#00ff00',
          'primary-focus': '#d43616',
          'primary-content': '#ffffff',
          // other colors
        },
        myothertheme: {
          // custom theme
          primary: '#007ebd',
          'primary-focus': '#005c8a',
          'primary-content': '#ffffff',
          // other colors
        },
      },
      'dark', // and some pre-defined theme
      'forest',
      'synthwave',
    ],
  },
}
