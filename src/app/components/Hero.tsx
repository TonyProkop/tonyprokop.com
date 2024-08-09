import { Box, Container, Typography, Stack } from "@mui/material"
import Headshot from "./Headshot"

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
          <Headshot />
          <Typography variant="h1">
            I’M TONY PROKOP,
            <br />A SENIOR SOFTWARE ENGINEER.
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
