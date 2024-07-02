import * as React from "react"
import { Button, ButtonProps } from "@mui/material"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

type MagneticButtonProps = ButtonProps & {
  children: React.ReactNode
  strength: number
  textStrength: number
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  strength,
  textStrength,
  ...props
}) => {
  const ref = React.useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!ref.current) return

      ref.current.addEventListener("mousemove", event => {
        if (!ref.current) return

        const magnetButton = ref.current
        const bounding = magnetButton.getBoundingClientRect()
        const x =
          (event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5
        const y =
          (event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5

        gsap.to([ref.current, ref.current.querySelector(".btn-text")], {
          x: x * strength,
          y: y * strength,
          rotate: "0.001deg",
          ease: "power4.easeOut",
          duration: 1.5,
        })
      })

      ref.current.addEventListener("mouseleave", () => {
        if (!ref.current) return

        gsap.to([ref.current, ref.current.querySelector(".btn-text")], {
          x: 0,
          y: 0,
          ease: "elastic.out",
          duration: 1.5,
        })
      })
    },
    { scope: ref, dependencies: [ref] }
  )

  return (
    <Button ref={ref} {...props}>
      <div className="btn-text">{children}</div>
    </Button>
  )
}

export default MagneticButton
