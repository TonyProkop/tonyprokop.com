import React, { useState } from "react"
import classnames from "classnames"
import { ArrowRight, ArrowLeft } from "../Icon"
import styles from "./ImageCarousel.module.scss"

const ImageCarousel = ({ className, images }) => {
  if (!images || !images.length) return false

  const [currentIndex, setCurrentIndex] = useState(0)

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
      {images.map((x, i) => {
        return (
          <div
            key={i}
            className={classnames(styles.slide)}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <img className={styles.image} src={x.publicURL} key={i}></img>
          </div>
        )
      })}
      <ArrowRight className={styles.arrowRight} onClick={goToNextImage} />
    </div>
  )
}

export default ImageCarousel
