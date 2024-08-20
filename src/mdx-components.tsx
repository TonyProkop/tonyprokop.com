import type { MDXComponents } from 'mdx/types'
import { Link, List, ListItem, ListItemText, Typography } from '@mui/material'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <Typography variant="h1">{children}</Typography>
    ),
    h2: ({ children }) => (
      <Typography variant="h2">{children}</Typography>
    ),
    h3: ({ children }) => (
      <Typography variant="h3">{children}</Typography>
    ),
    h4: ({ children }) => (
      <Typography variant="h4">{children}</Typography>
    ),
    p: ({ children }) => (
      <Typography>{children}</Typography>
    ),
    ul: ({ children }) => (
      <List dense>{children}</List>
    ),
    li: ({ children }) => (
      <ListItem>
        <ListItemText>{children}</ListItemText>
      </ListItem>
    ),
    a: ({ children, href }) => (
      <Link href={href}>
        {children}
      </Link>
    ),
    ...components,
  }
}
