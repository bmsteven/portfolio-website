import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

//pages
import Projects from "./pages/index";
import Project from "./pages/project";

import routes from "../data/routes";

//components
import Nav from "../components/nav";
import Footer from "../components/footer";

const Portfolio = ({ ...rest }) => {
  let { path } = useRouteMatch();
  return (
    <div className="page portfolio-content">
      <Nav {...rest} navProps="nav-header" routes={routes} />
      <Switch>
        <Route exact path={`${path}`} key="projects">
          <Projects />
        </Route>
        <Route path={`${path}/:project`}>
          <Project />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default Portfolio;
