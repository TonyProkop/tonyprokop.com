"use client"
import { Poppins } from "next/font/google"
import { createTheme } from "@mui/material/styles"

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
})

const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
    h1: {
      fontSize: 48,
      fontWeight: 500,
    },
    h2: {
      background: "var(--primary-gradient)",
      backgroundClip: "text",
      color: "transparent",
      fontSize: '40px',
      fontWeight: 900
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
    MuiButton: {
      styleOverrides: {
        root: {
          "&&": {
            boxShadow: "none",
            borderRadius: 400,
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "var(--clr-text)",
            fontWeight: 300,
            textTransform: "none",
            padding: "24px 32px",
            "&:hover, &:active": {
              backgroundColor: "#455CE9",
              boxShadow: "inherit",
              border: "inherit",
              color: "var(--clr-text)",
            },
          },
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          gap: 16,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--clr-surface)",
          color: "var(--clr-text)",
          borderRadius: "20px",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "24px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
    },
  },
})

export default theme
