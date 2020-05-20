import React from "react";
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
  return (
    <div>
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
                "Web Developer",
                4500,
                "Learner",
                3000,
                "Awesome Dude",
                4500
              ]}
            />
          </h2>
          <p>Create unique and innovative websites and webapps with me.</p>
          <Link to="/portfolio" className="btn bnt-primary">
            My Portfolio
          </Link>
        </div>
      </Header>
      <Social />
      <Footer />
    </div>
  );
};

export default Home;
