"use client"

import { createTheme } from "@mui/material/styles"
import { createBreakpoints } from '@mui/system';
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

const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
});

let theme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: poppins.style.fontFamily,
    h1: {
      color: "var(--clr-text)",
      fontSize: 'clamp(2.986rem, 10vw, 7.993rem)',
      fontWeight: 400,
      lineHeight: 1.15,
    },
    h1Alt: {
      background: "var(--primary-gradient)",
      backgroundClip: "text",
      color: "transparent",
      fontFamily: poppins.style.fontFamily,
      fontSize: 'clamp(2.986rem, 10vw, 7.993rem)',
      fontWeight: 600,
      letterSpacing: '-0.01562em',
      lineHeight: 1,
      paddingBottom: '16px',
    },
    h2: {
      color: "var(--clr-text)",
      fontSize: 'clamp(2.488rem, 8vw, 5.653rem)',
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h2Alt: {
      background: "var(--primary-gradient)",
      backgroundClip: "text",
      color: "transparent",
      fontFamily: poppins.style.fontFamily,
      fontSize: 'clamp(2.488rem, 8vw, 5.653rem)',
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h3: {
      color: "var(--clr-text)",
      fontSize: 'clamp(2.074rem, 8vw, 3.998rem)',
      fontWeight: 400,
      lineHeight: 1.3,
    },
    h4: {
      color: "var(--clr-text)",
      fontSize: 'clamp(1.728rem, 3.5vw, 2.827rem)',
      fontWeight: 300,
      lineHeight: 1.3,
    },
    h5: {
      color: "var(--clr-text)",
      fontSize: 'clamp(1.44rem, 8vw, 1.999rem)',
      fontWeight: 300,
      lineHeight: 1.3,
    },
    h6: {
      color: "var(--clr-text)",
      fontSize: 'clamp(1.2rem, 8vw, 1.414rem)',
      fontWeight: 300,
      lineHeight: 1.3,
    },
    body1: {
      color: "var(--clr-text)",
      fontWeight: 300,
      fontSize: "18px",
      lineHeight: 1.6,
    },
    body2: {
      color: "var(--clr-text)",
      fontWeight: 300,
      fontSize: "18px",
      lineHeight: 1.6,
    },
  },

  breakpoints,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&&": {
            boxShadow: "none",
            borderRadius: 400,
            border: "1px solid var(--clr-muted)",
            color: "var(--clr-text)",
            fontWeight: 400,
            textTransform: "none",
            padding: "24px 32px",
            "&:hover, &:active": {
              border: "1px solid var(--clr-subtle)",
              backgroundColor: "var(--clr-overlay)",
              color: "var(--clr-text)",
            },
            [breakpoints.down('sm')]: {
              padding: "16px 24px",
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
          alignItems: "center",
          backgroundColor: "var(--clr-overlay)",
          minWidth: "30vw",
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
    MuiList: {
      defaultProps: {
        dense: true,
      },
    },
    MuiListItem: {
      defaultProps: {
        alignItems: "flex-start",
      },
      styleOverrides: {
        root: {
          maxWidth: '750px'
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          marginTop: '8px',
          minWidth: "40px",
          svg: {
            height: "auto",
            width: "20px",
          },
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
          fontWeight: 400,
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
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          marginTop: '1rem',
          '&:first-child': {
            marginTop: 0,
          },
          '&.MuiTypography-h1, &.MuiTypography-h2, &.MuiTypography-h3, &.MuiTypography-h4, &.MuiTypography-h5, &.MuiTypography-h6': {
            marginTop: '2rem',
            '&:first-child': {
              marginTop: 0,
            }
          },
        }
      }
    }
  },
})

export default theme
