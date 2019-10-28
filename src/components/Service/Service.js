import React from "react"
import {
  MobilePhone,
  LightningBolt,
  LowVision,
  Search,
  Lock,
  Shield,
} from "../Icon"
import styles from "./Service.module.scss"

export const SYMBOLS = {
  PHONE: "phone",
  BOLT: "bolt",
  LOWVISION: "lowvision",
  SEARCH: "search",
  LOCK: "lock",
  SHIELD: "shield-alt",
}

const Service = ({ icon, name, description }) => {
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
    case SYMBOLS.SHIELD:
      symbol = <Shield />
      break
    default:
      symbol = <MobilePhone />
  }

  return (
    <div className={styles.service}>
      <div className={styles.symbol}>{symbol}</div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Service
