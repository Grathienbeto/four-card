/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      guide_red: "hsl(0, 78%, 62%)",
      guide_cyan: "hsl(180, 62%, 55%)",
      guide_orange: "hsl(34, 97%, 64%)",
      guide_blue: "hsl(212, 86%, 64%)",
      guide_n_darkblue: "hsl(234, 12%, 34%)",
      guide_n_grayblue: "hsl(229, 6%, 66%)",
      guide_n_lightgray: "hsl(0, 0%, 98%)",
    },
    fontFamily: {
      guide: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
