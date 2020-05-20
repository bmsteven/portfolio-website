import React from "react";
import { FaMedal, IoIosRocket, GiPaperWindmill } from "react-icons/all";

const experiences = [
  {
    id: 1,
    title: "1.5 years experience",
    icon: <FaMedal className="icon" />
  },
  {
    id: 2,
    title: "10+ Projects",
    icon: <IoIosRocket className="icon" />
  },
  {
    id: 3,
    title: "Available for freelance",
    icon: <GiPaperWindmill className="icon" />
  }
];

const Experience = () => {
  return (
    <section class="experience">
      <h2 className="experience-header tertiary-header">My Experience</h2>
      <div class="showcase">
        {experiences.map(experience => (
          <article key={experience.id}>
            <span className="icon-container">{experience.icon}</span>
            <h2>{experience.title}</h2>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
