import React from "react";

//components
import Header from "../components/header";
import Services from "../components/about/services";
import Hobbies from "../components/about/hobbies";
import Steps from "../components/about/steps";
import Social from "../components/social";
import Footer from "../components/footer";

const About = () => {
  return (
    <div>
      <Header headerClass="about-header">
        <header>
          <h2 className="header secondary-header">About Me</h2>
        </header>
        <p>
          Hello, I'm Benedict Steven. I'm a Web developer who can create unique
          websites. I am a passionate self-taught developer who fell in love
          with programming and creating websites one and a half year ago. Since
          then, I've been experimenting, creating, and learning everything that
          I can about web development. Nothing compares to the feeling of
          creating something from nothing. I am currently available for any
          small freelance projects, as well as full time positions as a web
          designer or developer. Please contact me using the form in contact
          page or using the social media links.
        </p>
      </Header>
      <Social />
      <main className="main-content">
        <Services />
        <Hobbies />
        <Steps />
      </main>
      <Footer />
    </div>
  );
};

export default About;
