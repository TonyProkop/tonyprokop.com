import { useRef } from "react"
import { Box, Typography } from "@mui/material"
import PrimaryButton from "./PrimaryButton"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const ref = useRef(null)

  useGSAP(() => {
    if (!ref.current) return

    gsap.fromTo(ref.current, {
      y: '100',
    }, {
      scrollTrigger: {
        trigger: ref.current,
        scrub: 0,
      },
      y: '-150'
    })
  }, { scope: ref, dependencies: [ref] })

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontWeight: '300',
          maxWidth: '960px',
          span: {
            fontWeight: "500",
          },
        }}
      >
        Web development professional with <b>8 years</b> of full-stack
        experience. Passionate about building <i>beautiful</i>,{" "}
        <i>fast</i>, and <i>intuitive</i> user interfaces.
      </Typography>
      <Box ref={ref}>
        <PrimaryButton href="/about" sx={{ float: 'right' }}>About me</PrimaryButton>
      </Box>
    </>
  )
}

export default About
