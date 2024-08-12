"use client"

import * as React from "react"
import {
  Box,
  ButtonGroup,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material"
import MagneticButton from "./MagneticButton"
import RoundOnScroll from "./RoundOnScroll"
import PrimaryButton from "./PrimaryButton"
import Headshot from "./Headshot"
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
    <Box component="footer">
      <Container
        sx={{
          paddingBlock: 20,
          marginTop: 10,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "var(--clr-text)",
            fontSize: "6rem",
            fontWeight: "400",
          }}
        >
          <Headshot
            sx={{
              verticalAlign: "middle",
              marginRight: 2,
              height: "1lh",
              width: "auto",
            }}
          />
          <span>
            Let&apos;s work
            <br />
            together
          </span>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            position: "relative",
          }}
        >
          <PrimaryButton href="/contact">Get in touch</PrimaryButton>
          <Divider
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              border: "1px solid var(--clr-muted)",
            }}
          />
        </Box>
        <ButtonGroup>
          <MagneticButton
            href="mailto:prokop.tony@gmail.com"
            strength={25}
            text-strength={15}
          >
            prokop.tony@gmail.com
          </MagneticButton>
          <MagneticButton
            href="tel:14029888222"
            strength={25}
            text-strength={15}
          >
            (402) 988-8222
          </MagneticButton>
        </ButtonGroup>
        <Stack spacing={3} alignItems="center" marginTop={25}>
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
      </Container>
    </Box>
  )
}

export default Footer
