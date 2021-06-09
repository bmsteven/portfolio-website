import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//components
import Header from "../components/header";
import Social from "../components/social";
import Footer from "../components/footer";
import Typical from "react-typical";
// @media (prefers-color-scheme: dark) {
//   /*YOUR DARK STYLE HERE*/
// }

const Home = () => {
  useEffect(() => {
    document.title = "Benedict's Portfolio";
  }, []);
  return (
    <div className="home-page">
      <Header headerClass="home-header">
        <div className="container">
          <h1 className="span">Hello, I'm Benedict Steven</h1>
          <h2 className="typing header">
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Designer",
                3000,
                "Software Developer",
                4500,
                "Water Engineer",
                3500,
                "Learner",
                3000,
                "Awesome Dude",
                4500
              ]}
            />
          </h2>
          <p>Create unique and innovative websites, webapps and mobileapps with me.</p>
          <Link to="/portfolio" className="btn btn-primary">
            <span>My Portfolio</span>
          </Link>
        </div>
      </Header>
      <Social />
      <Footer />
    </div>
  );
};

export default Home;
