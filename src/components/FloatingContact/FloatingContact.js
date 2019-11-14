import React from "react"
import { Email } from "../Icon"
import styles from "./FloatingContact.module.scss"

const FloatingContact = () => {
  return (
    <a
      href="mailto:prokop.tony@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingContact}
    >
      <Email />
    </a>
  )
}

export default FloatingContact
