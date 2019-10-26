import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { ArrowDown, ArrowRight } from "../components/Icon"
import Service, { SYMBOLS } from "../components/Service"
import styles from "./index.module.scss"

class BlogIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="Home">
        <SEO title="Home" />
        <div className={styles.heroContainer}>
          <div className={styles.hero}>
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
        <div className={styles.servicesContainer}>
          <div className={styles.servicesContent}>
            <img
              src="https://www.photoblog.com/learn/wp-content/uploads/2018/12/rule-of-thirds-male-pose.jpg"
              alt="Tony Prokop"
            />
            <h2>I build websites that are...</h2>
            <div className={styles.services}>
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
        </div>
        <div className={styles.workContainer}>
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
