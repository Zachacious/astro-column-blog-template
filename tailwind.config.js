/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  darkMode: 'class',
  important: true,
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primarydark: '#12171a',
        secondarydark: '#242e35',
        textaccent: '#84a98c',
        textdark: '#bfd3be',
        accent: '#0B6E4F',
        boom: '#9792E3',
        boomdark: '#2CDA9D',
        boomred: '#C95D63',
        boomblue: '#7D82B8',
        // boomred: '#D64550',
        tertiary: '#222255',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
