import React from "react";
import {
  FaCheck,
  FaCode,
  AiOutlineAntDesign,
  DiGitBranch,
  IoMdApps
} from "react-icons/all";

import ResumeTemplate from "./resume";
import tools from "../../data/tools";

const skills = [
  {
    id: 1,
    title: "Web/App design",
    icon: <AiOutlineAntDesign className="icon" />
  },
  {
    id: 2,
    title: "Web development",
    icon: <FaCode className="icon" />
  },
  {
    id: 3,
    title: "Mobile App Development",
    icon: <IoMdApps className="icon" />
  },
  {
    id: 3,
    title: "Git and Github",
    icon: <DiGitBranch className="icon" />
  }
];

const Skills = () => {
  return (
    <ResumeTemplate classname="skills" title="My Skills">
      <div className="showcase">
        {skills.map(skill => (
          <article key={skill.id}>
            <span className="icon-container">{skill.icon}</span>
            <h2>{skill.title}</h2>
          </article>
        ))}
      </div>
      <div className="tools">
        <h2>Tools, languages and libraries</h2>
        <div className="showcase">
          {tools.map((tool, index) => (
            <article key={index}>
              <span>
                <FaCheck className="icon" /> {tool}
              </span>
            </article>
          ))}
        </div>
      </div>
    </ResumeTemplate>
  );
};

export default Skills;
