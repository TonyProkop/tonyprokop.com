"use client"

import * as React from "react"
import {
  Box,
  Stack,
  Typography,
} from "@mui/material"
import Email from "./icons/Email"
import Github from "./icons/Github"
import Linkedin from "./icons/Linkedin"
import Phone from "./icons/Phone"
import RSS from "./icons/RSS"
import Leetcode from "./icons/Leetcode"

const Footer = () => {
  const links = [
    {
      component: <Email />,
      href: "mailto:prokop.tony@gmail.com",
    },
    {
      component: <Phone />,
      href: "tel:14029888222",
    },
    {
      component: <Github />,
      href: "https://github.com/TonyProkop",
    },
    {
      component: <Leetcode />,
      href: "https://leetcode.com/u/TonyProkop/",
    },
    {
      component: <Linkedin />,
      href: "https://www.linkedin.com/in/tony-prokop/",
    },
    {
      component: <RSS />,
      href: "",
    },
  ]

  return (
    <Box component="footer" marginBlock={20}>
      <Stack spacing={4} alignItems="center">
        <Stack
          direction="row"
          justifyContent="center"
          spacing={4}
          sx={{ marginTop: 10, svg: { color: "var(--clr-subtle)" } }}
        >
          {links.map((l) => (
            <a href={l.href} key={l.href}>
              {l.component}
            </a>
          ))}
        </Stack>
        <Typography sx={{ color: "var(--clr-subtle)" }}>
          Tony Prokop @ 2024
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
