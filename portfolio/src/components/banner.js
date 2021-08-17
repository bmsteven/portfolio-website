import heroLight from "../images/hero-bg-light.jpeg"
import heroDark from "../images/hero-bg-dark.jpg"
import { useUIContext } from "context/context"

const Banner = ({ children }) => {
  const { mode } = useUIContext()
  return (
    <div className="banner">
      <div className="content">{children}</div>
      <div className="hero-bg">
        <img src={mode === "dark" ? heroDark : heroLight} alt="hero-bg" />
      </div>
    </div>
  )
}

export default Banner
