import React from "react";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  FaBell,
  FaRegNewspaper,
  MdMessage,
  FaListUl,
} from "react-icons/all";

const Aside = ({ routes }) => {
  return (
    <aside>
      <ul>
        <li>
          <Link to='/admin'>
            <div>
              <MdDashboard className='icon' />
            </div>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to='/admin/blog'>
            <div>
              <FaRegNewspaper className='icon' />
            </div>
            Blog
          </Link>
        </li>
        <li>
          <Link to='/admin/notifications'>
            <div>
              <FaBell className='icon' />
              {/* <span>99+</span> */}
            </div>
            Notifications
          </Link>
        </li>
        <li>
          <Link to='/admin/inbox'>
            <div>
              <MdMessage className='icon' />
              {/* <span>4</span> */}
            </div>
            Messages
          </Link>
        </li>

        <li>
          <Link to='/admin/todo'>
            <div>
              <FaListUl className='icon' />
            </div>
            Todo
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
