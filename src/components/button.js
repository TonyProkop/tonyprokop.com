import React from "react"
import { Link } from "gatsby"
import classnames from "classnames"
import styles from "./button.module.scss"

const TYPES = {
  WHITE: "white",
}

const Button = ({ to, buttonType, children }) => {
  const className = classnames(styles.button, styles[buttonType])
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

export const White = props => (
  <Button {...props} buttonType={TYPES.WHITE}></Button>
)
