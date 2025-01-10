import { Box, Container, Divider, Stack, TextField, Typography } from "@mui/material"
import PrimaryButton from "../components/PrimaryButton"

const Contact = () => {
  return (
    <Container sx={{ marginBlock: 20 }}>
      <Typography
        variant="h1"
      >
        Let&apos;s chat
      </Typography>
      <Box
        component="form"
        sx={{
          marginTop: 15,
          'input[name="super-secret-field"]': {
            visibility: 'hidden'
          }
        }}
        name="contact"
        method="post"
        data-netlify="true"
        netlify-honeypot="super-secret-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input name="super-secret-field" />
        <Divider />
        <TextField label="What's your name?" name="name" placeholder="John Doe" />
        <Divider />
        <TextField label="What's your email?" name="email" placeholder="john@doe.com" />
        <Divider />
        <TextField label="Your message" name="detail" multiline minRows={6} placeholder="Hello Tony, can you help me with..." />
        <Divider />
        <Stack direction="row-reverse">
          <PrimaryButton type="submit">Send it!</PrimaryButton>
        </Stack>
      </Box>
    </Container>
  )
}

export default Contact;
