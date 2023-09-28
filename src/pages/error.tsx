import { useEffect } from "react"

import routes from "../data/routes"

//components
import Nav from "../components/nav"
import Footer from "../components/footer"

const Error = ({ ...rest }) => {
  useEffect(() => {
    document.title = "404 Page Not Found - Benedict's Portfolio "
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="contact-page">
      <Nav {...rest} navProps="nav-header" routes={routes} />
      <main className="main-content">
        <div className="container">
          <h1>Oooops Page Not found</h1>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Error
