import React, { useState } from "react"
import Img from "gatsby-image"
import classnames from "classnames"
import { ArrowRight, ArrowLeft } from "../Icon"
import styles from "./ImageCarousel.module.scss"

const ImageCarousel = ({ className, images }) => {
  if (!images || !images.length) return false

  const [currentIndex, setCurrentIndex] = useState(0)

  const displayArrows = images.length > 1

  const goToPreviousImage = () => {
    currentIndex === 0
      ? setCurrentIndex(images.length - 1)
      : setCurrentIndex(currentIndex - 1)
  }

  const goToNextImage = () => {
    currentIndex === images.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1)
  }

  return (
    <div className={classnames(className, styles.imageCarousel)}>
      <ArrowLeft className={styles.arrowLeft} onClick={goToPreviousImage} />
      {displayArrows ? (
        <ArrowLeft className={styles.arrowLeft} onClick={goToPreviousImage} />
      ) : (
        false
      )}
      {images.map((image, i) => {
        return (
          <div
            key={i}
            className={classnames(styles.slide)}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {/* <div className={styles.image}>
              <Img fluid={image.childImageSharp.fluid} />
            </div> */}
            <img className={styles.image} src={image.publicURL} key={i}></img>
          </div>
        )
      })}
      {displayArrows ? (
        <ArrowRight className={styles.arrowRight} onClick={goToNextImage} />
      ) : (
        false
      )}
    </div>
  )
}

export default ImageCarousel
