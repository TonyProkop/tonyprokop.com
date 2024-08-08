import { FC } from "react"
import MagneticButton, { MagneticButtonProps } from "./MagneticButton"

const HeaderButton: FC<MagneticButtonProps> = ({ children, onClick, sx }) => {
  return (
    <MagneticButton
      sx={{
        "&&": {
          display: "grid",
          placeItems: "center",
          borderRadius: "50%",
          border: 'none',
          backgroundColor: "var(--clr-overlay)",
          padding: "20px",
          lineHeight: 0,
          '&:hover': {
            backgroundColor: "var(--clr-overlay)",
          }
        },
        ...sx,
      }}
      strength={15}
      textStrength={25}
      onClick={onClick}
    >
      {children}
    </MagneticButton>
  )
}

export default HeaderButton
