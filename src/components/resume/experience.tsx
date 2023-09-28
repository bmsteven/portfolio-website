import {
  FaMedal,
  //   GiPaperWindmill
} from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import ResumeTemplate from "./resume";

const experiences = [
  {
    id: 1,
    title: "4+ years experience",
    icon: <FaMedal className="icon" />,
  },
  {
    id: 2,
    title: "15+ Projects",
    icon: <IoIosRocket className="icon" />,
  },
  //   {
  //     id: 3,
  //     title: "Available for freelance",
  //     icon: <GiPaperWindmill className="icon" />,
  //   },
];

const Experience = () => {
  return (
    <ResumeTemplate title="My Experience" classname="experience">
      <div className="showcase">
        {experiences.map((experience) => (
          <article key={experience.id}>
            <span className="icon-container">{experience.icon}</span>
            <h2>{experience.title}</h2>
          </article>
        ))}
      </div>
    </ResumeTemplate>
  );
};

export default Experience;
