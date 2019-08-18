import React, { Fragment } from "react"
import { Link } from "gatsby"
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
        <main className="clearfix">{children}</main>
        <footer>
          {/* © {new Date().getFullYear()} Tony Prokop */}
        </footer>
      </Fragment>
    )
  }
}

export default Layout
