import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
} from "react-icons/all"

const Details = () => {
  return (
    <section className="details">
      <header className="primary-header contact-header">
        <h2>
          <span></span>Get In Touch
        </h2>
      </header>
      <div className="address-info">
        <ul>
          <li>
            <div className="left">
              <FaMapMarkerAlt className="icon" />
            </div>
            <div className="right">
              <span>Dar Es Salaam, Tanzania</span>
            </div>
          </li>
          <li>
            <div className="left">
              <FaPaperPlane className="icon" />
            </div>
            <div className="right">
              <span>
                <a href="mailto:bmsteve@yahoo.com">bmsteve@yahoo.com</a>
              </span>
            </div>
          </li>
          <li>
            <div className="left">
              <FaPhone className="icon" />
            </div>
            <div className="right">
              <span>
                <a href="tel:+255655392445">+255 655 392 445</a>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div className="contact-social-media">
        <h2>Lets Connect Via</h2>
        <div className="showcase">
          <ul>
            <li>
              <a
                href="http://facebook.com/profile.php?id=100006234616525"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="icon" /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/benedict-steven/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="icon" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/bmsteven_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="icon" /> Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/bmsteven_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://github.com/bmsteven"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" /> Github
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCiqoE5aylKjq_052PfJtU7Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="icon" /> Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Details
