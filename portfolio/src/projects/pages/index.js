import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FlipMove from "react-flip-move";

import projects from "../../data/projects";

const Projects = () => {
  const [keyWord, setKeyWord] = useState("All");

  const setAll = () => {
    setKeyWord("All");
  };

  const setWeb = () => {
    setKeyWord("Web");
  };

  const setDesign = () => {
    setKeyWord("Design");
  };

  const setOthers = () => {
    setKeyWord("Others");
  };

  let displayProjects = projects.filter((o) => o.category.includes(keyWord));

  useEffect(() => {
    document.title = "Project Collections - Benedict's Portfolio ";
  }, []);
  return (
    <main className='projects-content'>
      <div className='container'>
        <header className='primary-header portfolio-header'>
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
        <div className='showcase'>
          {displayProjects.map((item) => (
            <FlipMove>
              <article key={item.id} className='project-container project'>
                {item.src.length > 0 && (
                  <>
                    <section className='project-image'>
                      <img src={item.src} alt={item.name} />
                    </section>
                    <section className='project-info'>
                      <div className='project-name'>
                        <h2>{item.name}</h2>
                      </div>
                      <div className='btns'>
                        <Link
                          to={`/portfolio/${item.slug}`}
                          className='btn btn-primary'
                        >
                          <span>About</span>
                        </Link>
                        {item.demo && (
                          <a
                            href={item.demo}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            Live App
                          </a>
                        )}
                      </div>
                    </section>
                  </>
                )}
              </article>
            </FlipMove>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
