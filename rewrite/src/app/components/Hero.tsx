import { Box, Typography } from '@mui/material';
import Image from "next/image"
import theme from "@/theme"
import tony from "../images/tony.webp"
import Roll from "./Roll"

const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#eee",
        width: "100%",
        height: "115vh",
        position: "relative",
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
        sx={theme => ({
          position: "absolute",
          left: 0,
          right: 0,
          bottom: `calc(15vh + ${theme.spacing(4)})`,
          overflow: 'hidden'
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

export default Hero;
