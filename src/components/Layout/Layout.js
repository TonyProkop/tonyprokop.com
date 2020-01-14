import React, { Fragment } from "react"
import classnames from "classnames"
import { Link } from "gatsby"
import logo from "../../../content/assets/logo.svg"
import Footer from "../Footer"
import Home from "../../../content/assets/home.svg"
import ChevronRight from "../../../content/assets/chevron-right.svg"
import Briefcase from "../../../content/assets/briefcase.svg"
import Edit from "../../../content/assets/edit-3.svg"
import User from "../../../content/assets/user.svg"
import File from "../../../content/assets/file.svg"
import MessageCircle from "../../../content/assets/message-circle.svg"
import Sun from "../../../content/assets/sun.svg"
import styles from "./Layout.module.scss"
import "./Layout.scss"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <header>
          <ul class="menu">
            <li>
              <object type="image/svg+xml" data={Home}></object>
              Home
              <object type="image/svg+xml" data={ChevronRight}></object>
            </li>
            <li>
              <object type="image/svg+xml" data={Briefcase}></object>
              Projects
              <object type="image/svg+xml" data={ChevronRight}></object>
            </li>
            <li>
              <object type="image/svg+xml" data={Edit}></object>
              Blog
              <object type="image/svg+xml" data={ChevronRight}></object>
            </li>
            <li>
              <object type="image/svg+xml" data={User}></object>
              About
              <object type="image/svg+xml" data={ChevronRight}></object>
            </li>
            <li>
              <object type="image/svg+xml" data={File}></object>
              Resume
              <object type="image/svg+xml" data={ChevronRight}></object>
            </li>
            <li>
              <object type="image/svg+xml" data={MessageCircle}></object>
              Contact
              <object type="image/svg+xml" data={ChevronRight}></object>
            </li>
          </ul>
          <div>
            <object type="image/svg+xml" data={Sun}></object>
          </div>
        </header>
        <main>{children}</main>
        <Footer />
      </Fragment>
    )
  }
}

export default Layout
