import React from "react";

//pose
// import posed, { PoseGroup } from "react-pose";

//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";

//protected-route
import AuthRoute from "./util/auth-route";

//router
import { Switch, Route } from "react-router-dom";

//pages
import Home from "./pages/home";
import About from "./pages/about";
import Resume from "./pages/resume";
import Portfolio from "./projects";
import Contact from "./pages/contact";
import Admin from "./admin";
import Blog from "./blog/";
import Login from "./pages/login";
import Error from "./pages/error";

//styles
import "./styles/styles.css";

// page transition animations with pose
// const RouteContainer = posed.div({
//   enter: { opacity: 1, delay: 100, beforeChildren: false },
//   exit: { opacity: 0 },
// });

const App = ({ ui: { darkMode } }) => {
  return (
    <Route
      render={({ location }) => (
        <div className={darkMode ? "App darkmode" : "App"}>
          <Switch>
            <Route exact path='/' component={Home} key='home' />
            <Route exact path='/about' component={About} key='about' />
            <Route exact path='/resume' component={Resume} key='resume' />
            <Route path='/portfolio' component={Portfolio} key='projects' />
            <Route exact path='/contact' component={Contact} key='contact' />
            <Route path='/blog' component={Blog} key='blog' />
            <Route exact path='/login' key='login' component={Login} />
            <AuthRoute path='/admin' component={Admin} key='admin' />
            <Route component={Error} key='error' />
          </Switch>
        </div>
      )}
    />
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
});

App.propTypes = {
  ui: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {})(App);
