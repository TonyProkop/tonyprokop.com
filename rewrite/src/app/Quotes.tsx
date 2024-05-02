"use client";

import * as React from "react";
import Image from "next/image";
import {
  Button,
  ButtonGroup,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils";
import QuoteIcon from "./icons/quote-left-solid.svg";
import Cathal from "./images/cathal.png";
import Greg from "./images/greg.png";
import Savannah from "./images/savannah.png";
import Shannon from "./images/shannon.png";
import Vivek from "./images/vivek.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Quotes = () => {
  const [activeQuoteIndex, setActiveQuoteIndex] = React.useState(0);
  const [quotes, setQuotes] = React.useState([
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
  ]);

  const nextQuote = () => {
    setActiveQuoteIndex((prevIndex) =>
      prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Stack alignItems="center" spacing={5}>
      <Container>
        <Image src={QuoteIcon} alt="Quote" width="80" />
      </Container>
      <AutoPlaySwipeableViews
        axis={"x"}
        index={activeQuoteIndex}
        onChangeIndex={nextQuote}
        enableMouseEvents
        interval={10000}
      >
        {quotes.map((quote) => (
          <Container key={quote.name}>
            <Stack spacing={5}>
              <Stack spacing={4}>
                {quote.text.map((text) => (
                  <Typography key={text} fontSize={28}>
                    {text}
                  </Typography>
                ))}
              </Stack>
              <Stack alignItems="center" direction="row" gap={2}>
                <Image src={quote.image} alt={quote.name} width="80" />
                <Stack>
                  <Typography fontWeight={400}>{quote.name}</Typography>
                  <Typography variant="body2">{quote.position}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Container>
        ))}
      </AutoPlaySwipeableViews>
      <Container>
        <ButtonGroup
          sx={{
            gap: 2,
          }}
        >
          {quotes.map((quote, index) => (
            <Button
              key={index}
              onClick={() => setActiveQuoteIndex(index)}
              sx={{
                background: activeQuoteIndex === index ? "#1ED760" : "#D9D9D9",
                borderRadius: 0,
                outline: "none",
              }}
            />
          ))}
        </ButtonGroup>
      </Container>
    </Stack>
  );
};

export default Quotes;
