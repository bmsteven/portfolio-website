import { useEffect } from "react"

//components
import Header from "../components/header"
import Services from "../components/about/services"
import Hobbies from "../components/about/hobbies"
import Steps from "../components/about/steps"
import Footer from "../components/footer"

const About = () => {
  useEffect(() => {
    document.title = "About Me - Benedict's Portfolio "
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about-page">
      <Header headerClass="about-header">
        <div className="container">
          <header>
            <h2 className="header secondary-header">About Me</h2>
          </header>
          <p>
            Hello, I'm Benedict Steven. I'm a Designer and Developer. I am a
            passionate self-taught developer who fell in love with programming
            and creating websites one and a half year ago. Since then, I've been
            experimenting, creating, and learning everything that I can about
            web development. Nothing compares to the feeling of creating
            something from nothing.
          </p>
          {/* <p>
             I am currently available for any small freelance projects, as well
             as full time positions as a web designer or developer. Please
             contact me using the form in contact page or using the social media
             links.
           </p>*/}
        </div>
      </Header>
      <main className="main-content">
        <Services />
        <Hobbies />
        <Steps />
      </main>
      <Footer />
    </div>
  )
}

export default About
