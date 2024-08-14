import { Box, ButtonGroup, Container, Divider, Typography } from "@mui/material";
import Headshot from "./Headshot"
import MagneticButton from "./MagneticButton"
import PrimaryButton from "./PrimaryButton"

const Contact = () => {
  return (
    <Container>
      <Typography
        variant="h2"
        sx={{
          color: "var(--clr-text)",
          fontSize: "6rem",
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
      <ButtonGroup>
        <MagneticButton
          href="mailto:prokop.tony@gmail.com"
          strength={25}
          text-strength={15}
        >
          prokop.tony@gmail.com
        </MagneticButton>
        <MagneticButton
          href="tel:14029888222"
          strength={25}
          text-strength={15}
        >
          (402) 988-8222
        </MagneticButton>
      </ButtonGroup>
    </Container>
  )
}

export default Contact;
