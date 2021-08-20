import { createContext, useContext, useReducer } from "react"

export const LIGHTMODE = "LIGHTMODE"
export const DARKMODE = "DARKMODE"

const ModalContext = createContext()
const ModalDispatch = createContext()

const reducer = (state, action) => {
  const { type } = action
  switch (type) {
    default:
      return state
  }
}

const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    open: false,
  })
  return (
    <ModalDispatch.Provider value={dispatch}>
      <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
    </ModalDispatch.Provider>
  )
}

export const useModalContext = () => useContext(ModalContext)
export const useModalDispatch = () => useContext(ModalDispatch)

export default ModalProvider
