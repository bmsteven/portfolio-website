import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { login } from "../redux/actions/auth";

import routes from "../data/routes";

//components
import Nav from "../components/nav";
import Footer from "../components/footer";

const Login = ({ login, ui: { loading, errors }, ...rest }) => {
  let history = useHistory();
  useEffect(() => {
    document.title = "Admin Login - Benedict's Portfolio ";
  }, []);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email,
      password,
    };
    login(user, history);
  };
  return (
    <div className='login-page'>
      <Nav {...rest} navProps='nav-header' routes={routes} />
      <main className='main-content'>
        <div
          className='container'
          style={{
            maxWidth: "400px",
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
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                placeholder='password'
                id='password'
                onChange={(e) => handleChange(e)}
                name='password'
              />
            </div>
            {errors && (
              <p className='alert error' id='alert'>
                {errors.error}
              </p>
            )}
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
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ui: state.ui,
});

export default connect(mapStateToProps, { login })(Login);
