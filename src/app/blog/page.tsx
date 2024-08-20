import fs from 'fs'
import { List, ListItem, ListItemText, Typography } from '@mui/material'
import Link from 'next/link'

const Blog = () => {
  const blogPosts = fs.readdirSync('src/app/blog', { encoding: 'utf8', recursive: true }).filter(p => p.endsWith('.mdx')).map(p => p.replace('/page.mdx', ''))

  return (
    <>
      <Typography variant="h1">Blog</Typography>
      <List>
        {
          blogPosts.map(post => (
            <ListItem key={post}>
              <ListItemText>
                <Link key={post} href={`/blog/${post}`}>{post}</Link>
              </ListItemText>
            </ListItem>
          ))
        }
      </List>
    </>
  )
}

export default Blog
