import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdDashboard,
  FaBell,
  FcTodoList,
  MdMessage,
  GrBlog,
} from "react-icons/all";

const Aside = ({ routes }) => {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <aside>
      <ul>
        <li>
          <Link to='/admin' className={activeRoute ? "active" : ""}>
            <MdDashboard className='icon' /> Dashboard
          </Link>
        </li>
        <li>
          <Link to='/admin/blog' className={activeRoute ? "active" : ""}>
            <GrBlog className='icon' /> Blog
          </Link>
        </li>
        <li>
          <Link to='/admin/notifications'>
            <FaBell className='icon' />
            Notifications <span>3</span>
          </Link>
        </li>
        <li>
          <Link to='/admin/inbox'>
            <MdMessage className='icon' />
            Messages <span>4</span>
          </Link>
        </li>

        <li>
          <Link to='/admin/todo'>
            <FcTodoList className='icon' />
            Todo
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
