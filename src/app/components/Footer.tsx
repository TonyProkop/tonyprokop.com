"use client"

import * as React from "react"
import { Box, ButtonGroup, Container, Divider, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import headshot from "../images/headshot-1.png"
import MagneticButton from "./MagneticButton"
import RoundOnScroll from "./RoundOnScroll"
import PrimaryButton from "./PrimaryButton"

const Footer = () => {
  return (
    <Box component="footer">
      <Container
        sx={{
          paddingBlock: 20,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "6rem",
            fontWeight: "400",
          }}
        >
          <Box
            component={Image}
            src={headshot}
            alt="Tony Prokop"
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
          <PrimaryButton href="/contact">
            Get in touch
          </PrimaryButton>
          <Divider
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              border: "1px solid #fff",
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
      </Container>
    </Box>
  )
}

export default Footer
