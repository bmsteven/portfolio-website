import { Switch, Route } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Resume from "./pages/resume"
import Portfolio from "./projects"
import Contact from "./pages/contact"
import Error from "./pages/error"
import { useUIContext } from "context/context"
import "./styles/styles.css"

const App = () => {
  const { mode } = useUIContext()
  return (
    <Route
      render={({ location }) => (
        <div className={mode === "dark" ? "App darkmode" : "App"}>
          <Switch>
            <Route exact path="/" component={Home} key="home" />
            <Route exact path="/home" component={Home} key="home" />
            <Route exact path="/about" component={About} key="about" />
            <Route exact path="/resume" component={Resume} key="resume" />
            <Route path="/portfolio" component={Portfolio} key="projects" />
            <Route exact path="/contact" component={Contact} key="contact" />
            <Route component={Error} key="error" />
          </Switch>
        </div>
      )}
    />
  )
}

export default App
