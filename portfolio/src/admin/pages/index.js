import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logout } from "../../redux/actions/auth";

const Home = ({ logout }) => {
  return (
    <div className='container'>
      <h2>Hello from admin home</h2>
      <a href='#!' onClick={logout}>
        Logout
      </a>
    </div>
  );
};

Home.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { logout })(Home);
