import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import classnames from "classnames"
import { ArrowRight } from "../Icon"
import styles from "./RecentWork.module.scss"

const RecentWork = () => {
  const data = useStaticQuery(graphql`
    {
      allWorkJson {
        edges {
          node {
            slug
            name
            about
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
  `)

  return (
    <div
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
              <img src={x.node.image.publicURL} alt={x.node.name} />
            </Link>
          ))
        : false}
    </div>
  )
}

export default RecentWork
