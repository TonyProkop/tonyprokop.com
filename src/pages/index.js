import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import classnames from "classnames"
import SEO from "../components/SEO"
import Services from "../components/Services"
import { ArrowDown, ArrowRight } from "../components/Icon"
import styles from "./index.module.scss"

class Home extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="Home">
        <SEO title="Home" />
        <div className={styles.heroContainer}>
          <div className={classnames(styles.hero, "contentContainer")}>
            <h1 className={styles.heading}>
              I'm Tony Prokop, a <br /> front-end web developer.
            </h1>
            <p>Experienced in React, .NET, and Ecommerce.</p>
            <p>Have a project you'd like to discuss?</p>
            <p>
              Let's chat:{" "}
              <a
                href="mailto:prokop.tony@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                prokop.tony@gmail.com.
              </a>
            </p>
            <ArrowDown
              onClick={() =>
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                })
              }
            />
          </div>
        </div>
        <Services />
        <div
          className={classnames(
            styles.workContainer,
            "contentContainer",
            "section"
          )}
        >
          <h2>Recent Work</h2>
          {this.props.data.allWorkJson.edges.map(x => (
            <Link to={`work/${x.node.slug}`} className={styles.work}>
              <div>
                <div className={styles.name}>{x.node.name}</div>
                <div className={styles.viewWork}>
                  View Work <ArrowRight />
                </div>
              </div>
              <img src={x.node.image.publicURL} alt={x.node.name} />
            </Link>
          ))}
        </div>
      </Layout>
    )
  }
}

export default Home

export const pageQuery = graphql`
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
`
