import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";

export const ADD_PROJECTS = "ADD_PROJECTS";
export const ADD_GALLERY = "ADD_GALLERY";
export const REMOVE_ARRAY = "REMOVE_ARRAY";
export const ADD_PROJECT = "ADD_PROJECT";

interface ModalState {
  open: boolean;
  projects: {
    list: any[];
    active: string;
  };
  gallery: {
    list: any[];
    active: string;
  };
  project: any;
}

type ModalAction =
  | { type: typeof ADD_PROJECTS; payload: any }
  | { type: typeof ADD_GALLERY; payload: any }
  | { type: typeof ADD_PROJECT; payload: any }
  | { type: typeof REMOVE_ARRAY };

const ModalContext = createContext<ModalState>({
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
});
const ModalDispatch = createContext<Dispatch<ModalAction>>(
  (action: ModalAction) => {}
);

const reducer = (state: ModalState, action: ModalAction): ModalState => {
  // @ts-ignore
  const { type, payload } = action;
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
      };
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
      };
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
      };
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
      };
    default:
      return state;
  }
};

interface ModalProviderProps {
  children: ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps): JSX.Element => {
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
  });

  return (
    <ModalDispatch.Provider value={dispatch}>
      <ModalContext.Provider value={state}>{children}</ModalContext.Provider>
    </ModalDispatch.Provider>
  );
};

export const useModalState = (): ModalState => useContext(ModalContext);
export const useModalDispatch = (): Dispatch<ModalAction> =>
  useContext(ModalDispatch);

export default ModalProvider;
