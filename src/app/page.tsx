"use client"

import { Container, Stack } from "@mui/material"
import Hero from "./components/Hero"
import About from "./components/About"
import Quotes from "./components/Quotes"
import Skills from "./components/Skills"
import WorkExperience from "./components/WorkExperience"
import Contact from "./components/Contact"

const Home = () => {
  return (
    <main>
      <Stack alignItems="center" direction="column" spacing={25}>
        <Hero />

        <Container maxWidth="lg">
          <section>
            <About />
          </section>
        </Container>

        <Container>
          <section>
            <WorkExperience />
          </section>
        </Container>

        <Quotes />

        <Container maxWidth="md">
          <section>
            <Skills />
          </section>
        </Container>

        <Contact />
      </Stack>
    </main>
  )
}

export default Home
