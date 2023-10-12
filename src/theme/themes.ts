"use client";

// MUI
import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "rgba(55,53,53,1)",
    },
    mode: "light",
  },
  typography: {
    fontFamily: "'__monaSans_a3ce44', '__monaSans_Fallback_a3ce44'",

    h1: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: 1.5,

      "@media (min-width:744px)": {
        fontSize: "32px",
        fontWeight: 600,
        lineHeight: 1,
      },

      "@media (min-width:1024px)": {
        fontSize: "40px",
        fontWeight: 600,
        lineHeight: 1,
      },

      "@media (min-width:1440px)": {
        fontSize: "60px",
        fontWeight: 700,
        lineHeight: 1,
      },
    },

    h4: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: 1.5,

      "@media (min-width:744px)": {
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: 1.5,
      },

      "@media (min-width:1024px)": {
        fontSize: "24px",
        fontWeight: 500,
        lineHeight: 1.5,
      },

      "@media (min-width:1440px)": {
        fontSize: "40px",
        fontWeight: 600,
        lineHeight: 1,
      },
    },

    h5: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: 1.5,

      "@media (min-width:744px)": {
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: 1.5,
      },

      "@media (min-width:1440px)": {
        fontSize: "20px",
        fontWeight: 500,
        lineHeight: 1,
      },
    },

    h6: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: 1.5,

      "@media (min-width:744px)": {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: 1.5,
      },

      "@media (min-width:1024px)": {
        fontSize: "24px",
        fontWeight: 500,
        lineHeight: 1.5,
      },

      "@media (min-width:1440px)": {
        fontSize: "32px",
        fontWeight: 600,
        lineHeight: 1,
      },
    },

    subtitle1: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: 1.5,

      "@media (min-width:744px)": {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: 1.5,
      },

      "@media (min-width:1024px)": {
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: 1.5,
      },

      "@media (min-width:1440px)": {
        fontSize: "20px",
        fontWeight: 500,
        lineHeight: 1.5,
      },
    },

    body1: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: 1.5,

      "@media (min-width:744px)": {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: 1.5,
      },

      "@media (min-width:1024px)": {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: 1.5,
      },

      "@media (min-width:1440px)": {
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: 1.5,
      },
    },

    body2: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: 1.5,

      "@media (min-width:1024px)": {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: 1.5,
      },

      "@media (min-width:1440px)": {
        fontSize: "20px",
        fontWeight: 400,
        lineHeight: 1.5,
      },
    },
  },
});
