import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCheck } from "react-icons/all";

//projects
import projects from "../../data/projects";

const Project = () => {
  let param = useParams();
  let obj = projects.find(o => o.slug === param.project);
  useEffect(() => {
    document.title = `${obj.name} - Benedict's Portfolio`;
  }, []);
  return (
    <main className="projects-content project-content">
      {obj ? (
        <span>
          <Link to="/portfolio">Project Collection</Link> >> {obj.name}
        </span>
      ) : (
        ""
      )}
      {obj ? (
        <div>
          <header className="project-header primary-header">
            <h1>{obj.name}</h1>
          </header>
          {obj.src.length > 0 && (
            <div className="image-container">
              <img src={obj.src} alt={obj.name} />
            </div>
          )}
          {obj.about.length > 0 && (
            <section className="about-section">
              <h2>About</h2>
              <p>{obj.about}</p>
            </section>
          )}
          {
            <section className="btns">
              {obj.demo && (
                <a href={obj.demo} target="_blank" rel="noopener noreferrer">
                  Live App
                </a>
              )}
              {obj.source && (
                <a href={obj.source} target="_blank" rel="noopener noreferrer">
                  Source Code
                </a>
              )}
            </section>
          }

          {obj.tools.length > 0 && (
            <div>
              <h2>Tool(s) Used</h2>
              {obj.tools.map(tool => (
                <div key={tool}>
                  <FaCheck className="icon" /> {tool}
                </div>
              ))}
            </div>
          )}

          {obj.roles.length > 0 && (
            <div className="roles">
              <h2>My Role(s) In This Project</h2>
              {obj.roles.map(role => (
                <div key={role}>
                  <FaCheck className="icon" /> {role}
                </div>
              ))}
            </div>
          )}

          {obj.gallery.length > 0 && (
            <section className="gallery">
              <h2>Gallery</h2>
              <div className="showcase">
                {obj.gallery.map((item, index) => (
                  <article key={index}>
                    <img src={item} alt={`${obj.name} gallery`} />
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      ) : (
        <div>
          <h1>project not found</h1>
        </div>
      )}
    </main>
  );
};

export default Project;
