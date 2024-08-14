import { Box, Container, Divider, TextField, Typography } from "@mui/material"

const Contact = () => {
  return (
    <Container>
      <Typography variant="h1">Let&apos;s chat</Typography>
      <Box component="form">
        <Divider />
        <TextField label="What's your name?" fullWidth placeholder="John Doe" variant="standard" />
        <Divider />
        <TextField label="What's your email?" fullWidth placeholder="john@doe.com" variant="standard" />
        <Divider />
        <TextField label="Your message" fullWidth multiline placeholder="Hello Tony, can you help me with..." variant="standard" />
        <Divider />
      </Box>
    </Container>
  )
}

export default Contact;
