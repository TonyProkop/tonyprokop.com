import React from "react"
import classnames from "classnames"
import styles from "./button.module.scss"

const TYPES = {
  WHITE: "white",
}

const Button = ({ buttonType }) => {
  return (
    <button className={(classNames = styles[buttonType])}>{children}</button>
  )
}

export const White = props => (
  <Button {...props} buttonType={TYPES.WHITE}></Button>
)
