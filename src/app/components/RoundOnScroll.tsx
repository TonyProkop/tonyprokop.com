"use client"

import { useRef } from "react"
import { Box } from "@mui/material"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

const RoundOnScroll = () => {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!ref.current) return

      let tl = gsap.timeline({
        scrollTrigger: {
          //trigger: document.querySelector('footer'),
          start: "0% 100%",
          end: "100% 100%",
          scrub: 0,
        },
      })
      tl.to(
        ref.current.querySelector(".rounded-div"),
        {
          height: 0,
          ease: "none",
        }
      )
    },
    { scope: ref }
  )

  return (
    <Box
      ref={ref}
      sx={{
        height: "55px",
        willChange: "height",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        className="rounded-div"
        sx={{
          width: "150%",
          content: "''",
          display: "block",
          position: "absolute",
          background: "#fff",
          height: "750%",
          left: "50%",
          borderRadius: "50%",
          transform: "translate(-50%, -86.666%)",
          zIndex: 1,
        }}
      />
    </Box>
  )
}

export default RoundOnScroll
