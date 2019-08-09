import React, { Fragment, useState } from "react"
import { Link } from "gatsby"
import { Bars, Times, Github, Facebook, Linkedin, Rss } from "./icon"
import {
  githubUrl,
  facebookUrl,
  linkedinUrl,
  email,
  phone,
} from "../utils/config"
import profilePic from "../../content/assets/profile-pic.jpg"
import styles from "./menu.module.scss"

const Menu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)

  if (isMenuActive) {
    return (
        <div className={styles.menuContainer}>
          <Times onClick={() => setIsMenuActive(false)} />
          <div className={styles.myLinks}>
            <img src={profilePic} className={styles.profilePic} />
            <a href={`mailto:${email}`}>{email}</a>
            <a href="tel:+14029888222">{phone}</a>
            <div className={styles.externalLinks}>
              <a href={githubUrl} target="_blank">
                <Github />
              </a>
              <a href={facebookUrl} target="_blank">
                <Facebook />
              </a>
              <a href={linkedinUrl} target="_blank">
                <Linkedin />
              </a>
              <Link to="/" target="_blank">
                <Rss />
              </Link>
            </div>
          </div>
          <div className={styles.menuLinks}>
            <Link to="/">Home</Link>
            <Link to="/work">My Work</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
    )
  } else {
    return <Bars onClick={() => setIsMenuActive(true)} />
  }
}

export default Menu
