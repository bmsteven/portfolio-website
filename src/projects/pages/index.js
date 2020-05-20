import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  let displayProjects = projects.filter(o => o.category.includes(keyWord));

  useEffect(() => {
    document.title = "Project Collections - Benedict's Portfolio ";
  }, []);
  return (
    <main className="projects-content">
      <div className="container">
        <h2 className="">My Projects</h2>
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
          {displayProjects.map(item => (
            <article key={item.id} className="project-container project">
              {item.src.length > 0 && (
                <>
                  <section className="project-image">
                    <img src={item.src} alt={item.name} />
                  </section>
                  <section className="project-info">
                    <div className="project-name">
                      <h2>{item.name}</h2>
                    </div>
                    <div className="btns">
                      <Link
                        to={`/portfolio/${item.slug}`}
                        className="btn btn-primary"
                      >
                        About
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
                  </section>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
