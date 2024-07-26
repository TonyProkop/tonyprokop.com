import { ReactNode, FC } from "react"
import { Box } from "@mui/material"

type HeaderButtonProps = {
  children: ReactNode
  onClick?: () => void
}

const HeaderButton: FC<HeaderButtonProps> = ({ children, onClick }) => {
  return (
    <Box
      component="button"
      sx={{
        display: "grid",
        placeItems: 'center',
        borderRadius: "50%",
        backgroundColor: "var(--clr-overlay)",
        padding: '20px',
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  )
}

export default HeaderButton
