import { Box, Button, ButtonGroup, Container, Divider, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
import Headshot from "./Headshot"
import PrimaryButton from "./PrimaryButton"

const Contact = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg">
      <Stack spacing={4}>
        <Typography
          variant="h1"
          sx={{
            color: "var(--clr-text)",
            fontWeight: "400",
          }}
        >
          <Headshot
            sx={{
              verticalAlign: "middle",
              marginRight: 2,
              height: "1lh",
              width: "auto",
            }}
          />
          <span>
            Let&apos;s work
            <br />
            together
          </span>
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            position: "relative",
          }}
        >
          <PrimaryButton href="/contact">Get in touch</PrimaryButton>
          <Divider sx={{ position: 'absolute', left: 0, right: 0, top: '50%', transform: 'translateY(-50%)' }} />
        </Box>
        <ButtonGroup orientation={mobile ? "vertical" : "horizontal" }>
          <Button href="mailto:prokop.tony@gmail.com">
            prokop.tony@gmail.com
          </Button>
          <Button href="tel:14029888222">
            (402) 988-8222
          </Button>
        </ButtonGroup>
      </Stack>
    </Container>
  )
}

export default Contact;
