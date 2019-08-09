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

export const ChevronUp = () => (
  <FontAwesomeIcon icon="chevron-up" className="icon" />
)

export const ChevronDown = () => (
  <FontAwesomeIcon icon="chevron-down" className="icon" />
)

export const ChevronLeft = () => (
  <FontAwesomeIcon icon="chevron-left" className="icon" />
)

export const ChevronRight = () => (
  <FontAwesomeIcon icon="chevron-right" className="icon" />
)

export const Bars = ({ onClick }) => (
  <FontAwesomeIcon icon="bars" className="icon" onClick={onClick} />
)

export const Times = ({ onClick }) => (
  <FontAwesomeIcon icon="times" className="icon" onClick={onClick} />
)

export const Rss = () => (
  <Link to="/" target="_blank">
    <FontAwesomeIcon icon="rss" className="icon" />
  </Link>
)

export const Github = () => (
  <a href={githubUrl} target="_blank">
    <FontAwesomeIcon icon={["fab", "github"]} className="icon" />
  </a>
)

export const Linkedin = () => (
  <a href={linkedinUrl} target="_blank">
    <FontAwesomeIcon icon={["fab", "linkedin"]} className="icon" />
  </a>
)

export const Facebook = () => (
  <a href={facebookUrl} target="_blank">
    <FontAwesomeIcon icon={["fab", "facebook"]} className="icon" />
  </a>
)

export const Email = () => (
  <a href={`mailto:prokop.tony@gmail.com`}>
    <FontAwesomeIcon icon="envelope" className="icon" />
  </a>
)

export const Phone = () => (
  <a href="tel:+14029888222">
    <FontAwesomeIcon icon="phone" className="icon" />
  </a>
)
