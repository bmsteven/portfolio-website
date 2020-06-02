import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

//pages
import Home from "./pages";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logout } from "../redux/actions/auth";
import CreatePost from "./pages/create-post";

import routes from "../data/routes";

//components
import Nav from "../components/nav";
import Footer from "../components/footer";

const Admin = ({ logout, ...rest }) => {
  let { path } = useRouteMatch();
  useEffect(() => {
    document.title = "Admin Panel - Benedict's Portfolio";
  }, []);
  return (
    <div className='page admin-content'>
      <Nav {...rest} navProps='nav-header' routes={routes} />
      <main className='main-content'>
        <Switch>
          <Route exact path={`${path}`} key='projects'>
            <Home />
          </Route>
          <Route path={`${path}/create-post`}>
            <CreatePost />
          </Route>
        </Switch>
      </main>
      <Footer>
        <span
          style={{
            marginRight: "20px",
          }}
        >
          <a href='#!' onClick={logout}>
            Logout
          </a>
        </span>
      </Footer>
    </div>
  );
};

Admin.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { logout })(Admin);
