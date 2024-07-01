"use client"

import * as React from "react"
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material"
import Image from "next/image"
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
        <Magnetic strength={25}>
          <Button 
            sx={{
              backgroundColor: 'blue',
              width: '200px',
              height: '200px',
              '&&': {
                borderRadius: '200px',
              },
            }}
          >Get in touch</Button>
        </Magnetic>
      </Container>
    </Box>
  )
}

export default Footer
