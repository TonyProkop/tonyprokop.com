import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ArrowDown, ArrowRight } from "../components/icon"
import * as Button from "../components/button"
import { Service, SYMBOLS } from "../components/service"
import styles from "./index.module.scss"

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="Home">
        <SEO title="Home" />
        <div className={styles.hero}>
          <div>
            <h1 className={styles.heading}>
              I'm Tony Prokop, a <br /> full-stack web developer.
            </h1>
            <p>Experienced in React, .NET, and Ecommerce.</p>
            <p>Have a project you'd like to discuss?</p>
            <p>
              Let's chat:{" "}
              <a href="mailto:prokop.tony@gmail.com">prokop.tony@gmail.com.</a>
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
        <div className={styles.servicesContainer}>
          <div className={styles.services}>
            <img src="https://previews.123rf.com/images/rido/rido1405/rido140500028/28227494-portrait-of-young-handsome-man-smiling-outdoor.jpg" />
            <h2>I build websites that are...</h2>
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
          </div>
        </div>
        <div className={styles.workContainer}>
          {this.props.data.allWorkJson.edges.map(x => (
            <div className={styles.work}>
              <div>
                <div className={styles.name}>{x.node.name}</div>
                <Link to={`work/${x.node.slug}`}>
                  View Work <ArrowRight />
                </Link>
              </div>
              <img src={x.node.image.publicURL} alt={x.node.name} />
            </div>
          ))}
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
