import React from "react"
import { Link, graphql } from "gatsby"
import Particles from "react-particles-js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ArrowDown, ArrowRight } from "../components/icon"
import * as Button from "../components/button"
import { Service, COLORS } from "../components/service"
import styles from "./index.module.scss"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" />
        <div className="content">
          <div className={styles.banner}>
            <div className={styles.bannerText}>
              <h1 className={styles.heading}>
                I'm Tony Prokop, <br /> a full-stack web developer.
              </h1>
              <Button.White to="/contact">Let's Talk!</Button.White>
            </div>
            <div className={styles.availability}>
              Available for new projects
            </div>
            <ArrowDown
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
            />
            <div className={styles.particlesContainer}>
              <Particles
                canvasClassName={styles.particles}
                params={particlesConfig}
              />
            </div>
          </div>

          <div className={styles.writingContainer}>
            <div className={styles.servicesContainer}>
              <Service
                color={COLORS.PURPLE}
                name="Responsive"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              ></Service>
              <Service
                color={COLORS.ORANGE}
                name="Performant"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              ></Service>
              <Service
                color={COLORS.GREEN}
                name="Accessible"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              ></Service>
              <Service
                color={COLORS.BLUE}
                name="Discoverable"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              ></Service>
              <Service
                color={COLORS.RED}
                name="Secure"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              ></Service>
            </div>

            <div className={styles.writingHeader}>
              <h2>Writing</h2>
              <Link to="/blog" className="callToActionLink">
                View Archives
                <ArrowRight />
              </Link>
            </div>

            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug}>
                  <h3 className={styles.post}>
                    <Link to={node.fields.slug}>{title}</Link>
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
        </div>
      </Layout>
    )
  }
}

const particlesConfig = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    line_linked: {
      enable: true,
      opacity: 0.02,
    },
    move: {
      direction: "right",
      speed: 0.05,
    },
    size: {
      value: 2,
    },
    opacity: {
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.05,
      },
    },
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      push: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
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
