import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaMoon, FaSun, RiMenu3Line, IoMdClose } from "react-icons/all"
import logo from "../images/logo.png"
import logoLight from "../images/logo-dark.png"
import {
  useUIContext,
  useUIDispatch,
  LIGHTMODE,
  DARKMODE,
} from "context/context"

const Nav = ({ routes, navProps }) => {
  const dispatch = useUIDispatch()

  const { mode } = useUIContext()

  const location = useLocation()
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : ""
  }

  const [navOpen, setNavOpen] = useState(false)

  const openMenu = () => {
    setNavOpen(true)
    document.body.classList.add("no-scrolling")
  }

  const closeMenu = () => {
    setNavOpen(false)
    document.body.classList.remove("no-scrolling")
  }

  const lightMode = () => {
    dispatch({
      type: LIGHTMODE,
    })
  }

  const darkMode = () => {
    dispatch({
      type: DARKMODE,
    })
  }

  return (
    <div className={`nav ${navProps}`}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img
              src={mode === "dark" ? `${logo}` : `${logoLight}`}
              alt="bm dev logo"
            />
          </Link>
        </div>
        <div className="burger open-menu" onClick={openMenu}>
          <RiMenu3Line />
        </div>
        <nav className={navOpen ? "open" : ""}>
          <div className="burger close-menu" onClick={closeMenu}>
            <IoMdClose />
          </div>
          <ul>
            {routes.map((prop, key) => {
              return (
                <li
                  key={key}
                  className={navOpen ? `navlink navlink-${prop.id}` : ""}
                >
                  <Link
                    to={prop.path}
                    className={
                      activeRoute(prop.path) + (prop.pro ? " active" : "")
                    }
                    onClick={closeMenu}
                  >
                    {prop.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="change-mode">
          {mode === "dark" ? (
            <span onClick={lightMode}>
              <FaSun className="icon icon-light" />
            </span>
          ) : (
            <span onClick={darkMode}>
              <FaMoon className="icon icon-dark" />
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Nav
