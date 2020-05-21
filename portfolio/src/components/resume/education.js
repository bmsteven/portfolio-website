import React from "react";
import { FaCalendarAlt } from "react-icons/all";

import ResumeTemplate from "./resume";

import education from "../../data/education";

const Education = () => {
  return (
    <ResumeTemplate classname="education" title="Education Background">
      <div className="showcase">
        {education.map(item => (
          <article key={item.id}>
            <h2>{item.course}</h2>
            <div className="">
              <span>
                <FaCalendarAlt className="icon" />
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
    </ResumeTemplate>
  );
};

export default Education;
