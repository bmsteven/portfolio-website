import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import projects from "../../data/projects"

const Projects = () => {
  const [keyWord, setKeyWord] = useState("All")

  const setAll = () => {
    setKeyWord("All")
  }

  const setWeb = () => {
    setKeyWord("Web")
  }

  const setDesign = () => {
    setKeyWord("Design")
  }

  const setOthers = () => {
    setKeyWord("Others")
  }

  let filteredProjects = projects.filter((o) => o.category.includes(keyWord))

  useEffect(() => {
    document.title = "Project Collections - Benedict's Portfolio "
  }, [])
  return (
    <main className="projects-content">
      <div className="container">
        <header className="primary-header portfolio-header">
          <h2>
            <span></span>My Projects
          </h2>
        </header>
        <nav>
          <ul>
            <li onClick={setAll} className={keyWord === "All" ? "active" : ""}>
              All
            </li>
            <li onClick={setWeb} className={keyWord === "Web" ? "active" : ""}>
              Web
            </li>
            <li
              onClick={setDesign}
              className={keyWord === "Design" ? "active" : ""}
            >
              Design
            </li>
            <li
              onClick={setOthers}
              className={keyWord === "Others" ? "active" : ""}
            >
              Others
            </li>
          </ul>
        </nav>
        <div className="showcase">
          {filteredProjects.length > 0 ? (
            <>
              {filteredProjects.map((item) => (
                <article key={item.id} className="project-container">
                  <div className="project">
                    <figure className="project-image">
                      <img
                        src={item.src}
                        alt={item.name}
                        style={{
                          width: "100%",
                        }}
                      />
                    </figure>
                    <figcaption className="project-info">
                      <div className="project-name">
                        <h2>{item.name}</h2>
                      </div>
                      <span className="category">#{item.category[0]}</span>
                      <div className="btns">
                        <Link
                          to={`/portfolio/${item.slug}`}
                          className="btn btn-secondary"
                        >
                          <span>About</span>
                        </Link>
                        {item.demo && (
                          <a
                            href={item.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live App
                          </a>
                        )}
                      </div>
                    </figcaption>
                  </div>
                </article>
              ))}
            </>
          ) : (
            <h2>No Project Added</h2>
          )}
        </div>
      </div>
    </main>
  )
}

export default Projects
