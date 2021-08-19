// my portfolio
import portfolio from "../images/projects/portfolio.jpg"

// food uber
import foodUber from "../images/projects/food-uber.jpg"
import fU1 from "../images/projects/fu1.png"
import fU2 from "../images/projects/fu2.png"
import fU3 from "../images/projects/fu3.png"
import fU4 from "../images/projects/fu4.png"
import fU5 from "../images/projects/fu5.png"
import fU6 from "../images/projects/fu6.png"
import fU7 from "../images/projects/fu7.png"

const projects = [
  {
    id: 1,
    name: "Kodemunit",
    slug: "kodemunit",
    src: "",
    source: "",
    categories: ["Web", "All"],
    about:
      "Kodemunit is a simple platform where they provide mentorship programmes by connecting learners and dedicated mentors",
    demo: "http://kodemunit.com",
    tools: ["Figma", "HTML", "CSS", "SASS", "React", "Redux", "Firebase"],
    roles: ["UX/UI Designer", "Developer"],
    gallery: [],
  },
  {
    id: 2,
    name: "CEEPTz",
    slug: "ceeptz",
    // src: ceeptz,
    source: "",
    categories: ["Web", "All"],
    about: "CEEPTz website with all information about CEEPTZ startup",
    demo: "http://ceeptz.netlify.app",
    tools: ["Figma", "HTML", "CSS", "SASS", "JavaScript"],
    roles: ["UX/UI Designer", "Developer"],
    gallery: [],
  },
  {
    id: 4,
    name: "COVID19-TZ",
    slug: "covid19-tz",
    // src: covid,
    source: "http://github.com/bmsteven/corona",
    categories: ["Web", "All"],
    about:
      "Corona Covid19 tracker special made for Tanzanians to provide necessary information on Corona Virus pandemic made in Swahili",
    demo: "http://covid19-tz.netlify.app",
    tools: ["HTML", "CSS", "SASS", "React"],
    roles: ["Frontend Developer"],
    gallery: [],
  },
  {
    id: 5,
    name: "Kilimoshare",
    slug: "kilimoshare",
    src: "",
    source: "",
    categories: ["Web", "All"],
    about: "Agritech website with all information about kilimoshare startup",
    demo: "http://kilimoshare.netlify.app",
    tools: ["Figma", "HTML", "CSS", "SASS", "JavaScript"],
    roles: ["UX/UI Designer", "Developer"],
    gallery: [],
  },
  {
    id: 7,
    name: "My Portfolio",
    slug: "bm-dev",
    src: portfolio,
    //   source: "http://github.com/bmsteven/bm-dev",
    categories: ["Web", "Design", "All"],
    about: "My Personal Portfolio website which you are looking at right now",
    demo: "http://bm-dev.netlify.app",
    tools: ["Figma", "HTML", "CSS", "SASS", "React"],
    roles: ["UX/UI Designer", "Developer"],
    gallery: [],
  },
  {
    id: 8,
    name: "JobPortal",
    slug: "job-portal",
    src: "",
    source: "http://github.com/nab-in/portal-frontend",
    categories: ["Design", "Web", "All"],
    about: "A web app to connect job seekers to the hob opportunities",
    demo: "http://jobportal-tz.herokuapp.com",
    tools: [
      "Figma",
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React js",
      "Nextjs",
      "Nodejs",
      "Nestjs",
      "Postgresql",
    ],
    roles: ["UI Designer, Frontend Developer"],
    gallery: [],
  },
  {
    id: 9,
    name: "Food Uber",
    slug: "food-uber",
    src: foodUber,
    source: "http://github.com/codeschool-africa/food-uber-client",
    categories: ["Design", "Web", "All"],
    about: "An app that allows users to order food online",
    demo: "http://food-uber.netlify.app",
    tools: ["Figma", "HTML", "CSS", "SASS", "JavaScript", "React js", "mysql"],
    roles: ["UI Designer", "Frontend Developer", "Backend Developer"],
    gallery: [fU1, fU2, fU3, fU4, fU5, fU6, fU7],
  },
  {
    id: 10,
    name: "Soz PNS",
    slug: "soz-pns",
    src: "",
    // source: "http://github.com/codeschool-africa/food-uber-client",
    categories: ["Design", "Web", "All"],
    about: "Music App",
    demo: "http://sozthegovt.netlify.app",
    tools: ["Figma", "HTML", "CSS", "SASS", "JavaScript", "React js", "mysql"],
    roles: ["UI Designer", "Frontend Developer", "Backend Developer"],
    gallery: [],
  },
]

export default projects
