import * as React from "react"
import { Box } from "@mui/material"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

type MagneticProps = {
  children: React.ReactNode
  strength: number
  textStrength?: number
}

const Magnetic: React.FC<MagneticProps> = ({
  children,
  strength,
  textStrength,
}) => {
  const ref = React.useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!ref.current) return;

      ref.current.addEventListener("mousemove", event => {
        if (!ref.current) return;

        const magnetButton = ref.current
        const bounding = magnetButton.getBoundingClientRect()
        const x =
          ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
          strength
        const y =
          ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
          strength

        gsap.to(ref.current, {
          x,
          y,
          rotate: "0.001deg",
          ease: "power4.easeOut",
          duration: 1.5,
        })
      })

      ref.current.addEventListener("mouseleave", () => {
        gsap.to(ref.current, {
          x: 0,
          y: 0,
          ease: 'elastic.out',
          duration: 1.5
        })
      })
    },
    { scope: ref, dependencies: [ref] }
  )

  return (
    <Box sx={{}} ref={ref}>
      {children}
    </Box>
  )
}

export default Magnetic
