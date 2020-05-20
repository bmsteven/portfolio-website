import kodemunit from "../images/kodemunit.png";
import ceeptz from "../images/ceeptz.png";
import jitangaze from "../images/jitangaze.png";
import portfolio from "../images/portfolio.png";
import gramath from "../images/gramath.png";

const projects = [
  {
    id: 1,
    name: "Kodemunit",
    slug: "kodemunit",
    src: kodemunit,
    source: "",
    category: ["Web", "Design", "All"],
    about:
      "Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.",
    demo: "http://kodemunit.com",
    tools: ["HTML", "CSS", "SASS", "React", "Redux", "Figma", "Firebase"],
    roles: ["UX/UI Designer", "Developer"],
    gallery: [kodemunit, ceeptz, jitangaze, portfolio, gramath]
  },
  {
    id: 2,
    name: "CEEPTZ",
    slug: "ceeptz",
    src: ceeptz,
    source: "",
    category: ["Web", "Design", "All"],
    about:
      "Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.",
    demo: "http://ceeptz.netlify.app",
    tools: ["HTML", "CSS", "SASS", "JavaScript", "Figma"],
    roles: ["UX/UI Designer", "Developer"],
    gallery: [kodemunit, ceeptz, jitangaze, portfolio, gramath]
  },
  {
    id: 3,
    name: "COVID19-TZ",
    slug: "covid19-tz",
    src: "kodemunit",
    source: "http://github.com/bmsteven/corona",
    category: ["Web"],
    about:
      "Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.",
    demo: "http://covid19-tz.netlify.app",
    tools: ["HTML", "CSS", "SASS", "React"],
    roles: ["Frontend Developer"],
    gallery: [kodemunit, ceeptz, jitangaze, portfolio, gramath]
  },
  {
    id: 4,
    name: "Kilimoshare",
    slug: "kilimoshare",
    src: kodemunit,
    source: "",
    category: ["Web", "Design", "All"],
    about:
      "Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.",
    demo: "http://kilimoshare.netlify.app",
    tools: ["HTML", "CSS", "SASS", "JavaScript", "Figma"],
    roles: ["UX/UI Designer", "Developer"],
    gallery: [kodemunit, ceeptz, jitangaze, portfolio, gramath]
  },
  {
    id: 5,
    name: "Gramath Products",
    slug: "gramath-products",
    src: gramath,
    source: "",
    category: ["Others", "All"],
    about:
      "Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.",
    demo: "",
    tools: ["Figma"],
    roles: ["Graphic Designer"],
    gallery: [kodemunit, ceeptz, jitangaze, portfolio, gramath]
  },
  {
    id: 6,
    name: "Jitangaze App",
    slug: "jitangaze",
    src: jitangaze,
    source: "",
    category: ["Web", "Design", "All"],
    about:
      "Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.",
    demo: "http://jitangaze.netlify.app",
    tools: ["HTML", "CSS", "SASS", "React", "Redux", "Figma", "Firebase"],
    roles: ["UX/UI Designer", "Frontend Developer", "Backend Developer"],
    gallery: [kodemunit, ceeptz, jitangaze, portfolio, gramath]
  },
  {
    id: 7,
    name: "My Portfolio",
    slug: "bm-dev",
    src: portfolio,
    source: "http://github.com/bmsteven/bm-dev",
    category: ["Web", "Design", "All"],
    about:
      "Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.",
    demo: "http://bm-dev.netlify.app",
    tools: ["HTML", "CSS", "SASS", "React", "Redux", "Figma"],
    roles: ["UX/UI Designer", "Developer"],
    gallery: [kodemunit, ceeptz, jitangaze, portfolio, gramath]
  },
  {
    id: 8,
    name: "Blog",
    slug: "blog",
    src: kodemunit,
    source: "",
    category: ["Design", "All"],
    about:
      "Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.",
    demo: "",
    tools: ["Figma"],
    roles: ["UI Designer"],
    gallery: [kodemunit, ceeptz, jitangaze, portfolio, gramath]
  }
];

export default projects;
