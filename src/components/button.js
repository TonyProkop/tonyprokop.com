import React from "react"
import classnames from "classnames"
import styles from "./button.module.scss"

const TYPES = {
  WHITE: "white",
}

const Button = ({ buttonType, children }) => {
  const className = classnames(styles.button, styles[buttonType])
  return <button className={className}>{children}</button>
}

export const White = props => (
  <Button {...props} buttonType={TYPES.WHITE}></Button>
)
