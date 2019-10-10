import React from "react"
import { Link } from "gatsby"
import classnames from "classnames"
import styles from "./button.module.scss"

const TYPES = {
  WHITE: "white",
  PURPLE: "purple",
  RED: "red",
  GREEN: "green",
  BLUE: "blue",
  ORANGE: "orange",
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

export const Purple = props => (
  <Button {...props} buttonType={TYPES.PURPLE}></Button>
)

export const Red = props => <Button {...props} buttonType={TYPES.RED}></Button>

export const Green = props => (
  <Button {...props} buttonType={TYPES.GREEN}></Button>
)

export const Blue = props => (
  <Button {...props} buttonType={TYPES.BLUE}></Button>
)

export const Orange = props => (
  <Button {...props} buttonType={TYPES.ORANGE}></Button>
)
