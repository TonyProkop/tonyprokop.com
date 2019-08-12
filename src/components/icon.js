import React from "react"
import { Link } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import { githubUrl, facebookUrl, linkedinUrl } from "../utils/config"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faBars,
  faRss,
  faTimes,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./icon.module.scss"

library.add(
  fab,
  faRss,
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faBars,
  faTimes,
  faEnvelope,
  faPhone
)

export const ChevronUp = ({ onClick }) => (
  <FontAwesomeIcon
    icon="chevron-up"
    className={styles.icon}
    onClick={onClick}
  />
)

export const ChevronDown = ({ onClick }) => (
  <FontAwesomeIcon
    icon="chevron-down"
    className={styles.icon}
    onClick={onClick}
  />
)

export const ChevronLeft = ({ onClick }) => (
  <FontAwesomeIcon
    icon="chevron-left"
    className={styles.icon}
    onClick={onClick}
  />
)

export const ChevronRight = ({ onClick }) => (
  <FontAwesomeIcon
    icon="chevron-right"
    className={styles.icon}
    onClick={onClick}
  />
)

export const Bars = ({ onClick }) => (
  <FontAwesomeIcon icon="bars" className={styles.icon} onClick={onClick} />
)

export const Times = ({ onClick }) => (
  <FontAwesomeIcon icon="times" className={styles.icon} onClick={onClick} />
)

export const Rss = () => (
  <Link to="/" target="_blank">
    <FontAwesomeIcon icon="rss" className={styles.icon} />
  </Link>
)

export const Github = () => (
  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={["fab", "github"]} className={styles.icon} />
  </a>
)

export const Linkedin = () => (
  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={["fab", "linkedin"]} className={styles.icon} />
  </a>
)

export const Facebook = () => (
  <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={["fab", "facebook"]} className={styles.icon} />
  </a>
)

export const Email = () => (
  <a href={`mailto:prokop.tony@gmail.com`} rel="noopener noreferrer">
    <FontAwesomeIcon icon="envelope" className={styles.icon} />
  </a>
)

export const Phone = () => (
  <a href="tel:+14029888222" rel="noopener noreferrer">
    <FontAwesomeIcon icon="phone" className={styles.icon} />
  </a>
)
