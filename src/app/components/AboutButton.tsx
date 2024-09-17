
import { useRef } from "react"
import { Box } from "@mui/material"
import PrimaryButton from "./PrimaryButton"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const AboutButton = () => {
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
    <Box ref={ref}>
      <PrimaryButton href="/about" sx={{ float: 'right' }}>About me</PrimaryButton>
    </Box>
  )
}

export default AboutButton;
