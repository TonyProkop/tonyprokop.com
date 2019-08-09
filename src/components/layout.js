import React, { Fragment } from "react"
import { Link } from "gatsby"
import {
  PaperPlane,
  Github,
  Linkedin,
  Facebook,
  Rss,
} from "./icon"
import Menu from "./menu"
import "./layout.scss"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <div className="logo">
          <Link to="/">
            Tony<span>.</span>
          </Link>
        </div>
        <Menu />
        <div className="socialLinks">
          <Github />
          <Linkedin />
          <Facebook />
          <Rss />
        </div>
        <PaperPlane />
        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()} Tony Prokop
        </footer> */}
      </Fragment>
    )
  }
}

export default Layout
