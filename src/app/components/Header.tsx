import { FC } from "react"
import { Stack } from "@mui/material"
import Menu from "./Menu"
import HeaderButton from "./HeaderButton"
import Volume from "./Volume"
import Monitor from "./Monitor"
import Sun from "./Sun"
import Moon from "./Moon"

type HeaderProps = {
  theme: string
  toggleTheme: () => void
}

const Header: FC<HeaderProps> = ({ theme, toggleTheme }) => {
  console.log(window.matchMedia("(prefers-color-scheme:dark)").matches)
  console.log(window.matchMedia("(prefers-color-scheme:light)").matches)

  return (
    <header>
      <Stack
        direction="row"
        gap={2}
        justifyContent="flex-end"
        paddingInline={4}
        paddingTop={4}
        sx={{ backgroundColor: "var(--clr-surface)" }}
      >
        <HeaderButton>
          <Volume />
        </HeaderButton>
        <HeaderButton onClick={toggleTheme}>
          {theme === "light" && <Sun />}
          {theme === "dark" && <Moon />}
          {theme === "" && <Monitor />}
        </HeaderButton>
        <HeaderButton>
          <Menu />
        </HeaderButton>
      </Stack>
    </header>
  )
}

export default Header
