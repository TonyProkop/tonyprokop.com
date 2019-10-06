import React from "react"
import classnames from "classnames"
import {
  MobilePhone,
  LightningBolt,
  LowVision,
  Search,
  Lock,
} from "../components/icon"
import styles from "./service.module.scss"

export const COLORS = {
  PURPLE: styles.purple,
  RED: styles.red,
  GREEN: styles.green,
  BLUE: styles.blue,
  ORANGE: styles.orange,
}

export const SYMBOLS = {
  PHONE: "phone",
}

export const Service = ({ color, icon, name, description }) => (
  <div className={styles.service}>
    <div className={classnames(styles.symbol, color)}>
      <MobilePhone />
    </div>
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
)
