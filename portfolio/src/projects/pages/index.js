import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import projects from "../../data/projects"
import {
  useModalDispatch,
  ADD_PROJECTS,
  REMOVE_ARRAY,
} from "../../context/modal"

const Projects = () => {
  const dispatch = useModalDispatch()
  const [keyWord, setKeyWord] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState([])
  const [loading, setLoading] = useState(true)

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

  useEffect(() => {
    document.title = "Project Collections - Benedict's Portfolio "
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    dispatch({
      type: REMOVE_ARRAY,
    })
    document.body.classList.remove("no-scrolling")
  }, [dispatch])

  useEffect(() => {
    setLoading(true)
    if (keyWord === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(
        projects.filter((o) => o.categories.includes(keyWord))
      )
    }
    setLoading(false)
  }, [keyWord])

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
        {loading ? (
          <></>
        ) : (
          <>
            {filteredProjects?.length > 0 ? (
              <div className="showcase">
                {filteredProjects?.map(
                  ({ id, src, name, slug, categories, demo }) => (
                    <article key={id} className="item project-item">
                      <div className="project">
                        {src && (
                          <figure
                            className="project-image"
                            onClick={() =>
                              dispatch({
                                type: ADD_PROJECTS,
                                payload: {
                                  list: filteredProjects,
                                  active: id,
                                },
                              })
                            }
                          >
                            <img
                              src={src}
                              alt={name}
                              style={{
                                width: "100%",
                              }}
                              loading="lazy"
                            />
                          </figure>
                        )}
                        <figcaption className="project-info">
                          <div className="project-name">
                            <h2>{name}</h2>
                          </div>
                          {categories?.length > 0 && (
                            <div className="categories-showcase">
                              <div
                                style={{
                                  display: "none",
                                }}
                              >
                                {
                                  (categories = categories.filter(
                                    (el) => el !== "All"
                                  ))
                                }
                              </div>
                              {categories.map((category, index) => (
                                <span className="category" key={index}>
                                  #{category}
                                </span>
                              ))}
                            </div>
                          )}
                          <div className="btns">
                            <Link
                              to={`/portfolio/${slug}`}
                              className="btn btn-secondary"
                            >
                              <span>About</span>
                            </Link>
                            {demo && (
                              <a
                                href={demo}
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
                  )
                )}
              </div>
            ) : (
              <h2 className="none">No Project Added</h2>
            )}
          </>
        )}
      </div>
    </main>
  )
}

export default Projects
