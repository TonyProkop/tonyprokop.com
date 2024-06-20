"use client"

import * as React from "react"
import {
  Container,
  Stack,
  Typography,
} from "@mui/material"
import Hero from "./components/Hero"
import Quotes from "./components/Quotes"
import Skills from "./components/Skills"
import Footer from "./Footer"

const Home = () => {
  return (
    <main>
      <Stack alignItems="center" direction="column" spacing={10}>

        <Hero />

        <section>
          <Container>
            <Typography
              fontSize={28}
              sx={{
                span: {
                  fontWeight: "500",
                },
              }}
            >
              Web development professional with <span>8 years</span> of
              full-stack experience. Passionate about building beautiful, fast,
              accessible and intuitive user interfaces.
            </Typography>
          </Container>
        </section>

        <section>
          <Container maxWidth="xl">
            <Quotes />
          </Container>
        </section>

        <section>
          <Container maxWidth="xl">
            <Skills />
          </Container>
        </section>

        <Footer />
      </Stack>
    </main>
  )
}

export default Home
