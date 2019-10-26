import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import styles from "./Blog.module.scss"

class Blog extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    const postsGroupedByYear = posts.reduce((accumulator, currentValue) => {
      const key = currentValue.node.frontmatter.date
      accumulator[key] = (accumulator[key] || []).concat(currentValue)
      return accumulator
    }, {})

    let years = Object.keys(postsGroupedByYear)
    years.sort()
    years.reverse()

    return (
      <Layout>
        <SEO title="The Archive" />
        <div className="content">
          <h1>The Archive.</h1>
          <div className={styles.archiveContainer}>
            {years.map(year => {
              const renderedPosts = postsGroupedByYear[year].map(p => (
                <li key={p.node.fields.slug} className={styles.post}>
                  <Link to={p.node.fields.slug}>
                    {p.node.frontmatter.title}
                  </Link>
                </li>
              ))
              return (
                <Fragment key={year}>
                  <div className={styles.year}>{year}</div>
                  <ul className={styles.postList}>{renderedPosts}</ul>
                </Fragment>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY", locale: "")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
