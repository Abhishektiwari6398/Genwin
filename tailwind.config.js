/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "425px", // Custom breakpoint for 425px
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        primary: "#EE313C",
        "090909": "#090909",
        "E6ECF6": "#E6ECF6",
        "f7f4ed": "rgba(243, 246, 251, 0.40)",
        "24242408": "rgba(24, 24, 24, 0.08)",
        "6b72804f": "#6b72804f",
        "F8F8F8": "#F8F8F8",
        "188118": "#181818",
        "D9D9D9": "#D9D9D9",
        "E52D38": "#E52D38",
        "1234556":
          "linear-gradient(180deg, rgba(255, 203, 203, 0.10) 33.7%, rgba(149, 41, 47, 0.83) 79.18%, rgba(123, 3, 10, 0.86) 99.45%)",
      },
      fontSize: {
        12: ["0.75rem", { lineHeight: "1rem" }],
        14: ["0.875rem", { lineHeight: "1.25rem" }],
        16: ["1rem", { lineHeight: "1.5rem" }],
        18: ["1.125rem", { lineHeight: "1.625rem" }],
        20: ["1.25rem", { lineHeight: "1.75rem" }],
        22: ["1.375rem", { lineHeight: "1.875rem" }],
        24: ["1.5rem", { lineHeight: "2rem" }],
        26: ["1.625rem", { lineHeight: "2.125rem" }],
        28: ["1.75rem", { lineHeight: "2.25rem" }],
        30: ["1.875rem", { lineHeight: "2.5rem" }],
        32: ["2rem", { lineHeight: "2.625rem" }],
        34: ["2.125rem", { lineHeight: "2.75rem" }],
        40: ["2.5rem", { lineHeight: "3rem" }],
        48: ["3rem", { lineHeight: "3.5rem" }],
        60: ["3.75rem", { lineHeight: "4.5rem" }],
        72: ["4.5rem", { lineHeight: "5.25rem" }],
        80: ["5rem", { lineHeight: "6rem" }],
        84: ["5.25rem", { lineHeight: "6rem" }],
        96: ["6rem", { lineHeight: "7rem" }],
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out forwards",
        fadeUp: "fadeUp 2s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};