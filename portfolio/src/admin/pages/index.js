import React from "react";
import Voice from "../components/voice"
// import PropTypes from "prop-types";
import { connect } from "react-redux";

const Home = ({ logout }) => {
  return (
    <div className=''>
      <h2>Hello Boss, Welcome back</h2>
      <p>How are you today?</p>
      <Voice />
    </div>
  );
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(Home);
