import React from "react"
import Img from "gatsby-image"
import classnames from "classnames"
import Service, { SYMBOLS } from "../Service"
import styles from "./Services.module.scss"
import { Link, useStaticQuery } from "gatsby"
import { ArrowRight } from "../Icon"

const Services = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 904) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div className={classnames(styles.servicesContainer, "section")}>
      <div className="contentContainer">
        <div className={styles.aboutMeContainer}>
          <Img fluid={data.file.childImageSharp.fluid} alt="Tony Prokop" />
          <Link to="/about" className={styles.aboutMeLink}>
            About me
            <ArrowRight></ArrowRight>
          </Link>
        </div>
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
            description="Keyboard friendly and conforming to WCAG color contrast standards."
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
            icon={SYMBOLS.SHIELD}
            name="Reliable"
            description="Unit, integration, and end-to-end tests ensure new changes don’t introduce bugs."
          />
        </div>
      </div>
    </div>
  )
}

export default Services
