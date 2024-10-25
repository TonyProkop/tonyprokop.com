"use client"

import { useEffect, useRef, useState } from 'react'
import { Box, Container, IconButton, Stack, Typography } from "@mui/material"
import Quote from './Quote'
import { motion } from 'framer-motion'
import Cathal from "../images/cathal.png"
import Greg from "../images/greg.png"
import Savannah from "../images/savannah.png"
import Shannon from "../images/shannon.png"
import Vivek from "../images/vivek.png"
import ArrowRight from "./icons/ArrowRight"
import ArrowLeft from "./icons/ArrowLeft"

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

const NewQuotes = () => {
  const containerRef = useRef<HTMLElement>(null)
  const [center, setCenter] = useState(0)
  const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth)
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const positions = ["left1", "left", "center", "right", "right1"];

  useEffect(() => {
    const setCarousePosition = () => {
      if (containerRef?.current?.offsetWidth !== undefined) {
        setClientWidth(document.documentElement.clientWidth)
        setCenter(containerRef.current.offsetWidth / 2)
      }
    }

    setCarousePosition()

    window.addEventListener('resize', () => {
      setCarousePosition()
    })

    return () => {
      window.removeEventListener('resize', () => {
        setCarousePosition()
      })
    }
  }, [])

  const imageVariants = {
    left1: { x: `${center - 1310}px`, scale: 0.9, opacity: 0 },
    left: { x: `${center - 780}px`, scale: 0.9, opacity: 1 },
    center: { x: `${center - 250}px`, scale: 1, opacity: 1 },
    right: { x: `${center + 280}px`, scale: 0.9, opacity: 1 },
    right1: { x: `${center + 810}px`, scale: 0.9, opacity: 0 },
  };

  return (
    <Container maxWidth="lg">
      <Stack spacing={1}>
        <Typography variant="h2Alt">What others are saying</Typography>
        <IconButton onClick={handleBack}>
          <ArrowLeft />
        </IconButton>
        <IconButton onClick={handleNext}>
          <ArrowRight />
        </IconButton>
        <Box sx={{ display: 'grid', justifyContent: 'center' }}>
          <Box ref={containerRef} sx={{ display: 'grid', position: 'relative', overflow: 'hidden', width: `${clientWidth}px` }}>
            {quotes.map((quote, index) =>
              <motion.div
                key={quote.name}
                animate={positions[positionIndexes[index]]}
                transition={{ duration: .5 }}
                style={{ gridRow: '1', gridColumn: '1', maxWidth: '500px', width: '100%' }}
                variants={imageVariants}
              >
                <Quote {...quote} />
              </motion.div>
            )}
          </Box>
        </Box>
      </Stack>
    </Container>
  )
}

export default NewQuotes
