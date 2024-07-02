"use client"

import * as React from "react"
import { Box, Button, Container, Divider, Typography } from "@mui/material"
import Image from "next/image"
import Link from 'next/link'
import headshot from "./images/headshot-1.png"
import Magnetic from "./components/Magnetic"

const Footer = () => {
  //<Link href="mailto:prokop.tony@mail.com">prokop.tony@mail.com</Link>
  //<Link href="tel:+14029888222">(402) 988-8222</Link>
  //<Link href="https://www.linkedin.com/in/tony-prokop/">
  //LinkedIn
  //</Link>
  //<Link href="https://github.com/TonyProkop">GitHub</Link>
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1C1D20",
      }}
    >
      <Container
        sx={{
          paddingBlock: 20,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
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
        <Divider
          sx={{
            border: "1px solid #fff",
            marginTop: 10
          }}
        />
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'row-reverse'
          }}
        >
          <Magnetic strength={25}>
            <Box
              component={Link}
              href="/contact"
              sx={{
                backgroundColor: "blue",
                display: "grid",
                placeItems: "center",
                color: "#fff",
                width: "200px",
                height: "200px",
                marginTop: "-100px",
                "&&": {
                  borderRadius: "200px",
                },
              }}
            >
              Get in touch
            </Box>
          </Magnetic>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
