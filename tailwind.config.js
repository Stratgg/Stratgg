/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
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
    
    extend: {},
  },
  plugins: [require("daisyui")],
}

