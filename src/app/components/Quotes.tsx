"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent, Stack, Typography } from "@mui/material"
import { Masonry } from "@mui/lab"
import QuoteIcon from "../icons/quote-left-solid.svg"
import Cathal from "../images/cathal.png"
import Greg from "../images/greg.png"
import Savannah from "../images/savannah.png"
import Shannon from "../images/shannon.png"
import Vivek from "../images/vivek.png"

type QuoteProps = {
  name: string
  position: string
  text: Array<string>
  image: any
}

const Quotes = () => {
  const Quote: React.FC<QuoteProps> = ({ name, position, text, image }) => {
    return (
      <Card>
        <CardContent>
          <Stack spacing={4}>
            <div>
              {text.map((text: string) => (
                <Typography
                  key={text}
                  variant="body2"
                  sx={{ fontStyle: "italic" }}
                >
                  &quot;{text}&quot;
                </Typography>
              ))}
            </div>
            <Stack alignItems="center" direction="row" gap={2}>
              <Image src={image} alt={name} height="50" />
              <Stack>
                <Typography fontWeight={400}>{name}</Typography>
                <Typography variant="body2">{position}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    )
  }

  //<Image src={QuoteIcon} alt="Quote" width="80" />

  return (
    <Stack spacing={5}>
      <Typography variant="h2Alt">Testimonials</Typography>
      <Masonry columns={3} spacing={4}>
        <Quote
          name="Cathal Mac Donnacha"
          position="Principal Software Engineer"
          text={[
            "Tony has had a massive impact on User Portal and his fellow devs. He shows great initiative, consistently goes above and beyond expectations while making sure to collaborate where everyone feels valued and motivated.",
            "Tony's contributions have significantly elevated the quality of features and project wide initiatives, being a constant inspiration for others. We are incredibly fortunate to have him and his expertise.",
          ]}
          image={Cathal}
        />
        <Quote
          name="Greg Schmaderer"
          position="Bussiness Owner"
          text={[
            "I worked with Tony to setup a website for my small business. Tony was consultative and responsive throughout the entire process. This enabled us to get the website built quickly. I would not hesitate to recommend Tony. He is easy to work with.",
          ]}
          image={Greg}
        />
        <Quote
          name="Shannon Sorensen"
          position="Senior Product Designer"
          text={[
            "Forget the AI hype, all focus should be in cloning Tony. Dude is the best parts of humans and machine. He cranks out perfect code with a thoughtfulness and humor.",
          ]}
          image={Shannon}
        />
        <Quote
          name="Vivek Patel"
          position="Senior Software Engineer"
          text={[
            'This recognition is long overdue, Tony has helped me out on several occasions now - he has become my "go-to" person when I have front-end or growth suite questions.',
            "The best part about Tony is that he always makes my issue feel important and finds time to help out! Appreciate you Tony!",
          ]}
          image={Vivek}
        />
        <Quote
          name="Savannah Albanez"
          position="Software Engineer"
          text={[
            "I not sure how he does it, but Tony has been everywhere all at once the last few weeks. With the Accessibility release and the Dashboard release he still has time to hop on a zoom, answer questions async, and notes revisions needed on past PRs - All while breezing through sprint work. Truly an inspiration friend!",
          ]}
          image={Savannah}
        />
      </Masonry>
    </Stack>
  )
}

export default Quotes
