"use client"

import { createTheme } from "@mui/material/styles"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
})

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h1Alt: React.CSSProperties;
    h2Alt: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h1Alt?: React.CSSProperties;
    h2Alt?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1Alt: true;
    h2Alt: true;
  }
}

let theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: poppins.style.fontFamily,
    h1: {
      fontSize: '3.815rem',
      fontWeight: 400,
    },
    h1Alt: {
      background: "var(--primary-gradient)",
      backgroundClip: "text",
      color: "transparent",
      fontFamily: poppins.style.fontFamily,
      fontSize: '5.61rem',
      fontWeight: 700,
      letterSpacing: '-0.01562em',
      lineHeight: 1.167,
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '3.052rem',
      fontWeight: 400,
    },
    h2Alt: {
      background: "var(--primary-gradient)",
      backgroundClip: "text",
      color: "transparent",
      fontFamily: poppins.style.fontFamily,
      fontSize: '4.209rem',
      fontWeight: 400,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '2.441rem',
      fontWeight: 400,
    },
    h4: {
      fontSize: '1.953rem',
    },
    h5: {
      fontSize: '1.563rem',
    },
    h6: {
      fontSize: '1.25rem',
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
    MuiLink: {
      styleOverrides: {
        root: {
          background: "var(--primary-gradient)",
          backgroundClip: "text",
          color: "transparent",
          fontWeight: 400,
          textDecoration: 'none',
          '&:hover, &:focus': {
            textDecoration: 'underline',
            textDecorationColor: "var(--clr-love)",
          }
        }
      }
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
