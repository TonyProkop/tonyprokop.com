import { FC, ReactNode } from 'react'
import { Box, Container } from '@mui/material'

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr min(calc(100% - 2rem), 750px) 1fr',
        paddingBlock: '10vh',
        h1: {
          fontSize: 'clamp(2.986rem, 10vw, 3.815rem)'
        },
        h2: {
          fontSize: 'clamp(2.488rem, 8vw, 3.052rem)'
        },
        h3: {
          fontSize: 'clamp(2.074rem, 8vw, 2.441rem)'
        },
        h4: {
          fontSize: 'clamp(1.728rem, 3.5vw, 1.953rem)'
        },
        h5: {
          fontSize: 'clamp(1.44rem, 3.5vw, 1.563rem)'
        },
        h6: {
          fontSize: 'clamp(1.2rem, 3.5vw, 1.25rem)'
        },
        '*': {
          gridColumn: 2
        }
      }}
    >
      {children}
    </Box>
  )
}

export default Layout
