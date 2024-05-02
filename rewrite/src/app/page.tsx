"use client";

import * as React from "react";
import Image from "next/image";
import {
  Button,
  ButtonGroup,
  Box,
  Container,
  Stack,
  Typography,
  Slide,
} from "@mui/material";
import profilePic from "./images/profile-pic.webp";
import Quotes from "./Quotes";
import Footer from "./Footer";
import MarqueeScroll from "./components/MarqueeScroll";
import theme from "@/theme";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = React.useRef(null);
  const ref = React.useRef(null);

  useGSAP(() => {
    gsap.to(ref, {
      scrollTrigger: {
        scrub: true,
      },
      y: () => `${-ScrollTrigger.maxScroll(window) * 0.75}px`,
      ease: "none",
    });
  });

  return (
    <main>
      <Stack alignItems="center" direction="column" spacing={10}>
        <Box
          ref={containerRef}
          component="section"
          sx={{
            backgroundColor: "#eee",
            width: "100%",
            height: "90vh",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              img: {
                height: "90vh",
                width: "auto",
              },
            }}
          >
            <Image src={profilePic} alt="Tony Prokop" />
          </Box>

          <Box
            ref={ref}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              transform: "translateY(-50%)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#1C1D20",
                borderTopRightRadius: "100px",
                borderBottomRightRadius: "100px",
                padding: theme.spacing(2, 2, 2, 4),
                gap: theme.spacing(4),
              }}
            >
              <Typography
                sx={{
                  color: "white",
                }}
              >
                Located in
                <br />
                Omaha, NE
              </Typography>
              <Box
                sx={{
                  borderRadius: "100%",
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#eee",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "1.5em",
              }}
            >
              Senior
              <br />
              Software Engineer
            </Typography>
          </Box>

          <Box
            sx={(theme) => ({
              position: "absolute",
              left: 0,
              right: 0,
              bottom: theme.spacing(4),
            })}
          >
            <MarqueeScroll>
              {[1, 2].map((i) => (
                <Typography
                  key={i}
                  variant="h1"
                  sx={{
                    fontSize: "max(9em, 15vw)",
                    display: "flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                  }}
                >
                  Tony Prokop —
                </Typography>
              ))}
            </MarqueeScroll>
          </Box>

          {/* <Container
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              transform: "translateY(-50%)",
            }}
          >
            <Stack maxWidth="550px" spacing={4}>
              <Typography>Senior Software Engineer</Typography>
              <Typography variant="h1" maxWidth="550px">
                Transforming Ideas into Innovative Software Solutions
              </Typography>
              <ButtonGroup>
                <Button variant="contained">Get in touch</Button>
                <Button variant="outlined">Download resume</Button>
              </ButtonGroup>
            </Stack>
          </Container>*/}
        </Box>

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

        <section>{/* <Quotes/> */}</section>

        <Footer />
      </Stack>
    </main>
  );
};

export default Home;
