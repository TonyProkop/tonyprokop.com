import React, { Fragment } from "react"
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
  faDownload,
  faGlobe,
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
  faPhone,
  faDownload,
  faGlobe
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
  <a href="/rss.xml" target="_blank" className={styles.rssLink}>
    <FontAwesomeIcon icon="rss" className={styles.icon} />
  </a>
)

export const Github = () => (
  <a
    href={githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.githubLink}
  >
    <FontAwesomeIcon icon={["fab", "github"]} className={styles.icon} />
  </a>
)

export const Linkedin = ({ includeText }) => (
  <a
    href={linkedinUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.linkedinLink}
  >
    <FontAwesomeIcon icon={["fab", "linkedin"]} className={styles.icon} />
    {includeText ? (
      <span className={styles.linkText}>linkedin.com/in/tony-prokop</span>
    ) : (
      false
    )}
  </a>
)

export const Facebook = () => (
  <a
    href={facebookUrl}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.facebookLink}
  >
    <FontAwesomeIcon icon={["fab", "facebook"]} className={styles.icon} />
  </a>
)

export const Email = ({ includeText }) => (
  <a
    href={`mailto:prokop.tony@gmail.com`}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.emailLink}
  >
    <FontAwesomeIcon icon="envelope" className={styles.icon} />
    {includeText ? (
      <span className={styles.linkText}>prokop.tony@gmail.com</span>
    ) : (
      false
    )}
  </a>
)

export const Phone = ({ includeText }) => (
  <a
    href="tel:+14029888222"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.phoneLink}
  >
    <FontAwesomeIcon icon="phone" className={styles.icon} />
    {includeText ? (
      <span className={styles.linkText}>(402) 988-8222</span>
    ) : (
      false
    )}
  </a>
)

export const Download = () => <FontAwesomeIcon icon="download" />

export const Globe = ({ includeText }) => (
  <Fragment>
    <FontAwesomeIcon icon="globe" className={styles.icon} />
    {includeText ? (
      <span className={styles.linkText}>tonyprokop.com</span>
    ) : (
      false
    )}
  </Fragment>
)
