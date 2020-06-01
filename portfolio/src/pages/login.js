import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import routes from "../data/routes";

//components
import Nav from "../components/nav";
import Footer from "../components/footer";

const Login = ({ ui: { loading }, ...rest }) => {
  useEffect(() => {
    document.title = "Admin Login - Benedict's Portfolio ";
  }, []);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='login-page'>
      <Nav {...rest} navProps='nav-header' routes={routes} />
      <main className='main-content'>
        <div
          className='container'
          style={{
            maxWidth: "400px",
            minWidth: "90%"
          }}
        >
          <header className='primary-header'>
            <span></span>
            <h2>Admin Login</h2>
          </header>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='field-group'>
              <label htmlFor='Email'>Email:</label>
              <input
                type='email'
                placeholder='Email Address'
                id='email'
                name='email'
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className='field-group'>
              <label htmlFor='password'>Subject:</label>
              <input
                type='text'
                placeholder='password'
                id='password'
                onChange={(e) => handleChange(e)}
                name='password'
              />
            </div>
            {/* {message && (
              <p
                className={
                  message === "Success" ? "alert success" : "alert error"
                }
                id='alert'
              >
                {message === "Success"
                  ? "Your message was sent successful, will get back to you ASAP"
                  : "Error while submitting you message, please try again"}
              </p>
            )} */}
            {/* {error && (
              <p className='alert error' id='alert'>
                {error}
              </p>
            )} */}
            <p>
              Not an Admin? <Link to='/'>Go Back Home</Link>
            </p>
            <button
              type='submit'
              className='btn btn-primary'
              disabled={loading}
            >
              <span>{loading ? "Please Wait..." : "Login"}</span>
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

Login.propTypes = {
  ui: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  ui: state.auth,
});

export default connect(mapStateToProps, {})(Login);
