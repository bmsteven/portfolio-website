import React, {useEffect} from "react";
import axios from "axios";
// import jwtDecode from "jwt-decode";

//redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import store from "./redux/store";
//import { LOGIN_SUCCESS } from "./redux/types";
//import { logout } from "./redux/actions/auth";
//import { getPosts } from "./redux/actions/index";

//protected-route
//import AuthRoute from "./util/auth-route";

//router
import { Switch, Route } from "react-router-dom";

//pages
import Home from "./pages/home";
import About from "./pages/about";
import Resume from "./pages/resume";
import Portfolio from "./projects";
import Contact from "./pages/contact";
//import Admin from "./admin";
//import Blog from "./blog/";
//import Login from "./pages/login";
import Error from "./pages/error";

//styles
import "./styles/styles.css";

//setting baseUrl
//axios.defaults.baseURL =
 // "https://us-central1-bmsteven-4db5f.cloudfunctions.net/api";

//const token = localStorage.FBIdToken;
//if (token) {
 // const decodedToken = jwtDecode(token);
 // if (decodedToken.exp * 1000 < Date.now()) {
  //  store.dispatch(logout());
   // window.location.href = "/login";
  //} else {
   // store.dispatch({ type: LOGIN_SUCCESS });
   // axios.defaults.headers.common["Authorization"] = token;
  //}
//}

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
           // <Route path='/blog' component={Blog} key='blog' />
           // <Route exact path='/login' key='login' component={Login} />
           // <AuthRoute path='/admin' component={Admin} key='admin' />
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
