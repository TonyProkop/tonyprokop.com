// https://blog.olivierlarose.com/tutorials/magnetic-button
import { cloneElement, FC, ReactNode, useRef, useState, useEffect } from 'react'
import gsap from 'gsap';

type MagneticProps = {
  children: ReactNode | ReactNode[];
  strength?: number;
}

const Magnetic: FC<MagneticProps> = ({ children, strength }) => {
  const magnetic = useRef(null);

  useEffect(() => {
    if (!magnetic?.current) return;

    const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" })
    const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" })

    magnetic.current.addEventListener("mousemove", (e) => {
      if (!magnetic?.current) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } = magnetic.current.getBoundingClientRect();
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      xTo(x);
      yTo(y)
    })
    magnetic.current.addEventListener("mouseleave", (e) => {
      xTo(0);
      yTo(0)
    })
  }, [])

  return (
    cloneElement(children, { ref: magnetic })
  )
}

export default Magnetic
