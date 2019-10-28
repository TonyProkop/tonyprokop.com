import React from "react"
import { Github, Linkedin } from "../Icon"
import { githubUrl, linkedinUrl } from "../../utils/config"
import classnames from "classnames"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={classnames(styles.footer, "section")}>
      <div className="contentContainer">
        <h2 className={styles.footerTitle}>Let's Work Together.</h2>
        <p className={styles.email}>
          Send me an email:{" "}
          <a
            href="mailto:prokop.tony@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            prokop.tony@gmail.com.
          </a>
        </p>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedin}
        >
          <Linkedin />
          <span>Connect on Linkedin</span>
        </a>
        <br />
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.github}
        >
          <Github />
          <span>Github</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
