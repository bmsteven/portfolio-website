import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";

export const LIGHTMODE = "LIGHTMODE";
export const DARKMODE = "DARKMODE";

interface UiState {
  mode: string;
}

let defaultMode = localStorage.getItem("mode");

if (!defaultMode) localStorage.setItem("mode", "dark");

type UiAction = { type: typeof LIGHTMODE } | { type: typeof DARKMODE };

const UiContext = createContext<UiState>({
  mode: defaultMode ?? "dark",
});
const UiDispatch = createContext<Dispatch<UiAction>>((action: UiAction) => {});

const reducer = (state: UiState, action: UiAction): UiState => {
  const { type } = action;
  switch (type) {
    case LIGHTMODE:
      localStorage.setItem("mode", "light");
      return {
        ...state,
        mode: "light",
      };
    case DARKMODE:
      localStorage.setItem("mode", "dark");
      return {
        ...state,
        mode: "dark",
      };
    default:
      return state;
  }
};

interface UiProviderProps {
  children: ReactNode;
}

const UiProvider = ({ children }: UiProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    mode: defaultMode ?? "dark",
  });

  return (
    <UiDispatch.Provider value={dispatch}>
      <UiContext.Provider value={state}>{children}</UiContext.Provider>
    </UiDispatch.Provider>
  );
};

export const useUIState = (): UiState => useContext(UiContext);
export const useUIDispatch = (): Dispatch<UiAction> => useContext(UiDispatch);

export default UiProvider;
