import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

//components
import Header from "../components/header";
import Social from "../components/social";
import Footer from "../components/footer";

const Home = () => {
  const words = useMemo(() => {
    return [
      "Software Designer",
      "Software Developer",
      "Water Engineer",
      "Learner",
      "Awesome Dude",
    ];
  }, []);

  const options = useMemo(() => {
    return {
      strings: words,
      typeSpeed: 120,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
    };
  }, [words]);

  useEffect(() => {
    document.title = "Benedict's Portfolio";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (document.getElementById("text")) {
      const typed = new Typed("#text", options);
      return () => {
        typed.destroy();
      };
    }
  }, [options]);

  return (
    <div className="home-page">
      <Header headerClass="home-header">
        <div className="container">
          <h1 className="span">Hello, I'm Benedict Steven</h1>
          <h2 className="typing header">
            {/* million-ignore */}
            <span id="text"></span>
          </h2>
          <p>
            Create unique and innovative websites, webapps and mobileapps with
            me.
          </p>
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
