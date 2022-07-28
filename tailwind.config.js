const colors = require("tailwindcss/colors");

// blueGray, coolGray, gray, trueGray, warmGray
// red, orange, amber, yellow
// lime, green, emerald, teal
// cyan, lightBlue, blue, indigo
// violet, purple, fuchsia, pink, rose

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.rose,
      },
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/forms")],
};
