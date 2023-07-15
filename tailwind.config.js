/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    // in the "colors" object we define colors
    // even if the color already exists
    colors: {
      'stratggLightBlue': '#88EFF6',
      'stratggDarkBlue': '#00162D',
      'white': '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
}

