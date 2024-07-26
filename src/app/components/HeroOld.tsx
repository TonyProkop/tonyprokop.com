"use client"

import { Box, Typography } from "@mui/material"
import Image from "next/image"
import tony from "../images/tony.webp"
import Roll from "./Roll"
import LocationBadge from "./LocationBadge"

const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#eee",
        width: "100%",
        height: "115vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          img: {
            height: "115vh",
            width: "auto",
          },
        }}
      >
        <Image src={tony} alt="Tony Prokop" />
      </Box>

      <Box
        data-scroll
        data-scroll-speed={.2}
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <LocationBadge />
      </Box>

      <Box
        data-scroll
        data-scroll-speed={.2}
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          marginRight: "10%",
          transform: "translateY(-50%)",
        }}
      >
        <Typography
          sx={{
            fontSize: "2em",
          }}
        >
          Senior
          <br />
          Software Engineer
        </Typography>
      </Box>

      <Box
        sx={theme => ({
          position: "absolute",
          left: 0,
          right: 0,
          bottom: `calc(15vh + ${theme.spacing(4)})`,
          overflow: "hidden",
        })}
      >
        <Roll>
          <Typography
            variant="h1"
            sx={{
              fontSize: "max(9em, 10vw)",
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
          >
            Tony Prokop —
          </Typography>
        </Roll>
      </Box>
    </Box>
  )
}

export default Hero
