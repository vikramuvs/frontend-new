module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        bt: "url('../../assets/images/biotech-bkg 1.png')",
        homeBanner: "url('../../assets/images/msrit-campus.jpg')",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        blue: {
          ramaiah: "#361c6a",
        },
        pink: {
          ramaiah: "#992361",
        },
        orange: {
          ramaiah: "#E34A21",
        },
        gray: {
          menu: "#C1B3B0",
          deptHeader: "#E2E2E2",
        },
      },
      fontFamily: {
        body: "Gotham Book",
        heading: "Gotham Bold",
        lightBody: "Gotham Thin Regular",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
