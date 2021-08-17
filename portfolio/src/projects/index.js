import { lazy } from "react"
import { Switch, Route, useRouteMatch } from "react-router-dom"

import routes from "../data/routes"

//components
import Nav from "../components/nav"
import Footer from "../components/footer"

const Projects = lazy(() => import("./pages"))
const Project = lazy(() => import("./pages/project"))

const Portfolio = ({ ...rest }) => {
  let { path } = useRouteMatch()
  return (
    <div className="page portfolio-content">
      <Nav {...rest} navProps="nav-header" routes={routes} />
      <main className="main-content">
        <Switch>
          <Route exact path={`${path}`} key="projects">
            <Projects />
          </Route>
          <Route path={`${path}/:project`}>
            <Project />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default Portfolio
