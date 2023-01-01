import { lazy, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { useUIState } from "context/context"
import { useModalState } from "context/modal"
import Modal from "components/modal/Modal"
import "./styles/styles.css"

const home = lazy(() => import("./pages/home"))
const about = lazy(() => import("./pages/about"))
const resume = lazy(() => import("./pages/resume"))
const portfolio = lazy(() => import("./projects"))
const contact = lazy(() => import("./pages/contact"))
const error = lazy(() => import("./pages/error"))

const App = () => {
  const { mode } = useUIState()
  const { open } = useModalState()

  return (
    <Route
      render={({ location }) => (
        <div className={mode === "dark" ? "App darkmode" : "App"}>
          <Switch>
            <Route exact path="/" component={home} key="home" />
            <Route exact path="/home" component={home} key="home" />
            <Route exact path="/about" component={about} key="about" />
            <Route exact path="/resume" component={resume} key="resume" />
            <Route path="/portfolio" component={portfolio} key="projects" />
            <Route exact path="/contact" component={contact} key="contact" />
            <Route component={error} key="error" />
          </Switch>
          {open && <Modal />}
        </div>
      )}
    />
  )
}

export default App
