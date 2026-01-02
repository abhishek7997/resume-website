module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm_576: "576px",
        scr_931: "931px",
        "2xlm": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }
        xlm: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
        lgm: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
        scr_864m: "864px",
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
    fontFamily: {
      title: ['"Open Sans"'],
      misc: ["IBM Plex Mono", "monospace"],
    },
    animation: {
      fade: "fadeIn 1s ease-in-out",
    },
    keyframes: (theme) => ({
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    }),
  },
  plugins: [],
}
