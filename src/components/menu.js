import React, { useState } from "react"
import { Link } from "gatsby"
import {
  Bars,
  Times,
  Github,
  Facebook,
  Linkedin,
  Rss,
  Email,
  Phone,
} from "./icon"

import styles from "./menu.module.scss"

const Menu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)

  if (isMenuActive) {
    return (
      <div className={`${styles.menuContainer} ${styles.active}`}>
        <Times onClick={() => setIsMenuActive(false)} />
          <div className={styles.externalLinks}>
            <Email />
            <Phone />
            <Linkedin />
            <Github />
            <Facebook />
            <Rss />
          </div>
        <div className={styles.menuLinks}>
          <Link to="/">Home</Link>
          <Link to="/work">My Work</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/resume">Resumé</Link>
          <Link to="/about">About me</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.menuContainer}>
        <Bars onClick={() => setIsMenuActive(true)} />
      </div>
    )
  }
}

export default Menu
