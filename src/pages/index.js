import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ChevronDown, ChevronRight } from "../components/icon"
import styles from "./index.module.scss"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className={styles.banner}>
          <h1 className={styles.heading}>
            I'm <span>passionate</span> about <br /> building clean experiences.
          </h1>
          <ChevronDown />
        </div>
        <div className={styles.writingContainer}>
          <div className={styles.writingHeader}>
            <h2>Writing</h2>
            <Link to="/blog" className="callToActionLink">
              View Archives
              <ChevronRight />
            </Link>
          </div>

          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3 className={styles.post}>
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                {/* <small>{node.frontmatter.date}</small> */}
                {/* <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                /> */}
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
