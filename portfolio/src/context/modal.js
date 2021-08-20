import { createContext, useContext, useReducer } from "react"

export const ADD_PROJECTS = "ADD_PROJECTS"
export const ADD_GALLERY = "ADD_GALLERY"
export const REMOVE_ARRAY = "REMOVE_ARRAY"
export const ADD_PROJECT = "ADD_PROJECT"

const ModalContext = createContext()
const ModalDispatch = createContext()

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_PROJECTS:
      return {
        ...state,
        open: true,
        projects: payload,
        project: {},
        gallery: {
          list: [],
          active: "",
        },
      }
    case ADD_GALLERY:
      return {
        ...state,
        open: true,
        gallery: payload,
        project: {},
        projects: {
          list: [],
          active: "",
        },
      }
    case ADD_PROJECT:
      return {
        ...state,
        open: true,
        project: payload,
        projects: {
          list: [],
          active: "",
        },
        gallery: {
          list: [],
          active: "",
        },
      }
    case REMOVE_ARRAY:
      return {
        open: false,
        project: {},
        projects: {
          list: [],
          active: "",
        },
        gallery: {
          list: [],
          active: "",
        },
      }
    default:
      return state
  }
}

const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    open: false,
    projects: {
      list: [],
      active: "",
    },
    gallery: {
      list: [],
      active: "",
    },
    project: {},
  })
  return (
    <ModalDispatch.Provider value={dispatch}>
      <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
    </ModalDispatch.Provider>
  )
}

export const useModalState = () => useContext(ModalContext)
export const useModalDispatch = () => useContext(ModalDispatch)

export default ModalProvider
