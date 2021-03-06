import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import FlipMove from "react-flip-move";
// import LazyLoad from "react-lazy-load";
import ProgressiveImage from "react-progressive-graceful-image";

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

  let filteredProjects = projects.filter((o) => o.category.includes(keyWord));

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
          {filteredProjects.length > 0 ? (
            <>
              {filteredProjects.map((item) => (
                // <FlipMove>
                <article key={item.id} className='project-container project'>
                    <>
                      <figure className='project-image'>
                        {/* <LazyLoad debounce={false} offsetVertical={500}>
                          <img src={item.src} alt={item.name} />
                        </LazyLoad> */}
                        <ProgressiveImage
                          src={item.src}
                          placeholder={`https://placehold.it/30x20/a334d2/ffffff/&text=${item.name}`}
                        >
                          {(src) => (
                            <img
                              src={src}
                              alt={item.name}
                              style={{
                                width: "100%",
                              }}
                            />
                          )}
                        </ProgressiveImage>
                      </figure>
                      <figcaption className='project-info'>
                        <div className='project-name'>
                          <h2>{item.name}</h2>
                        </div>
                        <span className="category">#{item.category[0]}</span>
                        <div className='btns'>
                          <Link to={`/portfolio/${item.slug}`} className='btn btn-secondary'>
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
                      </figcaption>
                    </>
                </article>
                // </FlipMove>
              ))}
            </>
          ) : (
            <h2>No Project Added</h2>
          )}
        </div>
      </div>
    </main>
  );
};

export default Projects;
