import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Social = () => {
  return (
    <div className="social-media-container">
      <ul>
        <li>
          <a
            href="https://linkedin.com/in/benedict-steven/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <FaLinkedinIn className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bmsteven"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/bmsteven_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/bmsteven_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
