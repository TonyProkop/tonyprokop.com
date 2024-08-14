import { forwardRef, ForwardedRef } from 'react'
import { ButtonProps } from '@mui/material'
import Link from "next/link"
import MagneticButton from "./MagneticButton"

const PrimaryButton = forwardRef(function PrimaryButton({ children, sx, ...props }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
  return (
    <MagneticButton
      component={props.href ? Link : 'button'}
      sx={{
        "&&": {
          background: "var(--primary-gradient)",
          border: "none",
          color: "var(--clr-base)",
          outline: "none",
          display: "grid",
          placeItems: "center",
          width: "200px",
          height: "200px",
          borderRadius: "200px",
          zIndex: 1,
          fontWeight: "medium",
          "&:hover": {
            color: "var(--clr-base)",
          },
        },
        ...sx,
      }}
      {...props}
      ref={ref}
    >
      {children}
    </MagneticButton>
  )
})

export default PrimaryButton
