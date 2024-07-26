"use client "

import { useState } from "react"
import { Box, Stack, Typography, useTheme } from "@mui/material"
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
      {open && (
        <Box
          onClick={toggleOpen}
          sx={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backdropFilter: "blur(10px)",
            zIndex: 1,
          }}
        />
      )}
      {open && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "var(--clr-overlay)",
            zIndex: 2,
          }}
        >
          <HeaderButton
            onClick={toggleOpen}
            sx={{
              background: "var(--primary-gradient)",
              svg: { color: "var(--clr-base)" },
              position: 'fixed',
              top: theme.spacing(4),
              right: theme.spacing(4)
            }}
          >
            <CloseIcon />
          </HeaderButton>
          <Stack sx={{ padding: 10 }}>
            <Typography href="/" component={Link} sx={{ fontSize: "4rem" }}>
              Home
            </Typography>
            <Typography
              href="/about"
              component={Link}
              sx={{ fontSize: "4rem" }}
            >
              About
            </Typography>
            <Typography
              href="/contact"
              component={Link}
              sx={{ fontSize: "4rem" }}
            >
              Contact
            </Typography>
          </Stack>
        </Box>
      )}
    </>
  )
}

export default Menu
