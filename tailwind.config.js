module.exports = {
  purge: ["./**/*.html", "./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
    },
    flex: {
      1: "1 1 0%",
      2: "2 2 0%",
      3: "3 3 0%",
      4: "4 4 0%",
    },
    extend: {},
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  variants: {},
  plugins: [],
};
