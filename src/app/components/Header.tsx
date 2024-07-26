"use client"

import { FC } from "react"
import { Stack } from "@mui/material"
import Menu from "./Menu"
import HeaderButton from "./HeaderButton"
import Volume from "./icons/Volume"
import Monitor from "./icons/Monitor"
import Sun from "./icons/Sun"
import Moon from "./icons/Moon"

type HeaderProps = {
  theme: string
  toggleTheme: () => void
}

const Header: FC<HeaderProps> = ({ theme, toggleTheme }) => {
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
        <Menu />
      </Stack>
    </header>
  )
}

export default Header
