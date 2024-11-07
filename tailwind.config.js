/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tab': '460px',
        // => @media (min-width: 640px) { ... }
        'laptop': '800px',
        // => @media (min-width: 1280px) { ... }
      },
    },

  },
  plugins: [
    require('daisyui'),
  ],
}

