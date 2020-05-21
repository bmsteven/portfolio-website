import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun, RiMenu3Line, IoMdClose } from "react-icons/all";
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

  const [navOpen, setNavOpen] = useState(false);

  const openMenu = () => {
    setNavOpen(true);
  };

  const closeMenu = () => {
    setNavOpen(false);
  };

  return (
    <div className={`nav ${navProps}`}>
      <div className="logo">
        <Link to="/">
          <img src={darkMode ? `${logo}` : `${logoLight}`} alt="bm dev logo" />
        </Link>
      </div>
      <div className="burger open-menu" onClick={openMenu}>
        <RiMenu3Line />
      </div>
      <nav className={navOpen ? "open" : ""}>
        <div className="burger close-menu" onClick={closeMenu}>
          <IoMdClose />
        </div>
        <ul>
          {routes.map((prop, key) => {
            return (
              <li
                key={key}
                className={navOpen ? `navlink navlink-${prop.id}` : ""}
              >
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
