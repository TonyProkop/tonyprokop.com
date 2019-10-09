import React from "react"
import Particles from "react-particles-js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ArrowDown } from "../components/icon"
import * as Button from "../components/button"
import { Service, COLORS, SYMBOLS } from "../components/service"
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
                  top: window.innerHeight,
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
          <div className={styles.divider}></div>
          <Heading title="Services" subhead="I build websites that are..." />
          <div className={styles.servicesContainer}>
            <Service
              color={COLORS.ORANGE}
              icon={SYMBOLS.BOLT}
              name="Performant"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <Service
              color={COLORS.PURPLE}
              icon={SYMBOLS.PHONE}
              name="Responsive"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <Service
              color={COLORS.RED}
              icon={SYMBOLS.LOWVISION}
              name="Accessible"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <Service
              color={COLORS.BLUE}
              icon={SYMBOLS.SEARCH}
              name="Discoverable"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <Service
              color={COLORS.GREEN}
              icon={SYMBOLS.LOCK}
              name="Secure"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <Heading title="Recent Work" />
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
