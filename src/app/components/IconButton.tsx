import { FC } from "react"
import { IconButton as MuiIconButton, IconButtonProps } from "@mui/material"

const IconButton: FC<IconButtonProps> = ({ children, onClick, sx }) => {
  return (
    <MuiIconButton
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
            border: 'none',
          }
        },
        ...sx,
      }}
      onClick={onClick}
    >
      {children}
    </MuiIconButton>
  )
}

export default IconButton
