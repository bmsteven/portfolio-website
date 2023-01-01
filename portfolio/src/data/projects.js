// my portfolio
import portfolio from "../images/projects/portfolio/portfolio.jpg";

// kodemunit
import kodemunit from "../images/projects/kodemunit/kodemunit.jpg";

// job-portal
import portal from "../images/projects/portal/portal.jpg";

// job-portal-dashboaed
import portalDashboard from "../images/projects/portal-dashboard/portal.jpg";

// covd19tz
import covid from "../images/projects/covid/covid.jpg";

// ceeptz
import ceep from "../images/projects/ceep/ceep.jpg";

// gramath
import gramath from "../images/projects/gramath/gramath.jpg";

// flexbeats
import flexbeats from "../images/projects/flexbeats/flexbeats.jpg";

// food uber
import foodUber from "../images/projects/food-uber/food-uber.jpg";
import fU1 from "../images/projects/food-uber/fu1.png";
import fU3 from "../images/projects/food-uber/fu3.png";
import fU4 from "../images/projects/food-uber/fu4.png";
import fU5 from "../images/projects/food-uber/fu5.png";
import fU6 from "../images/projects/food-uber/fu6.png";
import fU7 from "../images/projects/food-uber/fu7.png";
import fU2 from "../images/projects/food-uber/fu2.png";

const projects = [
  {
    id: 1,
    name: "Flexbeats",
    slug: "flexbeats",
    src: flexbeats,
    source: "",
    categories: ["Web", "All"],
    about: "A marketplace to buy and sell beats",
    demo: "http://flexbeats.studio",
    tools: ["HTML", "CSS", "SASS", "React", "Nodejs", "NestJs", "GraphQL"],
    roles: ["FrontEnd Developer", "Project lead"],
    gallery: [],
  },
  {
    id: 2,
    name: "Kodemunit",
    slug: "kodemunit",
    src: kodemunit,
    source: "",
    categories: ["Web", "All"],
    about:
      "Kodemunit is a simple platform where they provide mentorship programmes by connecting learners and dedicated mentors",
    demo: "http://kodemunit.netlify.com",
    tools: ["Figma", "HTML", "CSS", "SASS", "React"],
    roles: ["UX/UI Designer", "Developer"],
    gallery: [],
  },
  {
    id: 3,
    name: "CEEPTz",
    slug: "ceeptz",
    src: ceep,
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
    src: covid,
    source: "http://github.com/bmsteven/corona",
    categories: ["Web", "All"],
    about:
      "Corona Covid19 tracker special made for Tanzanians to provide necessary information on Corona Virus pandemic in Swahili language",
    demo: "http://covid19-tz.netlify.app",
    tools: ["HTML", "CSS", "SASS", "React"],
    roles: ["Developer"],
    gallery: [],
  },
  {
    id: 5,
    name: "Gramath",
    slug: "gramath",
    src: gramath,
    source: "",
    categories: ["Others", "All"],
    about: "Graphic card for kisamvu (Cassava leaves) products",
    demo: "",
    tools: ["Figma"],
    roles: ["Graphics Designer"],
    gallery: [],
  },
  {
    id: 6,
    name: "My Portfolio",
    slug: "bm-dev",
    src: portfolio,
    source: "http://github.com/bmsteven/portfolio-website",
    categories: ["Web", "Design", "All"],
    about: "My Personal Portfolio website which you are looking at right now",
    demo: "http://bm-dev.netlify.app",
    tools: ["Figma", "HTML", "CSS", "SASS", "React"],
    roles: ["UX/UI Designer", "Developer"],
    gallery: [],
  },
  {
    id: 7,
    name: "JobPortal",
    slug: "job-portal",
    src: portal,
    source: "http://github.com/nab-in/portal-frontend",
    categories: ["Design", "Web", "All"],
    about: "A web app to connect job seekers to the job opportunities",
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
    id: 8,
    name: "JobPortal Dashboard",
    slug: "job-portal-dashboard",
    src: portalDashboard,
    source: "http://github.com/nab-in/portal-dashboard",
    categories: ["Design", "Web", "All"],
    about: "A web app to connect job seekers to the job opportunities",
    demo: "https://portaltz-dashboard.herokuapp.com/",
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
    name: "Food Uber App",
    slug: "food-uber-app",
    src: foodUber,
    source: "http://github.com/codeschool-africa/food-uber-client",
    categories: ["Design", "All"],
    about:
      "An app that allows users to order food online currently available as a website",
    demo: "http://food-uber.netlify.app",
    tools: ["Figma", "HTML", "CSS", "SASS", "JavaScript", "React js", "mysql"],
    roles: ["UI Designer", "Frontend Developer", "Backend Developer"],
    gallery: [fU1, fU2, fU3, fU4, fU5, fU6, fU7],
  },
  // {
  //   id: 10,
  //   name: "Soz PNS",
  //   slug: "soz-pns",
  //   src: soz,
  //   categories: ["Design", "Web", "All"],
  //   about: "Music App",
  //   demo: "http://sozthegovt.netlify.app",
  //   tools: ["Figma", "HTML", "CSS", "SASS", "JavaScript", "React js"],
  //   roles: ["UI/UX Designer", "Developer"],
  //   gallery: [],
  // },
  // {
  //   id: 11,
  //   name: "EAIG",
  //   slug: "eaig",
  //   src: EAIG,
  //   categories: ["Design", "All"],
  //   about: "Landing page",
  //   // demo: "http://sozthegovt.netlify.app",
  //   tools: ["Figma"],
  //   roles: ["UI Designer"],
  //   gallery: [],
  // },
];

export default projects;
