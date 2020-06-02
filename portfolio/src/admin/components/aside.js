import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { FaHome } from "react-icons/all";

const Aside = ({ routes }) => {
  // const location = useLocation();
  // const activeRoute = (routeName) => {
  //   return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  // };
  return (
    <aside>
      <ul>
        return (
        <li>
          <Link to={`/admin/}`}></Link>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
