"use client"

import { useCallback, useEffect, useRef, useState } from 'react'
import { Box, Container, Stack, Typography } from "@mui/material"
import IconButton from './IconButton'
import Quote from './Quote'
import { motion } from 'framer-motion'
import Cathal from "../images/cathal.png"
import Greg from "../images/greg.png"
import Savannah from "../images/savannah.png"
import Shannon from "../images/shannon.png"
import Vivek from "../images/vivek.png"
import ArrowRight from "./icons/ArrowRight"
import ArrowLeft from "./icons/ArrowLeft"
import Play from "./icons/Play"
import Pause from "./icons/Pause"

const quotes = [
  {
    name: "Cathal Mac Donnacha",
    position: "Principal Software Engineer",
    text: [
      "Tony has had a massive impact on User Portal and his fellow devs. He shows great initiative, consistently goes above and beyond expectations, and is constant inspiration for others. We are incredibly fortunate to have him and his expertise.",
    ],
    image: Cathal,
  },
  {
    name: "Greg Schmaderer",
    position: "Bussiness Owner",
    text: [
      "I worked with Tony to setup a website for my small business. Tony was consultative and responsive throughout the entire process. This enabled us to get the website built quickly. I wouldn't hesitate to recommend Tony. He is easy to work with.",
    ],
    image: Greg,
  },
  {
    name: "Shannon Sorensen",
    position: "Senior Product Designer",
    text: [
      "Forget the AI hype, all focus should be in cloning Tony. The dude is the best parts of humans and machine. He cranks out perfect code with a thoughtfulness and humor.",
    ],
    image: Shannon,
  },
  {
    name: "Vivek Patel",
    position: "Senior Software Engineer",
    text: [
      'This recognition is long overdue, Tony has helped me out on several occasions now - he has become my "go-to" person when I have frontend questions. He always makes my issue feel important and finds time to help out! Appreciate you Tony!',
    ],
    image: Vivek,
  },
  {
    name: "Savannah Albanez",
    position: "Software Engineer",
    text: [
      "I not sure how he does it, but Tony has been everywhere the last few weeks. He somehow finds time to hop on a zoom, answer questions async, and give feedback on PRs all while breezing through his own sprint work. Truly an inspiration friend!",
    ],
    image: Savannah,
  },
]


const NewQuotes = () => {
  const containerRef = useRef<HTMLElement>(null)
  const [center, setCenter] = useState(0)
  const [clientWidth, setClientWidth] = useState(document.documentElement.clientWidth)
  const direction = useRef<'right' | 'left'>("right")
  const playInterval = useRef<window.Timeout>(null)
  const [playing, setPlaying] = useState(true)
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
    const setupCarousel = () => {
      if (containerRef?.current?.offsetWidth !== undefined) {
        setClientWidth(document.documentElement.clientWidth)
        setCenter(containerRef.current.offsetWidth / 2)
      }
    }

    setupCarousel()

    window.addEventListener('resize', () => {
      setupCarousel()
    })

    return () => {
      window.removeEventListener('resize', () => {
        setupCarousel()
      })
    }
  }, [])

  const playOrPause = () => {
    if (playing) {
      pause()
    } else {
      play()
    }
  }

  const play = () => {
    setPlaying(true)
  }

  const pause = () => {
    setPlaying(false)
  }

  useEffect(() => {
    const clear = () => {
      if (playInterval.current) clearInterval(playInterval.current)
    }

    const move = () => {
      direction.current === 'right' ? handleNext() : handleBack()
    }

    if (playing) {
      if (playInterval.current) clear()
      move()
      playInterval.current = setInterval(() => {
        move()
      }, 4000)
    } else {
      clear()
    }

    return () => {
      clear()
    }
  }, [direction, playing])

  const maxWidth = 500
  const gutter = 30
  const imageVariants = {
    left1: { x: `${center - (2.5 * maxWidth) - (2 * gutter)}px`, scale: 0.9, opacity: 0 },
    left: { x: `${center - (1.5 * maxWidth) - gutter}px`, scale: 0.9, opacity: 1 },
    center: { x: `${center - 0.5 * maxWidth}px`, scale: 1, opacity: 1 },
    right: { x: `${center + (0.5 * maxWidth) + gutter}px`, scale: 0.9, opacity: 1 },
    right1: { x: `${center + (1.5 * maxWidth) + (2 * gutter)}px`, scale: 0.9, opacity: 0 },
  };

  return (
    <Container maxWidth="lg">
      <Stack spacing={4} alignItems="center">
        <Typography variant="h2Alt" alignSelf="flex-start">What others are saying</Typography>
        <Box ref={containerRef} sx={{ display: 'grid', position: 'relative', overflow: 'hidden', width: `${clientWidth}px` }}>
          {quotes.map((quote, index) =>
            <motion.div
              key={quote.name}
              animate={positions[positionIndexes[index]]}
              transition={{ duration: 0.4 }}
              style={{ gridRow: '1', gridColumn: '1', maxWidth: `${maxWidth}px`, width: '100%' }}
              variants={imageVariants}
            >
              <Quote {...quote} />
            </motion.div>
          )}
        </Box>
        <Stack direction="row" spacing={2}>
          <IconButton onClick={() => {
            if (direction.current === 'right') {
              direction.current = 'left'
            }
            handleBack()
          }}>
            <ArrowLeft />
          </IconButton>
          <IconButton onClick={playOrPause}>
            {playing ? <Pause /> : <Play />}
          </IconButton>
          <IconButton onClick={() => {
            if (direction.current === 'left') {
              direction.current = 'right'
            }
            handleNext()
          }}>
            <ArrowRight />
          </IconButton>
        </Stack>
      </Stack>
    </Container>
  )
}

export default NewQuotes
