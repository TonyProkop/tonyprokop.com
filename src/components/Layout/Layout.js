import React, { Fragment } from "react"
import { Link } from "gatsby"
import Menu from "../Menu"
import Footer from "../Footer"
import FloatingContact from "../FloatingContact"
import styles from "./Layout.module.scss"
import "./Layout.scss"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <Link to="/" className={styles.logo}>
          Tony.
        </Link>
        <Menu />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </Fragment>
    )
  }
}

export default Layout
