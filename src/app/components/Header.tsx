"use client"

import { Box, Stack } from "@mui/material"
import Menu from "./Menu"
import HeaderButton from "./HeaderButton"
import Volume from "./icons/Volume"
import Monitor from "./icons/Monitor"
import Sun from "./icons/Sun"
import Moon from "./icons/Moon"

type HeaderProps = {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {

  return (
    <Box component="header" sx={{ position: 'absolute', top: 0, right: 0 }}>
      <Stack
        direction="row"
        gap={2}
        justifyContent="flex-end"
        paddingInline={4}
        paddingTop={4}
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
    </Box>
  )
}

export default Header
