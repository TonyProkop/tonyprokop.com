import React from "react"
import { graphql } from "gatsby"
import classnames from "classnames"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import RecentWork from "../components/RecentWork"
import { ArrowDown } from "../components/Icon"
import styles from "./work.module.scss"
import { ExternalLink } from "../components/Icon/Icon"

const WorkTemplate = ({ data, location }) => {
  const {
    name,
    about,
    missionSlogan,
    mission,
    role,
    technologies,
    url,
    image,
  } = data.workJson

  return (
    <Layout location={location} title={name}>
      <SEO title={name} description={about} />
      <div className={classnames(styles.hero, "contentContainer")}>
        <div className={styles.heroText}>
          <h1>{name}</h1>
          <p>{about}</p>
          <ArrowDown
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }
          />
        </div>
        <img src={image.publicURL} alt={name}></img>
      </div>
      <div className={classnames(styles.workDetailsContainer, "section")}>
        <div
          className={classnames(
            styles.workDetailsContentContainer,
            "contentContainer"
          )}
        >
          <div className={styles.missionContainer}>
            <h2 className={styles.label}>Mission</h2>
            <h3>{missionSlogan}</h3>
            <p>{mission}</p>
          </div>
          <div className={styles.detailsSidebarContainer}>
            <div className={styles.sidebarSection}>
              <h2 className={styles.label}>Role</h2>
              <h3>{role}</h3>
            </div>
            <div className={styles.sidebarSection}>
              <h2 className={styles.label}>Technology</h2>
              <h3>{technologies.join(", ")}</h3>
            </div>
            <div className={styles.sidebarSection}>
              <h2 className={styles.label}>Live Website</h2>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <h3>{url}</h3>
                <ExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>
      <RecentWork />
    </Layout>
  )
}

export default WorkTemplate

export const pageQuery = graphql`
  query WorkBySlug($slug: String!) {
    workJson(slug: { eq: $slug }) {
      name
      about
      missionSlogan
      mission
      role
      technologies
      url
      image {
        publicURL
      }
    }
  }
`
