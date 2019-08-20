import React from "react"
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
  faDownload
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

// Commented out until I setup the rss feed.
export const Rss = () => false
// <Link to="/" target="_blank" className={styles.rssLink}>
//   <FontAwesomeIcon icon="rss" className={styles.icon} />
// </Link>

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
