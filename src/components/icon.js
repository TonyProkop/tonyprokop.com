import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faGithub, 
    faLinkedin, 
    faFacebook } from '@fortawesome/free-brands-svg-icons'
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

library.add(faGithub, 
    faLinkedin, 
    faFacebook, 
    faRss,
    faChevronUp,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faBars,
    faPaperPlane)

export const ChevronUp = () => (
    <FontAwesomeIcon icon="chevron-up" />
)

export const ChevronDown = () => (
    <FontAwesomeIcon icon="chevron-down" />
)

export const ChevronLeft = () => (
    <FontAwesomeIcon icon="chevron-left" />
)

export const ChevronRight = () => (
    <FontAwesomeIcon icon="chevron-right" />
)

export const Bars = () => (
    <FontAwesomeIcon icon="bars" />
)