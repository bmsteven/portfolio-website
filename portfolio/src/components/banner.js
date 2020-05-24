import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import heroLight from "../images/hero-bg-light.jpeg";
import heroDark from "../images/hero-bg-dark.jpg";

const Banner = ({ children, ui: { darkMode } }) => {
  return (
    <div className="banner">
      <div className="content">{children}</div>
      <div className="hero-bg">
        <img src={darkMode ? heroDark : heroLight} alt="hero-bg" />
      </div>
    </div>
  );
};

Banner.prototype = {
  ui: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  ui: state.ui
});

export default connect(
  mapStateToProps,
  {}
)(Banner);
