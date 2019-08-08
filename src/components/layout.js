import React, { Fragment } from "react"
import { Link } from "gatsby"
import {
  Bars,
  ChevronUp,
  PaperPlane,
  Github,
  Linkedin,
  Facebook,
  Rss,
} from "./icon"
import "./layout.scss"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <header>
          <div className="logo">
            <Link to="/">
              Tony<span>.</span>
            </Link>
          </div>
          <Bars />
        </header>
        <div className="quickLinks">
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
