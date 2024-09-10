"use client"

import { useEffect, useState, useRef } from "react"
import { Box, Container, IconButton, Stack, Typography } from "@mui/material"
import Quote from './Quote'
import Cathal from "../images/cathal.png"
import Greg from "../images/greg.png"
import Savannah from "../images/savannah.png"
import Shannon from "../images/shannon.png"
import Vivek from "../images/vivek.png"
import ArrowRight from "./icons/ArrowRight"
import useHorizontalLoop from "../../hooks/useHorizontalLoop"

const Quotes = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(new Array())

  const context = useHorizontalLoop(ref.current, { paused: true, speed: 20, center: true })


  const nextQuote = () => {
    context.data[0].next()
    if (activeIndex === 4) {
      setActiveIndex(0)
    } else {
      setActiveIndex(activeIndex + 1)
    }
  }

  const previousQuote = () => {
    context.data[0].previous()
    if (activeIndex === 0) {
      setActiveIndex(4)
    } else {
      setActiveIndex(activeIndex - 1)
    }
  }

  const toQuote = (index: number) => {
    context.data[0].toIndex(index)
    setActiveIndex(index)
  }

  useEffect(() => {
    toQuote(0)
  }, [])

  const quotes = [
    {
      name: "Cathal Mac Donnacha",
      position: "Principal Software Engineer",
      text: [
        "Tony has had a massive impact on User Portal and his fellow devs. He shows great initiative, consistently goes above and beyond expectations while making sure to collaborate where everyone feels valued and motivated.",
        "Tony's contributions have significantly elevated the quality of features and project wide initiatives, being a constant inspiration for others. We are incredibly fortunate to have him and his expertise.",
      ],
      image: Cathal,
    },
    {
      name: "Greg Schmaderer",
      position: "Bussiness Owner",
      text: [
        "I worked with Tony to setup a website for my small business. Tony was consultative and responsive throughout the entire process. This enabled us to get the website built quickly. I would not hesitate to recommend Tony. He is easy to work with.",
      ],
      image: Greg,
    },
    {
      name: "Shannon Sorensen",
      position: "Senior Product Designer",
      text: [
        "Forget the AI hype, all focus should be in cloning Tony. Dude is the best parts of humans and machine. He cranks out perfect code with a thoughtfulness and humor.",
      ],
      image: Shannon,
    },
    {
      name: "Vivek Patel",
      position: "Senior Software Engineer",
      text: [
        'This recognition is long overdue, Tony has helped me out on several occasions now - he has become my "go-to" person when I have front-end or growth suite questions.',
        "The best part about Tony is that he always makes my issue feel important and finds time to help out! Appreciate you Tony!",
      ],
      image: Vivek,
    },
    {
      name: "Savannah Albanez",
      position: "Software Engineer",
      text: [
        "I not sure how he does it, but Tony has been everywhere all at once the last few weeks. With the Accessibility release and the Dashboard release he still has time to hop on a zoom, answer questions async, and notes revisions needed on past PRs - All while breezing through sprint work. Truly an inspiration friend!",
      ],
      image: Savannah,
    },
  ]

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h2Alt">Testimonials</Typography>
        <IconButton onClick={previousQuote} >
          <ArrowRight />
        </IconButton>
        <IconButton onClick={nextQuote} >
          <ArrowRight />
        </IconButton>
      </Container>
      <Stack direction="row" paddingInline={2.5}>
        {
          quotes.map((quote, index) =>
            <Box
              key={quote.name}
              ref={el => ref.current.push(el)}
              sx={{ flexBasis: '500px', flexShrink: 0 }}
              paddingInline={2.5}
              onClick={() => toQuote(index)}
            >
              <Quote active={index === activeIndex} {...quote} />
            </Box>
          )
        }
      </Stack >
    </>
  )
}

export default Quotes
