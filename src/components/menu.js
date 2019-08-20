import React, { useState } from "react"
import { Link } from "gatsby"
import { IS_MY_WORK_ENABLED, IS_RESUME_ENABLED } from "../utils/config"
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
      <div className={`menu ${styles.menuContainer} ${styles.active}`}>
        <button
          className={styles.closeMenu}
          onClick={() => setIsMenuActive(false)}
        >
          <Times />
        </button>
        <div className={styles.externalLinks}>
          <Email />
          <Phone />
          <Linkedin />
          <Github />
          <Facebook />
          <Rss />
        </div>
        <div className={styles.menuLinks}>
          <div>
            <Link to="/">Home</Link>
          </div>
          {IS_MY_WORK_ENABLED ? (
            <div>
              <Link to="/work">My Work</Link>
            </div>
          ) : (
            false
          )}
          <div>
            <Link to="/blog">Blog</Link>
          </div>
          {IS_RESUME_ENABLED ? (
            <div>
              <Link to="/resume">Resumé</Link>
            </div>
          ) : (
            false
          )}
          <div>
            <Link to="/about">About me</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={`menu ${styles.menuContainer}`}>
        <button
          className={styles.openMenu}
          onClick={() => setIsMenuActive(true)}
        >
          <Bars />
        </button>
      </div>
    )
  }
}

export default Menu
