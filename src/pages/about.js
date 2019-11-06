import React from "react"
import { Link } from "gatsby"
import classnames from "classnames"
import Layout from "../components/Layout"
import profilePic from "../../content/assets/profile-pic.jpg"
import SEO from "../components/SEO"
import { speedwayMotorsUrl, myWeddingUrl } from "../utils/config"
import styles from "./about.module.scss"

const About = () => (
  <Layout title="About Me">
    <SEO title="About Me" />
    <div
      className={classnames(
        styles.aboutContainer,
        "section",
        "contentContainer"
      )}
    >
      <img src={profilePic} alt="Tony Prokop" className={styles.profilePic} />
      <h1>Hi, I'm Tony Prokop.</h1>
      <p>
        I'm a front-end web developer based in Omaha, NE, currently excited
        about React, static site generators, and Netlify.
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
        In my free time you might find me installing IoT home automation devices
        in my house, playing Zelda: Breath of the Wild, hiking, or helping my
        beautiful fiancé plan{" "}
        <a href={myWeddingUrl} target="_blank" rel="noopener noreferrer">
          our wedding
        </a>{" "}
        in 2020! 🎉
      </p>
      <p>
        I'm available for side projects,{" "}
        <a
          href="mailto:prokop.tony@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          give me a shout!
        </a>
      </p>
    </div>
  </Layout>
)

export default About
