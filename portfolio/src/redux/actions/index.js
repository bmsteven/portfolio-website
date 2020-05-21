import { DARK_MODE, LIGHT_MODE} from "../types"

export const useDarkMode = () => (dispatch) => {
  dispatch({type: DARK_MODE})
}

export const useLightMode = () => (dispatch) => {
  dispatch({type: LIGHT_MODE})
}