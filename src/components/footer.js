import React from "react"
import { Github, Linkedin } from "./icon"
import { githubUrl, linkedinUrl } from "../utils/config"
import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContentContainer}>
        <h2>Let's Work Together.</h2>
        <p className={styles.email}>
          Send me an email:{" "}
          <a href="mailto:prokop.tony@gmail.com" target="_blank">
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
