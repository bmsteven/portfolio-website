import React from "react";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  FaBell,
  FcTodoList,
  MdMessage,
  GrBlog,
} from "react-icons/all";

const Aside = ({ routes }) => {
  return (
    <aside>
      <ul>
        <li>
          <Link to='/admin'>
            <MdDashboard className='icon' /> Dashboard
          </Link>
        </li>
        <li>
          <Link to='/admin/blog'>
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
