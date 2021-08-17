import { useEffect } from "react"

import routes from "../data/routes"

import Education from "../components/resume/education"
import Experience from "../components/resume/experience"
import Skills from "../components/resume/skills"

//components
import Nav from "../components/nav"
import Footer from "../components/footer"

const Resume = ({ ...rest }) => {
  useEffect(() => {
    document.title = "My Resume - Benedict's Portfolio "
  }, [])
  return (
    <div>
      <Nav {...rest} navProps="nav-header" routes={routes} />
      <main className="main-content resume">
        <div className="container">
          <header className="primary-header resume-header">
            <h2>
              <span></span>My Resume
            </h2>
          </header>
          <Experience />
          <div className="row">
            <Education />
            <Skills />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Resume
