import {
  DARK_MODE,
  LIGHT_MODE,
  SET_LOADING,
  STOP_LOADING,
  SET_ERRORS,
  ClEAR_ERRORS,
  SUCCESS_MESSAGE
} from "../types";

const initialState = {
  darkMode: localStorage.getItem("darkMode"),
  loading: false,
  errors: null,
  message: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LIGHT_MODE:
      localStorage.setItem("darkMode", false);
      return {
        ...state,
        darkMode: false,
      };
    case DARK_MODE:
      localStorage.setItem("darkMode", true);
      return {
        ...state,
        darkMode: true,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: payload,
      };
    case ClEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };
    case SUCCESS_MESSAGE:
      return {
        ...state,
        message: payload
      }
    default:
      return state;
  }
}
