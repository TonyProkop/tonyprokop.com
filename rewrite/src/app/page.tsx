"use client"

import * as React from "react"
import { Container, Stack, Typography } from "@mui/material"
import LocomotiveScroll from "locomotive-scroll"
import Hero from "./components/Hero"
import Magnetic from "./components/Magnetic"
import Quotes from "./components/Quotes"
import Skills from "./components/Skills"

const Home = () => {
  const ref = React.useRef(null)
  React.useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: ref.current,
      smooth: true,
    })

    return () => {
      scroll.destroy()
    }
  }, [ref])

  return (
    <main data-scroll-container ref={ref}>
      <Stack
        alignItems="center"
        direction="column"
        spacing={10}
      >
        <Hero />

        <section>
          <Container>
            <Typography
              data-scroll
              data-scroll-speed={1}
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
      </Stack>
    </main>
  )
}

export default Home
