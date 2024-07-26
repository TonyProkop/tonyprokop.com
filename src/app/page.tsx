"use client"

import { Container, Stack, Typography } from "@mui/material"
import Hero from "./components/Hero"
import Quotes from "./components/Quotes"
import Skills from "./components/Skills"
import PrimaryButton from "./components/PrimaryButton"

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
              full-stack experience. I&apos;m, passionate about building beautiful,
              fast, and intuitive user interfaces.
            </Typography>
            <PrimaryButton href="/about">About me</PrimaryButton>
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
      </Stack>
    </main>
  )
}

export default Home
