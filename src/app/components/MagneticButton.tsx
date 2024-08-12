"use client"

import { ReactNode, useRef, forwardRef, ForwardedRef, useImperativeHandle } from "react"
import { Button, ButtonProps } from "@mui/material"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

export type MagneticButtonProps = ButtonProps & {
  children: ReactNode
  strength?: number
  textStrength?: number
}

const MagneticButton = forwardRef(function MagneticButton({
  children,
  strength = 100,
  textStrength = 50,
  ...props
}: MagneticButtonProps, outerRef: ForwardedRef<HTMLButtonElement>) {
  const ref = useRef<HTMLButtonElement>(null)

  useImperativeHandle(outerRef, () => ref.current!, [])

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
})

export default MagneticButton
