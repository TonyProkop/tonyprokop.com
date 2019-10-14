import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as Button from "../components/button"
import { ArrowDown } from "../components/icon"

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
      <div>
        <h1>{name}</h1>
        <p>{about}</p>
        <Button.Primary>
          View Project
          <ArrowDown />
        </Button.Primary>
        <img src={image.publicURL} alt={name}></img>
      </div>
      <div>
        <h2>Mission</h2>
        <h3>{missionSlogan}</h3>
        <p>{mission}</p>
      </div>
      <div>
        <div>
          <h2>Role</h2>
          <h3>{role}</h3>
        </div>
        <div>
          <h2>Technology</h2>
          <h3>{technologies.join(", ")}</h3>
        </div>
        <div>
          <h2>Live Website</h2>
          <h3>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </h3>
        </div>
      </div>
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
