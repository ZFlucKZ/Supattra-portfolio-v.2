import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  corePlugins: {
    preflight: false,
  },

  theme: {
    screens: {
      sm: "450px",
      md: "744px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      "black-80": "#373535",
      "black-70": "#525252",
      "grey-60": "#878787",
      "grey-50": "#A0A0A0",
      "grey-40": "#BABABA",
      "grey-30": "#DBDBDB",
      "grey-20": "#F5F5F5",
      "white-10": "#FCFCFC",
    },
    fontSize: {
      "header-1": "60px",
      "header-2": "52px",
      "sub-header-1": "40px",
      "sub-header-2": "32px",
      "paragraph-1": "24px",
      "paragraph-2": "20px",
      "body-1": "16px",
      "body-2": "12px",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },

    extend: {},
  },

  plugins: [],
};

export default config;
