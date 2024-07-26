"use client"

import * as React from "react"
import { Box, Stack } from "@mui/material"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

type RollProps = {
  children: React.ReactNode
}

const Roll: React.FC<RollProps> = ({ children }) => {
  const containerRef = React.useRef<HTMLElement>(null)
  const childrenRef = React.useRef<Array<HTMLElement>>([])
  let direction = 1

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        repeat: -1,
        onReverseComplete() {
          this.totalTime(this.rawTime() + this.duration() * 10)
        },
      })

      childrenRef.current.forEach(ref =>
        timeline.to(
          ref,
          {
            ease: "none",
            duration: 10,
            xPercent: -100,
          },
          0
        )
      )

      ScrollTrigger.create({
        onUpdate(self) {
          if (self.direction !== direction) {
            direction *= -1
            gsap.to(timeline, {
              timeScale: direction,
              overwrite: true,
            })
          }
        },
      })
    },
    { scope: containerRef }
  )

  return (
    <Box ref={containerRef}>
      {React.Children.map(children, (child: any) => {
        return (
          <Stack direction="row">
            {React.cloneElement(child, {
              ref: (ref: HTMLElement) => childrenRef.current.push(ref),
            })}
            {React.cloneElement(child, {
              ref: (ref: HTMLElement) => childrenRef.current.push(ref),
            })}
            {React.cloneElement(child, {
              ref: (ref: HTMLElement) => childrenRef.current.push(ref),
            })}
          </Stack>
        )
      })}
    </Box>
  )
}

export default Roll
