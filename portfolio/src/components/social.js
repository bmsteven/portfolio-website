import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/all";

const Social = () => {
  return (
    <div clas="social-media-container">
      <ul>
        <li>
          <a
            href="https://linkedin.com/in/benedict-steven/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="icon" />
          </a>
        </li>
        <li>
          <a
            href="http://facebook.com/profile.php?id=100006234616525"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/bmsteven_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/bmsteven_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
