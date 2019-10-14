const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve(`./src/templates/blog-post.js`)
  const allPosts = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (allPosts.errors) {
    throw allPosts.errors
  }

  // Create blog posts pages.
  const posts = allPosts.data.allMarkdownRemark.edges
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  const workTemplate = path.resolve(`./src/templates/work.js`)
  const allWork = await graphql(
    `
      {
        allWorkJson {
          edges {
            node {
              slug
              name
              about
              missionSlogan
              mission
              role
              technologies
              url
              image {
                publicURL
              }
            }
          }
        }
      }
    `
  )

  if (allWork.errors) {
    throw allWork.errors
  }

  allWork.data.allWorkJson.edges.forEach((work, index) => {
    console.log(work)
    createPage({
      path: `work/${work.node.slug}`,
      component: workTemplate,
      context: {
        slug: work.node.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
