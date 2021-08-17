import { createContext, useContext, useReducer } from "react"

export const LIGHTMODE = "LIGHTMODE"
export const DARKMODE = "DARKMODE"

const UiContext = createContext()
const UiDispatch = createContext()

let defaultMode = localStorage.getItem("mode")

if (!defaultMode) localStorage.setItem("mode", "dark")

const reducer = (state, action) => {
  const { type } = action
  switch (type) {
    case LIGHTMODE:
      localStorage.setItem("mode", "light")
      return {
        ...state,
        mode: "light",
      }
    case DARKMODE:
      localStorage.setItem("mode", "dark")
      return {
        ...state,
        mode: "dark",
      }
    default:
      return state
  }
}

const UiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    mode: defaultMode,
  })
  return (
    <UiDispatch.Provider value={dispatch}>
      <UiContext.Provider value={state}>{children}</UiContext.Provider>
    </UiDispatch.Provider>
  )
}

export const useUIContext = () => useContext(UiContext)
export const useUIDispatch = () => useContext(UiDispatch)

export default UiProvider
