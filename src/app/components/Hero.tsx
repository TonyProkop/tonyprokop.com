import Image from "next/image"
import { Box, Container, Typography, Stack } from "@mui/material"
import headshot from "../images/me.png"

const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "var(--clr-surface)",
        width: "100%",
      }}
    >
      <Container maxWidth="lg" sx={{ paddingBottom: 8 }}>
        <Stack spacing={4}>
          <Box
            component={Image}
            src={headshot}
            alt="Tony Prokop"
            sx={{
              backgroundColor: "var(--clr-overlay)",
              verticalAlign: "middle",
              marginRight: 2,
              maxWidth: "300px",
              height: "auto",
              borderRadius: "100%",
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              fontSize: "96px",
              background: "var(--primary-gradient)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            I’M TONY PROKOP,
            <br />A SENIOR SOFTWARE ENGINEER.
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
