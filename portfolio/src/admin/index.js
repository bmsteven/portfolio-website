import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../redux/actions/auth";

//pages
import Home from "./pages";
import Post from "./pages/posts";
import Todo from "./pages/todo";
import Message from "./pages/message";
import Notifications from "./pages/notifications";

import routes from "../data/routes";
// import adminRoutes from "../data/admin-routes";

//components
import Nav from "../components/nav";
import Footer from "../components/footer";
import Aside from "./components/aside";

const Admin = ({ logout, ...rest }) => {
  let { path } = useRouteMatch();
  useEffect(() => {
    document.title = "Admin Panel - Benedict's Portfolio";
  }, []);
  return (
    <div className='page admin-content'>
      <Nav {...rest} navProps='nav-header' routes={routes} />
      <main className='main-content'>
        <div class='container'>
          <Aside />
          <div class='admin-main-content'>
            <Switch>
              <Route exact path={`${path}`} key='admin'>
                <Home />
              </Route>
              <Route path={`${path}/blog`} key='admin/blog'>
                <Post />
              </Route>
              <Route path={`${path}/inbox`} key='admin/inbox'>
                <Message />
              </Route>
              <Route path={`${path}/notifications`} key='admin/notofocations'>
                <Notifications />
              </Route>
              <Route path={`${path}/todo`} key='admin/todo'>
                <Todo />
              </Route>
            </Switch>
          </div>
        </div>
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
