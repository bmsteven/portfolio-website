import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AuthRoute = ({
  auth: { isAuthenticated, loading },
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={({ location }) =>
      !isAuthenticated && !loading ? (
        <Redirect
          to={{
            pathname: "/",
            state: { from: location }
          }}
        />
      ) : (
        <Component {...location} />
      )
    }
  />
);

const mapStateToProps = state => ({
  auth: state.auth
});

AuthRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(AuthRoute);
