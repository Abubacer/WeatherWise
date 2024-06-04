/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('./img/bg-1.png')",
      },
      colors: {
        primary: '#1c80f2',
        secondary: '#82e4f8',
        accent: '#ffc20a',
        background: '#fbfdff',
        textPrimary: '#021227',
      },
    },
  },
  plugins: [],
}

