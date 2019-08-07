import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    fab } from '@fortawesome/free-brands-svg-icons'
import { 
    faChevronUp,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faBars,
    faPaperPlane,
    faRss
 } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab,
    faRss,
    faChevronUp,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faBars,
    faPaperPlane)

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

export const Bars = () => (
    <FontAwesomeIcon icon="bars" className="icon" />
)

export const PaperPlane = () => (
    <FontAwesomeIcon icon="paper-plane" className="icon" />
)

export const Rss = () => (
    <FontAwesomeIcon icon="rss" className="icon" />
)

export const Github = () => (
    <FontAwesomeIcon icon={['fab', 'github']} className="icon" />
)

export const Linkedin = () => (
    <FontAwesomeIcon icon={['fab', 'linkedin']} className="icon" />
)

export const Facebook = () => (
    <FontAwesomeIcon icon={['fab', 'facebook']} className="icon" />
)