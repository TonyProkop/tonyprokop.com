import { Typography } from "@mui/material"
import AboutButton from "./AboutButton"

const About = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          maxWidth: '1100px',
          lineHeight: '1.6',
          span: {
            fontWeight: "500",
          },
        }}
      >
        Web development professional with <b>8 years</b> of full-stack
        experience. Passionate about building <i>beautiful</i>,{" "}
        <i>fast</i>, and <i>intuitive</i> user interfaces.
      </Typography>
      {/* <AboutButton /> */}
    </>
  )
}

export default About
