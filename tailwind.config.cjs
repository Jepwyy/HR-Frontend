/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('./assets/images/BG.jpg')",
        sidebar: "url('./assets/images/BG-1.jpg')",
        idbg: "url('./assets/images/idbg1.png')",
      },
    },
  },
  plugins: [],
}
