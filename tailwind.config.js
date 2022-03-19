const defaultTheme = require("tailwindcss/defaulttheme")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      title: ['"Open Sans"'],
      misc: ["IBM Plex Mono", "monospace"],
    },
    screens: {
      ...defaultTheme.screens,
      sm_576: "576px",
      scr_931: "931px",
      "2xlm": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xlm: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      lgm: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      scr_931m: { max: "931px" },
      // => @media (max-width: 931px) { ... }
      mdm: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      smm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      smmm: { max: "512px" },
      // => @media (max-width: 512px) { ... }
    },
  },
  plugins: [],
}
