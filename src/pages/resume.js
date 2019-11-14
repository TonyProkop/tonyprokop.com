import React from "react"
import classnames from "classnames"
import Layout from "../components/Layout"
import { linkedinUrl } from "../utils/config"
import { Email, Phone, Linkedin, Globe } from "../components/Icon"
import SEO from "../components/SEO"
import styles from "./resume.module.scss"
import "./resume.print.scss"

const Resume = () => (
  <Layout title="Resume">
    <SEO title="Resume" />
    <div
      className={classnames(
        styles.resumeContainer,
        "section",
        "contentContainer"
      )}
    >
      <h1 className={styles.heading}>Tony Prokop</h1>
      <div className={`main ${styles.main}`}>
        <Contact />
        <Experience />
      </div>
      <div className={`sidebar ${styles.sidebar}`}>
        <Contact />
        <Skills />
        <Education />
        <Process />
      </div>
      <div className={styles.clear}></div>
    </div>
  </Layout>
)

const Experience = () => (
  <div className={styles.experience}>
    <h2>Experience</h2>
    <h3>Web Development Team Lead</h3>
    <div className={styles.subhead}>
      Speedway Motors, Lincoln, NE / January 2019 - Present
    </div>
    <ul>
      <li>Lead a small team focused on implementing a full website redesign</li>
      <li>
        Maintain a healthy sense of urgency to ship value to production several
        times a week
      </li>
      <li>
        Communicate with stakeholders to gather requirements and align on goals
      </li>
      <li>Focus on minimum viable product to reduce opportunity cost</li>
      <li>
        Deliver code safely with test driven development, unit tests, and
        feature flags
      </li>
      <li>Make data driven decisions based on a/b tests</li>
      <li>
        Lead meetings such as morning stand up, retrospective, and decomposition
      </li>
      <li>Plan sprints</li>
      <li>Provide feedback to reports and ask for feedback in return</li>
      <li>Work remote two days a week</li>
      <li>Part of a weekly on-call rotation</li>
      <li>Handled deployments and monitoring</li>
    </ul>
    <h3>Web Developer</h3>
    <div className={styles.subhead}>
      Speedway Motors, Lincoln, NE / March 2015 - December 2018
    </div>
    <ul>
      <li>
        Developed and maintained internal and external .NET MVC website
        applications, as well as client applications built with React and Redux
      </li>
      <li>
        Advocated for performance, user experience, and accessibility best
        practices
      </li>
      <li>Practiced Agile Scrum development methodologies</li>
      <li>Participated in application design and solution architecture</li>
      <li>
        Decomposed feature and improvement requests into small, manageable
        development tasks
      </li>
      <li>Part of a weekly on-call rotation</li>
    </ul>
    <h3>Senior Design Project Development Lead</h3>
    <div className={styles.subhead}>
      Beehive Industries, Lincoln, NE / January 2016 - December 2016
    </div>
    <ul>
      <li>Managed issue tracking, deliverables and deadlines</li>
      <li>
        Was responsible for the technical integrity of the senior design project{" "}
      </li>
      <li>Performed code reviews for all pull requests</li>
      <li>Answered teammates’ technical questions </li>
      <li>Followed IDesign architecture (managers, engines, accessors)</li>
    </ul>
    <h3>Computer Science Teacher’s Assistant</h3>
    <div className={styles.subhead}>
      University of Nebraska-Lincoln, Lincoln, NE / August 2014 - March 2015
    </div>
    <ul>
      <li>Taught fundamentals of programming in C</li>
      <li>Monitored labs</li>
      <li>Maintained office hours for tutoring</li>
      <li>Graded assignments and lab worksheets</li>
    </ul>
  </div>
)

const Contact = () => (
  <div className={styles.contact}>
    <div className={`website ${styles.website}`}>
      <Globe includeText={true} />
      <span>tonyprokop.com</span>
    </div>
    <div>
      <a
        href="mailto:prokop.tony@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Email />
        <span>prokop.tony@gmail.com</span>
      </a>
    </div>
    <div>
      <a href="tel:402-988-8222" target="_blank" rel="noopener noreferrer">
        <Phone />
        <span>(402) 988-8222</span>
      </a>
    </div>
    <div>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkedin}
      >
        <Linkedin />
        <span>/in/tony-prokop/</span>
      </a>
    </div>
  </div>
)

const Skills = () => (
  <div className={styles.skills}>
    <h2>Skills</h2>
    <div>HTML</div>
    <div>CSS / SASS</div>
    <div>Javascript (ES6)</div>
    <div>Redux</div>
    <div>Webpack</div>
    <div>Jest / Enzyme</div>
    <div>Progressive Web Apps (PWA)</div>
    <div>Service Worker</div>
    <div>Page Load Performance</div>
    <div>Accessibility</div>
    <div>Bootstrap</div>
    <div>jQuery</div>
    <div>C#</div>
    <div>SQL</div>
    <div>AWS</div>
    <div>Redis</div>
    <div>Elasticsearch</div>
    <div>Google Analytics</div>
    <div>Search Engine Optimization (SEO)</div>
  </div>
)

const Process = () => (
  <div className={styles.process}>
    <h2>Process</h2>
    <div>Agile</div>
    <div>Scrum</div>
    <div>Continuous Integration</div>
    <div>Continuous Delivery</div>
    <div>Trunk Based Development</div>
    <div>Work In Progress Limits</div>
    <div>Pair / Mob Programming</div>
    <div>Feature Flags</div>
    <div>A/B Tests</div>
    <div>Unit / Integration Tests</div>
  </div>
)

const Education = () => (
  <div className={styles.education}>
    <h2>Education</h2>
    <div>B.S. Computer Science</div>
    <div>University of Nebraska</div>
    <div>Lincoln, NE / 2016</div>
  </div>
)

export default Resume
