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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, intersect];
}

const Header = ({ children, image, headerClass, ...rest }) => {
  const [ref, intersect] = useOnScreen({
    rootMargin: "100px"
  });
  return (
    <header ref={ref} className={`page-header ${headerClass}`}>
      <Nav
        {...rest}
        routes={routes}
        navProps={intersect ? `nav__static` : `nav__sticky`}
      />
      <Banner image={image} children={children} />
    </header>
  );
};

export default Header;
