import React, { useState, useEffect, useRef } from "react";
import routes from "../data/routes";
import Nav from "./nav";
import Banner from "./banner";

function useOnScreen(options) {
  const ref = useRef();
  const [intersect, setIntersect] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersect(entry.isIntersecting);
    }, options);

    let el = ref.current;

    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [ref, options]);

  return [ref, intersect];
}

const Header = ({ children, image, headerClass, ...rest }) => {
  const [ref, intersect] = useOnScreen({
    rootMargin: "-200px",
    // threshold: [1],
  });
  return (
    <header ref={ref} className={`page-header ${headerClass}`}>
      <Nav
        {...rest}
        routes={routes}
        navProps={intersect ? `nav__sticky` : `nav__static`}
      />
      <Banner image={image} children={children} />
    </header>
  );
};

export default Header;
