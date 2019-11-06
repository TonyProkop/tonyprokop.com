import React, { useState } from "react"
import { Link } from "gatsby"
import classnames from "classnames"
import { githubUrl, linkedinUrl } from "../../utils/config"
import {
  Bars,
  Times,
  Github,
  Facebook,
  Linkedin,
  Rss,
  Email,
  Phone,
} from "../Icon"

import styles from "./Menu.module.scss"

const Menu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)

  if (isMenuActive) {
    return (
      <div className={classnames("menu", styles.menuContainer, styles.active)}>
        <button
          className={styles.closeMenu}
          onClick={() => setIsMenuActive(false)}
        >
          <Times />
        </button>
        <div
          className={classnames(styles.activeMenuContainer, "contentContainer")}
        >
          <div className={classnames(styles.externalLinks)}>
            <a
              href="mailto:prokop.tony@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Email />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
          </div>
          <div className={classnames(styles.menuLinks)}>
            <div>
              <Link to="/" onClick={() => setIsMenuActive(false)}>
                Home
              </Link>
            </div>
            <div>
              <Link to="/work" onClick={() => setIsMenuActive(false)}>
                My Work
              </Link>
            </div>
            <div>
              <Link to="/resume" onClick={() => setIsMenuActive(false)}>
                Resumé
              </Link>
            </div>
            <div>
              <Link to="/about" onClick={() => setIsMenuActive(false)}>
                About me
              </Link>
            </div>
            <div>
              <a
                href="mailto:prokop.tony@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={classnames("menu", styles.menuContainer)}>
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