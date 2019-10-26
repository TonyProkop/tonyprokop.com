import React from "react"
import { Github, Linkedin, Facebook, Rss } from "../../components/Icon"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import styles from "./Contact.module.scss"

const Contact = () => (
  <Layout title="Contact">
    <SEO title="Contact" />
    <div class="content">
      <h1>Let's Talk.</h1>
      <div className={styles.externalLinks}>
        <Linkedin />
        <Github />
        <Facebook />
        <Rss />
      </div>
      <a
        href={`mailto:prokop.tony@gmail.com`}
        className={styles.email}
        target="_blank"
        rel="noopener noreferrer"
      >
        prokop.tony@gmail.com
      </a>
      <a
        href="tel:+14029888222"
        className={styles.phone}
        target="_blank"
        rel="noopener noreferrer"
      >
        (402) 988-8222
      </a>
    </div>
  </Layout>
)

export default Contact
