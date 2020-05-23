import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

//pages
import Home from "./pages";
import CreatePost from "./pages/create-post";

import routes from "../data/routes";

//components
import Nav from "../components/nav";
import Footer from "../components/footer";

const Admin = ({ ...rest }) => {
  let { path } = useRouteMatch();
  return (
    <div className='page admin-content'>
      <Nav {...rest} navProps='nav-header' routes={routes} />
      <main class='main-content'>
        <Switch>
          <Route exact path={`${path}`} key='projects'>
            <Home />
          </Route>
          <Route path={`${path}/create-post`}>
            <CreatePost />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
