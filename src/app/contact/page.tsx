import { Box, Container, Divider, TextField, Typography } from "@mui/material"
import PrimaryButton from "../components/PrimaryButton"

const Contact = () => {
  return (
    <Container sx={{ marginBlock: 20 }}>
      <Typography
        variant="h1"
        sx={{
          '&': {
            color: 'var(--clr-text)',
            fontSize: '6rem',
            fontWeight: '400',
          }
        }}
      >
        Let&apos;s chat
      </Typography>
      <Box component="form" sx={{ marginTop: 20 }}>
        <Divider />
        <TextField label="What's your name?" placeholder="John Doe" />
        <Divider />
        <TextField label="What's your email?" placeholder="john@doe.com" />
        <Divider />
        <TextField label="Your message" multiline minRows={6} placeholder="Hello Tony, can you help me with..." />
        <Divider />
        <PrimaryButton type="submit">Send it!</PrimaryButton>
      </Box>
    </Container>
  )
}

export default Contact;
