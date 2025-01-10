'use client'

import { Button, ButtonProps } from '@mui/material'
import Link from "next/link"

const PrimaryButton = ({ children, sx, ...props }: ButtonProps) => {
  return (
    <Button
      component={props.href ? Link : 'button'}
      sx={{
        "&&": {
          background: "var(--primary-gradient)",
          border: "none",
          color: "var(--clr-base)",
          outline: "none",
          display: "grid",
          placeItems: "center",
          width: "clamp(165px, 20vw, 200px)",
          height: "clamp(165px, 20vw, 200px)",
          borderRadius: "200px",
          zIndex: 1,
          fontWeight: "medium",
          textAlign: "center",
          "&:hover": {
            color: "var(--clr-base)",
          },
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton
