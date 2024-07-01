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
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(2px)',
          border: '1px solid #E3E4E8',
          borderRadius: '8px',
          boxShadow: '0px 40px 32px rgba(0,0,0,0.02),0px 22px 18px rgba(0,0,0,0.03),0px 12px 10px rgba(0,0,0,0.03),0px 7px 5px rgba(0,0,0,0.04),0px 3px 2px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.05)'
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px'
        }
      }
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
    },
  },
});

export default theme;
