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
      "Kodemunit is a simple platform where they provide mentorship programmes by connecting learners and dedicated mentors",
    demo: "http://kodemunit.com",
    tools: ["Figma", "HTML", "CSS", "SASS", "React", "Redux", "Firebase"],
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
    about: "CEEPTz website with all information about CEEPTZ startup",
    demo: "http://ceeptz.netlify.app",
    tools: ["Figma", "HTML", "CSS", "SASS", "JavaScript"],
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
      "Corona Covid19 tracker special made for Tanzanians to provide necessary information on Corona Virus pandemic made in Swahili",
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
    about: "Agritech website with all information about kilimoshare startup",
    demo: "http://kilimoshare.netlify.app",
    tools: ["Figma", "HTML", "CSS", "SASS", "JavaScript"],
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
      "First trial on designing graphics, If you like it I can make one for you",
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
    source:
      "A platform where users can create account, upload their informations like their resume, contact info, projects and many more and share their portfolios to the world",
    category: ["Web", "Design", "All"],
    about: "",
    demo: "http://jitangaze.netlify.app",
    tools: ["Figma", "HTML", "CSS", "SASS", "React", "Redux", "Firebase"],
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
    about: "My Personal Portfolio website which you are looking at right now",
    demo: "http://bm-dev.netlify.app",
    tools: ["Figma", "HTML", "CSS", "SASS", "React", "Redux"],
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
    about: "A simple design for showing the blogposts",
    demo: "",
    tools: ["Figma"],
    roles: ["UI Designer"],
    gallery: [kodemunit, ceeptz, jitangaze, portfolio, gramath]
  }
];

export default projects;
