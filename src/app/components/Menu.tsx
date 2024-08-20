"use client "

import { useState } from "react"
import { Box, Drawer, Stack, Typography, useTheme } from "@mui/material"
import Link from "next/link"
import HeaderButton from "./HeaderButton"
import MenuIcon from "./icons/Menu"
import CloseIcon from "./icons/Close"

const Menu = () => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  const toggleOpen = () => setOpen(!open)

  return (
    <>
      <HeaderButton onClick={toggleOpen}>
        <MenuIcon />
      </HeaderButton>
      <Drawer open={open} onClose={toggleOpen} anchor="right">
        <HeaderButton
          onClick={toggleOpen}
          sx={{
            background: "var(--primary-gradient)",
            svg: { color: "var(--clr-base)" },
            position: "absolute",
            top: theme.spacing(4),
            right: theme.spacing(4),
          }}
        >
          <CloseIcon />
        </HeaderButton>
        <Stack sx={{ height: '100vh', justifyContent: 'center', padding: 10 }} onClick={toggleOpen}>
          <Typography href="/" component={Link} sx={{ fontSize: "4rem" }}>
            Home
          </Typography>
          <Typography href="/about" component={Link} sx={{ fontSize: "4rem" }}>
            About
          </Typography>
          <Typography href="/blog" component={Link} sx={{ fontSize: "4rem" }}>
            Blog
          </Typography>
          <Typography
            href="/contact"
            component={Link}
            sx={{ fontSize: "4rem" }}
          >
            Contact
          </Typography>
        </Stack>
      </Drawer>
    </>
  )
}

export default Menu
