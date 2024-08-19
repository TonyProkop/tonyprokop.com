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
      <Container maxWidth="lg" sx={{ paddingBlock: 8 }}>
        <Stack spacing={4}>
          <Headshot />
          <Typography variant="h1" sx={{ textTransform: 'uppercase' }}>
            I’m Tony Prokop,
            <br />a Senior Software Engineer.
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero
