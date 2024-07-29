"use client"

import { Container, Stack, Typography } from "@mui/material"
import Hero from "./components/Hero"
import Quotes from "./components/Quotes"
import Skills from "./components/Skills"
import PrimaryButton from "./components/PrimaryButton"
import WorkExperience from "./components/WorkExperience"

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
              Web development professional with <b>8 years</b> of full-stack
              experience. Passionate about building <i>beautiful</i>,{" "}
              <i>fast</i>, and <i>intuitive</i> user interfaces.
            </Typography>
            <PrimaryButton href="/about">About me</PrimaryButton>
          </Container>
        </section>

        <section>
          <Container maxWidth="md">
            <WorkExperience />
          </Container>
        </section>

        <section>
          <Container maxWidth="xl">
            <Quotes />
          </Container>
        </section>

        <section>
          <Container maxWidth="md">
            <Skills />
          </Container>
        </section>
      </Stack>
    </main>
  )
}

export default Home
