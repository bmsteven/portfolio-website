import React from "react";

//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";

//router
import { Switch, Route } from "react-router-dom";

//pages
import Home from "./pages/home";
import About from "./pages/about";
import Resume from "./pages/resume";
import Portfolio from "./projects";
import Contact from "./pages/contact";
import Error from "./pages/error";

//styles
import "./styles/styles.css";

const App = ({ ui: { darkMode } }) => {
  return (
    <div className={darkMode ? "App darkmode" : "App"}>
      <Switch>
        <Route exact path="/" component={Home} key="home" />
        <Route exact path="/about" component={About} key="about" />
        <Route exact path="/resume" component={Resume} key="resume" />
        <Route path="/portfolio" component={Portfolio} key="projects" />
        <Route exact path="/contact" component={Contact} key="contact" />
        <Route component={Error} key="error" />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  ui: state.ui
});

App.propTypes = {
  ui: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  {}
)(App);
