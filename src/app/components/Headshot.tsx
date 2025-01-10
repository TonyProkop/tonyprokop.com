import { FC } from 'react'
import Image from "next/image"
import { Box, BoxProps } from "@mui/material"
import tony from "../images/tony.png"

const Headshot: FC<BoxProps> = ({ sx }) => {
  return (
    <Box
      component={Image}
      src={tony}
      alt="Tony Prokop"
      sx={{
        verticalAlign: "middle",
        marginRight: 2,
        maxWidth: "clamp(200px, 30vw, 300px)",
        height: 'auto',
        width: '100%',
        borderRadius: '300px',
        backgroundColor: 'var(--clr-overlay)',
        ...sx
      }}
    />
  )

}

export default Headshot
