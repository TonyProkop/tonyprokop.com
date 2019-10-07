import React from "react"
import styles from "./heading.module.scss"

const Header = ({ title, subhead }) => (
  <div className={styles.heading}>
    <h2>{title}</h2>
    <p>{subhead}</p>
  </div>
)

export default Header
