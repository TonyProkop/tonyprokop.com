import React from "react"
import Layout from "../components/Layout"
import classnames from "classnames"
import SEO from "../components/SEO"
import Services from "../components/Services"
import RecentWork from "../components/RecentWork/RecentWork"
import { ArrowDown } from "../components/Icon"
import styles from "./index.module.scss"

const Home = ({ location }) => {
  return (
    <Layout location={location} title="Home">
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
      <RecentWork id="recentWork" />
    </Layout>
  )
}

export default Home
