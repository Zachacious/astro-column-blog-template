/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  important: true,
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primarydark: '#1a2125',
        secondarydark: '#242e35',
        textaccent: '#84a98c',
        textdark: '#bfd3be',
        accent: '#0B6E4F',
        boom: '#FFC914',
        tertiary: '#222255',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
