"use client"

import { createTheme } from "@mui/material/styles"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
})

let theme = createTheme({
  typography: {
    fontSize: 18,
    fontFamily: poppins.style.fontFamily,
    h1: {
      background: "var(--primary-gradient)",
      backgroundClip: "text",
      color: "transparent",
      fontSize: "96px",
      fontWeight: 800,
    },
    h2: {
      background: "var(--primary-gradient)",
      backgroundClip: "text",
      color: "transparent",
      fontSize: "48px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "28px",
    },
    body1: {
      color: "var(--clr-text)",
      lineHeight: 1.75,
      fontWeight: 300,
      fontSize: "18px",
    },
    body2: {
      color: "var(--clr-text)",
      lineHeight: 1.75,
      fontWeight: 300,
      fontSize: "18px",
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
              backgroundColor: "var(--clr-overlay)",
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
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--clr-muted)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "var(--clr-overlay)",
        },
        modal: {
          backdropFilter: "blur(10px)",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "var(--clr-iris)",
          left: 0,
          right: "unset",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          alignItems: "flex-start",
          color: "var(--clr-subtle)",
          fontSize: '18px',
          textTransform: 'none',
          "&.Mui-selected": {
            color: "var(--clr-iris)",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        variant: "standard",
        InputLabelProps: {
          shrink: true,
        }
      },
      styleOverrides: {
        root: {
          marginBlock: '32px',
          '.MuiFormLabel-root': {
            transform: 'none',
            position: 'relative',
            '&.Mui-focused': {
              color: 'var(--clr-text)',
            }
          },
          '.MuiInputBase-root': {
            color: 'var(--clr-text)',
            '&:before, &:after': {
              display: 'none',
            }
          }
        },
      },
    }
  },
})

export default theme
