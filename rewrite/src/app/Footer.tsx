"use client"

import * as React from "react"
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import headshot from "./images/headshot-1.png"
import MagneticButton from "./components/MagneticButton"

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            position: "relative",
          }}
        >
          <MagneticButton
            strength={100}
            textStrength={50}
            component={Link}
            href="/contact"
            sx={{
              backgroundColor: "blue",
              display: "grid",
              placeItems: "center",
              color: "#fff",
              width: "200px",
              height: "200px",
              zIndex: 1,
              "&&": {
                borderRadius: "200px",
                "&:hover": {
                  backgroundColor: "blue",
                },
              },
            }}
          >
            Get in touch
          </MagneticButton>
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
        <Stack direction="row">
          <Button href="mailto:prokop.tony@gmail.com">
            prokop.tony@gmail.com
          </Button>
          <Button href="tel:14029888222">(402) 988-8222</Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
