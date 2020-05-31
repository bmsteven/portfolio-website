import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCheck } from "react-icons/all";

//projects
import projects from "../../data/projects";

const Project = () => {
  let param = useParams();
  let obj = projects.find((o) => o.slug === param.project);
  useEffect(() => {
    if (obj) {
      document.title = `${obj.name} - Benedict's Portfolio`;
    } else {
      document.title = `404 - Project Not Found - Benedict's Portfolio`;
    }
  }, [obj]);
  return (
    <main className='projects-content project-content'>
      <div className='container'>
        {obj ? (
          <span>
            <Link to='/portfolio'>Project Collection</Link> >> {obj.name}
          </span>
        ) : (
          ""
        )}
        {obj ? (
          <div
            style={{
              width: "100%",
            }}
          >
            <header className='project-header primary-header'>
              <h1>
                <span></span>
                {obj.name}
              </h1>
            </header>
            {obj.src.length > 0 && (
              <div
                className='image-container'
                style={{
                  width: "100%",
                }}
              >
                <img
                  src={obj.src}
                  alt={obj.name}
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                  }}
                />
              </div>
            )}
            {obj.about.length > 0 && (
              <section className='about-section'>
                <h2>About</h2>
                <p>{obj.about}</p>
              </section>
            )}
            {
              <section className='btns'>
                {obj.demo && (
                  <a href={obj.demo} target='_blank' rel='noopener noreferrer'>
                    Live App
                  </a>
                )}
                {obj.source && (
                  <a
                    href={obj.source}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Source Code
                  </a>
                )}
              </section>
            }

            {obj.tools.length > 0 && (
              <section>
                <h2>Tool(s) Used</h2>
                <div className='showcase'>
                  {obj.tools.map((tool) => (
                    <article key={tool}>
                      <FaCheck className='icon' /> {tool}
                    </article>
                  ))}
                </div>
              </section>
            )}

            {obj.roles.length > 0 && (
              <section className='roles'>
                <h2>My Role(s) In This Project</h2>
                <div className='showcase'>
                  {obj.roles.map((role) => (
                    <article key={role}>
                      <FaCheck className='icon' /> {role}
                    </article>
                  ))}
                </div>
              </section>
            )}

            {obj.gallery.length > 0 && (
              <section className='gallery'>
                <h2>Gallery</h2>
                <div className='showcase'>
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
            <h1>Project not Found</h1>
          </div>
        )}
      </div>
    </main>
  );
};

export default Project;
