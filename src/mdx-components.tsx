import type { MDXComponents } from 'mdx/types'
import { Link, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import ArrowRight from "./app/components/icons/ArrowRight"

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
      <List>{children}</List>
    ),
    li: ({ children }) => (
      <ListItem>
        <ListItemIcon>
          <ArrowRight />
        </ListItemIcon>
        <ListItemText primary={children} />
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
