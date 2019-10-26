import React, { Fragment } from "react"
import { Link } from "gatsby"
import Menu from "./menu"
import Footer from "./footer"
import "./layout.scss"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <Link to="/" className="logo">
          Tony.
        </Link>
        <Menu />
        <main>{children}</main>
        <Footer />
      </Fragment>
    )
  }
}

export default Layout
