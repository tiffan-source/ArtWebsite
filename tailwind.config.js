/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Playfair Display', 'serif'],
      },
      colors: {
        'primary': '#333',
      },
      backgroundImage: {
        'header-cover': "url('/src/assets/images/headerimage.svg')",
      }
    },
  },
  plugins: [],
};
