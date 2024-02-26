/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#f5f5d0',
        customGray: '#6c757d',
      },
    },
  },
  plugins: [],
}

