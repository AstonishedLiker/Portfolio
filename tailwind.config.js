/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      fontSize: {
        'label': '13px',
        'small-title': '20px',
        'card-title': '16px',
        'card-description': '13px',
        'card-link': '11px',
      },
      colors: {
        'card-color': '#e9e9e9',
        'icon-color': '#e3e5ea',
        'button-link-color': '#f0f0f0',
        'image-border-color': '#c9c9c9',
        'button-image-hover-color': '#f7f7f7',
      }
    },
  },
}
