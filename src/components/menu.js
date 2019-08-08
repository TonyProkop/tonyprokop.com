import React, { Fragment, useState } from "react"
import { Link } from "gatsby"
import { Bars, Times, Github, Facebook, Linkedin, Rss } from "./icon"
import styles from "./menu.module.scss"

const Menu = () => {
  const [ isMenuActive, setIsMenuActive ] = useState(false)

  if (isMenuActive) {
    return <Fragment>
        <Times onClick={() => setIsMenuActive(false)} />
        <div className={styles.menuContainer}>
            <div className={styles.myLinks}>
                <Link to="/">prokop.tony@gmail.com</Link>
                <Link to="/">(402) 988-8222</Link>
                <Github />
                <Facebook />
                <Linkedin />
                <Rss />
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
    </Fragment>
  } else {
    return <Bars onClick={() => setIsMenuActive(true)} />
  }
}

export default Menu
