"use client";
import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
    h1: {
      fontSize: 48,
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.75,
      fontWeight: 300,
    },
    body2: {
      lineHeight: 1.75,
      fontWeight: 300,
    },
  },

  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          color: "#fff",
          "&&": {
            borderRadius: "40px",
            border: "none",
            boxShadow: "none",
            textTransform: "none",
          },
          "&&:hover, &&:active": {
            backgroundColor: "inherit",
            boxShadow: "inherit",
            border: "inherit",
            color: "inherit",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {},
        contained: {
          backgroundColor: "#1C1D20",
          color: "#fff",
          outline: "2x solid transparent",
          "&&&:hover": {
            backgroundColor: "#1C1D20",
            color: "#fff",
          },
        },
        outlined: {
          background: "transparent",
          outline: "2px solid #1C1D20",
          color: "#1C1D20",
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          gap: 16,
        },
        firstButton: {
          borderTopRightRadius: "40px",
          borderBottomRightRadius: "40px",
        },
        middleButton: {
          borderRadius: "40px",
        },
        lastButton: {
          borderTopLeftRadius: "40px",
          borderBottomLeftRadius: "40px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
    },
  },
});

export default theme;
