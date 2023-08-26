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
        'secondary':'#8C8C8C',
        'tertiary': '#E0E0E0'
      },
      backgroundImage: {
        'header-cover': "url('/src/assets/images/headerimage.svg')",
        'contact-cover': "url('/src/assets/images/contact.svg')",
        'artist-cover': "url('/src/assets/images/ourArtist.svg')",
        'discover-cover': "url('/src/assets/images/discover.svg')"
      },
      flexBasis: {
        'default':'40rem'
      },
      maxWidth: {
        '6xl2': '1200px'
      },
      borderWidth: {
        '1': '1px'
      },
      gridTemplateColumns: {
        'gallery': 'repeat(auto-fit, 25rem)'
      }
    },
  },
  plugins: [],
};
