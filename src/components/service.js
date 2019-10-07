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
  BOLT: "bolt",
  LOWVISION: "lowvision",
  SEARCH: "search",
  LOCK: "lock",
}

export const Service = ({ color, icon, name, description }) => {
  let symbol = <MobilePhone />
  switch (icon) {
    case SYMBOLS.PHONE:
      symbol = <MobilePhone />
      break
    case SYMBOLS.BOLT:
      symbol = <LightningBolt />
      break
    case SYMBOLS.LOWVISION:
      symbol = <LowVision />
      break
    case SYMBOLS.SEARCH:
      symbol = <Search />
      break
    case SYMBOLS.LOCK:
      symbol = <Lock />
      break
    default:
      symbol = <MobilePhone />
  }

  return (
    <div className={styles.service}>
      <div className={classnames(styles.symbol, color)}>{symbol}</div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}
