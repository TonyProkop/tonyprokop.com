import React from "react"
import { Github, Linkedin, Facebook, Rss } from "../components/icon"
import Layout from "../components/layout"

const Contact = () => (
  <Layout>
      <div class="content">

      </div>
    <h1>Let's Talk</h1>
    <Github />
    <Linkedin />
    <Facebook />
    <Rss />
    <a href={`mailto:prokop.tony@gmail.com`}>prokop.tony@gmail.com</a>
    <a href="tel:+14029888222">(402) 988-8222</a>
  </Layout>
)

export default Contact