"use client "

import { FC, useState } from "react"
import { Drawer, Stack, Typography, TypographyProps, useTheme } from "@mui/material"
import Link, { LinkProps } from "next/link"
import IconButton from "./IconButton"
import MenuIcon from "./icons/Menu"
import CloseIcon from "./icons/Close"

const Menu = () => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()

  const toggleOpen = () => setOpen(!open)

  const MenuButton: FC<LinkProps & TypographyProps> = ({ ...props }) => {
    return (
      <Typography component={Link} {...props} sx={{ fontSize: "4rem", paddingX: 4 }} variant="h3">
        {props.children}
      </Typography>
    )
  }

  return (
    <>
      <IconButton onClick={toggleOpen}>
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleOpen} anchor="right">
        <IconButton
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
        </IconButton>
        <Stack sx={{ height: '100vh', justifyContent: 'center', padding: 5 }} onClick={toggleOpen}>
          <MenuButton href="/">
            Home
          </MenuButton>
          <MenuButton href="/contact">
            Contact
          </MenuButton>
        </Stack>
      </Drawer>
    </>
  )
}

export default Menu
