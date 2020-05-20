import React from "react";
import { FaCalendarAlt } from "react-icons/all";

import education from "../../data/education";

const Education = () => {
  return (
    <section className="education">
      <h2 className="education-header tertiary-header">Education Background</h2>
      <div class="showcase">
        {education.map(item => (
          <article key={item.id}>
            <h2>{item.course}</h2>
            <div className="">
              <span>
                <FaCalendarAlt class="icon" />
              </span>
              <span>
                {item.started} - {item.finished}
              </span>{" "}
              | <span>{item.school}</span>
            </div>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
