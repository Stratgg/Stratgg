/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  daisyui: {
    themes: [
      {
          mytheme: {
          
 "primary": "#00162D",
          
 "secondary": "#2E435C",
          
 "accent": "#88EFF7",
          
 "neutral": "#1d283a",
          
 "base-100": "#0f1729",
          
 "info": "#0ca6e9",
          
 "success": "#2bd4bd",
          
 "warning": "#f4c152",
          
 "error": "#fb6f84",
    
          },
        },
    ]
  },
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      valorantRed: '#FF4655',
      valorantGrey: '##0F1822',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

