import { FC, ReactNode } from 'react'
import { Container } from '@mui/material'

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Container maxWidth="md"
      sx={{
        paddingBlock: '10vh',
        h1: {
          fontSize: '3.815rem'
        },
        h2: {
          fontSize: '3.052rem'
        },
        h3: {
          fontSize: '2.441rem'
        },
      }}
    >
      {children}
    </Container>
  )
}

export default Layout
