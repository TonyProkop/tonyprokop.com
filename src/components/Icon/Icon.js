import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faBars,
  faRss,
  faTimes,
  faEnvelope,
  faPhone,
  faDownload,
  faGlobe,
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faMobileAlt,
  faBolt,
  faLowVision,
  faSearch,
  faLock,
  faShieldAlt,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Icon.module.scss"

library.add(
  fab,
  faRss,
  faBars,
  faTimes,
  faEnvelope,
  faPhone,
  faDownload,
  faGlobe,
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faMobileAlt,
  faBolt,
  faLowVision,
  faSearch,
  faLock,
  faShieldAlt,
  faExternalLinkAlt
)

export const ArrowUp = ({ onClick }) => (
  <FontAwesomeIcon icon="arrow-up" className={styles.icon} onClick={onClick} />
)

export const ArrowDown = ({ onClick }) => (
  <FontAwesomeIcon
    icon="arrow-down"
    className={styles.icon}
    onClick={onClick}
  />
)

export const ArrowLeft = ({ onClick }) => (
  <FontAwesomeIcon
    icon="arrow-left"
    className={styles.icon}
    onClick={onClick}
  />
)

export const ArrowRight = ({ onClick }) => (
  <FontAwesomeIcon
    icon="arrow-right"
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
  <FontAwesomeIcon icon={["fab", "github"]} className={styles.icon} />
)

export const Linkedin = () => (
  <FontAwesomeIcon icon={["fab", "linkedin"]} className={styles.icon} />
)

export const Facebook = () => false
//   export const Facebook = () => (
//   <a
//     href={facebookUrl}
//     target="_blank"
//     rel="noopener noreferrer"
//     className={styles.facebookLink}
//   >
//     <FontAwesomeIcon icon={["fab", "facebook"]} className={styles.icon} />
//   </a>
// )

export const Email = () => (
  <FontAwesomeIcon icon="envelope" className={styles.icon} />
)

export const Phone = () => (
  <FontAwesomeIcon icon="phone" className={styles.icon} />
)

export const Download = () => <FontAwesomeIcon icon="download" />

export const Globe = () => (
  <FontAwesomeIcon icon="globe" className={styles.icon} />
)

export const MobilePhone = () => <FontAwesomeIcon icon="mobile-alt" />

export const LightningBolt = () => <FontAwesomeIcon icon="bolt" />

export const LowVision = () => <FontAwesomeIcon icon="low-vision" />

export const Search = () => <FontAwesomeIcon icon="search" />

export const Lock = () => <FontAwesomeIcon icon="lock" />

export const Shield = () => <FontAwesomeIcon icon="shield-alt" />

export const ExternalLink = () => <FontAwesomeIcon icon="external-link-alt" />
