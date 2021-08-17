import heroLight from "../images/hero-bg-light.jpeg"

const Banner = ({ children }) => {
  return (
    <div className="banner">
      <div className="content">{children}</div>
      <div className="hero-bg">
        <img src={heroLight} alt="hero-bg" />
      </div>
    </div>
  )
}

export default Banner
