import * as React from "react";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import profileSmall from "./images/profile-small.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1C1D20",
        width: "100%",
      }}
    >
      <Container>
        <Stack direction="row">
          <Stack>
            <Image src={profileSmall} alt="Tony Prokop" />
            <Link href="mailto:prokop.tony@mail.com">prokop.tony@mail.com</Link>
            <Link href="tel:+14029888222">(402) 988-8222</Link>
            <Link href="https://www.linkedin.com/in/tony-prokop/">
              LinkedIn
            </Link>
            <Link href="https://github.com/TonyProkop">GitHub</Link>
          </Stack>
          <Typography
            variant="h1"
            sx={{
              color: "#fff",
            }}
          >
            Let&apos;s work together
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
