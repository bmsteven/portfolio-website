import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

const Home = ({ logout }) => {
  return (
    <div className=''>
      <h2>Hello from admin home</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(Home);
