import React, { useEffect } from "react";

import routes from "../data/routes";

import Form from "../components/contact/form";
import Details from "../components/contact/details";

//components
import Nav from "../components/nav";
import Footer from "../components/footer";

const Contact = ({ ...rest }) => {
  useEffect(() => {
    document.title = "Contact me - Benedict's Portfolio ";
  }, []);
  return (
    <div className="contact-page">
      <Nav {...rest} navProps="nav-header" routes={routes} />
      <main className="main-content">
        <div className="container">
          <Details />
          <span>Or</span>
          <Form />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
