/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}",
    "./src/**/*"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg_image': "url('./assets/welcome_bg.png')",
      },
      colors: {
        'blue': '#0E80BF',
        'purple': '#6B40E3',
        'border':'#BCBCBC',
        'bg_button':'#62A1EB'
      }
    },
  },
  plugins: [],
}