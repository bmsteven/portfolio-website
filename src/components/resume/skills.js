import React from "react";
import {
  FaCheck,
  FaCode,
  AiOutlineAntDesign,
  DiGitBranch
} from "react-icons/all";

import tools from "../../data/tools";

const skills = [
  {
    id: 1,
    title: "Web design",
    icon: <AiOutlineAntDesign className="icon" />
  },
  {
    id: 2,
    title: "Web development",
    icon: <FaCode className="icon" />
  },
  {
    id: 3,
    title: "Git and Github",
    icon: <DiGitBranch className="icon" />
  }
];

const Skills = () => {
  return (
    <section class="skills">
      <h2 className="skills-header tertiary-header">My Skills</h2>
      <div class="showcase">
        {skills.map(skill => (
          <article key={skill.id}>
            <span className="icon-container">{skill.icon}</span>
            <h2>{skill.title}</h2>
          </article>
        ))}
      </div>
      <div class="tools">
        <h2>Tools, languages and libraries</h2>
        <div class="showcase">
          {tools.map((tool, index) => (
            <article key={index}>
              <span className="icon-container" />
              <span>
                <FaCheck className="icon" /> {tool}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
