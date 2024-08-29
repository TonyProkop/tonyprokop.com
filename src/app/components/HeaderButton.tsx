import { FC } from "react"
import { Button, ButtonProps } from "@mui/material"
import useMagnetic from "../../hooks/useMagnetic"

const HeaderButton: FC<ButtonProps> = ({ children, onClick, sx }) => {
  const ref = useMagnetic(50, 25)

  return (
    <Button
      ref={ref}
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
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default HeaderButton
