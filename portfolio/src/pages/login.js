import React, { useEffect } from "react";

import routes from "../data/routes";

//components
import Nav from "../components/nav";
import Footer from "../components/footer";

const Login = ({ ...rest }) => {
  useEffect(() => {
    document.title = "Admin Login - Benedict's Portfolio ";
  }, []);
  return (
    <div className='login-page'>
      <Nav {...rest} navProps='nav-header' routes={routes} />
      <main className='main-content'>
        <div className='container'>
          <h1>Login page</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
