/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.svelte'
  ],
  theme: {
    extend: {
      screens:{
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      colors:{
        spotifyGreen: '#1DB954'
      }
    },
  },
  plugins: [],
}
