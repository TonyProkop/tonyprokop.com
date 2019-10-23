import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ArrowDown } from "../components/icon"
import * as Button from "../components/button"
import { Service, SYMBOLS } from "../components/service"
import Heading from "../components/heading"
import styles from "./index.module.scss"

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="Home">
        <SEO title="Home" />
        <div className="content">
          <div className={styles.banner}>
            <div className={styles.bannerText}>
              <h1 className={styles.heading}>
                I'm Tony Prokop, a <br /> full-stack web developer.
              </h1>
              <p>Experienced in React, .NET, and Ecommerce.</p>
              <p>Have a project you'd like to discuss?</p>
              <p>
                Let's chat:{" "}
                <a href="mailto:prokop.tony@gmail.com">
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
          <div className={styles.divider}></div>
          <Heading title="Services" subhead="I build websites that are..." />
          <div className={styles.servicesContainer}>
            <Service
              icon={SYMBOLS.BOLT}
              name="Performant"
              description="Blazing fast page load speeds, even on 3G networks and outdated hardware."
            />
            <Service
              icon={SYMBOLS.PHONE}
              name="Responsive"
              description="My designs function on any device mobile, tablet, and desktop."
            />
            <Service
              icon={SYMBOLS.LOWVISION}
              name="Accessible"
              description="Keyboard friendly and conforming to WCAG AAA color contrast standards."
            />
            <Service
              icon={SYMBOLS.SEARCH}
              name="Discoverable"
              description="Sitemaps, webmaster tools, and keywords - show up in Google and Bing search results."
            />
            <Service
              icon={SYMBOLS.LOCK}
              name="Secure"
              description="OWASP practices reduce vulnerabilities like cross site scripting, sql injection, sensitive data exposure, etc."
            />
            <Service
              icon={SYMBOLS.LOCK}
              name="Reliable"
              description="Unit, integration, and end-to-end tests ensure new changes don’t introduce bugs."
            />
            <Heading title="Recent Work" />
            <div className={styles.workContainer}>
              {this.props.data.allWorkJson.edges.map(x => (
                <div className={styles.work}>
                  <img src={x.node.image.publicURL} alt={x.node.name} />
                  <p>{x.node.technologies.join(", ")}</p>
                  <Button.Purple to={`work/${x.node.slug}`}>
                    View Project
                  </Button.Purple>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

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
