import React, { Fragment } from "react"
import { Link } from "gatsby"
import Menu from "./menu"
import * as Button from "./button"
import { Github, Facebook, Linkedin, Email, Phone } from "./icon"
import "./layout.scss"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <div className="logo">
          <Link to="/">Tony.</Link>
        </div>
        <Menu />
        <main>{children}</main>
        <footer></footer>
      </Fragment>
    )
  }
}

export default Layout
