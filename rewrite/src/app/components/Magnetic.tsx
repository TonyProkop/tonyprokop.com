import * as React from "react"

type MagneticProps = {
  children: React.ReactNode
}

const Magnetic: React.FC<MagneticProps> = ({ children }) => {
  return <div>{children}</div>
}

export default Magnetic
