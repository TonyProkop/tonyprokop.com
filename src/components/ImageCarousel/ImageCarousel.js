import React, { useState } from "react"
import classnames from "classnames"
import { ArrowRight, ArrowLeft } from "../Icon"
import styles from "./ImageCarousel.module.scss"

const ImageCarousel = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const imageUrls = [
    "https://i.dawn.com/primary/2019/06/5d02a993e2dfa.png",
    "https://www.ytravelblog.com/wp-content/uploads/2019/04/y-travel-blog.jpg",
    "https://www.statravel.com/static/us_division_web_live/assets/sta-travel-default-min.jpg",
    "https://img.etimg.com/thumb/msid-65975178,width-643,imgsize-201359,resizemode-4/travellinginagroup.jpg",
  ]

  const goToPreviousImage = () => {
    currentIndex === 0
      ? setCurrentIndex(imageUrls.length - 1)
      : setCurrentIndex(currentIndex - 1)
  }

  const goToNextImage = () => {
    currentIndex === imageUrls.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1)
  }

  return (
    <div className={classnames(className, styles.imageCarousel)}>
      <ArrowLeft className={styles.arrowLeft} onClick={goToPreviousImage} />
      {imageUrls.map((x, i) => {
        return (
          <div
            className={classnames(styles.slide)}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <img className={styles.image} src={x} key={i}></img>
          </div>
        )
      })}
      <ArrowRight className={styles.arrowRight} onClick={goToNextImage} />
    </div>
  )
}

export default ImageCarousel
