module.exports = {
  purge: [],
  theme: {
    extend: {
      spacing: {
        "128": "32rem",
      },
    },
  },
  variants: {
    zIndex: ["responsive", "hover", "focus"],
    transitionDuration: ["responsive", "hover", "focus"],
    transitionProperty: ["responsive", "hover", "focus"],
    height: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
