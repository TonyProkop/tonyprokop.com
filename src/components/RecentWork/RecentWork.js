import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import classnames from "classnames"
import { ArrowRight } from "../Icon"
import styles from "./RecentWork.module.scss"

const RecentWork = ({ id }) => {
  const data = useStaticQuery(graphql`
    {
      allWorkJson {
        edges {
          node {
            slug
            name
            about
            overview
            role
            technologies
            url
            primaryImage {
              childImageSharp {
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div
      id={id}
      className={classnames(
        styles.workContainer,
        "contentContainer",
        "section"
      )}
    >
      <h2>Recent Work</h2>
      {data
        ? data.allWorkJson.edges.map(x => (
            <Link
              to={`/work/${x.node.slug}`}
              key={x.node.slug}
              className={styles.work}
            >
              <div>
                <div className={styles.name}>{x.node.name}</div>
                <div className={styles.viewWork}>
                  View Work <ArrowRight />
                </div>
              </div>
              <div className={styles.workImage}>
                <Img fixed={x.node.primaryImage.childImageSharp.fixed} />
              </div>
            </Link>
          ))
        : false}
    </div>
  )
}

export default RecentWork
