import { ReactNode } from 'react'
import MagneticButton from "./MagneticButton"
import Link from "next/link"

type PrimaryButtonProps = {
  children: ReactNode;
  href: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, href }) => {
  return (
    <MagneticButton
      component={Link}
      href={href}
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
      }}
    >
      {children}
    </MagneticButton>
  )
}

export default PrimaryButton
