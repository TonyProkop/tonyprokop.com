import React from "react"
import Layout from "../components/layout"
import { Email, Phone, Linkedin } from "../components/icon"
import styles from "./resume.module.scss"

const Resume = () => (
  <Layout>
    <h1 className={styles.heading}>Tony Prokop</h1>
    <div className={styles.main}>
      <ResumeObjective />
      <Experience />
    </div>
    <div className={styles.sidebar}>
      <Contact />
      <Skills />
      <Education />
      <Process />
    </div>
  </Layout>
)

const ResumeObjective = () => (
  <div className={styles.resumeObjective}>
    <h2>Resumé Objective</h2>
    <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </div>
  </div>
)

const Experience = () => (
  <div className={styles.experience}>
    <h2>Experience</h2>
    <h3>Web Development Team Lead</h3>
    <div className={styles.subhead}>
      Speedway Motors, Lincoln, NE / January 2019 - Present
    </div>
    <ul>
      <li>TODO</li>
    </ul>
    <h3>Web Developer</h3>
    <div className={styles.subhead}>
      Speedway Motors, Lincoln, NE / March 2015 - December 2018
    </div>
    <ul>
      <li>
        Develop and maintain internal and external MVC website applications
      </li>
      <li>Use Agile Scrum development methodologies</li>
      <li>Participate in application design and solution architecture</li>
      <li>
        Decompose feature and improvement requests into small, manageable
        development tasks
      </li>
      <li>Follow IDesign architecture (managers, engines, accessors)</li>
    </ul>
    <h3>Senior Design Project Development Lead</h3>
    <div className={styles.subhead}>
      Beehive Industries, Lincoln, NE / January 2016 - December 2016
    </div>
    <ul>
      <li>Managed issue tracking, deliverables and deadlines</li>
      <li>
        Was held responsible for the technical integrity of the senior design
        project{" "}
      </li>
      <li>Performed code reviews for all pull requests</li>
      <li>Answer teammates’ technical questions </li>
      <li>Followed IDesign architecture (managers, engines, accessors)</li>
    </ul>
    <h3>Compute Science Teacher’s Assistant</h3>
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
    <div>
      <Email includeText={true} />
    </div>
    <div>
      <Phone includeText={true} />
    </div>
    <div>
      <Linkedin includeText={true} />
    </div>
  </div>
)

const Skills = () => (
  <div className={styles.skills}>
    <h2>Skills</h2>
    <div>HTML</div>
    <div>CSS</div>
    <div>Javascript</div>
    <div>React</div>
    <div>Redux</div>
    <div>Webpack</div>
    <div>Service worker</div>
    <div>jQuery</div>
    <div>C#</div>
    <div>SQL</div>
    <div>Elasticsearch</div>
  </div>
)

const Process = () => (
  <div className={styles.process}>
    <h2>Process</h2>
    <div>Agile</div>
    <div>Scrum</div>
    <div>Continuous Delivery</div>
    <div>Continuous Integration</div>
    <div>Trunk Based Development</div>
    <div>Work In Progress Limits</div>
    <div>Pair Programming</div>
    <div>Mob Programming</div>
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
