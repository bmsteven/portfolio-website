import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/all";
import { useDarkMode, useLightMode } from "../redux/actions";
import logo from "../images/logo.png";
import logoLight from "../images/logo-dark.png";

const Nav = ({
  routes,
  navProps,
  ui: { darkMode },
  useDarkMode,
  useLightMode
}) => {
  const location = useLocation();
  const activeRoute = routeName => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  return (
    <div className={`nav ${navProps}`}>
      <div className="logo">
        <Link to="/">
          <img src={darkMode ? `${logo}` : `${logoLight}`} alt="bm dev logo" />
        </Link>
      </div>
      <div className="burger">
        <span />
      </div>
      <nav>
        <ul>
          {routes.map((prop, key) => {
            return (
              <li key={key}>
                <Link
                  to={prop.path}
                  className={
                    activeRoute(prop.path) + (prop.pro ? " active" : "")
                  }
                >
                  {prop.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="change-mode">
        {darkMode ? (
          <span onClick={useLightMode}>
            <FaSun className="icon icon-light" />
          </span>
        ) : (
          <span onClick={useDarkMode}>
            <FaMoon className="icon icon-dark" />
          </span>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  ui: state.ui
});

Nav.propTypes = {
  ui: PropTypes.object.isRequired,
  useDarkMode: PropTypes.func.isRequired,
  useLightMode: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { useDarkMode, useLightMode }
)(Nav);
