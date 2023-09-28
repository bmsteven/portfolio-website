import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { useUIState } from "./context/context";
import { useModalState } from "./context/modal";
import Modal from "./components/modal/Modal";
import "./styles/styles.css";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Resume = lazy(() => import("./pages/resume"));
const Portfolio = lazy(() => import("./projects"));
const Contact = lazy(() => import("./pages/contact"));
const Projects = lazy(() => import("./projects/pages"));
const Project = lazy(() => import("./projects/pages/project"));
const Error = lazy(() => import("./pages/error"));

const App = () => {
  const { mode } = useUIState();
  const { open } = useModalState();

  return (
    <div className={mode === "dark" ? "App darkmode" : "App"}>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} key="home" />
        <Route path="/home" element={<Home />} key="home" />
        <Route path="/about" element={<About />} key="about" />
        <Route path="/resume" element={<Resume />} key="resume" />
        <Route path="/portfolio" element={<Portfolio />} key="projects">
          <Route
            path={`/portfolio`}
            key="all-projects"
            element={<Projects />}
          />
          <Route path={`/portfolio/:project`} element={<Project />} />
        </Route>
        <Route path="/contact" element={<Contact />} key="contact" />
        <Route element={<Error />} key="error" />
      </Routes>
      {open && <Modal />}
    </div>
  );
};

export default App;
