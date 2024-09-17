'use client'

import { Button, ButtonProps } from '@mui/material'
import Link from "next/link"
import useMagnetic from '../../hooks/useMagnetic'

const PrimaryButton = ({ children, sx, ...props }: ButtonProps) => {
  const ref = useMagnetic()

  return (
    <Button
      ref={ref}
      component={props.href ? Link : 'button'}
      sx={{
        "&&": {
          background: "var(--primary-gradient)",
          border: "none",
          color: "var(--clr-base)",
          outline: "none",
          display: "grid",
          placeItems: "center",
          width: "clamp(125px, 20vw, 200px)",
          height: "clamp(125px, 20vw, 200px)",
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
      <span className="btn-text">{children}</span>
    </Button>
  )
}

export default PrimaryButton
