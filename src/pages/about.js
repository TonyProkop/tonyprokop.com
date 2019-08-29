import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { ChevronRight } from "../components/icon"
import profilePic from "../../content/assets/profile-pic.jpg"
import SEO from "../components/seo"
import { speedwayMotorsUrl, myWeddingUrl } from "../utils/config"
import styles from "./about.module.scss"

const About = () => (
  <Layout title="About Me">
    <SEO title="About Me" />
    <div className={styles.aboutContainer}>
      <h1>Hi, I'm Tony Prokop.</h1>
      <Link to="/contact" className={`${styles.getInTouch} callToActionLink`}>
        Get in touch
        <ChevronRight />
      </Link>
      <img src={profilePic} className={styles.profilePic} />
      <div className="content">
        <p>
          I'm a web developer based in Omaha, NE, currently excited about React,
          static site generators, and Netlify.
        </p>
        <p>
          During the day I help maintain the{" "}
          <a href={speedwayMotorsUrl} target="_blank" rel="noopener noreferrer">
            Speedway Motors
          </a>{" "}
          ecommerce platform, which supplies street and performance automotive
          parts to car enthusiasts around the world. At Speedway, I lead a team
          focused on implementing a website redesign.
        </p>
        <p>
          In my free time you might find me writing for this blog, camping, or
          helping my beautiful fiancé prepare for{" "}
          <a href={myWeddingUrl} target="_blank" rel="noopener noreferrer">
            our wedding
          </a>{" "}
          in 2020! 🎉
        </p>
        <p>
          I'm available for side projects,{" "}
          <Link to="/contact">give me a shout!</Link>
        </p>
      </div>
    </div>
  </Layout>
)

export default About
