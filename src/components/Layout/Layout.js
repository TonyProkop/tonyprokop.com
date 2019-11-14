import React, { Fragment } from "react"
import classnames from "classnames"
import { Link } from "gatsby"
import logo from "../../../content/assets/logo.svg"
import Menu from "../Menu"
import Footer from "../Footer"
import styles from "./Layout.module.scss"
import "./Layout.scss"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <Link to="/" className={classnames(styles.logo, "logo")}>
          <img src={logo} alt="Logo for tonyprokop.com" />
        </Link>
        <Menu />
        <main>{children}</main>
        <Footer />
      </Fragment>
    )
  }
}

export default Layout
